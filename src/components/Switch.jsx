import React, { useState } from "react";

const Switch = () => {
 const [isTogglei, setTogglei] = useState(false);

 const handleClickToggle = () => {
  setTogglei(!isTogglei);
 };

 //  console.log(isTogglei);

 return (
  <div
   className={`h-screen flex justify-center items-center ease-in-out transition-all duration-700 ${
    isTogglei ? "bg-black" : "bg-white"
   }`}
  >
   <div onClick={handleClickToggle} className=" w-5xl">
    <div className="rounded-full bg-slate-300 pr-44 py-5">
     <div
      className={`p-1 bg-slate-100 rounded-full ease-in-out transition-transform duration-700 ${
       isTogglei ? "translate-x-40" : "translate-x-3"
      }`}
     >
      <span className="p-5 block bg-white rounded-full text-3xl cursor-pointer">
       {isTogglei ? "OFF" : "ON"}
      </span>
     </div>
    </div>
   </div>
  </div>
 );
};

export default Switch;
