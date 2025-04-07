import React from "react";
import certificate from "../assets/certificate.png";
import medals from "../assets/medals.png";
import UniversityPanelHeadings from "../components/UniversityPanelHeadings";
import SearchBar from "../components/SearchBar";
import CertficateCards from "../components/CertficateCards";

const Certifications = () => {
  console.log("✅ Certifications Component Rendered");
  return (
    <div className="bg-secondary p-4 rounded-lg">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <UniversityPanelHeadings heading="Certifications" />
        <div className="flex space-x-0 md:space-x-2 items-center">
          <div>
            <SearchBar />
          </div>
          <div>
            <button className="bg-primary rounded-4xl text-white px-4 py-2 w-28 md:w-auto">
              Add Certificate
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 ">
        <CertficateCards
          image1={certificate}
          image2={medals}
          heading1="Program Introduction to AUB & its Programmes"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun"
        />
        <CertficateCards
          image1={certificate}
          image2={medals}
          heading1="Program Introduction to AUB & its Programmes"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun"
        />
        <CertficateCards
          image1={certificate}
          image2={medals}
          heading1="Program Introduction to AUB & its Programmes"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun"
        />
        <CertficateCards
          image1={certificate}
          image2={medals}
          heading1="Program Introduction to AUB & its Programmes"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun"
        />
        <CertficateCards
          image1={certificate}
          image2={medals}
          heading1="Program Introduction to AUB & its Programmes"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun"
        />
        <CertficateCards
          image1={certificate}
          image2={medals}
          heading1="Program Introduction to AUB & its Programmes"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun"
        />
      </div>
    </div>
  );
};

export default Certifications;
