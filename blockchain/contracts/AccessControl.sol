// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract AccessControl {
    mapping(address => bool) public registeredProfessionals;
    address public admin;

    // Event to track professional registration
    event ProfessionalRegistered(address indexed professional, string message);

    constructor() {
        admin = msg.sender;
    }

    modifier onlyAdmin() {
        require(msg.sender == admin, "Not authorized");
        _;
    }

    // Register a new professional
    function registerProfessional(address _professional) public onlyAdmin {
        registeredProfessionals[_professional] = true;
        emit ProfessionalRegistered(_professional, "new professional registered");
    }

    // Check if an address is a registered professional
    function isProfessional(address _professional) public view returns (bool) {
        return registeredProfessionals[_professional];
    }
}

