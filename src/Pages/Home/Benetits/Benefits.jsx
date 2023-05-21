import React, { useEffect } from 'react';
import car1 from '../../../assets/car1.jpg'
import car2 from '../../../assets/car2.jpg'
import car3 from '../../../assets/car3.jpg'
import car4 from '../../../assets/car4.jpg'

import AOS from 'aos';
import 'aos/dist/aos.css';

const Benefits = () => {

    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div data-aos="fade-up" data-aos-anchor-placement="top-center">
            <br />
            <h1 className='my-16 text-center text-3xl font-bold bg-orange-300 py-3 md:mx-[200px] mx-5 px-2 rounded-full'>Girl's cooking toys offer numerous benefits for children's development:</h1>

            <ul className='md:mx-40 mx-5 bg-gray-100 rounded-lg border-2 p-5'>

                



                <li> <b>1. Skill development:</b> Cooking toys encourage the development of fine motor skills as children manipulate utensils, pots, and pans. They also learn hand-eye coordination while pouring, stirring, and measuring ingredients.</li> <br />

                <li> <b>2. Creativity and imagination:</b> Cooking toys provide a platform for imaginative play, allowing children to experiment with different recipes and create their own culinary masterpieces. They can pretend to be chefs, restaurant owners, or hosts of a cooking show, fostering creativity and storytelling skills.</li> <br />

                <li> <b>3. Cognitive growth:</b> Cooking toys promote cognitive development by introducing concepts such as counting, measuring, and following step-by-step instructions. Children learn about ingredients, food groups, and basic cooking techniques, enhancing their knowledge and understanding of the culinary world.</li> <br />

                <li> <b>4. Social skills:</b> Cooking toys encourage social interaction and cooperation, especially when children engage in pretend play with others. They can take turns, share responsibilities, and communicate effectively while engaging in role-playing scenarios. </li> <br />

                <li> <b>5. Emotional development:</b> Cooking toys provide an outlet for emotional expression and exploration. Children can channel their feelings into their play, creating a sense of comfort and control. Additionally, they can experience pride and accomplishment as they serve their creations to family and friends.</li> <br />

                <li> <b>6. Healthy habits:</b> By engaging with cooking toys, girls develop an early appreciation for healthy eating and nutrition. They can learn about different food groups, explore new ingredients, and develop an understanding of balanced meals.</li> <br />

                <li> <b>7. Confidence building:</b> Successfully preparing pretend meals with cooking toys helps build self-confidence in children. They can take pride in their creations and feel a sense of accomplishment, boosting their self-esteem and encouraging them to take on new challenges.</li>

            </ul> <br />

            <p className='md:mx-24 mx-2'>Overall, girl's cooking toys provide a fun and educational way for children to develop various skills, nurture their creativity, and gain confidence in the kitchen.</p> <br />

        </div>
    );
};

export default Benefits;