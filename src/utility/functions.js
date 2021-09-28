import configs from './config.json'

export const getConfiguredAddress = (address) => {
    try {
        return configs[configs.network]["deployedAddress"][address]
    } catch (error) {
        throw new Error(error)
    }
}

export const getSupportedTokens = (type) => {
    try {
        return configs[configs.network][type]
    } catch (error) {
        throw new Error(error)
    }
}