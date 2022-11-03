import React from "react";

import SchoolIcon from "@mui/icons-material/School";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div class="navbar">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Ogłoszenia</a>
            </li>
            <li tabindex="0">
              <a class="justify-between">
                Przedmioty
                <svg
                  class="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="bg-[#fafafa]" class="p-2">
                <li>
                  <a>Ścisłe</a>
                </li>
                <li>
                  <a>Humanistyczne</a>
                </li>
                <li>
                  <a>Języki obce</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Blog</a>
            </li>
          </ul>
        </div>
        <a class="btn btn-ghost normal-case text-2xl text-[#06283d] gap-2 ">
          <SchoolIcon></SchoolIcon>
          Korepetycje+
        </a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal text-[#06283d] text-2xl p-0">
          <li>
            <a>Ogłoszenia</a>
          </li>
          <li tabindex="0">
            <a>
              Przedmioty
              <svg
                class="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="bg-[#fafafa]" class="p-2">
              <li>
                <a>Ścisłe</a>
              </li>
              <li>
                <a>Humanistyczne</a>
              </li>
              <li>
                <a>Języki obce</a>
              </li>
            </ul>
          </li>
          <li>
            <a>Blog</a>
          </li>
        </ul>
      </div>
      <div class="navbar-end gap-2">
        <button class="btn btn-outline text-[#06283d] border-2">
          <Link to="../SignIn">Zaloguj się</Link>
        </button>
        <button class="btn bg-[#06283d] text-[#dff6ff]">Załóż konto</button>
      </div>
    </div>
  );
};

export default Nav;
