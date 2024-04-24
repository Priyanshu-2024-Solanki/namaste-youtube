import React from "react";
import { useSelector } from "react-redux";
import SearchPageCard from "./SearchPageCard";

const SearchPage = () => {
  const content = useSelector((store) => store.video.contents);
  return (
    <div className="mt-20">
      {content[0].map((content) => (
        <SearchPageCard
          key={content?.id?.videoId}
          videoId={content?.id?.videoId}
          content={content}
        />
      ))}
    </div>
  );
};

export default SearchPage;
