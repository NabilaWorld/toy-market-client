import React from 'react';

import img1 from '../../../assets/img1.jpg'
import img2 from '../../../assets/img2.jpg'
import img3 from '../../../assets/img3.jpg'
import img4 from '../../../assets/img4.jpg'
import img5 from '../../../assets/img5.jpg'
import img6 from '../../../assets/img6.jpg'

const Gallery = () => {
    
    return (
        <div>
            <h1 className='my-16 text-center text-3xl font-bold'>COOKING TOY GALLERY</h1>
            <div className='grid grid-cols-1 my-10 md:mx-16 md:grid-cols-3 gap-4 rounded-lg '>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={img1} alt="img1" className='h-80 w-80 ' />

                    <div className="overlay absolute inset-0 bg-black opacity-0 hover:opacity-30 transition-opacity duration-500"></div>
    
                    </figure>
                    
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={img2} alt="img2" className='h-80 w-80 '/>
                    
                    <div className="overlay absolute inset-0 bg-black opacity-0 hover:opacity-30 transition-opacity duration-500"></div>

                    </figure>
                </div>

                

                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={img3} alt="img3" className='h-80 w-80 '/></figure>

                    <div className="overlay absolute inset-0 bg-black opacity-0 hover:opacity-30 transition-opacity duration-500"></div>
                </div>

            </div>


            <div className='grid grid-cols-1 my-10 md:mx-16 md:grid-cols-3 gap-4 rounded-lg mt-20'>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={img4} alt="img1" className='h-80 w-80 ' />
                    
                    <div className="overlay absolute inset-0 bg-black opacity-0 hover:opacity-30 transition-opacity duration-500"></div>

                    </figure>

                    
                    
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={img5} alt="img2" className='h-80 w-80 '/></figure>

                    <div className="overlay absolute inset-0 bg-black opacity-0 hover:opacity-30 transition-opacity duration-500"></div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={img6} alt="img3" className='h-80 w-80 '/></figure>

                    <div className="overlay absolute inset-0 bg-black opacity-0 hover:opacity-30 transition-opacity duration-500"></div>
                </div>

                

            </div>
        </div>
    );
};

export default Gallery;