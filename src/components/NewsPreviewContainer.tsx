import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BackgroundImage } from "react-image-and-background-image-fade";

const NewsPreviewContainer = () => {
  const articles = [
    {
      id: 1,
      title: "Article 1",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, eveniet.",
      img: "pirates_topstory_300x187_05.gif",
      date: "29/01/2020"
    },
    {
      id: 2,
      title: "Article 2",
      desc: "This article is about stuff that happens in article 2",
      img: "frank_topstory_300x187.gif",
      date: "29/01/2020"
    },
    {
      id: 3,
      title: "Article 3",
      desc: "This is most likely the most interesting article. Noone knows.",
      img: "Habbo_Topstory1_2.gif",
      date: "29/01/2020"
    }
  ];

  const [currentArticle, setCurrentArticle] = useState(articles[0]);

  return (
    <>
      {articles.map(article => {
        if (article.id !== currentArticle.id) return;

        return (
          <div
            // src={`/assets/images/topstory/${article.img}`}
            className="w-full h-40 bg-gray-400 rounded-t flex flex-col justify-between p-2 bg-center"
            style={{ backgroundImage: `url(/assets/images/topstory/${currentArticle.img})` }}
          >
            <div>
              <h3 className="text-white text-lg font-semibold">{currentArticle.title}</h3>
              <p className="text-white text-xs leading-snug">{currentArticle.desc}</p>
            </div>
            <div className="flex justify-between">
              <div className="flex self-center">
                {articles.map(article => (
                  <div
                    key={article.id}
                    className={`article-container__indicator bg-white  h-2 w-2 rounded-sm self-end mr-px
                    ${article.id === currentArticle.id ? "" : "opacity-25"}`}
                  ></div>
                ))}
              </div>
              <Link
                to={`community/news/${currentArticle.id}`}
                className="p-1 bg-fade text-xs text-white hover:bg-gray-600 rounded"
              >
                Read Article
              </Link>
            </div>
          </div>
        );
      })}
      <div className="pt-1">
        {articles.map(article => (
          <Link
            key={article.id}
            to={`/community/news/${article.id}`}
            onMouseEnter={() => setCurrentArticle(articles[article.id - 1])}
            className="bg-fade p-1 block hover:bg-gray-200 rounded flex justify-between"
          >
            <div className="flex flex-col ">
              <span
                className={`text-gray-600 text-sm ${
                  article.id === currentArticle.id ? "font-semibold" : ""
                }`}
              >
                {article.title}
              </span>
              <span className="text-xs text-gray-500">{article.date}</span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default NewsPreviewContainer;
