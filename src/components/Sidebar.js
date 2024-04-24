import React from "react";
import { useSelector } from "react-redux";
import mainLogo from '../assets/main-logo.png'
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {toogleMenu} from '../utils/appSlice'

const Sidebar = () => { 
    const isMenuOpen = useSelector(state => state.app.isMenuOpen);
    const dispatch = useDispatch();
    const handleSideMenu = () => {
      dispatch(toogleMenu());
    };
  return (
    <div className= {`fixed inset-y-0 left-0 max-[322px]:w-7/12 bg-white shadow-lg overflow-y-auto z-50 transform transition-transform duration-300 ease-in-out ${
      isMenuOpen ? "-translate-x-full" : "translate-x-0"
    }`}>
      <div className="flex items-center m-2 p-2">
        <img
          className="h-6 hover:cursor-pointer"
          onClick={() => handleSideMenu()}
          src="https://imgs.search.brave.com/VDkctdkNatiSmpjLTAb2HrWzP0OpePN5IlxNVLtk7Nw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzA5LzQ1Lzgw/LzM2MF9GXzEwOTQ1/ODAxNV9Rc1dtY2hs/enV3Q1pQcUlVV1I3/SGNURHNiYnB0ZWpS/di5qcGc"
          alt="extra"
        ></img>
        <Link to="/">
          <img
            className="h-6 hover:cursor-pointer"
            src={mainLogo}
            alt="youtube"
          ></img>
        </Link>
      </div>
      <div>
        <div className="flex text-center hover:bg-gray-200">
          <img
            className="h-10 pr-4"
            src="https://imgs.search.brave.com/oiSD-iLBP_rlrktgVm1jm2s4cPLsVTAXD_D0kz4aiY0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA2LzAyLzgxLzcz/LzM2MF9GXzYwMjgx/NzMyNl9JTUVlOFAw/NExNeTNhekdaTmxW/cTFxR0NKQ0FxY3Jp/ZC5qcGc"
            alt="Home"
          ></img>
          <h1 className="py-2 mx-2">Home</h1>
        </div>
        <div className="flex text-center hover:bg-gray-200">
          <img
            className="h-10 pr-4"
            src="https://imgs.search.brave.com/o5BX2A3yQwLnVou4NujQgPr2nhUqmOvel9T4Hj8_JHM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9sb2dv/d2lrLmNvbS9jb250/ZW50L3VwbG9hZHMv/aW1hZ2VzL3lvdXR1/YmUtc2hvcnRzNTg2/My5qcGc"
            alt="Home"
          ></img>
          <h1 className="py-2">Shorts</h1>
        </div>
        <div className="flex text-center hover:bg-gray-200">
          <img
            className="h-8  mt-1 pr-4"
            src="https://imgs.search.brave.com/851ho-BVcpkW-0AxKx1jhqXlozjGJDCpT3a4gh5IvHQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91eHdp/bmcuY29tL3dwLWNv/bnRlbnQvdGhlbWVz/L3V4d2luZy9kb3du/bG9hZC9icmFuZHMt/YW5kLXNvY2lhbC1t/ZWRpYS9ibGFjay1h/bmQtd2hpdGUteW91/dHViZS1pY29uLnN2/Zw.svg"
            alt="Home"
          ></img>
          <h1 className="py-2  mx-2">Subscriptions</h1>
        </div>
        <div className="my-2 border-b-4 border-gray-500"></div>
      </div>
      <div>
        <h1 className="font-bold text-xl pl-4">Explore</h1>
        <ul className="pl-6">
          <li className="hover:bg-gray-200 rounded-md">Trending</li>
          <li className="hover:bg-gray-200 rounded-md">Shopping</li>
          <li className="hover:bg-gray-200 rounded-md">Music</li>
          <li className="hover:bg-gray-200 rounded-md">Movies</li>
          <li className="hover:bg-gray-200 rounded-md">Live</li>
          <li className="hover:bg-gray-200 rounded-md">Gaming</li>
          <li className="hover:bg-gray-200 rounded-md">News</li>
          <li className="hover:bg-gray-200 rounded-md">Sports</li>
          <li className="hover:bg-gray-200 rounded-md">Courses</li>
          <li className="hover:bg-gray-200 rounded-md">Fashion & Beauty</li>
          <li className="hover:bg-gray-200 rounded-md">Podcasts</li>
        </ul>
        <div className="my-2 border-b-4 border-gray-500"></div>
      </div>
      <div>
        <h1 className="font-bold text-xl pl-4">Watch Later</h1>
        <ul className="pl-6">
          <li>Trending</li>
          <li>Shopping</li>
          <li>Music</li>
          <li>Movies</li>
          <li>Live</li>
          <li>Gaming</li>
          <li>News</li>
          <li>Sports</li>
          <li>Courses</li>
          <li>Fashion & Beauty</li>
          <li>Podcasts</li>
        </ul>
        <div className="my-2 border-b-4 border-gray-500"></div>
      </div>
    </div>
  );
};

export default Sidebar;
