import React from 'react';
import { toast } from 'react-toastify';

const ManageOrdersDetails = ({ order, refetch, setDeletingOrder }) => {

    const { _id, img, price, email, userName, toolName, address, phone, orderedQuantity } = order;
    // console.log("from manage order details", order.status)


    const handleSubmit = () => {
        fetch(`http://localhost:5000/order/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())

            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    refetch()
                    toast.success(`Admin successfully added`)
                }

            })

    }


    return (
        <tr className=" border border-grey-500 md:border-none block md:table-row">
            <td className="p-2  text-left block md:table-cell border-x-2"><span className="inline-block w-1/3 md:hidden font-bold ">Name</span>
                <div className="avatar">
                    <div className="w-16 rounded">
                        <img src={img} alt="tool photo" />
                    </div>
                </div>
            </td>

            <td className="p-2  text-left block md:table-cell border-x-2"><span className="inline-block w-1/3 md:hidden font-bold">Tool Name</span>{toolName}</td>

            <td className="p-2  text-left block md:table-cell border-x-2"><span className="inline-block w-1/3 md:hidden font-bold">Ordered By</span>{userName}</td>
            <td className="p-2  text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Ordered Quantity</span>{orderedQuantity}</td>


            <td className="p-2  text-left block md:table-cell border-x-2">
                <span className="inline-block w-1/3 md:hidden font-bold">Payment</span>
                {
                    (order.paid && order.pandingChange !== 'shipped') &&
                    <>

                        <button className='btn btn-xs btn-red-500' onClick={handleSubmit}>Panding</button>
                    </>
                    // <label onClick={() => setDeletingOrder(order)}
                    //     for="delete-confirm-modal" className="btn btn-xs btn-error">Delete</label>


                    // :




                }
                {
                    (!order.paid) ?
                        <button disabled className='btn btn-xs btn-red-500'>Unpaid</button>
                        :
                        <button disabled className='btn btn-xs btn-red-500'>Paid</button>

                }
                {
                    (order.paid && order.pandingChange === 'shipped') &&
                    <>

                        <button disabled className='btn btn-xs btn-red-500'>Shipped</button>
                    </>


                }
            </td>
            {/* <td className="p-2  text-left block md:table-cell border-x-2">
                <span className="inline-block w-1/3 md:hidden font-bold">Status</span>
                {
                    (!order.status && order.paid) ?
                        // <label onClick={() => setDeletingOrder(order)}
                        //     for="delete-confirm-modal" className="btn btn-xs btn-error">Delete</label>


                        // :
                        <button disabled className='btn btn-xs btn-red-500'>Panding</button>
                        :
                        <button disabled className='btn btn-xs btn-red-500'>Shipped</button>

                }
            </td> */}
            <td className="p-2  text-left block md:table-cell border-x-2">

                <span className="inline-block w-1/3 md:hidden font-bold">Actions</span>

                {
                    (!order.paid) ?

                        <label onClick={() => setDeletingOrder(order)}
                            for="delete-confirm-modal" className="btn btn-xs btn-error bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded">Delete</label>
                        :
                        <button disabled className='btn btn-xs btn-error bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded'>Delete</button>

                }



            </td>

        </tr >
    );
};

export default ManageOrdersDetails;