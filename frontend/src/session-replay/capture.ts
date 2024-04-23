import * as rrweb from "rrweb";
import { v4 as uuidv4 } from "uuid";
import {
  type eventWithTime,
  type listenerHandler,
  RecordPlugin,
} from "@rrweb/types";
import { DecipherFrontendConfig } from "../types/decipher-types";
const BASE_URL = "https://prod.getdecipher.com";
const RECORDING_BUFFER_TIMEOUT = 7000;

interface EventBuffer {
  data: eventWithTime[];
}

class DecipherRecording {
  private buffer: EventBuffer = { data: [] };
  private flushTimer: ReturnType<typeof setTimeout> | null = null;
  private sessionId: string = "";
  private customerId: DecipherFrontendConfig["customerId"];
  private codebaseId: DecipherFrontendConfig["codebaseId"];
  private plugins: RecordPlugin[];

  constructor({ customerId, codebaseId }: DecipherFrontendConfig) {
    this.customerId = customerId;
    this.codebaseId = codebaseId;
    this.plugins = [
      rrweb.getRecordConsolePlugin({
        // TODO: Consider adding "log" back. Right now we're really only using "error".
        level: ["info", "warn", "error"],
        lengthThreshold: 10000,
        stringifyOptions: {
          stringLengthLimit: 1000,
          numOfKeysLimit: 100,
          depthOfLimit: 1,
        },
        logger: window.console,
      }),
    ];
  }
  public startRecording(): listenerHandler | undefined {
    this.sessionId = uuidv4();
    this.buffer = { data: [] };

    const stopRecording =
      rrweb.record({
        emit: (event) => {
          this.handleEventBuffering(event);
        },
        plugins: this.plugins,
      }) || undefined;

    return stopRecording;
  }

  private flushBuffer() {
    if (this.flushTimer) {
      clearTimeout(this.flushTimer);
      this.flushTimer = null;
    }
    if (this.buffer.data.length > 0) {
      fetch(`${BASE_URL}/api/store_session`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          events: this.buffer.data,
          sessionId: this.sessionId,
          customerId: this.customerId,
          codebaseId: this.codebaseId,
        }),
      });

      this.buffer = { data: [] };
    }
  }

  private handleEventBuffering(event: any) {
    this.buffer.data.push(event);

    if (!this.flushTimer) {
      this.flushTimer = setTimeout(() => {
        this.flushBuffer();
      }, RECORDING_BUFFER_TIMEOUT);
    }
  }
}

export { DecipherRecording };
