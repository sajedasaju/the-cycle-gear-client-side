import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import Loading from './../Shared/Loading/Loading';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import { toast } from 'react-toastify';
import profileAdd from '../../assets/banner/removeAdd.png'

const MyProfile = () => {
    const [user] = useAuthState(auth)
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();

    const { data: users, isLoading, refetch } = useQuery('users', () => fetch(`http://localhost:5000/user/${user?.email}`)
        .then(res => res.json())
    )

    console.log(user.displayName)

    if (isLoading) {
        return <Loading></Loading>
    }
    // const currentUser = {
    //     email: email
    // }
    // if (email) {
    //     fetch(`https://protected-anchorage-05977.herokuapp.com/user/${email}`, {
    //         method: 'PUT',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(currentUser)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             const accessToken = data.token;
    //             localStorage.setItem('accessToken', accessToken)
    //             setToken(accessToken)
    //         })

    // }


    const onSubmit = (data, e) => {




        const user = {
            userId: users._id,
            // email: user.email,
            // name: data.name,
            city: data.city,
            district: data.district,
            education: data.education,
            linkedin: data.linkedin,

            phone: data.phone

        }
        console.log("USER", user)

        //update backend after payment successfull
        const url = `http://localhost:5000/user/${users._id}`
        fetch(url, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },


            body: JSON.stringify(user),
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    toast.success("Updated your information")
                    reset();
                }
                else {
                    toast.error("Sorry,failed to update")
                }
                console.log(data)
            })

    }



    return (
        <div>

            <div class="max-w-5xl sm:mr-auto mr-auto">
                {/* <div class="max-w-5xl sm:mx-auto my-24 mx-4"> */}
                <div class="">
                    <div
                        class="bg-[#b7cba0ed]  rounded-md rounded-br-[100px] sm:rounded-br-[250px] w-full shadow-md flex flex-wrap flex-col-reverse md:flex-row p-6 sm:p-8 w-screen">
                        <div class="w-full sm:w-2/3 text-center sm:text-left">
                            <h1 class="text-3xl sm:text-5xl font-bold text-gray-100 sm:leading-relaxed mt-4">Your Profile Can Update As You Want</h1>
                            <p class="text-white text-sm sm:text-base py-4 sm:pr-5">Update your profile if needed.</p>
                            <button
                                class="px-6 py-3 bg-pink-500 text-gray-200 mt-4 mb-8 text-base font-medium rounded-md shadow-md hover:bg-pink-600 hover:text-gray-50 bg-gradient-to-l from-[#87c738] to-[#4b7420] ">Update Now</button>
                        </div>
                        <div class="w-full md:w-1/3">
                            <img
                                src={profileAdd}
                                alt=""
                                class="mx-auto mt-4 sm:mt-0 sm:w-full transition-transform hover:scale-110 duration-300 sm:w-2/4 lg:w-4/6" />
                        </div>
                    </div>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl justify-center my-24">

                    {/* name feild */}
                    <div className='form-control w-full '>
                        <input className="title bg-gray-100 border border-gray-300 p-2  outline-none" spellCheck="false" placeholder="Tool Name" type="text" defaultValue={user.displayName} {...register("name", {
                            required: {
                                value: true,
                                message: "Please provide tool name ! its required"
                            },
                        })} />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}

                        </label>
                    </div>

                    <div className="form-control w-full ">


                        <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
                        <input className="title bg-gray-100 border border-gray-300 p-2  outline-none w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" spellCheck="false" value={users.email} type="text" {...register("email")} />



                    </div>

                    {/* //education */}
                    <div className="relative form-control w-full mb-0">
                        <label for="education" className="leading-7 text-sm text-gray-600">Education</label>
                        <input type='text' className="title bg-gray-100 border border-gray-300 p-2  outline-none w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" spellCheck="false" placeholder="Your education" {...register("education", {
                            required: {
                                value: true,
                                message: "Please provide your education ! its required"
                            },
                        })
                        }  ></input>
                        <label className="label">
                            {errors.education?.type === 'required' && <span className="label-text-alt text-red-500">{errors.education.message}</span>}

                        </label>




                    </div>
                    {/* //Linkedin */}
                    <div className="relative form-control w-full mb-0">
                        <label for="linkedin" className="leading-7 text-sm text-gray-600">Linkedin</label>
                        <input type='text' className="title bg-gray-100 border border-gray-300 p-2  outline-none w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" spellCheck="false" placeholder="Your linkedin" {...register("linkedin", {
                            required: {
                                value: true,
                                message: "Please provide your linkedin ! its required"
                            },
                        })
                        }  ></input>
                        <label className="label">
                            {errors.linkedin?.type === 'required' && <span className="label-text-alt text-red-500">{errors.linkedin.message}</span>}

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

                    <div className='flex flex-col md:flex-row lg:flex-row xl:flex-row gap-3'>
                        {/*  address Feild */}
                        <div className="relative form-control w-full mb-0">
                            <label for="city" className="leading-7 text-sm text-gray-600">city</label>
                            <input type='text' className="title bg-gray-100 border border-gray-300 p-2  outline-none w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" spellCheck="false" placeholder="Your city" {...register("city", {
                                required: {
                                    value: true,
                                    message: "Please provide your city ! its required"
                                },
                            })
                            }  ></input>
                            <label className="label">
                                {errors.city?.type === 'required' && <span className="label-text-alt text-red-500">{errors.city.message}</span>}

                            </label>


                        </div>
                        <div className="relative form-control w-full mb-0">
                            <label for="district" className="leading-7 text-sm text-gray-600">District</label>
                            <input type='text' className="title bg-gray-100 border border-gray-300 p-2  outline-none w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" spellCheck="false" placeholder="Your district" {...register("district", {
                                required: {
                                    value: true,
                                    message: "Please provide your district ! its required"
                                },
                            })
                            }  ></input>
                            <label className="label">
                                {errors.district?.type === 'required' && <span className="label-text-alt text-red-500">{errors.district.message}</span>}

                            </label>




                        </div>





                    </div>






                    <div className="buttons flex">


                        <button type='submit' className="text-white px-4 w-auto h-10  rounded hover:bg-amber-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none bg-gradient-to-l from-[#87c738] to-[#4b7420] ">Update</button>
                    </div>
                </div>


            </form>




        </div >
    );
};

export default MyProfile;