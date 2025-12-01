'use client'
import { FaArrowRight } from "react-icons/fa6";
import React from 'react'

import { motion, useAnimationFrame, useMotionValue, useSpring, useTransform } from "framer-motion";


const Button1 = ({text , onClick , type}) => {
  return (
    <motion.button whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.95 }} onClick={onClick} type={type} className="hover:text-white border-2 border-lime-600 flex items-center gap-3 text-lime-600 cursor-pointer relative z-40 hover:bg-lime-600  px-6 py-2 rounded-full font-bold text-lg  transition">
    {text}
    <FaArrowRight className='inline-block  ml-2'/>
    </motion.button>
  )
}

export default Button1