const CentralizedOracle = artifacts.require('CentralizedOracle')

module.exports = function (deployer) {
    deployer.deploy(CentralizedOracle)
    deployer.deploy(artifacts.require('CentralizedOracleFactory'), CentralizedOracle.address)
}
