const RCCCrowdsale = artifacts.require('./RCCCrowdsale.sol');

module.exports = (deployer) => {
    //http://www.onlineconversion.com/unix_time.htm
    var owner = "0x7009CB09651FaA029DaCEca476bA4F967bC63773";

    deployer.deploy(RCCCrowdsale, owner);

};
