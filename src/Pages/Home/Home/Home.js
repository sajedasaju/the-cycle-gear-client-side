import React from 'react';
import HomeTools from '../HomeTools/HomeTools';
import ShowReview from '../ShowReview/ShowReview';
import Banner from './../Banner/Banner';
import Summary from './Summary';

import Subscribe from '../Subscribe';
import { Link } from 'react-router-dom';
import WhyUs from './WhyUs';
import swipper from './HomeSlide';
import HomeSlide from './HomeSlide';

const Home = () => {
    return (
        <div>
            {/* <HomeSlide></HomeSlide> */}
            <Banner></Banner>
            <HomeTools></HomeTools>
            <Summary></Summary>
            <ShowReview></ShowReview>
            <WhyUs></WhyUs>

            <Subscribe></Subscribe>





        </div >


    );
};

export default Home;