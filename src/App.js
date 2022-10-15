import { useState, useEffect, useRef } from 'react'
import './App.css';
import { motion } from 'framer-motion';

import image1 from './images/img.jpg'
import image2 from './images/img1.jpg'
import image3 from './images/img3.jpg'
import image4 from './images/img2.jpg'

const images = [image1, image2, image3, image4]

function App() {
  const carousel = useRef();
  const [width, setWidth] = useState(0)

  useEffect(() =>{
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  }, [])


  return (
    <div className="App">
      <div className='containerText'>
        <h1>CAROUSEL SLIDER</h1>
      </div>
     <motion.div ref={carousel} className='carousel' whileTap={{cursor: "grabbing"}}>
        <motion.div className='inner' 
        drag="x" dragConstraints={{right:0, left: -width}} 
        initial={{x:100}} animate={{x:0}}
        transition={{duration:0.8}}>

          {images.map(image => (
            <motion.div className='item' key={image}>
              <img src={image} alt="carousel"/>
            </motion.div>
          ))}

        </motion.div>
     </motion.div>
    </div>
  );
}

export default App;
