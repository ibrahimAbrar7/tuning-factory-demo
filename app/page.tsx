import React from 'react';
import HeaderOne from './Components/HeaderOne';
import HeaderTwo from './Components/HeaderTwo';
import Carousel from './Components/Carousel';
import Service from './Components/Service';
import Perform from './Components/Perform';
import Form from './Components/Form';
import Footer from './Components/Footer';
import BackToTop from './Components/BackToTop';
import ThemeToggle from './Components/ThemeToggle';

export default function Home() {
  return (
   <div>
    <HeaderOne />
    <HeaderTwo /> 
    <Carousel />
    <Service />
    <Perform />
    <Form />
    <Footer />
    <BackToTop />
    <div className="hidden lg:block">
  <ThemeToggle />
</div>
   </div>
  );
}
