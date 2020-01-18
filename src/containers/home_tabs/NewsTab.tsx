import React from "react";
import NewsPreviewItem from "components/NewsPreviewItem";

const NewsTab = () => {
  return (
    <div className="p-2">
      <div className="flex justify-between pb-1">
        <h4 className="text-gray-500 self-center text-xs font-semibold self-center">
          Featured news
        </h4>
        <a href="#" className="text-gray-500 self-center text-xs self-center font-semibold">
          All articles »
        </a>
      </div>

      {[...Array(4)].map((article, index) => (
        <NewsPreviewItem />
      ))}
    </div>
  );
};

export default NewsTab;
