import { isAddress } from 'ethers'; // ethers v6 (or use utils.isAddress in v5)

/**
 * Validates an Ethereum wallet address.
 * @param address - The Ethereum address to validate.
 * @returns `true` if valid, otherwise `false`.
 */
export function isValidEthereumAddress(address: string): boolean {
    // Basic regex check for 0x-prefixed, 40-hex-character address
    const basicRegex = /^0x[a-fA-F0-9]{40}$/;
    if (!basicRegex.test(address)) return false;

    // Use ethers.js for checksum validation (ensures correct case sensitivity)
    return isAddress(address);
}

export function isValidEmail(email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export function isValidPassword(password: string) {
    const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
    return passwordRegex.test(password);
}
