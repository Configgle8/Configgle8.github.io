import React from 'react';
import { motion } from 'framer-motion';

const NavbarButton = ({ onClick }) => (
  <motion.button
    onClick={onClick}
    whileTap={{scale: 1}}
    initial={{ y: 25, opacity: 0, zIndex: 1000 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.10, boxShadow: 'shadow-2xl' }}
    className='ml-8 bg-white rounded-full flex items-center justify-center focus:outline-none focus:bg-white'
    transition={{ duration: 1.2 }}
  >
    <motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width='16px' height='16px'>
      <motion.path d="M 1 2 L 1 3 L 14 3 L 14 2 Z M 1 7 L 1 8 L 14 8 L 14 7 Z M 1 12 L 1 13 L 14 13 L 14 12 Z"></motion.path>
    </motion.svg>
  </motion.button>
);

export default NavbarButton;
