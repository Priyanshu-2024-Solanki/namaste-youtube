import {  useEffect, useState } from "react";
import { YOUTUBE_API_KEY, YOUTUBE_API_URL } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeContent } from "../utils/videoSlice";
import ShimmerCard from "./ShimmerCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState(null);
  const content = useSelector((store) => store.video.contents);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const res = await fetch(YOUTUBE_API_URL + YOUTUBE_API_KEY);
    const data = await res.json();
    dispatch(changeContent(data.items));
    setVideos(data.items);
  };


  if (videos == null) return <ShimmerCard/>
  return (
    <div
      className="flex flex-wrap justify-center"
    >
      {/* {
        content[0].forEach((c) => console.log(c))
      } */}
      {content[0].map((video, index) => (
        <Link
          to={
            "/watch?v=" +
            (video.kind === "youtube#searchResult"
              ? video?.id?.videoId
              : video?.id)
          }
          key={
            video.kind === "youtube#searchResult"
              ? video?.id?.videoId
              : video?.id
          }
        >
          <VideoCard
            info={
              video.kind === "youtube#searchResult"
                ? video?.id?.videoId
                : video?.id
            }
            check={index === content[0].length - 1}
          />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
