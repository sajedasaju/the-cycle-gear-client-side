import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from './../../../firebase.init';
import logo from '../../../assets/icons/logo.png'


const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [user, loading, error] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken')

    };

    const menuItems = <>
        <li tabindex="0" className='p-0 h-1/4 hover:bg[#81B441]'>
            <Link to='/' className='pr-1 h-1/4 py-3 hover:bg[#81B441]'>
                Home
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </Link>
            <ul className="p-1 bg-base-100 z-50	">
                <li><Link to='/'>Summary</Link></li>
                <li><Link to='/'>Review</Link></li>
                <li><Link to='/allTool'>Tools</Link></li>
                <li><Link to='/'>Footer</Link></li>
            </ul>
        </li>
        <li className='p-0 h-1/4'><Link to='/allTool'>Tools</Link></li>
        <li className='p-0 h-1/4'><Link to='/portfolio'>Portfolio</Link></li>
        <li className='p-0 h-1/4'><Link to='/blog'>Blogs</Link></li>


        {
            user && <li className='p-0 h-1/4'><Link to='/dashboard'>Dashboard</Link></li>

        }
        <li className='p-0 h-1/4'>{user ?
            <>
                <div className='p-0 h-1/4'>
                    <button onClick={logout} className="btn btn-ghost ">Sign Out</button>


                </div>
                {
                    (user.photoURL) ? <div className="avatar">
                        <div className="w-12 rounded-full">
                            <img src={user.photoURL} alt='' />

                        </div>
                    </div>
                        :
                        <p className='bg-[#81B441] text-white font-bold'>{user.displayName}</p>
                }
            </>
            : <Link to='/login'>Login</Link>}</li>
    </>
    return (


        <div className="navbar bg-[#ffff]  flex justify-center items-center py-6 shadow-lg " >

            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 bg-white">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">
                    <img src={logo} alt="" className='w-14 h-14' />
                    <span className='text-xl font-md font-serif ml-2'>The Cycle Gear</span>
                </Link>
            </div>


            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>

            <div className="navbar-end lg:hidden">
                <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden">


                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                </label>
            </div>

        </div>













        // <div className='bg-[#dadadad3] sticky top-0 z-50	 '>
        //     <nav className="flex justify-between flex-wrap px-2 pt-2 ">
        //         <div className="container mx-auto px-4 flex  flex-wrap items-center ">
        //             <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
        //                 <span
        //                     className="flex items-center"
        //                 >
        //                     <Link to="/">hhhh
        //                     </Link>

        //                 </span>
        //                 <button
        //                     className="lg:hidden  p-2  "
        //                     type="button"
        //                     onClick={() => setOpen(!open)}
        //                 >
        //                     {
        //                         open ? <p>show</p> :
        //                             <p>close</p>
        //                     }

        //                 </button>
        //             </div>
        //             <div
        //                 className=
        //                 {
        //                     "lg:flex flex-grow items-center" +
        //                     (open ? " flex" : " hidden")
        //                 }
        //             >
        //                 <div className="flex flex-col md:flex-row lg:flex-row lg:ml-auto lg:px-10 ">
        //                     <NavLink
        //                         className={({ isActive }) => isActive ? " nav-item px-3 mb-2 flex items-center text-amber-700 border-amber-800 text-lg	 font-bold border-b-2 mr-2"
        //                             :
        //                             "nav-item px-3 mb-2 flex items-center text-yellow-500 :border-yellow-500 font-bold hover:border-b-2"}
        //                         as={Link} to="/home">
        //                         Home
        //                     </NavLink>
        //                     <NavLink
        //                         className={({ isActive }) => isActive ? " nav-item px-3 mb-2 flex items-center text-amber-700 border-amber-800 text-lg	 font-bold border-b-2"
        //                             :
        //                             "nav-item px-3 mb-2 flex items-center text-yellow-500 hover:border-yellow-500 font-bold hover:border-b-2"}
        //                         as={Link} to="/home">
        //                         Inventory
        //                     </NavLink>
        //                     <NavLink
        //                         className={({ isActive }) => isActive ? " nav-item px-3 mb-2 flex items-center text-amber-700 border-amber-800 text-lg	 font-bold border-b-2"
        //                             :
        //                             "nav-item px-3 mb-2 flex items-center text-yellow-500 hover:border-yellow-500 font-bold hover:border-b-2"}
        //                         as={Link} to="/">
        //                         About
        //                     </NavLink>

        //                     <NavLink
        //                         className={({ isActive }) => isActive ? " nav-item px-3 mb-2 flex items-center text-amber-700 border-amber-800 text-lg	 font-bold border-b-2"
        //                             :
        //                             "nav-item px-3 mb-2 flex items-center text-yellow-500 hover:border-yellow-500 font-bold hover:border-b-2"}
        //                         as={Link} to="/">
        //                         Blog
        //                     </NavLink>

        //                     {
        //                         user && <>
        //                             <NavLink as={Link} to='/' className={({ isActive }) => isActive ? " nav-item px-3 mb-2 flex items-center text-amber-700 border-amber-800 text-lg	 font-bold border-b-2"
        //                                 :
        //                                 "nav-item px-3 mb-2 flex items-center text-yellow-500 hover:border-yellow-500 font-bold hover:border-b-2"}>Add Inventories</NavLink>

        //                             <NavLink className={({ isActive }) => isActive ? " nav-item px-3 mb-2 flex items-center text-amber-700 border-amber-800 text-lg	 font-bold border-b-2"
        //                                 :
        //                                 "nav-item px-3 mb-2 flex items-center text-yellow-500 hover:border-yellow-500 font-bold hover:border-b-2"} as={Link} to="/"  >Manage Inventories</NavLink>
        //                             <NavLink
        //                                 className={({ isActive }) => isActive ? " nav-item px-3 mb-2 flex items-center text-amber-700 border-amber-800 text-lg	 font-bold border-b-2"
        //                                     :
        //                                     "nav-item px-3 mb-2 flex items-center text-yellow-500 hover:border-yellow-500 font-bold hover:border-b-2"}
        //                                 as={Link} to="/myInventories" >My Inventories</NavLink>
        //                         </>
        //                     }


        //                     {
        //                         user ?
        //                             <NavLink className="nav-item px-3 mb-2 flex items-center text-yellow-500 hover:border-yellow-500 font-bold "
        //                                 as={Link} to="/login">
        //                                 <button onClick={hangleSignOut} type="button" className="px-6 py-2 font-bold bg-transparent rounded-lg
        //                              border-2  border-yellow-600 hover:bg-yellow-700  hover:text-white ">Logout</button>

        //                             </NavLink>
        //                             :
        //                             <NavLink
        //                                 className="nav-item px-3 mb-2 flex items-center text-yellow-500 hover:border-yellow-500 font-bold "
        //                                 as={Link} to="/login">
        //                                 <button type="button" className="px-6 py-2 font-bold bg-transparent rounded-lg
        //                              border-2  border-yellow-600 hover:bg-yellow-700  hover:text-white  ">Login</button>
        //                             </NavLink>
        //                     }

        //                 </div>

        //             </div>
        //             <div className="">
        //                 <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden">
        //                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        //                 </label>
        //             </div>
        //         </div>
        //     </nav>
        // </div>
    );
};

export default Navbar;