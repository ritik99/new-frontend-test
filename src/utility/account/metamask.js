export function detectAccountChange(callback) {
    window.ethereum.on('accountsChanged', function (accounts) {
        callback(accounts[0]);
    });
}