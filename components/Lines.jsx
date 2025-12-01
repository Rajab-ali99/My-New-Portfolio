'use client';
import React from 'react'
import { motion } from "framer-motion";
import { fadeIn } from '@/lib/varients';

const Lines = () => {
    return (
        <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}

            className=' '>
            <div className='flex items-center gap-0'>

                <div className="sideline bg-lime-600"></div>
                <div className="midline  bg-lime-600">
                    <div className="innercircle"></div>
                </div>
                <div className="sideline  bg-lime-600"></div>

            </div>
        </motion.div>
    )
}

export default Lines
