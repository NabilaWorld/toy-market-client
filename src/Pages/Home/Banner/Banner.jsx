import React, { useEffect } from 'react';
import imgage from '../../../assets/banner.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {
    useEffect(() => {
        AOS.init();
      }, []);
    return (
        <div data-aos="fade-up" data-aos-anchor-placement="top-center">
            <img
                src={imgage}
                alt="Banner"
                className="w-[1220px] my-5 rounded-lg md:ml-16 h-[600px]"
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