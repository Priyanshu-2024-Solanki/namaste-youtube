import { useDispatch } from "react-redux";
import { useEffect, useState , useRef} from "react";
import mainLogo from "../assets/main-logo.png";
import user from "../assets/user.png";
import { toogleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";
import { cacheResults } from "../utils/searchSlice";
import { useSelector } from "react-redux";
import { changeContent } from "../utils/videoSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();
  const cachedResults = useSelector((store) => store.search);
  const barRef = useRef(null);
  useEffect(() => {
    if (cachedResults[searchQuery]) {
      setShowSuggestions(cachedResults[searchQuery]);
    } else {
      const timer = setTimeout(() => getSearchSuggestions(), 200);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [searchQuery]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (barRef.current && !barRef.current.contains(event.target)) {
        // Click occurred outside of the bar, so close it
        setShowSuggestions(false);
      }
    };

    // Attach the event listener when the bar is open
    if (showSuggestions) {
      document.addEventListener('click', handleClickOutside);
    }

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };

  } , [showSuggestions])

  const getSearchSuggestions = async () => {
    // console.log('api call');
    const res = await fetch(
      `https://clients1.google.com/complete/search?client=youtube&gs_ri=youtube&ds=yt&q=${searchQuery}`
    );
    const str = await res.text();
    const arr = JSON.parse(
      str.substring(str.indexOf("["), str.indexOf("])") + 1)
    );
    if(arr[1].length>10) arr[1] = arr[1].slice(0,9);
    cacheSearchSuggestions(arr[1]);
    setSuggestions(arr[1]);
  };

  const handleSideMenu = () => {
    dispatch(toogleMenu());
  };
  const cacheSearchSuggestions = (results) => {
    dispatch(cacheResults({ [searchQuery]: results }));
  };
  const changeVideos = async () => {
    const data = await fetch(
      "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=" +
        searchQuery +
        "&type=video&key=AIzaSyBWt0x7Iq5BA5rI--v7jHNyjdZ5ud_7JG0"
    );
    const res = await data.json();
    dispatch(changeContent(res.items));
  };

  return (
    <div className="flex fixed w-full p-2 shadow-lg bg-white">
      <div className="flex max-[668px]:w-4/12 md:w-2/12 items-center">
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
      <div className="flex md:w-6/12 md:ml-28 items-center">
        <input
          onFocus={() => setShowSuggestions(true)}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border h-10 border-gray-500 rounded-l-xl p-2 w-9/12"
          value={searchQuery}
          type="text"
        ></input>
        <Link to="/search">
        <img
          onClick={() => {
            changeVideos()
          }}
          className="h-10 border border-gray-500 p-2 rounded-r-xl"
          src="https://imgs.search.brave.com/bTtVr2TqbSnUyDJ18zdcDNBcKjP2zht-L413xs3fnIo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA2LzY1Lzk0LzY3/LzM2MF9GXzY2NTk0/Njc5NV9PNGxkYTU4/QW16enVGZVVkVzNQ/UGltMzFWdlhWWHUz/bC5qcGc"
          alt="search"
        ></img>
        </Link>
        <div ref={barRef} className="absolute top-0 mt-14 w-[35%] overflow-y-hidden bg-white rounded-lg shadow-lg">
          <ul>
            {suggestions !== "" &&
              showSuggestions &&
              suggestions.map((e) => (
                <li
                  key={e[0]}
                  onClick={(e) => setSearchQuery(e.target.innerText.slice(2,))}
                  className="shadow-sm hover:bg-gray-200 py-2 cursor-pointer"
                >
                  🔍 {e[0]}
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div className="max-[668px]:w-2/12 md:w-4/12 flex justify-end">
        <img
          src={user}
          className="max-[668px]:mr-1 h-12 p-1 hover:bg-gray-400 hover:rounded-full hover:cursor-pointer"
          alt="user"
        ></img>
      </div>
    </div>
  );
};

export default Header;
