import React from "react";
import { withRouter, Link } from "react-router-dom";

const NewsArticle = withRouter(({ history }) => {
  return (
    <div>
      <div
        className="w-full h-40 flex flex-col justify-between bg-center border-b-2 border-gray-400"
        style={{ backgroundImage: `url(/assets/images/news_images/lpromo_bawwalleeventfeb.png)` }}
      >
        <div className="flex justify-between text-white p-2">
          <div>
            <button onClick={() => history.goBack()} className="h-8 w-8">
              <i className="fas fa-chevron-left"></i>
            </button>
          </div>
          <div className="flex"></div>
        </div>
        <div className="flex flex-col p-4">
          <h1 className="text-white text-2xl font-semibold">News Title 1</h1>
          <span className="text-xs opacity-50 text-white">Events | 16 Jan 2020</span>
        </div>
      </div>

      <div className="px-2">
        <div className=" my-2">
          <div className="w-full flex flex-wrap justify-between">
            <div className="flex">
              <div
                className="bg-gray-300 flex-none relative rounded w-12 h-12 bg-no-repeat bg-center"
                style={{
                  backgroundImage:
                    'url("https://www.habbo.nl/habbo-imaging/avatarimage?figure=hd-205-3.lg-280-1293.ch-255-62.hr-115-1051.sh-290-62")',
                  backgroundPositionY: "-14px",
                  backgroundPositionX: "-9px"
                }}
              >
                <div className="absolute h-3 w-3 bg-green-500 rounded right-0 border-2 border-gray-100 -m-px" />
              </div>
              <div className="flex flex-col leading-snug text-gray-700 px-2 self-center">
                <span className="text-blue-700 text-sm font-semibold flex">Chuckie</span>
                <span className="text-gray-500 text-xs">Hotel Admin</span>
              </div>
            </div>
            <div className="flex self-center"></div>
          </div>
        </div>
        <button className="bg-gray-100 w-full flex justify-center text-xs text-gray-500 py-2 border rounded border-gray-400">
          Show comments (24) <i className="fas fa-angle-down ml-1 self-center"></i>
        </button>

        <p className="text-gray-600 text-sm px-2 pt-2">
          <h2 className="text-gray-700 font-semibold text-lg">Header2</h2>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima consectetur eligendi
          deleniti amet perspiciatis aliquid corrupti laborum impedit. Velit iste corporis
          consequuntur fugit ullam fuga earum pariatur quo dicta quasi, officiis vel quod cum
          asperiores quidem numquam nesciunt voluptate rem aliquam et, enim corrupti laudantium
          optio? Facilis porro repellat veritatis.
          <br />
          <br />
          <h3 className="text-gray-700 font-semibold text-base">Header3</h3>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima consectetur eligendi
          deleniti amet perspiciatis aliquid corrupti laborum impedit. Velit iste corporis
          consequuntur fugit ullam fuga earum pariatur quo dicta quasi, officiis vel quod cum
          asperiores quidem numquam nesciunt voluptate rem aliquam et, enim corrupti laudantium
          optio? Facilis porro repellat veritatis.
          <br />
          <br />
          <h4 className="text-gray-700 font-semibold text-sm">Header3</h4>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima consectetur eligendi
          deleniti amet perspiciatis aliquid corrupti laborum impedit. Velit iste corporis
          consequuntur fugit ullam fuga earum pariatur quo dicta quasi, officiis vel quod cum
          asperiores quidem numquam nesciunt voluptate rem aliquam et, enim corrupti laudantium
          optio? Facilis porro repellat veritatis.
          <br />
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima consectetur eligendi
          deleniti amet perspiciatis aliquid corrupti laborum impedit. Velit iste corporis
          consequuntur fugit ullam fuga earum pariatur quo dicta quasi, officiis vel quod cum
          asperiores quidem numquam nesciunt voluptate rem aliquam et, enim corrupti laudantium
          optio? Facilis porro repellat veritatis.
          <br />
          <br />
        </p>
      </div>
      <div className="mt-2">
        <h4 className="text-gray-500 my-1 self-center text-xs font-semibold self-center">
          Other articles
        </h4>
      </div>
    </div>
  );
});

export default NewsArticle;
