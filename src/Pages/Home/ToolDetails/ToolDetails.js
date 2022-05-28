import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../../firebase.init';
import { useForm } from 'react-hook-form';
import useToolDetail from '../../../hooks/useToolDetail';
import { toast } from 'react-toastify';
import orderbg from '../../../assets/banner/banner4.jpg'

const ToolDetails = () => {
    const { toolId } = useParams();
    const [tool] = useToolDetail(toolId)
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [user] = useAuthState(auth);
    let minOrder;
    minOrder = tool.minimumOrder;
    const available = tool.availableQuantity;
    let checkDisable = errors.minimumOrder;
    // console.log(user.displayName)
    // console.log("ERror ", errors)


    const onSubmit = (data, e) => {
        // console.log(data)
        if (minOrder <= data.minimumOrder) {
            minOrder = data.minimumOrder
        }

        // console.log(minOrder)

        const order = {
            img: tool.img,
            userName: data.name,
            toolName: tool.name,
            email: data.email,
            phone: data.phone,
            address: data.address,
            orderedQuantity: minOrder,
            price: tool.price * minOrder

        }
        console.log(data.minimumOrder)

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
            <div className="min-w-screen   flex items-center p-5 lg:p-10 overflow-hidden relative">
                <div className="w-full max-w-6xl rounded bg-white shadow-2xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
                    <div className="md:flex items-center -mx-10">
                        <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                            <div className="relative">
                                <img src={tool.img} className="w-full relative z-10" alt="" />
                                <div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-10">
                            <div className="mb-10">
                                <h1 className="font-bold uppercase text-2xl mb-5">{tool.name}</h1>
                                <p className="text-sm mb-4">{tool.description}</p>


                                <div className="flex border-t border-gray-200 py-2">
                                    <span className="text-gray-500">Minimum Order Quantity</span>
                                    <span className="ml-auto text-gray-900">{tool.minimumOrder}</span>
                                </div>

                                <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                                    <span className="text-gray-500">Available Quantity</span>
                                    <span className="ml-auto text-gray-900">{tool.availableQuantity}</span>
                                </div>


                            </div>
                            <div className=' flex flex-col md:flex-row lg:flex-row justify-between items-center justify-items-center'>
                                <div className="inline-block align-bottom ">
                                    <span className="text-2xl leading-none align-baseline">$</span>
                                    <span className="font-bold text-5xl leading-none align-baseline">{tool.price}</span>
                                    {/* <span className="text-2xl leading-none align-baseline">.99</span> */}
                                </div>
                                <div className="inline-block align-bottom">
                                    <button className=" opacity-75 hover:opacity-100 text-white hover:text-gray-900 rounded-full px-10 py-2 font-semibold bg-gradient-to-l from-[#87c738] to-[#4b7420] "><i className="mdi mdi-cart -ml-2 mr-2 "></i> BUY NOW</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>










            <section className="text-gray-600 body-font" id='#order'>
                <div className="container px-5 py-24 mx-auto flex flex-wrap items-center justify-center" style={{
                    'backgroundImage': `url(${orderbg})`,
                    'backgroundRepeat': 'no-repeat',
                    'backgroundSize': 'cover'

                }}
                >
                    <div className="lg:w-3/5 lg:pr-0 pr-0">
                        <h1 className="title-font font-medium font-bold text-5xl text-[#81B441]">Slow-carb next level shoindcgoitch ethical authentic, poko scenester</h1>
                        <p className="leading-relaxed mt-4 text-white text-lg">Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.</p>
                    </div>



                    <div className="lg:w-2/6 xl:w-2/5 md:w-2/3 bg-gray-100 rounded-lg p-8 flex flex-col lg:ml-auto w-full mt-10 lg:mt-0">

                        <form onSubmit={handleSubmit(onSubmit)}>


                            {/* Name Feild */}
                            <div className="relative form-control w-full mb-2">


                                <label for="full-name" className="leading-7 text-sm text-gray-600">Name</label>
                                <input className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" spellCheck="false" value={user.displayName} type="text" {...register("name")} />



                            </div>

                            {/* email Feild */}
                            <div className="relative form-control w-full mb-2">


                                <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
                                <input className="title bg-gray-100 border border-gray-300 p-2  outline-none w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" spellCheck="false" value={user.email} type="text" {...register("email")} />



                            </div>
                            {/* order Feild */}
                            <div className="relative form-control w-full mb-0">


                                <label for="order" className="leading-7 text-sm text-gray-600">Order Quantity</label>


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
                            <div className="relative form-control w-full mb-0">


                                <label for="phone" className="leading-7 text-sm text-gray-600">phone</label>
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
                            <div className="relative form-control w-full mb-0">
                                <label for="address" className="leading-7 text-sm text-gray-600">Address</label>
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
                                            type='submit' className="text-white px-4 w-auto h-10 bg-[#758664b9] rounded hover:opacity-.5 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">Add</button>
                                        :
                                        <button
                                            type='submit' className="text-white px-10 w-auto h-10   hover:bg-[#4f692f] active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none bg-gradient-to-l from-[#87c738] to-[#4b7420] rounded-full hover:bg-[#4f692f]">Add</button>




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