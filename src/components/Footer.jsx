import React from "react"

function Footer() {
  return (
    <div className="w-full mt-7">
        <div className="max-w-screen-xl mx-auto py-10 flex justify-between gap-[9vw]">
            <div className="basis-1/2">
                <h1 className="text-[11rem] font-medium leading-none ">refokus.</h1>
            </div>
            <div className="basis-1/2 flex gap-5">
                <div className="basis-1/3">
                    <h4 className="mb-10 capitalize">Socials</h4>
                    {["instagram" , "twitter (x?)" , "LinkedIn" ].map((item , index)=>(
                        <a key={index} className="block text-sm text-zinc-400 capitalize mt-1">{item}</a>
                    ))}
                </div>
                <div className="basis-1/3">
                    <h4 className="mb-10 capitalize">Sitemap</h4>
                    {["home" , "work" , "career" , "contact"].map((item , index)=>(
                        <a key={index} className="block text-sm text-zinc-400 capitalize mt-1">{item}</a>
                    ))}
                </div>
                <div className="basis-1/3">
                    <h4 className="mb-10 capitalize"></h4>
                    <p className="text-sm ">Refokus is a pioneering digital agency driven by design and empowred by technology.</p>
                    <img
                        src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
                        alt=""
                        className="w-24 px-4 py-1 mt-8 bg-blue-600"
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
