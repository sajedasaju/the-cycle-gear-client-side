import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

const MyReview = () => {
    const [user] = useAuthState(auth)
    const navigate = useNavigate();
    // console.log(user)
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)

        const review = {
            rate: data.rate,
            review: data.review,
            email: user?.email,
            name: user?.displayName
        }

        //send to  database
        fetch('http://localhost:5000/review', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(review)
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('accessToken')
                    navigate('/')
                }
                return res.json()
            })
            .then(added => {
                // console.log("review added", added)
                if (added) {
                    toast.success(`Thank you ${user.displayName} for your feedback`)
                    reset();
                }
                else {
                    toast.error("Sorry,failed to add your feedback")
                }
            })

    }
    return (
        <div>
            <div class="hero bg-base-200 my-24">
                <div class="hero-content flex-col lg:flex-row-reverse py-10">

                    <div class="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100 order-last  lg:order-first xl:order-first">
                        <div class="card-body py-4">

                            <div class="px-12 ">
                                <h2 class="text-gray-800 text-3xl font-semibold justify-center text-center">Your opinion matters to us!</h2>
                            </div>
                            <div class="bg-gray-200 w-full flex flex-col items-center">
                                <div class="flex flex-col items-center  space-y-3">
                                    <span class="text-lg text-gray-800">How was quality of our services?</span>
                                    <div class="flex space-x-3">
                                        <svg class="w-8 h-8 text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <svg class="w-8 h-8 text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <svg class="w-8 h-8 text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <svg class="w-8 h-8 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <svg class="w-8 h-8 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    </div>
                                </div>
                                <div class="w-3/4 flex flex-col pt-2">
                                    <form onSubmit={handleSubmit(onSubmit)} >

                                        <div className="form-control w-full max-w-xs">

                                            <select  {...register('rate', {
                                                required: {
                                                    value: true,
                                                    message: "Rate is required"
                                                }
                                            })
                                            } class="select w-full max-w-xs input-bordered  text-gray-500 rounded-xl resize-none" required>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>

                                            </select>


                                            <label className="label">
                                                {errors.rate?.type === 'required' && <span className="label-text-alt text-red-500">{errors.rate.message}</span>}


                                            </label>

                                        </div>


                                        <div className="form-control w-full max-w-xs">

                                            <textarea rows="2"
                                                placeholder="Write review message here"
                                                className=" input-bordered w-full max-w-xs p-4 text-gray-500 rounded-xl resize-none"

                                                {...register("review", {
                                                    required: {
                                                        value: true,
                                                        message: "review is required"
                                                    }
                                                })}
                                            >
                                            </textarea>
                                            <label className="label">
                                                {errors.review?.type === 'required' && <span className="label-text-alt text-red-500">{errors.review.message}</span>}

                                            </label>
                                        </div>


                                        {/* <div className="form-control w-full max-w-xs">
                                            <textarea rows="3" class="p-4 text-gray-500 rounded-xl resize-none" placeholder='Please review message here'></textarea>
                                        </div> */}



                                        <button class="py-2 px-4 mb-6 text-lg bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl text-white mx-auto w-full">Rate now</button>
                                    </form>

                                </div>
                            </div>
                            <div class="flex items-center justify-center">
                                <Link to='/' class="text-gray-600">Maybe later</Link>
                            </div>



                            {/* <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" class="input input-bordered" />
                                <label class="label">
                                    <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div class="form-control mt-6">
                                <button class="btn btn-primary">Login</button>
                            </div> */}
                        </div>
                    </div>








                    <div class="text-center lg:text-left ">
                        <h1 class="text-4xl font-bold">Rate our services.</h1>
                        <p class="py-4">Give us your valuable feedback..</p>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default MyReview;