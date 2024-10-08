import React, { useState } from 'react';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';

function NewDoc() {
  const [name, setName] = useState('');
  const [docname, setDocname] = useState('');
  const [description, setDescription] = useState('');
  const [professionals, setProfession] = useState('');
  const [message, setMessage] = useState('');

  
  // const [loading, setLoading] = useState(false);
  // const navigate = useNavigate();

  // const handleSignup = async () => {

  //     try {
  //         setLoading(true);
  //         const response = await axios.post('http://localhost:3000/api/auth/signup', { name, email, password, role, otp });
  //         setMessage(response.data.message);
  //         setTimeout(() => {
  //             setLoading(false);
  //             navigate('/login');
  //         }, 2000);

  //     } catch (error) {
  //         if (error.response && error.response.data && error.response.data.message) {
  //             setMessage(error.response.data.message);
  //         } else {
  //             setMessage("Error Signing Up");
  //         }
  //         setLoading(false);
  //         console.error(error);
  //     }
  // };
  const messageColor = message === "User created successfully" ? 'green' : 'red';
  return (
    <div className='bg-black '>
      <div className="text-center pt-4 ">

        <h2 className="text-4xl py-4 tracking-tight text-white">
          Upload Document
        </h2>

      </div>
      <div className="flex justify-center my-2 mx-4 md:mx-0 ">
        <div className="w-full max-w-md rounded-lg shadow-md p-6 bg-gray-800">
          <div className="flex flex-wrap -mx-3 mb-6 ">
            <div className="w-full flex md:w-full px-3 mb-6 gap-10">
              <div className='w-1/2'>
                <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor='Email'>Name</label>
                <input className="appearance-none block w-full bg-gray-950 text-white font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  required />
              </div>
              <div className='w-1/2'>
                <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor='Profession'>Profession</label>
                <input className="appearance-none block w-full bg-gray-950 text-white font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                  type="text"
                  value={professionals}
                  onChange={(e) => setProfession(e.target.value)}
                  placeholder="Enter Profession"
                  required />
              </div>
            </div>
            <div className="w-full md:w-full px-3 mb-6">
              <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor='document name'>document name</label>
              <input className="appearance-none block w-full bg-gray-950 text-white font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                type="email"
                value={docname}
                onChange={(e) => setDocname(e.target.value)}
                placeholder="Enter your document name"
                required />
            </div>

            <div className="w-full md:w-full px-3 mb-6">
              <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor='description'>description</label>
              <input className="appearance-none block w-full bg-gray-950 text-white font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                type="password"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter your Description"
                required />
            </div>

            <div className="w-full md:w-full px-3 mb-6">
              <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor='description'>Upload document</label>
              <input  className="appearance-none block w-full bg-gray-950 text-white font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"  type="file" name="" id="" />
            </div>

            <div className="w-full md:w-full px-3  ">
              <button type='submit' className="block w-full bg-blue-700 text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-green focus:outline-none ">Upload Doc</button>
            </div>
            <div className='pt-8 mx-auto font-thin text-xl -mb-5'>
              {message && <p style={{ color: messageColor }} >{message}</p>}
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}

export default NewDoc;
