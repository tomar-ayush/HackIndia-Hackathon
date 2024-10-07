const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  try {
    // Deploy AccessControl
    const AccessControl = await hre.ethers.getContractFactory("AccessControl");
    const accessControl = await AccessControl.deploy();
    const accessAddress = await accessControl.getAddress();
    console.log("AccessControl deployed to:", accessAddress);

    // Deploy VerifierManager
    const VerifierManager = await hre.ethers.getContractFactory(
      "VerifierManager"
    );
    const verifierManager = await VerifierManager.deploy();
    const verifierAddress = await verifierManager.getAddress();
    console.log("VerifierManager deployed to:", verifierAddress);

    // Deploy Certificate with dependencies
    const Certificate = await hre.ethers.getContractFactory("Certificate");
    const certificate = await Certificate.deploy(
      accessAddress,
      verifierAddress
    );
    // await certificate.deployed(); // Wait for deployment
    console.log("Certificate deployed to:", await certificate.getAddress());
  } catch (error) {
    console.error("Deployment failed:", error);
    process.exitCode = 1;
  }
}

main();
