import React, { useState } from "react";
import { motion } from 'framer-motion';

const Test = () => {

  const [open, setOpen] = useState(false);

  const variants = {
    visible: {
      opacity: 1, x: 100,
      transition: { staggerChildren : 0.2,}
    },
    hidden: { opacity: 0 },
  };

  const items = ["item1" , "item2" , "item3" , "item4"];

  return (
    <div className="course">
      <motion.ul initial="hidden" animate="visible" variants={variants}>
        {items.map((item) => (
          <motion.li variants={variants} key={item}>
            {item}
          </motion.li>
        ))}
      </motion.ul>


    </div>
  )
}

export default Test;