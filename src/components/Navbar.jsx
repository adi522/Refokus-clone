import Button from "./Button";

function Navbar() {
  return (
    <div className="max-w-screen-xl bg-black-100 p-5 mx-auto flex gap-10 py-6 justify-between border-b-[1px] border-zinc-500">
      <div className="n-left flex items-center">
        <img
          src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
          alt="refokus-logo"
        />
        <div className="links flex gap-20 ml-10">
          {["Home", "Work", "Culture", "", "News"].map((elem, index) => (
            <a key={index} href="" className="text-sm flex items-center gap-1">
              {index === 1 && (
                <span
                  style={{ boxShadow: "0.5 0 0.25em #00FF19" }}
                  className="inline-block h-1 w-1 rounded-full bg-green-400 "
                ></span>
              )}
              {elem.length == 0 && (
                <span className="w-[2px] h-7 bg-zinc-500"></span>
              )}
              {elem}
            </a>
          ))}
        </div>
      </div>
      <Button />
    </div>
  );
}

export default Navbar;
