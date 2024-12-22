import React from "react";
import { IoIosReturnRight } from "react-icons/io";

function Button({ title = "Start a project" }) {
  return (
    <div>
      <button className="min-w-40 bg-zinc-200 rounded-full px-3 py-1 flex items-center justify-between ">
        <span className="text-lg text-black">{title}</span>
        <IoIosReturnRight className="text-black" />
      </button>
    </div>
  );
}

export default Button;
