import React, { useState, useEffect } from 'react';
import HamburgerButton from './HamburgerButton';
import logo from '../assets/img/logo.svg'

const Header = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  
  const handleScroll = () => {
    let scrollDistance = window.scrollY > 0;
    setIsScroll(scrollDistance);
  }
  
  const handleMenu = () => {
    setIsMenu(!isMenu)
    console.log('aple')
  }
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className={`w-full h-20 px-5 xl:px-20 ${ isScroll ? 'bg-[#040C18]' : 'bg-transparent'} flex items-center justify-between fixed z-10 top-0 text-white transition`}>
      <div className="w-full flex items-center  gap-10 static xl:relative">
        <img src={logo} className="w-20 xl:w-28" />
        <ul className={`w-fit justify-between ${isMenu ? 'flex' : 'hidden'} xl:flex items-end xl:items-center flex-col xl:flex-row absolute z-20 xl:static  top-20 right-3 bg-white text-black xl:text-white  xl:bg-transparent p-5 gap-1 xl:gap-5 rounded-lg font-bold shadow-lg xl:shadow-none`} >
          <li><a href="#home">Home</a></li>
          <li><a href="#about_gpt">What is GPT?</a></li>
          <li><a href="#open_ai">OpenAI</a></li>
          <li><a href="#case_studies">Case Studies</a></li>
          <li><a href="#library">Library</a></li>
          <li className="static xl:absolute xl:right-24"><a href="#" className="xl:text-white font-bold">Sign in</a> </li>
          <li className="static xl:absolute xl:right-0"><button className="p-3 bg-red-500 rounded-lg text-white font-bold">Sign up</button></li>
        </ul>
      </div>
      <HamburgerButton menu={handleMenu}/>
      
    </div>
  );
}

export default Header;