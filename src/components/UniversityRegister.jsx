// import React, { useState } from "react";
// import axios from "axios";
// import { api } from "../../config";
// import { toast, ToastContainer } from "react-toastify";
// import { Loader } from "lucide-react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchUser } from "../redux/userSlice";

// const UniversityRegister = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [contactNo, setContactNo] = useState("");
//   const [location, setLocation] = useState("");
//   const [countryCode, setCountryCode] = useState("");
//   const [country, setCountry] = useState("");
//   const [city, setCity] = useState("");
//   const [postalCode, setPostalCode] = useState("");
//   const [password, setPassword] = useState("");
//   // const [loading,setLoading] =useState(false);

//   const dispatch =useDispatch();
//   const {isloading} = useSelector((state) => state.user)

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // setLoading(true);
//     const data={
//         name,
//         email,
//         contactNo,
//         location,
//         countryCode,
//         country,
//         city,
//         postalCode,
//         password
//     }

//     dispatch(fetchUser(data)).then((result)=>{
//       if(result.payload){
//         alert("Successfully Registered");
//         console.log("successs");
//       }
//     });

//   };

//   //memo
//   //usememo
//   //usecallback

//   return (
//     <div className="flex justify-center items-center pt-4">
//       <form className="px-4 py-2 bg-primary w-[40%]" onSubmit={handleSubmit}>
//         <div className="flex flex-col">
//           <label className="text-white text-xl">Name</label>
//           <input
//             type="text"
//             value={name}
//             placeholder="Enter your name"
//             onChange={(e) => {
//               setName(e.target.value);
//             }}
//             className="bg-white w-full p-2 text-lg rounded-lg"
//           />
//         </div>
//         <div className="flex flex-col">
//           <label className="text-white text-xl">Email</label>
//           <input
//             type="text"
//             value={email}
//             placeholder="Enter your email"
//             onChange={(e) => {
//               setEmail(e.target.value);
//             }}
//             className="bg-white w-full p-2 text-lg rounded-lg"
//           />
//         </div>
//         <div className="flex flex-col">
//           <label className="text-white text-xl">Contact Number</label>
//           <input
//             type="text"
//             value={contactNo}
//             placeholder="Enter your number"
//             onChange={(e) => {
//               setContactNo(e.target.value);
//             }}
//             className="bg-white w-full p-2 text-lg rounded-lg"
//           />
//         </div>
//         <div className="flex flex-col">
//           <label className="text-white text-xl">Location</label>
//           <input
//             type="text"
//             value={location}
//             placeholder="Enter your location"
//             onChange={(e) => {
//               setLocation(e.target.value);
//             }}
//             className="bg-white w-full p-2 text-lg rounded-lg"
//           />
//         </div>
//         <div className="flex flex-col">
//           <label className="text-white text-xl">Country Code</label>
//           <input
//             type="text"
//             value={countryCode}
//             placeholder="Enter your countrycode"
//             onChange={(e) => {
//               setCountryCode(e.target.value);
//             }}
//             className="bg-white w-full p-2 text-lg rounded-lg"
//           />
//         </div>
//         <div className="flex flex-col">
//           <label className="text-white text-xl">Country</label>
//           <input
//             type="text"
//             value={country}
//             placeholder="Enter your country"
//             onChange={(e) => {
//               setCountry(e.target.value);
//             }}
//             className="bg-white w-full p-2 text-lg rounded-lg"
//           />
//         </div>
//         <div className="flex flex-col">
//           <label className="text-white text-xl">City</label>
//           <input
//             type="text"
//             value={city}
//             placeholder="Enter your city"
//             onChange={(e) => {
//               setCity(e.target.value);
//             }}
//             className="bg-white w-full p-2 text-lg rounded-lg"
//           />
//         </div>
//         <div className="flex flex-col">
//           <label className="text-white text-xl">Postal Code</label>
//           <input
//             type="text"
//             value={postalCode}
//             placeholder="Enter your postalCode"
//             onChange={(e) => {
//               setPostalCode(e.target.value);
//             }}
//             className="bg-white w-full p-2 text-lg rounded-lg"
//           />
//         </div>
//         <div className="flex flex-col">
//           <label className="text-white text-xl">Password</label>
//           <input
//             type="text"
//             value={password}
//             placeholder="Enter your Password"
//             onChange={(e) => {
//               setPassword(e.target.value);
//             }}
//             className="bg-white w-full p-2 text-lg rounded-lg"
//           />
//         </div>
//         <div className="flex justify-center items-center p-2">
//           <button
//             className="text-primary text-3xl bg-white p-2 rounded-lg cursor-pointer"

