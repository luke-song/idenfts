require("@nomicfoundation/hardhat-toolbox");

const NEXT_PUBLIC_POLYGON_MUMBAI_RPC =
  "https://polygon-mumbai.g.alchemy.com/v2/0awa485pp03Dww2fTjrSCg7yHlZECw-K";
const NEXT_PUBLIC_PRIVATE_KEY = "YOUR_PRIVATE_KEY";
/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: "0.8.17",
  // defaultNetwork: "matic",
  // networks: {
  //   hardhat: {},
  //   polygon_mumbai: {
  //     url: NEXT_PUBLIC_POLYGON_MUMBAI_RPC,
  //     accounts: [`0x${NEXT_PUBLIC_PRIVATE_KEY}`],
  //   },
  // },
};
