const CentralizedOracle = artifacts.require('CentralizedOracle')

module.exports = function (deployer) {
    deployer.deploy(CentralizedOracle)
}
