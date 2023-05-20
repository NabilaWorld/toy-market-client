import React, { useContext } from 'react';
import logo from '../../../assets/logo.png';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
// import ToyAdd from '../../Home/ToyAdd/ToyAdd';

const Navbar = () => {
    const { user, logOut, updateProfileData } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    };


    const renderAvatar = () => {
        if (user) {
            return (
                <div className="avatar">
                    <div className="w-12 md:ml-40 ml-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={user.photoURL} title={user.displayName} alt={user.displayName} />
                    </div>
                </div>
            );
        }

    }


    return (
        <div>
            <div className="navbar bg-neutral p-5 text-neutral-content">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral rounded-box w-52 font-bold"
                        >
                            <Link to="/">
                                <li>
                                    <a>Home</a>
                                </li>
                            </Link>

                            <Link to="/blog">
                                <li>
                                    <a>Blogs</a>
                                </li>
                            </Link>

                            <li>
                                <a>All Toys</a>
                            </li>

                            {user ? (
                                <>
                                    <li>
                                        <a>My Toys</a>
                                    </li>

                                    <Link to='/addToyPage'>
                                        <li>
                                            <a>Add A Toy</a>
                                        </li>
                                    </Link>

                                    <li onClick={handleLogOut}>
                                        <a>Logout</a>
                                    </li>
                                </>
                            ) : (
                                <Link to="/login">
                                    <li>
                                        <a>Login</a>
                                    </li>
                                </Link>
                            )}
                        </ul>
                    </div>

                    <img
                        className="md:h-20 ml-2 md:w-34 h-12 w-30 rounded-full bg-transparent"
                        src={logo}
                        alt=""
                    />

                    <p className="text-2xl font-bold ml-3">Cooking Toy</p>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-bold">
                        <Link to="/">
                            <li>
                                <a>Home</a>
                            </li>
                        </Link>

                        <Link to="/blog">
                            <li>
                                <a>Blogs</a>
                            </li>
                        </Link>

                        <Link to='/toyAdd'>
                        <li>
                            <a>All Toys</a>
                        </li>
                        </Link>

                        {user && (
                            <>
                                <li>
                                    <a>My Toys</a>
                                </li>

                                <Link to='/addToyPage'>
                                    <li>
                                        <a>Add A Toy  </a>
                                    </li>
                                </Link>

                                <li onClick={handleLogOut}>
                                    <a>Logout</a>
                                </li>
                            </>
                        )}

                        {!user && (
                            <Link to="/login">
                                <li>
                                    <a>Login</a>
                                </li>
                            </Link>
                        )}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user && (
                        <div className="">
                            <div className="md:mr-40">
                                {renderAvatar()}
                            </div>

                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;