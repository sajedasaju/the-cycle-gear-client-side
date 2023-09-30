import { signOut } from "firebase/auth";
import React from "react";
import { useQuery } from "react-query";
import auth from "../../firebase.init";
import Loading from "./../Shared/Loading/Loading";
import SingleUser from "./SingleUser";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const navigate = useNavigate();

  const {
    isLoading,
    data: allusers,
    refetch,
  } = useQuery("allusers", () =>
    fetch("https://the-cycle-gear-server-side-project.vercel.app/alluser", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      if (res.status === 401 || res.status === 403) {
        signOut(auth);
        localStorage.removeItem("accessToken");
        navigate("/");
      }
      return res.json();
    })
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  // console.log(users)

  return (
    <div className="max-w-2xl mx-auto mt-12">
      <div className="flex flex-col w-full border-opacity-50 mt-6 lg:w-4/5	 md:w-4/5 sm:w-full mx-auto">
        <h2 className="text-2xl text-center mb-12 font-bold border-y-2 py-3 font-serif text-primary text-[#7aad3b]">
          ADD TOOLS
        </h2>
      </div>

      <div className="p-4 max-w-11/12 bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-between items-center mb-4 pb-4 border-b">
          <h3 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
            All Users{" "}
          </h3>
          <h3 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
            Status
          </h3>
        </div>
        <div className="flow-root">
          <ul
            role="list"
            className="divide-y divide-gray-200 dark:divide-gray-700"
          >
            {allusers?.map((user) => (
              <SingleUser
                key={user._id}
                user={user}
                refetch={refetch}
              ></SingleUser>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Users;
