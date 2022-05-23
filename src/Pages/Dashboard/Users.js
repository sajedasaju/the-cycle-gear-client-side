import React from 'react';
import { useQuery } from 'react-query';
import Loading from './../Shared/Loading/Loading';
import SingleUser from './SingleUser';

const Users = () => {

    const { isLoading, data: users, refetch } = useQuery('users', () => fetch('http://localhost:5000/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div class="max-w-2xl mx-auto">

            <div class="p-4 max-w-11/12 bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <div class="flex justify-between items-center mb-4 pb-4 border-b">
                    <h3 class="text-xl font-bold leading-none text-gray-900 dark:text-white">All Users </h3>
                    <h3 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Status</h3>
                </div>
                <div class="flow-root">
                    <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">


                        {
                            users.map(user => <SingleUser
                                key={user._id}
                                user={user}
                                refetch={refetch}
                            ></SingleUser>)
                        }

                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Users;