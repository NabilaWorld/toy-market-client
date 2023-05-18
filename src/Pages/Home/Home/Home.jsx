import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import SidePage from '../SidePage/SidePage';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <SidePage></SidePage>
        </div>
    );
};

export default Home;