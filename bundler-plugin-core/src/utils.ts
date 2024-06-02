import crypto from "crypto";

export function stringToUUID(str: string): string {
  const md5sum = crypto.createHash("md5");
  md5sum.update(str);
  const md5Hash = md5sum.digest("hex");

  // Position 16 is fixed to either 8, 9, a, or b in the uuid v4 spec (10xx in binary)
  // RFC 4122 section 4.4
  const v4variant = ["8", "9", "a", "b"][
    md5Hash.substring(16, 17).charCodeAt(0) % 4
  ] as string;

  return (
    md5Hash.substring(0, 8) +
    "-" +
    md5Hash.substring(8, 12) +
    "-4" +
    md5Hash.substring(13, 16) +
    "-" +
    v4variant +
    md5Hash.substring(17, 20) +
    "-" +
    md5Hash.substring(20)
  ).toLowerCase();
}
