import React from "react";
import SchoolIcon from "@mui/icons-material/School";
import { Link } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { useState } from "react";


const Nav = () => {

  const [token, setToken] = useState(() =>
  localStorage.getItem("Tajny numerek")
);


  const LogOut = () => {
    localStorage.removeItem("Tajny numerek");
    setToken(null);
  };
  return (
    <>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost md:hidden">
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
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {/* Mobile Version of Navbar */}
              <Link to="/announcements/all">
                <li>
                  <span className="btn btn-outline bg-white text-[#06283d] border-2">
                    Ogłoszenia
                  </span>
                </li>
              </Link>
              <li>
                <span className="btn btn-outline bg-white text-[#06283d] border-2">
                  Dodaj ogłoszenie
                </span>
              </li>
              <li>
                <Link to="/signin">
                  <button className="btn bg-[#faf9fa] text-[#06283d] border-2 hover:bg-[#faf9fa] w-full">
                    Zaloguj się
                    <LoginIcon className=""></LoginIcon>
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/register">
                  <button className="btn bg-[#06283d] text-[#dff6ff] w-full">
                    Załóż konto
                    <HowToRegIcon className=""></HowToRegIcon>
                  </button>
                </Link>
              </li>
            </ul>
          </div>
          <span className="btn btn-ghost normal-case text-2xl text-[#06283d] gap-2   ">
            <SchoolIcon></SchoolIcon>
            <Link to="/">Korepetycje+</Link>
          </span>
        </div>
        {/* PC Version of navbar */}
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal text-[#06283d] text-2xl p-0">
            <Link to="/announcements/all">
              <li>
                <span className="btn btn-ghost">Ogłoszenia</span>
              </li>
            </Link>
            <li>
              <Link to="/addAnnouncements" className="btn btn-ghost">
                <span>Dodaj ogłoszenie</span>
              </Link>
            </li>
          </ul>
        </div>
        {token && (
          <div className="invisible md:visible navbar-end gap-2">
            <Link to="/">
              <button
                className="btn btn-outline text-[#06283d] border-2"
                onClick={() => LogOut()}
              >
                <LogoutIcon></LogoutIcon> Wyloguj się
              </button>
            </Link>
            <Link to="/userinfo">
              <button className="btn bg-[#06283d] text-[#dff6ff]">
                <AccountBoxIcon /> Twój profil
              </button>
            </Link>
          </div>
        )}
        {!token && (
          <div className="invisible md:visible navbar-end gap-2">
            <Link to="/signin">
              <button className="btn btn-outline text-[#06283d] border-2">
                Zaloguj się
              </button>
            </Link>
            <Link to="/register">
              <button className="btn bg-[#06283d] text-[#dff6ff]">
                Załóż konto
              </button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Nav;
