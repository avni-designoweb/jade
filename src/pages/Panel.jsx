import React from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import { EllipsisVertical } from "lucide-react";
import Navbar from "../components/Navbar";
import university from "../assets/university.png";
import image_1 from "../assets/image_1.png";
import image_2 from "../assets/image_2.png";
import image_3 from "../assets/image_3.png";
import image_4 from "../assets/image_4.png";
import image_5 from "../assets/image_5.png";
import { Link , useParams, useNavigate} from "react-router-dom";
import { useState } from "react";
import panel from "../assets/panel.png";
import UniversityMaterials from "./UniversityMaterials";
import Scholarship from "./Scholarship"; 
import Webinars from "./Webinars";
import Certifications from "./Certifications";
import Accomodation from "./Accomodation";
import UniversitySurvey from "./UniversitySurvey";
import UniversityGuidelines from "./UniversityGuidelines";
import Subscription from "./Subscription";


const Panel = () => {

  // const [activeTab, setActiveTab] = useState(""); 

  // const handleClick = (tab) => {
  //   setActiveTab(tab);
  // };
  const { tab } = useParams(); 
  const navigate = useNavigate();

  const activeTab = tab || ""; 

  const handleClick = (tab) => {
    navigate(`/panel/${tab}`); 
  };

  return (
    <div className="bg-secondary min-h-screen">
      {/* Navbar */}
      {/* <div>
        <Navbar />
      </div> */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[23%_74%] gap-[3%]  py-4 px-4">
        {/* left*/}
        <div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <img
              src={university}
              alt="University"
              className="w-full h-40 object-cover rounded-md"
            />
            <div className="flex flex-row py-2 space-x-4 items-center">
              <div>
                <img src={image_1} alt="image" className="h-12 w-12" />
              </div>
              <div>
                <h1 className="font-semibold text-black">
                  Arts University Bournemouth
                </h1>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Arts University Bournemouth offers specialized arts and media
              education, fostering creativity and practical skills for
              successful careers.
            </p>
          </div>
          <div className="bg-white mt-4 rounded-2xl shadow-2xl">
            <div className="font-semibold text-xl text-black ">
              
              <h1
                onClick={() => handleClick("UniversityMaterials")}
                className={`p-2 cursor-pointer ${
                  activeTab === "UniversityMaterials"
                    ? "bg-primary text-white rounded-lg p-2"
                    : "hover:text-primary"
                }`}
              >
                University Materials
              </h1>
              <h1
                onClick={() => handleClick("Scholarship")}
                className={`p-2 cursor-pointer ${
                  activeTab === "Scholarship"
                    ? "bg-primary text-white rounded-lg p-2"
                    : "hover:text-primary"
                }`}
              >
                Scholarship
              </h1>
              <h1
                onClick={() => handleClick("Webinars")}
                className={`p-2 cursor-pointer ${
                  activeTab === "Webinars"
                    ? "bg-primary text-white rounded-lg p-2"
                    : "hover:text-primary"
                }`}
              >
                Webinars
              </h1>
              <h1
                onClick={() => handleClick("Certifications")}
                className={`p-2 cursor-pointer ${
                  activeTab === "Certifications"
                    ? "bg-primary text-white rounded-lg p-2"
                    : "hover:text-primary"
                }`}
              >
                Certifications
              </h1>
              <h1
                onClick={() => handleClick("Accommodation")}
                className={`p-2 cursor-pointer ${
                  activeTab === "Accommodation"
                    ? "bg-primary text-white rounded-lg p-2"
                    : "hover:text-primary"
                }`}
              >
               Accommodation
              </h1>
              <h1
                onClick={() => handleClick("UniversitySurvey")}
                className={`p-2 cursor-pointer ${
                  activeTab === "UniversitySurvey"
                    ? "bg-primary text-white rounded-lg p-2"
                    : "hover:text-primary"
                }`}
              >
               University Survey
              </h1>
              <h1
                onClick={() => handleClick("Subscription")}
                className={`p-2 cursor-pointer ${
                  activeTab === "Subscription"
                    ? "bg-primary text-white rounded-lg p-2"
                    : "hover:text-primary"
                }`}
              >
               University Subscription
              </h1>
              {/* <Link to="/universitysurvey">
                <h1 className="p-4 cursor-pointer hover:text-primary ">
                  University Survey
                </h1>
              </Link> */}
            </div>
          </div>
        </div>

        {/* right*/}
        <div>
        {activeTab === "" && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="relative">
              <div className="absolute top-2 right-2 bg-white p-1 rounded-lg">
                <EllipsisVertical />
              </div>

              <img
                src={university}
                alt="University Banner"
                className="w-full h-60 object-cover rounded-md"
              />

              <div className=" absolute bottom-0 mt-4 flex items-center gap-4">
                <div className="flex flex-row">
                  <div className="bg-white p-2">
                    <img src={image_1} alt="image" className="h-12 w-12" />
                  </div>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white">
                    Arts University Bournemouth
                  </h1>
                  <div className="grid grid-cols-3 text-sm md:text-md">
                    <div className="flex items-center text-white">
                      <MapPin size={18} /> <span>Poole</span>
                    </div>
                    <div className="flex items-center text-white">
                      <Phone size={18} /> <span>123456789</span>
                    </div>
                    <div className="flex items-center text-white">
                      <Mail size={18} /> <span>artsuniversity@gmail.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-5 place-items-center">
              <img
                src={panel}
                alt="Gallery"
                className=" rounded-md object-cover"
              />
              <img
                src={image_2}
                alt="Gallery"
                className=" rounded-md object-cover"
              />
              <img
                src={image_3}
                alt="Gallery"
                className=" rounded-md object-cover"
              />
              <img
                src={image_4}
                alt="Gallery"
                className=" rounded-md object-cover"
              />
              <img
                src={image_5}
                alt="Gallery"
                className=" rounded-md object-cover"
              />
            </div>
            <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-lg font-bold text-primary mb-4">History</h2>
              <p className="text-black">Founding Year: 1868</p>

              <h2 className="text-lg font-bold text-primary mt-4 mb-4">
                Historical Milestones:
              </h2>
              <ul className=" list-disc pl-6 text-black">
                <li>
                  1868: UC Berkeley is established as the flagship campus of the
                  University of California system.
                </li>
                <li>
                  1930s: The university gains prominence for its involvement in
                  the Free Speech Movement.
                </li>
                <li>
                  2000s: UC Berkeley leads advancements in technology and
                  research.
                </li>
              </ul>

              <h2 className="text-lg font-bold text-primary mt-4 mb-4">
                Campus Locations
              </h2>
              <p className="text-black">Main Campus: Berkeley, CA 94720, USA</p>

              <h2 className="text-lg font-bold text-primary mt-4 mb-4">
                Academic Offerings
              </h2>
              <ul className=" list-disc pl-6 text-black">
                <li>
                  Undergraduate Programs: Over 150 undergraduate majors across
                  diverse fields including humanities, sciences, engineering,
                  and social sciences.
                </li>
                <li>
                  Undergraduate Programs: Over 150 undergraduate majors across
                  diverse fields including humanities, sciences, engineering,
                  and social sciences.
                </li>
              </ul>

              <h2 className="text-lg font-bold text-primary mt-4 mb-4">
                Admissions
              </h2>
              <ul className="list-disc pl-6 text-black">
                <li>
                  Application Process: Applications are submitted through the UC
                  Application system. Prospective students must provide
                  transcripts, standardized test scores (if applicable), and
                  personal statements.
                </li>
                <li>
                  Requirements: High school diploma or equivalent, SAT/ACT
                  scores (optional for some applicants), and specific program
                  prerequisites.
                </li>
              </ul>
            </div>
          </div>
        )}
        {activeTab==="UniversityMaterials" && (
          <UniversityGuidelines/>
          
        )}
        {activeTab==="Scholarship" && (
          <Scholarship/>
        )}
        {activeTab==="Webinars" && (
          <Webinars/>
        )}
        {activeTab==="Certifications" && (
          <Certifications/>
        )}
        {activeTab==="Accommodation" && (
          <Accomodation/>
        )}
        {activeTab==="UniversitySurvey" && (
          <UniversitySurvey/>
        )}
        {activeTab==="Subscription" && (
          <Subscription/>
        )}
        </div>
      </div>
    </div>
  );
};

export default Panel;
