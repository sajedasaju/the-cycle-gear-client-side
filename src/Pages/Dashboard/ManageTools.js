import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading/Loading";
import ManageToolDetails from "./ManageToolDetails";
import DeleteConfirmModal from "./DeleteConfirmModal";
import DeleteToolModal from "./DeleteToolModal";

const ManageTools = () => {
  const [deletingTool, setDeletingTool] = useState(null);
  const {
    data: tools,
    isLoading,
    refetch,
  } = useQuery("tools", () =>
    fetch("http://localhost:5000/tool").then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <>
      <div className="flex flex-col w-full border-opacity-50 mt-6 lg:w-4/5	 md:w-4/5 sm:w-full mx-auto">
        <h2 className="text-2xl text-center mb-12 font-bold border-y-2 py-3 font-serif text-primary text-[#7aad3b]">
          MANAGE TOOLS
        </h2>
      </div>
      <div className="lg:w-4/5	 md:w-4/5 sm:w-full mx-auto mb-12 manage-inventory-container  shadow-2xl rounded-lg">
        <table className="border-collapse w-full mx-auto ">
          <thead className="border-t-6 border-slate-700 rounded-xl">
            <tr>
              <th className="p-3  uppercase bg-gray-200 text-black  border border-gray-300 hidden lg:table-cell lg:font-medium">
                Tool Image
              </th>
              <th className="p-3  uppercase bg-gray-200 text-black  border border-gray-300 hidden lg:table-cell lg:font-medium">
                Tool name
              </th>
              <th className="p-3  uppercase bg-gray-200 text-black  border border-gray-300 hidden lg:table-cell lg:font-medium">
                Description
              </th>
              <th className="p-3  uppercase bg-gray-200 text-black  border border-gray-300 hidden lg:table-cell lg:font-medium">
                Price
              </th>
              <th className="p-3  uppercase bg-gray-200 text-black  border border-gray-300 hidden lg:table-cell lg:font-medium">
                Available Quantity
              </th>
              <th className="p-3  uppercase bg-gray-200 text-black  border border-gray-300 hidden lg:table-cell lg:font-medium">
                Miniumum Order
              </th>
              <th className="p-3  uppercase bg-gray-200 text-black  border border-gray-300 hidden lg:table-cell lg:font-medium">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {tools?.map((tool) => (
              <ManageToolDetails
                key={tool._id}
                tool={tool}
                refetch={refetch}
                setDeletingTool={setDeletingTool}
              ></ManageToolDetails>
            ))}
          </tbody>
        </table>

        {deletingTool && (
          <DeleteToolModal
            deletingTool={deletingTool}
            refetch={refetch}
            setDeletingTool={setDeletingTool}
          ></DeleteToolModal>
        )}
      </div>
    </>
  );
};

export default ManageTools;
