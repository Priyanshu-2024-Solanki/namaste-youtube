import Header from "./Header";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useState} from 'react'
import {useDispatch} from "react-redux";
import mockVideo from '../utils/mockVidoe.json'
import { loadMoreContent } from "../utils/videoSlice";

const Body = () => {
    const [loading , setLoading] = useState(false);
    const dispatch = useDispatch();
    const fetchData = () => {
        dispatch(loadMoreContent(mockVideo));
        // console.log(content);
        setLoading(false);
    }
    const handleScroll = (e) => {
        // reached to the end of the page 
        if(!loading &&e.target.scrollTop + e.target.clientHeight >= e.target.scrollHeight) {
            setLoading(true);
            fetchData();
        }
    }
    return (
        <div className="flex overflow-y-auto h-screen" onScroll={handleScroll}>
            <Sidebar />
            <div className="w-full">
              <Header />
              <Outlet/>
            </div>
        </div>
    );
}

export default Body;