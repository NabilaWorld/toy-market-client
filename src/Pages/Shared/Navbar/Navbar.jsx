import React from 'react';
import logo from '../../../assets/logo.png'

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-bold">
                            <li><a>Home</a></li>
                            <li><a>All Toys</a></li>
                            <li><a>My Toys</a></li>
                            <li><a> Add A Toy</a></li>
                            <li><a>Blogs</a></li>
                        </ul>
                    </div>

                    <img className='md:h-12 ml-2 md:w-30 h-8 w-28 rounded-lg bg-transparent' src={logo} alt="" />

                    <p className='text-2xl font-bold ml-3'>Cooking Toy</p>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-bold">
                        <li><a>Home</a></li>
                        <li><a>All Toys</a></li>
                        <li><a>My Toys</a></li>
                        <li><a> Add A Toy</a></li>
                        <li><a>Blogs</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="avatar">
                        <div className="w-12 mr-5 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;