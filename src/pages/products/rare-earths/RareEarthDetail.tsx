import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Globe, Download, Mail, Shield, Award, CheckCircle, Atom, Beaker, AlertTriangle, Zap, Star, TestTube } from 'lucide-react';
import { getAllProducts, getProductColor } from '../../../data/rareEarthData';

const RareEarthDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const allProducts = getAllProducts();
  
  const product = allProducts.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link to="/products/rare-earths" className="text-teal-600 hover:text-teal-700">
            Back to Rare Earth Elements
          </Link>
        </div>
      </div>
    );
  }

  const productColor = getProductColor(product.product);

  // Basic Information
  const basicInfo = [
    { label: 'Product Name', value: product.product },
    { label: 'Full Name', value: product.fullName || 'N/A' },
    { label: 'Category', value: product.category },
    { label: 'Formula', value: product.formula || 'N/A' },
    { label: 'Molecular Weight', value: product.molecularWeight || 'N/A' },
    { label: 'CAS Number', value: product.casNo || 'N/A' },
    { label: 'Batch/Lot No.', value: product.batchNo || product.lotNo || 'N/A' }
  ];

  // Render specifications table
  const renderSpecifications = () => {
    if (!product.specifications || product.specifications.length === 0) {
      return null;
    }

    // Handle different specification formats
    if (Array.isArray(product.specifications)) {
      // For detailed specifications with test characteristics
      if (product.specifications[0]?.testCharacteristic) {
        return (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-emerald-50">
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Test Characteristic</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Unit</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Specification</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Result</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {product.specifications.map((spec, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900">{spec.testCharacteristic}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{spec.unit}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      {spec.specLower && spec.specUpper && spec.specLower !== '------' && spec.specUpper !== '------' 
                        ? `${spec.specLower} - ${spec.specUpper}` 
                        : spec.specLower && spec.specLower !== '------' 
                        ? `≥ ${spec.specLower}` 
                        : spec.specUpper && spec.specUpper !== '------' 
                        ? `≤ ${spec.specUpper}` 
                        : '---'}
                    </td>
                    <td className="px-4 py-3 text-sm font-medium text-emerald-600">{spec.actualResult || spec.content}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
      
      // For parameter-based specifications
      if (product.specifications[0]?.parameter) {
        return (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-emerald-50">
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Parameter</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Unit</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Specification</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Result</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {product.specifications.map((spec, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900">{spec.parameter}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{spec.unit}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      {spec.lowerLimit && spec.upperLimit 
                        ? `${spec.lowerLimit} - ${spec.upperLimit}` 
                        : spec.lowerLimit 
                        ? `≥ ${spec.lowerLimit}` 
                        : spec.upperLimit 
                        ? `≤ ${spec.upperLimit}` 
                        : spec.value || '---'}
                    </td>
                    <td className="px-4 py-3 text-sm font-medium text-emerald-600">{spec.actual || spec.value || '---'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }

      // For composition-based specifications
      if (product.specifications[0]?.composition) {
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {product.specifications.map((spec, index) => (
              <div key={index} className="bg-emerald-50 rounded-lg p-4">
                <div className="text-sm font-medium text-gray-600 mb-1">{spec.composition}</div>
                <div className="text-lg font-bold text-emerald-600">{spec.content}</div>
              </div>
            ))}
          </div>
        );
      }

      // For test-based specifications (zirconium products)
      if (product.specifications[0]?.test) {
        return (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-emerald-50">
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Test</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Type</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Specification</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Result</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {product.specifications.map((spec, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900">{spec.test}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{spec.type}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{spec.specification}</td>
                    <td className="px-4 py-3 text-sm font-medium text-emerald-600">{spec.result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
    }

    return null;
  };

  // Render impurities table
  const renderImpurities = () => {
    if (!product.impurities || product.impurities.length === 0) {
      return null;
    }

    return (
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Impurity Limits</h2>
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-4 flex items-center">
            <AlertTriangle className="w-5 h-5 mr-2" />
            <h3 className="text-lg font-semibold">Maximum Allowable Impurities</h3>
          </div>
          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-red-50">
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Impurity</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Maximum Limit</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Unit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {product.impurities.map((impurity, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm text-gray-900">{impurity.name}</td>
                      <td className="px-4 py-3 text-sm font-medium text-red-600">{impurity.maxLimit}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{impurity.unit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const applications = product.applications || [
    'Advanced Electronics',
    'Catalysis Research',
    'Optical Materials',
    'Magnetic Applications',
    'Ceramic Manufacturing',
    'Glass Industry',
    'Analytical Chemistry',
    'Nuclear Technology'
  ];

  const safetyFeatures = [
    'Ultra-high purity grade',
    'Rigorous quality control',
    'Certificate of analysis provided',
    'Proper packaging and storage',
    'Batch traceability',
    'International standards compliance'
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
            to="/products/rare-earths"
            className="text-teal-600 hover:text-teal-700 transition-colors duration-200"
          >
            Rare Earth Elements
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-600">{product.product}</span>
        </div>

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-6">
              <Globe className="w-4 h-4 mr-2" />
              {product.category}
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {product.product}
            </h1>
            {product.fullName && product.fullName !== product.product && (
              <p className="text-2xl text-gray-600 mb-6 font-medium">
                {product.fullName}
              </p>
            )}
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {product.description || 'High-purity rare earth compound designed for advanced technology applications and research. Meets stringent quality standards for critical applications in electronics, catalysis, and materials science.'}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-colors duration-200">
                <Mail className="w-4 h-4 mr-2" />
                Request Quote
              </button>
              <button className="inline-flex items-center px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors duration-200">
                <Download className="w-4 h-4 mr-2" />
                Download Specification
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8">
            <div className="text-center mb-6">
              <div className={`w-24 h-24 bg-${productColor}-500 rounded-full mx-auto mb-4 shadow-lg relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 transform -skew-x-12 animate-pulse"></div>
                <div className="flex items-center justify-center h-full">
                  <Atom className="w-12 h-12 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{product.product}</h3>
              {product.formula && <p className="text-gray-600">Formula: {product.formula}</p>}
              {product.casNo && <p className="text-gray-600">CAS: {product.casNo}</p>}
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Shield className="w-5 h-5 text-green-600" />
                <span className="text-gray-700">High Purity Grade</span>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">Research Quality</span>
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
            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-4">
              <h3 className="text-lg font-semibold">Product Identification</h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {basicInfo.map((info, index) => (
                  <div key={index} className="bg-emerald-50 rounded-lg p-4">
                    <div className="text-sm font-medium text-gray-600 mb-1">{info.label}</div>
                    <div className="text-lg font-bold text-gray-900">{info.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Specifications */}
        {product.specifications && product.specifications.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Specifications</h2>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-4">
                <h3 className="text-lg font-semibold">Quality Parameters</h3>
              </div>
              <div className="p-6">
                {renderSpecifications()}
              </div>
            </div>
          </div>
        )}

        {/* Impurities */}
        {renderImpurities()}

        {/* Applications */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Applications</h2>
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {applications.map((application, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className={`w-8 h-8 bg-${productColor}-500 rounded-full flex items-center justify-center flex-shrink-0`}>
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">{application}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Safety Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Quality & Safety Features</h2>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {safetyFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Notes */}
        {product.notes && (
          <div className="mb-16">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <div className="flex items-center mb-2">
                <TestTube className="w-5 h-5 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold text-blue-900">Application Note</h3>
              </div>
              <p className="text-blue-800">{product.notes}</p>
            </div>
          </div>
        )}

        {/* Quality Assurance */}
        <div className="bg-gradient-to-r from-gray-900 to-emerald-900 rounded-2xl p-8 lg:p-12 text-white mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Quality Assurance</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Our rare earth elements undergo rigorous testing and quality control processes to ensure they meet the highest standards for advanced technology and research applications.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Beaker className="w-5 h-5 text-emerald-400" />
                  <span>Advanced analytical testing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-green-400" />
                  <span>Ultra-high purity verification</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-blue-400" />
                  <span>Research grade certification</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-32 h-32 bg-white/10 rounded-full mb-4">
                <Award className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Certified Quality</h3>
              <p className="text-gray-300">Research grade manufacturing</p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center bg-emerald-50 rounded-2xl p-8 lg:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Need {product.product}?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact our technical team for detailed specifications, samples, or custom requirements. We provide comprehensive support for all rare earth applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-colors duration-200"
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

export default RareEarthDetail;