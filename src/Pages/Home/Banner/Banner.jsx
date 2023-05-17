import React from 'react';
import imgage from '../../../assets/81gmsyff04L._AC_SX569_.jpg'

const Banner = () => {
    return (
        <div>
            <div className="card  w-full my-4  bg-base-100 shadow-xl image-full">
            <figure><img src={imgage} alt="Girls Cooking Toy" /></figure>
            <div className="card-body mt-28 md:mt-60">
                <h2 className="font-bold text-center">Shoes!</h2>
                <p className='text-center'>If a dog chews shoes whose shoes does he choose?</p>

                <div className="text-center">
                <button className="btn btn-primary">Visit There</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Banner;