import React from "react";
import { useLocation } from "react-router-dom";
// import { useMoralis } from "react-moralis";

const Header = () => {
//   const { enableWeb3 } = useMoralis();
  const location = useLocation();

  if (['/otp', '/', '/login', '/signup'].includes(location.pathname)) return null;

  return (
    <>
      <div className="w-full  flex justify-right text-white bg-black border-gray-700 border-b">
        <div className="flex justify-end p-4 w-full">
          <div
            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            onClick={async () => {
            //   await enableWeb3();
            console.log("hellojk");
            }}
          >
            connect
          </div>
          <div>
            <img
              className="w-12 h-12 rounded-full"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
              alt="Jese Leos avatar"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
