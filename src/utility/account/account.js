import { detectAccountChange as mmDetectAccountChange  } from './metamask';

export async function detectAccountChange(walletType, callback) {
    if(walletType == 'metamask') {
        mmDetectAccountChange(callback);
    }
}

export function getActiveAccount(walletType) {
    if(walletType == 'metamask') {
        return window.ethereum.selectedAddress;
    }
}