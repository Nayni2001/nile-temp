import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { TestTube, Award, CheckCircle, FlaskRound as Flask, Beaker, AlertTriangle, Star, Eye, FileText, ShieldCheck } from "lucide-react";
import { getAllProducts } from "../../../data/labChemicalsData";

    const { productSlug } = useParams<{ productSlug: string }>();
    if (!msdsData || Object.keys(msdsData).length === 0) {
                        <div className="space-y-2">
                            {Object.entries(value).map(([subKey, subValue], index) => (
                                <div key={subKey + index}>
                                    {typeof subValue === "object" && subValue !== null ? (
                                        renderEntry(subKey, subValue, depth + 1)
                                    ) : (
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-600">{subKey}:</span>
                                            <span className="font-medium text-gray-900">
                                                {String(subValue)}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                );
            }

            return (
                <div
                    key={key}
                    className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0"
                >
                    <span className="text-gray-600 font-medium">{key}</span>
                    <span className="text-gray-900 font-semibold text-right max-w-md">
                        {String(value)}
                    </span>
                </div>
            );
        };

        const specs = product.specifications;

        return (
            <div className="space-y-4">
                {Object.entries(specs).map(([key, value]) => renderEntry(key, value))}
            </div>
        );
    };


    // Render MSDS section
    const renderMSDSSection = () => {
        const msdsData = product.MSDS;

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
            // MSDS content

            <div className="space-y-8 mb-16">
                {/* Product Identification */}
                {msdsData["Product Identification"] && (
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                        <div className="bg-gradient-to-r from-blue-800 to-cyan-500 text-white px-6 py-4">
                            <h3 className="text-lg font-semibold">
                                Product Identification
                            </h3>
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
                {msdsData.Composition &&
                    Array.isArray(msdsData.Composition) &&
                    msdsData.Composition.length > 0 && (
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-10">
                            <div className="bg-gradient-to-r from-green-800 to-teal-500 text-white px-6 py-4">
                                <h3 className="text-lg font-semibold">
                                    Composition Information
                                </h3>
                            </div>
                            <div className="p-6">
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="bg-green-50">
                                                {Object.keys(msdsData.Composition[0]).map((key) => (
                                                    <th
                                                        key={key}
                                                        className="px-4 py-3 text-left text-sm font-medium text-gray-700 whitespace-nowrap"
                                                    >
                                                        {key}
                                                    </th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            {msdsData.Composition.map((ingredient, index) => (
                                                <tr key={index} className="hover:bg-gray-50">
                                                    {Object.entries(ingredient).map(([key, value]) => (
                                                        <td
                                                            key={key}
                                                            className="px-4 py-3 text-sm text-gray-800 whitespace-nowrap"
                                                        >
                                                            {key === "Hazardous" ? (
                                                                <span
                                                                    className={`px-2 py-1 text-xs rounded-full ${value === "Yes"
                                                                        ? "bg-red-100 text-red-800"
                                                                        : "bg-green-100 text-green-800"
                                                                        }`}
                                                                >
                                                                    {value}
                                                                </span>
                                                            ) : (
                                                                value
                                                            )}
                                                        </td>
                                                    ))}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    )}

                {/* Hazards Identification */}
                {msdsData["Hazards Identification"] && (
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                        <div className="bg-gradient-to-r from-red-800 to-orange-500 text-white px-6 py-4 flex items-center">
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
                                            <h4 className="font-semibold text-red-900 mb-2">
                                                {key}
                                            </h4>
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
                        <div className="bg-gradient-to-r from-green-800 to-teal-500 text-white px-6 py-4">
                            <h3 className="text-lg font-semibold">First Aid Measures</h3>
                        </div>
                        <div className="p-6 space-y-4">
                            {Object.entries(msdsData["First Aid Measures"]).map(
                                ([key, value], index) => (
                                    <div key={index} className="bg-green-50 rounded-lg p-4">
                                        <h4 className="font-semibold text-green-900 mb-2">
                                            {key}
                                        </h4>
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
                        <div className="bg-gradient-to-r from-orange-800 to-red-500 text-white px-6 py-4">
                            <h3 className="text-lg font-semibold">
                                Fire Fighting Measures
                            </h3>
                        </div>
                        <div className="p-6 space-y-4">
                            {Object.entries(msdsData["Fire Fighting Measures"]).map(
                                ([key, value], index) => (
                                    <div key={index} className="bg-orange-50 rounded-lg p-4">
                                        <h4 className="font-semibold text-orange-900 mb-2">
                                            {key}
                                        </h4>
                                        <p className="text-orange-800">{String(value)}</p>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                )}

                {/* Accidental Release Measures */}
                {msdsData["Accidental Release Measures"] && (
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                        <div className="bg-gradient-to-r from-teal-800 to-emerald-500 text-white px-6 py-4">
                            <h3 className="text-lg font-semibold">
                                Accidental Release Measures
                            </h3>
                        </div>
                        <div className="p-6 space-y-4">
                            {Object.entries(msdsData["Accidental Release Measures"]).map(
                                ([key, value], index) => (
                                    <div key={index} className="bg-teal-50 rounded-lg p-4">
                                        <h4 className="font-semibold text-teal-900 mb-2">
                                            {key}
                                        </h4>
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
                        <div className="bg-gradient-to-r from-indigo-800 to-purple-500 text-white px-6 py-4">
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
                        <div className="bg-gradient-to-r from-sky-800 to-blue-600 text-white px-6 py-4">
                            <h3 className="text-lg font-semibold">
                                Exposure Controls / Personal Protection
                            </h3>
                        </div>
                        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                            {Object.entries(
                                msdsData["Exposure Controls Personal Protection"]
                            ).map(([key, value], index) => (
                                <div
                                    key={index}
                                    className="bg-sky-50 border border-sky-200 rounded-xl p-4 shadow-sm"
                                >
                                    <div className="flex items-center mb-2">
                                        <ShieldCheck className="w-4 h-4 text-sky-600 mr-2" />
                                        <h4 className="text-sm font-semibold text-sky-700">
                                            {key}
                                        </h4>
                                    </div>
                                    {typeof value === "string" ? (
                                        <p className="text-sm text-gray-700">{value}</p>
                                    ) : Array.isArray(value) ? (
                                        <div className="space-y-2">
                                            {value.map((item: any, i: number) => (
                                                typeof item === "string" ? (
                                                    <li key={i} className="list-disc pl-5 text-sm text-gray-700">{item}</li>
                                                ) : typeof item === "object" && item !== null ? (
                                                    <div key={i} className="border border-sky-100 bg-white p-3 rounded-lg shadow-sm text-sm">
                                                        {Object.entries(item).map(([k, v], idx) => (
                                                            <div key={idx}>
                                                                <span className="font-medium text-gray-800">{k}:</span>{" "}
                                                                <span className="text-gray-700">{v as string}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                ) : null
                                            ))}
                                        </div>
                                    ) : typeof value === "object" && value !== null ? (
                                        <div className="space-y-1">
                                            {Object.entries(value).map(([subKey, subVal], subIndex) => (
                                                <div key={subIndex} className="text-sm">
                                                    <span className="font-medium text-gray-800">{subKey}:</span>{" "}
                                                    <span className="text-gray-700">{subVal as string}</span>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <p className="text-sm text-gray-700">{String(value)}</p>
                                    )}

                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Physical and Chemical Properties */}
                {msdsData["Physical and Chemical Properties"] && (
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                        <div className="bg-gradient-to-r from-purple-800 to-pink-500 text-white px-6 py-4">
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

                {msdsData["Stability and Reactivity"] && (
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                        <div className="bg-gradient-to-r from-yellow-700 to-orange-500 text-white px-6 py-4">
      <div className="space-y-6">
        {/* Critical Safety Information - Top Priority */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {renderSection("Product Identification", msdsData["Product Identification"], "bg-gradient-to-r from-blue-500 to-cyan-500", Flask)}
          {renderSection("Hazard Information", msdsData["Hazards Identification"], "bg-gradient-to-r from-red-500 to-orange-500", AlertTriangle)}
        </div>

        {/* Composition Information */}
        {msdsData["Composition"] && (
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
            <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-6 py-4 flex items-center">
              <TestTube className="w-5 h-5 mr-3" />
              <h3 className="text-lg font-semibold">Composition Information</h3>
            </div>
            <div className="p-6">
              <div className="overflow-x-auto">
                <div className="grid grid-cols-1 gap-4">
                  {Array.isArray(msdsData["Composition"]) ? (
                    msdsData["Composition"].map((item: any, index: number) => (
                      <div key={index} className="bg-green-50 rounded-lg p-4 border border-green-200">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                          {Object.entries(item).map(([key, value]) => (
                            <div key={key} className="flex flex-col">
                              <span className="text-xs font-medium text-green-700 uppercase tracking-wide">{key}</span>
                              <span className="text-sm text-green-900 font-medium mt-1">{String(value)}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="bg-green-50 rounded-lg p-4">
                      <p className="text-green-900">{String(msdsData["Composition"])}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Emergency Response - High Priority */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {renderSection("First Aid Measures", msdsData["First Aid Measures"], "bg-gradient-to-r from-green-600 to-emerald-600", Shield)}
          {renderSection("Fire Fighting Measures", msdsData["Fire Fighting Measures"], "bg-gradient-to-r from-orange-500 to-red-500", AlertTriangle)}
        </div>

        {/* Handling & Storage */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {renderSection("Handling and Storage", msdsData["Handling and Storage"], "bg-gradient-to-r from-indigo-500 to-blue-600", Beaker)}
          {renderSection("Accidental Release Measures", msdsData["Accidental Release Measures"], "bg-gradient-to-r from-teal-500 to-cyan-500", AlertTriangle)}
        </div>

        {/* Technical Properties */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {renderSection("Physical and Chemical Properties", msdsData["Physical and Chemical Properties"], "bg-gradient-to-r from-blue-600 to-indigo-600", Flask)}
          {renderSection("Stability and Reactivity", msdsData["Stability and Reactivity"], "bg-gradient-to-r from-yellow-500 to-orange-500", Zap)}
        </div>

        {/* Health & Environmental */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {renderSection("Exposure Controls / Personal Protection", msdsData["Exposure Controls Personal Protection"], "bg-gradient-to-r from-cyan-500 to-blue-500", Shield)}
          {renderSection("Toxicological Information", msdsData["Toxicological Information"], "bg-gradient-to-r from-red-600 to-pink-600", AlertTriangle)}
        </div>

        {/* Regulatory & Environmental */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {renderSection("Ecological Information", msdsData["Ecological Information"], "bg-gradient-to-r from-green-500 to-emerald-500", Globe)}
          {renderSection("Transport Information", msdsData["Transport Information"], "bg-gradient-to-r from-purple-500 to-indigo-600", Globe)}
        </div>

        {/* Additional Information */}
        <div className="grid grid-cols-1 gap-6">
          {renderSection("Regulatory Information", msdsData["Regulatory Information"], "bg-gradient-to-r from-gray-600 to-gray-700", FileText)}
        </div>

        {/* Disclaimer */}
        {msdsData["Other Information"] && (
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
            <h4 className="font-semibold text-blue-900 mb-3 flex items-center">
              <FileText className="w-5 h-5 mr-2" />
              Important Information
            </h4>
            <p className="text-blue-800 text-sm leading-relaxed">
              {typeof msdsData["Other Information"] === 'string' 
                ? msdsData["Other Information"] 
                : msdsData["Other Information"]?.Disclaimer || 'Please refer to the complete MSDS for detailed safety information.'}
            </p>
          </div>
        )}
        </div>
    );
};

export default LabChemicalDetail;