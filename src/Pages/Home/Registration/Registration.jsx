import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';

const Registration = () => {
    const { createUser, updateProfileData } = useContext(AuthContext);


    // registration 
    const handleRegistrationSubmit = (event) =>{
        event.preventDefault();

        // collect from data
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photoUrl = form['photo-url'].value;

        console.log(email, password, name, photoUrl)

    }

    return (
        <div>
            <div className="flex flex-col items-center pt-20 min-h-screen bg-gray-200">
                <form onSubmit={handleRegistrationSubmit} className="w-full max-w-sm bg-white rounded-lg shadow-md p-6">
                    <div className="mb-4">
                        <label htmlFor="text" className="block text-gray-700 text-sm font-bold mb-2">Name</label>

                        <input id="text" name='name' type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your name" required/>

                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>

                        <input id="email" name='email' type="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your email" required/>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                        
                        <input id="password" name='password' type="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your password" required />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="photo-url" className="block text-gray-700 text-sm font-bold mb-2">Photo Url</label>
                        
                        <input id="photo-url" type="url" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your photo-url" required />
                    </div>

                    <div className="flex items-center justify-between">

                        <input type="submit" className="btn btn-warning rounded-lg w-full"  value='Log In' />
                       
                    </div>

                    <p className='mt-5 text-center text-blue-500'> <Link to='/login'>Go To The Log In Page </Link> </p>
                </form>

                
            </div>
        </div>
    );
};

export default Registration;