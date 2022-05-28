import React from 'react';
import HomeTools from '../HomeTools/HomeTools';
import ShowReview from '../ShowReview/ShowReview';
import Banner from './../Banner/Banner';
import Summary from './Summary';
import OurStory from '../../../assets/banner/banner14.jpg'
import Subscribe from '../Subscribe';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeTools></HomeTools>
            <Summary></Summary>
            <ShowReview></ShowReview>




            <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <h1 class="font-bold text-indigo-900 text-4xl text-center ">
                        Connect Touch with your phone to send stuff between your devices.
                    </h1>
                </div>
                <div class="grid gap-8 row-gap-0 lg:grid-cols-3">
                    <div class="relative text-center">
                        <div
                            class="flex items-center text-3xl font-black justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-20 sm:h-20">
                            1
                        </div>
                        <div class="flex flex-col items-center justify-center">
                            <div class="w-52 text-center">
                                <p class="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
                                    Download touch from <span class="font-bold">Google Play</span> or the <span class="font-bold">App
                                        Store</span>
                                </p>
                            </div>
                            <div class="inline-flex items-center mb-4">
                                <span>
                                    <img src="https://cdn-icons-png.flaticon.com/128/300/300218.png" alt="Google Play" class="w-8 mr-4" />
                                </span>
                                <span>
                                    <img src="https://cdn-icons-png.flaticon.com/128/179/179310.png" alt="App Store" class="w-8" />
                                </span>
                            </div>
                        </div>
                        <div class="top-0 right-0 flex items-center justify-center h-24 lg:-mr-8 lg:absolute">
                            <svg class="w-8 text-gray-700 transform rotate-90 lg:rotate-0" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                <line fill="none" stroke-miterlimit="10" x1="2" y1="12" x2="22" y2="12"></line>
                                <polyline fill="none" stroke-miterlimit="10" points="15,5 22,12 15,19 "></polyline>
                            </svg>
                        </div>
                    </div>
                    <div class="relative text-center">
                        <div
                            class="flex items-center text-3xl font-black justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-20 sm:h-20">
                            2
                        </div>
                        <div class="flex flex-col items-center justify-center">
                            <div class="w-52 text-center">
                                <p class="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
                                    Scan the QR code with <span class="font-bold">Touch</span>
                                </p>
                            </div>
                            <div class="flex flex-row justify-between items-center mt-2 py-3 px-8 bg-indigo-400 text-gray-100 rounded">
                                Reveal the QR Code
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 2V5h1v1H5zM3 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zm2 2v-1h1v1H5zM13 3a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1V4a1 1 0 00-1-1h-3zm1 2v1h1V5h-1z"
                                        clip-rule="evenodd" />
                                    <path
                                        d="M11 4a1 1 0 10-2 0v1a1 1 0 002 0V4zM10 7a1 1 0 011 1v1h2a1 1 0 110 2h-3a1 1 0 01-1-1V8a1 1 0 011-1zM16 9a1 1 0 100 2 1 1 0 000-2zM9 13a1 1 0 011-1h1a1 1 0 110 2v2a1 1 0 11-2 0v-3zM7 11a1 1 0 100-2H4a1 1 0 100 2h3zM17 13a1 1 0 01-1 1h-2a1 1 0 110-2h2a1 1 0 011 1zM16 17a1 1 0 100-2h-3a1 1 0 100 2h3z" />
                                </svg>
                            </div>
                            <div class="top-0 right-0 flex items-center justify-center h-24 lg:-mr-8 lg:absolute">
                                <svg class="w-8 text-gray-700 transform rotate-90 lg:rotate-0" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                    <line fill="none" stroke-miterlimit="10" x1="2" y1="12" x2="22" y2="12"></line>
                                    <polyline fill="none" stroke-miterlimit="10" points="15,5 22,12 15,19 "></polyline>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="relative text-center">
                        <div
                            class="flex items-center text-3xl font-black justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-20 sm:h-20">
                            3
                        </div>
                        <div class="flex flex-col items-center justify-center">
                            <div class="w-52 text-center">
                                <p class="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
                                    <span class="font-bold">That's it. you'he all set!</span> No login or password needed <span
                                        class="text-4xl">🎉</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Subscribe></Subscribe>








            <div className="relative w-full h-full flex justify-end bg-gradient-to-t from-black via-transparent to-black overflow-hidden">

                {/* :HERO IMAGE */}
                <img src={OurStory} alt="" className="absolute w-full h-full object-cover object-left sm:object-center opacity-70" />


                {/* :HERO MAIN CONTAINER */}
                <div className="relative py-28 xl:py-40 w-full md:w-2/3 lg:w-1/2 h-full flex flex-col justify-center">

                    {/* ::Hero title & text */}
                    <div className="mx-5 md:mx-0 p-8 rounded-xl md:rounded-r-none bg-gray-800 bg-opacity-50 text-white shadow-2xl">
                        <h1 className="text-3xl sm:text-5xl font-josefin font-extrabold">Formidable, <br /><span className="text-yellow-400 text-opacity-80">Fancy Hero 8</span> est <br />Formidable !</h1>
                        <p className="mt-3 text-gray-100 font-firacode">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta blanditiis in asperiores optio est, id, temporibus perspiciatis ratione ipsam quam tempore aliquam distinctio repudiandae iusto facilis, consequatur eligendi illum quos.</p>
                    </div>

                    {/* ::Hero button */}
                    <button className="relative m-5 w-full md:w-2/3 lg:w-2/5 inline-flex items-center text-2xl font-firacode text-white overflow-hidden transition-all duration-300 transform hover:translate-x-4">
                        <span className="relative -top-0.5 mr-2">Explore</span>
                        <img src="https://fancytailwind.com/static/53e4540ef179fe51d5a02619660a1a92/arrow1.png" alt="" className="absolute left-32 w-20" />
                    </button>

                    {/* ::Social media */}
                    <div className="absolute top-4 sm:top-auto bottom-auto sm:bottom-20 md:bottom-0 -right-16 md:right-0 h-36 inline-flex md:flex-col justify-around items-center text-yellow-400 transform -translate-x-1/2">
                        {/* Twitter */}
                        <a href="#link" className="mx-3 transform hover:scale-110">
                            <svg className="w-7 h-7" fill="currentColor" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                            </svg>
                        </a>
                        {/* Linkedin */}
                        <a href="#link" className="mx-3 transform hover:scale-110">
                            <svg className="w-7 h-7" fill="currentColor" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </a>
                        {/* Google + */}
                        <a href="#link" className="mx-3 transform hover:scale-110">
                            <svg className="w-7 h-7" fill="currentColor" enableBackground="new 0 0 24 24" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg">
                                <path d="m21.823 9h-2.187v2.177h-2.177v2.187h2.177v2.177h2.187v-2.177h2.177v-2.187h-2.177z" />
                                <path d="m7.5 19.5c4.328 0 7.203-3.038 7.203-7.326 0-.491-.051-.87-.122-1.248h-7.08v2.578h4.257c-.174 1.095-1.289 3.233-4.257 3.233-2.557 0-4.645-2.118-4.645-4.737s2.087-4.738 4.645-4.738c1.463 0 2.435.624 2.988 1.156l2.036-1.954c-1.311-1.227-2.999-1.964-5.025-1.964-4.144 0-7.5 3.356-7.5 7.5s3.356 7.5 7.5 7.5z" />
                            </svg>
                        </a>
                    </div>

                </div>

                {/* :BOTTOM OPTIONS */}
                <div className="absolute left-1/2 bottom-0 w-full md:w-2/3 flex justify-around items-end transform -translate-x-1/2">
                    {/* ::Our Story */}
                    <a href="#link" className="group relative py-5 w-40 rounded-t-xl bg-white bg-opacity-50 text-center text-gray-600 font-semibold font-firacode transition-all duration-300 transform hover:pb-14">
                        Our Story
                        <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-1/2 h-8 w-8 opacity-0 transition-all duration-300 ease-in transform -translate-x-1/2 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                    </a>
                    {/* ::Our Shop */}
                    <a href="#link" className="group relative py-5 w-40 rounded-t-xl bg-white bg-opacity-50 text-center text-gray-600 font-semibold font-firacode transition-all duration-300 transform hover:pb-14">
                        Our Shop
                        <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-1/2 h-8 w-8 opacity-0 transition-all duration-300 ease-in transform -translate-x-1/2 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                    </a>
                    {/* ::Our Contact */}
                    <a href="#link" className="group relative py-5 w-40 rounded-t-xl bg-white bg-opacity-50 text-center text-gray-600 font-semibold font-firacode transition-all duration-300 transform hover:pb-14">
                        Our Contact
                        <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-1/2 h-8 w-8 opacity-0 transition-all duration-300 ease-in transform -translate-x-1/2 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                    </a>
                </div>

            </div>







            <div class="w-full my-12">
                <section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
                    <div class="text-center pb-12">
                        <h1 class="font-bold uppercase text-3xl lg:text-4xl font-heading text-[#91A88C]">
                            Spread the world
                        </h1>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:px-0 px-6">
                        <div
                            class=" bg-[#91A88C] hover:bg-[#DBE8D9] rounded-lg sahdow-lg flex flex-col justify-center items-center rounded-tr-[80px] rounded-bl-[40px] group">
                            <div class="">
                                <img class="object-center object-cover h-20 w-20 group-hover:h-24 group-hover:w-24"
                                    src="https://cdn-icons-png.flaticon.com/128/179/179342.png" alt="Twitter" />
                            </div>
                            <div class="">
                                <p class="text-2xl text-[#DBE8D9] group-hover:text-gray-700 font-bold ">Twitter</p>
                            </div>
                        </div>
                        <div
                            class="relative w-full bg-[#91A88C] hover:bg-[#DBE8D9] rounded-lg sahdow-lg md:px-12 sm:px-2 px-12 pt-40 pb-20 flex flex-col justify-center items-center rounded-tr-[80px] rounded-bl-[40px] group">
                            <div class="absolute top-16">
                                <img class="object-center object-cover h-24 w-24 group-hover:h-36 group-hover:w-36"
                                    src="https://cdn-icons-png.flaticon.com/128/179/179319.png" alt="Facebook" />
                            </div>
                            <div class="text-center mt-16">
                                <p class="text-2xl text-[#DBE8D9] group-hover:text-gray-700 font-bold ">Facebook</p>
                            </div>
                        </div>
                        <div
                            class="relative w-full bg-[#91A88C] hover:bg-[#DBE8D9] rounded-lg sahdow-lg md:px-12 sm:px-2 px-12 pt-40 pb-20 flex flex-col justify-center items-center rounded-tr-[80px] rounded-bl-[40px] group">
                            <div class="absolute top-16">
                                <img class="object-center object-cover h-24 w-24 group-hover:h-36 group-hover:w-36"
                                    src="https://cdn-icons-png.flaticon.com/128/179/179330.png" alt="LinkedIn" />
                            </div>
                            <div class="text-center mt-14">
                                <p class="text-2xl text-[#DBE8D9] group-hover:text-gray-700 font-bold ">LinkedIn</p>
                            </div>
                        </div>
                    </div>
                    <div
                        class="relative py-8 px-10 bg-[#DBE8D9] text-center cursor-pointer text-2xl font-bold my-16 rounded-lg hover:bg-[#91A88C] hover:text-[#DBE8D9]">
                        Join the Event Discord Coversation
                        <div class="absolute bottom-5 sm:left-52  z-40 opacity-5 overflow-hidden">
                            <img src="https://cdn-icons-png.flaticon.com/128/5968/5968759.png" alt="icon 1" class="w-12 h-12 rotate-45" />
                        </div>
                        <div class="absolute bottom-3 left-52 sm:left-96 z-40 opacity-5 overflow-hidden">
                            <img src="https://cdn-icons-png.flaticon.com/128/5968/5968759.png" alt="icon 1" class="w-16 h-16 -rotate-45" />
                        </div>
                    </div>
                </section>
            </div>















            {/* <div className="container bg-grey-lightest mx-auto shadow rounded pb-4 bg-cover" style="color:#606F7B;background-color: rgb(165, 182, 198); background-image:url('https://68.media.tumblr.com/f6a4004f3092b0d664daeabb95d5d195/tumblr_oduyciOJNb1uhjffgo1_500.gif');">
                <div className="mt-2 p-4 border-b border-grey-light  text-center">
                    <span className="text-4xl font-thin">Mountain View, US</span>
                    <span className="hidden sm:inline-block align-bottom text-xs">( 94041 )</span>
                </div>
                <div className="text-center text-xl text-grey-light p-4">
                    <span>Fog</span>
                    <span>, fog</span>
                </div>
                <div className="flex justify-center">
                    <div className="text-center p-2">
                        <div className="text-lg text-grey-light">
                            <span className="text-right">45˚F</span>
                            <span className="text-center text-5xl text-white mx-6  font-thin">49˚F</span>
                            <span className="text-left">58˚F</span>
                        </div>
                        <div className="text-grey-light tracking-wide">
                            Saturday | 30 Dec | 10:30pm
                        </div>
                    </div>
                </div>
            </div> */}












        </div >


    );
};

export default Home;