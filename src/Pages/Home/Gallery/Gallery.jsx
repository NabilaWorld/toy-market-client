import React, { useEffect } from 'react';

import img1 from '../../../assets/7064300_R_SET.jpg'
import img2 from '../../../assets/img2.jpg'
import img3 from '../../../assets/img3.jpg'
import img4 from '../../../assets/img4.jpg'
import img5 from '../../../assets/img5.jpg'
import img6 from '../../../assets/img6.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Gallery = () => {
    useEffect(() => {
        AOS.init();
      }, []);
    
    return (
        <div data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
            <br />
            <h1 className='my-16 text-center text-3xl font-bold bg-orange-300 py-3 md:mx-[500px] mx-5 px-2 rounded-full'>COOKING TOY GALLERY</h1>
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


            <div className='grid grid-cols-1 my-10 md:mx-16 md:grid-cols-3 gap-4 rounded-lg md:mt-20'>

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