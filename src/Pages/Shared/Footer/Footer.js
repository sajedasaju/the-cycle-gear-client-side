import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (

        <footer className="p-4 sm:p-6 bg-[#dadadad3] ">
            <div className='container mx-auto'>
                <div class="max-w-screen-xl mx-auto mb-12 lg:mb-16  ">
                    <img class="h-8" src="/images/pathway-logo.svg" alt="UptimeMate logo" />
                </div>

                <div className="w-11/12 mx-auto">
                    {/* <div className='mb-8'>
                        <span
                            className="flex items-center justify-center md:justify-start  lg:justify-start xl:justify-start"
                        >
                            The cycle gear

                        </span>
                        <p className="max-w-xs mt-2 text-sm text-gray-600 mx-auto">
                            Welcome to Decor Place.Decor place is a platform where you can find all your desire decor items.
                        </p>

                    </div> */}
                    <div class="grid grid-cols-1 md:grid-cols-3  lg:grid-cols-3  divide-gray-200 divide-y-2 md:divide-x-2 md:divide-y-0 md:-mx-8">
                        <div class=" md:px-8 py-4 md:py-0">
                            <h5 class="text-xl font-semibold text-gray-700">Company</h5>
                            <nav class="mt-4">
                                <ul class="space-y-2">
                                    <li>
                                        <a href="#" class="font-normal text-base hover:text-gray-400">Landingpages</a>
                                    </li>
                                    <li>
                                        <a href="#" class="font-normal text-base hover:text-gray-400">Features</a>
                                    </li>
                                    <li>
                                        <a href="#" class="font-normal text-base hover:text-gray-400">Download brochure</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div class=" md:px-8 py-4 md:py-0">
                            <h5 class="text-xl font-semibold text-gray-700">Industries</h5>
                            <nav class="mt-4">
                                <ul class="grid lg:grid-cols-2">
                                    <li class="mb-2">
                                        <a href="#" class="font-normal text-base hover:text-gray-400">Employment</a>
                                    </li>
                                    <li class="mb-2">
                                        <a href="#" class="font-normal text-base hover:text-gray-400">Company</a>
                                    </li>
                                    <li class="mb-2">
                                        <a href="#" class="font-normal text-base hover:text-gray-400">Childcare</a>
                                    </li>
                                    <li class="mb-2">
                                        <a href="#" class="font-normal text-base hover:text-gray-400">Download brochure</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div class=" md:px-8 py-4 md:py-0">
                            <h5 class="text-xl font-semibold text-gray-700">Follow us</h5>
                            <nav class="mt-4">
                                <ul class="grid lg:grid-cols-2">
                                    <li class="mb-2">
                                        <a href="#" class="flex space-x-2 font-normal text-base hover:text-gray-400">
                                            <svg class="h-6 w-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                            </svg>
                                            <span>
                                                Twitter
                                            </span>
                                        </a>
                                    </li>
                                    <li class="mb-2">
                                        <a href="#" class="flex space-x-2  font-normal text-base hover:text-gray-400">
                                            <svg class="h-6 w-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                                <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
                                            </svg>
                                            <span>
                                                Instagram
                                            </span>
                                        </a>
                                    </li>
                                    <li class="mb-2">
                                        <a href="#" class="flex space-x-2  font-normal text-base hover:text-gray-400">
                                            <svg class="h-6 w-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                                <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
                                            </svg>
                                            <span>
                                                Facebook
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    {/* <div className="grid grid-cols-2  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6 mt-5">

                        <div className='break-all'>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                            <ul className="text-gray-600 dark:text-gray-400">
                                <li className="my-2">
                                    <Link to='/top' className="hover:underline">Home</Link>
                                </li>
                                <li>
                                    <Link to='/blogs' className="hover:underline">Blogs</Link>
                                </li>
                                <li className='my-2'>
                                    <Link to='/addInventories' className="hover:underline">Add Inventories <span className='text-red-700 font-bold'>*</span> </Link>
                                </li>
                                <li>
                                    <Link to='/manageInventories' className="hover:underline">Manage Inventories <span className='text-red-700 font-bold'>*</span> </Link>
                                </li>
                                <li className='my-2'>
                                    <Link to='/myInventories' className="hover:underline">My Inventories <span className='text-red-700 font-bold'>*</span> </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <div id="footer-content2" className='break-all'>
                                <h4 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Address</h4>
                                <ul className="text-gray-600 dark:text-gray-400">
                                    <li>
                                        <span><i className="fa fa-location-arrow"></i></span>
                                        <p>100,Mohammadpur,Dhaka</p>
                                    </li>
                                    <li className="my-2 flex items-center">
                                        <span className='mr-1'></span>
                                        <p>+66021462134</p>
                                    </li>
                                    <li className="my-2 flex items-center">
                                        <span className='mr-1'></span>
                                        <a>sajedasaju85@gmail.com</a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                        <div>

                            <div >
                                <label className="text-xl font-medium leading-5 text-gray-800 dark:text-white">Get updates</label>
                                <div className="flex items-center justify-between">
                                    <div className="mt-4 flex flex-wrap">
                                        <input type="text" className="p-2 border border-grey-light round text-grey-dark text-sm h-auto" placeholder="Your email address" />
                                        <button className="bg-[#f6993f] text-white rounded-sm h-auto text-xs p-3">Subscribe</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div> */}
                </div>
                <hr className="my-6 border-gray-400 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between pb-4">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400"> <small>copyright @ {new Date().getFullYear()}</small> All Rights Reserved To <span className='font-bold'>Sajeda</span>
                    </span>
                    <div className="flex items-center gap-x-4 ">


                        <a href='https://www.facebook.com/profile.php?id=100010466556130'>
                            <svg className="h-6 w-6 fill-current text-yellow-500 hover:text-yellow-700 mr-6" viewBox="0 0 512 512">
                                <path d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z" />
                            </svg>
                        </a>
                        <Link to='/'>
                            <svg fill="none" className="h-6 w-6 text-yellow-500 hover:text-yellow-700 mr-6" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </Link>
                        <Link to='/'>
                            <svg className="h-6 w-6 fill-current text-yellow-500 hover:text-yellow-700 mr-6" viewBox="0 0 512 512">
                                <path d="M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.79,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM170.87,405.43H106.69V205.88h64.18ZM141,175.54h-.46c-20.54,0-33.84-15.29-33.84-34.43,0-19.49,13.65-34.42,34.65-34.42s33.85,14.82,34.31,34.42C175.65,160.25,162.35,175.54,141,175.54ZM405.43,405.43H341.25V296.32c0-26.14-9.34-44-32.56-44-17.74,0-28.24,12-32.91,23.69-1.75,4.2-2.22,9.92-2.22,15.76V405.43H209.38V205.88h64.18v27.77c9.34-13.3,23.93-32.44,57.88-32.44,42.13,0,74,27.77,74,87.64Z" />
                            </svg>
                        </Link>
                        <Link to='/'>
                            <svg className="h-6 w-6 fill-current text-yellow-500 hover:text-yellow-700 mr-6" viewBox="0 0 512 512">
                                <path d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z" />
                            </svg>
                        </Link>



                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;