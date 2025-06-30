import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Droplet, Download, Mail, Shield, Award, CheckCircle, Eye, Beaker, AlertTriangle } from 'lucide-react';
import { foodColorsData, getProductColor } from '../../../data/foodColorsData';

const FoodColorDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  
  const product = foodColorsData.details.FoodAndLakeColours.find(
    p => p.product.toLowerCase().replace(/\s+/g, '-') === productId
  );

  if (!product) {
    return (
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link to="/products/food-colors" className="text-teal-600 hover:text-teal-700">
            Back to Food Colors
          </Link>
        </div>
      </div>
    );
  }

  const productColor = getProductColor(product.product);
  const specs = product.specifications;

  const basicInfo = [
    { label: 'Product Code', value: product.code || 'N/A' },
    { label: 'EEC Number', value: product.EEC_no },
    { label: 'CAS Number', value: specs.CASNo },
    { label: 'Colour Index No.', value: specs.ColourIndexNo },
    { label: 'Food Colour No.', value: specs.FoodColourNo },
    { label: 'FD&C No.', value: specs['FD&CNo'] || 'N/A' },
    { label: 'IS No.', value: specs.ISNo || 'N/A' },
    { label: 'Chemical Class', value: specs.Class }
  ];

  const qualitySpecs = [
    { label: 'Total Dye Content (Min)', value: specs.TotalDyeContentMin },
    { label: 'Volatile Matter (Max)', value: specs.VolatileMatterMax },
    { label: 'Water Solubility (20°C)', value: specs.SolubilityInWater20C },
    { label: 'Combined Ether Extract (Max)', value: specs.CombinedEtherExtractMax },
    { label: 'Water Insoluble (Max)', value: specs.WaterInsolubleMax },
    { label: 'Subsidiary Dyes (Max)', value: specs.SubsidiaryDyesMax },
    { label: 'Dyes Intermediate (Max)', value: specs.DyesIntermediateMax }
  ];

  const stabilityData = [
    { label: 'Light Stability', value: specs.LightStability, max: '8' },
    { label: 'Heat Stability (100°C)', value: specs.HeatStability100C, max: '5' },
    { label: 'Alkali Stability', value: specs.AlkaliStability, max: '5' }
  ];

  const heavyMetals = [
    { label: 'Lead', value: specs.Lead },
    { label: 'Arsenic', value: specs.Arsenic },
    { label: 'Mercury', value: specs.Mercury },
    { label: 'Heavy Metals (Total)', value: specs.HeavyMetals }
  ];

  const applications = [
    'Food & Beverage Coloring',
    'Confectionery Products',
    'Bakery Applications',
    'Dairy Product Coloring',
    'Pharmaceutical Coatings',
    'Cosmetic Applications',
    'Lake Color Manufacturing'
  ];

  const safetyFeatures = [
    'Meets international food safety standards',
    'Low heavy metal content',
    'Consistent batch-to-batch quality',
    'Regulatory compliance documentation',
    'Certificate of analysis provided',
    'Kosher and Halal certified options'
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
            to="/products/food-colors"
            className="text-teal-600 hover:text-teal-700 transition-colors duration-200"
          >
            Food Colors
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-600">{product.product}</span>
        </div>

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-pink-100 text-pink-800 rounded-full text-sm font-medium mb-6">
              <Droplet className="w-4 h-4 mr-2" />
              Food Color
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {product.product}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              High-quality food grade color meeting international safety standards and regulatory requirements. Suitable for various food and beverage applications with excellent stability and performance characteristics.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white font-medium rounded-lg transition-colors duration-200">
                <Mail className="w-4 h-4 mr-2" />
                Request Quote
              </button>
              <button className="inline-flex items-center px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors duration-200">
                <Download className="w-4 h-4 mr-2" />
                Download Specification
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8">
            <div className="text-center mb-6">
              <div className={`w-24 h-24 bg-${productColor}-500 rounded-full mx-auto mb-4 shadow-lg`}></div>
              <h3 className="text-2xl font-bold text-gray-900">{product.product}</h3>
              <p className="text-gray-600">EEC: {product.EEC_no}</p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Shield className="w-5 h-5 text-green-600" />
                <span className="text-gray-700">Food Grade Certified</span>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">International Standards</span>
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
            <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-4">
              <h3 className="text-lg font-semibold">Product Identification</h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {basicInfo.map((info, index) => (
                  <div key={index} className="bg-pink-50 rounded-lg p-4">
                    <div className="text-sm font-medium text-gray-600 mb-1">{info.label}</div>
                    <div className="text-lg font-bold text-gray-900">{info.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quality Specifications */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Quality Specifications</h2>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-4">
              <h3 className="text-lg font-semibold">Chemical & Physical Properties</h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {qualitySpecs.map((spec, index) => (
                  <div key={index} className="bg-blue-50 rounded-lg p-4">
                    <div className="text-sm font-medium text-gray-600 mb-1">{spec.label}</div>
                    <div className="text-lg font-bold text-gray-900">{spec.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stability Data */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Stability Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stabilityData.map((stability, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{stability.label}</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">{stability.value}</div>
                <div className="text-sm text-gray-600">out of {stability.max}</div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                  <div 
                    className="bg-green-500 h-2 rounded-full" 
                    style={{ width: `${(parseInt(stability.value) / parseInt(stability.max)) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Heavy Metals Analysis */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Heavy Metals Analysis</h2>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-4 flex items-center">
              <AlertTriangle className="w-5 h-5 mr-2" />
              <h3 className="text-lg font-semibold">Safety Parameters</h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {heavyMetals.map((metal, index) => (
                  <div key={index} className="bg-red-50 rounded-lg p-4 text-center">
                    <div className="text-sm font-medium text-gray-600 mb-2">{metal.label}</div>
                    <div className="text-xl font-bold text-red-600">{metal.value}</div>
                    <div className="flex items-center justify-center mt-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                      <span className="text-xs text-green-600">Safe Level</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Applications */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Applications</h2>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {applications.map((application, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className={`w-8 h-8 bg-${productColor}-500 rounded-full flex items-center justify-center flex-shrink-0`}>
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-700 font-medium">{application}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Safety Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Safety & Quality Features</h2>
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
        <div className="bg-gradient-to-r from-gray-900 to-purple-900 rounded-2xl p-8 lg:p-12 text-white mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Quality Assurance</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Our food colors undergo rigorous testing and quality control processes to ensure they meet the highest international standards for food safety and performance.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Beaker className="w-5 h-5 text-pink-400" />
                  <span>Comprehensive analytical testing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-green-400" />
                  <span>Food safety compliance verification</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-blue-400" />
                  <span>International certification standards</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-32 h-32 bg-white/10 rounded-full mb-4">
                <Award className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Certified Quality</h3>
              <p className="text-gray-300">ISO certified manufacturing processes</p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center bg-pink-50 rounded-2xl p-8 lg:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Need {product.product}?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact our technical team for detailed specifications, samples, or custom requirements. We provide comprehensive support for all food coloring applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-pink-600 hover:bg-pink-700 text-white font-medium rounded-lg transition-colors duration-200"
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

export default FoodColorDetail;