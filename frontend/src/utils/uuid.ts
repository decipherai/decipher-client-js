// UUID4 generator from https://github.com/getsentry/sentry-javascript/blob/625462908563cdfdf806fcc481ffc479cb36c973/packages/utils/src/misc.ts#L24.

import { GLOBAL_OBJ } from "@decipher-sdk/utils";

interface CryptoInternal {
    getRandomValues(array: Uint8Array): Uint8Array;
    randomUUID?(): string;
}

/** An interface for common properties on global */
interface CryptoGlobal {
    msCrypto?: CryptoInternal;
    crypto?: CryptoInternal;
}

/**
 * UUID4 generator
 *
 * @returns string Generated UUID4.
 */
export function uuid4(): string {
    const gbl = GLOBAL_OBJ as typeof GLOBAL_OBJ & CryptoGlobal;
    const crypto = gbl.crypto || gbl.msCrypto;

    let getRandomByte = (): number => Math.random() * 16;
    try {
        if (crypto && crypto.randomUUID) {
            return crypto.randomUUID().replace(/-/g, '');
        }
        if (crypto && crypto.getRandomValues) {
            getRandomByte = () => {
                // crypto.getRandomValues might return undefined instead of the typed array
                // in old Chromium versions (e.g. 23.0.1235.0 (151422))
                // However, `typedArray` is still filled in-place.
                // @see https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues#typedarray
                const typedArray = new Uint8Array(1);
                crypto.getRandomValues(typedArray);
                return typedArray[0];
            };
        }
    } catch (_) {
        // some runtimes can crash invoking crypto
        // https://github.com/getsentry/sentry-javascript/issues/8935
    }

    // http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/2117523#2117523
    // Concatenating the following numbers as strings results in '10000000100040008000100000000000'
    return (([1e7] as unknown as string) + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, c =>
        // eslint-disable-next-line no-bitwise
        ((c as unknown as number) ^ ((getRandomByte() & 15) >> ((c as unknown as number) / 4))).toString(16),
    );
}