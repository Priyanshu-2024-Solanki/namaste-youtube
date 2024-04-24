import { useEffect , useState } from "react";
import CommentCard from "./CommentCard";
import ShimmerWatchPage from "./ShimmerWatchPage";
const CommentList = ({videoId}) => {
    const [comments , setComments] = useState(null);

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        const res = await fetch("https://www.googleapis.com/youtube/v3/commentThreads?key=AIzaSyBWt0x7Iq5BA5rI--v7jHNyjdZ5ud_7JG0&textFormat=plainText&part=snippet&videoId="+videoId+"&maxResults=100");
        const data = await res.json();
        setComments(data.items);
    }

    if(comments === null) return <ShimmerWatchPage/>
    if(comments === undefined) return <h1>Comments are turned off for this video</h1>
    return (
        <div className="w-[90%] lg:ml-5">
            <h1 className="font-bold my-2 p-2 text-xl lg:text-3xl">Comments - ({comments?.length})</h1>
            {comments.map((comment) => <CommentCard key={comment.id} comment={comment}/>)}
        </div>
    );
}

export default CommentList;