import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Campaigns from './components/Campaigns';
import Cards from './components/Cards';
import Categories from './components/Categories';
import HeroSection from './components/HeroSection';
import MobileApp from './components/MobileApp';
import { useWindowWidth } from '@react-hook/window-size'


function App() {
  const onlyWidth = useWindowWidth();
  return (
    <>
      <Header />
      {onlyWidth <= 768 && <Campaigns />}
      <HeroSection />
      <Categories />
      {onlyWidth >= 768 && <Campaigns />}
      <MobileApp />
      <Cards />
      <Footer />
    </>
  );
}

export default App;
