var addressToSymbol = {}

addressToSymbol['0x0000000000000000000000000000000000000000'] = 'ETH'

export function getSymbol(address){

    return addressToSymbol[address]
}