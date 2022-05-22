import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='bg-[#dadadad3] sticky top-0 z-50	 '>
            <nav className="flex justify-between flex-wrap px-2 pt-2 ">
                <div className="container mx-auto px-4 flex  flex-wrap items-center ">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <span
                            className="flex items-center"
                        >
                            <Link to="/">hhhh
                            </Link>

                        </span>
                        <button
                            className="lg:hidden  p-2  "
                            type="button"
                            onClick={() => setOpen(!open)}
                        >
                            {
                                open ? <p>show</p> :
                                    <p>close</p>
                            }

                        </button>
                    </div>
                    <div
                        className=
                        {
                            "lg:flex flex-grow items-center" +
                            (open ? " flex" : " hidden")
                        }
                    >
                        <div className="flex flex-col md:flex-row lg:flex-row lg:ml-auto lg:px-10 ">
                            <NavLink
                                className={({ isActive }) => isActive ? " nav-item px-3 mb-2 flex items-center text-amber-700 border-amber-800 text-lg	 font-bold border-b-2 mr-2"
                                    :
                                    "nav-item px-3 mb-2 flex items-center text-yellow-500 hover:border-yellow-500 font-bold hover:border-b-2"}
                                as={Link} to="/home">
                                Home
                            </NavLink>
                            <NavLink
                                className={({ isActive }) => isActive ? " nav-item px-3 mb-2 flex items-center text-amber-700 border-amber-800 text-lg	 font-bold border-b-2"
                                    :
                                    "nav-item px-3 mb-2 flex items-center text-yellow-500 hover:border-yellow-500 font-bold hover:border-b-2"}
                                as={Link} to="/home">
                                Inventory
                            </NavLink>
                            <NavLink
                                className={({ isActive }) => isActive ? " nav-item px-3 mb-2 flex items-center text-amber-700 border-amber-800 text-lg	 font-bold border-b-2"
                                    :
                                    "nav-item px-3 mb-2 flex items-center text-yellow-500 hover:border-yellow-500 font-bold hover:border-b-2"}
                                as={Link} to="/aboutTeam">
                                About
                            </NavLink>

                            <NavLink
                                className={({ isActive }) => isActive ? " nav-item px-3 mb-2 flex items-center text-amber-700 border-amber-800 text-lg	 font-bold border-b-2"
                                    :
                                    "nav-item px-3 mb-2 flex items-center text-yellow-500 hover:border-yellow-500 font-bold hover:border-b-2"}
                                as={Link} to="/blogs">
                                Blog
                            </NavLink>

                            {/* {
                            user && <>
                                <NavLink as={Link} to='/addinventories' className={({ isActive }) => isActive ? " nav-item px-3 mb-2 flex items-center text-amber-700 border-amber-800 text-lg	 font-bold border-b-2"
                                    :
                                    "nav-item px-3 mb-2 flex items-center text-yellow-500 hover:border-yellow-500 font-bold hover:border-b-2"}>Add Inventories</NavLink>

                                <NavLink className={({ isActive }) => isActive ? " nav-item px-3 mb-2 flex items-center text-amber-700 border-amber-800 text-lg	 font-bold border-b-2"
                                    :
                                    "nav-item px-3 mb-2 flex items-center text-yellow-500 hover:border-yellow-500 font-bold hover:border-b-2"} as={Link} to="/manageinventories"  >Manage Inventories</NavLink>
                                <NavLink
                                    className={({ isActive }) => isActive ? " nav-item px-3 mb-2 flex items-center text-amber-700 border-amber-800 text-lg	 font-bold border-b-2"
                                        :
                                        "nav-item px-3 mb-2 flex items-center text-yellow-500 hover:border-yellow-500 font-bold hover:border-b-2"}
                                    as={Link} to="/myInventories" >My Inventories</NavLink>
                            </>
                        } */}


                            {/* {
                            user ?
                                <NavLink className="nav-item px-3 mb-2 flex items-center text-yellow-500 hover:border-yellow-500 font-bold "
                                    as={Link} to="/login">
                                    <button onClick={hangleSignOut} type="button" className="px-6 py-2 font-bold bg-transparent rounded-lg
                                     border-2  border-yellow-600 hover:bg-yellow-700  hover:text-white ">Logout</button>

                                </NavLink>
                                :
                                <NavLink
                                    className="nav-item px-3 mb-2 flex items-center text-yellow-500 hover:border-yellow-500 font-bold "
                                    as={Link} to="/login">
                                    <button type="button" className="px-6 py-2 font-bold bg-transparent rounded-lg
                                     border-2  border-yellow-600 hover:bg-yellow-700  hover:text-white  ">Login</button>
                                </NavLink>
                        } */}

                        </div>

                    </div>
                    <div className="">
                        <label tabIndex="1" for="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;