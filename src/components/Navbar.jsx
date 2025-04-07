import React from "react";
import image from "../assets/image.png";
import Notification from "../assets/Notification.png";
import arts from "../assets/arts.png";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const ref = useRef(null);
  const [open, setOpen] = useState(false);

  const handleDropdown = () => {
    setOpen(!open);
  };

  useEffect(() => {
    setActiveTab(location.pathname === "/" ? "home" : location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    const handleMove = (event) => {
      if (open !== null && ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const offset = 30;
        if (
          event.clientX < rect.left - offset ||
          event.clientX > rect.right + offset ||
          event.clientY < rect.top - offset ||
          event.clientY > rect.bottom + offset
        ) {
          setOpen(null);
        }
      }
    };
    document.addEventListener("mousemove", handleMove);
  }, [setOpen]);

  return (
    <div className="sticky  overflow-x-hidden top-0 bg-secondary shadow-md z-20">
      <div className="flex items-center justify-between">
        <div className="p-0 md:p-2">
          <a href="/home">
            <img src={image} alt="Logo" className="h-8 md:h-10 md:block hidden" />
          </a>
        </div>
        <div className="bg-white px-1 py-2 md:p-2 rounded-full">
          <ul className="flex text-gray-500 font-semibold items-center text-xs md:text-xs lg:text-sm">
            <li
              className={`px-2 md:px-4 py-1 md:py-2 rounded-full cursor-pointer ${
                activeTab === "/home" 
                  ? "bg-primary text-white"
                  : "hover:bg-primary hover:text-white"
              }`}
              onClick={() => {
                navigate("/home");
              }}
            >
              Home
            </li>
            <li
              className={`px-2 md:px-4 py-1 md:py-2 rounded-full cursor-pointer ${
              activeTab.includes("/myuniversity")
                  ? "bg-primary text-white"
                  : "hover:bg-primary hover:text-white"
              }`}
              onClick={() => {
                navigate("/myuniversity");
              }}
            >
              My University
            </li>
            <li
              className={`px-2 md:px-4 py-1 md:py-2 rounded-full cursor-pointer ${
                activeTab === "/myagents"
                  ? "bg-primary text-white"
                  : "hover:bg-primary hover:text-white"
              }`}
              onClick={() => {
                navigate("/myagents");
              }}
            >
              My Agents
            </li>

            <li
              className={`px-2 md:px-4 py-1 md:py-2 rounded-full cursor-pointer ${
                activeTab === "/industrynews"
                  ? "bg-primary text-white"
                  : "hover:bg-primary hover:text-white"
              }`}
              onClick={() => {
                navigate("/industrynews");
              }}
            >
              Industry News
            </li>

            <li
              className={`px-2 md:px-4 py-1 md:py-2 rounded-full cursor-pointer ${
                activeTab === "/complianceguidelines"
                  ? "bg-primary text-white"
                  : "hover:bg-primary hover:text-white"
              }`}
              onClick={() => {
                navigate("/complianceguidelines");
              }}
            >
              Compliance Guidelines
            </li>
          </ul>
        </div>
        <div className="relative flex items-center space-x-2 md:space-x-4">
          <img
            src={Notification}
            className="bg-white p-1 md:p-2 rounded-full w-6 md:w-10 h-6 md:h-10 md:block hidden"
          ></img>
          <div className="flex items-center bg-white p-2 rounded-full md:flex " onClick={handleDropdown} >
          <img
            src={arts}
            alt="Profile"
            className="w-6 md:w-10 h-6 md:h-10 rounded-full "           
          ></img>
          <ChevronDown />
          </div>
  
        </div>
      </div>
      {open && (
        <div className="absolute right-4 z-10" ref={ref}>
          <ul className="bg-white shadow-lg rounded-lg text-primary p-4">
            <li className="cursor-pointer">Profile</li>
            <li className="cursor-pointer">Change Password</li>
            <li className="cursor-pointer">Logout</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;


// import React from "react";
// import image from "../assets/image.png";
// import Notification from "../assets/Notification.png";
// import arts from "../assets/arts.png";
// import { useNavigate, useLocation } from "react-router-dom";
// import { useState, useEffect, useRef } from "react";
// import { ChevronDown } from "lucide-react";

// const Navbar = () => {
//   const [activeTab, setActiveTab] = useState("");
//   const navigate = useNavigate();
//   const location = useLocation();
//   const ref = useRef(null);
//   const [open, setOpen] = useState(false);

//   const handleDropdown = () => {
//     setOpen(!open);
//   };

//   useEffect(() => {
//     setActiveTab(location.pathname === "/" ? "home" : location.pathname);
//   }, [location.pathname]);

//   useEffect(() => {
//     const handleMove = (event) => {
//       if (open !== null && ref.current) {
//         const rect = ref.current.getBoundingClientRect();
//         const offset = 30;
//         if (
//           event.clientX < rect.left - offset ||
//           event.clientX > rect.right + offset ||
//           event.clientY < rect.top - offset ||
//           event.clientY > rect.bottom + offset
//         ) {
//           setOpen(null);
//         }
//       }
//     };
//     document.addEventListener("mousemove", handleMove);
//   }, [setOpen]);

//   return (
//     <div className="sticky top-0 bg-secondary px-2 md:px-4 py-2 shadow-md z-20">
//       <div className="flex  items-center justify-between">
//         <div className="p-1 md:p-2">
//           <a href="/home">
//             <img src={image} alt="Logo" className="h-8 md:h-10 md:block hidden" />
//           </a>
//         </div>
//         <div className="bg-white p-1 md:p-2 rounded-full">
//           <ul className="flex text-gray-500 font-semibold items-center text-xs md:text-xs lg:text-sm">
//             <li
//               className={`px-2 md:px-4 py-1 md:py-2 rounded-full cursor-pointer ${
//                 activeTab === "/home" 
//                   ? "bg-primary text-white"
//                   : "hover:bg-primary hover:text-white"
//               }`}
//               onClick={() => {
//                 // setActiveTab("Home");
//                 navigate("/home");
//               }}
//             >
//               Home
//             </li>
//             <li
//               className={`px-2 md:px-4 py-1 md:py-2 rounded-full cursor-pointer ${
//               //  ((activeTab ===  "/myuniversity") || (activeTab ===  "/myuniversity/Scholarship") 
//               //   || (activeTab ===  "/myuniversity/UniversityMaterials") || (activeTab ===  "/myuniversity/Webinars")
//               //   || (activeTab ===  "/myuniversity/Certifications") || (activeTab ===  "/myuniversity/Accommodation")
//               //   || (activeTab ===  "/myuniversity/UniversitySurvey") || (activeTab ===  "/myuniversity/Subscription"))
//               activeTab.includes("/myuniversity")
//                   ? "bg-primary text-white"
//                   : "hover:bg-primary hover:text-white"
//               }`}
//               onClick={() => {
//                 // setActiveTab("MyUniversity");
//                 navigate("/myuniversity");
//               }}
//             >
//               My University
//             </li>
//             <li
//               className={`px-2 md:px-4 py-1 md:py-2 rounded-full cursor-pointer ${
//                 activeTab === "/myagents"
//                   ? "bg-primary text-white"
//                   : "hover:bg-primary hover:text-white"
//               }`}
//               onClick={() => {
//                 // setActiveTab("MyAgents");
//                 navigate("/myagents");
//               }}
//             >
//               My Agents
//             </li>

//             <li
//               className={`px-2 md:px-4 py-1 md:py-2 rounded-full cursor-pointer ${
//                 activeTab === "/industrynews"
//                   ? "bg-primary text-white"
//                   : "hover:bg-primary hover:text-white"
//               }`}
//               onClick={() => {
//                 // setActiveTab("IndustryNews");
//                 navigate("/industrynews");
//               }}
//             >
//               Industry News
//             </li>

//             <li
//               className={`px-2 md:px-4 py-1 md:py-2 rounded-full cursor-pointer ${
//                 activeTab === "/complianceguidelines"
//                   ? "bg-primary text-white"
//                   : "hover:bg-primary hover:text-white"
//               }`}
//               onClick={() => {
//                 // setActiveTab("ComplianceGuidelines");
//                 navigate("/complianceguidelines");
//               }}
//             >
//               Compliance Guidelines
//             </li>
//           </ul>
//         </div>
//         <div className="relative flex items-center space-x-2 md:space-x-4">
//           <img
//             src={Notification}
//             className="bg-white p-1 md:p-2 rounded-full w-6 md:w-10 h-6 md:h-10 md:block hidden"
//           ></img>
//           <div className="flex items-center bg-white p-2 rounded-full md:flex hidden " onClick={handleDropdown} >
//           <img
//             src={arts}
//             alt="Profile"
//             className="w-6 md:w-10 h-6 md:h-10 rounded-full"           
//           ></img>
//           <ChevronDown />
//           </div>
  
//         </div>
//       </div>
//       {open && (
//         <div className="absolute right-4 z-10" ref={ref}>
//           <ul className="bg-white shadow-lg rounded-lg text-primary p-4">
//             <li className="cursor-pointer">Profile</li>
//             <li className="cursor-pointer">Change Password</li>
//             <li className="cursor-pointer">Logout</li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;
