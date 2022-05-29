import React from 'react';

const Subscribe = () => {
    return (
        <div className='mt-12'>


            <section class="w-full bg-[#869f69c8] bg-[#b7cba0ed] pb-1">
                <div class="container px-4 mx-auto">
                    <div class="grid grid-cols-1 mt-4 lg:grid-cols-3">
                        <div class="flex flex-row text-center justify-center text-white my-auto ">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white my-auto mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                            </svg>
                            <h1 class="font-bold text-3xl">Suscribe for Join Us!</h1>
                        </div>
                        <div class="text-center text-white my-auto">
                            <h2 class="text-xl">Subscribe to get information coupons.</h2>
                        </div>
                        <div class="py-2 mx-4 lg:py-10">
                            <div class="bg-white shadow flex w-full">
                                <input
                                    type="text"
                                    placeholder="Enter your email"
                                    class="w-full rounded-tl-full rounded-bl-full py-2 px-4" />
                                <button class="bg-secondary hover:bg-[#81B441] py-2 px-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>


                    <div class="flex flex-col justify-start mb-3 space-x-0 space-y-2  text-white text-md md:flex-row md:justify-center md:space-x-8 md:space-y-0 ">
                        <div class="flex items-center">
                            <svg viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 mr-1 text-green-900 bg-secondary rounded-full">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            No credit card required
                        </div>
                        <div class="flex items-center">
                            <svg viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 mr-1 text-green-900 bg-secondary rounded-full">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            14 days free
                        </div>
                        <div class="flex items-center">
                            <svg viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 mr-1 text-green-900 bg-secondary rounded-full">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            Cancel anytime
                        </div>
                    </div>




                </div>
            </section>





        </div>

    );
};

export default Subscribe;