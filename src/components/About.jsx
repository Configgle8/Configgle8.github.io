import React from 'react';
import { motion } from 'framer-motion';
import TwoTruthsOneLie from './TwoTruthsOneLie';
import Milwaukee from '/src/assets/Milwaukee.svg'
import DownloadButton from './DownloadButton';

const About = () => {
  const Preset  = {
    whileHover: {opacity: 1, scale: 1.02},
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 10 }
  }
  return (
    <section id='about' className='relative bg-slate-100 text-gray-800 p-0 m-0 box-border h-screen snap-center font-serif flex flex-col lg:flex-row justify-center items-center'>

      {/* Talking points */}
      <motion.div className="lg:w-1/2 flex justify-around items-center mb-8 lg:mb-0 flex-wrap gap-8"
      variants={Preset}
      initial='initial'
      whileInView='whileInView'
      transition='transition'>
        <div className="text-center lg:ml-12  shadow-2xl border-r-red-700 border-r-8 border-b-red-700 border-opacity-50 border-b-8 rounded-xl p-4  bg-red-400 gap-24">
          <h2 className='text-poppins-BI font-bold text-lg text-white'>I am a junior at the University of Wisconsin-Milwaukee</h2> <p className='text-poppins-BI font-bold text-md text-white'>majoring in Information Technology Management, with a minor in Information Science</p>
          <p className='text-poppins-BI font-bold text-md text-white'>GPA: <b>3.752</b> Deans Honors List </p>
        </div>

        <div className="text-center lg:ml-12  shadow-2xl border-r-green-700 border-r-8 border-b-green-700 border-opacity-50 border-b-8 rounded-xl p-4  bg-green-400 gap-24">
          <h2 className='text-poppins-BI font-bold text-lg text-white'>Born & Raised in Milwaukee, Wisconsin </h2>
          <img src={Milwaukee}></img>
        </div>
        <div className=" inline-flex items-center lg:ml-12 lg:w-80  shadow-2xl border-r-teal-700 border-r-8 border-b-teal-700 border-opacity-50 border-b-8 rounded-xl p-4  bg-teal-400 gap-24">
          <DownloadButton/>
          <h3 className='text-poppins-BI font-bold text-lg text-white  min-w-12'>View my resume</h3>
        </div>

        
      </motion.div>

      {/* Centered text */}
      <motion.div className='lg:w-screen flex items-center justify-center'
      variants={Preset}
      initial='initial'
      whileInView='whileInView'
      transition='transition'>
        <h1 className='cursor-help animate-bounce-slow text-4xl lg:text-6xl font-bold text-center'>
          Who am I?
        </h1>
      </motion.div>

      <motion.div className="lg:mr-12 text-center lg:ml-12  shadow-2xl border-r-pink-700 border-r-8 border-b-pink-700 border-opacity-50 border-b-8 rounded-xl p-4  bg-pink-400 gap-24"
      variants={Preset}
      initial='initial'
      whileInView='whileInView'
      transition='transition'
      >
          <TwoTruthsOneLie />
        </motion.div>

    </section>
  )
}

export default About;
