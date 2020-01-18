import React from "react";
import { Link } from "react-router-dom";

const NewsPreviewItem = () => {
  const articleImage = {
    backgroundImage: `url(/assets/images/news_images/lpromo_bawwalleeventfeb.png)`
  };
  return (
    <div>
      <Link to="/community/news/2">
        <div className="bg-gray-100 mb-2 p-1 overflow-hidden w-full border border-gray-400 rounded">
          <div
            className="p-1 h-20 rounded bg-center flex flex-col justify-end"
            style={articleImage}
          >
            <h5 className="font-semibold text-gray-100">News Title Bla Bla</h5>
          </div>
          <div className="w-full p-1 border-b border-gray-200">
            <div className="flex justify-between mb-1">
              <p className="text-xs font-semibold text-gray-500">Event</p>
              <p className="text-xs text-gray-500">5 Hours ago</p>
            </div>
            <p className="text-xs text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem fugiat impedit
              autem voluptatum repellendus. Dolorum voluptas alias illum assumenda dolores!
            </p>
          </div>
          <div className="p-1 flex">
            <div className="flex-1 flex">
              <div className="flex px-2 rounded bg-gray-200 mr-1">
                <div className="justify-center self-center text-gray-500 text-xs">
                  <i className="fas fa-heart"></i>
                </div>
                <span className="text-xs ml-1 self-center text-gray-500">23</span>
              </div>
              <div className="flex px-2 rounded bg-gray-200">
                <div className="justify-center self-center text-gray-500 text-xs">
                  <i className="fas fa-comment"></i>
                </div>
                <span className="text-xs ml-1 self-center text-gray-500">4</span>
              </div>
            </div>
            <div>
              <Link to="community/news/2" className="text-xs text-gray-500">
                Read article &raquo;
              </Link>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default NewsPreviewItem;
