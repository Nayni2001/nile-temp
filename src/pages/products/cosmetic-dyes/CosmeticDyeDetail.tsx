import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Sparkles, Download, Mail, Shield, Award, CheckCircle, Palette, Beaker, AlertTriangle, Heart, Star } from 'lucide-react';
import { cosmeticDyesData, getProductColor } from '../../../data/cosmeticDyesData';

const CosmeticDyeDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  
  const product = cosmeticDyesData.details.products.find(
    p => p.CINo.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') === productId
  );

  if (!product) {
    return (
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link to="/products/cosmetic-dyes" className="text-teal-600 hover:text-teal-700">
            Back to Cosmetic Dyes
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
    { label: 'CAS Number', value: product.CASNo },
    { label: 'INCI Name', value: specs?.INCIName || 'N/A' },
    { label: 'Trade Name', value: specs?.TradeName || 'N/A' },
    { label: 'EINECS No.', value: specs?.EINECSNo || 'N/A' },
    { label: 'HS Code', value: specs?.HSCode || 'N/A' },
    { label: 'Grade', value: specs?.Grade || 'N/A' },
    { label: 'Application', value: specs?.Application || 'Hair Color/Hair Dye' }
  ];

  // Chemical Properties
  const chemicalProps = [
    { label: 'Molecular Formula', value: specs?.MolecularFormula || specs?.ChemicalFormula || 'N/A' },
    { label: 'Molecular Weight', value: specs?.MolecularWeight || specs?.["MolecularWeight_g_per_mole"] || 'N/A' },
    { label: 'Physical Appearance', value: specs?.PhysicalAppearance || 'N/A' },
    { label: 'Shape', value: specs?.Shape || 'N/A' },
    { label: 'Solubility', value: specs?.Solubility || specs?.SolubilityInWater || 'N/A' },
    { label: 'Purity', value: specs?.PurityPercent ? `${specs.PurityPercent}%` : 'N/A' }
  ];

  // Quality Specifications
  const qualitySpecs = [];
  if (specs?.["HPLCPurity_Min98Percent"]) qualitySpecs.push({ label: 'HPLC Purity (Min 98%)', value: specs["HPLCPurity_Min98Percent"] });
  if (specs?.["HPLCPurity_ByAreaMethod_99PercentMin"]) qualitySpecs.push({ label: 'HPLC Purity (99% Min)', value: specs["HPLCPurity_ByAreaMethod_99PercentMin"] });
  if (specs?.["LossOnDrying_135C_8PercentMax"]) qualitySpecs.push({ label: 'Loss on Drying (135°C, 8% Max)', value: specs["LossOnDrying_135C_8PercentMax"] });
  if (specs?.["LossOnDrying_135C_5PercentMax"]) qualitySpecs.push({ label: 'Loss on Drying (135°C, 5% Max)', value: specs["LossOnDrying_135C_5PercentMax"] });
  if (specs?.["MaxAbsorption_482nm_±5nm"]) qualitySpecs.push({ label: 'Max Absorption (482nm ±5nm)', value: specs["MaxAbsorption_482nm_±5nm"] });
  if (specs?.["MaxAbsorption_523nm_±5nm_Range"]) qualitySpecs.push({ label: 'Max Absorption (523nm ±5nm)', value: specs["MaxAbsorption_523nm_±5nm_Range"] });
  if (specs?.["StablePHRange_1percent_solution"]) qualitySpecs.push({ label: 'Stable pH Range (1% solution)', value: specs["StablePHRange_1percent_solution"] });
  if (specs?.["SolventResidues_Insolubles_0_5PercentMax"]) qualitySpecs.push({ label: 'Solvent Residues/Insolubles (0.5% Max)', value: specs["SolventResidues_Insolubles_0_5PercentMax"] });

  // Safety Parameters
  const safetyParams = [];
  if (specs?.["Lead_Pb_10mgPerKg"]) safetyParams.push({ label: 'Lead (Pb)', value: specs["Lead_Pb_10mgPerKg"], limit: '10 mg/kg' });
  if (specs?.["Mercury_Hg_1mgPerKg"]) safetyParams.push({ label: 'Mercury (Hg)', value: specs["Mercury_Hg_1mgPerKg"], limit: '1 mg/kg' });
  if (specs?.["Arsenic_As_2mgPerKg"]) safetyParams.push({ label: 'Arsenic (As)', value: specs["Arsenic_As_2mgPerKg"], limit: '2 mg/kg' });
  if (specs?.["IronContent_100ppmMax"]) safetyParams.push({ label: 'Iron Content', value: specs["IronContent_100ppmMax"], limit: '100 ppm max' });

  const applications = [
    'Hair Coloring Products',
    'Temporary Hair Dyes',
    'Semi-Permanent Hair Colors',
    'Professional Hair Treatments',
    'Beauty Salon Applications',
    'Cosmetic Manufacturing'
  ];

  const safetyFeatures = [
    'Meets international cosmetic safety standards',
    'Low heavy metal content',
    'INCI nomenclature compliant',
    'Cosmetic grade purity',
    'Certificate of analysis provided',
    'Regulatory compliance documentation'
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
            to="/products/cosmetic-dyes"
            className="text-teal-600 hover:text-teal-700 transition-colors duration-200"
          >
            Cosmetic Dyes
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-600">{product.CINo}</span>
        </div>

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Cosmetic Dye
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {product.CINo}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {specs?.Description || 'High-quality cosmetic grade dye meeting international safety standards and regulatory requirements. Suitable for various hair care and beauty applications with excellent color performance and stability.'}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors duration-200">
                <Mail className="w-4 h-4 mr-2" />
                Request Quote
              </button>
              <button className="inline-flex items-center px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors duration-200">
                <Download className="w-4 h-4 mr-2" />
                Download Specification
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
            <div className="text-center mb-6">
              <div className={`w-24 h-24 bg-${productColor}-500 rounded-full mx-auto mb-4 shadow-lg relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 transform -skew-x-12 animate-pulse"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{product.CINo}</h3>
              <p className="text-gray-600">CAS: {product.CASNo}</p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Shield className="w-5 h-5 text-green-600" />
                <span className="text-gray-700">Cosmetic Grade Certified</span>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">INCI Compliant</span>
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
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-4">
              <h3 className="text-lg font-semibold">Product Identification</h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {basicInfo.map((info, index) => (
                  <div key={index} className="bg-purple-50 rounded-lg p-4">
                    <div className="text-sm font-medium text-gray-600 mb-1">{info.label}</div>
                    <div className="text-lg font-bold text-gray-900">{info.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Chemical Properties */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Chemical Properties</h2>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-4">
              <h3 className="text-lg font-semibold">Chemical & Physical Characteristics</h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {chemicalProps.map((prop, index) => (
                  <div key={index} className="bg-blue-50 rounded-lg p-4">
                    <div className="text-sm font-medium text-gray-600 mb-1">{prop.label}</div>
                    <div className="text-lg font-bold text-gray-900">{prop.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quality Specifications */}
        {qualitySpecs.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Quality Specifications</h2>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-6 py-4">
                <h3 className="text-lg font-semibold">Quality Control Parameters</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {qualitySpecs.map((spec, index) => (
                    <div key={index} className="bg-green-50 rounded-lg p-4">
                      <div className="text-sm font-medium text-gray-600 mb-1">{spec.label}</div>
                      <div className="text-lg font-bold text-gray-900">{spec.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Safety Parameters */}
        {safetyParams.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Safety Parameters</h2>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-4 flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2" />
                <h3 className="text-lg font-semibold">Heavy Metals & Safety Analysis</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {safetyParams.map((param, index) => (
                    <div key={index} className="bg-red-50 rounded-lg p-4 text-center">
                      <div className="text-sm font-medium text-gray-600 mb-2">{param.label}</div>
                      <div className="text-xl font-bold text-red-600">{param.value}</div>
                      <div className="text-xs text-gray-500 mt-1">{param.limit}</div>
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
        )}

        {/* Applications */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Applications</h2>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {applications.map((application, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className={`w-8 h-8 bg-${productColor}-500 rounded-full flex items-center justify-center flex-shrink-0`}>
                    <Heart className="w-4 h-4 text-white" />
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
                Our cosmetic dyes undergo rigorous testing and quality control processes to ensure they meet the highest international standards for cosmetic safety and performance.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Beaker className="w-5 h-5 text-purple-400" />
                  <span>Comprehensive analytical testing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-green-400" />
                  <span>Cosmetic safety compliance verification</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-blue-400" />
                  <span>INCI nomenclature compliance</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-32 h-32 bg-white/10 rounded-full mb-4">
                <Award className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Certified Quality</h3>
              <p className="text-gray-300">Cosmetic grade manufacturing processes</p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center bg-purple-50 rounded-2xl p-8 lg:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Need {product.CINo}?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact our technical team for detailed specifications, samples, or custom requirements. We provide comprehensive support for all cosmetic dye applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors duration-200"
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

export default CosmeticDyeDetail;