import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Palette,
  Shield,
  Award,
  CheckCircle,
  FlaskRound as Flask,
  Beaker,
  AlertTriangle,
  Star,
  Eye,
  FileText,
  TestTube,
} from "lucide-react";
import { getAllProducts } from "../../../data/phIndicatorsData";
import { toTitleCase } from "../../../utils/stringUtils";

const PhIndicatorDetail = () => {
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
            to="/products/ph-indicators"
            className="text-teal-600 hover:text-teal-700"
          >
            Back to pH Indicators
          </Link>
        </div>
      </div>
    );
  }

  // const productColor = getProductColor(product.product);
  const hasImage = product.specifications?.Image;
  const hasSpecifications = product.specifications;
  const hasMSDS =
    product.msds || (product.specifications && product.specifications.msds);

  // Basic Information - using the correct field names from the data
  const basicInfo = [
    { label: "Product Name", value: product.product },
    { label: "Product Code", value: product.code },
    {
      label: "CAS Number",
      value:
        product.CASNo ||
        product.CASNo ||
        product.specifications?.CASNo ||
        "N/A",
    },
    { label: "CI Number", value: product.CINo || product.CINo || "N/A" },
    { label: "Subgroup", value: product.subgroup || "Indicators" },
  ];

  // Render specifications
  const renderSpecifications = () => {
    if (!product.specifications && !product.specifications) {
      return (
        <div className="text-center py-8">
          <p className="text-gray-500">
            Specifications will be provided upon request.
          </p>
        </div>
      );
    }

    const specs = product.specifications || product.specifications;
    const specEntries = Object.entries(specs).filter(
      ([key]) => key !== "Image" && key !== "msds" && key !== "Image"
    );

    return (
      <div className="space-y-4">
        {specEntries.map(([key, value], index) => {
          // Handle nested objects
          if (typeof value === "object" && value !== null) {
            return (
              <div key={index} className="bg-purple-50 rounded-lg p-4">
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
    // Check for MSDS data in different possible locations
    const msdsData = product.msds || {};
    const compInfo = msdsData["Composition Information on Ingredients"];

    if (!compInfo) return null;

    const isArray = Array.isArray(compInfo);
    const dataArray = isArray ? compInfo : [compInfo];

    // Declare headers here before return
    const headers = Array.from(
      new Set(dataArray.flatMap((obj) => Object.keys(obj)))
    );

    function renderFireFightingMeasures(data: any) {
      return Object.entries(data).map(([key, value], index) => {
        const isObject =
          value && typeof value === "object" && !Array.isArray(value);

        return (
          <div key={index} className="bg-orange-50 rounded-lg p-4 mb-4">
            <h4 className="font-semibold text-orange-900 mb-2">{key}</h4>
            {isObject ? (
              <div className="pl-4 border-l-4 border-orange-300">
                {renderFireFightingMeasures(value)}
              </div>
            ) : (
              <p className="text-orange-800">{String(value)}</p>
            )}
          </div>
        );
      });
    }

    function renderExposureSection(data: any) {
      return Object.entries(data).map(([key, value], index) => {
        const isObject =
          value && typeof value === "object" && !Array.isArray(value);
        return (
          <div key={index} className="bg-sky-50 rounded-lg p-4">
            <h4 className="font-semibold text-sky-900 mb-2">{key}</h4>
            {isObject ? (
              <div className="pl-4 border-l-4 border-sky-300 space-y-2">
                {Object.entries(value).map(([subKey, subValue], subIndex) => (
                  <div key={subIndex} className="text-sky-800">
                    <span className="font-medium">{subKey}:</span>{" "}
                    {String(subValue)}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sky-800 whitespace-pre-line">
                {String(value)}
              </p>
            )}
          </div>
        );
      });
    }

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
                      {headers.map((header) => (
                        <th
                          key={header}
                          className="px-4 py-3 text-left text-sm font-medium text-gray-700"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {dataArray.map((item: any, index: number) => (
                      <tr key={index} className="hover:bg-gray-50">
                        {headers.map((key) => {
                          const value = item[key];
                          // Special style for Hazardous or any boolean-like key (optional)
                          if (
                            key.toLowerCase().includes("hazardous") &&
                            typeof value === "boolean"
                          ) {
                            return (
                              <td key={key} className="px-4 py-3 text-sm">
                                <span
                                  className={`px-2 py-1 text-xs rounded-full ${
                                    value
                                      ? "bg-red-100 text-red-800"
                                      : "bg-green-100 text-green-800"
                                  }`}
                                >
                                  {value ? "Yes" : "No"}
                                </span>
                              </td>
                            );
                          }
                          return (
                            <td
                              key={key}
                              className="px-4 py-3 text-sm text-gray-900"
                            >
                              {value !== undefined ? String(value) : "-"}
                            </td>
                          );
                        })}
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
              {renderFireFightingMeasures(msdsData["Fire Fighting Measures"])}
            </div>
          </div>
        )}

        {/* Accidental Release Measures */}
        {msdsData["Accidental Release Measures"] && (
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-6 py-4">
              <h3 className="text-lg font-semibold">
                Accidental Release Measures
              </h3>
            </div>
            <div className="p-6 space-y-4">
              {Object.entries(msdsData["Accidental Release Measures"]).map(
                ([key, value], index) => (
                  <div key={index} className="bg-teal-50 rounded-lg p-4">
                    <h4 className="font-semibold text-teal-900 mb-2">{key}</h4>
                    <p className="text-teal-800">{String(value)}</p>
                  </div>
                )
              )}
            </div>
          </div>
        )}

        {/* Handling and Storage */}
        {msdsData["Handling and Storage"] && (
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-4">
              <h3 className="text-lg font-semibold">Handling and Storage</h3>
            </div>
            <div className="p-6 space-y-4">
              {Object.entries(msdsData["Handling and Storage"]).map(
                ([key, value], index) => (
                  <div key={index} className="bg-indigo-50 rounded-lg p-4">
                    <h4 className="font-semibold text-indigo-900 mb-2">
                      {key}
                    </h4>
                    <p className="text-indigo-800">{String(value)}</p>
                  </div>
                )
              )}
            </div>
          </div>
        )}
        {/* Exposure Controls / Personal Protection */}
        {msdsData["Exposure Controls Personal Protection"] && (
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-6 py-4">
              <h3 className="text-lg font-semibold">
                Exposure Controls / Personal Protection
              </h3>
            </div>
            <div className="p-6 space-y-4">
              {renderExposureSection(
                msdsData["Exposure Controls Personal Protection"]
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

        {/* Toxicological Information */}
        {msdsData["Toxicological Information"] && (
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-6 py-4">
              <h3 className="text-lg font-semibold">
                Toxicological Information
              </h3>
            </div>
            <div className="p-6 space-y-4">
              {Object.entries(msdsData["Toxicological Information"]).map(
                ([key, value], index) => {
                  if (typeof value === "object" && value !== null) {
                    return (
                      <div key={index} className="bg-red-50 rounded-lg p-4">
                        <h4 className="font-semibold text-red-900 mb-3">
                          {key}
                        </h4>
                        <div className="space-y-2">
                          {Object.entries(value).map(
                            ([subKey, subValue], subIndex) => {
                              if (
                                typeof subValue === "object" &&
                                subValue !== null
                              ) {
                                return (
                                  <div key={subIndex}>
                                    <h5 className="font-medium text-red-800 text-sm">
                                      {subKey}:
                                    </h5>
                                    <div className="ml-2 space-y-1">
                                      {Object.entries(subValue).map(
                                        (
                                          [subSubKey, subSubValue],
                                          subSubIndex
                                        ) => (
                                          <div
                                            key={subSubIndex}
                                            className="text-sm"
                                          >
                                            <span className="text-red-700 font-medium">
                                              {subSubKey}:
                                            </span>
                                            <span className="text-red-600 ml-1">
                                              {String(subSubValue)}
                                            </span>
                                          </div>
                                        )
                                      )}
                                    </div>
                                  </div>
                                );
                              }
                              return (
                                <div key={subIndex}>
                                  <span className="font-medium text-red-800 text-sm">
                                    {subKey}:
                                  </span>
                                  <span className="text-red-700 text-sm ml-2">
                                    {String(subValue)}
                                  </span>
                                </div>
                              );
                            }
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

        {/* Ecological Information - Green */}
        {msdsData["Ecological Information"] && (
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mt-8">
            <div className="bg-gradient-to-r from-green-500 to-green-700 text-white px-6 py-4">
              <h3 className="text-lg font-semibold">Ecological Information</h3>
            </div>
            <div className="p-6 space-y-4">
              {Object.entries(msdsData["Ecological Information"]).map(
                ([key, value], index) => (
                  <div key={index} className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-semibold text-green-900 mb-2">{key}</h4>
                    <p className="text-green-800 whitespace-pre-line">
                      {String(value)}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        )}

        {/* Disposal Considerations - Orange */}
        {msdsData["Disposal Considerations"] && (
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mt-8">
            <div className="bg-gradient-to-r from-orange-500 to-orange-700 text-white px-6 py-4">
              <h3 className="text-lg font-semibold">Disposal Considerations</h3>
            </div>
            <div className="p-6 space-y-4">
              {Object.entries(msdsData["Disposal Considerations"]).map(
                ([key, value], index) => (
                  <div key={index} className="bg-orange-50 rounded-lg p-4">
                    <h4 className="font-semibold text-orange-900 mb-2">
                      {key}
                    </h4>
                    <p className="text-orange-800 whitespace-pre-line">
                      {String(value)}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        )}

        {/* Transport Information - Purple */}
        {msdsData["Transport Information"] && (
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mt-8">
            <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-6 py-4">
              <h3 className="text-lg font-semibold">Transport Information</h3>
            </div>
            <div className="p-6 space-y-4">
              {Object.entries(msdsData["Transport Information"]).map(
                ([sectionKey, sectionValue], sectionIndex) => (
                  <div
                    key={sectionIndex}
                    className="bg-purple-50 rounded-lg p-4"
                  >
                    <h4 className="font-semibold text-purple-900 mb-2">
                      {sectionKey}
                    </h4>

                    {typeof sectionValue === "object" &&
                    sectionValue !== null ? (
                      <ul className="list-disc pl-6 text-purple-800 space-y-1">
                        {Object.entries(sectionValue).map(
                          ([subKey, subValue], i) => (
                            <li key={i}>
                              <span className="font-medium">{subKey}:</span>{" "}
                              {String(subValue)}
                            </li>
                          )
                        )}
                      </ul>
                    ) : (
                      <p className="text-purple-800 whitespace-pre-line">
                        {String(sectionValue)}
                      </p>
                    )}
                  </div>
                )
              )}
            </div>
          </div>
        )}

        {/* Regulatory Information */}
        {msdsData["Regulatory Information"] && (
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-gray-600 to-gray-800 text-white px-6 py-4">
              <h3 className="text-lg font-semibold">Regulatory Information</h3>
            </div>
            <div className="p-6 space-y-4">
              {Object.entries(msdsData["Regulatory Information"]).map(
                ([key, value], index) => {
                  if (typeof value === "object" && value !== null) {
                    return (
                      <div key={index} className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 mb-3">
                          {key}
                        </h4>
                        <div className="space-y-2">
                          {Object.entries(value).map(
                            ([subKey, subValue], subIndex) => {
                              if (
                                typeof subValue === "object" &&
                                subValue !== null
                              ) {
                                return (
                                  <div
                                    key={subIndex}
                                    className="ml-4 space-y-1"
                                  >
                                    <h5 className="text-sm font-semibold text-gray-700">
                                      {subKey}
                                    </h5>
                                    <div className="pl-2 border-l border-gray-300 space-y-1">
                                      {Object.entries(subValue).map(
                                        (
                                          [innerKey, innerValue],
                                          innerIndex
                                        ) => (
                                          <div
                                            key={innerIndex}
                                            className="flex justify-between text-sm"
                                          >
                                            <span className="text-gray-600">
                                              {innerKey}:
                                            </span>
                                            <span className="font-medium text-gray-900">
                                              {String(innerValue)}
                                            </span>
                                          </div>
                                        )
                                      )}
                                    </div>
                                  </div>
                                );
                              }
                              return (
                                <div
                                  key={subIndex}
                                  className="flex justify-between text-sm"
                                >
                                  <span className="text-gray-600">
                                    {subKey}:
                                  </span>
                                  <span className="font-medium text-gray-900">
                                    {String(subValue)}
                                  </span>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    );
                  }

                  return (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {key}
                      </h4>
                      <p className="text-gray-800">{String(value)}</p>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        )}

        {/* Other Regulations */}
        {msdsData["Other Regulations"] && (
          <div className="bg-green-50 rounded-2xl shadow-lg overflow-hidden mb-6">
            <div className="bg-green-600 text-white px-6 py-4">
              <h3 className="text-lg font-semibold">Other Regulations</h3>
            </div>
            <div className="p-6 space-y-3">
              {Object.entries(msdsData["Other Regulations"]).map(
                ([key, value], index) => (
                  <div key={index}>
                    {typeof value === "object" && value !== null ? (
                      <div className="mb-2">
                        <span className="font-semibold text-green-800 block mb-1">
                          {key}:
                        </span>
                        <ul className="list-disc pl-6 text-green-900 space-y-1">
                          {Object.entries(value).map(
                            ([subKey, subValue], i) => (
                              <li key={i}>
                                <span className="font-medium">{subKey}:</span>{" "}
                                {String(subValue)}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    ) : (
                      <div className="flex justify-between py-1">
                        <span className="font-medium text-green-800">
                          {key}:
                        </span>
                        <span className="text-green-900 text-right">
                          {String(value)}
                        </span>
                      </div>
                    )}
                  </div>
                )
              )}
            </div>
          </div>
        )}

        {/* Other Classifications */}
        {msdsData["Other Classifications"] && (
          <div className=" rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-yellow-600 text-white px-6 py-4">
              <h3 className="text-lg font-semibold">Other Classifications</h3>
            </div>
            <div className="p-6 space-y-4">
              {Object.entries(msdsData["Other Classifications"]).map(
                ([key, value], index) => {
                  if (typeof value === "object" && value !== null) {
                    return (
                      <div
                        key={index}
                        className="bg-yellow-50 rounded-lg p-4 shadow-sm"
                      >
                        <h4 className="font-semibold text-yellow-900 mb-2">
                          {key}
                        </h4>
                        <div className="space-y-1">
                          {Object.entries(value).map(
                            ([subKey, subVal], subIndex) => (
                              <div
                                key={subIndex}
                                className="flex justify-between text-sm py-1"
                              >
                                <span className="text-yellow-800">
                                  {subKey}:
                                </span>
                                <span className="text-yellow-900 font-medium">
                                  {String(subVal)}
                                </span>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    );
                  }

                  return (
                    <div
                      key={index}
                      className="bg-yellow-100 rounded-lg p-4 shadow-sm flex justify-between"
                    >
                      <span className="font-semibold text-yellow-900">
                        {key}:
                      </span>
                      <span className="text-yellow-900">{String(value)}</span>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        )}

        {/* Disclaimer */}
        {msdsData["Other Information"]?.Disclaimer && (
          <div className="bg-gray-50 rounded-lg p-6">
            <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
              <FileText className="w-5 h-5 mr-2" />
              Important Disclaimer
            </h4>
            <p className="text-gray-700 text-sm leading-relaxed">
              {msdsData["Other Information"].Disclaimer}
            </p>
          </div>
        )}
      </div>
    );
  };

  const applications = [
    "pH Measurement",
    "Analytical Chemistry",
    "Quality Control Testing",
    "Research & Development",
    "Educational Laboratories",
    "Industrial Process Control",
    "Environmental Analysis",
    "Pharmaceutical Testing",
  ];

  const safetyFeatures = [
    "Certified grade quality",
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
            to="/products/ph-indicators"
            className="text-teal-600 hover:text-teal-700 transition-colors duration-200"
          >
            pH Indicators
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-600">{toTitleCase(product.product)}</span>
        </div>

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-6">
              <Palette className="w-4 h-4 mr-2" />
              {product.subgroup || "pH Indicator"}
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {toTitleCase(product.product)}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              High-quality pH indicator designed for accurate measurements and
              analytical applications. Meets international standards for
              precision and reliability in laboratory and industrial settings.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
            {hasImage ? (
              <div className="mb-6">
                <div className="w-full h-48 bg-white rounded-lg shadow-md flex items-center justify-center">
                  <img
                    src={
                      product.specifications?.Image ||
                      product.specifications?.Image
                    }
                    alt={product.product}
                    className="max-h-full max-w-full object-contain"
                    onError={(e) => {
                      console.error("Image load failed:", e.currentTarget.src);
                    }}
                  />
                </div>
              </div>
            ) : (
              <div className="text-center mb-6">
                <div
                  className={`w-24 h-24 bg-gradient-to-r from-gray-900 to-purple-900 rounded-full mx-auto mb-4 shadow-lg relative overflow-hidden`}
                >
                  {/* <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 transform -skew-x-12 animate-pulse"></div> */}
                  <div className="flex items-center justify-center h-full">
                    <Flask className="w-12 h-12 text-white" />
                  </div>
                </div>
              </div>
            )}

            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {toTitleCase(product.product)}
              </h3>
              <p className="text-gray-600 mb-4">Code: {product.code}</p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Certified Grade</span>
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
                    ? "border-purple-500 text-purple-600"
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
                      ? "border-purple-500 text-purple-600"
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
                      ? "border-purple-500 text-purple-600"
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
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-4">
                    <h3 className="text-lg font-semibold">
                      Product Identification
                    </h3>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {basicInfo.map((info, index) => (
                        <div
                          key={index}
                          className="bg-purple-50 rounded-lg p-4"
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
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {applications.map((application, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div
                          className={`w-8 h-8 bg-gradient-to-r from-gray-900 to-purple-900 rounded-full flex items-center justify-center flex-shrink-0`}
                        >
                          <TestTube className="w-4 h-4 text-white" />
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
        <div className="bg-gradient-to-r from-gray-900 to-purple-900 rounded-2xl p-8 lg:p-12 text-white mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Quality Assurance</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Our pH indicators undergo rigorous testing and quality control
                processes to ensure they meet the highest international
                standards for analytical accuracy and reliability.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Beaker className="w-5 h-5 text-purple-400" />
                  <span>Comprehensive analytical testing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Eye className="w-5 h-5 text-green-400" />
                  <span>Visual quality inspection</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-blue-400" />
                  <span>International standards compliance</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-32 h-32 bg-white/10 rounded-full mb-4">
                <Award className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Certified Quality</h3>
              <p className="text-gray-300">Analytical grade manufacturing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhIndicatorDetail;
