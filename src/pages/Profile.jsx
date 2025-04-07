import React from 'react';
import university from "../assets/university.png";
import image_1 from "../assets/image_1.png";
import upload from "../assets/upload.png";
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <div className="bg-secondary">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[23%_73%] gap-6 mt-6 px-4">

    {/* left */}
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
              <div className="font-semibold text-2xl text-black">
              <Link to="/universitymaterials">
                <h1 className="p-4 cursor-pointer hover:text-primary ">
                  University Materials
                </h1>
              </Link>
              <Link to="/scholarship">
                <h1 className="p-4 cursor-pointer hover:text-primary ">
                  Scholarship
                </h1>
              </Link>
              <Link to="/webinars">
                <h1 className="p-4 cursor-pointer hover:text-primary ">
                  Webinars
                </h1>
              </Link>
              <Link to="/certifications">
                <h1 className="p-4 cursor-pointer hover:text-primary ">
                  Certifications
                </h1>
              </Link>
              <Link to="/accomodation">
                <h1 className="p-4 cursor-pointer hover:text-primary ">
                  Accommodation
                </h1>
              </Link>
              <Link to="/universitysurvey">
                <h1 className="p-4 cursor-pointer hover:text-primary ">
                  University Survey
                </h1>
              </Link>
            </div>
              </div>
            </div>
    {/* left */}
    {/* right */}
    <div>
        <div className="bg-white p-4">
            <div>
                <h1>University Profile</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* col-1 */}
            <div>
                <div className='mt-8'>
                    <h1 className="text-xl text-black font-normal">Logo</h1>
                    <div className=" flex flex-col p-8 items-center justify-center bg-secondary shadow-2xl">
                    <div>
                        <img src={upload}></img>
                    </div>
                    <div>
                        <h1>Click to upload or drag and drop</h1>
                    </div>
                        
                    </div>
                </div>
                <div className='mt-8'>
                    <h1 className="text-xl text-black font-normal">Cover Image</h1>
                    <div className=" flex flex-col p-8 items-center justify-center bg-secondary shadow-2xl">
                    <div>
                         <img src={upload}></img>
                    </div>
                    <div>
                        <h1>Click to upload or drag and drop</h1>
                    </div>
                        
                    </div>
                </div>
                <div className='mt-8'>
                    <h1 className="text-xl text-black font-normal">Overview</h1>
                    <div className="bg-secondary  rounded-2xl shadow-2xl p-4">
                    <p>
                    The University of California, Berkeley is a prestigious public research university known for its distinguished faculty, cutting-edge research,
                     and vibrant campus life.
                     Founded in 1868, UC Berkeley has a mission to foster excellence in education, research, and public service.
                    </p>
                    </div>
        
                </div>
            </div>
            {/* col-2 */}
            <div>
                <form>
                <div className='flex flex-col p-4 space-y-2'>
                <label className="text-xl text-black font-normal">University Name</label>
                <input type="text" placeholder='Hochiminth City Internaation University' className="bg-secondary p-2"></input>
                </div>
                <div className='flex flex-col p-4 space-y-2'>
                <label className="text-xl text-black font-normal">Contact Number</label>
                <input type="text" placeholder='1234567890' className="bg-secondary p-2"></input>
                </div>                    
                <div className='flex flex-col p-4 space-y-2'>
                <label className="text-xl text-black font-normal">Email</label>
                <input type="text" placeholder='hochiminth@jade.in' className="bg-secondary p-2"></input>
                </div>                                        
                <div className='flex flex-col p-4 space-y-2'>
                <label className="text-xl text-black font-normal">Location</label>
                <input type="text" placeholder='Vietnam' className="bg-secondary p-2"></input>
                </div>
                <div className='mt-8 p-4'>
                    <h1 className="text-xl text-black font-normal">Extra Images</h1>
                    <div className=" flex flex-col p-8 items-center justify-center bg-secondary shadow-2xl">
                    <div>
                         <img src={upload}></img>
                    </div>
                    <div>
                        <h1>Click to upload or drag and drop</h1>
                    </div>
                        
                    </div>
                </div>
                </form>
                    <div className="flex justify-end space-x-4 mt-8"  >
                        <button className='bg-white border border-primary text-primary p-2 rounded-lg'>+ Add More Details</button>
                        <button className='bg-primary border border-primary text-white p-2 rounded-lg'>Save</button>
                    </div>
                           
            </div>
                  
            </div>
        </div>
    </div> 
    {/* right */}
    </div>
       
    </div>
  )
}

export default Profile