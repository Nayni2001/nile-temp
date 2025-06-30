import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Users, Globe, ArrowRight, FlaskRound as Flask, Zap, Palette, ChevronDown, Mail, Phone, MapPin, FileText } from 'lucide-react';

const Home = () => {
  const mainProducts = [
    {
      title: 'Aluminium Chloride Anhydrous',
      description: 'High-purity anhydrous aluminium chloride for industrial applications and chemical synthesis.',
      icon: Flask,
      color: 'blue',
      link: '/products/aluminium-chloride'
    },
    {
      title: 'pH Indicators',
      description: 'Certified grade pH indicators meeting international standards for accurate measurements.',
      icon: Palette,
      color: 'purple',
      link: '/products/ph-indicators'
    },
    {
      title: 'Catalyst',
      description: 'Phase transfer catalysts including quaternary ammonium compounds for enhanced reactions.',
      icon: Zap,
      color: 'orange',
      link: '/products/catalyst'
    }
  ];

  const features = [
    {
      title: 'Certified Quality',
      description: 'pH Indicators are of certified grade & of international standard.',
      icon: Award
    },
    {
      title: 'High Production Capacity',
      description: 'Aluminium Chloride production capacity: 500 tons per month.',
      icon: Globe
    }, 
    {
      title: 'Expert Team',
      description: 'Highly technical persons manage production and synthesis processes.',
      icon: Users
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 lg:py-32 text-white overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-teal-500/10 rounded-full blur-xl"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-teal-400/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-32 right-1/3 w-28 h-28 bg-cyan-500/10 rounded-full blur-xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-teal-500/20 text-teal-300 rounded-full text-sm font-medium mb-8 backdrop-blur-sm border border-teal-500/30">
            <div className="w-2 h-2 bg-teal-400 rounded-full mr-2 animate-pulse"></div>
            Leading International Supplier
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="text-white">Fine Chemicals</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
              & Materials
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Leading international supplier and distributor of fine chemicals, metals, and materials for industrial, academic and institutional research, development and production applications.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link 
              to="/products"
              className="inline-flex items-center px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View Products
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-transparent hover:bg-white/10 text-white font-medium rounded-full border-2 border-white/30 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
            >
              Contact Us
            </a>
          </div>
          
          {/* Scroll indicator */}
          <div className="animate-bounce">
            <ChevronDown className="w-6 h-6 text-gray-400 mx-auto" />
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Leading International Chemical Supplier
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Nile Chemicals is a leading international supplier and distributor of fine chemicals, metals, and materials. Our products are used in a variety of industrial, academic and institutional research, development and production applications.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We offer customers the highest quality and purity in fine chemical products. Our productions are handled and managed by highly technical persons, who produce and synthesize large quantities of chemicals to create new molecules.
              </p>
              <Link
                to="/products"
                className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium"
              >
                Learn more about our capabilities
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl">
                  <feature.icon className="w-10 h-10 text-teal-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-medium mb-4">
              <Flask className="w-4 h-4 mr-2" />
              Main Products
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Product Portfolio</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence ensures every product meets the highest industry standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {mainProducts.map((product, index) => (
              <Link
                key={index}
                to="/products"
                className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className={`w-16 h-16 bg-${product.color}-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <product.icon className={`w-8 h-8 text-${product.color}-600`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors duration-200">
                  {product.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {product.description}
                </p>
                <div className="flex items-center text-teal-600 font-medium">
                  Learn more
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </Link>
            ))} 
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link
              to="/products"
              className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Flask className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors duration-200">
                Chemicals (Bulk)
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Tech & pure grade chemicals available as per buyer's specification for various industrial applications.
              </p>
              <div className="flex items-center text-teal-600 font-medium">
                Learn more
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </div>
            </Link>
            <Link
              to="/products"
              className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Flask className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors duration-200">
                Lab Chemicals
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Reagents & metal salts are as per A.R, G.R / ACS grades for laboratory and research applications.
              </p>
              <div className="flex items-center text-teal-600 font-medium">
                Learn more
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Trading Activities Section */}
      <section id="trading" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-teal-600/20 backdrop-blur-sm border border-teal-400/30 rounded-full px-4 py-2 text-teal-300 text-sm font-medium mb-4">
              <Palette className="h-4 w-4" />
              <span>Trading Activities</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              General Trading Activities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive range of dyes and colorants for various industrial applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Acid Dyes",
                description: "High-quality acid dyes for textile, leather, and paper industries with excellent color fastness.",
                color: "from-red-500 to-pink-600",
              },
              {
                title: "Basic Dyes",
                description: "Vibrant basic dyes for acrylic fibers, paper, and leather applications with superior brightness.",
                color: "from-blue-500 to-purple-600",
              },
              {
                title: "Direct Dyes",
                description: "Direct dyes for cotton, viscose, and other cellulosic fibers with excellent wash fastness.",
                color: "from-green-500 to-teal-600",
              }
            ].map((dye, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-2xl bg-slate-800 hover:bg-slate-700 transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${dye.color} opacity-10 group-hover:opacity-20 transition-opacity`}></div>
                <div className="relative p-8">
                  <div className="mb-6">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${dye.color} opacity-80 flex items-center justify-center`}>
                      <Palette className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4">{dye.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{dye.description}</p>
                  <div className="flex items-center space-x-4">
                    <Link to="/products" className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 font-medium">
                      <Globe className="h-4 w-4" />
                      <span>Details</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Banner */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Award className="h-12 w-12 text-white" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Certified Excellence
              </h2>
            </div>
            <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
              Our commitment to quality is backed by international certifications and rigorous quality control processes.
            </p>
            <button className="bg-white text-teal-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2 mx-auto">
              <FileText className="h-5 w-5" />
              <span>View Certifications</span>
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-teal-600/20 backdrop-blur-sm border border-teal-400/30 rounded-full px-4 py-2 text-teal-300 text-sm font-medium mb-4">
              <Mail className="h-4 w-4" />
              <span>Get In Touch</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Let's discuss how our chemical solutions can drive your business forward.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-slate-800 rounded-2xl p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-teal-600 p-3 rounded-lg">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-300">022 23454828</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800 rounded-2xl p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-cyan-600 p-3 rounded-lg">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-300">sales@nilechemicals.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800 rounded-2xl p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p className="text-gray-300">202, Matruchhaya 378/80 Narshi natha Street,<br /> Masjid Bunder (W) Mumbai -400009</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-slate-800 rounded-2xl p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-white placeholder-gray-400"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-white placeholder-gray-400"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-white placeholder-gray-400"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-white placeholder-gray-400"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-white placeholder-gray-400 resize-none"
                      placeholder="Tell us about your chemical requirements..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-teal-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>Send Message</span>
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;