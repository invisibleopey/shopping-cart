import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import Shop from './components/Shop';
import NotFound from './components/NotFound';
import Catalogue from './components/Catalogue';
import Shirts from './components/Shirts';
import Jeans from './components/Jeans';
import Sneakers from './components/Sneakers';
import Perfume from './components/Perfume';
import Accessories from './components/Accessories';

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
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
    </BrowserRouter>
  );
};

export default RouteSwitch;
