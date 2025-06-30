import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Droplet, Download, Mail, Shield, Award, CheckCircle, Palette, Beaker, AlertTriangle, Zap, Star } from 'lucide-react';
import { solventDyesData, getProductColor } from '../../../data/solventDyesData';

const SolventDyeDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  
  const product = solventDyesData.details.products.find(
    p => p.CINo.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') === productId
  );

  if (!product) {
    return (
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link to="/products/solvent-dyes" className="text-teal-600 hover:text-teal-700">
            Back to Solvent Dyes
          </Link>
        </div>
      </div>
    );
  }

  const productColor = getProductColor(product.CINo);
  const specs = product.specifications;

  // Basic Information
  const basicInfo = [
    { label: 'CI Number', value: product.CINo },
    { label: 'Common Name', value: product.CommonName || 'N/A' },
    { label: 'CAS Number', value: product.CASNo || 'N/A' },
    { label: 'Alternative CI No.', value: product.AltCINo || 'N/A' },
    { label: 'Type', value: 'Solvent Dye' },
    { label: 'Application', value: 'Oil-based systems, plastics, inks' }
  ];

  // Solubility Data (if available)
  const solubilityData = specs?.["SolubilityData_g_per_litre_24h_stable"];

  const applications = [
    'Plastic Coloring',
    'Printing Inks',
    'Paints & Coatings',
    'Wax Coloring',
    'Oil-Based Systems',
    'Automotive Coatings',
    'Wood Stains',
    'Fuel Marking'
  ];

  const features = [
    'Excellent oil solubility',
    'Superior light fastness',
    'High color strength',
    'Thermal stability',
    'Non-bleeding properties',
    'Wide compatibility range'
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 mb-8">
          <Link
            to="/products"
            className="text-teal-600 hover:text-teal-700 transition-colors duration-200"
          >
            Products
          </Link>
          <span className="text-gray-400">/</span>
          <Link
            to="/products/solvent-dyes"
            className="text-teal-600 hover:text-teal-700 transition-colors duration-200"
          >
            Solvent Dyes
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-600">{product.CINo}</span>
        </div>

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              <Droplet className="w-4 h-4 mr-2" />
              Solvent Dye
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {product.CINo}
            </h1>
            {product.CommonName && (
              <p className="text-2xl text-gray-600 mb-6 font-medium">
                {product.CommonName}
              </p>
            )}
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              High-quality solvent dye designed for oil-based systems and non-aqueous applications. Provides excellent color strength, stability, and solubility for demanding industrial applications.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200">
                <Mail className="w-4 h-4 mr-2" />
                Request Quote
              </button>
              <button className="inline-flex items-center px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors duration-200">
                <Download className="w-4 h-4 mr-2" />
                Download Specification
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8">
            <div className="text-center mb-6">
              <div className={`w-24 h-24 bg-${productColor}-500 rounded-full mx-auto mb-4 shadow-lg relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 transform -skew-x-12 animate-pulse"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{product.CINo}</h3>
              {product.CASNo && <p className="text-gray-600">CAS: {product.CASNo}</p>}
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Shield className="w-5 h-5 text-green-600" />
                <span className="text-gray-700">Oil Soluble</span>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">High Performance</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-teal-600" />
                <span className="text-gray-700">Quality Assured</span>
              </div>
            </div>
          </div>
        </div>

        {/* Basic Information */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Basic Information</h2>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-4">
              <h3 className="text-lg font-semibold">Product Identification</h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {basicInfo.map((info, index) => (
                  <div key={index} className="bg-blue-50 rounded-lg p-4">
                    <div className="text-sm font-medium text-gray-600 mb-1">{info.label}</div>
                    <div className="text-lg font-bold text-gray-900">{info.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Solubility Data */}
        {solubilityData && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Solubility Data</h2>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-6 py-4">
                <h3 className="text-lg font-semibold">Solubility (g/litre, 24h stable)</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Object.entries(solubilityData).map(([solvent, value], index) => (
                    <div key={index} className="bg-green-50 rounded-lg p-4 text-center">
                      <div className="text-sm font-medium text-gray-600 mb-2">{solvent}</div>
                      <div className="text-2xl font-bold text-green-600">{value}</div>
                      <div className="text-xs text-gray-500 mt-1">g/litre</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Applications */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Applications</h2>
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {applications.map((application, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className={`w-8 h-8 bg-${productColor}-500 rounded-full flex items-center justify-center flex-shrink-0`}>
                    <Palette className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">{application}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Features</h2>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quality Assurance */}
        <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-2xl p-8 lg:p-12 text-white mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Quality Assurance</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Our solvent dyes undergo rigorous testing and quality control processes to ensure they meet the highest standards for performance, stability, and consistency.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Beaker className="w-5 h-5 text-blue-400" />
                  <span>Comprehensive analytical testing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="w-5 h-5 text-green-400" />
                  <span>Performance verification</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span>Consistency monitoring</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-32 h-32 bg-white/10 rounded-full mb-4">
                <Award className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Certified Quality</h3>
              <p className="text-gray-300">Industrial grade manufacturing processes</p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center bg-blue-50 rounded-2xl p-8 lg:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Need {product.CINo}?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact our technical team for detailed specifications, samples, or custom requirements. We provide comprehensive support for all solvent dye applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
            >
              <Mail className="w-4 h-4 mr-2" />
              Get Quote
            </Link>
            <button className="inline-flex items-center px-8 py-3 bg-white hover:bg-gray-50 text-gray-700 font-medium rounded-lg border border-gray-300 transition-colors duration-200">
              <Download className="w-4 h-4 mr-2" />
              Download Full Specification
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolventDyeDetail;