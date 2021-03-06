import React from 'react';

const ManageToolDetails = ({ tool, refetch, setDeletingTool }) => {
    const { _id, name, img, minimumOrder, price, availableQuantity, description } = tool;
    return (
        <tr className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0 border-3">
            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static break-all">
                <span className="lg:hidden absolute top-0 left-0 bg-[#b7cba0ed] px-2 py-1 text-xs font-bold uppercase">Tool Image</span>
                <div class="avatar">
                    <div class="w-24 rounded-full">
                        <img src={img} alt="product" />
                    </div>
                </div>
                {/* <img className="w-14 mx-auto h-14 sm:w-20 sm:h-20 p-1 rounded-full ring-2 ring-gray-300  align-middle" src={img} alt="product" /> */}

            </td>
            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static  break-all">
                <span className="lg:hidden absolute top-0 left-0  px-2 py-1 text-xs font-bold uppercase bg-[#b7cba0ed] ">Tool name</span>
                <span className="rounded  py-1 px-3 text-md font-bold">{name}</span>

            </td>
            <td className="w-full lg:w-auto p-3 pt-6  text-gray-800 text-center border border-b block lg:table-cell relative lg:static  break-all">
                <span className="lg:hidden absolute top-0 left-0  px-2 py-1 text-xs font-bold uppercase bg-[#b7cba0ed]">Description</span>
                {description}
            </td>
            <td className="w-full lg:w-auto p-3 text-gray-800 font-bold text-center border border-b block lg:table-cell relative lg:static  break-all">
                <span className="lg:hidden absolute top-0 left-0  px-2 py-1 text-xs font-bold uppercase bg-[#b7cba0ed]">Price</span>
                ${price}
            </td>
            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static  break-all">
                <span className="lg:hidden absolute top-0 left-0  px-2 py-1 text-xs font-bold uppercase bg-[#b7cba0ed]">Quantity</span>
                {availableQuantity}
            </td>
            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static  break-all">
                <span className="lg:hidden absolute top-0 left-0  px-2 py-1 text-xs font-bold uppercase bg-[#b7cba0ed]">Minimum Order</span>
                <span className="rounded bg-[#dcfce7] py-1 px-3 text-xs font-bold">{minimumOrder}</span>
            </td>

            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static  break-all">
                <span className="lg:hidden absolute top-0 left-0  px-2 py-1 text-xs font-bold uppercase bg-[#b7cba0ed]">Actions</span>
                <span className="text-yellow-500 flex items-center justify-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-green-700 mx-2 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-150  duration-300"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
                        />
                        <path
                            fill-rule="evenodd"
                            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                            clip-rule="evenodd"
                        />
                    </svg>
                    <label onClick={() => setDeletingTool(tool)}
                        for="delete-confirm-modal" className="btn btn-xs btn-error bg-transparent hover:bg-transparent border-0">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-red-700  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-150  duration-300"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </label>
                </span>
            </td>

        </tr>
    );
};

export default ManageToolDetails;