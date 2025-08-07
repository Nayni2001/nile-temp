const information =
  "Nile chemicals provides the information contained herein in good faith but makes no representation as to its comprehensiveness or accuracy. This document is intended only as a guide to the appropriate precautionary handling of the material by a properly trained person using this product. Individuals receiving the information must exercise their independent judgment in determining its appropriateness for a particular purpose. Nile chemicals makes no representations or warranties, either express or implied, including without limitation any warranties of merchantability, fitness for a particular purpose with respect to the information set forth herein or the product to which the information refers. Accordingly, nile chemicals will not be responsible for damages resulting from use of or reliance upon this information.";
const employerInformation =
  "Employers should use this information only as a supplement to other information gathered by them, and should make independent judgement of suitability of this information to ensure proper use and protect the health and safety of employees.  This information is furnished without warranty, and any use of the product not in conformance with this Material Safety Data Sheet, or in combination with any other product or process, is the responsibility of the user.";
const correctInformation = "The above information is believed to be correct but does not purport to be all inclusive and shall be used only as a guide. The information in this document is based on the present state of our knowledge and is applicable to the product with regard to appropriate safety precautions. It does not represent any guarantee of the properties of the product. Nile Chemicals and its Affiliates shall not be held liable for any damage resulting from handling or from contact with the above product. the reverse side of invoice or packing slip for additional terms and conditions of sale.";
export const labChemicalsData: LabChemicals = {
  category: "Lab Chemicals",
  details: {
    description:
      "We are leading international supplier and distributor of fine chemicals, metals, and materials. Our products are used in a variety of industrial, academic and institutional research, development and production applications. We offer customers the highest quality and purity in fine chemical products.",
    products: [
      {
        code: "111",
        CASNo: "21293-29-8",
        product: "ABSCISIC ACID (ABA)",
        COA: true,
        MSDS: {
          "Product Identification": {
            "Product Name": "Abscisic acid",
            "CAS#": "14375-45-2",
            "Chemical Name": "Not available.",
            "Chemical Formula": "C₁₅H₂₀O₄",
          },
          Composition: [
            {
              Name: "Abscisic acid",
              "CAS #": "14375-45-2",
              Percent: "100",
              "Toxicological Data on Ingredients":
                "Abscisic acid LD50: Not available. LC50: Not available.",
            },
          ],
          "Hazards Identification": {
            "Potential Acute Health Effects":
              "Hazardous in case of skin contact (irritant), of eye contact (irritant), of ingestion, of inhalation (lung irritant).",
            "Potential Chronic Health Effects": {
              "Carcinogenic Effects": "Not available.",
              "Mutagenic Effects": "Not available.",
              "Teratogenic Effects": "Not available.",
              "Developmental Toxicity": "Not available.",
              Additional:
                "Repeated or prolonged exposure is not known to aggravate medical condition.",
            },
          },
          "First Aid Measures": {
            "Eye Contact":
              "Check for and remove any contact lenses. In case of contact, immediately flush eyes with plenty of water for at least 15 minutes. Get medical attention.",
            "Skin Contact":
              "In case of contact, immediately flush skin with plenty of water. Cover the irritated skin with an emollient. Remove contaminated clothing and shoes. Wash clothing before reuse. Thoroughly clean shoes before reuse. Get medical attention.",
            "Serious Skin Contact":
              "Wash with a disinfectant soap and cover the contaminated skin with an anti-bacterial cream. Seek medical attention.",
            Inhalation:
              "If inhaled, remove to fresh air. If not breathing, give artificial respiration. If breathing is difficult, give oxygen. Get medical attention.",
            "Serious Inhalation": "Not available.",
            Ingestion:
              "Do NOT induce vomiting unless directed to do so by medical personnel. Never give anything by mouth to an unconscious person. If large quantities of this material are swallowed, call a physician immediately. Loosen tight clothing such as a collar, tie, belt or waistband.",
            "Serious Ingestion": "Not available.",
          },
          "Fire Fighting Measures": {
            "Flammability of the Product":
              "May be combustible at high temperature.",
            "Auto-Ignition Temperature": "Not available.",
            "Flash Points": "Not available.",
            "Flammable Limits": "Not available.",
            "Products of Combustion":
              "These products are carbon oxides (CO, CO2).",
            "Fire Hazards in Presence of Various Substances": "Not available.",
            "Explosion Hazards in Presence of Various Substances":
              "Risks of explosion of the product in presence of mechanical impact: Not available. Risks of explosion of the product in presence of static discharge: Not available.",
            "Fire Fighting Media and Instructions":
              "SMALL FIRE: Use DRY chemical powder. LARGE FIRE: Use water spray, fog or foam. Do not use water jet.",
            "Special Remarks on Fire Hazards": "Not available.",
            "Special Remarks on Explosion Hazards": "Not available.",
          },
          "Accidental Release Measures": {
            "Small Spill":
              "Use appropriate tools to put the spilled solid in a convenient waste disposal container. Finish cleaning by spreading water on the contaminated surface and dispose of according to local and regional authority requirements.",
            "Large Spill":
              "Use a shovel to put the material into a convenient waste disposal container. Finish cleaning by spreading water on the contaminated surface and allow to evacuate through the sanitary system.",
          },
          "Handling and Storage": {
            Precautions:
              "Keep away from heat. Keep away from sources of ignition. Empty containers pose a fire risk, evaporate the residue under a fume hood. Ground all equipment containing material. Do not breathe dust. Wear suitable protective clothing. In case of insufficient ventilation, wear suitable respiratory equipment. If you feel unwell, seek medical attention and show the label when possible. Avoid contact with skin and eyes.",
            Storage:
              "Keep container tightly closed. Keep container in a cool, well-ventilated area.",
          },
          "Exposure Controls Personal Protection": {
            "Engineering Controls":
              "Use process enclosures, local exhaust ventilation, or other engineering controls to keep airborne levels below recommended exposure limits. If user operations generate dust, fume or mist, use ventilation to keep exposure to airborne contaminants below the exposure limit.",
            "Personal Protection":
              "Splash goggles. Lab coat. Dust respirator. Be sure to use an approved/certified respirator or equivalent. Gloves.",
            "Personal Protection in Case of a Large Spill":
              "Splash goggles. Full suit. Dust respirator. Boots. Gloves. A self contained breathing apparatus should be used to avoid inhalation of the product. Suggested protective clothing might not be sufficient; consult a specialist BEFORE handling this product.",
            "Exposure Limits": "Not available.",
          },
          "Physical and Chemical Properties": {
            "Physical state and appearance": "Solid.",
            Odor: "Not available.",
            Taste: "Not available.",
            "Molecular Weight": "264.32 g/mole",
            Color: "Not available.",
            "pH (1% soln/water)": "Not available.",
            "Boiling Point": "Not available.",
            "Melting Point": "187°C (368.6°F)",
            "Critical Temperature": "Not available.",
            "Specific Gravity": "Not available.",
            "Vapor Pressure": "Not applicable.",
            "Vapor Density": "Not available.",
            Volatility: "Not available.",
            "Odor Threshold": "Not available.",
            "Water/Oil Dist. Coeff.": "Not available.",
            "Ionicity (in Water)": "Not available.",
            "Dispersion Properties": "Not available.",
            Solubility: "Not available.",
          },
          "Stability and Reactivity": {
            Stability: "The product is stable.",
            "Instability Temperature": "Not available.",
            "Conditions of Instability": "Not available.",
            "Incompatibility with various substances": "Not available.",
            Corrosivity: "Non-corrosive in presence of glass.",
            "Special Remarks on Reactivity": "Not available.",
            "Special Remarks on Corrosivity": "Not available.",
            Polymerization: "Will not occur.",
          },
          "Toxicological Information": {
            "Routes of Entry": "Eye contact. Inhalation. Ingestion.",
            "Toxicity to Animals": "LD50: Not available. LC50: Not available.",
            "Chronic Effects on Humans": "Not available.",
            "Other Toxic Effects on Humans":
              "Hazardous in case of skin contact (irritant), of ingestion, of inhalation (lung irritant).",
            "Special Remarks on Toxicity to Animals": "Not available.",
            "Special Remarks on Chronic Effects on Humans": "Not available.",
            "Special Remarks on other Toxic Effects on Humans":
              "Not available.",
          },
          "Ecological Information": {
            Ecotoxicity: "Not available.",
            "BOD5 and COD": "Not available.",
            "Products of Biodegradation":
              "Possibly hazardous short term degradation products are not likely. However, long term degradation products may arise.",
            "Toxicity of the Products of Biodegradation":
              "The products of degradation are more toxic.",
            "Special Remarks on the Products of Biodegradation":
              "Not available.",
          },
          "Transport Information": {
            "DOT Classification":
              "Not a DOT controlled material (United States).",
            Identification: "Not applicable.",
            "Special Provisions for Transport": "Not applicable.",
          },
          "Regulatory Information": {
            "Federal and State Regulations": "No products were found.",
            "Other Regulations": "Not available.",
            "Other Classifications": {
              "WHMIS (Canada)": "Not controlled under WHMIS (Canada).",
              "DSCL (EEC)":
                "R36/37/38- Irritating to eyes, respiratory system and skin.",
              "HMIS (U.S.A.)": {
                "Health Hazard": "2",
                "Fire Hazard": "1",
                Reactivity: "0",
                "Personal Protection": "E",
              },
              "National Fire Protection Association (U.S.A.)": {
                Health: "2",
                Flammability: "1",
                Reactivity: "0",
              },
              "Protective Equipment":
                "Gloves. Lab coat. Dust respirator. Be sure to use an approved/certified respirator or equivalent. Splash goggles.",
            },
          },
          "Other Information": information,
        },
        specifications: {
          "Chemical Formula": "C₁₅H₂₀O₄",
          "Molecular Weight": "264.3",
          Assay: "Min 99.00%",
        },
      },
      {
        code: "112",
        CASNo: "9000-01-5",
        product: "ACACIA GUAR GR (Gum Acacia Powder)",
        COA: true,
        MSDS: {
          "Product Identification": {
            "Product Name": "Arabic gum , Acacia",
            "CAS#": "9000-01-5",
            Synonym: "Acacia",
            "Chemical Name": "Not available.",
            "Chemical Formula": "Not available.",
          },
          Composition: [
            {
              Name: "Arabic gum",
              "CAS #": "9000-01-5",
              Percent: "100",
              "Toxicological Data on Ingredients":
                "Arabic gum: ORAL (LD50): Acute: 16001 mg/kg [Rat]. 16001 mg/kg [Mouse].",
            },
          ],
          "Hazards Identification": {
            "Potential Acute Health Effects":
              "Slightly hazardous in case of skin contact (irritant), of eye contact (irritant), of ingestion, of inhalation.",
            "Potential Chronic Health Effects": {
              "Carcinogenic Effects": "Not available.",
              "Mutagenic Effects": "Not available.",
              "Teratogenic Effects": "Not available.",
              "Developmental Toxicity": "Not available.",
              Additional:
                "Repeated or prolonged exposure is not known to aggravate medical condition.",
            },
          },
          "First Aid Measures": {
            "Eye Contact":
              "Check for and remove any contact lenses. In case of contact, immediately flush eyes with plenty of water for at least 15 minutes. Cold water may be used. Get medical attention if irritation occurs.",
            "Skin Contact":
              "Wash with soap and water. Cover the irritated skin with an emollient. Get medical attention if irritation develops. Cold water may be used.",
            "Serious Skin Contact": "Not available.",
            Inhalation:
              "If inhaled, remove to fresh air. If not breathing, give artificial respiration. If breathing is difficult, give oxygen. Get medical attention.",
            "Serious Inhalation": "Not available.",
            Ingestion:
              "Do NOT induce vomiting unless directed to do so by medical personnel. Never give anything by mouth to an unconscious person. Loosen tight clothing such as a collar, tie, belt or waistband. Get medical attention if symptoms appear.",
            "Serious Ingestion": "Not available.",
          },
          "Fire Fighting Measures": {
            "Flammability of the Product":
              "May be combustible at high temperature.",
            "Auto-Ignition Temperature": "Not available.",
            "Flash Points": "Not available.",
            "Flammable Limits": "Not available.",
            "Products of Combustion": "Not available.",
            "Fire Hazards in Presence of Various Substances": "Not available.",
            "Explosion Hazards in Presence of Various Substances":
              "Risks of explosion of the product in presence of mechanical impact: Not available. Risks of explosion of the product in presence of static discharge: Not available.",
            "Fire Fighting Media and Instructions":
              "SMALL FIRE: Use DRY chemical powder. LARGE FIRE: Use water spray, fog or foam. Do not use water jet.",
            "Special Remarks on Fire Hazards":
              "Material in powder form, capable of creating a dust explosion.",
            "Special Remarks on Explosion Hazards": "Not available.",
          },
          "Accidental Release Measures": {
            "Small Spill":
              "Use appropriate tools to put the spilled solid in a convenient waste disposal container. Finish cleaning by spreading water on the contaminated surface and dispose of according to local and regional authority requirements.",
            "Large Spill":
              "Use a shovel to put the material into a convenient waste disposal container. Finish cleaning by spreading water on the contaminated surface and allow to evacuate through the sanitary system.",
          },
          "Handling and Storage": {
            Precautions:
              "Keep away from heat. Keep away from sources of ignition. Empty containers pose a fire risk, evaporate the residue under a fume hood. Ground all equipment containing material. Do not ingest. Do not breathe dust. If ingested, seek medical advice immediately and show the container or the label.",
            Storage:
              "Keep container tightly closed. Keep container in a cool, well-ventilated area.",
          },
          "Exposure Controls Personal Protection": {
            "Engineering Controls":
              "Use process enclosures, local exhaust ventilation, or other engineering controls to keep airborne levels below recommended exposure limits. If user operations generate dust, fume or mist, use ventilation to keep exposure to airborne contaminants below the exposure limit.",
            "Personal Protection":
              "Safety glasses. Lab coat. Dust respirator. Be sure to use an approved/certified respirator or equivalent. Gloves.",
            "Personal Protection in Case of a Large Spill":
              "Splash goggles. Full suit. Dust respirator. Boots. Gloves. A self contained breathing apparatus should be used to avoid inhalation of the product. Suggested protective clothing might not be sufficient; consult a specialist BEFORE handling this product.",
            "Exposure Limits": "Not available.",
          },
          "Physical and Chemical Properties": {
            "Physical state and appearance": "Solid.",
            Odor: "Not available.",
            Taste: "Not available.",
            "Molecular Weight": "Not available.",
            Color: "Not available.",
            "pH (1% soln/water)": "Not available.",
            "Boiling Point": "Not available.",
            "Melting Point": "Decomposes.",
            "Critical Temperature": "Not available.",
            "Specific Gravity": "1.425 (Water = 1)",
            "Vapor Pressure": "Not applicable.",
            "Vapor Density": "Not available.",
            Volatility: "Not available.",
            "Odor Threshold": "Not available.",
            "Water/Oil Dist. Coeff.": "Not available.",
            "Ionicity (in Water)": "Not available.",
            "Dispersion Properties": "See solubility in water.",
            Solubility: "Easily soluble in cold water.",
          },
          "Stability and Reactivity": {
            Stability: "The product is stable.",
            "Instability Temperature": "Not available.",
            "Conditions of Instability": "Not available.",
            "Incompatibility with various substances": "Not available.",
            Corrosivity: "Non-corrosive in presence of glass.",
            "Special Remarks on Reactivity": "Not available.",
            "Special Remarks on Corrosivity": "Not available.",
            Polymerization: "Will not occur.",
          },
          "Toxicological Information": {
            "Routes of Entry": "Not available.",
            "Toxicity to Animals":
              "Acute oral toxicity (LD50): 16001 mg/kg [Mouse].",
            "Chronic Effects on Humans": "Not available.",
            "Other Toxic Effects on Humans":
              "Slightly hazardous in case of skin contact (irritant), of ingestion, of inhalation.",
            "Special Remarks on Toxicity to Animals": "Not available.",
            "Special Remarks on Chronic Effects on Humans": "Not available.",
            "Special Remarks on other Toxic Effects on Humans":
              "Nuisance dust.",
          },
          "Ecological Information": {
            Ecotoxicity: "Not available.",
            "BOD5 and COD": "Not available.",
            "Products of Biodegradation":
              "Possibly hazardous short term degradation products are not likely. However, long term degradation products may arise.",
            "Toxicity of the Products of Biodegradation":
              "The products of degradation are more toxic.",
            "Special Remarks on the Products of Biodegradation":
              "Not available.",
          },
          "Transport Information": {
            "DOT Classification":
              "Not a DOT controlled material (United States).",
            Identification: "Not applicable.",
            "Special Provisions for Transport": "Not applicable.",
          },
          "Regulatory Information": {
            "Federal and State Regulations": "TSCA 8(b) inventory: Arabic gum",
            "Other Regulations": "Not available.",
            "Other Classifications": {
              "WHMIS (Canada)":
                "CLASS D-2A: Material causing other toxic effects (VERY TOXIC).",
              "DSCL (EEC)":
                "This product is not classified according to the EU regulations.",
              "HMIS (U.S.A.)": {
                "Health Hazard": "1",
                "Fire Hazard": "1",
                Reactivity: "0",
                "Personal Protection": "E",
              },
              "National Fire Protection Association (U.S.A.)": {
                Health: "1",
                Flammability: "1",
                Reactivity: "0",
              },
              "Protective Equipment":
                "Gloves. Lab coat. Dust respirator. Be sure to use an approved/certified respirator or equivalent. Wear appropriate respirator when ventilation is inadequate. Safety glasses.",
            },
          },
          "Other Information": information,
        },
        specifications: {
          "Maximum Limits of Impurities": {
            "Loss on drying": "15%",
            "Insoluble matter": "0.5%",
            "Acid Insoluble ash": "0.25%",
            Ash: "5%",
            "Starch & Dextrine": "Passes test",
          },
        },
      },
      {
        "code": "113",
        "CASNo": "82-32-9",
        "product": "ACENAPHTHENE (For Synthesis)",
        "COA": true,
        "MSDS": {
          "Product Identification": {
            "Product Name": "Acenaphthene",
            "CAS#": "83-32-9",
            "TSCA": "TSCA 8(b) inventory: Acenaphthene",
            "CI#": "Not applicable.",
            "Synonym": "Ethylenenaphthalene",
            "Chemical Name": "1,8-Dehydroacenaphthalene",
            "Chemical Formula": "C₁₀H₆(CH₂)₂"
          },
          "Composition": [
            {
              "Name": "Acenaphthene",
              "CAS #": "83-32-9",
              "Percent": "100",
              "Toxicological Data on Ingredients": "Acenaphthene LD50: Not available. LC50: Not available.",
            }
          ],
          "Hazards Identification": {
            "Potential Acute Health Effects": "Hazardous in case of skin contact (irritant, permeator), of eye contact (irritant), of ingestion, of inhalation.",
            "Potential Chronic Health Effects": {
              "Carcinogenic Effects": "Not available.",
              "Mutagenic Effects": "Not available.",
              "Teratogenic Effects": "Not available.",
              "Developmental Toxicity": "Not available.",
              "Additional": "Repeated or prolonged exposure is not known to aggravate medical condition."
            }
          },
          "First Aid Measures": {
            "Eye Contact": "Check for and remove any contact lenses. In case of contact, immediately flush eyes with plenty of water for at least 15 minutes. Get medical attention.",
            "Skin Contact": "In case of contact, immediately flush skin with plenty of water. Cover the irritated skin with an emollient. Remove contaminated clothing and shoes. Wash clothing before reuse. Thoroughly clean shoes before reuse. Get medical attention.",
            "Serious Skin Contact": "Wash with a disinfectant soap and cover the contaminated skin with an anti-bacterial cream. Seek medical attention.",
            "Inhalation": "If inhaled, remove to fresh air. If not breathing, give artificial respiration. If breathing is difficult, give oxygen. Get medical attention.",
            "Serious Inhalation": "Not available.",
            "Ingestion": "Do NOT induce vomiting unless directed to do so by medical personnel. Never give anything by mouth to an unconscious person. If large quantities of this material are swallowed, call a physician immediately. Loosen tight clothing such as a collar, tie, belt or waistband.",
            "Serious Ingestion": "Not available."
          },
          "Fire Fighting Measures": {
            "Flammability of the Product": "May be combustible at high temperature.",
            "Auto-Ignition Temperature": "Not available.",
            "Flash Points": "Not available.",
            "Flammable Limits": "Not available.",
            "Products of Combustion": "These products are carbon oxides (CO, CO2).",
            "Fire Hazards in Presence of Various Substances": "Flammable in presence of oxidizing materials.",
            "Explosion Hazards in Presence of Various Substances": "Risks of explosion of the product in presence of mechanical impact: Not available. Risks of explosion of the product in presence of static discharge: Not available.",
            "Fire Fighting Media and Instructions": "SMALL FIRE: Use DRY chemical powder. LARGE FIRE: Use water spray, fog or foam. Do not use water jet.",
            "Special Remarks on Fire Hazards": "Combustible.",
            "Special Remarks on Explosion Hazards": "Not available."
          },
          "Accidental Release Measures": {
            "Small Spill": "Use appropriate tools to put the spilled solid in a convenient waste disposal container. Finish cleaning by spreading water on the contaminated surface and dispose of according to local and regional authority requirements.",
            "Large Spill": "Use a shovel to put the material into a convenient waste disposal container. Finish cleaning by spreading water on the contaminated surface and allow to evacuate through the sanitary system."
          },
          "Handling and Storage": {
            "Precautions": "Keep away from heat. Keep away from sources of ignition. Empty containers pose a fire risk, evaporate the residue under a fume hood. Ground all equipment containing material. Do not breathe dust. Wear suitable protective clothing. In case of insufficient ventilation, wear suitable respiratory equipment. If you feel unwell, seek medical attention and show the label when possible. Avoid contact with skin and eyes. Keep away from incompatibles such as oxidizing agents.",
            "Storage": "Keep container tightly closed. Keep container in a cool, well-ventilated area."
          },
          "Exposure Controls Personal Protection": {
            "Engineering Controls": "Use process enclosures, local exhaust ventilation, or other engineering controls to keep airborne levels below recommended exposure limits. If user operations generate dust, fume or mist, use ventilation to keep exposure to airborne contaminants below the exposure limit.",
            "Personal Protection": "Splash goggles. Lab coat. Dust respirator. Be sure to use an approved/certified respirator or equivalent. Gloves.",
            "Personal Protection in Case of a Large Spill": "Splash goggles. Full suit. Dust respirator. Boots. Gloves. A self contained breathing apparatus should be used to avoid inhalation of the product. Suggested protective clothing might not be sufficient; consult a specialist BEFORE handling this product.",
            "Exposure Limits": "Not available."
          },
          "Physical and Chemical Properties": {
            "Physical state and appearance": "Solid. (Solid needles.)",
            "Odor": "Not available.",
            "Taste": "Not available.",
            "Molecular Weight": "154.21 g/mole",
            "Color": "White.",
            "pH (1% soln/water)": "Not applicable.",
            "Boiling Point": "277.5°C (531.5°F)",
            "Melting Point": "93.6 (200.5°F)",
            "Critical Temperature": "Not available.",
            "Specific Gravity": "1.02 (Water = 1)",
            "Vapor Pressure": "Not applicable.",
            "Vapor Density": "Not available.",
            "Volatility": "Not available.",
            "Odor Threshold": "Not available.",
            "Water/Oil Dist. Coeff.": "Not available.",
            "Ionicity (in Water)": "Not available.",
            "Dispersion Properties": "See solubility in water, methanol.",
            "Solubility": "Partially soluble in methanol. Insoluble in cold water, hot water."
          },
          "Stability and Reactivity": {
            "Stability": "The product is stable.",
            "Instability Temperature": "Not available.",
            "Conditions of Instability": "Not available.",
            "Incompatibility with various substances": "Reactive with oxidizing agents.",
            "Corrosivity": "Non-corrosive in presence of glass.",
            "Special Remarks on Reactivity": "Not available.",
            "Special Remarks on Corrosivity": "Not available.",
            "Polymerization": "Will not occur."
          },
          "Toxicological Information": {
            "Routes of Entry": "Dermal contact. Eye contact. Inhalation. Ingestion.",
            "Toxicity to Animals": "LD50: Not available. LC50: Not available.",
            "Chronic Effects on Humans": "Not available.",
            "Other Toxic Effects on Humans": "Hazardous in case of skin contact (irritant, permeator), of ingestion, of inhalation.",
            "Special Remarks on Toxicity to Animals": "Not available.",
            "Special Remarks on Chronic Effects on Humans": "Not available.",
            "Special Remarks on other Toxic Effects on Humans": "Material is irritating to mucous membranes and upper respiratory tract."
          },
          "Ecological Information": {
            "Ecotoxicity": "Not available.",
            "BOD5 and COD": "Not available.",
            "Products of Biodegradation": "Possibly hazardous short term degradation products are not likely. However, long term degradation products may arise.",
            "Toxicity of the Products of Biodegradation": "The products of degradation are more toxic.",
            "Special Remarks on the Products of Biodegradation": "Not available."
          },
          "Transport Information": {
            "DOT Classification": "Not a DOT controlled material (United States).",
            "Identification": "Not applicable.",
            "Special Provisions for Transport": "Not applicable."
          },
          "Regulatory Information": {
            "Federal and State Regulations": "Pennsylvania RTK: Acenaphthene\nMassachusetts RTK: Acenaphthene\nNew Jersey: Acenaphthene\nTSCA 8(b) inventory: Acenaphthene\nCERCLA: Hazardous substances.: Acenaphthene",
            "Other Regulations": "Not available.",
            "Other Classifications": {
              "WHMIS (Canada)": "Not controlled under WHMIS (Canada).",
              "DSCL (EEC)": "R36/38- Irritating to eyes and skin.",
              "HMIS (U.S.A.)": {
                "Health Hazard": "2",
                "Fire Hazard": "1",
                "Reactivity": "0",
                "Personal Protection": "E"
              },
              "National Fire Protection Association (U.S.A.)": {
                "Health": "2",
                "Flammability": "1",
                "Reactivity": "0",
              },
              "Protective Equipment": "Gloves. Lab coat. Dust respirator. Be sure to use an approved/certified respirator or equivalent. Splash goggles."
            }
          },
          "Other Information": information
        },
        "specifications": {
          "Chemical Formula": "C₁₂H₁₀",
          "Molecular Weight": "154.21 g/mol",
          "Assay": "min. 96%",
          "Melting Range": "90 - 93°C"
        }
      },
    ],
  }, 
}