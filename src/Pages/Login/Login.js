import React, { useEffect, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import Loading from './../Shared/Loading/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Sociallogin from './Sociallogin/Sociallogin';
import { toast } from 'react-toastify';
import emailIcon from '../../assets/icons/email.png'

const Login = () => {
    const [email, setEmail] = useState('');

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth)

    const [sendPasswordResetEmail, sending, ResetError] = useSendPasswordResetEmail(auth);

    useEffect(() => {

        if (error) {
            if (error?.code === 'auth/invalid-email') {
                toast.error("Invalid email provided, please provide a valid email");
            }
            else if (error?.code === 'auth/user-not-found') {
                toast.error("User Not Found");
            }
            else if (error?.code === 'auth/wrong-password') {
                toast.error("Wrong password.");
            }
            else {
                toast.error("Something went wrong");
            }

        }

    }, [error])


    // const [token] = useToken(user || gUser)

    // useEffect(() => {
    //     if (token) {
    //         // console.log(user || gUser)
    //         navigate(from, { replace: true });
    //     }
    // }, [token, from, navigate])




    if (loading) {
        return <Loading></Loading>
    }


    if (user) {

        // navigate(from, { replace: true });
        navigate('/');
    }



    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
        reset();
    };

    const resetPassword = async () => {
        console.log(email)
        if (email) {
            await sendPasswordResetEmail(email);
            toast.error("Sent Email")
        }
        else {
            toast("Please enter your email")
        }

    }


    return (

        <div class=" h-screen overflow-hidden flex items-center justify-center">
            <div class="bg-white lg:w-96 md:w-5/12	 w-10/12 shadow-3xl shadow-2xl shadow-2xl border-l-4 border-solid border-slate-900 rounded-2xl mb-10 pb-10">



                <div class="bg-gray-800 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-4 md:p-4 mb-40">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="#FFF">
                        <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
                    </svg>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} class="p-6  pt-16 pb-0">
                    <div className='mb-6 '>
                        <div class="flex items-center text-lg ">
                            <span className=' absolute ml-3'><img src={emailIcon} alt="" height='24px' width='23px' /></span>
                            <input

                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full  bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full"
                                {...register("email",

                                    {
                                        required: {
                                            value: true,
                                            message: "Email is required"
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Please provide a valid email'
                                        },
                                        onChange: (e) => { setEmail(e.target.value) }

                                    })}
                            />

                        </div>
                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}


                        </label>
                    </div>


                    <div className='mb-6'>
                        <div class="flex items-center text-lg ">
                            <svg class="absolute ml-3" viewBox="0 0 24 24" width="24">
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


                    <div className="mt-6  flex items-center justify-between block text-gray-700 text-sm font-bold mb-6">
                        <p><input className='mr-2' type="checkbox" />Remember me</p>
                        <Link to='/login' onClick={resetPassword} className="font-bold text-sm text-orange-500 hover:text-orange-800">Forget password?</Link>

                    </div>



                    <input

                        className='btn w-full max-w-xs text-white bg-gradient-to-b from-gray-700 to-gray-900 font-medium p-2 md:p-4 text-white uppercase w-full rounded-2xl mb-6' type="submit"
                        value='Login' />




                    <p className='flex justify-between'>
                        <small>New to The Cycle Gear?
                        </small>
                        <Link to='/signup'
                            className='text-primary hover:underline'
                        >Create new account</Link>
                    </p>


                </form>
                <div className="divider">OR</div>

                <Sociallogin></Sociallogin>
            </div>
        </div>



    );
};

export default Login;