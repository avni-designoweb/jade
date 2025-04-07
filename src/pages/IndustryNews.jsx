import React from "react";
import Navbar from "../components/Navbar";
import news_1 from "../assets/news_1.png";
import news_2 from "../assets/news_2.png";
import SearchBar from "../components/SearchBar";
import NewsCards from "../components/NewsCards";

const IndustryNews = () => {
  return (
    <div className="bg-secondary min-h-screen">
      {/* <Navbar /> */}
      <div className="flex justify-between items-center p-4">
        <div className="text-black text-2xl font-semibold">Industry News</div>
        <div className="flex space-x-0 md:space-x-2 items-center">
          <SearchBar />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[73%_27%] gap-4 p-4">
        {/* Left Column */}
        <div className="bg-white rounded-xl flex flex-col md:flex-row ">
          <div className="md:w-1/3">
            <img
              src={news_1}
              className="object-cover w-full h-full"
              alt="News 1"
            />
          </div>
          <div className="p-4 md:w-2/3 flex flex-col justify-center">
            <p className="text-2xl text-black font-semibold mb-2">
              How diverse is the international student population in leading
              study abroad destinations?
            </p>
            <p className="text-lg text-gray-500">
              The last time we looked in on the distribution of nationalities in
              four top study destinations, we reported that in 2019 – i.e., just
              before the pandemic – Australia (70%) and Canada (67%) were the
              most reliant on their Top 5 student source countries, the UK was
              the least (45%), and the US (63%) held the middle ground. What has
              happened in the years since? How do other destinations compare? We
              look at recent foreign enrolment figures to find out.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <NewsCards image={news_2} />
      </div>

      {/* Latest News Section */}
      <div className="p-4">
        <div className="text-black text-2xl py-4">Latest News</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <NewsCards image={news_2} />
          <NewsCards image={news_2} />
          <NewsCards image={news_2} />
          <NewsCards image={news_2} />
        </div>
      </div>
    </div>
  );
};

export default IndustryNews;
