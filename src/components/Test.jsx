import React from 'react';
import { motion } from 'framer-motion';

const Test = () => {
  return (
    <motion.div className='h-screen flex items-center justify-center gap-32 '>
        <motion.div className='w-52 h-52 bg-slate-500 flex shadow-2xl rounded-2xl items-center font-bold justify-center text-gray-300'
        initial={{opacity:0, x: -400, y: -400, scale: 0.5}} animate={{opacity:1, x: 0, y: 0, scale: 1.5}} transition={{duration:1}} whileHover={{scale: 0.75, opacity: 0.75, background: 'green' }}>
          Goodbye
        </motion.div>

        <motion.div className='w-52 h-52 bg-amber-500 flex shadow-2xl rounded-2xl items-center font-bold justify-center text-gray-300'
        initial={{opacity: 0, x: 600, y: -600, scale: 0.5}} animate={{opacity: 1, x: 0, y: 0, scale: 1.5}} transition={{duration: 4}}
        >
          Hello
        </motion.div>
    </motion.div>
  );
};

export default Test;
