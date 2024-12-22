import { motion } from "framer-motion";

function Marquee({ imagesurl, direction }) {
  return (
    <div className="flex w-full overflow-hidden ">
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        className="flex flex-shrink-0 gap-28 py-10 "
      >
        {imagesurl.map((url, index) => (
          <img key={index} src={url} className="flex-shrink-0 w-32 ml-1" />
        ))}
      </motion.div> 

      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        className="flex flex-shrink-0 gap-28 py-10 "
      >
        {imagesurl.map((url, index) => (
          <img key={index} src={url} className="flex-shrink-0 w-32 ml-1" />
        ))}
      </motion.div>
    </div>
  );
}

export default Marquee;
