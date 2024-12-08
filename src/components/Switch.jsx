import React, { useState } from "react";

const Switch = () => {
 const [isTogglei, setTogglei] = useState(false);

 const handleClickToggle = () => {
  setTogglei(!isTogglei);
 };

 //  console.log(isTogglei);

 return (
  <div className="h-screen flex justify-center items-center ">
   <div onClick={handleClickToggle} className=" w-5xl">
    <div className="rounded-full bg-slate-300 pr-44 py-5">
     <div className="p-1 bg-slate-100 rounded-full">
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
