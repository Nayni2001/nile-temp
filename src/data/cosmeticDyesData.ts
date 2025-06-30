export const cosmeticDyesData = {
  category: "Cosmetic Dyes",
  details: {
    description: "Premium cosmetic grade dyes for hair coloring and beauty applications",
    products: [
      {
        CINo: "BASIC ORANGE 31",
        CASNo: "97404-02-9",
        specifications: {
          Grade: "Cosmetic Ultra Pure",
          INCIName: "BASIC ORANGE 31",
          ChemicalDescription: "I H- Imidazolium, 2-[(4-Aminophenyl) Azo]-1,3-Dimethyl-, Chloride",
          MolecularFormula: "C11H14N5Cl",
          TradeName: "DBSO3X",
          EINECSNo: "306-764-4",
          PhysicalAppearance: "Dark Brown Black Powder",
          MolecularWeight: "251.718 (Complies)",
          "MaxAbsorption_482nm_±5nm": "Complies",
          "HPLCPurity_Min98Percent": "Complies",
          "LossOnDrying_135C_8PercentMax": "Complies",
          BasisOfSale: "On As Is Basis",
          "StablePHRange_1percent_solution": "4 to 11 (Complies)",
          "IronContent_100ppmMax": "100 ppm",
          "Lead_Pb_10mgPerKg": "Passes",
          "Mercury_Hg_1mgPerKg": "Passes",
          "Arsenic_As_2mgPerKg": "Passes"
        }
      },
      {
        CINo: "BASIC RED 51",
        CASNo: "77061-58-6",
        specifications: {
          EndCustomer: "NA",
          Grade: "Grade I (PURE)",
          INCIName: "BASIC RED 51",
          TradeName: "BRED5X (PURE)",
          ChemicalDescription: "I H- Imidazolium, 2-[[4-(Dimethylamino) Phenyl] Azo]-1,3-Dimethyl-, Chloride",
          MolecularFormula: "C13H18N5Cl",
          EINECSNo: "278-601-4",
          PhysicalAppearance: "Dark Bluish Red Colour Powder trace with lumps",
          "HPLCPurity_ByAreaMethod_99PercentMin": "Complies",
          "StablePHRange_1percent_solution": "4 to 11 (Complies)",
          "SolventResidues_Insolubles_0_5PercentMax": "NIL on Whatman No.40 FP",
          "MaxAbsorption_523nm_±5nm_Range": "0.800 Min to 0.870 Max (Complies)",
          "LossOnDrying_135C_5PercentMax": "Complies",
          BasisOfSale: "On As Is Basis",
          SolubilityInWater: "Very Good (Complies)",
          TypicalColorInFormulations: "Vibrant Red",
          "IronContent_100ppmMax": "100 ppm",
          "Lead_Pb_10mgPerKg": "Passes",
          "Mercury_Hg_1mgPerKg": "Passes",
          "Arsenic_As_2mgPerKg": "Passes"
        }
      },
      {
        CINo: "BASIC RED 76",
        CASNo: "68391-30-0",
        specifications: {
          Description: "Hair dye which is used in the preparation of hair colors.",
          ChemicalFormula: "C20H22N3O2Cl",
          ChemicalName: "8-[(2-Methoxy-1-Phenyl)azo]-7-hydroxy N,N,N Trimethyl-2-Naphthalenaminium Chloride",
          CASRegistration: "68391-30-0",
          "MolecularWeight_g_per_mole": "371.5",
          Application: "Hair Color/Hair Dye",
          MolecularFormula_Alt: "C15H19N3O4S",
          HSCode: "32041329",
          Shape: "Granules",
          Solubility: "Soluble",
          PurityPercent: "99",
          AlternateCASNo: "68259-00-7"
        }
      },
      {
        CINo: "BASIC BLUE 99",
        CASNo: "68123-13-7",
        specifications: {
          Description: "Hair dye which is used in the preparation of hair colors.",
          MolecularFormula: "C19H20BrN4O2Cl",
          CASNo: "68123-13-7",
          EINECSNo: "268-544-3",
          HSCode: "32041359",
          ChemicalName: "3-[(4-Amino-6-Bromo-5,8-dihydro-1-hydroxy-8-Imino-5-Oxo-2-Naphthalenyl) amino] N,N,N-Trimethyl benzenaminium Chloride"
        }
      },
      {
        CINo: "BASIC YELLOW 57",
        CASNo: "68391-32-2",
        specifications: {
          Description: "Hair dye which is used in the preparation of hair colors.",
          Application: "Hair Color/Hair Dye"
        }
      },
      {
        CINo: "BASIC YELLOW 87",
        CASNo: "68259-00-7",
        specifications: {
          Description: "Hair dye which is used in the preparation of hair colors.",
          MolecularFormula: "C15H19N3O4S",
          CASNo: "68259-00-7",
          EINECSNo: "268-544-3"
        }
      },
      {
        CINo: "BASIC BROWN 16",
        CASNo: "26381-41-9",
        specifications: {
          Description: "Hair dye which is used in the preparation of hair colors.",
          MolecularFormula: "C19H21N4OCl",
          EINECSNo: "247-640-9",
          HSCode: "32041392",
          CASNo: "26381-41-9",
          "MolecularWeight_g_per_mole": "356.5",
          ChemicalName: "8-[(4-Amino-1-Phenyl)azo]-7-hydroxy N,N,N Trimethyl-2-Naphthalenaminium Chloride",
          CASRegistration: "26381-41-9",
          Application: "Hair Color/Hair dye"
        }
      },
      {
        CINo: "BASIC BROWN 17",
        CASNo: "68391-32-2",
        specifications: {
          Description: "Hair dye which is used in the preparation of hair colors.",
          ChemicalFormula: "C19H20N5O3Cl",
          "MolecularWeight_g_per_mole": "401.5",
          ChemicalName: "8-[(4-Amino-3-nitrophenyl)azo]-7-hydroxy-N,N,N Trimethyl-2-Naphthalenaminium Chloride",
          CASRegistration: "68391-32-2",
          Application: "Hair Color/Hair dye"
        }
      }
    ]
  }
};

export const getProductColor = (ciNo: string): string => {
  const colorMap: { [key: string]: string } = {
    'ORANGE': 'orange',
    'RED': 'red',
    'BLUE': 'blue',
    'YELLOW': 'yellow',
    'BROWN': 'amber',
    'VIOLET': 'purple',
    'GREEN': 'green'
  };
  
  const ciUpper = ciNo.toUpperCase();
  
  for (const [color, tailwindColor] of Object.entries(colorMap)) {
    if (ciUpper.includes(color)) {
      return tailwindColor;
    }
  }
  
  return 'purple'; // Default to purple for cosmetic dyes
};

export const getProductId = (ciNo: string): string => {
  return ciNo.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
};