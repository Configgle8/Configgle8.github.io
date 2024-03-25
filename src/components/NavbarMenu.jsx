import React from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const NavbarMenu = ({ isOpen }) => (
  <motion.div
    initial={{ opacity: 0, y: 25 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2 }}
    whileHover={{ scale: 1.05 }}
    exit={{ opacity: 0, y: 25 }}
    className={`flex flex-col gap-4 fixed ${isOpen ? 'visible' : 'invisible'} ml-6 mt-72 bg-white p-2 rounded-md shadow-md`}
  >
  
     <ScrollLink to='home' smooth={true} duration={1000}>
       <motion.button
         whileTap={{scale: 1}}
         initial={{ opacity: 0, y: 25 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 1.2 }}
         whileHover={{ scale: 1.10 }}
         className="rounded-full flex items-center justify-center focus:outline-none focus:bg-gray-200 "
       >
         <motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width='16px' height='16px'>
           <motion.path d="M 8 1.320313 L 0.660156 8.132813 L 1.339844 8.867188 L 2 8.253906 L 2 14 L 7 14 L 7 9 L 9 9 L 9 14 L 14 14 L 14 8.253906 L 14.660156 8.867188 L 15.339844 8.132813 Z M 8 2.679688 L 13 7.328125 L 13 13 L 10 13 L 10 8 L 6 8 L 6 13 L 3 13 L 3 7.328125 Z">
           </motion.path>
         </motion.svg>
       </motion.button>
     </ScrollLink>


     <ScrollLink to='contact' smooth={true} duration={1000}>
     <motion.button initial={{opacity: 0, y: 25}} animate={{opacity: 1, y: 0}} transition={{duration: 1.2}} whileHover={{scale: 1.10}} whileTap={{scale: 1}}
     className="rounded-full flex items-center justify-center focus:outline-none focus:bg-gray-200">
       <motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width='16px' height='16px'>
         <motion.path d="M 8 2 C 6.347656 2 5 3.347656 5 5 C 5 6.652344 6.347656 8 8 8 C 9.652344 8 11 6.652344 11 5 C 11 3.347656 9.652344 2 8 2 Z M 8 8 C 5.246094 8 3 10.246094 3 13 L 4 13 C 4 10.785156 5.785156 9 8 9 C 10.214844 9 12 10.785156 12 13 L 13 13 C 13 10.246094 10.753906 8 8 8 Z M 8 3 C 9.109375 3 10 3.890625 10 5 C 10 6.109375 9.109375 7 8 7 C 6.890625 7 6 6.109375 6 5 C 6 3.890625 6.890625 3 8 3 Z">
     
         </motion.path>
       </motion.svg>
     </motion.button>
     </ScrollLink>

     <ScrollLink to='about' smooth={true} duration={1000}>
     <motion.button initial={{opacity: 0, y: 25}} animate={{opacity: 1, y: 0}} transition={{duration: 1.2}} whileHover={{scale: 1.10}} whileTap={{scale: 1}}
     className="rounded-full flex items-center justify-center focus:outline-none focus:bg-gray-200">
       <motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width='16px' height='16px'>
         <motion.path d="M 2.5 2 C 1.675781 2 1 2.675781 1 3.5 L 1 11.5 C 1 12.324219 1.675781 13 2.5 13 L 4 13 L 4 15.433594 L 7.652344 13 L 12.5 13 C 13.324219 13 14 12.324219 14 11.5 L 14 3.5 C 14 2.675781 13.324219 2 12.5 2 Z M 2.5 3 L 12.5 3 C 12.78125 3 13 3.21875 13 3.5 L 13 11.5 C 13 11.78125 12.78125 12 12.5 12 L 7.347656 12 L 5 13.566406 L 5 12 L 2.5 12 C 2.21875 12 2 11.78125 2 11.5 L 2 3.5 C 2 3.21875 2.21875 3 2.5 3 Z M 7 4 L 7 5 L 8 5 L 8 4 Z M 7 6 L 7 11 L 8 11 L 8 6 Z">
     
         </motion.path>
       </motion.svg>
     </motion.button>
     </ScrollLink>

     <ScrollLink to='projects' smooth={true} duration={1000}>
     <motion.button initial={{opacity: 0, y: 25}} animate={{opacity: 1, y: 0}} transition={{duration: 1.2}} whileHover={{scale: 1.10}} whileTap={{scale: 1}}
     className="rounded-full flex items-center justify-center focus:outline-none focus:bg-gray-200">
       <motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width='16px' height='16px'>
         <motion.path d="M 6.5 1 C 5.675781 1 5 1.675781 5 2.5 L 5 3 L 2.5 3 C 1.675781 3 1 3.675781 1 4.5 L 1 12.5 C 1 13.324219 1.675781 14 2.5 14 L 13.5 14 C 14.324219 14 15 13.324219 15 12.5 L 15 4.5 C 15 3.675781 14.324219 3 13.5 3 L 11 3 L 11 2.5 C 11 1.675781 10.324219 1 9.5 1 Z M 6.5 2 L 9.5 2 C 9.78125 2 10 2.21875 10 2.5 L 10 3 L 6 3 L 6 2.5 C 6 2.21875 6.21875 2 6.5 2 Z M 2.5 4 L 13.5 4 C 13.78125 4 14 4.21875 14 4.5 L 14 9 L 2 9 L 2 4.5 C 2 4.21875 2.21875 4 2.5 4 Z M 7 7 L 7 8 L 9 8 L 9 7 Z M 2 10 L 14 10 L 14 12.5 C 14 12.78125 13.78125 13 13.5 13 L 2.5 13 C 2.21875 13 2 12.78125 2 12.5 Z">
     
         </motion.path>
       </motion.svg>
     </motion.button>
     </ScrollLink>

    </motion.div>
);

    export default NavbarMenu;