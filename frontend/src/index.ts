import { DecipherRecording } from './session-replay/capture';
import { DecipherFrontendConfig } from './types/decipher-types';

function initDecipherCapture({ customerId, codebaseId }: DecipherFrontendConfig): void {
    const decipherRecording = new DecipherRecording({ customerId, codebaseId });
    const stopRecording = decipherRecording.startRecording();

    // Ensure recording stops when the window is unloaded
    window.addEventListener('beforeunload', () => {
        stopRecording?.();
    });
}

initDecipherCapture({
    customerId: "",
    codebaseId: "frontend"
});