import * as rrweb from "rrweb";
import { v4 as uuidv4 } from "uuid";
import { type eventWithTime, type listenerHandler } from "@rrweb/types";

let buffer: EventBuffer = { data: [], sessionId: "" };
let flushTimer: ReturnType<typeof setTimeout> | null = null;

const BASE_URL = "https://prod.getdecipher.com";

const RECORDING_BUFFER_TIMEOUT = 7000;

interface EventBuffer {
  data: eventWithTime[];
  sessionId: string;
}

function startRecording(): listenerHandler | undefined {
  const sid = uuidv4();
  buffer = { data: [], sessionId: sid };

  const stopRecording =
    rrweb.record({
      emit(event) {
        handleEventBuffering(event);
      },
      plugins: [
        rrweb.getRecordConsolePlugin({
          level: ["info", "warn", "error"],
          lengthThreshold: 10000,
          stringifyOptions: {
            stringLengthLimit: 1000,
            numOfKeysLimit: 100,
            depthOfLimit: 1,
          },
          logger: window.console,
        }),
      ],
    }) || undefined;

  return stopRecording;
}

function flushBuffer() {
  if (flushTimer) {
    clearTimeout(flushTimer);
    flushTimer = null;
  }
  if (buffer.data.length > 0) {
    fetch(`${BASE_URL}/api/store_session`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        events: buffer.data,
        sessionId: buffer.sessionId,
      }),
    });

    buffer = { data: [], sessionId: buffer.sessionId };
  }
}

function handleEventBuffering(event: any) {
  buffer.data.push(event);

  if (!flushTimer) {
    flushTimer = setTimeout(() => {
      flushBuffer();
    }, RECORDING_BUFFER_TIMEOUT);
  }
}

export { startRecording };
