import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Loading from "./../Shared/Loading/Loading";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L1bgGBchpSOOo2r2l82aXOF13o0eTVYPwQhlWlNVA3mPdRPks5xJ9fAP2wS57YmmjFAthlLj0QFOgsju3T4b8Fj00S7MEJPw5"
);

const Payment = () => {
  const { id } = useParams();
  const url = `https://the-cycle-gear-server-side-project.vercel.app/order/${id}`;
  const { data: order, isLoading } = useQuery(["order", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  // console.log(order)

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col lg:flex-row gap-8  justify-center">
          <div className="p-4 lg:w-1/2 ">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left  bg-blue-100 rounded-lg p-4">
              <img
                alt="team"
                className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src={order.img}
              />
              <div className="flex-grow sm:pl-8">
                <h2 className=" font-medium text-lg text-gray-900">
                  You pay for
                  <span className="title-font font-medium text-lg text-green-900">
                    {" "}
                    {order.toolName}
                  </span>
                </h2>
                <p className="mb-2">
                  Quantity:<span>{order.orderedQuantity}</span>
                </p>
                <h3 className="text-gray-500 mb-2">
                  <span className="text-xl font-bold">${order.price}</span>
                </h3>

                <span className="inline-flex">
                  <a className="text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="ml-2 text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="ml-2 text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/2">
            <Elements stripe={stripePromise}>
              <CheckoutForm order={order} />
            </Elements>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;
