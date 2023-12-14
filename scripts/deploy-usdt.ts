import { Contract } from "ethers";
import { ethers } from "hardhat";

async function main() {
  const initialSupply = ethers.parseUnits("10000000", 6); // 1,000,000 tokens
  const name = "TetherToken";
  const symbol = "USDT";
  const decimals = 6;

  const TetherContract = await ethers.getContractFactory("TetherToken");

  const tether = await TetherContract.deploy(
    initialSupply,
    name,
    symbol,
    decimals
  );
  await tether.waitForDeployment();
  const tetherAddress = await tether.getAddress();

  const signers = await ethers.getSigners();

  // console.log(`Balance of ${owner.address} is: ${balance.toString()}`);
  await tether.transfer(
    "0x517F310a9C6c2bEF9402C9361520E48Cd5cb8dB5",
    initialSupply
  );

  console.log(`TetherToken deployed to: ${tetherAddress}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
