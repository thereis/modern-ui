import React from "react";
import NewsPreviewItem from "components/NewsPreviewItem";
import { Link } from "react-router-dom";

const NewsTab = () => {
  return (
    <div className="">
      <div className="flex p-2 justify-between pb-1">
        <h4 className="text-gray-500 self-center text-xs font-semibold self-center">
          Featured news
        </h4>
        <Link to="/news" className="text-gray-500 self-center text-xs self-center font-semibold">
          All articles »
        </Link>
      </div>

      <div className="pl-2">
        <div className="p-1 pb-2 rounded bg-gray-300 overflow-x-auto w-full flex">
          {[...Array(4)].map((article, index) => (
            <NewsPreviewItem />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsTab;
