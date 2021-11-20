const EarlyAccessGame = artifacts.require("EarlyAccessGame");

module.exports = async function(deployer) {
  await deployer.deploy(EarlyAccessGame, "Hextris Early Access Demo", "EAG", "https://bafybeidg3ngosh2kwkppj2emdugna5bvanib7gijutju7q7dorefllf7qa.ipfs.infura-ipfs.io/?token=", web3.utils.toWei("0.001", "Ether"));
};
