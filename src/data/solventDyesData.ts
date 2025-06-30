export const solventDyesData = {
  category: "Solvent Dyes",
  details: {
    description: "High-quality solvent dyes for plastics, inks, and non-aqueous applications",
    products: [
      {
        CINo: "Solvent Yellow 2",
        specifications: {}
      },
      {
        CINo: "Solvent Yellow 14",
        specifications: {}
      },
      {
        CINo: "Solvent Yellow 18",
        specifications: {}
      },
      {
        CINo: "Solvent Yellow 33",
        CommonName: "QUINOLINE YELLOW",
        specifications: {}
      },
      {
        CINo: "Solvent Yellow 62",
        specifications: {}
      },
      {
        CINo: "Solvent Yellow 72",
        specifications: {}
      },
      {
        CINo: "Solvent Yellow 82",
        specifications: {}
      },
      {
        CINo: "Solvent Yellow 90",
        specifications: {}
      },
      {
        CINo: "Solvent Yellow 146",
        AltCINo: "Solvent Yellow 163",
        specifications: {
          "SolubilityData_g_per_litre_24h_stable": {
            MethylIsobutylKetone: "Traces",
            MethylEthylKetone: "Traces",
            DiacetoneAlcohol: "200",
            EthylCellosolve: "350",
            EthylAcetate: "10",
            Acetone: "50"
          }
        }
      },
      {
        CINo: "Solvent Orange 54",
        specifications: {}
      },
      {
        CINo: "Solvent Orange 58",
        specifications: {}
      },
      {
        CINo: "Solvent Orange 62",
        specifications: {}
      },
      {
        CINo: "Solvent Orange 99",
        specifications: {}
      },
      {
        CINo: "Solvent Red 8",
        specifications: {}
      },
      {
        CINo: "Solvent Red 89",
        specifications: {}
      },
      {
        CINo: "Solvent Red 119",
        specifications: {}
      },
      {
        CINo: "Solvent Red 122",
        specifications: {}
      },
      {
        CINo: "Solvent Red 132",
        specifications: {}
      },
      {
        CINo: "Solvent Red 127",
        specifications: {}
      },
      {
        CINo: "Solvent Black 27",
        specifications: {}
      },
      {
        CINo: "Solvent Black 29",
        specifications: {}
      },
      {
        CINo: "Solvent Blue 48",
        specifications: {}
      },
      {
        CINo: "Solvent Blue 23",
        CommonName: "Spirit Blue",
        CASNo: "2152-64-9",
        specifications: {}
      }
    ]
  }
};

export const getProductColor = (ciNo: string): string => {
  const colorMap: { [key: string]: string } = {
    'YELLOW': 'yellow',
    'ORANGE': 'orange',
    'RED': 'red',
    'BLUE': 'blue',
    'BLACK': 'gray',
    'GREEN': 'green',
    'VIOLET': 'purple'
  };
  
  const ciUpper = ciNo.toUpperCase();
  
  for (const [color, tailwindColor] of Object.entries(colorMap)) {
    if (ciUpper.includes(color)) {
      return tailwindColor;
    }
  }
  
  return 'blue'; // Default to blue for solvent dyes
};

export const getProductId = (ciNo: string): string => {
  return ciNo.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
};