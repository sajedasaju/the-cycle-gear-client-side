import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./../../firebase.init";
import MyOrderDetails from "./MyOrderDetails";
import phoneIcon from "../../assets/icons/phone-call.png";
import addressIcon from "../../assets/icons/address.png";
import Loading from "./../Shared/Loading/Loading";
import { useQuery } from "react-query";
import DeleteConfirmModal from "./DeleteConfirmModal";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

const MyOrders = () => {
  // const [orders, setOrders] = useState([])
  const [user, loading] = useAuthState(auth);
  const [deletingOrder, setDeletingOrder] = useState(null);
  // const navigate = useNavigate();
  // console.log(deletingOrder)

  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  // const [deletingOrder, setDeletingOrder] = useState(null);
  useEffect(() => {
    if (user) {
      fetch(
        `https://the-cycle-gear-server-side-project.vercel.app/order?email=${user.email}`,
        {
          method: "GET",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
        .then((res) => {
          console.log("res", res);
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            // navigate('/');
          }
          return res.json();
        })
        .then((data) => {
          setOrders(data);
        });
    }
  }, [user, deletingOrder]);

  // let userDetails;
  // console.log(orders)

  // useEffect(() => {
  //     if (user) {
  //         if (user) {
  //             fetch(`https://the-cycle-gear-server-side-project.vercel.app/order?email=${user.email}`, {
  //                 method: 'GET',
  //                 headers: {
  //                     'authorization': `Bearer ${localStorage.getItem('accessToken')}`
  //                 }
  //             })
  //                 .then(res => res.json()

  //                 )
  //                 .then(data => {
  //                     // console.log(data)
  //                     setOrders(data);
  //                 });
  //         }

  //     }
  // }, [user])

  // const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch(`https://the-cycle-gear-server-side-project.vercel.app/order?email=${user.email}`, {
  //     method: 'GET',
  //     headers: {
  //         'content-type': 'application/json',
  //         authorization: `Bearer ${localStorage.getItem('accessToken')}`
  //     }

  // })
  //     .then(res => {
  //         if (res.status === 401 || res.status === 403) {
  //             signOut(auth);
  //             localStorage.removeItem('accessToken')
  //             navigate('/')
  //         }
  //         return res.json()
  //     })
  // )

  // if (isLoading) {
  //     return <Loading></Loading>
  // }

  // const userDetails = orders?.shift();

  // console.log(orders)
  // if (loading || (orders?.length === 0)) {
  //     return <Loading></Loading>
  // }

  // console.log(orders)
  return (
    <div>
      <div className="my-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto  mb-24">
        <div className="flex justify-start item-start space-y-2 flex-col">
          <h1 className="text-3xl dark:text-white lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
            Order :{orders.length}
          </h1>
          <p className="text-base dark:text-gray-300 font-medium leading-6 text-gray-600">
            21st Mart 2022 at 10:34 PM
          </p>
        </div>

        <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
          <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
            <div className="flex flex-col justify-start items-start dark:bg-gray-800 bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
              <p className="text-lg md:text-xl dark:text-white font-semibold leading-6 xl:leading-5 text-gray-800">
                Customer’s Cart
              </p>

              {orders?.map((order) => (
                <MyOrderDetails
                  key={order._id}
                  order={order}
                  // refetch={refetch}
                  setDeletingOrder={setDeletingOrder}
                ></MyOrderDetails>
              ))}
            </div>
          </div>

          {/* {
                        //  userDetails = orders.shift()
                        orders?.length > 0 && <div className="bg-gray-50 dark:bg-gray-800 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col sticky top-0 h-full">
                            <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">Customer</h3>
                            <div className="flex flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0">
                                <div className="flex flex-col justify-start items-start flex-shrink-0">
                                    <div className="flex justify-center w-full md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
                                        <img src="https://i.ibb.co/5TSg7f6/Rectangle-18.png" alt="avatar" />
                                        <div className="flex justify-start items-start flex-col space-y-2">
                                            <p className="text-base dark:text-white font-semibold leading-4 text-left text-gray-800">{userDetails.userName}</p>
                                            <p className="text-sm dark:text-gray-300 leading-5 text-gray-600">{orders.length} Orders</p>
                                        </div>
                                    </div>

                                    <div className="flex justify-center text-gray-800 dark:text-white md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M3 7L12 13L21 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <p className="cursor-pointer text-sm leading-5 ">{userDetails.email}</p>

                                    </div>
                                    <div className="flex justify-center text-gray-800 dark:text-white md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                                        <img src={phoneIcon} alt="" />

                                        <p className="cursor-pointer text-sm leading-5 ">{userDetails.phone}</p>
                                    </div>
                                </div>
                                <div className="flex justify-between xl:h-full items-stretch w-full flex-col mt-6 md:mt-0">
                                    <div className="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row items-center md:items-start">
                                        <div className="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4 xl:mt-8">
                                            <p className="text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800">Shipping Address</p>
                                            <p className="w-48 lg:w-full dark:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600 flex">
                                                <span className='mr-2'>
                                                    <img src={addressIcon} alt="" />
                                                </span>{userDetails.address}</p>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    } */}
        </div>
      </div>

      {deletingOrder && (
        <DeleteConfirmModal
          deletingOrder={deletingOrder}
          // refetch={refetch}
          setDeletingOrder={setDeletingOrder}
        ></DeleteConfirmModal>
      )}
    </div>
  );
};

export default MyOrders;
