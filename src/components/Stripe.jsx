import React from "react"

function Stripe({val}) {
  return (
    <div className="w-[16.66%] border-t-2 border-r-2 border-b-2 border-zinc-700 flex justify-between items-center px-5 py-4 ">
      <img src={val.url} alt="" className="max-w-full h-auto" />
      <span className="font-semibold">{val.number}</span>
    </div>
  )
}

export default Stripe

