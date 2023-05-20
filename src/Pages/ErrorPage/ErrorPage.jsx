import React from 'react';
import error from '../../assets/images.jpg'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className=''>
            
            <center>
            <img className='mx-50 mt-20 w-[500px]' src={error} alt="" />
            <br />

            <Link to='/'>
                <button className='btn btn-warning'>Back Home Page</button>
            </Link>
            </center>
        </div>
    );
};

export default ErrorPage;