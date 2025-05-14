'use client'
import Work from './components/Work';
import About from './components/About';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Services from './components/Services';

export default function Home() {
  return (
    <>
    <Navbar />
    <Header />
    <About />
    <Services />
    <Work />
    </>
  );
}
