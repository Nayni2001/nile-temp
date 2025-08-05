import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { TestTube, Shield, Award, CheckCircle, FlaskRound as Flask, Beaker, AlertTriangle, Star, Eye, FileText, Zap } from "lucide-react";
import { getAllProducts } from "../../../data/labChemicalsData";
import { toTitleCase } from "../../../utils/stringUtils";

const LabChemicalDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const [activeTab, setActiveTab] = useState<
    "overview" | "specifications" | "msds"
  >("overview");
  const allProducts = getAllProducts();

  const product = allProducts.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Product Not Found
          </h1>
          <Link
            to="/products/lab-chemicals"
            className="text-teal-600 hover:text-teal-700"
          >
            Back to Lab Chemicals
          </Link>
        </div>
      </div>
    );
  }

  const hasSpecifications = product.specifications;
  const hasMSDS = product.msds;

  // Basic Information
  const basicInfo = [
    { label: "Product Name", value: product.product },
    { label: "Product Code", value: product.code },
    { label: "CAS Number", value: product.CASNo || "N/A" },
    { label: "Molecular Formula", value: product.molecularFormula || "N/A" },
    { label: "Molecular Weight", value: product.molecularWeight || "N/A" },
    { label: "Grade", value: product.grade },
    { label: "Subgroup", value: product.subgroup },
  ];

  // Render specifications
  const renderSpecifications = () => {
    if (!product.specifications) {
      return (
        <div className="text-center py-8">
          <p className="text-gray-500">
            Specifications will be provided upon request.
          </p>
        </div>
      );
    }

    const specs = product.specifications;
    const specEntries = Object.entries(specs);

    return (
      <div className="space-y-4">
        {specEntries.map(([key, value], index) => {
          // Handle nested objects
          if (typeof value === "object" && value !== null) {
            return (
              <div key={index} className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-3">{key}</h4>
                <div className="space-y-2">
                  {Object.entries(value).map(([subKey, subValue], subIndex) => (
                    <div
                      key={subIndex}
                      className="flex justify-between text-sm"
                    >
                      <span className="text-gray-600">{subKey}:</span>
                      <span className="font-medium text-gray-900">
                        {String(subValue)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          }

          return (
            <div
              key={index}
              className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0"
            >
              <span className="text-gray-600 font-medium">{key}</span>
              <span className="text-gray-900 font-semibold text-right max-w-md">
                {String(value)}
              </span>
            </div>
          );
        })}
      </div>
    );
  };

  // Render MSDS section
  const renderMSDSSection = () => {
    const msdsData = product.msds;

    if (!msdsData) {
      return (
        <div className="text-center py-16">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <FileText className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            MSDS Not Available
          </h3>
          <p className="text-gray-600">
            Material Safety Data Sheet is not available for this product.
          </p>
        </div>
      );
    }

    return (
      <div className="space-y-8">
        {/* Product Identification */}
        {msdsData["Product Identification"] && (
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-4">
              <h3 className="text-lg font-semibold">Product Identification</h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(msdsData["Product Identification"]).map(
                  ([key, value], index) => (
                    <div key={index} className="bg-blue-50 rounded-lg p-4">
                      <div className="text-sm font-medium text-gray-600 mb-1">
                        {key}
                      </div>
                      <div className="text-lg font-bold text-gray-900">
                        {Array.isArray(value)
                          ? value.join(", ")
                          : String(value)}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        )}

        {/* Composition Information */}
        {msdsData["Composition Information on Ingredients"] && (
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-6 py-4">
              <h3 className="text-lg font-semibold">Composition Information</h3>
            </div>
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-green-50">
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Component</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">CAS Number</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Percentage</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Hazardous</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {msdsData["Composition Information on Ingredients"].map((item: any, index: number) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm text-gray-900">{item.Component}</td>
                        <td className="px-4 py-3 text-sm text-gray-900">{item["CAS Number"]}</td>
                        <td className="px-4 py-3 text-sm text-gray-900">{item.Percentage}</td>
                        <td className="px-4 py-3 text-sm">
                          <span
                            className={`px-2 py-1 text-xs rounded-full ${
                              item.Hazardous
                                ? "bg-red-100 text-red-800"
                                : "bg-green-100 text-green-800"
                            }`}
                          >
                            {item.Hazardous ? "Yes" : "No"}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Hazard Information */}
        {msdsData["Hazards Identification"] && (
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-4 flex items-center">
              <AlertTriangle className="w-5 h-5 mr-2" />
              <h3 className="text-lg font-semibold">Hazard Information</h3>
            </div>
            <div className="p-6 space-y-4">
              {Object.entries(msdsData["Hazards Identification"]).map(
                ([key, value], index) => {
                  if (typeof value === "object" && value !== null) {
                    return (
                      <div key={index} className="bg-red-50 rounded-lg p-4">
                        <h4 className="font-semibold text-red-900 mb-3">
                          {key}
                        </h4>
                        <div className="space-y-2">
                          {Object.entries(value).map(
                            ([subKey, subValue], subIndex) => (
                              <div key={subIndex}>
                                <h5 className="font-medium text-red-800 text-sm">
                                  {subKey}:
                                </h5>
                                <p className="text-red-700 text-sm ml-2">
                                  {String(subValue)}
                                </p>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    );
                  }
                  return (
                    <div key={index} className="bg-red-50 rounded-lg p-4">
                      <h4 className="font-semibold text-red-900 mb-2">{key}</h4>
                      <p className="text-red-800">{String(value)}</p>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        )}

        {/* First Aid Measures */}
        {msdsData["First Aid Measures"] && (
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-6 py-4">
              <h3 className="text-lg font-semibold">First Aid Measures</h3>
            </div>
            <div className="p-6 space-y-4">
              {Object.entries(msdsData["First Aid Measures"]).map(
                ([key, value], index) => (
                  <div key={index} className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-semibold text-green-900 mb-2">{key}</h4>
                    <p className="text-green-800">{String(value)}</p>
                  </div>
                )
              )}
            </div>
          </div>
        )}

        {/* Fire Fighting Measures */}
        {msdsData["Fire Fighting Measures"] && (
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-4">
              <h3 className="text-lg font-semibold">Fire Fighting Measures</h3>
            </div>
            <div className="p-6 space-y-4">
              {Object.entries(msdsData["Fire Fighting Measures"]).map(
                ([key, value], index) => (
                  <div key={index} className="bg-orange-50 rounded-lg p-4">
                    <h4 className="font-semibold text-orange-900 mb-2">{key}</h4>
                    <p className="text-orange-800">{String(value)}</p>
                  </div>
                )
              )}
            </div>
          </div>
        )}

        {/* Physical and Chemical Properties */}
        {msdsData["Physical and Chemical Properties"] && (
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-4">
              <h3 className="text-lg font-semibold">
                Physical and Chemical Properties
              </h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(
                  msdsData["Physical and Chemical Properties"]
                ).map(([key, value], index) => (
                  <div key={index} className="bg-purple-50 rounded-lg p-4">
                    <div className="text-sm font-medium text-gray-600 mb-1">
                      {key}
                    </div>
                    <div className="text-lg font-bold text-gray-900">
                      {String(value)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Stability and Reactivity */}
        {msdsData["Stability and Reactivity"] && (
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-4">
              <h3 className="text-lg font-semibold">
                Stability and Reactivity
              </h3>
            </div>
            <div className="p-6 space-y-4">
              {Object.entries(msdsData["Stability and Reactivity"]).map(
                ([key, value], index) => (
                  <div key={index} className="bg-yellow-50 rounded-lg p-4">
                    <h4 className="font-semibold text-yellow-900 mb-2">
                      {key}
                    </h4>
                    <p className="text-yellow-800">{String(value)}</p>
                  </div>
                )
              )}
            </div>
          </div>
        )}
      </div>
    );
  };

  const applications = [
    'Analytical Chemistry',
    'Quantitative Analysis',
    'Qualitative Testing',
    'Titrations',
    'Buffer Preparation',
    'Standard Solutions',
    'Research Applications',
    'Quality Control Testing'
  ];

  const safetyFeatures = [
    "A.R. grade quality",
    "International standards compliance",
    "Rigorous quality control",
    "Certificate of analysis provided",
    "Proper packaging and storage",
    "Batch traceability",
    "Technical documentation",
    "Expert technical support",
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
            to="/products/lab-chemicals"
            className="text-teal-600 hover:text-teal-700 transition-colors duration-200"
          >
            Lab Chemicals
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-600">{toTitleCase(product.product)}</span>
        </div>

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              <TestTube className="w-4 h-4 mr-2" />
              {(() => {
                const firstLetter = product.product.charAt(0).toUpperCase();
                if (firstLetter === 'A') return 'A - A';
                if (firstLetter === 'B') return 'B - B';
                if (firstLetter === 'C') return 'C - C';
                if (['D', 'E', 'F'].includes(firstLetter)) return 'D - F';
                if (['G', 'H', 'I', 'J', 'K'].includes(firstLetter)) return 'G - K';
                if (['L', 'M'].includes(firstLetter)) return 'L - M';
                if (['N', 'O', 'P'].includes(firstLetter)) return 'N - P';
                if (['Q', 'R', 'S'].includes(firstLetter)) return 'Q - S';
                if (['T', 'U', 'V'].includes(firstLetter)) return 'T - V';
                if (['W', 'X', 'Y', 'Z'].includes(firstLetter)) return 'W - Z';
                return 'Lab Chemical';
              })()}
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {toTitleCase(product.product)}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              High-quality {product.grade.toLowerCase()} chemical designed for accurate analytical measurements and laboratory applications. Meets international standards for precision and reliability in analytical work.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8">
            <div className="text-center mb-6">
              <div
                className={`w-24 h-24 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mx-auto mb-4 shadow-lg relative overflow-hidden`}
              >
                <div className="flex items-center justify-center h-full">
                  <TestTube className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {toTitleCase(product.product)}
              </h3>
              <p className="text-gray-600 mb-4">Code: {product.code}</p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">{product.grade}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">International Standards</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-teal-600" />
                  <span className="text-gray-700">Quality Assured</span>
                </div>
                {hasMSDS && (
                  <div className="flex items-center space-x-3">
                    <FileText className="w-5 h-5 text-red-600" />
                    <span className="text-gray-700">MSDS Available</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab("overview")}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "overview"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Overview
              </button>
              {hasSpecifications && (
                <button
                  onClick={() => setActiveTab("specifications")}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === "specifications"
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  Specifications
                </button>
              )}
              {hasMSDS && (
                <button
                  onClick={() => setActiveTab("msds")}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === "msds"
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  MSDS
                </button>
              )}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        <div className="mb-16">
          {activeTab === "overview" && (
            <div className="space-y-16">
              {/* Basic Information */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Basic Information
                </h2>
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-4">
                    <h3 className="text-lg font-semibold">
                      Product Identification
                    </h3>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {basicInfo.map((info, index) => (
                        <div
                          key={index}
                          className="bg-blue-50 rounded-lg p-4"
                        >
                          <div className="text-sm font-medium text-gray-600 mb-1">
                            {info.label}
                          </div>
                          <div className="text-lg font-bold text-gray-900">
                            {info.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Applications */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Applications
                </h2>
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {applications.map((application, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div
                          className={`w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center flex-shrink-0`}
                        >
                          <Flask className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-700 font-medium">
                          {application}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Safety Features */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Quality & Safety Features
                </h2>
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
            </div>
          )}

          {activeTab === "specifications" && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Specifications
              </h2>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-4">
                  <h3 className="text-lg font-semibold">
                    Technical Parameters
                  </h3>
                </div>
                <div className="p-6">{renderSpecifications()}</div>
              </div>
            </div>
          )}

          {activeTab === "msds" && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Material Safety Data Sheet (MSDS)
              </h2>
              {renderMSDSSection()}
            </div>
          )}
        </div>

        {/* Quality Assurance */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 lg:p-12 text-white mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Quality Assurance</h2>
              <p className="text-lg text-blue-100 leading-relaxed mb-6">
                Our laboratory chemicals undergo rigorous testing and quality control
                processes to ensure they meet the highest international
                standards for analytical accuracy and reliability.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Beaker className="w-5 h-5 text-blue-300" />
                  <span>Comprehensive analytical testing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Eye className="w-5 h-5 text-green-300" />
                  <span>Visual quality inspection</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-yellow-300" />
                  <span>International standards compliance</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-32 h-32 bg-white/10 rounded-full mb-4">
                <Award className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Certified Quality</h3>
              <p className="text-blue-100">Analytical grade manufacturing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabChemicalDetail;