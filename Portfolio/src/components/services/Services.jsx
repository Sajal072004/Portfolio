import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.
          </h1>
          <button>WHAT I DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          
        >
          <h2>UI Design</h2>
          <p>
          Crafting sophisticated web page designs utilizing Figma and other advanced design tools to deliver high-quality results.
          </p>
          {/* <motion.button whileHover={{background:"orange" , color:"black"}}>View My Work</motion.button> */}
        </motion.div>
        <motion.div
          className="box"
          
        >
          <h2>Graphic Design</h2>
          <p>
          Proficient in Adobe Photoshop and Illustrator, adept at creating compelling graphics and artwork with precision and creativity.
          </p>
          {/* <motion.button whileHover={{background:"orange" , color:"black"}}>View My Work</motion.button> */}
        </motion.div>
        <motion.div
          className="box"
          
        >
          <h2>Front-End development</h2>
          <p>
          Building front-end websites using React.js and other technologies to deliver engaging user experiences and responsive design solutions.
          </p>
          {/* <motion.button whileHover={{background:"orange" , color:"black"}}>View My Work</motion.button> */}
        </motion.div>
        <motion.div
          className="box"
          
        >
          <h2>Back-End Development</h2>
          <p>
          Still in the process of learning backend development, with plans to begin building projects in this area as I continue to improve.
          </p>
          {/* <motion.button whileHover={{background:"orange" , color:"black"}}>View My Work</motion.button> */}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;