import React from "react";
import Navbar from "../components/Navbar";
import university from "../assets/university.png";
import image_1 from "../assets/image_1.png";
import { MapPin, Mail, Phone } from "lucide-react";
import group from "../assets/group.png";
import degree from "../assets/degree.png";
import agent from "../assets/agent.png";
import download from "../assets/download.png";
import building from "../assets/building.png";
import onlinegraduation from "../assets/onlinegraduation.png";
import onlinewebinar from "../assets/onlinewebinar.png";
import ChartArea1 from "../components/ChartArea1";
import Donut from "../components/Donut";
import BarChart from "../components/BarChart";
import AgentDataCards from "../components/AgentDataCards";
import HomeCards from "../components/HomeCards";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      {/* <div><Navbar /></div> */}
      <div className="bg-secondary min-h-screen w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[33%_64%] p-[20px] gap-8">
          {/* left column */}
          <div>
            <div className="relative bg-white p-4 rounded-2xl">
              <img
                src={university}
                alt="University"
                className="w-full md:h-60 h-40 rounded-md"
              />
              <div className="absolute top-6 left-6 bg-white text-primary font-semibold rounded-2xl p-2">
                Good Morning,Kay
              </div>
              <div className="flex flex-col md:flex-row items-start md:items-center py-8 space-y-4 md:space-y-0 md:space-x-4">
                <div>
                  <img src={image_1} alt="image" className="h-12 w-12" />
                </div>
                <div>
                  <h1 className="font-semibold text-black">
                    Arts University Bournemouth
                  </h1>
                  <div className="flex flex-col md:flex-row space-x-4">
                    <div className="flex items-center">
                      <MapPin size={18} />
                      <span>Poole, UK</span>
                    </div>
                    <div className="flex items-center">
                      <Mail size={18} />
                      <span>kay@aub.au.uk</span>
                    </div>
                    <div className="flex items-center">
                      <Phone size={18} />
                      <span>+44-7894561230</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 right-0">
                <button className="bg-primary text-white rounded-tl-xl rounded-br-xl p-2">
                  View Profile
                </button>
              </div>
            </div>
            <div className="py-4">
              <button className=" w-full bg-primary text-white p-4 rounded-xl">
                Survey Responses
              </button>
            </div>
          </div>
          {/* left column */}
          {/* right column */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-2">
              <AgentDataCards
                image={group}
                heading="Active Agent"
                data="287"
                dataclass="text-primary"
              />
              <AgentDataCards
                image={agent}
                heading="Certified Agents"
                data="87"
                dataclass="text-blue-900"
              />
              <AgentDataCards
                image={download}
                heading="ResourceDownload"
                data="100"
                dataclass="text-orange-500 "
              />
            </div>
            <div className="flex flex-wrap ">
              <HomeCards image={degree} />
              <HomeCards
                image={building}
                heading="Accomodations"
                para="Share on-campus and nearby housing options to ensure smooth student transition and settlement."
              />
              <HomeCards
                image={onlinegraduation}
                heading="Training Programs"
                para="Design tailored programs to train agents, enhance skills, and provide valuable certifications."
              />
              <HomeCards
                image={onlinewebinar}
                heading="Webinars"
                para="Host interactive webinars to train agents, share updates, and strengthen institutional partnerships."
              />
            </div>
          </div>
          {/* right column */}
        </div>
        {/* part3 */}
        <div className="m-4">
          <div className="grid grid-cols-1 gap-y-4 md:gap-y-0 lg:grid-cols-3 gap-x-6">
            <div className="bg-white p-4 shadow rounded-lg">
              <h1 className="text-black font-semibold text-xl">
                Training Status
              </h1>
              <h1>
                <span className="text-primary font-bold text-6xl ">487</span>
                Agents
              </h1>
              <div class="flex flex-col space-y-4">
                <BarChart />
                <BarChart />
                <BarChart />
              </div>
            </div>
            <div className="bg-white p-5 shadow-lg rounded-lg ">
              <h1 className="text-black font-semibold text-xl mb-16">
                Certificate Status
              </h1>
              <div className="flex justify-center">
                <ChartArea1   />
              </div>
            </div>
            <div className="bg-white p-5 shadow-lg rounded-lg ">
              <h1 className="text-black font-semibold text-xl ">
                Fully Trained Agents
              </h1>
              <div className="flex justify-center">
                <Donut />
              </div>
            </div>
          </div>
        </div>
        {/* part3 */}
      </div>
    </div>
  );
};

export default Home;
