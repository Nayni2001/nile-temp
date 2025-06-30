import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Droplet, Eye, Shield, Award, CheckCircle, ArrowRight, Beaker, Globe, Search, X } from 'lucide-react';
import { foodColorsData, getProductColor, getProductId } from '../../../data/foodColorsData';

const FoodColors = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const products = foodColorsData.details.FoodAndLakeColours;

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
        
        // Search in EEC number
        if (product.EEC_no && product.EEC_no.toLowerCase().includes(searchLower)) {
          return true;
        }
        
        // Search in CAS number
        if (product.specifications?.CASNo && product.specifications.CASNo.toLowerCase().includes(searchLower)) {
          return true;
        }
        
        // Search in product code
        if (product.code && product.code.toLowerCase().includes(searchLower)) {
          return true;
        }
        
        // Search in colour index number
        if (product.specifications?.ColourIndexNo && product.specifications.ColourIndexNo.toLowerCase().includes(searchLower)) {
          return true;
        }
        
        // Search in food colour number
        if (product.specifications?.FoodColourNo && product.specifications.FoodColourNo.toLowerCase().includes(searchLower)) {
          return true;
        }
        
        // Search in FD&C number
        if (product.specifications?.['FD&CNo'] && product.specifications['FD&CNo'].toLowerCase().includes(searchLower)) {
          return true;
        }
        
        // Search in chemical class
        if (product.specifications?.Class && product.specifications.Class.toLowerCase().includes(searchLower)) {
          return true;
        }
        
        // Search in EEC number from specifications
        if (product.specifications?.EECNo && product.specifications.EECNo.toLowerCase().includes(searchLower)) {
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
      icon: Shield,
      title: 'Food Grade Quality',
      description: 'All products meet international food safety standards'
    },
    {
      icon: Award,
      title: 'Certified Manufacturing',
      description: 'ISO certified production processes'
    },
    {
      icon: Globe,
      title: 'Global Compliance',
      description: 'EEC, FDA, and international approvals'
    },
    {
      icon: Beaker,
      title: 'Quality Testing',
      description: 'Rigorous quality control and testing'
    }
  ];

  const applications = [
    'Food & Beverage Industry',
    'Confectionery Products',
    'Bakery Applications',
    'Dairy Products',
    'Pharmaceutical Coatings',
    'Cosmetic Applications'
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
          <div className="inline-flex items-center px-4 py-2 bg-pink-100 text-pink-800 rounded-full text-sm font-medium mb-6">
            <Droplet className="w-4 h-4 mr-2" />
            Food Colors
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Food & Lake <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Colors</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            {foodColorsData.details.description}
          </p>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our comprehensive range of food colors meets international safety standards and regulatory requirements, providing vibrant, stable coloring solutions for the food and beverage industry.
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
                placeholder="Search by product name, EEC number, CAS number, or chemical class..."
                className="w-full pl-12 pr-12 py-4 bg-white border border-gray-300 rounded-2xl shadow-sm focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-900 placeholder-gray-500 text-lg"
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
                      Found <span className="font-semibold text-pink-600">{filteredProducts.length}</span> 
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
              <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Products Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {searchTerm ? 'Search Results' : 'Our Food Color Products'}
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
                className="inline-flex items-center px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white font-medium rounded-lg transition-colors duration-200"
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
                    to={`/products/food-colors/${productId}`}
                    className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="p-8">
                      <div className="flex items-center justify-between mb-6">
                        <div className={`w-16 h-16 bg-${productColor}-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <div className={`w-8 h-8 bg-${productColor}-500 rounded-full`}></div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium text-gray-500">Code</div>
                          <div className="text-lg font-bold text-gray-900">{product.code || 'N/A'}</div>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors duration-200">
                        {product.product}
                      </h3>
                      
                      <div className="space-y-2 mb-6">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">EEC No:</span>
                          <span className="font-medium text-gray-900">{product.EEC_no}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">CAS No:</span>
                          <span className="font-medium text-gray-900">{product.specifications?.CASNo || 'N/A'}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Class:</span>
                          <span className="font-medium text-gray-900">{product.specifications?.Class || 'N/A'}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-600">Food Grade</span>
                        </div>
                        <div className="flex items-center text-pink-600 font-medium">
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
          <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {applications.map((application, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-700 font-medium">{application}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quality Standards */}
        <div className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-white mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Quality & Safety Standards</h2>
            <p className="text-xl text-pink-100 mb-8 max-w-3xl mx-auto">
              All our food colors comply with international safety standards and regulations, ensuring safe use in food and beverage applications.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Eye className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-bold mb-2">Visual Quality</h3>
                <p className="text-pink-100 text-sm">Consistent color and appearance</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Shield className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-bold mb-2">Safety Testing</h3>
                <p className="text-pink-100 text-sm">Heavy metals and purity analysis</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Award className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-bold mb-2">Certifications</h3>
                <p className="text-pink-100 text-sm">International regulatory compliance</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center bg-gray-50 rounded-2xl p-8 lg:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Need Food Colors for Your Application?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact our technical team to discuss your specific requirements. We provide custom solutions and technical support for all food coloring applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-pink-600 hover:bg-pink-700 text-white font-medium rounded-lg transition-colors duration-200"
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

export default FoodColors;