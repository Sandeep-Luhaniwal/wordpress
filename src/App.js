import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/Root.css';
import Nav from './compoments/Nav';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Herosection from './compoments/Herosection';
import Partnership from './compoments/Partnership';
import Internon from './compoments/Internon';
import Studio from './compoments/Studio';
import Partner from './compoments/Partner';
import Alignwordpress from './compoments/Alignwordpress';
import Stars from './compoments/Stars';
import Navtab from './compoments/Navtab';
import Check from './compoments/Check';
import Footer from './compoments/Footer';
import { useEffect } from 'react';
import Preloder from './compoments/Preloder';
import BackToTop from './compoments/BackToTop';

function App() {
  useEffect(() => {
    const preloader = document.getElementById('preloader')
    setTimeout(() => {
      preloader.classList.add('d-none')
      preloader.classList.add('pointer-event-none')
      document.body.classList.remove('overflow-hidden')
    }, 2500)
    document.body.classList.add('overflow-hidden')

  }, []);
  return (
    <>
      <Preloder />
      <Nav />
      <Herosection />
      <Partnership />
      <Internon />
      <Studio />
      <Partner />
      <Alignwordpress />
      <Stars />
      <Navtab />
      <Check />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
