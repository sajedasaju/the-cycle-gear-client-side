import React from 'react';
import cyclegif from '../../../assets/icons/cycling.gif'

const Loading = () => {
    return (
        <div className='h-screen text-center flex justify-items-center justify-center items-center'>
            <img src={cyclegif} alt="" className='w-28 h-28' />
        </div>
    );
};

export default Loading;