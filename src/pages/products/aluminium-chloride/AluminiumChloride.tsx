import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FlaskRound as Flask, Download, Mail, Shield, Award, CheckCircle, Beaker, AlertTriangle, Zap, Star, Thermometer, Scale } from 'lucide-react';
import { aluminiumChlorideData, applications, safetyFeatures } from '../../../data/aluminiumChlorideData';

const AluminiumChloride = () => {
  const data = aluminiumChlorideData;

  // Basic Information
  const basicInfo = [
    { label: 'Product Name', value: data.productName },
    { label: 'CAS Number', value: data.casNo },
    { label: 'Code Number', value: data.codeNo },
    { label: 'Molecular Formula', value: data.formula.join(' / ') },
    { label: 'Molecular Weight', value: data.molecularWeight.map(w => `${w} g/mol`).join(' / ') },
    { label: 'Appearance', value: data.appearance }
  ];

  // Quality Specifications
  const qualitySpecs = [
    { label: 'Purity', value: data.specifications.purity, icon: Award },
    { label: 'Iron Content', value: `${data.specifications.ironContentPPM} ppm`, icon: Shield },
    { label: 'Water Insolubles', value: data.specifications.waterInsolubles, icon: Beaker },
    { label: 'Non-Volatiles', value: data.specifications.nonVolatiles, icon: Flask },
    { label: 'Other Metals', value: `${data.specifications.otherMetalsPPM} ppm max`, icon: AlertTriangle }
  ];

  // Physical Properties
  const physicalProps = [
    { label: 'Specific Gravity', value: data.otherSpecifications.specificGravity, icon: Scale },
    { label: 'Liquid Density', value: data.otherSpecifications.liquidDensity, icon: Scale },
    { label: 'Melting Point', value: data.otherSpecifications.meltingPoint, icon: Thermometer },
    { label: 'Boiling Point', value: data.otherSpecifications.boilingPoint, icon: Thermometer }
  ];

  // Form Supplied
  const formTypes = [
    { type: 'Type 1', description: data.formSupplied.type1, size: 'Fine' },
    { type: 'Type 2', description: data.formSupplied.type2, size: 'Medium' },
    { type: 'Type 3', description: data.formSupplied.type3, size: 'Coarse' }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <Link
          to="/products"
          className="inline-flex items-center text-teal-600 hover:text-teal-700 mb-8 transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Products
        </Link>

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              <Flask className="w-4 h-4 mr-2" />
              Industrial Chemical
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Aluminium Chloride <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-600">Anhydrous</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              High-purity anhydrous aluminium chloride for industrial applications and chemical synthesis. Our production capacity of 500 tons per month ensures reliable supply for your manufacturing needs.
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
              <div className="w-24 h-24 bg-blue-500 rounded-full mx-auto mb-4 shadow-lg flex items-center justify-center">
                <Flask className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{data.productName}</h3>
              <p className="text-gray-600">CAS: {data.casNo}</p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Shield className="w-5 h-5 text-green-600" />
                <span className="text-gray-700">99% Min Purity</span>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">Industrial Grade</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-teal-600" />
                <span className="text-gray-700">500 Tons/Month Capacity</span>
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

        {/* Quality Specifications */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Quality Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {qualitySpecs.map((spec, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <spec.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{spec.label}</h3>
                <div className="text-2xl font-bold text-green-600 mb-2">{spec.value}</div>
                <div className="flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                  <span className="text-xs text-green-600">Complies</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Physical Properties */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Physical Properties</h2>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-4">
              <h3 className="text-lg font-semibold">Thermal & Physical Characteristics</h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {physicalProps.map((prop, index) => (
                  <div key={index} className="bg-purple-50 rounded-lg p-4 flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <prop.icon className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-600">{prop.label}</div>
                      <div className="text-lg font-bold text-gray-900">{prop.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Form Supplied */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Available Forms</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {formTypes.map((form, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Scale className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{form.type}</h3>
                <div className="text-sm text-orange-600 font-medium mb-2">{form.size}</div>
                <p className="text-gray-600 text-sm">{form.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Applications */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Applications</h2>
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {applications.map((application, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center flex-shrink-0">
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

        {/* Production Capacity */}
        <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-2xl p-8 lg:p-12 text-white mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Production Excellence</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Our state-of-the-art manufacturing facility produces high-quality anhydrous aluminium chloride with a monthly capacity of 500 tons, ensuring consistent supply and quality.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Beaker className="w-5 h-5 text-blue-400" />
                  <span>Advanced manufacturing processes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-green-400" />
                  <span>Rigorous quality control</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span>Consistent batch quality</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-32 h-32 bg-white/10 rounded-full mb-4">
                <Flask className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">500 Tons/Month</h3>
              <p className="text-gray-300">Production Capacity</p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center bg-blue-50 rounded-2xl p-8 lg:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Need Aluminium Chloride for Your Application?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact our technical team for detailed specifications, samples, or bulk orders. We provide comprehensive support for all industrial applications.
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

export default AluminiumChloride;