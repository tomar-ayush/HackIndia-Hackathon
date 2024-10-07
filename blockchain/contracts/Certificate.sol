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

    function uploadCertificate(bytes32 _certificateHash) public onlyProfessional {
        certificateCount++;
        certificates[certificateCount] = CertificateInfo({
            professional: msg.sender,
            certificateHash: _certificateHash,
            verified: false,
            verifier: address(0),
            timestamp: block.timestamp
        });

        emit CertificateUploaded(certificateCount, msg.sender, _certificateHash, block.timestamp);
    }

    // Verifier function to verify the certificate
    function verifyCertificate(uint _certificateId) public onlyVerifier {
        certificates[_certificateId].verified = true;
        certificates[_certificateId].verifier = msg.sender;

        emit CertificateVerified(_certificateId, msg.sender, block.timestamp);
    }

    // Check if a certificate is valid (can be called by clients)
    function isCertificateValid(uint _certificateId) public view returns (bool) {
        return certificates[_certificateId].verified;
    }
}
