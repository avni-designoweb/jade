import React from "react";
import { useState } from "react";
import { Check } from "lucide-react";

const Subscription = () => {
  const [isSelected, setIsSelected] = useState(false);

  const toggle = () => {
    setIsSelected((prev) => !prev);
  };
  return (
    <div>
      <div className="bg-white p-4 flex flex-col rounded-xl">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-semibold">My Plan</div>
          <div className="flex flex-row justify-center items-center">
            <div>
              <h3 className="text-xl">Auto Renew</h3>
            </div>
            <div
              className={`flex w-10 h-5 bg-gray-600 m-10 rounded-full ${
                isSelected ? "bg-red-700" : "bg-gray-600"
              } `}
              onClick={toggle}
            >
              <span
                className={`bg-white h-5 w-5 rounded-full ${
                  isSelected ? "translate-x-5" : "translate-x-0"
                }`}
              ></span>
            </div>
            <div>
              <button className="bg-primary p-2 text-white text-xl rounded-lg">
                Invoice
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-2xl p-4">
          <div className="grid grid-cols-4 gap-36">
            <div className="p-2">
              <h3 className="text-base text-primary font-semibold">
                Current Tier
              </h3>
              <h2 className="text-xl text-black font-bold">Core</h2>
            </div>
            <div className="p-2">
              <h3 className="text-base text-primary font-semibold">
                Amount Paid
              </h3>
              <h2 className="text-xl text-black font-bold">$ 4000</h2>
            </div>
            <div className="p-2">
              <h3 className="text-base text-primary font-semibold">Start Date</h3>
              <h2 className="text-xl text-black font-bold">24, April 2024</h2>
            </div>
            <div className="p-2">
              <h3 className="text-base text-primary font-semibold">End Date</h3>
              <h2 className="text-xl text-black font-bold">15 June,2025</h2>
            </div>
          </div>

          <div className="text-primary px-2 py-4 text-base font-semibold">
            Features of Current Plan
          </div>

          <div className="grid grid-cols-3 p-1 gap-[126px]">
            <div className="flex flex-col space-y-4">
              <div className="flex space-x-4 items-center">
                <Check color="red" />
                <h4 className="text-base font-normal" >University Profile</h4>
              </div>
              <div className="flex space-x-4 items-center">
                <Check color="red" />
                <h4 className="text-base font-normal" >Training Hub</h4>
              </div>
              <div className="flex space-x-4 items-center">
                <Check color="red" />
                <h4 className="text-base font-normal" >Resource Center</h4>
              </div>
              <div className="flex space-x-4 items-center">
                <Check color="red" />
                <h4 className="text-base font-normal" >Staff Seats <span className="text-red-400">(Upto 3 Seats)</span></h4>
              </div>
            </div>

            <div className="flex flex-col space-y-4">
              <div className="flex space-x-4 items-center">
                <Check color="red" />
                <h4 className="text-base font-normal" >Engagement Analytics</h4>
              </div>
              <div className="flex space-x-4 items-center">
                <Check color="red" />
                <h4 className="text-base font-normal" >Agent Staffs <span className="text-red-400">(Unlimited)</span></h4>
              </div>
              <div className="flex space-x-4 items-center">
                <Check color="red" />
                <h4 className="text-base font-normal" >Agent Certification</h4>
              </div>
              <div className="flex space-x-4 items-center">
                <Check color="red" />
                <h4 className="text-base font-normal" >Staff Onboarding <span className="text-red-400">(Standard)</span></h4>
              </div>
            </div>

            <div className="flex flex-col space-y-4">
              <div className="flex space-x-4 items-center">
                <Check color="red" />
                <h4 className="text-base font-normal" >Tech Support <span className="text-red-400">(Standard)</span></h4>
              </div>
              <div className="flex space-x-4 items-center">
                <Check color="red" />
                <h4 className="text-base font-normal" >Addmin Support <span className="text-red-400">(Standard)</span></h4>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <button className="bg-red-400 p-2 text-white rounded-xl">Upgrade Plan</button>
          </div>
        </div>
      </div>

      <div className="py-4">
      <div className="bg-white p-4 rounded-xl">
      <div className="text-2xl font-semibold text-black">
        Guidelines for Cancellation
      </div>
      <div>
        
      </div>
      <div>

      </div>
        
      </div>       
      </div>
    </div>
  );
};

export default Subscription;
