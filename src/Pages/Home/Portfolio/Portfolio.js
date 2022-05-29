import React from 'react';
import { Link } from 'react-router-dom';
import propic from '../../../assets/people/me.png'


const Portfolio = () => {
    return (
        <div className='w-5/6 mx-auto mt-12'>
            <h2 className='text-2xl text-center mb-12 font-bold border-y-2 py-3 font-serif text-primary text-[#7aad3b]'>Protfolio</h2>
            <div className="h-full  flex items-center mb-24 justify-center ">


                <div className="border-b-2 block md:flex ">

                    <div className="w-full md:w-2/5 p-4 sm:p-6 lg:p-8 bg-white shadow-md items-center">
                        <div className="flex justify-between">
                            <span className="text-xl font-semibold block">Hey ! It's Sajeda Akhter</span>
                        </div>

                        <span className="text-gray-600 ">All my information given here.</span>
                        <div className='border-t-2 border-gray-300 mt-1'>
                            <div className="w-full p-3 mx-2 flex justify-center ">
                                <img id="showImage" className="max-w-xs  w-6/5 items-center border" src={propic} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-8/12	 p-2 md:p-6 lg:p-8 bg-white lg:ml-4 shadow-md  ">
                        <div className="rounded  shadow p-6">

                            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                                <span clas="text-green-500">
                                    <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </span>
                                <span className="tracking-wide">About</span>
                            </div>
                            <div className="text-gray-700">
                                <div className="grid md:grid-cols-2 text-sm break-words">
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">Name</div>
                                        <div className="px-4 py-2">Sajeda Akhter</div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">Email</div>
                                        <a className="text-blue-800" href="mailto: sajedasaju85@gmail.com" target='_blank'>sajedasaju85@gmail.com</a>

                                    </div>


                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">Current Address</div>
                                        <div className="px-4 py-2">Sylhet,Bangladesh</div>
                                    </div>

                                </div>
                            </div>

                            {/* 
                        <button
                            className="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">Show
                            Full Information</button> */}


                        </div>


                        <div className="bg-white p-3  rounded-sm mt-2 rounded  shadow p-6">

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                                <div className='p-3'>
                                    <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                        <span clas="text-green-500">
                                            <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                        </span>
                                        <span className="tracking-wide">Experience</span>
                                    </div>
                                    <ul className="list-disc
 space-y-1 pl-6">
                                        <li>
                                            <div className="text-teal-600">Javascript</div>
                                        </li>
                                        <li>
                                            <div className="text-teal-600">HTML</div>
                                        </li>
                                        <li>
                                            <div className="text-teal-600">CSS</div>
                                        </li>
                                        <li>
                                            <div className="text-teal-600">API</div>
                                        </li>
                                        <li>
                                            <div className="text-teal-600">Javascript</div>
                                        </li>
                                        <li>
                                            <div className="text-teal-600"> Git</div>
                                        </li>
                                        <li>
                                            <div className="text-teal-600">Framework (Bootstrap, Tailwind)</div>

                                        </li>
                                        <li>
                                            <div className="text-teal-600">Responsive design skills</div>

                                        </li>
                                        <li>
                                            <div className="text-teal-600"> Testing and debugging skills</div>

                                        </li>
                                    </ul>
                                </div>
                                <div className='p-3'>
                                    <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                        <span clas="text-green-500">
                                            <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                                                <path fill="#fff"
                                                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                            </svg>
                                        </span>
                                        <span className="tracking-wide">Education</span>
                                    </div>
                                    <ul className="list-inside space-y-2">

                                        <li>
                                            <div className="text-teal-700">Bachelor of Science in CSE</div>
                                            <div className="text-gray-700 text-xs">completed from <span className='text-md text-teal-400'>Metropolitan University, Sylhet</span></div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>

                        <div className="bg-white p-3  rounded-sm mt-2 rounded  shadow p-6">

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                                <div className='p-3'>
                                    <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                        <span clas="text-green-500">
                                            <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                        </span>
                                        <span className="tracking-wide">Projects</span>
                                    </div>
                                    <ul className="list-disc
space-y-1 pl-6">
                                        <li>


                                            <a target='_blank' rel="noreferrer" href='https://decor-place.web.app/' className="text-teal-600"  > The Decor Place </a>
                                        </li>
                                        <li>
                                            <a target='_blank' rel="noreferrer" href='https://fit-to-fly-13471.web.app/' className="text-teal-600"> Fit To Fly </a>
                                        </li>
                                        <li>
                                            <a target='_blank' rel="noreferrer" href='https://amaze-headphones.netlify.app/' className="text-teal-600"> Amaze Headphones </a>
                                        </li>

                                    </ul>
                                </div>

                            </div>

                        </div>




                    </div>

                </div>







            </div>
        </div>
    );
};

export default Portfolio;