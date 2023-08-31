import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/Root.css';
import Nav from './compoments/Nav';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Herosection from './compoments/Herosection';
import Partnership from './compoments/Partnership';

function App() {
  return (
    <>
      <Nav />
      <Herosection />
      <Partnership />
    </>
  );
}

export default App;
