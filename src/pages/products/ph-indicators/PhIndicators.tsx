import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Palette, Shield, Award, CheckCircle, ArrowRight, Beaker, Globe, Search, X, TestTube, Zap, FlaskRound as Flask } from 'lucide-react';
import { phIndicatorsData, getProductColor, getAllProducts } from '../../../data/phIndicatorsData';
import { toTitleCase } from '../../../utils/stringUtils';

const PhIndicators = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubgroup, setSelectedSubgroup] = useState('All');
  const allProducts = getAllProducts();

  // Filter products based on search term and subgroup
  const filteredProducts = useMemo(() => {
    let filtered = allProducts;

    // Filter by subgroup
    if (selectedSubgroup !== 'All') {
      filtered = filtered.filter(product => product.subgroup === selectedSubgroup);
    }

    // Filter by search term
    if (searchTerm.trim()) {
      const searchLower = searchTerm.toLowerCase().trim();
      filtered = filtered.filter(product => {
        try {
          // Search in product name
          if (product.product && product.product.toLowerCase().includes(searchLower)) {
            return true;
          }
          
          // Search in CAS number
          if (product.CASNo && product.CASNo.toLowerCase().includes(searchLower)) {
            return true;
          }
          
          // Search in CI number
          if (product.CINo && product.CINo.toLowerCase().includes(searchLower)) {
            return true;
          }
          
          // Search in code
          if (product.code && product.code.toLowerCase().includes(searchLower)) {
            return true;
          }
          
          return false;
        } catch (error) {
          console.error('Error filtering product:', product, error);
          return false;
        }
      });
    }

    return filtered;
  }, [allProducts, searchTerm, selectedSubgroup]);

  const clearSearch = () => {
    setSearchTerm('');
  };

  const subgroups = ['All', 'Indicators', 'New Indicators'];

  const features = [
    {
      icon: Palette,
      title: 'Certified Grade',
      description: 'All indicators meet international standards'
    },
    {
      icon: Shield,
      title: 'Quality Assured',
      description: 'Rigorous testing and quality control processes'
    },
    {
      icon: Globe,
      title: 'International Standards',
      description: 'Compliant with global analytical requirements'
    },
    {
      icon: Beaker,
      title: 'Technical Support',
      description: 'Expert guidance for analytical applications'
    }
  ];

  const applications = [
    'pH Measurement',
    'Analytical Chemistry',
    'Quality Control',
    'Research & Development',
    'Educational Laboratories',
    'Industrial Testing',
    'Environmental Analysis',
    'Pharmaceutical Testing'
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
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-6">
            <Palette className="w-4 h-4 mr-2" />
            pH Indicators
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            pH <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">Indicators</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            {phIndicatorsData.details.description}
          </p>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our comprehensive range includes traditional indicators and new formulations, providing accurate pH measurements for analytical, research, and industrial applications.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-6">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by product name, CAS number, CI number, or code..."
                className="w-full pl-12 pr-12 py-4 bg-white border border-gray-300 rounded-2xl shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 placeholder-gray-500 text-lg"
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

            {/* Subgroup Filter */}
            <div className="flex flex-wrap gap-2 justify-center">
              {subgroups.map((subgroup) => (
                <button
                  key={subgroup}
                  onClick={() => setSelectedSubgroup(subgroup)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    selectedSubgroup === subgroup
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-purple-100 hover:text-purple-700'
                  }`}
                >
                  {subgroup}
                </button>
              ))}
            </div>
            
            {/* Search Results Counter */}
            {(searchTerm || selectedSubgroup !== 'All') && (
              <div className="mt-4 text-center">
                <p className="text-gray-600">
                  {filteredProducts.length === 0 ? (
                    <span className="text-red-600">No products found</span>
                  ) : (
                    <>
                      Found <span className="font-semibold text-purple-600">{filteredProducts.length}</span> 
                      {filteredProducts.length === 1 ? ' product' : ' products'}
                      {selectedSubgroup !== 'All' && ` in ${selectedSubgroup}`}
                      {searchTerm && ` matching "${searchTerm}"`}
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
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Products Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {searchTerm || selectedSubgroup !== 'All' ? 'Search Results' : 'Our pH Indicator Products'}
          </h2>
          
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Products Found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search terms or subgroup filter, or browse all products.
              </p>
              <button
                onClick={() => {
                  clearSearch();
                  setSelectedSubgroup('All');
                }}
                className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors duration-200"
              >
                View All Products
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => {
                const productColor = getProductColor(product.product);
                const hasImage = product.specifications?.Image;
                
                return (
                  <Link
                    key={index}
                    to={`/products/ph-indicators/${product.id}`}
                    className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="p-8">
                      <div className="flex items-center justify-between mb-6">
                        <div className={`w-16 h-16 bg-${productColor}-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative overflow-hidden`}>
                          <div className={`w-8 h-8 bg-${productColor}-500 rounded-full animate-pulse`}></div>
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 transform -skew-x-12 animate-pulse"></div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium text-gray-500">Code</div>
                          <div className="text-sm font-bold text-gray-900">{product.code}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          product.subgroup === 'Indicators' 
                            ? 'bg-blue-100 text-blue-800' 
                            : 'bg-green-100 text-green-800'
                        }`}>
                          {product.subgroup}
                        </span>
                        {hasImage && (
                          <span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">
                            Image Available
                          </span>
                        )}
                        {product.msds && (
                          <span className="px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800">
                            MSDS Available
                          </span>
                        )}
                      </div>
                      
                      <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-200 line-clamp-2">
                        {toTitleCase(product.product)}
                      </h3>
                      
                      <div className="space-y-2 mb-6">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">CAS No:</span>
                          <span className="font-medium text-gray-900">{product.CASNo || 'N/A'}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">CI No:</span>
                          <span className="font-medium text-gray-900">{product.CINo || 'N/A'}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-600">Certified Grade</span>
                        </div>
                        <div className="flex items-center text-purple-600 font-medium">
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
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {applications.map((application, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <TestTube className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">{application}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technical Excellence */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 lg:p-12 text-white mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Analytical Excellence</h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Our pH indicators are engineered for precision and reliability, offering exceptional accuracy and consistency for demanding analytical applications.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Flask className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-bold mb-2">Certified Grade</h3>
                <p className="text-purple-100 text-sm">Meeting international standards</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Zap className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-bold mb-2">High Precision</h3>
                <p className="text-purple-100 text-sm">Accurate pH measurements</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Award className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-bold mb-2">Quality Assured</h3>
                <p className="text-purple-100 text-sm">Rigorous quality control</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center bg-gray-50 rounded-2xl p-8 lg:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Need pH Indicators for Your Analysis?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact our technical team to discuss your specific pH indicator requirements. We provide custom solutions and expert guidance for analytical applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors duration-200"
            >
              Get Quote
            </Link>
             <Link to="/products" className="inline-flex items-center px-8 py-3 bg-white hover:bg-gray-50 text-gray-700 font-medium rounded-lg border border-gray-300 transition-colors duration-200">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Explore Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhIndicators;