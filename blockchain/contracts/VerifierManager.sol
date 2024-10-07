// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.27;

contract VerifierManager {
    // Mapping of verifier addresses to their authorized status
    mapping(address => bool) public verifiers;
    address public admin;

    // Event to track verifier changes
    event VerifierAdded(address indexed verifier, string message);
    event VerifierRemoved(address indexed verifier, string message);

    // Constructor to set the admin
    constructor() {
        admin = msg.sender;
    }

    // Modifier to ensure only admin can execute certain functions
    modifier onlyAdmin() {
        require(msg.sender == admin, "Not authorized");
        _;
    }

    // Add a verifier
    function addVerifier(address _verifier) public onlyAdmin {
        verifiers[_verifier] = true;
        emit VerifierAdded(_verifier, "new verifier Added");
    }

    // Remove a verifier
    function removeVerifier(address _verifier) public onlyAdmin {
        verifiers[_verifier] = false;
        emit VerifierRemoved(_verifier, "verifier removed");
    }

    // Check if an address is an authorized verifier
    function isVerifier(address _verifier) public view returns (bool) {
        return verifiers[_verifier];
    }
}
