import React from 'react';
import BackgroundVideo from '/src/assets/homeBento/Option3.mp4';

const VideoBackground = () => {
    return (
      <div className="relative">
        <video
         autoPlay 
        loop
         muted 
        playsInline
        className='object-cover fixed inset-0 w-full h-full '
        >
          <source src={BackgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  };
  
  export default VideoBackground;
  