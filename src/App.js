import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Shop from './components/Shop';
import NotFound from './components/NotFound';
import Catalogue from './components/Catalogue';
import Shirts from './components/Shirts';
import Jeans from './components/Jeans';
import Sneakers from './components/Sneakers';
import Perfume from './components/Perfume';
import Accessories from './components/Accessories';
import Modal from './components/Modal';

const App = () => {
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <div className="App">
      <Routes location={background || location}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/shop" element={<Shop />}>
            <Route index element={<Catalogue />} />
            <Route path="shirts" element={<Shirts />} />
            <Route path="jeans" element={<Jeans />} />
            <Route path="sneakers" element={<Sneakers />} />
            <Route path="perfume" element={<Perfume />} />
            <Route path="accessories" element={<Accessories />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>

      {background && (
        <Routes>
          <Route path="/modal" element={<Modal />} />
        </Routes>
      )}
    </div>
  );
};

export default App;
