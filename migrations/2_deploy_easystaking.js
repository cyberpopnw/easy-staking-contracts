const EasyStaking = artifacts.require("EasyStaking");

module.exports = function (deployer) {
  deployer.deploy(EasyStaking);
};
