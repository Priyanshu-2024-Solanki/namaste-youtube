import { useSearchParams } from "react-router-dom";
import CommentList from "./CommentList";

const WatchPage = () => {
    const [searchParams] = useSearchParams();
    const videoID = searchParams.get('v');
  return (
    <div className="p-5 mt-14 lg:flex">
      <iframe
        className="lg:w-[2400px] lg:h-[450px] w-[99%] h-[230px]"
        src={"https://www.youtube.com/embed/"+videoID}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <CommentList videoId={videoID}/>
    </div>
  );
};

export default WatchPage;
