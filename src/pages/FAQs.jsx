import React from "react";
import mail from "../assets/mail.png";
import call from "../assets/call.png";
import Accordion from "../components/Accordion";

const FAQs = () => {

  const faqList = [
    { title: "FA1", text: "Lorem ipsum odor amet, consectetuer adipiscing elit..." },
    { title: "FA", text: "Lorem ipsum odor amet, consectetuer adipiscing elit..." },
    { title: "FA2", text: "Lorem ipsum odor amet, consectetuer adipiscing elit..." },
    { title: "FA3", text: "Lorem ipsum odor amet, consectetuer adipiscing elit..." },
    { title: "FA4", text: "Lorem ipsum odor amet, consectetuer adipiscing elit..." },
    { title: "FA5", text: "Lorem ipsum odor amet, consectetuer adipiscing elit..." },
  ];
  
  return (
    <div className="bg-secondary min-h-screen p-4">
      <div>
        <div className="text-2xl font-semibold">
          <h3>Contact Information</h3>
        </div>
        <div className="grid grid-cols-2 gap-4 py-4">
          <div className="flex flex-col bg-white p-4 rounded-xl gap-4">
            <div>
              <h4 className="text-gray-600 text-xl">Mail Id</h4>
            </div>
            <div className="flex flex-row gap-4">
              <div>
                <img src={mail}></img>
              </div>
              <div>
                <h4 className="text-gray-600">support@thejadeapp.com</h4>
              </div>
            </div>
          </div>

          <div className="flex flex-col bg-white p-4 rounded-xl gap-4">
            <div>
              <h4 className="text-gray-600 text-xl">Contact Number</h4>
            </div>
            <div className="flex flex-row gap-4">
              <div>
                <img src={call}></img>
              </div>
              <div>
                <h4 className="text-gray-600">+44 7532262066</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-y-4">
        <div>
          <h3 className="text-2xl font-semibold">Frequently Asked Questions</h3>
        </div>
        <div className="bg-white rounded-2xl p-4">
          <div>
            <h3 className="text-2xl font-semibold text-black">
              Here are some frequently asked questions !
            </h3>
          </div>
          <div className="flex flex-col py-4 gap-y-4">
            {faqList.map((faq, index) => (
              <Accordion key={index} title={faq.title} text={faq.text} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;

// import React from "react";
// import mail from "../assets/mail.png";
// import call from "../assets/call.png";
// import Accordion from "../components/Accordion";

// const FAQs = () => {
  
//   return (
//     <div className="bg-secondary min-h-screen p-4">
//       <div>
//         <div className="text-2xl font-semibold">
//           <h3>Contact Information</h3>
//         </div>
//         <div className="grid grid-cols-2 gap-4 py-4">
//           <div className="flex flex-col bg-white p-4 rounded-xl gap-4">
//             <div>
//               <h4 className="text-gray-600 text-xl">Mail Id</h4>
//             </div>
//             <div className="flex flex-row gap-4">
//               <div>
//                 <img src={mail}></img>
//               </div>
//               <div>
//                 <h4 className="text-gray-600">support@thejadeapp.com</h4>
//               </div>
//             </div>
//           </div>

//           <div className="flex flex-col bg-white p-4 rounded-xl gap-4">
//             <div>
//               <h4 className="text-gray-600 text-xl">Contact Number</h4>
//             </div>
//             <div className="flex flex-row gap-4">
//               <div>
//                 <img src={call}></img>
//               </div>
//               <div>
//                 <h4 className="text-gray-600">+44 7532262066</h4>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="flex flex-col gap-y-4">
//         <div>
//           <h3 className="text-2xl font-semibold">Frequently Asked Questions</h3>
//         </div>
//         <div className="bg-white rounded-2xl p-4">
//           <div>
//             <h3 className="text-2xl font-semibold text-black">
//               Here are some frequently asked questions !
//             </h3>
//           </div>
//           <div className="flex flex-col py-4 gap-y-4">
//             <Accordion
//               text="Lorem ipsum odor amet, consectetuer adipiscing elit. Sodales arcu nisl ac arcu, inceptos odio odio. Scelerisque aliquam magna lacinia mus pharetra quam. Facilisi ligula blandit consectetur, id non amet ligula posuere. Asem imperdiet cras taciti himenaeos accumsan taciti. Cras sagittis dui montes iaculis habitasse egestas vivamus eget. Molestie fermentum ultricies risus proin taciti eget. Dolor elementum auctor id lobortis conubia purus suspendisse."
//               title="FA1"    />
//              <Accordion
//               text="Lorem ipsum odor amet, consectetuer adipiscing elit. Sodales arcu nisl ac arcu, inceptos odio odio. Scelerisque aliquam magna lacinia mus pharetra quam. Facilisi ligula blandit consectetur, id non amet ligula posuere. Asem imperdiet cras taciti himenaeos accumsan taciti. Cras sagittis dui montes iaculis habitasse egestas vivamus eget. Molestie fermentum ultricies risus proin taciti eget. Dolor elementum auctor id lobortis conubia purus suspendisse."
//               title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//             />
//              <Accordion
//               text="Lorem ipsum odor amet, consectetuer adipiscing elit. Sodales arcu nisl ac arcu, inceptos odio odio. Scelerisque aliquam magna lacinia mus pharetra quam. Facilisi ligula blandit consectetur, id non amet ligula posuere. Asem imperdiet cras taciti himenaeos accumsan taciti. Cras sagittis dui montes iaculis habitasse egestas vivamus eget. Molestie fermentum ultricies risus proin taciti eget. Dolor elementum auctor id lobortis conubia purus suspendisse."
//             //   title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//             // 
//             title="FA2" 
//             />
//              <Accordion
//               text="Lorem ipsum odor amet, consectetuer adipiscing elit. Sodales arcu nisl ac arcu, inceptos odio odio. Scelerisque aliquam magna lacinia mus pharetra quam. Facilisi ligula blandit consectetur, id non amet ligula posuere. Asem imperdiet cras taciti himenaeos accumsan taciti. Cras sagittis dui montes iaculis habitasse egestas vivamus eget. Molestie fermentum ultricies risus proin taciti eget. Dolor elementum auctor id lobortis conubia purus suspendisse."
//               // title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//               title="FA3" 
//             />
//              <Accordion
//               text="Lorem ipsum odor amet, consectetuer adipiscing elit. Sodales arcu nisl ac arcu, inceptos odio odio. Scelerisque aliquam magna lacinia mus pharetra quam. Facilisi ligula blandit consectetur, id non amet ligula posuere. Asem imperdiet cras taciti himenaeos accumsan taciti. Cras sagittis dui montes iaculis habitasse egestas vivamus eget. Molestie fermentum ultricies risus proin taciti eget. Dolor elementum auctor id lobortis conubia purus suspendisse."
//               // title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//               title="FA4" 
//             />
//              <Accordion
//               text="Lorem ipsum odor amet, consectetuer adipiscing elit. Sodales arcu nisl ac arcu, inceptos odio odio. Scelerisque aliquam magna lacinia mus pharetra quam. Facilisi ligula blandit consectetur, id non amet ligula posuere. Asem imperdiet cras taciti himenaeos accumsan taciti. Cras sagittis dui montes iaculis habitasse egestas vivamus eget. Molestie fermentum ultricies risus proin taciti eget. Dolor elementum auctor id lobortis conubia purus suspendisse."
//               // title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//               // 
//               title="FA5" 
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FAQs;
