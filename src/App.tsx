import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import PhIndicatorDetail from './pages/products/ph-indicators/PhIndicatorDetail';
import PhIndicators from './pages/products/ph-indicators/PhIndicators';
import LabChemicals from './pages/products/lab-chemicals/LabChemicals';
import LabChemicalDetail from './pages/products/lab-chemicals/LabChemicalDetail';

function App() { 
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/ph-indicators" element={<PhIndicators />} />
            <Route
              path="/products/ph-indicators/:productId"
              element={<PhIndicatorDetail />} />
          <Route path="/products/lab-chemicals" element={<LabChemicals />} />
          <Route path="/products/lab-chemicals/:productSlug" element={<LabChemicalDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;