//             type="submit"
//           >
//           {isloading ? (
//             <div className="w-[90px] h-[40px] flex justify-center items-center">
//               <Loader className="animate-spin w-[32px] h-[32px]" />
//             </div>
//           ) : (
//            "Submit"
//           )
//           }

//           </button>
//         </div>
//       </form>
//       <ToastContainer />
//     </div>
//   );
// };

// export default UniversityRegister;

import React, { useState, useCallback } from "react";
import axios from "axios";
import { api } from "../../config";
import { toast, ToastContainer } from "react-toastify";
import { Loader } from "lucide-react";

const UniversityRegister = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [location, setLocation] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // const handleSubmit = useCallback(
  //   async (e) => {
  //     e.preventDefault();
  //     console.log("check")
  //     setLoading(true);
  //     const data = {
  //       name,
  //       email,
  //       contactNo,
  //       location,
  //       countryCode,
  //       country,
  //       city,
  //       postalCode,
  //       password,
  //     };
  //     try {
  //       const response = await api.post("/university/register", data);
  //       console.log("api hit");
  //       console.log(response);
  //       toast.success(response.data.message);
  //       setLoading(false);
  //     } catch (error) {
  //       console.log(error);
  //       toast.error(
  //         error.response?.data?.message || error.response?.data?.errors
  //       );
  //       setLoading(false);
  //     }
  //   },
  //   [
  //     name,
  //     email,
  //     contactNo,
  //     location,
  //     countryCode,
  //     country,
  //     city,
  //     postalCode,
  //     password,
  //     setLoading
  //   ]
  // );

  const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      console.log("data");
      const data = {
        name,
        email,
        contactNo,
        location,
        countryCode,
        country,
        city,
        postalCode,
        password,
      };
      try {
        const response = await api.post("/university/register", data);
        console.log("api hit");
        console.log(response);
        toast.success(response.data.message);
        setLoading(false);
      } catch (error) {
        console.log(error);
        toast.error(
          error.response?.data?.message || error.response?.data?.errors
        );
        setLoading(false);
      }
    }

  return (
    <div className="flex justify-center items-center pt-4">
      <form className="px-4 py-2 bg-primary w-[40%]" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label className="text-white text-xl">Name</label>
          <input
            type="text"
            value={name}
            placeholder="Enter your name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="bg-white w-full p-2 text-lg rounded-lg"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-white text-xl">Email</label>
          <input
            type="text"
            value={email}
            placeholder="Enter your email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="bg-white w-full p-2 text-lg rounded-lg"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-white text-xl">Contact Number</label>
          <input
            type="text"
            value={contactNo}
            placeholder="Enter your number"
            onChange={(e) => {
              setContactNo(e.target.value);
            }}
            className="bg-white w-full p-2 text-lg rounded-lg"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-white text-xl">Location</label>
          <input
            type="text"
            value={location}
            placeholder="Enter your location"
            onChange={(e) => {
              setLocation(e.target.value);
            }}
            className="bg-white w-full p-2 text-lg rounded-lg"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-white text-xl">Country Code</label>
          <input
            type="text"
            value={countryCode}
            placeholder="Enter your countrycode"
            onChange={(e) => {
              setCountryCode(e.target.value);
            }}
            className="bg-white w-full p-2 text-lg rounded-lg"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-white text-xl">Country</label>
          <input
            type="text"
            value={country}
            placeholder="Enter your country"
            onChange={(e) => {
              setCountry(e.target.value);
            }}
            className="bg-white w-full p-2 text-lg rounded-lg"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-white text-xl">City</label>
          <input
            type="text"
            value={city}
            placeholder="Enter your city"
            onChange={(e) => {
              setCity(e.target.value);
            }}
            className="bg-white w-full p-2 text-lg rounded-lg"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-white text-xl">Postal Code</label>
          <input
            type="text"
            value={postalCode}
            placeholder="Enter your postalCode"
            onChange={(e) => {
              setPostalCode(e.target.value);
            }}
            className="bg-white w-full p-2 text-lg rounded-lg"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-white text-xl">Password</label>
          <input
            type="text"
            value={password}
            placeholder="Enter your Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="bg-white w-full p-2 text-lg rounded-lg"
          />
        </div>
        <div className="flex justify-center items-center p-2">
          <button
            className="text-primary text-3xl bg-white p-2 rounded-lg cursor-pointer"
            type="submit"
          >
            {loading ? (
              <div className="w-[90px] h-[40px] flex justify-center items-center">
                <Loader className="animate-spin w-[32px] h-[32px]" />
              </div>
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default UniversityRegister;
