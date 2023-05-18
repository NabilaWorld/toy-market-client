import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../../provider/AuthProvider';

const Login = () => {
    const { googleLogIn} = useContext(AuthContext);


    // google log in
    const handleGoogleLogIn = () =>{
        googleLogIn()
        .then(result => {
            const googleUser = result.user;
            console.log(googleUser);
            
        })
        .catch(error =>{
            console.log(error)
        })
    }

    return (
        <div>
            <div className="flex flex-col items-center pt-20 min-h-screen bg-gray-200">
                <form className="w-full max-w-sm bg-white rounded-lg shadow-md p-6">
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                        <input id="email" type="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your email" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                        <input id="password" type="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your password" />
                    </div>
                    <div className="flex items-center justify-between">

                        <input type="submit" className="btn btn-warning rounded-lg w-full"  value='Log In' />
                       
                    </div>

                    <p className='mt-5 text-center text-blue-500'> <Link to='/registration'>Go To Registration Page </Link> </p>
                </form>

                <button onClick={handleGoogleLogIn} className="btn btn-warning w-80 mt-5 rounded-lg"> <FaGoogle className='mr-5 text-blue-500'></FaGoogle> Google</button>
            </div>

        </div>
    );
};

export default Login;