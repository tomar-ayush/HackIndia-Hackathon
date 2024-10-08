import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ConnectButton } from "web3uikit";
import { useMoralis } from "react-moralis";
import Profile from "./Profile";

const Header = ({ setWalletAddress }) => {
  const location = useLocation();
  const { authenticate, isAuthenticated, user } = useMoralis();
  const [walletAddress, setAddress] = useState(null);

  useEffect(() => {
    if (isAuthenticated && user) {
      const address = user.get("ethAddress");
      setAddress(address);
      setWalletAddress(address); // Pass to Profile component
      console.log(walletAddress);
    }
  }, [isAuthenticated, user, setWalletAddress]);

  if (['/otp', '/', '/login', '/signup'].includes(location.pathname)) return null;

  return (
    <div className="w-full flex justify-right text-white bg-black border-gray-700 border-b">
      <div className="flex justify-end p-4 w-full">
        <ConnectButton moralisAuth={false} onClick={() => authenticate()} />
        {walletAddress && (
          <div>
            <img
              className="w-12 h-12 rounded-full"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
              alt="User avatar"
            />
            <p className="text-sm">{walletAddress}</p>
            <Profile walletAddress={walletAddress} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
