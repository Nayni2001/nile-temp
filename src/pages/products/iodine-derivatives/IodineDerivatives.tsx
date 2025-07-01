import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles, Shield, Award, CheckCircle, ArrowRight, Beaker, Globe, Search, X, FlaskRound as Flask, Atom, TestTube } from 'lucide-react';
import { iodineDerivativesData, getProductColor, getProductId } from '../../../data/iodineDerivativesData';

const IodineDerivatives = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const products = iodineDerivativesData.details.products;

  // Filter products based on search term with safe property access
  const filteredProducts = useMemo(() => {
    if (!searchTerm.trim()) {
      return products;
    }

    const searchLower = searchTerm.toLowerCase().trim();
    
    return products.filter(product => {
      try {
        // Search in product name
        if (product.product && product.product.toLowerCase().includes(searchLower)) {
          return true;
        }
        
        // Search in CAS number
        if (product.CASNo && product.CASNo.toLowerCase().includes(searchLower)) {
          return true;
        }
        
        // Search in molecular formula
        if (product.molecularFormula && product.molecularFormula.toLowerCase().includes(searchLower)) {
          return true;
        }
        
        // Search in code number
        if (product.codeNumber && product.codeNumber.toLowerCase().includes(searchLower)) {
          return true;
        }
        
        // Search in description
        if (product.description && product.description.toLowerCase().includes(searchLower)) {
          return true;
        }
        
        return false;
      } catch (error) {
        console.error('Error filtering product:', product, error);
        return false;
      }
    });
  }, [products, searchTerm]);

  const clearSearch = () => {
    setSearchTerm('');
  };

  const features = [
    {
      icon: Sparkles,
      title: 'High Purity',
      description: 'Ultra-pure iodine compounds for critical applications'
    },
    {
      icon: Shield,
      title: 'Quality Assured',
      description: 'Rigorous testing and quality control processes'
    },
    {
      icon: Globe,
      title: 'Pharmaceutical Grade',
      description: 'Suitable for pharmaceutical and analytical applications'
    },
    {
      icon: Beaker,
      title: 'Research Quality',
      description: 'Ideal for research and development applications'
    }
  ];

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
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-violet-100 text-violet-800 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Iodine Derivatives
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Iodine <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-purple-600">Derivatives</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            {iodineDerivativesData.details.description}
          </p>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our comprehensive portfolio includes organic and inorganic iodine compounds with exceptional purity levels for pharmaceutical, analytical, and research applications.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-12">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by product name, CAS number, molecular formula, or code..."
                className="w-full pl-12 pr-12 py-4 bg-white border border-gray-300 rounded-2xl shadow-sm focus:ring-2 focus:ring-violet-500 focus:border-transparent text-gray-900 placeholder-gray-500 text-lg"
              />
              {searchTerm && (
                <button
                  onClick={clearSearch}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>
            
            {/* Search Results Counter */}
            {searchTerm && (
              <div className="mt-4 text-center">
                <p className="text-gray-600">
                  {filteredProducts.length === 0 ? (
                    <span className="text-red-600">No products found matching "{searchTerm}"</span>
                  ) : (
                    <>
                      Found <span className="font-semibold text-violet-600">{filteredProducts.length}</span> 
                      {filteredProducts.length === 1 ? ' product' : ' products'} matching "{searchTerm}"
                    </>
                  )}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-violet-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-violet-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Products Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {searchTerm ? 'Search Results' : 'Our Iodine Derivative Products'}
          </h2>
          
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Products Found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search terms or browse all products by clearing the search.
              </p>
              <button
                onClick={clearSearch}
                className="inline-flex items-center px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-lg transition-colors duration-200"
              >
                View All Products
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => {
                const productColor = getProductColor(product.product);
                const productId = getProductId(product.product);
                
                return (
                  <Link
                    key={index}
                    to={`/products/iodine-derivatives/${productId}`}
                    className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="p-8">
                      <div className="flex items-center justify-between mb-6">
                        <div className={`w-16 h-16 bg-${productColor}-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative overflow-hidden`}>
                          <div className={`w-8 h-8 bg-${productColor}-500 rounded-full animate-pulse`}></div>
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 transform -skew-x-12 animate-pulse"></div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium text-gray-500">CAS No.</div>
                          <div className="text-sm font-bold text-gray-900">{product.CASNo || 'N/A'}</div>
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-violet-600 transition-colors duration-200 line-clamp-2">
                        {product.product}
                      </h3>
                      
                      <div className="space-y-2 mb-6">
                        {product.molecularFormula && (
                          <div className="text-sm">
                            <span className="text-gray-500">Formula:</span>
                            <p className="font-medium text-gray-900 mt-1 text-xs">{product.molecularFormula}</p>
                          </div>
                        )}
                        {product.molecularWeight && (
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-500">MW:</span>
                            <span className="font-medium text-gray-900">{product.molecularWeight}</span>
                          </div>
                        )}
                        {product.codeNumber && (
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Code:</span>
                            <span className="font-medium text-gray-900">{product.codeNumber}</span>
                          </div>
                        )}
                        {product.description && (
                          <div className="text-sm">
                            <span className="text-gray-500">Description:</span>
                            <p className="font-medium text-gray-900 mt-1 text-xs">{product.description}</p>
                          </div>
                        )}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-600">High Purity</span>
                        </div>
                        <div className="flex items-center text-violet-600 font-medium">
                          View Details
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>

        {/* Applications */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Applications</h2>
          <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {applications.map((application, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Atom className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">{application}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technical Excellence */}
        <div className="bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-white mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Pharmaceutical & Research Excellence</h2>
            <p className="text-xl text-violet-100 mb-8 max-w-3xl mx-auto">
              Our iodine derivatives are engineered for the most demanding pharmaceutical and analytical applications, offering exceptional purity and consistency.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Flask className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-bold mb-2">Pharmaceutical Grade</h3>
                <p className="text-violet-100 text-sm">Meeting USP/EP standards</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <TestTube className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-bold mb-2">Analytical Quality</h3>
                <p className="text-violet-100 text-sm">Precise analytical applications</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Award className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-bold mb-2">Quality Certified</h3>
                <p className="text-violet-100 text-sm">International standards compliance</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center bg-gray-50 rounded-2xl p-8 lg:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Need Iodine Derivatives for Your Application?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact our technical team to discuss your specific iodine derivative requirements. We provide custom solutions and expert guidance for pharmaceutical and research applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-lg transition-colors duration-200"
            >
              Get Quote
            </Link>
            <button className="inline-flex items-center px-8 py-3 bg-white hover:bg-gray-50 text-gray-700 font-medium rounded-lg border border-gray-300 transition-colors duration-200">
              Download Catalog
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IodineDerivatives;