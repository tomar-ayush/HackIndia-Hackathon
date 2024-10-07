import React from 'react';
import { useLocation } from 'react-router-dom';

const Header = () => {

  const location = useLocation();


    if (['/'].includes(location.pathname)) return null;


    return (
        <>

            <div className="w-full  flex justify-right text-white bg-black border-gray-700 border-b">

                <div className="flex justify-end p-4 w-full">
                    <div>
                        <img className="w-12 h-12 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Jese Leos avatar" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
