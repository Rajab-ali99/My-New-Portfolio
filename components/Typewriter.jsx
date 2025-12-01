import React from 'react'
import { Typewriter } from "react-simple-typewriter"
const Typewrite = () => {

    return (
        <div>
            <h1 className='font-bold text-2xl text-lime-600 mt-5'>
                <Typewriter
                    words={[
                        'Full Stack Developer',
                        'Next.js Developer',
                        'React.js Specialist',
                        'MERN Stack Developer',
                        'Node.js Backend Developer',
                        'API & Database Developer']}
                    loop={""}
                    cursor
                    delaySpeed={3000}
                />
            </h1>
        </div>
    )
}

export default Typewrite
