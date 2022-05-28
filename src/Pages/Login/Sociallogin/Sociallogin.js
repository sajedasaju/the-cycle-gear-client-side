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

        <div className="rounded-t mb-0 ">

            <div className="btn-wrapper text-center">

                <button onClick={() => signInWithGoogle()} className="btn w-full max-w-xs text-white  font-medium p-2 md:p-4 text-white uppercase w-full rounded-2xl mb-6  border-none bg-gradient-to-l from-[#78a640] to-[#6e8159]  " type="button">
                    <img alt="..." className="w-5 mr-1" src="https://demos.creative-tim.com/notus-js/assets/img/google.svg" />Continue With Google </button>

            </div>
            {/* {signInError} */}

        </div>





    );
};

export default Sociallogin;