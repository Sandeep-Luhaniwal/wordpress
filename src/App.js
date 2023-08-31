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

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
