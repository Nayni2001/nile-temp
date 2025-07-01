import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Sparkles, Download, Mail, Shield, Award, CheckCircle, FlaskRound as Flask, Beaker, AlertTriangle, Atom, Star, TestTube } from 'lucide-react';
import { getAllProducts, getProductColor } from '../../../data/iodineDerivativesData';

const IodineDerivativeDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const allProducts = getAllProducts();
  
  const product = allProducts.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link to="/products/iodine-derivatives" className="text-teal-600 hover:text-teal-700">
            Back to Iodine Derivatives
          </Link>
        </div>
      </div>
    );
  }

  const productColor = getProductColor(product.product);

  // Basic Information
  const basicInfo = [
    { label: 'Product Name', value: product.product },
    { label: 'CAS Number', value: product.CASNo || 'N/A' },
    { label: 'Code Number', value: product.codeNumber || 'N/A' },
    { label: 'Molecular Formula', value: product.molecularFormula || 'N/A' },
    { label: 'Molecular Weight', value: product.molecularWeight || 'N/A' },
    { label: 'Description', value: product.description || 'N/A' }
  ];

  // Render specifications table
  const renderSpecifications = () => {
    if (!product.specifications || product.specifications.length === 0) {
      return (
        <div className="text-center py-8">
          <p className="text-gray-500">Specifications will be provided upon request.</p>
        </div>
      );
    }

    return (
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-violet-50">
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Parameter</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Specification</th>
              {product.specifications.some(spec => (spec as any).result) && (
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Result</th>
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {product.specifications.map((spec, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-3 text-sm text-gray-900 font-medium">{spec.parameter}</td>
                <td className="px-4 py-3 text-sm text-gray-600">
                  {spec.desc || 
                   (spec.range && `${spec.range} ${spec.unit || ''}`) ||
                   (spec.min && `Min. ${spec.min} ${spec.unit || ''}`) ||
                   'N/A'}
                </td>
                {product.specifications.some(s => (s as any).result) && (
                  <td className="px-4 py-3 text-sm font-medium text-violet-600">{(spec as any).result || '---'}</td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const applications = [
    'Pharmaceutical Synthesis',
    'Analytical Chemistry',
    'Organic Synthesis',
    'Medical Imaging',
    'Antiseptic Applications',
    'Research & Development',
    'Chemical Manufacturing',
    'Laboratory Reagents'
  ];

  const safetyFeatures = [
    'High purity grade (≥97%)',
    'Pharmaceutical quality standards',
    'Analytical grade specifications',
    'Certificate of analysis provided',
    'Proper packaging and storage',
    'Batch traceability',
    'Quality control testing',
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
            to="/products/iodine-derivatives"
            className="text-teal-600 hover:text-teal-700 transition-colors duration-200"
          >
            Iodine Derivatives
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-600">{product.product}</span>
        </div>

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-violet-100 text-violet-800 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Iodine Derivative
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {product.product}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {product.description || 'High-quality iodine derivative designed for pharmaceutical, analytical, and research applications. Provides exceptional purity and consistency for demanding applications.'}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-lg transition-colors duration-200">
                <Mail className="w-4 h-4 mr-2" />
                Request Quote
              </button>
              <button className="inline-flex items-center px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors duration-200">
                <Download className="w-4 h-4 mr-2" />
                Download Specification
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-8">
            <div className="text-center mb-6">
              <div className={`w-24 h-24 bg-${productColor}-500 rounded-full mx-auto mb-4 shadow-lg relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 transform -skew-x-12 animate-pulse"></div>
                <div className="flex items-center justify-center h-full">
                  <Atom className="w-12 h-12 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{product.product}</h3>
              {product.CASNo && <p className="text-gray-600">CAS: {product.CASNo}</p>}
              {product.molecularFormula && <p className="text-gray-600">Formula: {product.molecularFormula}</p>}
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Shield className="w-5 h-5 text-green-600" />
                <span className="text-gray-700">High Purity Grade</span>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">Pharmaceutical Quality</span>
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
            <div className="bg-gradient-to-r from-violet-500 to-purple-500 text-white px-6 py-4">
              <h3 className="text-lg font-semibold">Product Identification</h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {basicInfo.map((info, index) => (
                  <div key={index} className="bg-violet-50 rounded-lg p-4">
                    <div className="text-sm font-medium text-gray-600 mb-1">{info.label}</div>
                    <div className="text-lg font-bold text-gray-900">{info.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Specifications */}
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

        {/* Applications */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Applications</h2>
          <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {applications.map((application, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className={`w-8 h-8 bg-${productColor}-500 rounded-full flex items-center justify-center flex-shrink-0`}>
                    <Atom className="w-4 h-4 text-white" />
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

        {/* Quality Assurance */}
        <div className="bg-gradient-to-r from-gray-900 to-violet-900 rounded-2xl p-8 lg:p-12 text-white mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Quality Assurance</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Our iodine derivatives undergo rigorous testing and quality control processes to ensure they meet the highest standards for pharmaceutical and analytical applications.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Beaker className="w-5 h-5 text-violet-400" />
                  <span>Comprehensive analytical testing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <TestTube className="w-5 h-5 text-green-400" />
                  <span>Pharmaceutical grade verification</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-blue-400" />
                  <span>Consistent batch quality</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-32 h-32 bg-white/10 rounded-full mb-4">
                <Award className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Certified Quality</h3>
              <p className="text-gray-300">Pharmaceutical grade manufacturing</p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center bg-violet-50 rounded-2xl p-8 lg:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Need {product.product}?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact our technical team for detailed specifications, samples, or custom requirements. We provide comprehensive support for all iodine derivative applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-lg transition-colors duration-200"
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

export default IodineDerivativeDetail;