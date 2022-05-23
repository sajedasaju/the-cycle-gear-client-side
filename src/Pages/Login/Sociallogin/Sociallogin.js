import React, { useEffect } from 'react';
import Loading from './../../Shared/Loading/Loading';
import auth from './../../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import useToken from './../../../hooks/useToken';
import { useNavigate, useLocation } from 'react-router-dom';

const Sociallogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [token] = useToken(user)
    useEffect(() => {
        if (token) {
            // console.log(user || gUser)
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])

    useEffect(() => {

        if (error) {
            toast.error(`${error?.message}`)

        }

    }, [error])

    if (loading) {
        return <Loading></Loading>
    }




    return (

        <div class="rounded-t mb-0 ">

            <div class="btn-wrapper text-center">

                <button onClick={() => signInWithGoogle()} class="btn w-full max-w-xs text-white bg-gradient-to-b from-gray-700 to-gray-900 font-medium p-2 md:p-4 text-white uppercase w-full rounded-2xl mb-6 " type="button">
                    <img alt="..." class="w-5 mr-1" src="https://demos.creative-tim.com/notus-js/assets/img/google.svg" />Continue With Google </button>

            </div>
            {/* {signInError} */}

        </div>





    );
};

export default Sociallogin;