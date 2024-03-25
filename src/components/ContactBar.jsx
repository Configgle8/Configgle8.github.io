import React from 'react';
import { motion, useAnimation  } from 'framer-motion';
import { useState } from 'react';




const ContactBar = () => {

  const inViewAnimation = {
    initial: {opacity: 0, x: 200},
    whileInView: {opacity: 1, x: 0},
  }

  const [isBtnOpen, setIsBtnOpen] = useState(false);
  const [isBtn2Open, setIsBtn2Open] = useState(false);


  const toggleBtn = () => {
    setIsBtnOpen(!isBtnOpen);
    setIsBtn2Open(false);
  }; 

  const toggleBtn2 = () => {
    setIsBtn2Open(!isBtn2Open);
    setIsBtnOpen(false);
  }; 

  const svgVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  const pathVariants = {
    initial: { pathLength: 0, opacity: 0, scale: 1},
    animate: { pathLength: 1, opacity: 1 },
  };
  const pathTransition = {
    duration: 2,
    ease: 'easeInOut', 
  };

  return (
    <div
    initial='initial'
    whileInView='whileInView'
    variants={inViewAnimation} 
    className="grid grid-cols-3 items-center justify-center bg-slate-500 w-96 p-4 rounded-xl shadow-2xl">
    
        
        <motion.button
        whileInView='whileInView'
        variants={inViewAnimation}
        onClick={toggleBtn}
        whileTap={{scale: 1.04}}
        initial='initial'
        whileHover={{scale: 1.10}}
        className="focus:outline-none mx-auto text-white bg-gradient-darkblue rounded-xl h-24 w-24 grid items-center justify-center">
        
            <motion.svg
            variants={svgVariants}
            xmlns="http://www.w3.org/2000/svg"  
            viewBox="0 0 16 16" 
            width="32px" 
            height="32px"
            initial='initial'
            animate='animate' 
            ><motion.path 
            variants={pathVariants}
            initial='initial' 
            animate='animate' 
            fill={"#FFFFFF"}
            transition={pathTransition}
            d="M 2.757813 1 C 1.792969 1 1 1.792969 1 2.757813 L 1 12.246094 C 1 13.207031 1.792969 14 2.757813 14 L 12.246094 14 C 13.207031 14 14 13.207031 14 12.246094 L 14 2.757813 C 14 1.792969 13.207031 1 12.246094 1 Z M 2.757813 2 L 12.246094 2 C 12.667969 2 13 2.332031 13 2.757813 L 13 12.246094 C 13 12.667969 12.667969 13 12.246094 13 L 2.757813 13 C 2.332031 13 2 12.667969 2 12.246094 L 2 2.757813 C 2 2.332031 2.332031 2 2.757813 2 Z M 4 3 C 3.449219 3 3 3.449219 3 4 C 3 4.550781 3.449219 5 4 5 C 4.550781 5 5 4.550781 5 4 C 5 3.449219 4.550781 3 4 3 Z M 3 6 L 3 12 L 5 12 L 5 6 Z M 6 6 L 6 12 L 8 12 L 8 9.320313 C 8 8.488281 8.078125 7.742188 9.078125 7.742188 C 10.0625 7.742188 10 8.636719 10 9.375 L 10 12 L 12 12 L 12 9.039063 C 12 7.320313 11.640625 6 9.691406 6 C 8.753906 6 8.28125 6.375 8.023438 6.875 L 8 6.875 L 8 6 Z"/>
            </motion.svg>
          

        </motion.button>
          {isBtnOpen && ( 
              <motion.a
              
              target='_blank'
              href='https://www.linkedin.com/in/michael-anderson-389a0523a/'
              initial={{y: 20, opacity: 0}}
              animate={{y: 0, opacity: 1}} 
              className='bg-slate-200 text-black font-medium shadow-2xl h-14 w-24 rounded-xl
              absolute mx-64 mt-48 grid items-center justify-center'>
                LinkedIn
              </motion.a>           
            )
        }
        
        <motion.button
        whileInView='whileInView'
        variants={inViewAnimation}
        onClick={toggleBtn2}
        whileTap={{scale: 1.04}}
        initial='initial'
        whileHover={{scale: 1.10}}
        className="focus:outline-none mx-auto text-white bg-gradient-darkblue rounded-xl h-24 w-24 grid items-center justify-center">
        
            <motion.svg
            variants={svgVariants}
            xmlns="http://www.w3.org/2000/svg"  
            viewBox="0 0 16 16" 
            width="32px" 
            height="32px"
            initial='initial'
            animate='animate' 
            ><motion.path 
            variants={pathVariants}
            initial='initial' 
            animate='animate' 
            fill={"#FFFFFF"}
            transition={pathTransition}
            d="M 2.757813 1 C 1.792969 1 1 1.792969 1 2.757813 L 1 12.246094 C 1 13.207031 1.792969 14 2.757813 14 L 12.246094 14 C 13.207031 14 14 13.207031 14 12.246094 L 14 2.757813 C 14 1.792969 13.207031 1 12.246094 1 Z M 2.757813 2 L 12.246094 2 C 12.667969 2 13 2.332031 13 2.757813 L 13 12.246094 C 13 12.667969 12.667969 13 12.246094 13 L 2.757813 13 C 2.332031 13 2 12.667969 2 12.246094 L 2 2.757813 C 2 2.332031 2.332031 2 2.757813 2 Z M 4 3 C 3.449219 3 3 3.449219 3 4 C 3 4.550781 3.449219 5 4 5 C 4.550781 5 5 4.550781 5 4 C 5 3.449219 4.550781 3 4 3 Z M 3 6 L 3 12 L 5 12 L 5 6 Z M 6 6 L 6 12 L 8 12 L 8 9.320313 C 8 8.488281 8.078125 7.742188 9.078125 7.742188 C 10.0625 7.742188 10 8.636719 10 9.375 L 10 12 L 12 12 L 12 9.039063 C 12 7.320313 11.640625 6 9.691406 6 C 8.753906 6 8.28125 6.375 8.023438 6.875 L 8 6.875 L 8 6 Z"/>
            </motion.svg>
          

        </motion.button>
          {isBtn2Open && ( 
              <motion.a
              
              target='_blank'
              href=''
              initial={{y: 20, opacity: 0}}
              animate={{y: 0, opacity: 1}} 
              className='bg-slate-200 text-black font-medium shadow-2xl h-14 w-24 rounded-xl
              absolute mx-64 mt-48 grid items-center justify-center'>
              click
              </motion.a>           
            )
        }
      
    </div>
  );
};

export default ContactBar;
