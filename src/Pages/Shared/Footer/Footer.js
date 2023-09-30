import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/icons/logo.png";
import phone from "../../../assets/icons/phone.png";
import email from "../../../assets/icons/email.png";
import home from "../../../assets/icons/address.png";
import ScrollToTop from "react-scroll-to-top";
import ScrollTop from "./../../Home/ScrollTop";

const Footer = () => {
  return (
    <footer>
      <ScrollToTop smooth component={<ScrollTop />} />

      <div>
        <div className="max-w-screen-xl mx-auto  mb-4   bg-[#ffff]">
          <Link
            to="/"
            className="btn btn-ghost normal-case text-xl hover:bg-transparent"
          >
            <img src={logo} alt="" className="w-14 h-14" />
            <span className="text-xl font-md font-serif ml-2">
              The Cycle Gear
            </span>
          </Link>
        </div>

        <div className="w-11/12 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3  lg:grid-cols-3  divide-gray-200 divide-y-2 md:divide-x-2 md:divide-y-0 md:-mx-8">
            <div className=" md:px-8 py-4 md:py-0">
              <h5 className="text-xl font-bold text-[#81B441]">Features</h5>
              <nav className="mt-4">
                <ul className="space-y-0 grid lg:grid-cols-2">
                  <li>
                    <Link
                      to="/"
                      className="font-normal text-base hover:text-gray-400"
                    >
                      Tools
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="font-normal text-base hover:text-gray-400"
                    >
                      Review
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="font-normal text-base hover:text-gray-400"
                    >
                      Blogs
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="font-normal text-base hover:text-gray-400"
                    >
                      Order History
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="font-normal text-base hover:text-gray-400"
                    >
                      Manage Orders
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="font-normal text-base hover:text-gray-400"
                    >
                      Add Review
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className=" md:px-8 py-4 md:py-0">
              <h5 className="text-xl font-bold text-[#81B441]">
                Customer Service
              </h5>
              <nav className="mt-4">
                <ul className="grid lg:grid-cols-2">
                  <li className="mb-2">
                    <Link
                      to="/"
                      className="font-normal text-base hover:text-gray-400"
                    >
                      Shipping Policy
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      to="/"
                      className="font-normal text-base hover:text-gray-400"
                    >
                      Delivery Information
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      to="/"
                      className="font-normal text-base hover:text-gray-400"
                    >
                      Compensation First
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      to="/"
                      className="font-normal text-base hover:text-gray-400"
                    >
                      F.A.Q.'s
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className=" md:px-8 py-4 md:py-0">
              <h5 className="text-xl font-bold text-[#81B441]">Contact Us</h5>
              <nav className="mt-4">
                <ul className="text-gray-600 dark:text-gray-400">
                  <li className="flex  items-center">
                    <img src={home} alt="" className="w-50 mr-2" />
                    <p className="pl-1">100,Mohammadpur,Dhaka</p>
                  </li>
                  <li className="my-2 flex items-center">
                    <span className="mr-2">
                      <img src={phone} alt="" className="w-4" />
                    </span>
                    <p>+66021462134</p>
                  </li>
                  <li className="my-2 flex items-center">
                    <img src={email} alt="" className="w-4 mr-2" />
                    <a>sajedasaju85@gmail.com</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-400 sm:mx-auto dark:border-gray-700 lg:my-2" />
        <div className="sm:flex sm:items-center sm:justify-between pb-4 ">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            {" "}
            <small>copyright @ {new Date().getFullYear()}</small> All Rights
            Reserved To{" "}
            <span className="font-bold text-[#81B441] text-xl">Sajeda</span>
          </span>
          <div className="flex items-center gap-x-4 ">
            <a href="https://www.facebook.com/profile.php?id=100010466556130">
              <svg
                className="h-6 w-6 fill-current text-[#81B441] hover:text-[#4d6e26] mr-6"
                viewBox="0 0 512 512"
              >
                <path d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z" />
              </svg>
            </a>
            <Link to="/">
              <svg
                fill="none"
                className="h-6 w-6 text-[#81B441]  hover:text-[#4d6e26] mr-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </Link>
            <Link to="/">
              <svg
                className="h-6 w-6 fill-current text-[#81B441] hover:text-[#4d6e26] mr-6"
                viewBox="0 0 512 512"
              >
                <path d="M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.79,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM170.87,405.43H106.69V205.88h64.18ZM141,175.54h-.46c-20.54,0-33.84-15.29-33.84-34.43,0-19.49,13.65-34.42,34.65-34.42s33.85,14.82,34.31,34.42C175.65,160.25,162.35,175.54,141,175.54ZM405.43,405.43H341.25V296.32c0-26.14-9.34-44-32.56-44-17.74,0-28.24,12-32.91,23.69-1.75,4.2-2.22,9.92-2.22,15.76V405.43H209.38V205.88h64.18v27.77c9.34-13.3,23.93-32.44,57.88-32.44,42.13,0,74,27.77,74,87.64Z" />
              </svg>
            </Link>
            <Link to="/">
              <svg
                className="h-6 w-6 fill-current text-[#81B441]  hover:text-[#4d6e26] mr-6"
                viewBox="0 0 512 512"
              >
                <path d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
