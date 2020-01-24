import React from "react";
import { NewsCatButtonProps } from "common/types";

const NewsCatButton: React.FC<NewsCatButtonProps> = ({ newsCategory, toggleCategory }) => {
  return (
    <button
      key={newsCategory.id}
      className={`flex mb-1 mr-1 px-2 py-1 ${
        newsCategory.selected ? newsCategory.color : "bg-gray-300"
      } text-xs text-gray-500 rounded border border-gray-400`}
      onClick={() => toggleCategory(newsCategory)}
    >
      {newsCategory.name}
    </button>
  );
};

export default NewsCatButton;
