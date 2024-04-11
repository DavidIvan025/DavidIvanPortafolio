import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Home from './pages/Home'
import Component from './pages/Component'
import Vlog from './pages/Vlog'
import Portafolio from './pages/Portafolio'
const Error404 = lazy(()=> import ('./pages/Error404'))

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Error404 />} />
        
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
