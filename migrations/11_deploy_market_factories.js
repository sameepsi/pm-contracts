module.exports = function (deployer) {
    const contract = artifacts.require('StandardMarket')
    const factory = artifacts.require('StandardMarketFactory')
    deployer.deploy(factory, contract.address)
}
