import React from "react";
import Navbar from "../components/Navbar";
import agentprofile from "../assets/agentprofile.png";
import badge from "../assets/badge.png";
import agentmedal from "../assets/agentmedal.png";
import agentprofile1 from "../assets/agentprofile1.png";
import agentcertificate from "../assets/agentcertificate.png";
import percentage from "../assets/percentage.png";
import { Globe, MapPin, Mail, Phone } from "lucide-react";

const AgentProfile = () => {
  return (
    <div className="bg-secondary min-h-screen">
      <div className="p-4">
        <div className="grid grid-cols-1 lg:grid-cols-[21%_73%] gap-4">
          <div className="flex flex-col space-y-4">
            <div className="bg-white flex flex-col p-4 rounded-2xl shadow-2xl">
              <div className="p-4 flex flex-wrap space-x-6 items-center">
                <div>
                  <img src={agentprofile}></img>
                </div>
                <div>
                  <h1 className="text-black text-2xl font-semibold">
                    Dhara Jones
                  </h1>
                  <h3>dhara.jonesa@gmail.com</h3>
                </div>
              </div>
              <div className="flex justify-between p-4">
                <h1 className="text-xl">
                  Total
                  <span className="text-xl text-primary font-semibold">
                    Certificates
                  </span>
                </h1>
                <h1 className="text-primary text-xl font-semibold">40</h1>
              </div>
              <div className="flex justify-between p-4">
                <h1 className="text-xl">
                  Total
                  <span className="text-xl text-primary font-semibold">
                    Trainings
                  </span>
                </h1>
                <h1 className="text-primary text-xl font-semibold">35</h1>
              </div>
              <div className="flex justify-between p-4">
                <h1 className="text-xl">
                  Ongoing
                  <span className="text-xl text-primary font-semibold">
                    Trainings
                  </span>
                </h1>
                <h1 className="text-primary text-xl font-semibold">05</h1>
              </div>
            </div>

            {/* card2 */}
            <div className="flex flex-col  bg-white p-4 rounded-2xl space-y-4">
              <div className="text-black text-2xl font-semibold">
                Personal Details
              </div>
              <div className="flex flex-wrap space-x-4">
                <Mail color="#337E72" /> <h1>dhara.jones@veritas_mundi.com</h1>
              </div>
              <div className="flex flex-wrap space-x-4">
                <Phone color="#337E72" /> <h1>+44-1234567890</h1>
              </div>
              <div className="flex flex-wrap space-x-4">
                <MapPin color="#337E72" /> <h1>Oxford, United Kingdom</h1>
              </div>
              <div className="flex flex-wrap space-x-4">
                <Globe color="#337E72" /> <h1>www.veritas_mundi.com</h1>
              </div>
            </div>

            {/* card3 */}
            <div className="flex flex-col bg-white p-4 rounded-2xl space-y-3">
              <h1 className="text-black font-semibold text-xl">Liasion Name</h1>
              <h1 className="text-xl">Dhara Jones</h1>
              <h1 className="text-black font-semibold text-xl">Company Name</h1>
              <h1 className="text-xl">Verti Mundi</h1>
              <h1 className="text-black font-semibold text-xl">Branches</h1>
              <h1 className="text-xl">UK, India</h1>
            </div>
          </div>

          {/* right   */}
          <div>
            <div className="py-4 text-2xl font-semibold">Ongoing Trainings</div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="flex flex-col p-4 bg-white h-fit space-y-4">
                <img src={agentprofile1}></img>

                <div className="grid grid-cols-[70%_30%] gap-20">
                  <div>
                    <h1 className="text-xl text-black font-semibold">
                      Welcome to AUB: History & Vision
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      incididunt ut labore ipsum dolor sit amet.
                    </p>
                  </div>
                  <div>
                    <img src={percentage} className="w-16 h-16"></img>
                  </div>
                </div>
              </div>
              <div className="flex flex-col p-4 bg-white h-fit space-y-4">
                <img src={agentprofile1}></img>

                <div className="grid grid-cols-[70%_30%] gap-20">
                  <div>
                    <h1 className="text-xl text-black font-semibold">
                      Welcome to AUB: History & Vision
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      incididunt ut labore ipsum dolor sit amet.
                    </p>
                  </div>
                  <div>
                    <img src={percentage} className="w-16 h-16"></img>
                  </div>
                </div>
              </div>
            </div>

            {/* certificate */}
            <div className="text-2xl font-semibold text-black p-4">
                Certificates
            </div>
            <div className="grid   grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="flex flex-col p-4 bg-white h-fit space-y-4">
              <div className="relative">
              <img src={agentcertificate}></img>
              <img src={agentmedal} className="absolute bottom-[-36px] right-[60px]"></img>
              </div>
                  <div className="mt-8">
                    <h1 className="text-xl text-black font-semibold">
                    Program Introduction to AUB & its Programmes
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      incididunt ut labore ipsum dolor sit amet.
                    </p>
                  </div> 
                  <div className="flex space-x-4">
                    <img src={badge}></img>
                    <h1 className="text-xl font-semibold">Valid Till Aug 15,2025</h1>
                  </div>                          
              </div>
              <div className="flex flex-col p-4 bg-white h-fit space-y-4">
              <div className="relative">
              <img src={agentcertificate}></img>
              <img src={agentmedal} className="absolute bottom-[-36px] right-[60px]"></img>
              </div>
                  <div className="mt-8">
                    <h1 className="text-xl text-black font-semibold">
                    Program Introduction to AUB & its Programmes
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      incididunt ut labore ipsum dolor sit amet.
                    </p>
                  </div> 
                  <div className="flex space-x-4">
                    <img src={badge}></img>
                    <h1 className="text-xl font-semibold">Valid Till Aug 15,2025</h1>
                  </div>             
              </div>

            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentProfile;
