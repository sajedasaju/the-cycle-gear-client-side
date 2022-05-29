import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const MyOrderDetails = ({ order, refetch, setDeletingOrder }) => {
    const { _id, img, price, email, name, toolName, address, phone, orderedQuantity } = order;
    // console.log(setDeletingOrder)

    // const handleDelete = id => {
    //     console.log("DATA")
    //     fetch(`https://protected-anchorage-05977.herokuapp.com/order/${id}`, {
    //         method: "DELETE",
    //         headers: {
    //             authorization: `Bearer ${localStorage.getItem('accessToken')}`
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             if (data.deletedCount) {
    //                 toast.success(`${toolName} is deleted`)
    //                 refetch();
    //             }
    //         })
    // }

    return (
        <div className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
            <div className="pb-4 md:pb-8 w-full md:w-40">
                <img className="w-full hidden md:block" src={img} alt="dress" />
                <img className="w-full md:hidden" src={img} alt="dress" />
            </div>

            <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
                <div className="w-full flex flex-col justify-start items-start space-y-6">
                    <h3 className="text-lg dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">{toolName}</h3>
                    <div className="flex justify-start items-start flex-col space-y-2">
                        <p className="text-lg dark:text-white leading-none text-[#498322] font-bold"><span className="dark:text-black text-black font-normal">Ordered Quantity: </span> {orderedQuantity}</p>

                    </div>
                </div>





                <div className="flex justify-between space-x-8 items-start w-full">
                    <p className=" text-[#81B441] xl:text-3lg leading-6 text-xl font-extrabold ">${price}</p>





                    {
                        (!order.paid) &&
                        <label onClick={() => setDeletingOrder(order)}
                            for="delete-confirm-modal" className="btn btn-xs btn-error">Delete</label>


                        // :
                        // <button disabled className='btn btn-xs btn-red-500'>Delete</button>

                    }
                    {

                        (order.price && !order.paid) &&
                        <Link to={`/dashboard/payment/${order._id}`}>
                            <button className='btn btn-xs btn-success'>Pay</button>
                        </Link>
                    }
                    {
                        (order.paid && order.pandingChange === 'shipped') &&
                        <div className='flex flex-col items-end'>

                            <p>
                                <span className='text-success'>Confirmed</span>
                            </p>
                            <br />

                        </div>


                    }
                    {
                        (order.paid && order.pandingChange !== 'shipped') &&
                        <div className='flex flex-col items-end'>

                            <p>
                                <span className='text-success'>pending</span>
                            </p>
                            <br />

                        </div>
                    }
                    {
                        (order.price && order.paid) &&
                        <div className='flex flex-col items-end'>
                            <p>
                                <span className='text-success'>Paid</span>
                            </p>

                            <br />
                            <p
                                className='text-success flex flex-col break-word items-end'>Transaction Id : <span className='text-orange-500 break-all'>{order.transactionId
                                }</span> </p>

                        </div>
                    }



                </div>
            </div>
        </div>

    );
};

export default MyOrderDetails;