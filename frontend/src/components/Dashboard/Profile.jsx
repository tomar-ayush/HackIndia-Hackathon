import React from "react";

const Profile = ({ walletAddress }) => {
  return (
    <div className="max-w-full mt-16 shadow-xl rounded-lg bg-black text-white">
      <div className="sticky top-10 bg-black border-b-2 border-green">
        <div className="flex flex-col mx-auto items-center w-full pl-16 gap-8">
          <div className="w-32 h-32 md:w-52 md:h-52 relative -mt-16 border-green border-4 rounded-full overflow-hidden">
            <img
              className="object-cover object-center h-32 md:h-52"
              src="https://www.shutterstock.com/image-photo/man-performing-sukhasana-sitting-on-600nw-543700657.jpg"
              alt="Profile avatar"
            />
          </div>
          <div className="text-center">
            <h2 className="font-extrabold flex gap-1 text-3xl">Sarah Smith</h2>
            <p className="text-gray-200">Fitness Influencer</p>
            {walletAddress && (
              <p className="text-gray-500 text-sm">Wallet: {walletAddress}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
