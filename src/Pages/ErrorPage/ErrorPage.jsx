import React from 'react';
import error from '../../assets/images.jpg'

const ErrorPage = () => {
    return (
        <div className=''>
            
            <center>
            <img className='mx-50 mt-20 w-[500px]' src={error} alt="" />
            </center>
        </div>
    );
};

export default ErrorPage;