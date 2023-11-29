import React from 'react';
import Header from '../Header/Header';
import HomePageProduct from '../HomePageProduct/HomePageProduct';
import HomePageCarousel from './HomePageCarousel';
import HomeBanners from './HomeBanners';



const Home = () => {
    return (
        <div>
            {/* You can add components here to show  in home page */}
            <Header></Header>
            <HomePageCarousel></HomePageCarousel>
            <HomePageProduct></HomePageProduct>
            <HomeBanners></HomeBanners> 
        </div>
    );
};

export default Home;