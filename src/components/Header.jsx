import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.svg"
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
  const menu = (
    <>
        <NavLink className="mr-6 p-5 text-xl " to={"/"}>Home</NavLink>
        <NavLink className={"mr-6 p-5 text-xl "} to={"/about"}>About</NavLink>
        <NavLink className={"mr-6 p-5 text-xl "} to={"/services"}>Services</NavLink>
        <NavLink className={"mr-6 p-5 text-xl "} to={"/blog"}>Blog</NavLink>
        <NavLink className={"mr-6 p-5 text-xl "} to={"/contact"}>Contact</NavLink>
    </>
  );

  return (
    <div className="navbar bg-base-100">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menu}
          </ul>
        </div>
       <div>
        <Link> 
        <img src={logo} alt="" />
        </Link>
       </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {menu}
        </ul>
      </div>
      <div className="navbar-end space-x-4">
      <div className="btn btn-ghost text-2xl"><AiOutlineShoppingCart></AiOutlineShoppingCart></div>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        <a><button className="btn btn-outline btn-secondary font-semibold">Appointment</button></a>
      </div>
    </div>
  );
};

export default Header;
