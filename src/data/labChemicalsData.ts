// Lab Chemicals Data
export interface LabChemical {
  id: string;
  product: string;
  code: string;
  CASNo?: string;
  molecularFormula?: string;
  molecularWeight?: string;
  grade: string;
  subgroup: string;
  specifications?: {
    [key: string]: any;
  };
  msds?: {
    [key: string]: any;
  };
}

export const labChemicalsData = {
  title: "Lab Chemicals",
  description: "High-quality reagents and metal salts as per A.R, G.R / ACS grades for laboratory and research applications. Our comprehensive range includes analytical reagents, buffer solutions, and specialized compounds for precise analytical work.",
  products: [
    {
      id: "sodium-chloride-ar",
      product: "Sodium Chloride A.R.",
      code: "LC-001",
      CASNo: "7647-14-5",
      molecularFormula: "NaCl",
      molecularWeight: "58.44",
      grade: "A.R. Grade",
      subgroup: "Q - S",
      specifications: {
        "Assay (NaCl)": "≥ 99.5%",
        "pH (5% solution)": "5.0 - 9.0",
        "Insoluble matter": "≤ 0.005%",
        "Loss on drying": "≤ 0.5%",
        "Heavy metals (as Pb)": "≤ 5 ppm",
        "Iron (Fe)": "≤ 2 ppm",
        "Calcium (Ca)": "≤ 10 ppm",
        "Magnesium (Mg)": "≤ 5 ppm",
        "Potassium (K)": "≤ 50 ppm",
        "Sulfate (SO4)": "≤ 20 ppm",
        "Appearance": "White crystalline powder"
      },
      msds: {
        "Product Identification": {
          "Product Name": "Sodium Chloride A.R.",
          "Chemical Name": "Sodium Chloride",
          "Synonyms": ["Table Salt", "Halite", "Rock Salt"],
          "Molecular Formula": "NaCl",
          "Molecular Weight": "58.44 g/mol",
          "CAS Number": "7647-14-5"
        },
        "Composition Information on Ingredients": [
          {
            "Component": "Sodium Chloride",
            "CAS Number": "7647-14-5",
            "Percentage": "≥ 99.5%",
            "Hazardous": false
          }
        ],
        "Hazards Identification": {
          "Emergency Overview": "White crystalline solid. Not considered hazardous under normal conditions of use.",
          "Primary Routes of Exposure": "Inhalation, ingestion, skin and eye contact",
          "Acute Health Effects": {
            "Inhalation": "May cause irritation to respiratory tract",
            "Ingestion": "Large amounts may cause nausea and vomiting",
            "Skin Contact": "Generally not irritating",
            "Eye Contact": "May cause mild irritation"
          }
        },
        "First Aid Measures": {
          "Inhalation": "Remove to fresh air. If breathing is difficult, give oxygen.",
          "Ingestion": "Give large amounts of water. Do not induce vomiting.",
          "Skin Contact": "Wash with soap and water.",
          "Eye Contact": "Flush with water for 15 minutes. Seek medical attention if irritation persists."
        },
        "Fire Fighting Measures": {
          "Flash Point": "Not applicable",
          "Extinguishing Media": "Use any means suitable for surrounding fire",
          "Special Fire Fighting Procedures": "Wear self-contained breathing apparatus",
          "Unusual Fire and Explosion Hazards": "None known"
        },
        "Physical and Chemical Properties": {
          "Appearance": "White crystalline powder",
          "Odor": "Odorless",
          "pH": "6.7-7.3 (5% aqueous solution)",
          "Melting Point": "801°C",
          "Boiling Point": "1413°C",
          "Solubility": "360 g/L in water at 25°C",
          "Density": "2.16 g/cm³"
        },
        "Stability and Reactivity": {
          "Stability": "Stable under normal conditions",
          "Incompatible Materials": "Strong acids, strong bases",
          "Hazardous Decomposition Products": "None under normal conditions",
          "Hazardous Polymerization": "Will not occur"
        }
      }
    },
    {
      id: "sulfuric-acid-ar",
      product: "Sulfuric Acid A.R.",
      code: "LC-002",
      CASNo: "7664-93-9",
      molecularFormula: "H2SO4",
      molecularWeight: "98.08",
      grade: "A.R. Grade",
      subgroup: "Q - S",
      specifications: {
        "Assay (H2SO4)": "95.0 - 98.0%",
        "Residue after ignition": "≤ 0.002%",
        "Chloride (Cl)": "≤ 0.5 ppm",
        "Nitrate (NO3)": "≤ 2 ppm",
        "Phosphate (PO4)": "≤ 0.5 ppm",
        "Iron (Fe)": "≤ 0.2 ppm",
        "Heavy metals (as Pb)": "≤ 1 ppm",
        "Arsenic (As)": "≤ 0.01 ppm",
        "Appearance": "Clear, colorless liquid"
      },
      msds: {
        "Product Identification": {
          "Product Name": "Sulfuric Acid A.R.",
          "Chemical Name": "Sulfuric Acid",
          "Synonyms": ["Oil of Vitriol", "Battery Acid"],
          "Molecular Formula": "H2SO4",
          "Molecular Weight": "98.08 g/mol",
          "CAS Number": "7664-93-9"
        },
        "Composition Information on Ingredients": [
          {
            "Component": "Sulfuric Acid",
            "CAS Number": "7664-93-9",
            "Percentage": "95.0 - 98.0%",
            "Hazardous": true
          }
        ],
        "Hazards Identification": {
          "Emergency Overview": "DANGER! Corrosive liquid and vapor. Causes severe burns to skin, eyes, and respiratory tract.",
          "Primary Routes of Exposure": "Inhalation, skin and eye contact",
          "Acute Health Effects": {
            "Inhalation": "Causes severe respiratory tract burns. May be fatal if inhaled.",
            "Skin Contact": "Causes severe burns and tissue destruction",
            "Eye Contact": "Causes severe burns and permanent eye damage",
            "Ingestion": "Causes severe burns to mouth, throat, and stomach"
          }
        },
        "First Aid Measures": {
          "Inhalation": "Remove to fresh air immediately. Get medical attention immediately.",
          "Skin Contact": "Flush immediately with large amounts of water for at least 15 minutes. Remove contaminated clothing.",
          "Eye Contact": "Flush immediately with water for at least 15 minutes. Get medical attention immediately.",
          "Ingestion": "Do NOT induce vomiting. Give large amounts of water. Get medical attention immediately."
        },
        "Fire Fighting Measures": {
          "Flash Point": "Not applicable",
          "Extinguishing Media": "Use water spray, dry chemical, or carbon dioxide",
          "Special Fire Fighting Procedures": "Wear full protective equipment including SCBA",
          "Unusual Fire and Explosion Hazards": "Reacts violently with water generating heat"
        },
        "Physical and Chemical Properties": {
          "Appearance": "Clear, colorless, oily liquid",
          "Odor": "Odorless",
          "pH": "< 1 (strongly acidic)",
          "Melting Point": "10°C",
          "Boiling Point": "337°C",
          "Density": "1.84 g/cm³",
          "Vapor Pressure": "< 0.001 mmHg at 20°C"
        }
      }
    },
    {
      id: "potassium-permanganate-ar",
      product: "Potassium Permanganate A.R.",
      code: "LC-003",
      CASNo: "7722-64-7",
      molecularFormula: "KMnO4",
      molecularWeight: "158.03",
      grade: "A.R. Grade",
      subgroup: "N - P",
      specifications: {
        "Assay (KMnO4)": "≥ 99.0%",
        "Insoluble matter": "≤ 0.05%",
        "Chloride (Cl)": "≤ 0.01%",
        "Sulfate (SO4)": "≤ 0.02%",
        "Nitrate (NO3)": "≤ 0.005%",
        "Heavy metals (as Pb)": "≤ 0.001%",
        "Iron (Fe)": "≤ 0.002%",
        "Appearance": "Dark purple crystals"
      },
      msds: {
        "Product Identification": {
          "Product Name": "Potassium Permanganate A.R.",
          "Chemical Name": "Potassium Permanganate",
          "Molecular Formula": "KMnO4",
          "Molecular Weight": "158.03 g/mol",
          "CAS Number": "7722-64-7"
        },
        "Hazards Identification": {
          "Emergency Overview": "Strong oxidizer. May cause fire or explosion in contact with combustible materials.",
          "Acute Health Effects": {
            "Inhalation": "May cause respiratory irritation",
            "Skin Contact": "May cause burns and staining",
            "Eye Contact": "Causes severe eye irritation",
            "Ingestion": "Harmful if swallowed"
          }
        },
        "Physical and Chemical Properties": {
          "Appearance": "Dark purple crystalline solid",
          "Odor": "Odorless",
          "Melting Point": "240°C (decomposes)",
          "Solubility": "64 g/L in water at 20°C",
          "Density": "2.70 g/cm³"
        }
      }
    },
    {
      id: "hydrochloric-acid-ar",
      product: "Hydrochloric Acid A.R.",
      code: "LC-004",
      CASNo: "7647-01-0",
      molecularFormula: "HCl",
      molecularWeight: "36.46",
      grade: "A.R. Grade",
      subgroup: "G - K",
      specifications: {
        "Assay (HCl)": "35.0 - 37.0%",
        "Residue after ignition": "≤ 0.001%",
        "Free chlorine": "≤ 0.001%",
        "Bromide (Br)": "≤ 0.01%",
        "Sulfate (SO4)": "≤ 0.0002%",
        "Phosphate (PO4)": "≤ 0.0001%",
        "Iron (Fe)": "≤ 0.00002%",
        "Heavy metals (as Pb)": "≤ 0.0001%",
        "Arsenic (As)": "≤ 0.000001%"
      }
    },
    {
      id: "sodium-hydroxide-ar",
      product: "Sodium Hydroxide A.R.",
      code: "LC-005",
      CASNo: "1310-73-2",
      molecularFormula: "NaOH",
      molecularWeight: "40.00",
      grade: "A.R. Grade",
      subgroup: "Q - S",
      specifications: {
        "Assay (NaOH)": "≥ 97.0%",
        "Sodium carbonate (Na2CO3)": "≤ 2.0%",
        "Chloride (Cl)": "≤ 0.005%",
        "Sulfate (SO4)": "≤ 0.003%",
        "Iron (Fe)": "≤ 0.001%",
        "Heavy metals (as Pb)": "≤ 0.002%",
        "Nickel (Ni)": "≤ 0.001%"
      }
    },
    {
      id: "copper-sulfate-ar",
      product: "Copper Sulfate Pentahydrate A.R.",
      code: "LC-006",
      CASNo: "7758-99-8",
      molecularFormula: "CuSO4·5H2O",
      molecularWeight: "249.68",
      grade: "A.R. Grade",
      subgroup: "C - C",
      specifications: {
        "Assay (CuSO4·5H2O)": "≥ 99.0%",
        "Insoluble matter": "≤ 0.005%",
        "pH (5% solution)": "3.5 - 4.5",
        "Chloride (Cl)": "≤ 0.001%",
        "Iron (Fe)": "≤ 0.003%",
        "Lead (Pb)": "≤ 0.002%",
        "Zinc (Zn)": "≤ 0.005%",
        "Appearance": "Blue crystalline solid"
      }
    },
    {
      id: "silver-nitrate-ar",
      product: "Silver Nitrate A.R.",
      code: "LC-007",
      CASNo: "7761-88-8",
      molecularFormula: "AgNO3",
      molecularWeight: "169.87",
      grade: "A.R. Grade",
      subgroup: "Q - S",
      specifications: {
        "Assay (AgNO3)": "≥ 99.8%",
        "pH (5% solution)": "5.0 - 6.5",
        "Insoluble matter": "≤ 0.005%",
        "Chloride (Cl)": "≤ 0.0003%",
        "Sulfate (SO4)": "≤ 0.002%",
        "Iron (Fe)": "≤ 0.0005%",
        "Copper (Cu)": "≤ 0.0005%",
        "Lead (Pb)": "≤ 0.001%"
      }
    },
    {
      id: "ammonium-hydroxide-ar",
      product: "Ammonium Hydroxide A.R.",
      code: "LC-008",
      CASNo: "1336-21-6",
      molecularFormula: "NH4OH",
      molecularWeight: "35.05",
      grade: "A.R. Grade",
      subgroup: "A - A",
      specifications: {
        "Assay (NH3)": "28.0 - 30.0%",
        "Residue after ignition": "≤ 0.001%",
        "Chloride (Cl)": "≤ 0.0005%",
        "Sulfate (SO4)": "≤ 0.0002%",
        "Iron (Fe)": "≤ 0.0002%",
        "Heavy metals (as Pb)": "≤ 0.0005%",
        "Phosphate (PO4)": "≤ 0.0001%"
      }
    },
    {
      id: "acetic-acid-ar",
      product: "Acetic Acid A.R.",
      code: "LC-009",
      CASNo: "64-19-7",
      molecularFormula: "CH3COOH",
      molecularWeight: "60.05",
      grade: "A.R. Grade",
      subgroup: "A - A",
      specifications: {
        "Assay (CH3COOH)": "≥ 99.5%",
        "Water content": "≤ 0.2%",
        "Residue after ignition": "≤ 0.001%",
        "Chloride (Cl)": "≤ 0.0002%",
        "Sulfate (SO4)": "≤ 0.0005%",
        "Iron (Fe)": "≤ 0.0001%",
        "Heavy metals (as Pb)": "≤ 0.0005%",
        "Appearance": "Clear, colorless liquid"
      }
    },
    {
      id: "barium-chloride-ar",
      product: "Barium Chloride Dihydrate A.R.",
      code: "LC-010",
      CASNo: "10326-27-9",
      molecularFormula: "BaCl2·2H2O",
      molecularWeight: "244.26",
      grade: "A.R. Grade",
      subgroup: "B - B",
      specifications: {
        "Assay (BaCl2·2H2O)": "≥ 99.0%",
        "pH (5% solution)": "5.2 - 8.5",
        "Insoluble matter": "≤ 0.005%",
        "Sulfate (SO4)": "≤ 0.005%",
        "Iron (Fe)": "≤ 0.001%",
        "Heavy metals (as Pb)": "≤ 0.002%",
        "Strontium (Sr)": "≤ 0.3%",
        "Appearance": "White crystalline powder"
      }
    },
    {
      id: "calcium-carbonate-ar",
      product: "Calcium Carbonate A.R.",
      code: "LC-011",
      CASNo: "471-34-1",
      molecularFormula: "CaCO3",
      molecularWeight: "100.09",
      grade: "A.R. Grade",
      subgroup: "C - C",
      specifications: {
        "Assay (CaCO3)": "≥ 99.0%",
        "Insoluble in HCl": "≤ 0.05%",
        "Loss on ignition": "43.5 - 44.5%",
        "Chloride (Cl)": "≤ 0.003%",
        "Sulfate (SO4)": "≤ 0.03%",
        "Iron (Fe)": "≤ 0.003%",
        "Heavy metals (as Pb)": "≤ 0.001%",
        "Magnesium (Mg)": "≤ 0.05%",
        "Appearance": "White powder"
      }
    },
    {
      id: "ethanol-ar",
      product: "Ethanol A.R.",
      code: "LC-012",
      CASNo: "64-17-5",
      molecularFormula: "C2H5OH",
      molecularWeight: "46.07",
      grade: "A.R. Grade",
      subgroup: "D - F",
      specifications: {
        "Assay (C2H5OH)": "≥ 99.5%",
        "Water content": "≤ 0.2%",
        "Residue after evaporation": "≤ 0.001%",
        "Acidity (as CH3COOH)": "≤ 0.002%",
        "Alkalinity (as NH3)": "≤ 0.001%",
        "Aldehydes (as CH3CHO)": "≤ 0.001%",
        "Methanol": "≤ 0.05%",
        "Appearance": "Clear, colorless liquid"
      }
    },
    {
      id: "glucose-ar",
      product: "Glucose Anhydrous A.R.",
      code: "LC-013",
      CASNo: "50-99-7",
      molecularFormula: "C6H12O6",
      molecularWeight: "180.16",
      grade: "A.R. Grade",
      subgroup: "G - K",
      specifications: {
        "Assay (C6H12O6)": "≥ 99.5%",
        "Loss on drying": "≤ 0.5%",
        "Residue on ignition": "≤ 0.1%",
        "pH (5% solution)": "5.0 - 7.0",
        "Chloride (Cl)": "≤ 0.005%",
        "Sulfate (SO4)": "≤ 0.01%",
        "Heavy metals (as Pb)": "≤ 0.0005%",
        "Reducing substances": "≤ 0.2%",
        "Appearance": "White crystalline powder"
      }
    },
    {
      id: "magnesium-sulfate-ar",
      product: "Magnesium Sulfate Heptahydrate A.R.",
      code: "LC-014",
      CASNo: "10034-99-8",
      molecularFormula: "MgSO4·7H2O",
      molecularWeight: "246.47",
      grade: "A.R. Grade",
      subgroup: "L - M",
      specifications: {
        "Assay (MgSO4·7H2O)": "≥ 99.0%",
        "pH (5% solution)": "5.5 - 7.0",
        "Insoluble matter": "≤ 0.005%",
        "Chloride (Cl)": "≤ 0.001%",
        "Iron (Fe)": "≤ 0.001%",
        "Heavy metals (as Pb)": "≤ 0.001%",
        "Calcium (Ca)": "≤ 0.05%",
        "Manganese (Mn)": "≤ 0.001%",
        "Appearance": "White crystalline solid"
      }
    },
    {
      id: "nitric-acid-ar",
      product: "Nitric Acid A.R.",
      code: "LC-015",
      CASNo: "7697-37-2",
      molecularFormula: "HNO3",
      molecularWeight: "63.01",
      grade: "A.R. Grade",
      subgroup: "N - P",
      specifications: {
        "Assay (HNO3)": "68.0 - 70.0%",
        "Residue after ignition": "≤ 0.0002%",
        "Chloride (Cl)": "≤ 0.00005%",
        "Sulfate (SO4)": "≤ 0.0001%",
        "Iron (Fe)": "≤ 0.00002%",
        "Heavy metals (as Pb)": "≤ 0.00005%",
        "Phosphate (PO4)": "≤ 0.00005%",
        "Appearance": "Clear, colorless to pale yellow liquid"
      }
    },
    {
      id: "toluene-ar",
      product: "Toluene A.R.",
      code: "LC-016",
      CASNo: "108-88-3",
      molecularFormula: "C7H8",
      molecularWeight: "92.14",
      grade: "A.R. Grade",
      subgroup: "T - V",
      specifications: {
        "Assay (C7H8)": "≥ 99.5%",
        "Water content": "≤ 0.03%",
        "Residue after evaporation": "≤ 0.001%",
        "Acidity (as CH3COOH)": "≤ 0.001%",
        "Benzene": "≤ 0.05%",
        "Thiophene": "Passes test",
        "Appearance": "Clear, colorless liquid"
      }
    },
    {
      id: "zinc-sulfate-ar",
      product: "Zinc Sulfate Heptahydrate A.R.",
      code: "LC-017",
      CASNo: "7446-20-0",
      molecularFormula: "ZnSO4·7H2O",
      molecularWeight: "287.56",
      grade: "A.R. Grade",
      subgroup: "W - Z",
      specifications: {
        "Assay (ZnSO4·7H2O)": "≥ 99.0%",
        "pH (5% solution)": "4.4 - 6.0",
        "Insoluble matter": "≤ 0.005%",
        "Chloride (Cl)": "≤ 0.001%",
        "Iron (Fe)": "≤ 0.002%",
        "Heavy metals (as Pb)": "≤ 0.001%",
        "Copper (Cu)": "≤ 0.002%",
        "Manganese (Mn)": "≤ 0.001%",
        "Appearance": "White crystalline solid"
      }
    }
  ]
};

// Helper functions
export function getProductColor(productName: string): string {
  const colors = ['blue', 'green', 'purple', 'red', 'orange', 'teal', 'indigo', 'pink'];
  const hash = productName.split('').reduce((a, b) => {
    a = ((a << 5) - a) + b.charCodeAt(0);
    return a & a;
  }, 0);
  return colors[Math.abs(hash) % colors.length];
}

export function getAllProducts(): LabChemical[] {
  return labChemicalsData.products;
}

export function getProductById(id: string): LabChemical | undefined {
  return labChemicalsData.products.find(product => product.id === id);
}

export function getProductsByGrade(grade: string): LabChemical[] {
  return labChemicalsData.products.filter(product => product.grade === grade);
}

export function getProductsBySubgroup(subgroup: string): LabChemical[] {
  return labChemicalsData.products.filter(product => product.subgroup === subgroup);
}