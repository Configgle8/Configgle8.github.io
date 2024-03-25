import React, { useState } from 'react';
import NavbarButton from './NavbarButton';
import NavbarMenu from './NavbarMenu';


const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
   
      <div className={`z-50 p-0 m-0 h-24 fixed flex justify-between items-center ${isNavbarOpen ? 'flex' : ''}`} whileHover={{ opacity: 1 }}>
        <div className='max-w-7xl fixed m-auto flex items-center justify-between '>
          <NavbarButton onClick={toggleNavbar} />
          <NavbarMenu isOpen={isNavbarOpen} />
        </div>
      </div>
    
  );
};

export default Navbar;