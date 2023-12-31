import React, { useEffect } from 'react';
import img1 from '../../../assets/img1.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';


const SidePage = () => {

    useEffect(() => {
        AOS.init();
      }, []);
    return (
        
        <div>
            <br />
            <h1 className='my-16 text-center text-3xl font-bold bg-orange-300 py-3 md:mx-[500px] mx-5 px-2 rounded-full'>About Out Produce</h1>

            <div  data-aos="flip-left" data-aos-delay="200" data-aos-anchor=".example-selector"  className='md:flex items-center mx-5 md:mx-20 my-10'>
            
        < img src={img1} className='w-96' alt="" />
        
            <p className='md:text-center  text-xl mb-4'>In our shop, we offer high-quality girl's cooking toys that are designed to provide a fun and engaging experience for children. Our toys are made from durable materials to ensure longevity and safety during play. They are also designed with attention to detail, mimicking real kitchen utensils and appliances to enhance the imaginative play experience. We offer a variety of cooking toy sets that include pots, pans, utensils, play food, and even miniature kitchen appliances. These toys are suitable for different age groups and skill levels, allowing children to learn and grow at their own pace. Visit our shop to explore our range of girl's cooking toys and provide children with an exciting opportunity to develop essential skills while having fun.</p>
        </div>
            
        </div>
    );
};

export default SidePage;