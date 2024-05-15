"use client";
import React, { useEffect } from 'react';
import { DecipherFrontendConfig } from './types/decipher-types';
import Decipher from './decipher';

const WithDecipher: React.FC<DecipherFrontendConfig> = ({ customerId, codebaseId, user }) => {
    useEffect(() => {
        Decipher.init({ customerId, codebaseId, user });
    }, [customerId, codebaseId, user]);

    return null; // We render nothing; component exists just to start/stop capture (for now).
};

export default WithDecipher;
