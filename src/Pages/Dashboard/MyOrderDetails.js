import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const MyOrderDetails = ({ order, refetch, setDeletingOrder }) => {
    const { img, price, email, name, toolName, address, phone, orderedQuantity } = order;
    // console.log(setDeletingOrder)

    // const handleDelete = id => {
    //     console.log("DATA")
    //     fetch(`http://localhost:5000/order/${id}`, {
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
        <div class="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
            <div class="pb-4 md:pb-8 w-full md:w-40">
                <img class="w-full hidden md:block" src={img} alt="dress" />
                <img class="w-full md:hidden" src={img} alt="dress" />
            </div>

            <div class="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
                <div class="w-full flex flex-col justify-start items-start space-y-8">
                    <h3 class="text-lg dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">{toolName}</h3>
                    <div class="flex justify-start items-start flex-col space-y-2">
                        <p class="text-lg dark:text-white leading-none text-[#498322] font-bold"><span class="dark:text-black text-black font-normal">Ordered Quantity: </span> {orderedQuantity}</p>
                        <p class="text-sm dark:text-white leading-none text-gray-800"><span class="dark:text-gray-400 text-gray-300">Size: </span> Small</p>
                        <p class="text-sm dark:text-white leading-none text-gray-800"><span class="dark:text-gray-400 text-gray-300">Color: </span> Light Blue</p>
                    </div>
                </div>





                <div class="flex justify-between space-x-8 items-start w-full">
                    <p class=" text-[#498322] xl:text-3lg leading-6 text-2xl font-extrabold ">${price}</p>




                    {
                        (!order.paid) &&
                        <label onClick={() => setDeletingOrder(order)}
                            for="delete-confirm-modal" class="btn btn-xs btn-error">Delete</label>


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