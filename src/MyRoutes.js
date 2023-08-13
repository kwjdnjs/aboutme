import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/test" element={<div>test</div>} />
    </Routes>
  );
}

export default MyRoutes;
