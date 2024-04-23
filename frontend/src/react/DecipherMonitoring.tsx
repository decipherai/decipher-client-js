import React, { useEffect } from 'react';
import { DecipherRecording } from '../session-replay/capture';
import { DecipherFrontendConfig } from '../types/decipher-types';

const WithDecipher: React.FC<DecipherFrontendConfig> = ({ customerId, codebaseId }) => {
    useEffect(() => {
        if (!customerId || !codebaseId) {
            console.error("DecipherCaptureComponent requires both customerId and codebaseId");
            return;
        }
        const decipherRecording = new DecipherRecording({ customerId, codebaseId });
        const stopRecording = decipherRecording.startRecording();

        // Set up exception capturing
        const originalOnError = window.onerror;
        const originalOnUnhandledRejection = window.onunhandledrejection;

        return () => { // Stop recording and error capturing on unmount.
            stopRecording?.();

            window.onerror = originalOnError;
            window.onunhandledrejection = originalOnUnhandledRejection;
        };
    }, [customerId, codebaseId]);

    return null; // We render nothing; component exists just to start/stop capture (for now).
};

export default WithDecipher;
