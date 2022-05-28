import React from 'react';

const Steps = () => {
    return (
        <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 ">
                <h1 class="font-bold text-[#7aad3b] border-y-2 text-2xl text-center py-2">
                    Want something or need advice?
                    <br />
                    <span className='text-3xl'>WE CAN HELP WITH YOUR PLANS</span>
                </h1>
            </div>
            <div class="grid gap-8 row-gap-0 lg:grid-cols-3">
                <div class="relative text-center">
                    <div
                        class="flex items-center text-3xl font-black justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-20 sm:h-20 bg-gradient-to-l bg-[#869f69c8] bg-[#b7cba0ed]">
                        1
                    </div>
                    <div class="flex flex-col items-center justify-center">
                        <div class="w-52 text-center flex flex-col">
                            <p class="max-w-md mb-1 text-md text-gray-900 sm:mx-auto font-bold">
                                DESIGN AND
                                DRAWINGS
                            </p>
                            <span class=""> first step in turning your dream tool into
                                a physical product is the design phase.</span>
                        </div>

                    </div>
                    <div class="top-0 right-0 flex items-center justify-center h-24 lg:-mr-8 lg:absolute">
                        <svg class="w-8 text-green-700  transform rotate-90 lg:rotate-0" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                            <line fill="none" stroke-miterlimit="10" x1="2" y1="12" x2="22" y2="12"></line>
                            <polyline fill="none" stroke-miterlimit="10" points="15,5 22,12 15,19 "></polyline>
                        </svg>
                    </div>
                </div>
                <div class="relative text-center">
                    <div
                        class="flex items-center text-3xl font-black justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-20 sm:h-20 bg-[#869f69c8] bg-[#b7cba0ed]">
                        2
                    </div>
                    <div class="flex flex-col items-center justify-center">
                        <div class="w-52 text-center flex flex-col">
                            <p class="max-w-md mb-1 text-md text-gray-900 sm:mx-auto font-bold">
                                SAMPLE
                                PRODUCTION
                            </p>
                            <span class=""> We move on to making a physical product
                                that you can hold and test..</span>
                        </div>

                        <div class="top-0 right-0 flex items-center justify-center h-24 lg:-mr-8 lg:absolute">
                            <svg class="w-8 text-green-700 transform rotate-90 lg:rotate-0" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                <line fill="none" stroke-miterlimit="10" x1="2" y1="12" x2="22" y2="12"></line>
                                <polyline fill="none" stroke-miterlimit="10" points="15,5 22,12 15,19 "></polyline>
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="relative text-center">
                    <div
                        class="flex items-center text-3xl font-black justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-20 sm:h-20 bg-[#869f69c8] bg-[#b7cba0ed]">
                        3
                    </div>
                    <div class="flex flex-col items-center justify-center">

                        <div class="w-52 text-center flex flex-col">
                            <p class="max-w-md mb-1 text-md text-gray-900 sm:mx-auto font-bold">
                                QUANTITY
                                PRODUCTION
                            </p>
                            <span class="">Once you’ve approved your sample product,
                                we move onto final production.</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Steps;