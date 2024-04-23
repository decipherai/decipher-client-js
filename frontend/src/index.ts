import { startRecording } from './session-replay/capture'; // Import startRecording

interface DecipherFrontendConfig {
    customerId: string;
    codebaseId: string;
}

function initDecipherCapture({ customerId, codebaseId }: DecipherFrontendConfig): void {
    const stopRecording = startRecording();

    // Ensure recording stops when the window is unloaded
    window.addEventListener('beforeunload', () => {
        stopRecording?.();
    });
}

initDecipherCapture({
    customerId: "",
    codebaseId: "frontend"
});