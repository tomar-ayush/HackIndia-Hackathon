const hre = require("hardhat");

async function main() {
  const [deployer, professional, verifier, otherUser] = await hre.ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  try {
    // Deploy AccessControl
    const AccessControl = await hre.ethers.getContractFactory("AccessControl");
    const accessControl = await AccessControl.deploy();
    const accessAddress = await accessControl.getAddress();
    console.log("AccessControl deployed to:", accessAddress);

    // Deploy VerifierManager
    const VerifierManager = await hre.ethers.getContractFactory("VerifierManager");
    const verifierManager = await VerifierManager.deploy();
    const verifierAddress = await verifierManager.getAddress();
    console.log("VerifierManager deployed to:", verifierAddress);

    // Deploy Certificate with dependencies
    const Certificate = await hre.ethers.getContractFactory("Certificate");
    const certificate = await Certificate.deploy(accessAddress, verifierAddress);
    console.log("Certificate deployed to:", await certificate.getAddress());

    // Register a professional
    console.log("\n-- Registering Professional --");
    await accessControl.connect(deployer).registerProfessional(professional.address);
    const isProfessional = await accessControl.isProfessional(professional.address);
    console.log("Is the professional registered?", isProfessional);

    // Non-admin tries to register a professional (should fail)
    console.log("\n-- Trying to register a professional by non-admin (should fail) --");
    try {
      await accessControl.connect(otherUser).registerProfessional(otherUser.address);
    } catch (error) {
      console.log("Error:", error.message);
    }

    // Professional uploads a certificate
    console.log("\n-- Uploading Certificate by Professional --");
    const certHash = hre.ethers.utils.keccak256(hre.ethers.utils.toUtf8Bytes("Professional Certificate"));
    await certificate.connect(professional).uploadCertificate(certHash);
    const certInfo = await certificate.certificates(1);
    console.log("Certificate uploaded by:", certInfo.professional);
    console.log("Certificate hash:", certInfo.certificateHash);

    // Non-professional tries to upload a certificate (should fail)
    console.log("\n-- Non-professional uploading certificate (should fail) --");
    try {
      await certificate.connect(otherUser).uploadCertificate(certHash);
    } catch (error) {
      console.log("Error:", error.message);
    }

    // Add a verifier
    console.log("\n-- Adding Verifier --");
    await verifierManager.connect(deployer).addVerifier(verifier.address);
    const isVerifier = await verifierManager.isVerifier(verifier.address);
    console.log("Is the verifier added?", isVerifier);

    // Verifier verifies the certificate
    console.log("\n-- Verifying Certificate by Verifier --");
    await certificate.connect(verifier).verifyCertificate(1);
    const verifiedCertInfo = await certificate.certificates(1);
    console.log("Certificate verified by:", verifiedCertInfo.verifier);
    console.log("Is the certificate verified?", verifiedCertInfo.verified);

    // Non-verifier tries to verify a certificate (should fail)
    console.log("\n-- Non-verifier trying to verify (should fail) --");
    try {
      await certificate.connect(otherUser).verifyCertificate(1);
    } catch (error) {
      console.log("Error:", error.message);
    }

  } catch (error) {
    console.error("Deployment failed:", error);
    process.exitCode = 1;
  }
}

main();
