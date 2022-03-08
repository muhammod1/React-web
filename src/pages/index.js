import React, { useState } from 'react'
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/infoSection';
import { 
  homeObjOne, 
  homeObjThree, 
  homeObjTwo,
} from '../components/infoSection/Data';
import Navbar from '../components/Navbar'
import Sidebar from '../components/sidebar'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <HeroSection />
        <InfoSection {...homeObjOne}/>
        <InfoSection {...homeObjTwo}/>
        <InfoSection {...homeObjThree}/>
    </>
  )
}

export default Home