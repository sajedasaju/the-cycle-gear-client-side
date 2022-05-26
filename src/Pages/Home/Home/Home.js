import React from 'react';
import HomeTools from '../HomeTools/HomeTools';
import ShowReview from '../ShowReview/ShowReview';
import Banner from './../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeTools></HomeTools>
            <ShowReview></ShowReview>


            <div class="container mx-auto p-9 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
                <img class="rounded-xl" src="https://images.unsplash.com/photo-1547517023-7ca0c162f816" alt="" />
                <div class="flex justify-between items-center">
                    <div>
                        <h1 class="mt-5 text-2xl font-semibold">Aloe Cactus</h1>
                        <p class="mt-2">$11.99</p>
                    </div>
                    <div>
                        <button class="text-white text-md font-semibold bg-green-400 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110 ">Buy Now</button>
                    </div>
                </div>
            </div>










            <div
                class="max-w-md bg-white rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-500">
                <div class="p-4">
                    <img class="rounded-xl" src="https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1049&q=80" alt="Dog" />
                </div>
                <div class="flex justify-between p-6">
                    <div class="flex items-center space-x-4">
                        <img class="h-10 rounded-full" src="https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="" />
                        <h1 class="text-lg text-gray-900 font-bold">Felipe Sacudon</h1>
                    </div>
                    <div class="flex space-x-6 items-center">
                        <div class="flex space-x-2 items-center">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                                </svg>
                            </span>
                            <span class="text-gray-700 font-semibold">20</span>
                        </div>
                        <div class="flex space-x-2 items-center pr-4">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-600 hover:text-red-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                                </svg>
                            </span>
                            <span class="text-gray-700 font-semibold">22</span>
                        </div>
                    </div>
                </div>
            </div>











            {/* <div class="container mx-auto  lg:px-20 "
            // style={
            //     {
            //         'background': 'linear-gradient(90deg, #d53369 0%, #daae51 100%)'
            //     }
            // }
            >
                <div class='grid grid-cols-3 h-full pb-40'>
                    <div class="border-r border-gray-300 mx-3 lg:pl-20">
                        <div class=" py-10 pb-3 mt-72 h-4/6 relative bg-purple-100 group hover:bg-purple-200 cursor-pointer transition ease-out duration-300">
                            <div>
                                <div class="w-4 h-1/5 bg-red-50	absolute right-0 -top-48 bg-purple-100 group-hover:bg-purple-50"></div>
                                <img src="https://i.ibb.co/FzkhpcD/pngegg.png" alt="https://www.pngegg.com/en/png-nllal/download" />
                            </div>
                            <div class="px-7 mt-20">
                                <h1 class="text-3xl font-bold group-hover:text-purple-300 transition ease-out duration-300">01.</h1>
                                <h2 class="text-1xl mt-4 font-bold">Roof light lamp</h2>
                                <p class="mt-2 opacity-60 group-hover:opacity-70 ">Diverse collection of roof lights of quality</p>
                            </div>
                        </div>
                    </div>
                    <div class="border-r border-gray-300 mx-3 lg:pl-20">
                        <div class=" py-10  pb-3 mt-32 h-4/6 relative bg-indigo-100 group hover:bg-indigo-200 cursor-pointer transition ease-out duration-300">
                            <div>
                                <div class="w-4 h-1/5 bg-red-50	absolute right-0 -top-48 bg-indigo-100  group-hover:bg-indigo-50"></div>
                                <img src="https://i.ibb.co/JB4GWMJ/pngegg-1.png" alt="https://www.pngegg.com/en/png-zquqj/download" />
                            </div>
                            <div class="px-7 mt-20">
                                <h1 class="text-3xl font-bold group-hover:text-indigo-300 transition ease-out duration-300">02.</h1>
                                <h2 class="text-1xl mt-4 font-bold">Lounge Chair</h2>
                                <p class="mt-2 opacity-60 group-hover:opacity-70 ">Comfortable collection of perfect lounge chairs</p>
                            </div>
                        </div>
                    </div>
                    <div class="border-r border-gray-300 mx-3 lg:pl-20">
                        <div class=" py-10 pb-3 mt-5 h-4/6 relative bg-red-100 group hover:bg-red-200 cursor-pointer transition ease-out duration-300">
                            <div>
                                <div class="w-4 h-1/5 bg-red-50	absolute right-0 -bottom-44 bg-red-100 group-hover:bg-red-50"></div>
                                <img src="https://i.ibb.co/MgnH44p/pngegg-2.png" alt="https://www.pngegg.com/en/png-epwii/download" />
                            </div>
                            <div class="px-7 mt-5">
                                <h1 class="text-3xl font-bold group-hover:text-red-300 transition ease-out duration-300">03.</h1>
                                <h2 class="text-1xl mt-4 font-bold">Scandinavia Couch</h2>
                                <p class="mt-2 opacity-60 group-hover:opacity-70 ">Best selection of scandinavia couch for your home</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}







            <div class="bg-cover bg-center  h-auto text-white py-24 px-10 object-fill"
                style={{
                    'backgroundImage': 'url(https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)'

                }}
            >
                <div class="md:w-1/2">
                    <p class="font-bold text-sm uppercase">Services</p>
                    <p class="text-3xl font-bold">Multimedia products</p>
                    <p class="text-2xl mb-10 leading-none">Atractive designs for your brand</p>
                    <a href="#" class="bg-purple-800 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800">Contact us</a>
                </div>
            </div>












            {/* <div class="container bg-grey-lightest mx-auto shadow rounded pb-4 bg-cover" style="color:#606F7B;background-color: rgb(165, 182, 198); background-image:url('https://68.media.tumblr.com/f6a4004f3092b0d664daeabb95d5d195/tumblr_oduyciOJNb1uhjffgo1_500.gif');">
                <div class="mt-2 p-4 border-b border-grey-light  text-center">
                    <span class="text-4xl font-thin">Mountain View, US</span>
                    <span class="hidden sm:inline-block align-bottom text-xs">( 94041 )</span>
                </div>
                <div class="text-center text-xl text-grey-light p-4">
                    <span>Fog</span>
                    <span>, fog</span>
                </div>
                <div class="flex justify-center">
                    <div class="text-center p-2">
                        <div class="text-lg text-grey-light">
                            <span class="text-right">45˚F</span>
                            <span class="text-center text-5xl text-white mx-6  font-thin">49˚F</span>
                            <span class="text-left">58˚F</span>
                        </div>
                        <div class="text-grey-light tracking-wide">
                            Saturday | 30 Dec | 10:30pm
                        </div>
                    </div>
                </div>
            </div> */}












        </div >


    );
};

export default Home;