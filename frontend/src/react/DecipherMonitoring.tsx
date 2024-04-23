import React, { useEffect } from 'react';
import { DecipherRecording } from '../session-replay/capture';
import { DecipherFrontendConfig } from '../types/decipher-types';

const DecipherCaptureComponent: React.FC<DecipherFrontendConfig> = ({ customerId, codebaseId }) => {
    useEffect(() => {
        if (!customerId || !codebaseId) {
            console.error("DecipherCaptureComponent requires both customerId and codebaseId");
            return;
        }
        const decipherRecording = new DecipherRecording({ customerId, codebaseId });
        const stopRecording = decipherRecording.startRecording();
        return () => { // Stop recording on unmount.
            stopRecording?.();
        };
    }, [customerId, codebaseId]);

    return null; // We render nothing; component exists just to start/stop capture (for now).
};

export default DecipherCaptureComponent;
