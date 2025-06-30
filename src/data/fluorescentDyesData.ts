export const fluorescentDyesData = {
  category: "Fluorescent Dyes",
  details: {
    description: "Manufacturers & Exporters of Fluorescent Dyes",
    products: [
      {
        ProductName: "Solvent Yellow 172",
        CASNo: "68427-35-0",
        EINECS: "270-393-3",
        Equivalent: "Fluorescent Yellow AA223 {Solvent Yellow 172}"
      },
      {
        ProductName: "Yellow 10GEF {S} Basic Yellow 40",
        CASNo: "35869-60-4",
        EINECS: "---",
        Equivalent: "Fluorescent Yellow AA216 {Basic Yellow 40}"
      },
      {
        ProductName: "Yellow 10GFF {Zn} Basic Yellow 40",
        CASNo: "29556-33-0",
        EINECS: "249-694-9",
        Equivalent: "Panacryl Flavine 10GFF {Basic Yellow 40}"
      },
      {
        ProductName: "Yellow GG {Solvent Yellow 43}",
        CASNo: "19125-99-6",
        EINECS: "242-828-7",
        Equivalent: "Fluorescent Brilliant Yellow R {Solvent Yellow 43}"
      },
      {
        ProductName: "Yellow R - Y {Solvent Yellow 85}",
        CASNo: "2478-20-8",
        EINECS: "219-607-9",
        Equivalent: "Fluorescent Brilliant Yellow Y {Solvent Yellow 85}"
      },
      {
        ProductName: "Yellow R - FGPN {Solvent Yellow 85}",
        CASNo: "2478-20-8",
        EINECS: "219-607-9",
        Equivalent: "Fluorescent Brilliant Yellow FGPN {Solvent Yellow 85}"
      },
      {
        ProductName: "Brilliant Yellow 8G-R {Acid Yellow 250}",
        CASNo: "93859-32-6",
        EINECS: "---",
        Equivalent: "Meratine Brilliant Yellow 8G 80% {Acid Yellow 250}"
      },
      {
        ProductName: "Solvent Yellow N / Solvent Yellow 145 / Solvent Yellow 185",
        CASNo: "27425-55-4",
        EINECS: "---",
        Equivalent: ""
      },
      {
        ProductName: "Solvent Yellow 160:1 {Ruplast Fluorescent Yellow GN}",
        CASNo: "94945-27-4",
        EINECS: "---",
        Equivalent: "Elbaplast Fluorescent Yellow GN"
      },
      {
        ProductName: "Disperse Yellow 184:1 {Rucron Brilliant Yellow 10GN 400%} / Disperse Yellow 232",
        CASNo: "164578-37-4",
        EINECS: "---",
        Equivalent: "Polycron Brilliant Yellow 10GN 400%"
      },
      {
        ProductName: "Basic Violet 11:1",
        CASNo: "39393-39-0",
        EINECS: "---",
        Equivalent: "BASF Red 560"
      },
      {
        ProductName: "Basic Blue 1",
        CASNo: "3521-06-0",
        EINECS: "---",
        Equivalent: "BASF Flexo Blue 810"
      },
      {
        ProductName: "Solvent Yellow 44",
        CASNo: "2478-20-8",
        EINECS: "---",
        Equivalent: "Solvent Yellow 44"
      }
    ]
  }
};

export const getProductColor = (productName: string): string => {
  const colorMap: { [key: string]: string } = {
    'yellow': 'yellow',
    'violet': 'purple',
    'blue': 'blue',
    'red': 'red',
    'green': 'green',
    'orange': 'orange'
  };
  
  const productLower = productName.toLowerCase();
  
  for (const [color, tailwindColor] of Object.entries(colorMap)) {
    if (productLower.includes(color)) {
      return tailwindColor;
    }
  } 
  
  return 'yellow'; // Default to yellow for fluorescent dyes
};

export const getProductId = (productName: string): string => {
  return productName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
};