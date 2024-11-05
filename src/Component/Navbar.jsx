import { useLocation } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { getStoredCardList, getStoredLoveList } from "./CardLove"; 
const Navbar = () => {
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    const cartCount = getStoredCardList().length;
    const loveCount = getStoredLoveList().length;

    const links = (
        <>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? `${isHomePage ? "bg-white text-[#9538E2]" : "text-[#9538E2]"} px-3 py-2 rounded-lg`
                            : `${isHomePage ? "text-white bg-[#9538E2]" : "text-[#9538E2]"} px-3 py-2 rounded-lg`
                    }
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/statistics"
                    className={({ isActive }) =>
                        isActive
                            ? `${isHomePage ? "bg-white text-[#9538E2]" : "bg-[#9538E2] text-white"} px-3 py-2 rounded-lg`
                            : `${isHomePage ? "text-white bg-[#9538E2]" : "text-[#9538E2]"} px-3 py-2 rounded-lg`
                    }
                >
                    Statistics
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                        isActive
                            ? `${isHomePage ? "bg-white text-[#9538E2]" : "bg-[#9538E2] text-white"} px-3 py-2 rounded-lg`
                            : `${isHomePage ? "text-white bg-[#9538E2]" : "text-[#9538E2]"} px-3 py-2 rounded-lg`
                    }
                >
                    Dashboard
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/aboutUs"
                    className={({ isActive }) =>
                        isActive
                            ? `${isHomePage ? "bg-white text-[#9538E2]" : "bg-[#9538E2] text-white"} px-3 py-2 rounded-lg`
                            : `${isHomePage ? "text-white bg-[#9538E2]" : "text-[#9538E2]"} px-3 py-2 rounded-lg`
                    }
                >
                    About Us
                </NavLink>
            </li>
        </>
    );

    return (
        <nav>
            <div className={`navbar ${isHomePage ? "bg-[#9538E2]" : "bg-white"} rounded-t-2xl mt-5 ${isHomePage ? "text-white" : "text-[#9538E2]"}`}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <NavLink to="/">
                    <a className="btn btn-ghost text-xl">Gadget Heaven</a>
                    </NavLink>
                    
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu-horizontal px-1 gap-8">
                        {links}
                    </ul>
                </div>
                <NavLink className="navbar-end " to="dashboard">
                <div>
                    
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <IoCartOutline className="text-3xl" />
                                <span className="badge badge-sm indicator-item"> {cartCount}</span>
                            </div>
                        </div>
                    </div>
                   
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <FaRegHeart className="text-3xl" />
                                <span className="badge badge-sm indicator-item"> {loveCount}</span>
                            </div>
                        </div>
                    </div>
                    
                </div>
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
