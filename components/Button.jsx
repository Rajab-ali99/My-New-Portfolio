'use client'
import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";
import { motion, useAnimationFrame, useMotionValue, useSpring, useTransform } from "framer-motion";


const Button = ({text , onClick , type}) => {
  return (
    <motion.button whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }} onClick={onClick} type={type} className="bg-lime-600 cursor-pointer relative z-40 hover:bg-lime-700 text-white px-6 py-3 rounded-full flex items-center gap-2 font-medium  transition">
    {text}
    <FiArrowUpRight className=''/>
    </motion.button>
  )
}

export default Button