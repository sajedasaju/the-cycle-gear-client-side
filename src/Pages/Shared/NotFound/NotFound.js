import React from 'react';
import { useNavigate } from 'react-router-dom';
import notfound from '../../../assets/notFound/dribbble_1.gif'
import './NotFound.css'

const NotFound = () => {
    const navigate = useNavigate();
    const navigateHome = () => {
        navigate('/')
    }
    return (
        <section

            className='notFound'>
            <div>
                <h1 className='text-center four-o-four'>404</h1>

            </div>
            <div className='container mx-auto flex flex-col justigy-start	md:justify-center lg:justify-center xl:justify-center  items-center h-full	'>
                <h1 className='text-white  w-full	align-bottom	 text-center four-o-four-h1-color mt-0 lg:mt-24 text-medium md:text-2xl lg:text-2xl xl:text-2xl '>Sorry Searched Page is Not Found</h1>
                <button onClick={navigateHome} className='bg-yellow-500	 	text-white font-bold py-2 px-4 border-b-4 border-amber-700 hover:bg-yellow-600	rounded  mb-16 md:mb-24 lg:mb-24 xl:mb-24'>Go to Home</button>
            </div>
        </section>
    );
};

export default NotFound;