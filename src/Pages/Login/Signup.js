import React, { useEffect } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useNavigate, Link } from 'react-router-dom';
import Loading from './../Shared/Loading/Loading';
import { useForm } from 'react-hook-form';
import auth from './../../firebase.init';
import Sociallogin from './Sociallogin/Sociallogin';
import email from '../../assets/icons/email.png'
import { toast } from 'react-toastify';
import useToken from './../../hooks/useToken';

const Signup = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [token] = useToken(user)
    if (token) {
        navigate('/dashboard')
    }

    if (user) {
        // navigate('/dashboard')
    }

    useEffect(() => {
        if (error) {

            if (error?.code === 'auth/invalid-email') {
                toast("Invalid email provided, please provide a valid email");
            }
            else if (error.code === 'auth/missing-email') {
                toast("Missing Email.");
            }
            else if (error.code === 'auth/wrong-password') {
                toast("Wrong password.");
            }
            else if (error.code === 'auth/internal-error') {
                toast("Internal Error.");
            }
            else {
                toast.error(`${error?.message} `)
            }

        }

    }, [error])


    if (loading || updating) {
        return <Loading></Loading>
    }

    let signInError;

    if (error) {
        signInError = <p className='text-red-500 font-bold mb-2 mt-0 pt-0'><small>{updateError?.message}</small></p>


    }




    const onSubmit = async data => {
        // console.log(data.email, data.password)

        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name });
        console.log("update done", data)
        reset()

    };


    return (
        <div className=" h-screen overflow-hidden flex items-center justify-center">
            <div className="bg-white lg:w-96 md:w-5/12	 w-10/12 shadow-3xl shadow-2xl shadow-2xl border-l-4 border-solid border-slate-900 rounded-2xl mb-10 pb-10">

                <div className="bg-gray-800 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-4 md:p-4 mb-40">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="#FFF">
                        <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
                    </svg>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="p-6  pt-16 pb-0">




                    <div className='mb-6 '>
                        <div className="flex items-center text-lg ">

                            <svg className="absolute ml-3" width="24" viewBox="0 0 24 24">
                                <path d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z" />
                            </svg>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="input input-bordered w-full  bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "Name is required"
                                    }
                                })}
                            />

                        </div>
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}


                        </label>
                    </div>

                    <div className='mb-6 '>
                        <div className="flex items-center text-lg ">
                            <span className=' absolute ml-3'><img src={email} alt="" height='24px' width='23px' /></span>

                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full  bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is required"
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Please provide a valid email'
                                    }
                                })}
                            />

                        </div>
                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}


                        </label>
                    </div>


                    <div className='mb-6'>
                        <div className="flex items-center text-lg ">
                            <svg className="absolute ml-3" viewBox="0 0 24 24" width="24">
                                <path d="m18.75 9h-.75v-3c0-3.309-2.691-6-6-6s-6 2.691-6 6v3h-.75c-1.24 0-2.25 1.009-2.25 2.25v10.5c0 1.241 1.01 2.25 2.25 2.25h13.5c1.24 0 2.25-1.009 2.25-2.25v-10.5c0-1.241-1.01-2.25-2.25-2.25zm-10.75-3c0-2.206 1.794-4 4-4s4 1.794 4 4v3h-8zm5 10.722v2.278c0 .552-.447 1-1 1s-1-.448-1-1v-2.278c-.595-.347-1-.985-1-1.722 0-1.103.897-2 2-2s2 .897 2 2c0 .737-.405 1.375-1 1.722z" />
                            </svg>
                            <input
                                type="password"
                                placeholder="Your password"
                                className="input input-bordered w-full bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Password is required"
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'password must be greater than 6 character '
                                    }

                                })}
                            />


                        </div>
                        <label className="label">
                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}

                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}


                        </label>
                    </div>



                    <input

                        className='btn w-full max-w-xs text-white bg-gradient-to-b from-gray-700 to-gray-900 font-medium p-2 md:p-4 text-white uppercase w-full rounded-2xl mb-6' type="submit"
                        value='SIGNUP' />




                    <p className='flex justify-between items-center'>
                        <small>Already have an account?
                        </small>
                        <Link to='/login'
                            className='text-primary hover:underline'
                        >Please LogIn</Link>
                    </p>


                </form>
                <div className="divider">OR</div>
                {signInError}
                <Sociallogin></Sociallogin>
            </div>
        </div>


    );
};

export default Signup;