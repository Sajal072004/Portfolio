import React from 'react'
import './navbar.scss'
import {motion} from "framer-motion";
import Sidebar from '../sidebar/sidebar';

const Navbar = () => {
  return (
    <div className='navbar'>
      <Sidebar/>
      <div className='wrapper'>
        <motion.span 
        initial={{opacity:0 , scale:0.5}} 
        animate={{opacity:1 , scale:1}}
        transition={{duration:0.5}}
        >
          Portfolio
          </motion.span>
        <div className='social'>
          <a href="https://www.linkedin.com/in/sajaln/" target='_blank'><img src="/linkedin.png" alt="" /></a>
          <a href="https://www.instagram.com/sajal_namdeo07/" target='_blank'><img src="/instagram.png" alt="" /></a>
          <a href="https://github.com/Sajal072004" target='_blank'><img src="/github.png" alt="" /></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar