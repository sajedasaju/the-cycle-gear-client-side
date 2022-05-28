import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from './../Shared/Loading/Loading';
import ManageOrdersDetails from './ManageOrdersDetails';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import auth from './../../firebase.init';
import DeleteConfirmModal from './DeleteConfirmModal';

const ManageOrders = () => {
    const [deletingOrder, setDeletingOrder] = useState(null)
    const navigate = useNavigate();
    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch('http://localhost:5000/order', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }

    })
        .then(res => {
            if (res.status === 401 || res.status === 403) {
                signOut(auth);
                localStorage.removeItem('accessToken')
                navigate('/')
            }
            return res.json()
        })
    )


    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <>
            <div className="flex flex-col w-full border-opacity-50 mt-6 lg:w-4/5	 md:w-4/5 sm:w-full mx-auto">
                <h2 className='text-2xl text-center mb-12 font-bold border-y-2 py-3 font-serif text-primary text-[#7aad3b]'>MANAGE ORDERS</h2>
            </div>


            <div className=''>
                <table className=" border-collapse block md:table  my-12 manage-inventory-container  shadow-2xl rounded-lg lg:w-4/5	 md:w-4/5 sm:w-full mx-auto">
                    <thead className="block md:table-header-group">
                        <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
                            <th className="bg-gray-300 p-2 text-gray-600 font-bold md:border md:border-grey-500 text-left block md:table-cell">Tool Image</th>
                            <th className="bg-gray-300 p-2 text-gray-600 font-bold md:border md:border-grey-500 text-left block md:table-cell">Tool Name</th>
                            <th className="bg-gray-300 p-2 text-gray-600 font-bold md:border md:border-grey-500 text-left block md:table-cell">Ordered By</th>
                            <th className="bg-gray-300 p-2 text-gray-600 font-bold md:border md:border-grey-500 text-left block md:table-cell">Ordered Quantity</th>

                            <th className="bg-gray-300 p-2 text-gray-600 font-bold md:border md:border-grey-500 text-left block md:table-cell">Status</th>
                            <th className="bg-gray-300 p-2 text-gray-600 font-bold md:border md:border-grey-500 text-left block md:table-cell">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="block md:table-row-group">


                        {
                            orders?.map(order => <ManageOrdersDetails
                                key={order._id}
                                order={order}
                                refetch={refetch}
                                setDeletingOrder={setDeletingOrder}

                            ></ManageOrdersDetails>)
                        }

                    </tbody>
                </table>
            </div>
            {
                deletingOrder && <DeleteConfirmModal
                    deletingOrder={deletingOrder}
                    refetch={refetch}
                    setDeletingOrder={setDeletingOrder}
                ></DeleteConfirmModal>
            }

        </>
    );
};

export default ManageOrders;