import React from 'react';
import imgage from '../../../assets/81gmsyff04L._AC_SX569_.jpg'

const Banner = () => {
    return (
        <div className="relative">
            <img
                src={imgage}
                alt="Banner"
                className="w-[1220px] my-5 md:ml-16 h-[600px]"
            />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <div className="bg-black bg-opacity-50 p-4 text-white text-center">
                    <h2 className="text-2xl font-bold">Your Text Goes Here</h2>
                    <p className="text-lg">Additional Text Description</p>
                    <button className='btn btn-warning mt-3'>Visit The Page</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;