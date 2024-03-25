import React from 'react';
import { motion } from 'framer-motion';
import '/src/App.css'
import TechStack from './Techbar';
import Profile from '/src/assets/homeBento/Headshot.png'

const Home = () => {

  const Preset  = {
    whileHover: {opacity: 1, scale: 1.02},
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 10 }
  }

  return (
    <section
      id='home'
      className='bg-cover bg-center flex flex-nowrap flex-row text-gray-100 p-0 m-0 box-border h-screen snap-center font-serif  items-center gap-64'
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <motion.div className='container mx-auto p-4 shadow-2xl rounded-xl bg-opacity-50 backdrop-filter backdrop-blur-md'
        style={{ zIndex: 0 }}
        variants={Preset}
        initial='initial'
        whileInView='whileInView'
        transition='transition'
      >
        <motion.div className='flex flex-wrap flex-col  gap-4 items-center justify-center mx-auto p-4 h-screen'>
          {/* Grid items */}
          <motion.h1 className='text-white text-poppins-BI font-bold text-5xl text-center'>
            Michael Anderson
          </motion.h1>
          <motion.h3 className='text-white text-poppins-BI font-bold text-md'>Student & Developer</motion.h3>
          <TechStack />
          <motion.div
            className='clip-Circle h-72 w-72 bg-white'
            style={{
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundImage: `url(${Profile})` 
            }}
          >
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
