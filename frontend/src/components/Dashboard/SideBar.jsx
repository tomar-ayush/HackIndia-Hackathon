import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    TbLayoutDashboard,
    TbCloudDownload,
    TbFileTypeDocx,
    TbLogout,
} from 'react-icons/tb';

import logo2 from '../../Assets/small-logo.png';

import logo1 from '../../Assets/logo-no-background.png';

// import axios from 'axios';

const SideBar = () => {
    const [open, setOpen] = useState(true);
  const location = useLocation();

    //   const location = useLocation();
    //   const [email, setEmail] = useState('');
    //   const [name, setName] = useState('');


    //   const fetchUserData = async () => {
    //       try {
    //           const response = await axios.get('http://localhost:3000/api/auth/profile', {
    //               withCredentials: true 
    //           });
    //           console.log('API response:', response.data); // Debugging: log the full response
    //           if (response.data && response.data.user.email) {
    //               await setEmail(response.data.user.email);
    //               await setName(response.data.user.name);
    //           } else {
    //               console.error('Error fetching user data:', response.data.message);
    //           }
    //       } catch (error) {
    //           console.error('Error fetching user data:', error);
    //       }
    //   };
    //   fetchUserData();


    //   const handleLogout = async () => {
    //     try {
    //         const response = await axios.get('http://localhost:3000/api/auth/logout', { withCredentials: true });
    //         console.log(response.data.message); 
    //         window.location.href = '/login'; 

    //     } catch (error) {
    //         console.error('Error logging out:', error);
    //     }
    // };


    useEffect(() => {
        if (window.innerWidth < 768) {
            setOpen(false);
        }

        const handleResize = () => {
            if (window.innerWidth < 768) {
                setOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (['/otp', '/', '/login', '/signup'].includes(location.pathname)) return null;

    return (
        <div>
            <div className={`${open ? 'w-80' : 'w-20 md:w-24'} bg-black min-h-screen border-r-2 border-gray-700 p-5 flex flex-col items-center pt-8 relative duration-300`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="white" className={`absolute cursor-pointer font-bold -right-5 top-9 w-10 hidden md:block p-1 bg-gray-800 border-2 border-gray-700 rounded-full ${!open && 'rotate-180'}`} onClick={() => setOpen(!open)}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
                </svg>
                <div className="flex gap-x-4 items-center">
                    <img src={open ? logo1 : logo2} className={`cursor-pointer w-56 duration-500 ${open && 'rotate-[360deg]'}`} alt="Logo" />
                </div>
                <ul className="pt-6">
                <Link to={'/dashboard'}>
                    <li className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-lg items-center gap-x-4 mt-2 ${open && 'bg-light-white'}`}>
                        <TbLayoutDashboard style={{ width: '30px', height: '30px' }} />
                        <span className={`${!open && 'hidden'} origin-left duration-200`}>Dashboard</span>
                    </li>
                </Link>
                    <Link to={'/newdoc'}>
                    <li className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-lg items-center gap-x-4 mt-9`}>
                        <TbFileTypeDocx style={{ width: '30px', height: '30px' }} />
                        <span className={`${!open && 'hidden'} origin-left duration-200`}>New document</span>
                    </li>
                    </Link>
                    <Link to={'/fetchdoc'}>
                    <li className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-lg items-center gap-x-4 mt-2`}>
                        <TbCloudDownload style={{ width: '30px', height: '30px' }} />
                        <span className={`${!open && 'hidden'} origin-left duration-200`}>Fetch document</span>
                    </li>
                    </Link>

                    <li className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-lg items-center gap-x-4 mt-2`}>
                        <button className='flex gap-3' ><TbLogout style={{ width: '30px', height: '30px' }} />
                            <span className={`${!open && 'hidden'} origin-left duration-200`}>Logout</span></button>
                    </li>
                </ul>
            </div>
            <div >
                
                    <div className={`absolute bottom-5 pl-5 flex items-center space-x-4 text-white`} >

                        <img className="w-12 h-12 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Jese Leos avatar" />
                        <div>
                            <div className={`font-medium ${!open ? 'hidden' : 'block'} origin-left duration-200`}>
                                Name
                                {/* {name ? name : 'No name Found'} */}
                            </div>
                            <div
                                className={`font-medium ${!open ? 'hidden' : 'block'} origin-left text-gray-600 duration-200 truncate w-[230px]`}
                            >No Email Found
                                {/* {email ? email : 'No Email Found'} */}
                            </div>

                        </div>
                    </div>
            </div>
        </div>
    );
};

export default SideBar;
