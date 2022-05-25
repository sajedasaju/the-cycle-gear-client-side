import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../../firebase.init';
import { useForm } from 'react-hook-form';
import useToolDetail from '../../../hooks/useToolDetail';
import { toast } from 'react-toastify';

const ToolDetails = () => {
    const { toolId } = useParams();
    const [tool] = useToolDetail(toolId)
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [user] = useAuthState(auth);
    const minOrder = tool.minimumOrder;
    const available = tool.availableQuantity;
    let checkDisable = errors.minimumOrder;
    // console.log(checkDisable)
    // console.log("ERror ", errors)


    const onSubmit = (data, e) => {
        // console.log(data)
        const order = {
            img: tool.img,
            userName: data.name,
            toolName: tool.name,
            email: data.email,
            phone: data.phone,
            address: data.address,
            orderedQuantity: data.minimumOrder,
            price: tool.price * data.minimumOrder

        }
        // console.log(tool.price * data.minimumOrder)

        //send to  database
        fetch('https://protected-anchorage-05977.herokuapp.com/order', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(added => {
                // console.log("order added", added)
                if (added) {
                    toast.success("Congratulation! YOur order is added to your cart .")
                    reset();
                }
                else {
                    toast.error("Sorry,failed to add your order")
                }
            })


    }




    return (
        <div className='min-h-screen my-24'>
            <div class="min-w-screen   flex items-center p-5 lg:p-10 overflow-hidden relative">
                <div class="w-full max-w-6xl rounded bg-white shadow-2xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
                    <div class="md:flex items-center -mx-10">
                        <div class="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                            <div class="relative">
                                <img src={tool.img} class="w-full relative z-10" alt="" />
                                <div class="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
                            </div>
                        </div>
                        <div class="w-full md:w-1/2 px-10">
                            <div class="mb-10">
                                <h1 class="font-bold uppercase text-2xl mb-5">{tool.name}</h1>
                                <p class="text-sm mb-4">{tool.description}</p>


                                <div class="flex border-t border-gray-200 py-2">
                                    <span class="text-gray-500">Minimum Order Quantity</span>
                                    <span class="ml-auto text-gray-900">{tool.minimumOrder}</span>
                                </div>

                                <div class="flex border-t border-b mb-6 border-gray-200 py-2">
                                    <span class="text-gray-500">Available Quantity</span>
                                    <span class="ml-auto text-gray-900">{tool.availableQuantity}</span>
                                </div>


                            </div>
                            <div className=' flex flex-col md:flex-row lg:flex-row justify-between items-center justify-items-center'>
                                <div class="inline-block align-bottom ">
                                    <span class="text-2xl leading-none align-baseline">$</span>
                                    <span class="font-bold text-5xl leading-none align-baseline">{tool.price}</span>
                                    {/* <span class="text-2xl leading-none align-baseline">.99</span> */}
                                </div>
                                <div class="inline-block align-bottom">
                                    <button class="bg-yellow-300 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold"><i class="mdi mdi-cart -ml-2 mr-2"></i> BUY NOW</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
                <div>
                    <a title="Buy me a beer" href="https://www.buymeacoffee.com/scottwindon" target="_blank" class="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
                        <img class="object-cover object-center w-full h-full rounded-full" src="https://i.pinimg.com/originals/60/fd/e8/60fde811b6be57094e0abc69d9c2622a.jpg" />
                    </a>
                </div>
            </div>







            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto flex flex-wrap items-center justify-center" style={{
                    'backgroundImage': "url('https://cdn.pixabay.com/photo/2017/08/19/19/43/nature-2659682_1280.jpg')"
                }}
                >
                    <div class="lg:w-3/5 lg:pr-0 pr-0">
                        <h1 class="title-font font-medium font-bold text-5xl text-white">Slow-carb next level shoindcgoitch ethical authentic, poko scenester</h1>
                        <p class="leading-relaxed mt-4 text-white">Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.</p>
                    </div>



                    <div class="lg:w-2/6 xl:w-2/5 md:w-2/3 bg-gray-100 rounded-lg p-8 flex flex-col lg:ml-auto w-full mt-10 lg:mt-0">

                        <form onSubmit={handleSubmit(onSubmit)}>


                            {/* Name Feild */}
                            <div class="relative form-control w-full mb-2">


                                <label for="full-name" class="leading-7 text-sm text-gray-600">Name</label>
                                <input className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" spellCheck="false" value={user.displayName} type="text" {...register("name")} />



                            </div>

                            {/* email Feild */}
                            <div class="relative form-control w-full mb-2">


                                <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                                <input className="title bg-gray-100 border border-gray-300 p-2  outline-none w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" spellCheck="false" value={user.email} type="text" {...register("email")} />



                            </div>
                            {/* order Feild */}
                            <div class="relative form-control w-full mb-0">


                                <label for="order" class="leading-7 text-sm text-gray-600">Order Quantity</label>


                                <input className="title bg-gray-100 border border-gray-300 p-2  outline-none title bg-gray-100 border border-gray-300 p-2  outline-none w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" spellCheck="false" defaultValue={minOrder} type="number" {...register("minimumOrder", {
                                    // required: {
                                    //     value: true,
                                    //     message: "Please provide tool minimum order quantity ! its required"
                                    // },

                                    min: {
                                        value: minOrder,
                                        message: `Minimum order quantity must be greater than ${minOrder}`
                                        // JS only: <p>error message</p> TS only support string
                                    },
                                    max: {
                                        value: available,
                                        message: `Maximum order quantity must be smaller than or equal ${available}` // JS only: <p>error message</p> TS only support string
                                    }

                                })} />
                                <label className="label">
                                    {/* {errors.minimumOrder?.type === 'required' && <span className="label-text-alt text-red-500">{errors.minimumOrder.message}</span>} */}
                                    {errors.minimumOrder?.type === 'min' && <span className="label-text-alt text-red-500">{errors.minimumOrder.message}</span>}
                                    {errors.minimumOrder?.type === 'max' && <span className="label-text-alt text-red-500">{errors.minimumOrder.message}</span>}

                                </label>



                            </div>


                            {/* Phone  Feild */}
                            <div class="relative form-control w-full mb-0">


                                <label for="phone" class="leading-7 text-sm text-gray-600">phone</label>
                                <input className="title bg-gray-100 border border-gray-300 p-2  outline-none title bg-gray-100 border border-gray-300 p-2  outline-none w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" spellCheck="false" placeholder="Phone Number" type="number" {...register("phone", {
                                    required: {
                                        value: true,
                                        message: "Please provide your phone number ! its required"
                                    }
                                })} />
                                <label className="label">
                                    {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}


                                </label>




                            </div>

                            {/*  address Feild */}
                            <div class="relative form-control w-full mb-0">
                                <label for="address" class="leading-7 text-sm text-gray-600">Address</label>
                                <textarea className="title bg-gray-100 border border-gray-300 p-2  outline-none w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" spellCheck="false" placeholder="Your address" {...register("address", {
                                    required: {
                                        value: true,
                                        message: "Please provide your address ! its required"
                                    },
                                })
                                }  ></textarea>
                                <label className="label">
                                    {errors.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors.address.message}</span>}

                                </label>




                            </div>




                            <div className="buttons flex">
                                {/* <button
                            type='submit' className="text-white px-4 w-auto h-10 bg-amber-600 rounded hover:bg-amber-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">Add</button> */}
                                {
                                    errors.minimumOrder ?
                                        <button
                                            disabled
                                            type='submit' className="text-white px-4 w-auto h-10 bg-blue-300 rounded hover:opacity-.5 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">Add</button>
                                        :
                                        <button
                                            type='submit' className="text-white px-4 w-auto h-10 bg-amber-600 rounded hover:bg-amber-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">Add</button>




                                }


                            </div>

                        </form>
                    </div>
                </div>
            </section>















        </div >





















    );
};

export default ToolDetails;