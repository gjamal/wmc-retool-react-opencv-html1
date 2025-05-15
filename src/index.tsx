import React, { useState, useEffect, useRef } from 'react'
import { type FC } from 'react'

import { Retool } from '@tryretool/custom-component-support'

export const ImageOpenCV1: FC = () => {
  const [name, _setName] = Retool.useStateString({
    name: 'name'
  })
  const [imageURL, _setImageURL] = Retool.useStateString({
    name: 'imageURL'
  })

  const [status, setStatus] = useState<string>('OpenCV.js is loading...');


  useEffect(() => {
    // Create script element to load OpenCV
    const script = document.createElement('script');
    script.src = 'https://docs.opencv.org/4.11.0/opencv.js'; //'opencv.js';
    //script.src = 'https://cdnjs.cloudflare.com/ajax/libs/fabric.js/5.3.1/fabric.js'
    script.async = true;
    script.type = 'text/javascript';
    
    // Define the callback for when OpenCV is loaded
    window.Module = {
      onRuntimeInitialized: () => {
        setStatus('OpenCV.js is ready.');
      }
    };
    
    document.body.appendChild(script);
    
    // Clean up
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <h2>Testing1 OpenCV.js</h2>
      <p id="status">{status}</p>
    </div>
  );
}
