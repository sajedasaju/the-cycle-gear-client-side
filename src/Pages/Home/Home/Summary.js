import React from 'react';
import revenue from '../../../assets/icons/money.png'
import customer from '../../../assets/icons/customer.png'
import tool from '../../../assets/icons/tools.png'
import review from '../../../assets/icons/review.png'

const Summary = () => {
    return (

        <div class="dark:bg-gray-900">
            <div class="pb-20 ">
                <div class="mx-auto bg-gradient-to-l  h-96 bg-[#6cab296a] ">
                    <div class="mx-auto container w-full flex flex-col justify-center items-center">
                        <div class="flex justify-center items-center flex-col">
                            <div class="mt-20 text-center">
                                <h2 class="lg:text-5xl md:text-5xl text-4xl font-black leading-10 text-white">Why The Cycle Gear Best In This Field</h2>
                            </div>
                            <div class="mt-6 mx-2 md:mx-0 text-center">
                                <p class="lg:text-lg md:text-base leading-6 text-sm text-white">Consistent quality and you get results. No matter what,Making customer happy is our goal.</p>





                            </div>
                        </div>
                    </div>
                </div>
                <div class="mx-auto container md:-mt-28 -mt-20 flex justify-center items-center">
                    <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-x-2 gap-y-2 lg:gap-x-6 md:gap-x-6 md:gap-y-6 md:gap-y-6">
                        <div class="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-gradient-to-l from-[#9db084a3] to-[#69844edc] bg-white shadow rounded-2xl bg-white  rounded-xl shadow-lg duration-300 hover:shadow-2xl group  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg transform transition-all duration-300 scale-100 hover:scale-110">
                            <img src={customer} alt="" className='w-12' />
                            <h2 class="lg:text-4xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-gray-800">40M+ </h2>
                            <p class="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-gray-600">Satisfied Customers</p>
                        </div>
                        <div class="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow rounded-2xl  rounded-xl shadow-lg duration-300 hover:shadow-2xl group  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg transform transition-all duration-300 scale-100 hover:scale-110 bg-gradient-to-l from-[#9db084a3] to-[#69844edc] ">
                            <img src={review} alt="" className='w-12' />
                            <h2 class="lg:text-4xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-gray-800">50K+</h2>
                            <p class="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-gray-600">Customer Feedback</p>
                        </div>
                        <div class="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow rounded-2xl  rounded-xl shadow-lg duration-300 hover:shadow-2xl group  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg transform transition-all duration-300 scale-100 hover:scale-110 bg-gradient-to-l from-[#9db084a3] to-[#69844edc] ">
                            <img src={revenue} alt="" className='w-12' />
                            <h2 class="lg:text-4xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-gray-800">30M+</h2>
                            <p class="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-gray-600">Per Year Revinue</p>
                        </div>
                        <div class="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow rounded-2xl  rounded-xl shadow-lg duration-300 hover:shadow-2xl group  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg transform transition-all duration-300 scale-100 hover:scale-110 bg-gradient-to-l from-[#9db084a3] to-[#69844edc] ">
                            <img src={tool} alt="" className='w-12' />
                            <h2 class="lg:text-4xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-gray-800">10K+</h2>
                            <p class="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-gray-600">Modern Tools</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Summary;