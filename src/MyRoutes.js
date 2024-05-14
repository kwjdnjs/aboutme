import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import StxEx from './pages/StxEx';
import StxExDetail from './pages/StxExDetail';

function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/stxex" element={<StxEx />} />
      <Route path="/stxex/:address" element={<StxExDetail />} />
    </Routes>
  );
}

export default MyRoutes;
