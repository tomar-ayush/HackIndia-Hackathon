// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.27;

import "./AccessControl.sol";
import "./VerifierManager.sol";

contract Certificate {
    AccessControl accessControl;
    VerifierManager verifierManager;
    uint public certificateCount; // Unique ID generator for certificates

    // Event to track certificate uploads and verifications
    event CertificateUploaded(uint indexed tokenId, address indexed professional, bytes32 certificateHash, uint timestamp);
    event CertificateVerified(uint indexed tokenId, address indexed verifier, uint timestamp);

    constructor(address accessControlAddress, address verifierManagerAddress) {
        accessControl = AccessControl(accessControlAddress);
        verifierManager = VerifierManager(verifierManagerAddress);
    }

    modifier onlyProfessional() {
        require(accessControl.isProfessional(msg.sender), "Not a registered professional");
        _;
    }

    modifier onlyVerifier() {
        require(verifierManager.isVerifier(msg.sender), "Not an authorized verifier");
        _;
    }

    // Struct for storing certificate information
    struct CertificateInfo {
        address professional;
        bytes32 certificateHash; // Hash of the actual certificate stored off-chain
        bool verified;
        address verifier; // Address of the certifying authority
        uint timestamp;
    }

    // Mapping of certificate ID to CertificateInfo
    mapping(uint => CertificateInfo) public certificates;

    // Mapping to store all certificates uploaded by a particular user
    mapping(address => uint[]) public certificatesByUser;

    function uploadCertificate(bytes32 _certificateHash) public onlyProfessional {
        // Ensure that the same certificate is not uploaded twice by the same professional
        for (uint i = 0; i < certificatesByUser[msg.sender].length; i++) {
            uint certId = certificatesByUser[msg.sender][i];
            require(certificates[certId].certificateHash != _certificateHash, "Certificate already uploaded");
        }

        certificateCount++;
        certificates[certificateCount] = CertificateInfo({
            professional: msg.sender,
            certificateHash: _certificateHash,
            verified: false,
            verifier: address(0),
            timestamp: block.timestamp
        });

        certificatesByUser[msg.sender].push(certificateCount); // Track certificate by user

        emit CertificateUploaded(certificateCount, msg.sender, _certificateHash, block.timestamp);
    }

    // Verifier function to verify the certificate
    function verifyCertificate(uint _certificateId) public onlyVerifier {
        require(_certificateId > 0 && _certificateId <= certificateCount, "Invalid certificate ID");
        
        CertificateInfo storage cert = certificates[_certificateId];
        require(!cert.verified, "Certificate already verified");

        cert.verified = true;
        cert.verifier = msg.sender;

        emit CertificateVerified(_certificateId, msg.sender, block.timestamp);
    }

    // Check if a certificate is valid (can be called by clients)
    function isCertificateValid(uint _certificateId) public view returns (bool) {
        require(_certificateId > 0 && _certificateId <= certificateCount, "Invalid certificate ID");
        
        return certificates[_certificateId].verified;
    }

    // Function to retrieve all certificate IDs uploaded by a specific user
    function getCertificatesByUser(address _user) public view returns (uint[] memory) {
        return certificatesByUser[_user];
    }
}