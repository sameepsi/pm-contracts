const Math = artifacts.require('Math')
const StandardMarket = artifacts.require('StandardMarket')

module.exports = function (deployer) {
    deployer.link(Math, StandardMarket)
    deployer.deploy(StandardMarket)
}
