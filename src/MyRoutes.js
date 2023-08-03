import { Routes, Route } from 'react-router-dom';

function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<div>홈</div>} />
      <Route path="/test" element={<div>test</div>} />
    </Routes>
  );
}

export default MyRoutes;
