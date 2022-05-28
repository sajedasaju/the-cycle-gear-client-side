import React from 'react';
import banner1 from '../../../assets/banner/banner4.jpg'
import bannerbg from '../../../assets/banner/banner2-bg.png'
const Banner = () => {
    return (

        // <div

        //     className="hero min-h-screen" style={{
        //         'backgroundImage': `url(${banner1})`,
        //         'backgroundPosition': 'center',
        //         'backgroundRepeat': 'no-repeat',
        //         'backgroundSize': 'cover'
        //     }}>
        //     <div className="hero-overlay bg-opacity-15"></div>
        //     <div className="hero-content text-center text-neutral-content">
        //         <div className="max-w-md">
        //             <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
        //             <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        //             <button className="btn btn-primary">Get Started</button>
        //         </div>
        //     </div>
        // </div>



        <div className="z-30 relative items-center justify-center w-full h-full overflow-auto">
            <div className="inset-0 h-screen bg-cover bg-center bgImageSize"
                style={{
                    'backgroundImage': `url(${banner1})`
                }}
            >
            </div>
            <div className="absolute inset-0 z-20 flex items-center justify-center h-screen w-full bg-gray-900 bg-opacity-75"></div>
            <div className="absolute inset-0  z-30  flex flex-col items-center justify-center">
                <div className="shadow-2xl rounded-lg w-4/5 h-96 bg-cover bg-center"
                    style={{
                        'backgroundImage': `url(${banner1})`
                    }}>

                    <div className="grid grid-cols-12 gap-1">
                        <div className="relative my-6 px-8 col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-7 xxl:col-span-7">
                            <div className="border-l-4 border-gray-400 py-20 px-5 mx-2  md:absolute lg:absolute left-0">
                                <p className="italic text-white text-xl md:text-4xl lg:text-6xl uppercase text-center  font-semibold ">
                                    Ride bikes.
                                    Have fun.
                                    Feel good.
                                </p>
                            </div>
                            <div className="text-gray-400 font-semibold text-xl mb-4">07</div>
                            <div className="absolute border-gray-400 border-t-4 bottom-0 py-1 px-4 w-4/5"></div>
                        </div>
                        <div className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-5 xxl:col-span-5">
                            <div className="relative bg-pink-900 h-full md:h-96 w-full bg-opacity-50 rounded-tr-lg rounded-br-lg">
                                <div className="p-8">
                                    <p className="text-white text-xl md:text-xl lg:text-xl mb-4">
                                        Largest bicycle accessories manufacturer.You can order your needed bicycle accessories and get it by our home delivery services.
                                    </p>
                                    <div className="bottom-0 absulate p-2 right-0">
                                        <button className="opacity-75 bg-gray-100 hover:bg-pink-900 hover:text-white text-sm font-bold py-2 px-4 rounded inline-flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span>LEARN MORE</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </div>





        // <div
        //     style={{
        //         'backgroundImage': `url(${bannerbg})`,
        //         'backgroundBlendMode': 'overley',


        //     }}
        //     className="hero min-h-screen bg-base-200 bg-gradient-to-r from-[#78b3d5] to-[#0325367b]">
        //     <div className="hero-content flex-col lg:flex-row">
        //         <img src={banner1} className="max-w-sm lg:max-w-lg rounded-lg shadow-2xl" />
        //         <div className='text-[#282727] max-w-lg '>
        //             <h1 className="text-5xl font-bold">Box Office News!</h1>
        //             <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        //             <button className="btn btn-primary">Get Started</button>
        //         </div>
        //     </div>
        // </div>
    );
};

export default Banner;