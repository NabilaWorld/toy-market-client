import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import SidePage from '../SidePage/SidePage';
import Benefits from '../Benetits/Benefits';
import ShopCategory from '../ShopCategory/ShopCategory';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopCategory></ShopCategory>
            <SidePage></SidePage>
            <Benefits></Benefits>
        </div>
    );
};

export default Home;