import React from 'react';
import HomeTools from '../HomeTools/HomeTools';
import ShowReview from '../ShowReview/ShowReview';
import Banner from './../Banner/Banner';
import Summary from './Summary';

import Subscribe from '../Subscribe';
import { Link } from 'react-router-dom';
import WhyUs from './WhyUs';

const Home = () => {
    return (
        <div>
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