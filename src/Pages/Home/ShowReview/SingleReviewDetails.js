import React from 'react';
import Rating from 'react-rating';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SingleReviewDetails = ({ SingleReview }) => {
    const { email, rate, name, review } = SingleReview;
    // let fristName;
    // fristName = name.split(' ')[0];
    // console.log(fristName)

    return (


        <div class="relative lg:w-max-lg h-auto bg-gray-400 rounded-md pt-24 pb-8 px-4 shadow-md hover:shadow-lg transition flex flex-col items-center">
            <div class="absolute rounded-full bg-gray-100 w-28 h-28 p-1 z-10 -top-8 shadow-lg hover:shadow-xl transition">
                <div class="rounded-full bg-black w-full h-full overflow-auto relative">
                    {
                        name ? <span className=' text-center   absolute top-10 left-5 text-xl font bolder text-yellow-600'>{name.split(' ')[0]}</span> :
                            <p className='text-white text-center   absolute top-10 left-5 text-xl font bolder text-yellow-600 break-all'>{name}</p>
                    }
                </div>
            </div>
            <label class="font-bold text-gray-100 text-lg">
                <Rating
                    initialRating={rate}
                    emptySymbol={<FontAwesomeIcon icon={faStar} style={{ color: 'Ivory' }} />}
                    fullSymbol={<FontAwesomeIcon style={{ color: 'Gold' }} icon={faStar} />}
                    readonly
                ></Rating>
            </label>

            <p class="text-center text-gray-200 mt-2 leading-relaxed">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="inline-block w-2 h-2 text-red-400 mb-3 mr-2 rotate-180

" viewBox="0 0 975.036 975.036">
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                {review}
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="inline-block w-2 h-2 text-red-400 mb-3 ml-2" viewBox="0 0 975.036 975.036">
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
            </p>
            <div class="flex flex-row gap-2 mt-1">

                <p>Given By <span className='text-lg font bold text-orange-700'>{name}</span></p>
            </div>



        </div>


    );
};

export default SingleReviewDetails;