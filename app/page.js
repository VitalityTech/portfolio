'use client'
import { useEffect, useState } from 'react';
import Work from './components/Work';
import About from './components/About';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Contact from './components/Contact';
import Services from './components/Services';

export default function Home() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(()=>{
    if(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('()prefers-color-scheme: dark').matches)) {
      setIsDarkMode(true)
    }else{
      setIsDarkMode(false)
    }
  },[])

  useEffect(()=> {
    if(isDarkMode){
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    }else{
      document.documentElement.classList.remove('dark');
      localStorage.theme = '';
    }
  },[isDarkMode])

  return (
    <>
    <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    <About isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    <Services isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    <Work isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    <Contact isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} /> 
    <Footer isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    </>
  );
}
