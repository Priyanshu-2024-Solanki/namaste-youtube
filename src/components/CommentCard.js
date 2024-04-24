const CommentCard = ({ comment }) => {
  const { authorDisplayName, authorProfileImageUrl, textDisplay } =
    comment?.snippet?.topLevelComment?.snippet;
  return (
    <div className="mb-2 bg-gray-200 rounded-md">
        <div className="flex">
          <img src={authorProfileImageUrl} className="mx-2 p-2 rounded-full w-12 ml-2" alt="user"></img>
          <h2 className="my-auto">{authorDisplayName}</h2>
        </div>
        <p className="mx-2 px-2">
          {textDisplay.length>50 ? textDisplay.substring(0,30) : textDisplay}
        </p>
        {textDisplay.length>50 && <h3 className="mx-2 px-2 text-gray-500 hover:cursor-pointer">Read More....</h3>}
    </div>
  );
};

export default CommentCard;
