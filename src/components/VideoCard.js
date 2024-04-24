import { useEffect , useState } from "react";
import ShimmerCard from "./ShimmerCard";

const VideoCard = ( { info , check}) => {
    const [data , setData] = useState(null);
    useEffect(()=>{
        fetchData();
    },[])
    function nFormatter(num, digits) {
        const lookup = [
          { value: 1, symbol: "" },
          { value: 1e3, symbol: "k" },
          { value: 1e6, symbol: "M" },
          { value: 1e9, symbol: "G" },
          { value: 1e12, symbol: "T" },
          { value: 1e15, symbol: "P" },
          { value: 1e18, symbol: "E" }
        ];
        const regexp = /\.0+$|(?<=\.[0-9]*[1-9])0+$/;
        const item = lookup.findLast(item => num >= item.value);
        return item ? (num / item.value).toFixed(digits).replace(regexp, "").concat(item.symbol) : "0";
    }

    const fetchData = async () => {
        const res = await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%20%2C%20statistics&id="+info+"&key=AIzaSyBWt0x7Iq5BA5rI--v7jHNyjdZ5ud_7JG0");
        const d = await res.json();
        setData(d);
    }

    if(data === null) return <ShimmerCard/>

    const {snippet , statistics} = data?.items[0];
    const {thumbnails , channelTitle , title} = snippet;
    const {viewCount} = statistics;


    return (
        <div className="m-2 p-2 hover:shadow-xl hover:cursor-pointer hover:bg-gray-200 w-96 h-[300px] rounded-xl">
            <img className="mx-auto rounded-lg" src={thumbnails?.medium?.url} alt="thumbnail"/>
            <ul>
                <li className="text-sm ml-6">{title}</li>
                <li className="font-bold ml-6">{channelTitle} ✅</li>
                <li className="ml-6">{nFormatter(viewCount,1) } views</li>
            </ul>
        </div>
    );
}

export default VideoCard; 
