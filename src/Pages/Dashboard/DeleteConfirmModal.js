import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({ deletingOrder, refetch, setDeletingOrder }) => {
    const { toolName } = deletingOrder;

    const handleDelete = id => {
        console.log("DATA")
        fetch(`http://localhost:5000/order/${id}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    toast.success(`${toolName} is deleted`)
                    setDeletingOrder(null)
                    refetch();
                }
            })
    }
    return (
        <div>


            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    {/* <h3 class="font-bold text-lg text-red-600">Are you sure you want to delete ?</h3>
                    <p class="py-4">If you delete ,you cant find the doctor.</p> */}

                    <div class="text-center p-5 flex-auto justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 -m-1 flex items-center text-red-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16 flex items-center text-red-500 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                        </svg>
                        <h2 class="text-xl font-bold py-4 ">Are you sure?</h2>
                        <p class="text-sm text-gray-500 px-8">Do you really want to delete your order for <span className='text-sm font-bold text-red-600'> {toolName}</span> ?
                        </p>
                        <p className='text-sm text-gray-500 px-8'> Deleted order can not be undone</p>
                    </div>



                    <div class="modal-action text-center space-x-4 md:block">
                        <div class="p-3  mt-2 text-center space-x-4 md:block">
                            <label for="delete-confirm-modal" class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100 ">
                                Cancel
                            </label>


                            <button onClick={() => handleDelete(deletingOrder._id)} class="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600">Delete</button>
                        </div>
                    </div>



                    {/* <div class="modal-action">
                        <label for="delete-confirm-modal" class="btn">Cancel</label>
                        <button class="btn  btn-error">Delete</button>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmModal;