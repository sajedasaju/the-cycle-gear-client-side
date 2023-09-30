import React from "react";
import SingleTools from "../SingleTools/SingleTools";
import useTools from "./../../../hooks/useTools";
import Loading from "../../Shared/Loading/Loading";
import { Link } from "react-router-dom";

const HomeTools = () => {
  const [tools, isLoadingTools] = useTools();
  console.log("isloading", isLoadingTools);
  return (
    <>
      {isLoadingTools ? (
        <Loading></Loading>
      ) : (
        <>
          <section className="w-4/5 mx-auto  my-20">
            <h2 className="text-2xl text-center mb-12 font-bold border-y-2 py-3 font-serif text-primary text-[#7aad3b]">
              FEATURED TOOLS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
              {tools?.slice(0, 6)?.map((tool) => (
                <SingleTools key={tool._id} tool={tool}></SingleTools>
              ))}
            </div>
            <div className="flex items-end mr-3 mt-6">
              <Link
                to="/allTool"
                className=" ml-auto inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white  rounded-lg focus:ring-4 focus:outline-none   bg-[#7aad3b] hover:padding-x-2 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#5b7d33]  duration-300"
              >
                All Tools
                <svg
                  className="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </Link>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default HomeTools;
