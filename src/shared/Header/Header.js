import React, { useContext } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { HiOutlineLogout } from 'react-icons/hi';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';


let activeStyle = {
    textDecoration: "",
}
const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const userLogout = () =>{
        logOut()
        .then( () => {})
        .catch(err => console.log(err))
    }
    

    const navItem = <>
        <li><NavLink to='/menu' style={({ isActive }) =>
            isActive ? activeStyle : undefined}>Menu</NavLink></li>
        <li><NavLink to='/orders'>Orders</NavLink></li>
        <li><NavLink to='/blog'>Blog</NavLink></li>
        {
            user?.uid &&
            <>
                <li><NavLink to='/additem'>Add Item</NavLink></li>
                <li><NavLink to='/myreview'>My Review</NavLink></li>
            </>
        }
    </>
    const userInfo = <ul className="p-2 right-0 bg-slate-300 ">
        <li className='p-1 px-2'>{user?.displayName}</li>
        <li><a>View Profile</a></li>
        <li><button onClick={userLogout}><HiOutlineLogout className='text-2xl' />Log out</button></li>
    </ul>
    return (
        <nav className="navbar bg-base-100 py-4 lg:px-16 font-semibold shadow-2xl relative z-30">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            navItem
                        }
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-3xl font-bold"><span className='text-pink-400'>Tasty</span>Kitchent</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {
                        navItem
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <ul className="menu menu-horizontal p-0">
                    <li tabIndex={0}>
                        {
                            user?.uid ? user?.photoURL ? <>
                                <img className="p-1 w-10 h-10 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src={user.photoURL} alt="" />
                                {
                                    userInfo
                                }
                            </>
                                : <>
                                    <FaUserCircle className='p-1 w-10 h-10 rounded-full ring-2 ring-gray-300 dark:ring-gray-500' />
                                    {
                                        userInfo
                                    }
                                </>
                                : <Link to='/login'>Login</Link>
                        }

                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;