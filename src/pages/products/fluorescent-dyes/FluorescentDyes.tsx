import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Eye, Shield, Award, CheckCircle, ArrowRight, Beaker, Globe, Search, X, Zap, Sparkles, TestTube } from 'lucide-react';
import { fluorescentDyesData, getProductColor, getProductId } from '../../../data/fluorescentDyesData';

const FluorescentDyes = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const products = fluorescentDyesData.details.products;

  // Filter products based on search term with safe property access
  const filteredProducts = useMemo(() => {
    if (!searchTerm.trim()) {
      return products;
    }

    const searchLower = searchTerm.toLowerCase().trim();
    
    return products.filter(product => {
      try {
        // Search in product name
        if (product.ProductName && product.ProductName.toLowerCase().includes(searchLower)) {
          return true;
        }
        
        // Search in CAS number
        if (product.CASNo && product.CASNo.toLowerCase().includes(searchLower)) {
          return true;
        }
        
        // Search in EINECS number
        if (product.EINECS && product.EINECS.toLowerCase().includes(searchLower)) {
          return true;
        }
        
        // Search in equivalent
        if (product.Equivalent && product.Equivalent.toLowerCase().includes(searchLower)) {
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
      icon: Eye,
      title: 'High Visibility',
      description: 'Exceptional fluorescent properties for maximum visibility'
    },
    {
      icon: Shield,
      title: 'Quality Assured',
      description: 'Consistent quality and performance standards'
    },
    {
      icon: Globe,
      title: 'Global Standards',
      description: 'Meeting international regulatory requirements'
    },
    {
      icon: Beaker,
      title: 'Technical Support',
      description: 'Expert guidance for optimal application'
    }
  ];

  const applications = [
    'Safety & Warning Signs',
    'Textile & Fabric Dyeing',
    'Plastic & Polymer Coloring',
    'Printing Inks',
    'Paints & Coatings',
    'Security Applications',
    'Analytical Chemistry',
    'Biological Staining'
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
          <div className="inline-flex items-center px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium mb-6">
            <Eye className="w-4 h-4 mr-2" />
            Fluorescent Dyes
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Fluorescent <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-600">Dyes</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            {fluorescentDyesData.details.description}
          </p>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our comprehensive range of fluorescent dyes provides exceptional brightness and visibility for various industrial and commercial applications, from safety signage to analytical chemistry.
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
                placeholder="Search by product name, CAS number, EINECS, or equivalent..."
                className="w-full pl-12 pr-12 py-4 bg-white border border-gray-300 rounded-2xl shadow-sm focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-gray-900 placeholder-gray-500 text-lg"
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
                      Found <span className="font-semibold text-yellow-600">{filteredProducts.length}</span> 
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
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-yellow-600" />
              </div> 
              <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Products Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {searchTerm ? 'Search Results' : 'Our Fluorescent Dye Products'}
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
                className="inline-flex items-center px-6 py-3 bg-yellow-600 hover:bg-yellow-700 text-white font-medium rounded-lg transition-colors duration-200"
              >
                View All Products
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => {
                const productColor = getProductColor(product.ProductName);
                
                return (
                  <div
                    key={index}
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
                          <div className="text-sm font-bold text-gray-900">{product.CASNo}</div>
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors duration-200 line-clamp-2">
                        {product.ProductName}
                      </h3>
                      
                      <div className="space-y-2 mb-6">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">EINECS:</span>
                          <span className="font-medium text-gray-900">{product.EINECS || 'N/A'}</span>
                        </div>
                        {product.Equivalent && (
                          <div className="text-sm">
                            <span className="text-gray-500">Equivalent:</span>
                            <p className="font-medium text-gray-900 mt-1 text-xs leading-relaxed">{product.Equivalent}</p>
                          </div>
                        )}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Sparkles className="w-4 h-4 text-yellow-500" />
                          <span className="text-sm text-gray-600">Fluorescent</span>
                        </div>
                        <div className="flex items-center text-yellow-600 font-medium">
                          <Eye className="w-4 h-4 mr-1" />
                          High Visibility
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Applications */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Applications</h2>
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {applications.map((application, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">{application}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technical Excellence */}
        <div className="bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl p-8 lg:p-12 text-white mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Technical Excellence</h2>
            <p className="text-xl text-yellow-100 mb-8 max-w-3xl mx-auto">
              Our fluorescent dyes are engineered for superior performance, offering exceptional brightness, stability, and consistency across diverse applications.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Eye className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-bold mb-2">Maximum Visibility</h3>
                <p className="text-yellow-100 text-sm">Exceptional fluorescent properties</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <TestTube className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-bold mb-2">Quality Control</h3>
                <p className="text-yellow-100 text-sm">Rigorous testing and analysis</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Award className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-bold mb-2">Industry Standards</h3>
                <p className="text-yellow-100 text-sm">Meeting global requirements</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center bg-gray-50 rounded-2xl p-8 lg:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Need Fluorescent Dyes for Your Application?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact our technical team to discuss your specific fluorescent dye requirements. We provide custom solutions and expert guidance for optimal results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-yellow-600 hover:bg-yellow-700 text-white font-medium rounded-lg transition-colors duration-200"
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

export default FluorescentDyes;