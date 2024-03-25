import React from 'react';
import htmlLogo from 'C:/Users/tyans/Documents/practice projects/PortfolioTemp/portfolio-vite/src/assets/svg/HtmlLogo.svg'
import reactLogo from 'C:/Users/tyans/Documents/practice projects/PortfolioTemp/portfolio-vite/src/assets/svg/ReactLogo.svg'
import cssLogo from 'C:/Users/tyans/Documents/practice projects/PortfolioTemp/portfolio-vite/src/assets/svg/CssLogo.svg'
import framerLogo from 'C:/Users/tyans/Documents/practice projects/PortfolioTemp/portfolio-vite/src/assets/svg/FramerLogo.svg'
import jsLogo from 'C:/Users/tyans/Documents/practice projects/PortfolioTemp/portfolio-vite/src/assets/svg/JsLogo.svg'
import twLogo from 'C:/Users/tyans/Documents/practice projects/PortfolioTemp/portfolio-vite/src/assets/svg/TwLogo.svg'



const TechStack = () => {
  return (
    <div className="flex justify-center items-center space-x-4 shadow-2xl p-2 rounded-full">
        <img src={framerLogo} alt="Tech 2" className=" w-8 h-8 " />
        <img src={jsLogo} alt="Tech 2" className=" w-8 h-8 " />


        <img src={reactLogo} alt="Tech 2" className=" w-8 h-8 " />
        <img src={htmlLogo} alt="Tech 3" className=" w-8 h-8 " />
        <img src={cssLogo} alt="Tech 4" className=" w-8 h-8 " />
        <img src={twLogo} alt="Tech 2" className=" w-8 h-8 " />



      
    </div>
  );
};

export default TechStack;
