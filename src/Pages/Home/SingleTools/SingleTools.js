import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleTools = ({ tool }) => {
    // console.log(tool)
    const { img, name, price, minimumOrder, availableQuantity, description, _id } = tool;

    const navigate = useNavigate();
    const navigateToToolDetail = (id) => {
        navigate(`/tool/${id}`)
    }
    return (



        <div className=" lg:max-w-lg card flex flex-col justify-center p-2 md:p-6 lg:p-6 bg-white rounded-lg shadow-2xl">
            <div className="prod-title">
                <p className="text-xl  text-gray-900 font-bold">{name}</p>

                {description.length > 70 ? <p title={description} className="uppercase text-sm text-gray-400">{description.slice(0, 70) + '....'}</p> : <p className="uppercase text-sm text-gray-400">{description}</p>}

            </div>
            <div className="prod-img relative">
                <img src={img}
                    className="w-full object-cover object-center " />
                <p className="absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer group">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:opacity-50 opacity-70" fill="none" viewBox="0 0 24 24" stroke="black">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                </p>
            </div>
            <div className="prod-info grid gap-5">
                <div>

                </div>
                <div className="flex flex-col md:flex-row justify-between items-center text-gray-900">
                    <p className="font-bold text-xl">${price}</p>
                    <button
                        onClick={() => { navigateToToolDetail(_id) }}
                        className="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">Add
                        to cart</button>
                </div>
            </div>
        </div>




    );
};

export default SingleTools;