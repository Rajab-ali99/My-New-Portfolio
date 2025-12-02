'use client';
import React from 'react'
import { motion } from "framer-motion";
import { fadeIn } from '@/lib/varients';

const Lines = () => {
    return (
        <motion.div

            className=' '>
            <div className='flex py-1 items-center gap-0'>

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
