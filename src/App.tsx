import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import AluminiumChloride from './pages/products/aluminium-chloride/AluminiumChloride';
import FoodColors from './pages/products/food-color/FoodColors';
import FoodColorDetail from './pages/products/food-color/FoodColorDetail';
import FluorescentDyes from './pages/products/fluorescent-dyes/FluorescentDyes';
import CosmeticDyes from './pages/products/cosmetic-dyes/CosmeticDyes';
import CosmeticDyeDetail from './pages/products/cosmetic-dyes/CosmeticDyeDetail';
import SolventDyes from './pages/products/solvent-dyes/SolventDyes';
import SolventDyeDetail from './pages/products/solvent-dyes/SolventDyeDetail';
import RareEarths from './pages/products/rare-earths/RareEarths';
import RareEarthDetail from './pages/products/rare-earths/RareEarthDetail';
import PhaseTransferCatalysts from './pages/products/phase-transfer-catalysts/PhaseTransferCatalysts';
import PhaseTransferCatalystDetail from './pages/products/phase-transfer-catalysts/PhaseTransferCatalystDetail';
import IodineDerivatives from './pages/products/iodine-derivatives/IodineDerivatives';
import IodineDerivativeDetail from './pages/products/iodine-derivatives/IodineDerivativeDetail';

function App() { 
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/aluminium-chloride" element={<AluminiumChloride />} />
          <Route path="/products/food-colors" element={<FoodColors />} />
          <Route path="/products/food-colors/:productId" element={<FoodColorDetail />} />
          <Route path="/products/fluorescent-dyes" element={<FluorescentDyes />} />
          <Route path="/products/cosmetic-dyes" element={<CosmeticDyes />} />
          <Route path="/products/cosmetic-dyes/:productId" element={<CosmeticDyeDetail />} />
          <Route path="/products/solvent-dyes" element={<SolventDyes />} />
          <Route path="/products/solvent-dyes/:productId" element={<SolventDyeDetail />} />
          <Route path="/products/rare-earths" element={<RareEarths />} />
          <Route path="/products/rare-earths/:productId" element={<RareEarthDetail />} />
          <Route path="/products/phase-transfer-catalysts" element={<PhaseTransferCatalysts />} />
          <Route path="/products/phase-transfer-catalysts/:productId" element={<PhaseTransferCatalystDetail />} />
          <Route path="/products/iodine-derivatives" element={<IodineDerivatives />} />
          <Route path="/products/iodine-derivatives/:productId" element={<IodineDerivativeDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;