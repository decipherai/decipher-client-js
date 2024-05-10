import { initLogObserver, LogData } from "./console-utils"; 
type ConsoleMessage = {
  message: string;
  level: string;
  timestamp: string;
};

export class DecipherConsole {
  private isInstrumented: boolean = false;
  private consoleMessages: ConsoleMessage[] = [];
  private restoreConsole?: () => void;

  constructor() {}

  private processLog = (logData: LogData) => {
    // Updated to match the structure used in decipher-console.ts
    const timestamp = new Date().toISOString();
    const message = logData.payload.join(" ");
    this.consoleMessages.push({ message, level: logData.level, timestamp });
  };
  public instrumentConsole() {
    if (this.isInstrumented) return;

    // Initiate logging observing and store the return value, which we will use later
    // to reset console logging.
    this.restoreConsole = initLogObserver(this.processLog, {});

    this.isInstrumented = true;
  }

  public getMessages() {
    return this.consoleMessages;
  }

  public clearMessages() {
    this.consoleMessages = [];
  }

  public resetConsole() {
    // Use the stored restoreConsole function to restore the original console methods
    if (this.restoreConsole) {
      this.restoreConsole();
      this.restoreConsole = undefined;
      this.isInstrumented = false;
    }
  }
}
