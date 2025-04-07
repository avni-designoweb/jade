import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Profile from "./pages/Profile";
import MyAgents from "./pages/MyAgents";
import IndustryNews from "./pages/IndustryNews";
import ComplianceGuidelines from "./pages/ComplianceGuidelines";
import UniversityMaterials from "./pages/UniversityMaterials";
import Webinars from "./pages/Webinars";
import Scholarship from "./pages/Scholarship";
import Certifications from "./pages/Certifications";
import Accomodation from "./pages/Accomodation";
import UniversitySurvey from "./pages/UniversitySurvey";
import SurveyForm from "./pages/SurveyForm";
import AgentProfile from "./pages/AgentProfile";
import Navbar from "./components/Navbar";
import UniversityGuidelines from "./pages/UniversityGuidelines";
import Chartss from "./components/Chartss";
import ChartArea from "./components/ChartArea";
import ChartArea1 from "./components/ChartArea1";
import VideoPage from "./pages/VideoPage";
import ErrorPage from "./pages/ErrorPage";
import MyUniversity from "./pages/MyUniversity";
import UniversityRegister from "./components/UniversityRegister";
import FAQs from "./pages/FAQs";
import Callback from "./components/Callback";
import Login from "./components/Login";
import User from "./components/User";
import Admin from "./components/Admin";
import Params from "./pages/Params";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<UniversityRegister />} />
        <Route path="/myuniversity" element={<MyUniversity />} />
        <Route path="/myagents" element={<MyAgents />} />
        <Route path="/industrynews" element={<IndustryNews />} />
        <Route
          path="/complianceguidelines"
          element={<ComplianceGuidelines />}
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="/universitymaterials" element={<UniversityMaterials />} />
        <Route
          path="/universityguidelines"
          element={<UniversityGuidelines />}
        />
        <Route path="/login" element={<Login/>} />
        <Route path="/user" element={<User/>} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/callback" element={<Callback/>} />
        <Route path="/webinars" element={<Webinars />} />
        <Route path="/scholarship" element={<Scholarship />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/accomodation" element={<Accomodation />} />
        <Route path="/universitysurvey" element={<UniversitySurvey />} />
        <Route path="/videopage" element={<VideoPage />} />
        <Route path="/charts" element={<Chartss />} />
        <Route path="/chartarea" element={<ChartArea />} />
        <Route path="/chartarea1" element={<ChartArea1 />} />
        <Route path="/surveyform" element={<SurveyForm />} />
        <Route path="/agentprofile" element={<AgentProfile />} />
        <Route path="/faq" element={<FAQs />} />
        <Route path="/params" element={<Params />} />
        <Route path="/myuniversity/:tab?" element={<MyUniversity />} />
      </Routes>
    </Router>
  );
}

export default App;
