import { Link } from 'react-router-dom';
import { FlaskRound as Flask, Zap, Palette, Beaker, TestTube, ArrowRight, Droplet, Atom, Sparkles, Eye, Globe } from 'lucide-react';

const Products = () => {
  const products = [
    {
      title: 'pH Indicators',
      description: 'Certified grade pH indicators meeting international standards for accurate measurements in various applications.',
      features: ['Certified grade', 'International standards', 'Accurate measurements', 'Various applications'],
      icon: Palette,
      color: 'purple',
      link: '/products/ph-indicators'
    },
    {
      title: 'Food Colors',
      description: 'Safe and approved food coloring agents for food and beverage industry applications.',
      features: ['Food grade quality', 'FDA approved', 'Natural & synthetic', 'Wide color range'],
      icon: Droplet,
      color: 'pink',
      link: '/products/food-colors'
    },
    {
      title: 'Chemicals (Bulk)',
      description: 'Tech & pure grade chemicals available as per buyer\'s specification for various industrial applications.',
      features: ['Tech grade available', 'Pure grade chemicals', 'Custom specifications', 'Industrial applications'],
      icon: Beaker,
      color: 'green',
      link: '/products/chemicals'
    },
    {
      title: 'Chemicals (Lab)',
      description: 'Reagents & metal salts as per A.R, G.R / ACS grades for laboratory and research applications.',
      features: ['A.R grade reagents', 'G.R / ACS grades', 'Metal salts', 'Laboratory quality'],
      icon: TestTube,
      color: 'indigo',
      link: '/products/lab-chemicals'
    },
    {
      title: 'Phase Transfer Catalysts',
      description: 'High-quality quaternary ammonium compounds and phosphonium salts for enhanced chemical reactions.',
      features: ['Phase transfer catalysts', 'Quaternary ammonium compounds', 'Enhanced reactions', 'Export quality'],
      icon: Zap,
      color: 'orange',
      link: '/products/phase-transfer-catalysts'
    },
    {
      title: 'Mercury Salts',
      description: 'High-purity mercury compounds for specialized analytical and industrial applications.',
      features: ['High purity grade', 'Analytical applications', 'Industrial use', 'Specialized compounds'],
      icon: Atom,
      color: 'gray',
      link: '/products/mercury-salts'
    },
    {
      title: 'Ion Pair Reagents',
      description: 'Specialized reagents for ion-pair chromatography and analytical separations.',
      features: ['Chromatography grade', 'High purity', 'Analytical separations', 'HPLC applications'],
      icon: Flask,
      color: 'cyan',
      link: '/products/ion-pair-reagents'
    },
    {
      title: 'Iodine Derivatives',
      description: 'Various iodine compounds and derivatives for pharmaceutical and analytical applications.',
      features: ['Pharmaceutical grade', 'Analytical applications', 'High purity', 'Various derivatives'],
      icon: Sparkles,
      color: 'violet',
      link: '/products/iodine-derivatives'
    },
    {
      title: 'Rare Earths',
      description: 'Rare earth elements and compounds for advanced technology and research applications.',
      features: ['High purity elements', 'Research grade', 'Technology applications', 'Specialized compounds'],
      icon: Globe,
      color: 'emerald',
      link: '/products/rare-earths'
    },
    {
      title: 'Fluorescent Dyes',
      description: 'Fluorescent dyes and indicators for biological, analytical, and research applications.',
      features: ['Biological applications', 'Research grade', 'High fluorescence', 'Analytical use'],
      icon: Eye,
      color: 'yellow',
      link: '/products/fluorescent-dyes'
    },
    {
      title: 'Solvent Dyes',
      description: 'Oil-soluble dyes for plastics, inks, and various non-aqueous applications.',
      features: ['Oil soluble', 'Plastic applications', 'Ink manufacturing', 'Non-aqueous systems'],
      icon: Droplet,
      color: 'blue',
      link: '/products/solvent-dyes'
    },
    {
      title: 'Cosmetic Dyes',
      description: 'Safe and approved colorants for cosmetic and personal care product applications.',
      features: ['Cosmetic grade', 'Safety approved', 'Personal care', 'Color cosmetics'],
      icon: Sparkles,
      color: 'rose',
      link: '/products/cosmetic-dyes'
    },
    {
      title: 'Aluminium Chloride Anhydrous',
      description: 'High-purity anhydrous aluminium chloride for industrial applications and chemical synthesis. Production capacity: 500 tons per month.',
      features: ['High purity grade', 'Industrial applications', 'Chemical synthesis', '500 tons/month capacity'],
      icon: Flask,
      color: 'blue',
      link: '/products/aluminium-chloride'
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-medium mb-6">
            <Flask className="w-4 h-4 mr-2" />
            Our Products
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Chemical Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our extensive range of high-quality chemicals, metals, and materials designed for industrial, academic, and institutional applications worldwide.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <Link
              key={index}
              to={product.link}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="p-8">
                <div className={`w-16 h-16 bg-${product.color}-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <product.icon className={`w-8 h-8 text-${product.color}-600`} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors duration-200">
                  {product.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className={`w-2 h-2 bg-${product.color}-500 rounded-full mr-3`}></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center text-teal-600 hover:text-teal-700 font-medium transition-colors duration-200">
                  Learn more
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Quality Assurance */}
        <div className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl p-8 lg:p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Quality You Can Trust
              </h2>
              <p className="text-lg leading-relaxed mb-6 text-teal-100">
                Our productions are handled and managed by highly technical persons, who produce and synthesize large quantities of chemicals to create new molecules. Our chemists collect samples at each step to keep check on conversion efficiency and purity.
              </p>
              <p className="text-lg leading-relaxed text-teal-100">
                We ensure that our products meet desired quality and specification as per customer's requirement.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-sm text-teal-100">Tons Monthly Capacity</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-3xl font-bold mb-2">ISO</div>
                <div className="text-sm text-teal-100">Certified Quality</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-3xl font-bold mb-2">25+</div>
                <div className="text-sm text-teal-100">Years Experience</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-3xl font-bold mb-2">99%</div>
                <div className="text-sm text-teal-100">Purity Standards</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;