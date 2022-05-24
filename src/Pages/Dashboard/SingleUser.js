import React from 'react';
import userIcon from '../../assets/icons/user_icon.png'
import { toast } from 'react-toastify';

const SingleUser = ({ user, refetch }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error("failed to make an admin")
                }
                return res.json()
            }
            )

            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    refetch()
                    toast.success(`Admin successfully added`)
                }

            })
    }
    return (
        <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                    <img className="w-8 h-8 rounded-full" src={userIcon} alt="Neil image" />
                </div>
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        {email}
                    </p>

                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">

                    {
                        (role !== 'admin') ? <button
                            onClick={makeAdmin}
                            className=" sm:w-auto px-4 py-2   mb-4  text-sm     font-medium   focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200 rounded-full block  border-b border-purple-300 bg-indigo-200 hover:bg-indigo-300 text-indigo-900">Make Admin</button>
                            :
                            <button
                                className=" sm:w-auto px-4 py-2   mb-4  text-sm     font-medium   focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-100 focus:outline-none transition-colors duration-200 rounded-full block  border-b border-green-300 bg-green-200 hover:bg-green-300 text-green-900">Already Admin</button>

                    }

                </div>
            </div>
        </li>
    );
};

export default SingleUser;