// components/Navbar.tsx
import { IconWifi } from '@tabler/icons-react';
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <div className="bg-white drop-shadow-md shadow-md">
      <div className="container mx-auto flex justify-center items-center">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="primary-color font-bold">Home</a>
                </li>
                <li>
                  <a className="text-black font-bold">Reservation</a>
                </li>
                <li>
                  <a className="text-black font-bold">About Us</a>
                </li>
              </ul>
            </div>
            <img
              src="../image/logo.png"
              style={{ height: '60px', width: 'auto' }}
              className="btn btn-ghost"
              alt="Logo"
            />
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a className="primary-color font-bold">Home</a>
              </li>
              <li>
                <a className="text-black font-bold">Reservation</a>
              </li>
              <li>
                <a className="text-black font-bold">About Us</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <a className="btn btn-ghost text-black">
              <span className="primary-color">
                <IconWifi stroke={2} />
              </span>
              Login Wifi
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
