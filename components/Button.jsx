'use client'
import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";
import { motion, useAnimationFrame, useMotionValue, useSpring, useTransform } from "framer-motion";


const Button = ({text , onClick , type}) => {
  return (
    <motion.button whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }} onClick={onClick} type={type} className="bg-emerald-500 cursor-pointer relative z-40 hover:bg-emerald-600 text-white px-6 py-3 rounded-full font-bold  transition">
    {text}
    <FiArrowUpRight className='inline-block ml-2'/>
    </motion.button>
  )
}

export default Button