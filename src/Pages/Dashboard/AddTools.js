import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddTools = () => {
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const imageStorageKey = '44eb1f646ac8909975538527b567f6de';
    const onSubmit = (data, e) => {
        const formData = new FormData();
        const image = data.image[0];
        formData.append('image', image);
        console.log(data)
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;


        //send to imagebb
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                console.log('imagebb', result)
                if (result.success) {
                    const img = result.data.url;
                    const tool = {
                        name: data.name,
                        img: img,
                        minimumOrder: data.minimumOrder,
                        availableQuantity: data.availableQuantity,
                        price: data.price,
                        description: data.description

                    }

                    //send to my database
                    fetch('http://localhost:5000/tool', {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(tool)
                    })
                        .then(res => res.json())
                        .then(added => {
                            // console.log("Tool added", added)
                            if (added) {
                                toast.success("Tool added")
                                reset();
                            }
                            else {
                                toast.error("Failed to add!")
                            }
                        })
                }
            })




    }
    return (
        <div className=''>

            <div className="flex flex-col w-full border-opacity-50 mt-12 justify-center items-center justify-items-center">
                <h2 className='text-yellow-500  text-3xl font-bold text-center mb-10'>Add Tools</h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl justify-center mb-24">

                    {/* name feild */}
                    <div className='form-control w-full '>
                        <input className="title bg-gray-100 border border-gray-300 p-2  outline-none" spellCheck="false" placeholder="Tool Name" type="text" {...register("name", {
                            required: {
                                value: true,
                                message: "Please provide tool name ! its required"
                            },
                        })} />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}

                        </label>
                    </div>

                    {/* image feild */}
                    <div className='form-control w-full '>
                        <input className="title bg-gray-100 border border-gray-300 p-2  outline-none" spellCheck="false" placeholder="Tool Image" type="file" {...register("image", {
                            required: {
                                value: true,
                                message: "Please provide tool image ! its required"
                            },
                        })} />
                        <label className="label">
                            {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}

                        </label>
                    </div>


                    {/* minimum order feild */}
                    <div className='form-control w-full '>
                        <input className="title bg-gray-100 border border-gray-300 p-2  outline-none" spellCheck="false" placeholder="Minimun Order Quantity" type="number" {...register("minimumOrder", {
                            required: {
                                value: true,
                                message: "Please provide tool minimum order quantity ! its required"
                            },

                            min: {
                                value: 1,
                                message: 'Minimum order quantity must be greater than 1' // JS only: <p>error message</p> TS only support string
                            }

                        })} />
                        <label className="label">
                            {errors.minimumOrder?.type === 'required' && <span className="label-text-alt text-red-500">{errors.minimumOrder.message}</span>}
                            {errors.minimumOrder?.type === 'min' && <span className="label-text-alt text-red-500">{errors.minimumOrder.message}</span>}

                        </label>
                    </div>




                    {/* Available quantity feild */}
                    <div className='form-control w-full '>
                        <input className="title bg-gray-100 border border-gray-300 p-2  outline-none" spellCheck="false" placeholder="Available Quantity" type="number" {...register("availableQuantity", {
                            required: {
                                value: true,
                                message: "Please provide tool available quantity ! its required"
                            },
                            min: {
                                value: 1,
                                message: 'Minimum available quantity must be greater than 1' // JS only: <p>error message</p> TS only support string
                            }
                        })} />
                        <label className="label">
                            {errors.availableQuantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.availableQuantity.message}</span>}
                            {errors.availableQuantity?.type === 'min' && <span className="label-text-alt text-red-500">{errors.availableQuantity.message}</span>}

                        </label>
                    </div>



                    {/* Tool Price  feild */}
                    <div className='form-control w-full '>
                        <input className="title bg-gray-100 border border-gray-300 p-2  outline-none" spellCheck="false" placeholder="Price in per unit" type="number" {...register("price", {
                            required: {
                                value: true,
                                message: "Please provide tool per unit price ! its required"
                            },
                        })} />
                        <label className="label">
                            {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}

                        </label>
                    </div>



                    {/* Tool description  feild */}
                    <div className='form-control w-full '>
                        <textarea className="description bg-gray-100 sec p-3 h-48	 border border-gray-300 outline-none" spellCheck="false" placeholder="Describe everything about this post here" {...register("description", {
                            required: {
                                value: true,
                                message: "Please provide tool description ! its required"
                            },
                        })
                        }  ></textarea>
                        <label className="label">
                            {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}

                        </label>



                    </div>







                    <div className="icons flex text-gray-500 m-2">
                        <svg className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        <svg className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <svg className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" /></svg>
                        <div className="count ml-auto text-gray-400 text-xs font-semibold">0/300</div>
                    </div>

                    <div className="buttons flex">


                        <button type='submit' className="text-white px-4 w-auto h-10 bg-amber-600 rounded hover:bg-amber-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">Add</button>
                    </div>
                </div>


            </form>


        </div>
    );
};

export default AddTools;