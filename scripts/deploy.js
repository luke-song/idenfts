const hre = require("hardhat");

async function main() {
  const Idenfts = await hre.ethers.getContractFactory("Idenfts");
  const idenfts = await Idenfts.deploy();

  await idenfts.deployed();

  // //TRANSFER FUNDS
  // const TransferFunds = await hre.ethers.getContractFactory("TransferFunds");
  // const transferFunds = await TransferFunds.deploy();

  // await transferFunds.deployed();

  console.log(` deployed contract Address ${idenfts.address}`);
  // console.log(` deployed contract Address ${transferFunds.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
