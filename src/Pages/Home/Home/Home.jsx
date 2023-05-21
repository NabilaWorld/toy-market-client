import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import SidePage from '../SidePage/SidePage';
import Benefits from '../Benetits/Benefits';
import ShopCategory from '../ShopCategory/ShopCategory';
import { Helmet, HelmetProvider } from 'react-helmet-async';


const Home = () => {
    return (
        <HelmetProvider>
            <div>
            
            <Helmet>
                <title>Cooking Toy | Home</title>
            </Helmet>

            <Banner></Banner>
            
            <Gallery></Gallery>
            <ShopCategory></ShopCategory>
            <SidePage></SidePage>
            <Benefits></Benefits>
           
        </div>
        </HelmetProvider>
    );
};

export default Home;