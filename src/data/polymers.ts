export interface Polymer {
  id: string;
  name: string;
  category: string;
  formula: string;
  molarMass: string;
  structure: string;
  synthesis: string;
  image2D?: string;
  image3D?: string;
  properties: {
    meltingPoint?: string;
    boilingPoint?: string;
    density?: string;
    conductivity?: string;
    tensileStrength?: string;
    solubility?: string;
  };
  uses: string[];
  advantages: string[];
  limitations: string[];
  environmentalImpact: {
    biodegradability: string;
    recyclability: string;
    toxicity: string;
    sustainability: string;
  };
}

export const polymerCategories = [
  { id: 'conducting', name: 'Conducting Polymers', color: 'cyan', icon: '⚡' },
  { id: 'smart', name: 'Smart Polymers', color: 'purple', icon: '🧠' },
  { id: 'biomedical', name: 'Biomedical Polymers', color: 'lime', icon: '🏥' },
  { id: 'engineering', name: 'Engineering & High Performance', color: 'pink', icon: '🔧' },
  { id: 'environmental', name: 'Environmental Polymers', color: 'cyan', icon: '🌍' },
  { id: 'functional', name: 'Functional Polymers', color: 'purple', icon: '⚙️' },
  { id: 'optoelectronic', name: 'Optoelectronic Polymers', color: 'lime', icon: '💡' },
  { id: 'adhesive', name: 'Adhesive & Coating', color: 'pink', icon: '🎨' },
  { id: 'packaging', name: 'Packaging & Industrial', color: 'cyan', icon: '📦' },
  { id: 'composite', name: 'Composite & Structural', color: 'purple', icon: '🏗️' },
  { id: 'biodegradable', name: 'Biodegradable Polymers', color: 'lime', icon: '♻️' },
  { id: 'biopolymers', name: 'Biopolymers', color: 'pink', icon: '🧬' },
  { id: 'recyclable', name: 'Recyclable/Green Polymers', color: 'cyan', icon: '🌱' },
  { id: 'elastomers', name: 'Elastomers', color: 'purple', icon: '🎈' },
  { id: 'shape-memory', name: 'Shape Memory Polymers', color: 'lime', icon: '🔄' },
  { id: 'self-healing', name: 'Self-Healing Polymers', color: 'pink', icon: '🩹' },
];

export const samplePolymers: Polymer[] = [
  {
    id: 'polyaniline',
    name: 'Polyaniline (PANI)',
    category: 'conducting',
    formula: '(C₆H₅NH)ₙ',
    molarMass: '93.13 g/mol (repeat unit)',
    structure: 'Linear conjugated polymer with alternating single and double bonds',
    synthesis: 'Oxidative polymerization of aniline in acidic medium using oxidants like ammonium persulfate',
    image2D: '/src/assets/polymers/polyaniline-2d.png',
    properties: {
      conductivity: '1-100 S/cm (doped)',
      density: '1.3-1.4 g/cm³',
      solubility: 'Insoluble in water, soluble in organic solvents when doped'
    },
    uses: [
      'Rechargeable batteries',
      'Electromagnetic shielding',
      'Anti-static coatings',
      'Sensors and biosensors',
      'Corrosion protection'
    ],
    advantages: [
      'High electrical conductivity',
      'Easy to synthesize',
      'Good environmental stability',
      'Tunable properties through doping'
    ],
    limitations: [
      'Limited processability',
      'Brittleness in pure form',
      'Conductivity decreases over time'
    ],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Difficult to recycle',
      toxicity: 'Low toxicity in processed form',
      sustainability: 'Moderate - requires chemical synthesis'
    }
  },
  {
    id: 'polypyrrole',
    name: 'Polypyrrole (PPy)',
    category: 'conducting',
    formula: '(C₄H₃N)ₙ',
    molarMass: '67.09 g/mol (repeat unit)',
    structure: 'Conjugated heterocyclic polymer',
    synthesis: 'Chemical or electrochemical oxidation of pyrrole monomers',
    image2D: '/src/assets/polymers/polypyrrole-2d.png',
    properties: {
      conductivity: '10-100 S/cm',
      density: '1.5 g/cm³',
      solubility: 'Insoluble in most solvents'
    },
    uses: [
      'Supercapacitors',
      'Biosensors',
      'Neural interfaces',
      'Smart textiles',
      'Drug delivery systems'
    ],
    advantages: [
      'Biocompatible',
      'High conductivity',
      'Can be synthesized at room temperature',
      'Good adhesion to various substrates'
    ],
    limitations: [
      'Poor mechanical properties',
      'Difficult to process',
      'Conductivity degrades with oxidation'
    ],
    environmentalImpact: {
      biodegradability: 'Slowly biodegradable',
      recyclability: 'Limited recyclability',
      toxicity: 'Generally non-toxic',
      sustainability: 'Moderate environmental impact'
    }
  },
  {
    id: 'pnipam',
    name: 'Poly(N-isopropylacrylamide)',
    category: 'smart',
    formula: '(C₆H₁₁NO)ₙ',
    molarMass: '113.16 g/mol (repeat unit)',
    structure: 'Thermosensitive polymer with amide side groups',
    synthesis: 'Free radical polymerization of N-isopropylacrylamide',
    properties: {
      meltingPoint: 'LCST ~32°C',
      density: '1.1 g/cm³',
      solubility: 'Water-soluble below LCST'
    },
    uses: [
      'Drug delivery systems',
      'Tissue engineering scaffolds',
      'Bioseparation',
      'Smart coatings',
      'Responsive hydrogels'
    ],
    advantages: [
      'Sharp phase transition',
      'Biocompatible',
      'Reversible thermal response',
      'Easy to functionalize'
    ],
    limitations: [
      'Limited stability at high temperatures',
      'Sensitive to ionic strength',
      'Relatively expensive'
    ],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Not easily recyclable',
      toxicity: 'Low toxicity',
      sustainability: 'Moderate - petroleum-based'
    }
  },
  {
    id: 'pla',
    name: 'Polylactic Acid (PLA)',
    category: 'biodegradable',
    formula: '(C₃H₄O₂)ₙ',
    molarMass: '72.06 g/mol (repeat unit)',
    structure: 'Aliphatic polyester with methyl side groups',
    synthesis: 'Ring-opening polymerization of lactide or direct condensation of lactic acid',
    properties: {
      meltingPoint: '150-160°C',
      density: '1.24 g/cm³',
      tensileStrength: '50-70 MPa'
    },
    uses: [
      '3D printing filament',
      'Biodegradable packaging',
      'Medical implants',
      'Food containers',
      'Textile fibers'
    ],
    advantages: [
      'Biodegradable and compostable',
      'Derived from renewable resources',
      'Good mechanical properties',
      'FDA approved for food contact'
    ],
    limitations: [
      'Lower heat resistance than traditional plastics',
      'Brittle at room temperature',
      'Slow degradation in ambient conditions'
    ],
    environmentalImpact: {
      biodegradability: 'Fully biodegradable in industrial composting',
      recyclability: 'Recyclable (type 7)',
      toxicity: 'Non-toxic',
      sustainability: 'High - made from corn starch or sugarcane'
    }
  },
  {
    id: 'peek',
    name: 'Polyether Ether Ketone (PEEK)',
    category: 'engineering',
    formula: '(C₁₉H₁₂O₃)ₙ',
    molarMass: '288.3 g/mol (repeat unit)',
    structure: 'Semi-crystalline aromatic polymer',
    synthesis: 'Step-growth polymerization from aromatic dihalides and alkali salts',
    properties: {
      meltingPoint: '343°C',
      density: '1.32 g/cm³',
      tensileStrength: '90-100 MPa'
    },
    uses: [
      'Aerospace components',
      'Medical implants',
      'Oil and gas industry',
      'Automotive parts',
      'Electrical insulation'
    ],
    advantages: [
      'Excellent mechanical properties',
      'High temperature resistance',
      'Chemical resistance',
      'Biocompatible',
      'Low moisture absorption'
    ],
    limitations: [
      'Very expensive',
      'Difficult to process',
      'Requires high processing temperatures'
    ],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Recyclable but rarely done',
      toxicity: 'Non-toxic',
      sustainability: 'Low - energy-intensive production'
    }
  },
  {
    id: 'chitosan',
    name: 'Chitosan',
    category: 'biopolymers',
    formula: '(C₆H₁₁NO₄)ₙ',
    molarMass: '161.16 g/mol (repeat unit)',
    structure: 'Linear polysaccharide with glucosamine units',
    synthesis: 'Deacetylation of chitin from crustacean shells',
    properties: {
      density: '1.4 g/cm³',
      solubility: 'Soluble in acidic solutions'
    },
    uses: [
      'Wound dressings',
      'Water treatment',
      'Food preservation',
      'Drug delivery',
      'Agricultural applications'
    ],
    advantages: [
      'Biodegradable',
      'Biocompatible',
      'Antimicrobial properties',
      'Derived from waste materials',
      'Non-toxic'
    ],
    limitations: [
      'Limited solubility',
      'Batch-to-batch variation',
      'Mechanical properties can be weak'
    ],
    environmentalImpact: {
      biodegradability: 'Fully biodegradable',
      recyclability: 'Compostable',
      toxicity: 'Non-toxic',
      sustainability: 'High - derived from renewable sources'
    }
  },
  {
    id: 'pedot',
    name: 'Poly(3,4-ethylenedioxythiophene)',
    category: 'conducting',
    formula: '(C₆H₄O₂S)ₙ',
    molarMass: '142.15 g/mol (repeat unit)',
    structure: 'Conjugated polymer with thiophene rings',
    synthesis: 'Oxidative polymerization of EDOT monomer',
    image2D: '/src/assets/polymers/polythiophene-2d.png',
    properties: {
      conductivity: '300-500 S/cm (with PSS)',
      density: '1.5 g/cm³',
      solubility: 'Insoluble in water, dispersible with PSS'
    },
    uses: [
      'Organic solar cells',
      'Touchscreens',
      'Antistatic coatings',
      'Electrochromic displays',
      'Capacitors'
    ],
    advantages: [
      'Excellent transparency',
      'High conductivity',
      'Good stability',
      'Commercially available'
    ],
    limitations: [
      'Expensive',
      'Requires dopants',
      'Limited mechanical strength'
    ],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Difficult to recycle',
      toxicity: 'Low toxicity',
      sustainability: 'Moderate'
    }
  },
  {
    id: 'polythiophene',
    name: 'Polythiophene (PTh)',
    category: 'conducting',
    formula: '(C₄H₄S)ₙ',
    molarMass: '84.14 g/mol (repeat unit)',
    structure: 'Conjugated polymer with thiophene rings',
    synthesis: 'Electrochemical or chemical oxidative polymerization of thiophene',
    image2D: '/src/assets/polymers/polythiophene-2d.png',
    properties: {
      conductivity: '10-100 S/cm (doped)',
      density: '1.5 g/cm³',
      solubility: 'Insoluble in common solvents'
    },
    uses: [
      'Organic field-effect transistors',
      'Photovoltaic cells',
      'Light-emitting diodes',
      'Sensors',
      'Electrochromic devices'
    ],
    advantages: [
      'Good environmental stability',
      'High conductivity when doped',
      'Processability can be improved with side chains',
      'Tunable optical properties'
    ],
    limitations: [
      'Poor solubility in pure form',
      'Requires doping for high conductivity',
      'Photooxidation can occur'
    ],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Difficult to recycle',
      toxicity: 'Low toxicity',
      sustainability: 'Moderate - chemical synthesis required'
    }
  },
  {
    id: 'polyacetylene',
    name: 'Polyacetylene (PA)',
    category: 'conducting',
    formula: '(C₂H₂)ₙ',
    molarMass: '26.04 g/mol (repeat unit)',
    structure: 'Linear conjugated polymer with alternating single and double bonds',
    synthesis: 'Ziegler-Natta polymerization of acetylene gas',
    image2D: '/src/assets/polymers/polyacetylene-2d.png',
    properties: {
      conductivity: '1,000-10,000 S/cm (heavily doped)',
      density: '1.16 g/cm³',
      solubility: 'Insoluble in all solvents'
    },
    uses: [
      'Conductive films',
      'Electromagnetic shielding',
      'Antistatic materials',
      'Battery electrodes',
      'Research applications'
    ],
    advantages: [
      'Very high conductivity when doped',
      'First discovered conducting polymer',
      'Simple structure',
      'Historical significance'
    ],
    limitations: [
      'Extremely unstable in air',
      'Degrades rapidly',
      'Completely insoluble',
      'Difficult to process'
    ],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Not recyclable',
      toxicity: 'Low toxicity',
      sustainability: 'Low - unstable and difficult to use'
    }
  },
  {
    id: 'polyphenylene',
    name: 'Poly(p-phenylene) (PPP)',
    category: 'conducting',
    formula: '(C₆H₄)ₙ',
    molarMass: '76.10 g/mol (repeat unit)',
    structure: 'Rigid aromatic polymer with benzene rings',
    synthesis: 'Coupling reactions of benzene derivatives',
    image2D: '/src/assets/polymers/polyphenylene-2d.png',
    properties: {
      conductivity: '1-500 S/cm (doped)',
      density: '1.3 g/cm³',
      solubility: 'Insoluble in most solvents'
    },
    uses: [
      'High-temperature materials',
      'Conductive composites',
      'Protective coatings',
      'Electronic applications',
      'Structural materials'
    ],
    advantages: [
      'Excellent thermal stability',
      'Chemical resistance',
      'Rigid structure',
      'Good mechanical properties'
    ],
    limitations: [
      'Extremely difficult to process',
      'Insoluble and infusible',
      'Expensive synthesis',
      'Limited commercial availability'
    ],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Not recyclable',
      toxicity: 'Low toxicity',
      sustainability: 'Low - complex synthesis'
    }
  },
  {
    id: 'ppv',
    name: 'Poly(p-phenylene vinylene) (PPV)',
    category: 'conducting',
    formula: '(C₈H₆)ₙ',
    molarMass: '104.15 g/mol (repeat unit)',
    structure: 'Conjugated polymer with phenylene and vinylene units',
    synthesis: 'Wittig or Heck coupling reactions',
    image2D: '/src/assets/polymers/ppv-2d.png',
    properties: {
      conductivity: '0.1-10 S/cm (doped)',
      density: '1.2 g/cm³',
      solubility: 'Soluble derivatives available'
    },
    uses: [
      'Polymer LEDs (PLEDs)',
      'Organic solar cells',
      'Photonic devices',
      'Sensors',
      'Display technology'
    ],
    advantages: [
      'Efficient electroluminescence',
      'Good film-forming properties',
      'Tunable bandgap',
      'Processable derivatives available'
    ],
    limitations: [
      'Photooxidation sensitivity',
      'Moderate conductivity',
      'Device stability issues',
      'Limited color range'
    ],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Difficult to recycle',
      toxicity: 'Low toxicity',
      sustainability: 'Moderate'
    }
  },
  {
    id: 'polyfluorene',
    name: 'Polyfluorene (PF)',
    category: 'conducting',
    formula: '(C₁₃H₈)ₙ',
    molarMass: '166.22 g/mol (repeat unit)',
    structure: 'Rigid conjugated polymer with fluorene units',
    synthesis: 'Suzuki or Yamamoto coupling of fluorene monomers',
    image2D: '/src/assets/polymers/polyfluorene-2d.png',
    properties: {
      conductivity: '0.001-1 S/cm (doped)',
      density: '1.1 g/cm³',
      solubility: 'Soluble in organic solvents with side chains'
    },
    uses: [
      'Blue light-emitting diodes',
      'Polymer lasers',
      'Organic transistors',
      'Solar cells',
      'Sensors'
    ],
    advantages: [
      'Excellent blue emission',
      'High photoluminescence efficiency',
      'Good solubility with side chains',
      'Thermal stability'
    ],
    limitations: [
      'Can form ketone defects',
      'Green emission from defects',
      'Relatively expensive',
      'Processing challenges'
    ],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Not easily recyclable',
      toxicity: 'Low toxicity',
      sustainability: 'Moderate'
    }
  },
  {
    id: 'polycarbazole',
    name: 'Polycarbazole (PCz)',
    category: 'conducting',
    formula: '(C₁₂H₈N)ₙ',
    molarMass: '167.21 g/mol (repeat unit)',
    structure: 'Nitrogen-containing aromatic polymer',
    synthesis: 'Electrochemical or chemical oxidative polymerization',
    image2D: '/src/assets/polymers/polycarbazole-2d.png',
    properties: {
      conductivity: '0.01-10 S/cm (doped)',
      density: '1.2 g/cm³',
      solubility: 'Insoluble, soluble derivatives available'
    },
    uses: [
      'Hole transport layers',
      'Electrochromic devices',
      'Organic photovoltaics',
      'Memory devices',
      'Sensors'
    ],
    advantages: [
      'Good electrochemical stability',
      'High hole mobility',
      'Tunable properties',
      'Good film-forming ability'
    ],
    limitations: [
      'Lower conductivity than some alternatives',
      'Requires modification for solubility',
      'Limited commercial scale production'
    ],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Difficult to recycle',
      toxicity: 'Low toxicity',
      sustainability: 'Moderate'
    }
  },
  {
    id: 'polyindole',
    name: 'Polyindole (PIN)',
    category: 'conducting',
    formula: '(C₈H₆N)ₙ',
    molarMass: '117.15 g/mol (repeat unit)',
    structure: 'Heterocyclic conducting polymer',
    synthesis: 'Electrochemical or chemical oxidative polymerization of indole',
    properties: {
      conductivity: '1-100 S/cm (doped)',
      density: '1.4 g/cm³',
      solubility: 'Insoluble in most solvents'
    },
    uses: [
      'Biosensors',
      'Electrochromic displays',
      'Capacitors',
      'Corrosion protection',
      'Electrocatalysis'
    ],
    advantages: [
      'Good electrochemical activity',
      'Biocompatibility',
      'Stable in various pH ranges',
      'Fast switching'
    ],
    limitations: [
      'Limited processability',
      'Lower conductivity than polyaniline',
      'Requires doping'
    ],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Not recyclable',
      toxicity: 'Low toxicity',
      sustainability: 'Moderate'
    }
  },
  {
    id: 'pedot-pss',
    name: 'PEDOT:PSS',
    category: 'conducting',
    formula: 'PEDOT doped with PSS',
    molarMass: 'Complex mixture',
    structure: 'PEDOT polymer doped with poly(styrene sulfonate)',
    synthesis: 'Aqueous dispersion polymerization',
    properties: {
      conductivity: '1-1000 S/cm (optimized)',
      density: '1.0-1.1 g/cm³',
      solubility: 'Water-dispersible'
    },
    uses: [
      'Transparent conductive coatings',
      'Touchscreens',
      'Organic LEDs',
      'Solar cells',
      'Flexible electronics'
    ],
    advantages: [
      'Commercially available',
      'Water-processable',
      'Transparent and flexible',
      'Excellent stability'
    ],
    limitations: [
      'Acidic nature can corrode',
      'Hygroscopic',
      'Lower conductivity than ITO',
      'Can swell in humid conditions'
    ],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Difficult to recycle',
      toxicity: 'Low toxicity',
      sustainability: 'Moderate - water-based processing'
    }
  },
  {
    id: 'pani-graphene',
    name: 'Polyaniline-Graphene Composite',
    category: 'conducting',
    formula: 'PANI/Graphene nanocomposite',
    molarMass: 'Composite material',
    structure: 'Polyaniline chains integrated with graphene sheets',
    synthesis: 'In-situ polymerization or mixing of components',
    properties: {
      conductivity: '100-10,000 S/cm',
      density: '1.4-1.6 g/cm³',
      tensileStrength: '50-200 MPa'
    },
    uses: [
      'Supercapacitors',
      'Batteries',
      'Electromagnetic shielding',
      'Sensors',
      'Flexible electronics'
    ],
    advantages: [
      'Enhanced conductivity',
      'Improved mechanical properties',
      'High surface area',
      'Synergistic effects'
    ],
    limitations: [
      'More expensive than PANI alone',
      'Processing complexity',
      'Dispersion challenges',
      'Scalability issues'
    ],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Very difficult to recycle',
      toxicity: 'Low toxicity',
      sustainability: 'Low - complex processing'
    }
  },
  {
    id: 'ppy-cnt',
    name: 'Polypyrrole-Carbon Nanotube Composite',
    category: 'conducting',
    formula: 'PPy/CNT nanocomposite',
    molarMass: 'Composite material',
    structure: 'Polypyrrole coating on carbon nanotubes',
    synthesis: 'In-situ polymerization on CNT surfaces',
    properties: {
      conductivity: '100-1,000 S/cm',
      density: '1.3-1.5 g/cm³',
      tensileStrength: '100-500 MPa'
    },
    uses: [
      'Supercapacitors',
      'Actuators',
      'Biosensors',
      'Energy storage',
      'Flexible electronics'
    ],
    advantages: [
      'Excellent electrical properties',
      'High mechanical strength',
      'Large electroactive surface',
      'Fast charge/discharge'
    ],
    limitations: [
      'Expensive',
      'CNT dispersion challenges',
      'Processing complexity',
      'Limited scalability'
    ],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Not recyclable',
      toxicity: 'CNT toxicity concerns',
      sustainability: 'Low - energy-intensive production'
    }
  },
  {
    id: 'pvdf',
    name: 'Polyvinylidene Fluoride',
    category: 'smart',
    formula: '(C₂H₂F₂)ₙ',
    molarMass: '64.03 g/mol (repeat unit)',
    structure: 'Semi-crystalline fluoropolymer',
    synthesis: 'Free radical polymerization of vinylidene fluoride',
    properties: {
      meltingPoint: '160-170°C',
      density: '1.78 g/cm³',
      tensileStrength: '50-60 MPa'
    },
    uses: [
      'Piezoelectric sensors',
      'Actuators',
      'Lithium-ion battery separators',
      'Chemical resistant coatings',
      'Membrane filtration'
    ],
    advantages: [
      'Piezoelectric properties',
      'Chemical resistance',
      'High thermal stability',
      'UV resistance'
    ],
    limitations: [
      'Difficult to process',
      'Expensive',
      'Requires specific poling conditions'
    ],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Recyclable but rarely done',
      toxicity: 'Low toxicity',
      sustainability: 'Low - fluorinated compound'
    }
  },
  {
    id: 'pcl',
    name: 'Polycaprolactone',
    category: 'biodegradable',
    formula: '(C₆H₁₀O₂)ₙ',
    molarMass: '114.14 g/mol (repeat unit)',
    structure: 'Aliphatic polyester',
    synthesis: 'Ring-opening polymerization of ε-caprolactone',
    properties: {
      meltingPoint: '58-60°C',
      density: '1.145 g/cm³',
      tensileStrength: '16 MPa'
    },
    uses: [
      'Tissue engineering scaffolds',
      'Drug delivery systems',
      'Biodegradable sutures',
      '3D printing',
      'Packaging materials'
    ],
    advantages: [
      'Excellent biocompatibility',
      'Controlled degradation rate',
      'Easy to process',
      'FDA approved'
    ],
    limitations: [
      'Low melting point',
      'Slow degradation (2-4 years)',
      'Hydrophobic nature'
    ],
    environmentalImpact: {
      biodegradability: 'Fully biodegradable',
      recyclability: 'Compostable',
      toxicity: 'Non-toxic',
      sustainability: 'High - renewable feedstock available'
    }
  },
  {
    id: 'collagen',
    name: 'Collagen',
    category: 'biopolymers',
    formula: 'Complex protein structure',
    molarMass: '~300,000 g/mol',
    structure: 'Triple helix protein structure',
    synthesis: 'Extraction from animal tissues',
    properties: {
      density: '1.3 g/cm³',
      solubility: 'Soluble in acidic solutions'
    },
    uses: [
      'Wound healing',
      'Tissue engineering',
      'Cosmetics',
      'Food industry',
      'Drug delivery'
    ],
    advantages: [
      'Excellent biocompatibility',
      'Natural material',
      'Promotes cell adhesion',
      'Biodegradable'
    ],
    limitations: [
      'Batch variation',
      'Risk of disease transmission',
      'Weak mechanical properties',
      'Expensive purification'
    ],
    environmentalImpact: {
      biodegradability: 'Fully biodegradable',
      recyclability: 'Compostable',
      toxicity: 'Non-toxic',
      sustainability: 'Moderate - animal-derived'
    }
  },
  {
    id: 'polyimide',
    name: 'Polyimide (PI)',
    category: 'engineering',
    formula: 'Variable aromatic structure',
    molarMass: '~400-600 g/mol (repeat unit)',
    structure: 'Aromatic polymer with imide linkages',
    synthesis: 'Polycondensation of dianhydrides and diamines',
    properties: {
      meltingPoint: 'Does not melt (decomposes >500°C)',
      density: '1.42 g/cm³',
      tensileStrength: '85-120 MPa'
    },
    uses: [
      'Flexible electronics',
      'Aerospace insulation',
      'Semiconductor manufacturing',
      'High-temperature adhesives',
      'Wire insulation'
    ],
    advantages: [
      'Exceptional thermal stability',
      'Excellent electrical insulation',
      'Chemical resistance',
      'Radiation resistance'
    ],
    limitations: [
      'Very expensive',
      'Difficult to process',
      'Moisture absorption',
      'Brittle'
    ],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Not recyclable',
      toxicity: 'Low toxicity',
      sustainability: 'Low - energy-intensive production'
    }
  },
  {
    id: 'pvp',
    name: 'Polyvinylpyrrolidone',
    category: 'biomedical',
    formula: '(C₆H₉NO)ₙ',
    molarMass: '111.14 g/mol (repeat unit)',
    structure: 'Linear polymer with pyrrolidone groups',
    synthesis: 'Free radical polymerization of N-vinylpyrrolidone',
    properties: {
      density: '1.2 g/cm³',
      solubility: 'Highly soluble in water and organic solvents'
    },
    uses: [
      'Pharmaceutical binder',
      'Plasma expander',
      'Contact lens solution',
      'Cosmetics',
      'Adhesives'
    ],
    advantages: [
      'Biocompatible',
      'Non-toxic',
      'Excellent film-forming',
      'Water-soluble'
    ],
    limitations: [
      'Hygroscopic',
      'Limited mechanical strength',
      'Non-biodegradable'
    ],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Not easily recyclable',
      toxicity: 'Non-toxic',
      sustainability: 'Moderate'
    }
  },
  {
    id: 'peg',
    name: 'Polyethylene Glycol',
    category: 'biomedical',
    formula: '(C₂H₄O)ₙ',
    molarMass: '44.05 g/mol (repeat unit)',
    structure: 'Linear polyether',
    synthesis: 'Ring-opening polymerization of ethylene oxide',
    properties: {
      meltingPoint: '4-60°C (MW dependent)',
      density: '1.13 g/cm³',
      solubility: 'Highly water-soluble'
    },
    uses: [
      'Drug delivery',
      'Protein modification',
      'Laxatives',
      'Cosmetics',
      'Industrial lubricants'
    ],
    advantages: [
      'Biocompatible',
      'Non-immunogenic',
      'FDA approved',
      'Tunable molecular weight'
    ],
    limitations: [
      'Can cause hypersensitivity',
      'Oxidizes over time',
      'Limited mechanical properties'
    ],
    environmentalImpact: {
      biodegradability: 'Slowly biodegradable',
      recyclability: 'Limited recyclability',
      toxicity: 'Generally non-toxic',
      sustainability: 'Moderate'
    }
  },
  {
    id: 'pet',
    name: 'Polyethylene Terephthalate',
    category: 'packaging',
    formula: '(C₁₀H₈O₄)ₙ',
    molarMass: '192.17 g/mol (repeat unit)',
    structure: 'Aromatic polyester',
    synthesis: 'Polycondensation of terephthalic acid and ethylene glycol',
    properties: {
      meltingPoint: '250-260°C',
      density: '1.38 g/cm³',
      tensileStrength: '55-75 MPa'
    },
    uses: [
      'Beverage bottles',
      'Food packaging',
      'Textile fibers',
      'Engineering resins',
      'Film applications'
    ],
    advantages: [
      'Excellent barrier properties',
      'Lightweight',
      'Transparent',
      'Widely recyclable'
    ],
    limitations: [
      'Heat sensitivity',
      'Susceptible to hydrolysis',
      'Non-biodegradable'
    ],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Highly recyclable (Type 1)',
      toxicity: 'Generally safe',
      sustainability: 'Moderate - petroleum-based but recyclable'
    }
  },
  {
    id: 'polyurethane-adhesive',
    name: 'Polyurethane Adhesive',
    category: 'adhesive',
    formula: 'Variable (-NHCOO- linkages)',
    molarMass: 'Variable (depends on formulation)',
    structure: 'Segmented polymer with urethane linkages between polyol and diisocyanate',
    synthesis: 'Step-growth polymerization of polyols with diisocyanates',
    image2D: '/src/assets/polymers/polyurethane-adhesive-2d.png',
    properties: {
      meltingPoint: 'Variable (can be amorphous)',
      density: '1.05-1.25 g/cm³',
      tensileStrength: '20-70 MPa',
      solubility: 'Depends on formulation - water-based or solvent-based'
    },
    uses: [
      'Structural bonding',
      'Automotive assembly',
      'Construction adhesives',
      'Footwear manufacturing',
      'Flexible packaging laminates',
      'Wood bonding'
    ],
    advantages: [
      'Excellent adhesion to diverse substrates',
      'High flexibility and toughness',
      'Good chemical and moisture resistance',
      'Fast curing options available',
      'Wide range of formulations'
    ],
    limitations: [
      'Sensitive to moisture during cure',
      'Isocyanate toxicity in production',
      'Can yellow with UV exposure',
      'Difficult to recycle',
      'Short shelf life once opened'
    ],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Very difficult to recycle',
      toxicity: 'Moderate - isocyanates toxic during manufacturing',
      sustainability: 'Low - petroleum-based, limited bio-based options emerging'
    }
  },
  {
    id: 'epoxy',
    name: 'Epoxy Resin',
    category: 'adhesive',
    formula: 'Variable (epoxide groups)',
    molarMass: '340-400 g/mol (DGEBA)',
    structure: 'Thermosetting polymer formed by crosslinking epoxide groups with hardener',
    synthesis: 'Reaction of epichlorohydrin with bisphenol A, cured with amines or anhydrides',
    image2D: '/src/assets/polymers/epoxy-2d.png',
    properties: {
      meltingPoint: 'Thermosetting (does not melt after cure)',
      density: '1.1-1.4 g/cm³',
      tensileStrength: '55-130 MPa',
      solubility: 'Insoluble once cured'
    },
    uses: [
      'High-strength adhesives',
      'Protective coatings',
      'Composite materials (carbon fiber, fiberglass)',
      'Electronic encapsulation and PCBs',
      'Construction materials',
      'Marine coatings'
    ],
    advantages: [
      'Exceptional adhesion to metals, glass, ceramics',
      'Excellent chemical and solvent resistance',
      'Very low shrinkage during cure',
      'High mechanical strength and rigidity',
      'Good electrical insulation'
    ],
    limitations: [
      'Brittle when fully cured',
      'Long cure times (hours to days)',
      'Skin and respiratory irritant (uncured)',
      'Cannot be reshaped or recycled (thermoset)',
      'UV degradation without additives'
    ],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Not recyclable (crosslinked thermoset)',
      toxicity: 'Moderate - uncured resin and hardener toxic, cured form inert',
      sustainability: 'Low - petroleum-based, some bio-based epoxies in development'
    }
  },
  {
    id: 'acrylic-adhesive',
    name: 'Acrylic Adhesive',
    category: 'adhesive',
    formula: '(C₅H₈O₂)ₙ (variable composition)',
    molarMass: 'Variable',
    structure: 'Polymer based on acrylic or methacrylic esters',
    synthesis: 'Free radical polymerization of acrylic/methacrylic monomers',
    image2D: '/src/assets/polymers/acrylic-adhesive-2d.png',
    properties: {
      meltingPoint: 'Variable (often pressure-sensitive at room temp)',
      density: '1.05-1.20 g/cm³',
      tensileStrength: '10-30 MPa',
      solubility: 'Solvent or water-based formulations'
    },
    uses: [
      'Pressure-sensitive adhesives (tapes, labels)',
      'Structural bonding',
      'Automotive assembly',
      'Medical adhesives',
      'Aerospace bonding',
      'Graphics and signage'
    ],
    advantages: [
      'Excellent UV and weathering resistance',
      'Good optical clarity',
      'High bond strength and durability',
      'Can be formulated for instant or curable types',
      'Good resistance to plasticizer migration'
    ],
    limitations: [
      'Can be expensive',
      'Some formulations have strong odor',
      'Limited high-temperature performance',
      'Surface preparation often required'
    ],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Difficult to recycle',
      toxicity: 'Low toxicity once cured, monomers can be irritants',
      sustainability: 'Moderate - petroleum-based'
    }
  },
  {
    id: 'silicone-adhesive',
    name: 'Silicone Adhesive',
    category: 'adhesive',
    formula: '[Si(CH₃)₂O]ₙ (PDMS base)',
    molarMass: 'Variable',
    structure: 'Polysiloxane backbone with organic side groups',
    synthesis: 'Hydrolysis and polycondensation of organochlorosilanes or ring-opening polymerization',
    image2D: '/src/assets/polymers/silicone-adhesive-2d.png',
    properties: {
      meltingPoint: 'Low Tg (-120°C), no melting point',
      density: '0.97-1.07 g/cm³',
      tensileStrength: '2-10 MPa',
      solubility: 'Insoluble in water, soluble in some organic solvents'
    },
    uses: [
      'High-temperature sealing',
      'Electrical and electronic bonding',
      'Medical device assembly',
      'Automotive gaskets and seals',
      'Construction sealants',
      'Aerospace applications'
    ],
    advantages: [
      'Extreme temperature resistance (-55°C to +300°C)',
      'Excellent flexibility and elasticity',
      'Good electrical insulation',
      'Biocompatible (medical grade)',
      'UV and weathering resistant',
      'Low surface tension'
    ],
    limitations: [
      'Lower bond strength than epoxy or acrylics',
      'Expensive',
      'Slow cure in some formulations',
      'Poor adhesion without primers on some substrates'
    ],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Not recyclable',
      toxicity: 'Low toxicity, biocompatible grades available',
      sustainability: 'Moderate - silicon abundant but energy-intensive processing'
    }
  },
  {
    id: 'cyanoacrylate',
    name: 'Cyanoacrylate (Super Glue)',
    category: 'adhesive',
    formula: 'CH₂=C(CN)COOR (monomer), polymerizes to [CH₂C(CN)COOR]ₙ',
    molarMass: '~111-141 g/mol (monomer, R=methyl to butyl)',
    structure: 'Linear polymer with cyano and ester groups on alternating carbons',
    synthesis: 'Anionic polymerization initiated by surface moisture',
    image2D: '/src/assets/polymers/cyanoacrylate-2d.png',
    properties: {
      meltingPoint: '~150-165°C (polymer)',
      density: '1.05-1.10 g/cm³',
      tensileStrength: '18-28 MPa',
      solubility: 'Insoluble once polymerized'
    },
    uses: [
      'Instant bonding adhesive',
      'Medical sutures and wound closure',
      'Forensic fingerprint detection',
      'Electronics assembly',
      'Hobby and crafts',
      'Emergency repairs'
    ],
    advantages: [
      'Extremely fast curing (seconds)',
      'No mixing required (single component)',
      'High bond strength on many materials',
      'Room temperature cure',
      'Transparent bond line'
    ],
    limitations: [
      'Brittle bond',
      'Poor gap-filling ability',
      'Limited water and heat resistance',
      'Skin bonding hazard',
      'Short shelf life',
      'Bonds skin instantly (safety issue)'
    ],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Not recyclable',
      toxicity: 'Moderate - irritant, releases formaldehyde during cure',
      sustainability: 'Moderate - small quantities used'
    }
  },
  {
    id: 'pvac',
    name: 'Polyvinyl Acetate (PVAc)',
    category: 'adhesive',
    formula: '(C₄H₆O₂)ₙ',
    molarMass: '86.09 g/mol (repeat unit)',
    structure: 'Linear polymer with acetate ester side groups',
    synthesis: 'Free radical polymerization of vinyl acetate monomer',
    image2D: '/src/assets/polymers/pvac-2d.png',
    properties: {
      meltingPoint: '~230°C (decomposes before melting)',
      density: '1.19 g/cm³',
      tensileStrength: '20-35 MPa',
      solubility: 'Insoluble in water (used as emulsion), soluble in alcohols and ketones'
    },
    uses: [
      'Wood glue (white glue, carpenter glue)',
      'Paper and packaging adhesives',
      'Bookbinding',
      'Paints and coatings base',
      'Textile sizing',
      'Chewing gum base'
    ],
    advantages: [
      'Non-toxic and safe',
      'Easy to apply and clean up with water',
      'Good adhesion to porous materials (wood, paper)',
      'Inexpensive',
      'Clear and flexible bond',
      'Low odor'
    ],
    limitations: [
      'Not water-resistant (hydrolyzes)',
      'Creeps under sustained load',
      'Poor heat resistance (softens ~50-60°C)',
      'Limited outdoor durability',
      'Weak bond on non-porous surfaces'
    ],
    environmentalImpact: {
      biodegradability: 'Slowly biodegradable under specific conditions',
      recyclability: 'Limited recyclability',
      toxicity: 'Non-toxic',
      sustainability: 'Moderate - petroleum-based but low environmental impact'
    }
  },
  {
    id: 'hot-melt',
    name: 'Hot Melt Adhesives (EVA-based)',
    category: 'adhesive',
    formula: '(C₂H₄)ₙ(C₄H₆O₂)ₘ (Ethylene-Vinyl Acetate copolymer)',
    molarMass: 'Variable',
    structure: 'Random copolymer of ethylene and vinyl acetate',
    synthesis: 'High-pressure copolymerization of ethylene and vinyl acetate',
    image2D: '/src/assets/polymers/hot-melt-2d.png',
    properties: {
      meltingPoint: '70-120°C (application temperature)',
      density: '0.93-0.95 g/cm³',
      tensileStrength: '10-25 MPa',
      solubility: 'Insoluble in water'
    },
    uses: [
      'Packaging sealing',
      'Bookbinding',
      'Product assembly',
      'Woodworking edge banding',
      'Textile bonding',
      'Carton sealing'
    ],
    advantages: [
      'Very fast setting (seconds)',
      'No solvents (100% solids)',
      'Long shelf life',
      'Easy to apply with glue guns',
      'Reversible by reheating',
      'Cost-effective'
    ],
    limitations: [
      'Limited high-temperature resistance',
      'Requires heating equipment',
      'Lower bond strength than structural adhesives',
      'Can string or drip during application',
      'Poor low-temperature flexibility'
    ],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Difficult to separate from substrates',
      toxicity: 'Non-toxic',
      sustainability: 'Moderate - petroleum-based, no VOCs'
    }
  },
  {
    id: 'psa',
    name: 'Pressure-Sensitive Adhesive (PSA)',
    category: 'adhesive',
    formula: 'Variable (acrylics, silicones, rubber-based)',
    molarMass: 'Variable',
    structure: 'Typically high molecular weight viscoelastic polymer',
    synthesis: 'Depends on type - polymerization of acrylates, silicones, or rubber compounding',
    image2D: '/src/assets/polymers/psa-2d.png',
    properties: {
      meltingPoint: 'Typically pressure-sensitive at room temperature (Tg below RT)',
      density: '0.9-1.2 g/cm³',
      tensileStrength: '0.5-5 MPa',
      solubility: 'Variable'
    },
    uses: [
      'Tapes (masking, packaging, duct tape)',
      'Labels and stickers',
      'Medical adhesive bandages',
      'Post-it notes',
      'Automotive trim attachment',
      'Graphic films and decals'
    ],
    advantages: [
      'No curing or activation needed',
      'Instant tack and adhesion',
      'Removable and repositionable (some types)',
      'Bonds to wide range of surfaces',
      'Flexible and conformable',
      'Easy to apply'
    ],
    limitations: [
      'Lower bond strength than structural adhesives',
      'Temperature-sensitive performance',
      'Can leave residue',
      'Aging and creep under load',
      'UV degradation (some types)'
    ],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Contaminates recycling streams',
      toxicity: 'Generally low toxicity',
      sustainability: 'Moderate - depends on chemistry'
    }
  },
  {
    id: 'uv-coating',
    name: 'UV-Curable Coatings',
    category: 'adhesive',
    formula: 'Variable (acrylate or methacrylate oligomers)',
    molarMass: 'Variable (500-10,000 g/mol for oligomers)',
    structure: 'Multifunctional acrylate oligomers with photoinitiators',
    synthesis: 'UV-initiated free radical polymerization and crosslinking',
    image2D: '/src/assets/polymers/uv-coating-2d.png',
    properties: {
      meltingPoint: 'Thermosetting (crosslinked)',
      density: '1.0-1.3 g/cm³',
      tensileStrength: '20-80 MPa (cured)',
      solubility: 'Insoluble once cured'
    },
    uses: [
      'Wood floor finishes',
      'Automotive clear coats',
      'Electronics conformal coatings',
      'Printing inks',
      'Optical fiber coatings',
      'Industrial metal coatings'
    ],
    advantages: [
      'Extremely fast cure (seconds)',
      'Solvent-free (low VOC)',
      'High durability and scratch resistance',
      'Energy efficient',
      'Excellent adhesion and hardness',
      'On-demand curing'
    ],
    limitations: [
      'Requires UV light equipment',
      'Limited depth of cure (shadowing)',
      'Photoinitiator residues can yellow',
      'Cannot cure pigmented/opaque coatings fully',
      'Initial equipment cost'
    ],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Not recyclable (thermoset)',
      toxicity: 'Low toxicity once cured, uncured can be irritant',
      sustainability: 'Moderate - low VOC, energy-efficient cure'
    }
  },
  {
    id: 'powder-coating',
    name: 'Powder Coatings',
    category: 'adhesive',
    formula: 'Variable (epoxy, polyester, hybrid, polyurethane)',
    molarMass: 'Variable',
    structure: 'Thermosetting or thermoplastic polymer powder',
    synthesis: 'Melt-mixing of resin, hardener, pigments, and additives, then grinding',
    image2D: '/src/assets/polymers/powder-coating-2d.png',
    properties: {
      meltingPoint: '150-200°C (curing temperature)',
      density: '1.2-1.7 g/cm³',
      tensileStrength: '40-80 MPa (cured)',
      solubility: 'Insoluble'
    },
    uses: [
      'Metal furniture and appliances',
      'Automotive parts',
      'Architectural aluminum',
      'Industrial equipment',
      'Bicycle frames',
      'Electrical enclosures'
    ],
    advantages: [
      'Zero VOC emissions',
      'Excellent durability and corrosion resistance',
      'Uniform thick coating (50-100 μm)',
      'High transfer efficiency (>95%)',
      'Wide range of colors and finishes',
      'Overspray recyclable'
    ],
    limitations: [
      'Requires oven curing',
      'Limited to heat-resistant substrates',
      'Difficult to achieve thin films',
      'Color change is time-consuming',
      'Cannot coat assembled products with heat-sensitive parts'
    ],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Difficult to strip and recycle',
      toxicity: 'Low toxicity, no solvents',
      sustainability: 'High - no VOCs, minimal waste, overspray recyclable'
    }
  },
  {
    id: 'water-coating',
    name: 'Water-Based Coatings',
    category: 'adhesive',
    formula: 'Variable (acrylic, polyurethane, epoxy emulsions)',
    molarMass: 'Variable',
    structure: 'Polymer emulsion or dispersion in water',
    synthesis: 'Emulsion polymerization or dispersing resin in water with surfactants',
    image2D: '/src/assets/polymers/water-coating-2d.png',
    properties: {
      meltingPoint: 'Variable depending on polymer',
      density: '1.0-1.2 g/cm³',
      tensileStrength: '10-50 MPa (cured)',
      solubility: 'Water-based before cure, insoluble after'
    },
    uses: [
      'Architectural paints',
      'Automotive water-based paints',
      'Wood finishes',
      'Paper coatings',
      'Concrete sealers',
      'Metal protective coatings'
    ],
    advantages: [
      'Low VOC emissions',
      'Easy cleanup with water',
      'Non-flammable',
      'Low odor',
      'Safer for workers and environment',
      'Good color retention'
    ],
    limitations: [
      'Slower drying than solvent-based',
      'Sensitive to application temperature and humidity',
      'Can cause rusting on bare metal',
      'Lower chemical resistance than solvent types',
      'May require multiple coats'
    ],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable (polymer), water evaporates',
      recyclability: 'Limited recyclability',
      toxicity: 'Low toxicity',
      sustainability: 'High - low VOC, water-based, environmentally friendly'
    }
  },
  {
    id: 'fluoropolymer-coating',
    name: 'Fluoropolymer Coatings',
    category: 'adhesive',
    formula: 'PVDF: (CH₂CF₂)ₙ, PTFE: (CF₂CF₂)ₙ',
    molarMass: '64.04 g/mol (PVDF unit), 100.02 g/mol (PTFE unit)',
    structure: 'Fluorinated polymer - fully or partially fluorinated carbon backbone',
    synthesis: 'Polymerization of fluorinated ethylene monomers',
    image2D: '/src/assets/polymers/fluoropolymer-coating-2d.png',
    properties: {
      meltingPoint: '170°C (PVDF), 327°C (PTFE)',
      density: '1.76-1.78 g/cm³ (PVDF), 2.2 g/cm³ (PTFE)',
      tensileStrength: '30-50 MPa',
      solubility: 'Insoluble in most solvents'
    },
    uses: [
      'Non-stick cookware coatings (Teflon)',
      'Architectural metal panels',
      'Chemical processing equipment',
      'Wire and cable insulation',
      'Aerospace coatings',
      'High-performance industrial coatings'
    ],
    advantages: [
      'Exceptional chemical resistance',
      'Extreme temperature resistance',
      'Very low friction coefficient',
      'Excellent weathering and UV resistance',
      'Non-stick properties',
      'Electrical insulation'
    ],
    limitations: [
      'Very expensive',
      'Difficult to apply (requires high temperature)',
      'Poor adhesion (requires surface treatment/primer)',
      'Limited color options',
      'Environmental concerns (PFAS)',
      'Can degrade at very high temperatures'
    ],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable, extremely persistent',
      recyclability: 'Not recyclable',
      toxicity: 'Low toxicity when intact, toxic fumes if overheated, PFAS concerns',
      sustainability: 'Low - environmental persistence, bioaccumulation concerns, energy-intensive'
    }
  },
  {
    id: 'pp',
    name: 'Polypropylene',
    category: 'packaging',
    formula: '(C₃H₆)ₙ',
    molarMass: '42.08 g/mol (repeat unit)',
    structure: 'Linear or branched polyolefin',
    synthesis: 'Ziegler-Natta or metallocene catalyzed polymerization',
    properties: {
      meltingPoint: '160-170°C',
      density: '0.90-0.91 g/cm³',
      tensileStrength: '30-40 MPa'
    },
    uses: [
      'Packaging materials',
      'Automotive parts',
      'Textiles',
      'Medical devices',
      'Consumer goods'
    ],
    advantages: [
      'Lightweight',
      'Chemical resistance',
      'Fatigue resistance',
      'Recyclable'
    ],
    limitations: [
      'UV degradation',
      'Flammable',
      'Difficult to bond',
      'Lower strength than some plastics'
    ],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Recyclable (Type 5)',
      toxicity: 'Non-toxic',
      sustainability: 'Moderate - petroleum-based'
    }
  },
  {
    id: 'pu',
    name: 'Polyurethane',
    category: 'elastomers',
    formula: 'Variable urethane structure',
    molarMass: 'Variable (depends on formulation)',
    structure: 'Segmented block copolymer',
    synthesis: 'Polyaddition of polyols and diisocyanates',
    properties: {
      density: '1.05-1.25 g/cm³',
      tensileStrength: '20-70 MPa'
    },
    uses: [
      'Flexible foams',
      'Rigid insulation',
      'Coatings',
      'Adhesives',
      'Footwear'
    ],
    advantages: [
      'Versatile properties',
      'Good abrasion resistance',
      'Excellent cushioning',
      'Tunable hardness'
    ],
    limitations: [
      'Flammable',
      'Yellows with UV exposure',
      'Toxic fumes when burned',
      'Difficult to recycle'
    ],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Difficult to recycle',
      toxicity: 'Toxic during production',
      sustainability: 'Low - petroleum-based'
    }
  },
  {
    id: 'ptfe',
    name: 'Polytetrafluoroethylene (Teflon)',
    category: 'functional',
    formula: '(C₂F₄)ₙ',
    molarMass: '100.02 g/mol (repeat unit)',
    structure: 'Fully fluorinated linear polymer',
    synthesis: 'Free radical polymerization of tetrafluoroethylene',
    properties: {
      meltingPoint: '327°C',
      density: '2.2 g/cm³',
      tensileStrength: '20-40 MPa'
    },
    uses: [
      'Non-stick cookware',
      'Chemical resistant linings',
      'Gaskets and seals',
      'Wire insulation',
      'Medical implants'
    ],
    advantages: [
      'Extremely low friction',
      'Chemical inertness',
      'High temperature resistance',
      'Non-stick properties'
    ],
    limitations: [
      'Very expensive',
      'Difficult to process',
      'Creeps under load',
      'Cannot be melt-processed conventionally'
    ],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Not recyclable',
      toxicity: 'Toxic fumes when overheated',
      sustainability: 'Low - fluorinated compound'
    }
  },
  {
    id: 'pbat',
    name: 'Polybutylene Adipate Terephthalate',
    category: 'biodegradable',
    formula: '(C₁₈H₂₂O₇)ₙ',
    molarMass: '~350 g/mol (repeat unit)',
    structure: 'Random copolyester',
    synthesis: 'Polycondensation of adipic acid, terephthalic acid, and butanediol',
    properties: {
      meltingPoint: '110-120°C',
      density: '1.18-1.26 g/cm³',
      tensileStrength: '15-35 MPa'
    },
    uses: [
      'Compostable bags',
      'Agricultural films',
      'Food packaging',
      'Disposable cutlery',
      'Mulch films'
    ],
    advantages: [
      'Biodegradable',
      'Good processability',
      'Flexible',
      'Compatible with PLA'
    ],
    limitations: [
      'Higher cost than PE',
      'Moderate barrier properties',
      'Requires industrial composting'
    ],
    environmentalImpact: {
      biodegradability: 'Biodegradable in industrial composting',
      recyclability: 'Compostable',
      toxicity: 'Non-toxic',
      sustainability: 'Moderate - petroleum-based but biodegradable'
    }
  },
  {
    id: 'pha',
    name: 'Polyhydroxyalkanoates',
    category: 'biopolymers',
    formula: '(C₄H₆O₂)ₙ (PHB)',
    molarMass: '86.09 g/mol (PHB repeat unit)',
    structure: 'Linear polyester produced by bacteria',
    synthesis: 'Bacterial fermentation of sugars or lipids',
    properties: {
      meltingPoint: '170-180°C (PHB)',
      density: '1.18-1.26 g/cm³',
      tensileStrength: '24-40 MPa'
    },
    uses: [
      'Biodegradable packaging',
      'Medical sutures',
      'Drug delivery',
      'Agricultural films',
      'Disposable items'
    ],
    advantages: [
      'Fully biodegradable',
      'Renewable resource',
      'Biocompatible',
      'Similar to conventional plastics'
    ],
    limitations: [
      'Expensive production',
      'Brittle',
      'Narrow processing window',
      'Batch variation'
    ],
    environmentalImpact: {
      biodegradability: 'Fully biodegradable in various environments',
      recyclability: 'Compostable',
      toxicity: 'Non-toxic',
      sustainability: 'High - renewable and biodegradable'
    }
  },
  {
    id: 'carbon-fiber',
    name: 'Carbon Fiber Reinforced Polymer',
    category: 'composite',
    formula: 'Carbon fibers in polymer matrix',
    molarMass: 'Composite material',
    structure: 'Carbon fibers embedded in epoxy or other matrix',
    synthesis: 'Layup and curing of carbon fiber prepreg',
    properties: {
      density: '1.5-1.6 g/cm³',
      tensileStrength: '600-1000 MPa'
    },
    uses: [
      'Aerospace structures',
      'Sports equipment',
      'Automotive parts',
      'Wind turbine blades',
      'High-performance bicycles'
    ],
    advantages: [
      'Exceptional strength-to-weight ratio',
      'High stiffness',
      'Fatigue resistance',
      'Corrosion resistant'
    ],
    limitations: [
      'Very expensive',
      'Brittle failure mode',
      'Difficult to repair',
      'Electrically conductive (can be issue)'
    ],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Difficult to recycle',
      toxicity: 'Low toxicity',
      sustainability: 'Low - energy-intensive production'
    }
  },
  {
    id: 'smp-polymer',
    name: 'Shape Memory Polymer',
    category: 'shape-memory',
    formula: 'Variable (typically polyurethane-based)',
    molarMass: 'Variable',
    structure: 'Crosslinked or phase-separated structure',
    synthesis: 'Various methods depending on base polymer',
    properties: {
      density: '1.0-1.2 g/cm³',
      tensileStrength: '10-60 MPa'
    },
    uses: [
      'Medical stents',
      'Self-deployable structures',
      'Smart textiles',
      'Actuators',
      'Aerospace applications'
    ],
    advantages: [
      'Programmable shape recovery',
      'Lightweight',
      'Biocompatible options available',
      'Easy to process'
    ],
    limitations: [
      'Limited recovery stress',
      'Temperature-dependent',
      'Relatively new technology',
      'Can be expensive'
    ],
    environmentalImpact: {
      biodegradability: 'Generally non-biodegradable',
      recyclability: 'Difficult to recycle',
      toxicity: 'Depends on base polymer',
      sustainability: 'Moderate'
    }
  },
  {
    id: 'self-heal',
    name: 'Self-Healing Polymer',
    category: 'self-healing',
    formula: 'Variable (microcapsule or reversible bond systems)',
    molarMass: 'Variable',
    structure: 'Polymer matrix with healing agents or dynamic bonds',
    synthesis: 'Incorporation of microcapsules or use of reversible bonds',
    properties: {
      density: 'Variable',
      tensileStrength: 'Variable (typically 10-50 MPa)'
    },
    uses: [
      'Protective coatings',
      'Aerospace materials',
      'Automotive parts',
      'Electronics encapsulation',
      'Infrastructure materials'
    ],
    advantages: [
      'Extended service life',
      'Reduced maintenance',
      'Damage detection and repair',
      'Cost-effective long-term'
    ],
    limitations: [
      'Expensive',
      'Limited healing cycles',
      'Healing efficiency varies',
      'Complex manufacturing'
    ],
    environmentalImpact: {
      biodegradability: 'Generally non-biodegradable',
      recyclability: 'Challenging',
      toxicity: 'Depends on healing agent',
      sustainability: 'Moderate - extends material life'
    }
  },
  {
    id: 'pmma',
    name: 'Polymethyl Methacrylate (Acrylic)',
    category: 'functional',
    formula: '(C₅H₈O₂)ₙ',
    molarMass: '100.12 g/mol (repeat unit)',
    structure: 'Linear polymer with ester side groups',
    synthesis: 'Free radical polymerization of methyl methacrylate',
    properties: {
      meltingPoint: '160°C (softening)',
      density: '1.18 g/cm³',
      tensileStrength: '70-75 MPa'
    },
    uses: [
      'Optical lenses',
      'Display screens',
      'Aquariums',
      'Medical implants',
      'Signage'
    ],
    advantages: [
      'Excellent optical clarity',
      'UV resistant',
      'Good weatherability',
      'Easy to fabricate'
    ],
    limitations: [
      'Brittle',
      'Scratches easily',
      'Flammable',
      'Poor chemical resistance'
    ],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Recyclable but limited infrastructure',
      toxicity: 'Non-toxic',
      sustainability: 'Moderate - petroleum-based'
    }
  },
  {
    id: 'pvac',
    name: 'Polyvinyl Acetate',
    category: 'adhesive',
    formula: '(C₄H₆O₂)ₙ',
    molarMass: '86.09 g/mol (repeat unit)',
    structure: 'Linear polymer with acetate side groups',
    synthesis: 'Free radical polymerization of vinyl acetate',
    properties: {
      meltingPoint: '~230°C (decomposition)',
      density: '1.19 g/cm³',
      solubility: 'Insoluble in water (emulsions used)'
    },
    uses: [
      'Wood glue',
      'Paper adhesives',
      'Paints',
      'Textiles',
      'Chewing gum base'
    ],
    advantages: [
      'Non-toxic',
      'Easy to apply',
      'Good adhesion to porous materials',
      'Inexpensive'
    ],
    limitations: [
      'Not water-resistant',
      'Creeps under load',
      'Poor heat resistance',
      'Limited outdoor use'
    ],
    environmentalImpact: {
      biodegradability: 'Slowly biodegradable',
      recyclability: 'Limited recyclability',
      toxicity: 'Non-toxic',
      sustainability: 'Moderate'
    }
  },
  {
    id: 'polynaphthalene',
    name: 'Polynaphthalene',
    category: 'conducting',
    formula: '(C₁₀H₈)ₙ',
    molarMass: '128.17 g/mol (repeat unit)',
    structure: 'Conjugated polymer with fused aromatic naphthalene rings',
    synthesis: 'Oxidative or electrochemical polymerization of naphthalene derivatives',
    image2D: '/src/assets/polymers/polynaphthalene-2d.png',
    properties: {
      conductivity: '0.1-10 S/cm (doped)',
      density: '1.15-1.25 g/cm³',
      solubility: 'Insoluble in most solvents'
    },
    uses: [
      'Organic electronics',
      'Conductive coatings',
      'Chemical sensors',
      'Battery electrodes',
      'Antistatic materials'
    ],
    advantages: [
      'Good thermal stability',
      'Extended conjugation for charge transport',
      'Tunable properties through substitution',
      'High aromatic character'
    ],
    limitations: [
      'Lower conductivity than polythiophene',
      'Difficult to process',
      'Limited commercial availability',
      'Degradation under UV exposure'
    ],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Difficult to recycle',
      toxicity: 'Moderate - aromatic compound',
      sustainability: 'Low - requires chemical synthesis'
    }
  },
  {
    id: 'polythiazole',
    name: 'Polythiazole',
    category: 'conducting',
    formula: '(C₃H₃NS)ₙ',
    molarMass: '85.13 g/mol (repeat unit)',
    structure: 'Conjugated heterocyclic polymer with nitrogen and sulfur atoms',
    synthesis: 'Oxidative polymerization of thiazole monomers or electropolymerization',
    image2D: '/src/assets/polymers/polythiazole-2d.png',
    properties: {
      conductivity: '1-50 S/cm (doped)',
      density: '1.4-1.5 g/cm³',
      solubility: 'Insoluble in common solvents'
    },
    uses: [
      'Electrochromic devices',
      'Organic solar cells',
      'Chemical sensors',
      'Supercapacitors',
      'Conductive textiles'
    ],
    advantages: [
      'Good electrochemical stability',
      'High charge storage capacity',
      'Fast redox switching',
      'Tunable electronic properties'
    ],
    limitations: [
      'Complex synthesis',
      'Poor mechanical properties',
      'Limited processability',
      'Requires doping for high conductivity'
    ],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Not recyclable',
      toxicity: 'Moderate - heterocyclic compound',
      sustainability: 'Low - requires specialized synthesis'
    }
  },
  {
    id: 'polyazulene',
    name: 'Polyazulene',
    category: 'conducting',
    formula: '(C₁₀H₈)ₙ',
    molarMass: '128.17 g/mol (repeat unit)',
    structure: 'Non-benzenoid aromatic polymer with 5- and 7-membered rings',
    synthesis: 'Electrochemical polymerization of azulene in organic electrolytes',
    image2D: '/src/assets/polymers/polyazulene-2d.png',
    properties: {
      conductivity: '0.01-1 S/cm (doped)',
      density: '1.2-1.3 g/cm³',
      solubility: 'Soluble in organic solvents when substituted'
    },
    uses: [
      'Electrochromic displays',
      'Organic light-emitting devices',
      'Chemical sensors',
      'Smart windows',
      'Energy storage devices'
    ],
    advantages: [
      'Unique blue color in neutral state',
      'Good electrochromic properties',
      'Reversible redox behavior',
      'Interesting optical properties'
    ],
    limitations: [
      'Low electrical conductivity',
      'Limited stability',
      'Expensive monomer',
      'Complex synthesis pathway'
    ],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Not recyclable',
      toxicity: 'Low toxicity',
      sustainability: 'Low - requires rare starting materials'
    }
  },
  {
    id: 'polyfuran',
    name: 'Polyfuran (PFu)',
    category: 'conducting',
    formula: '(C₄H₂O)ₙ',
    molarMass: '66.06 g/mol (repeat unit)',
    structure: 'Conjugated heterocyclic polymer with oxygen-containing furan rings',
    synthesis: 'Oxidative or electrochemical polymerization of furan derivatives',
    image2D: '/src/assets/polymers/polyfuran-2d.png',
    properties: {
      conductivity: '0.001-0.1 S/cm (doped)',
      density: '1.3-1.4 g/cm³',
      solubility: 'Insoluble in most solvents'
    },
    uses: [
      'Corrosion inhibitors',
      'Biosensors',
      'Battery electrodes',
      'Electrochromic devices',
      'Supercapacitors'
    ],
    advantages: [
      'Biocompatible',
      'Good electrochemical properties',
      'Potential from renewable sources (furfural)',
      'Good adhesion to metals'
    ],
    limitations: [
      'Lower conductivity than polythiophene',
      'Susceptible to oxidation',
      'Poor stability in air',
      'Limited processability'
    ],
    environmentalImpact: {
      biodegradability: 'Potentially biodegradable',
      recyclability: 'Difficult to recycle',
      toxicity: 'Low to moderate toxicity',
      sustainability: 'High - can be derived from biomass'
    }
  },
  {
    id: 'polyselenophene',
    name: 'Polyselenophene',
    category: 'conducting',
    formula: '(C₄H₂Se)ₙ',
    molarMass: '129.02 g/mol (repeat unit)',
    structure: 'Conjugated heterocyclic polymer with selenium atoms',
    synthesis: 'Electrochemical or chemical oxidative polymerization of selenophene',
    image2D: '/src/assets/polymers/polyselenophene-2d.png',
    properties: {
      conductivity: '10-100 S/cm (doped)',
      density: '1.6-1.8 g/cm³',
      solubility: 'Insoluble in most solvents'
    },
    uses: [
      'Organic photovoltaics',
      'Field-effect transistors',
      'Electrochromic devices',
      'Chemical sensors',
      'Thermoelectric materials'
    ],
    advantages: [
      'Higher conductivity than polythiophene',
      'Better charge mobility',
      'Enhanced π-π stacking',
      'Lower band gap for solar applications'
    ],
    limitations: [
      'Expensive selenium monomer',
      'Air-sensitive',
      'Toxicity concerns',
      'Limited commercial availability'
    ],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Not recyclable',
      toxicity: 'High - selenium compounds can be toxic',
      sustainability: 'Low - requires rare selenium element'
    }
  },
  {
    id: 'doped-polyacetylene',
    name: 'Doped Polyacetylene (AsF₅-doped PA)',
    category: 'conducting',
    formula: '(C₂H₂)ₙ · (AsF₅)ₓ',
    molarMass: '26.04 g/mol (repeat unit) + dopant',
    structure: 'Conjugated carbon backbone with alternating double bonds, intercalated with AsF₅ dopant',
    synthesis: 'Ziegler-Natta polymerization of acetylene followed by doping with arsenic pentafluoride vapor',
    image2D: '/src/assets/polymers/doped-polyacetylene-2d.png',
    properties: {
      conductivity: '10³-10⁵ S/cm (heavily doped)',
      density: '1.1-1.3 g/cm³',
      solubility: 'Insoluble'
    },
    uses: [
      'Research on conductive polymers',
      'Prototype electronic devices',
      'Educational demonstrations',
      'Fundamental materials science studies',
      'Historical significance in Nobel Prize research'
    ],
    advantages: [
      'Highest conductivity among organic polymers',
      'First discovered conducting polymer',
      'Simple chemical structure',
      'Important for understanding polymer electronics'
    ],
    limitations: [
      'Highly unstable in air and moisture',
      'Toxic dopant (AsF₅)',
      'Degrades rapidly',
      'Not commercially viable',
      'Poor mechanical properties'
    ],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Not recyclable',
      toxicity: 'Very high - contains toxic arsenic compounds',
      sustainability: 'Very low - hazardous materials, research-only use'
    }
  },
  {
    id: 'polythiophene-vinylene',
    name: 'Poly(thiophene-vinylene)',
    category: 'conducting',
    formula: '(C₆H₄S)ₙ',
    molarMass: '108.16 g/mol (repeat unit)',
    structure: 'Alternating conjugated polymer with thiophene rings and vinylene bridges',
    synthesis: 'Stille coupling, Heck coupling, or electropolymerization of thiophene-vinylene monomers',
    image2D: '/src/assets/polymers/polythiophene-vinylene-2d.png',
    properties: {
      conductivity: '0.1-10 S/cm (doped)',
      density: '1.3-1.5 g/cm³',
      solubility: 'Soluble in organic solvents when substituted'
    },
    uses: [
      'Organic solar cells',
      'Organic light-emitting diodes',
      'Field-effect transistors',
      'Photodetectors',
      'Electrochromic devices'
    ],
    advantages: [
      'Extended conjugation',
      'Tunable band gap',
      'Good charge transport properties',
      'Suitable for solution processing'
    ],
    limitations: [
      'Complex synthesis',
      'Moderate stability',
      'Lower efficiency than newer materials',
      'Sensitive to oxidation'
    ],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Difficult to recycle',
      toxicity: 'Low to moderate toxicity',
      sustainability: 'Moderate - requires metal catalysts for synthesis'
    }
  },
  {
    id: 'pnipam',
    name: 'Poly(N-isopropylacrylamide) (PNIPAM)',
    category: 'smart',
    formula: '(C₆H₁₁NO)ₙ',
    molarMass: '113.16 g/mol (repeat unit)',
    structure: 'Linear polymer with N-isopropylacrylamide side chains',
    synthesis: 'Free radical polymerization of N-isopropylacrylamide using AIBN or persulfate initiators',
    image2D: '/src/assets/polymers/pnipam-2d.png',
    properties: {
      meltingPoint: 'LCST ~32°C in water',
      density: '1.1 g/cm³',
      solubility: 'Water-soluble below LCST, phase separates above'
    },
    uses: [
      'Drug delivery systems',
      'Tissue engineering scaffolds',
      'Biosensors',
      'Smart hydrogels',
      'Cell culture surfaces'
    ],
    advantages: [
      'Biocompatible',
      'Reversible phase transition',
      'LCST near body temperature',
      'Easy to synthesize'
    ],
    limitations: [
      'Limited mechanical strength',
      'Narrow response temperature range',
      'Non-biodegradable',
      'Can aggregate irreversibly'
    ],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Difficult to recycle',
      toxicity: 'Low toxicity, biocompatible',
      sustainability: 'Moderate - petroleum-based monomers'
    }
  },
  {
    id: 'pvme',
    name: 'Poly(vinyl methyl ether) (PVME)',
    category: 'smart',
    formula: '(C₃H₆O)ₙ',
    molarMass: '58.08 g/mol (repeat unit)',
    structure: 'Linear polymer with methoxy side groups',
    synthesis: 'Cationic polymerization of vinyl methyl ether',
    image2D: '/src/assets/polymers/pvme-2d.png',
    properties: {
      meltingPoint: 'LCST ~37°C in water',
      density: '1.0 g/cm³',
      solubility: 'Water-soluble below LCST'
    },
    uses: [
      'Temperature-responsive drug delivery',
      'Adhesives',
      'Coatings',
      'Thickening agents',
      'Biomedical devices'
    ],
    advantages: [
      'Sharp phase transition',
      'Non-toxic',
      'Good film-forming properties',
      'Tunable LCST'
    ],
    limitations: [
      'Sensitive to pH changes',
      'Limited mechanical properties',
      'Oxidation susceptibility',
      'Hygroscopic'
    ],
    environmentalImpact: {
      biodegradability: 'Slowly biodegradable',
      recyclability: 'Limited recyclability',
      toxicity: 'Non-toxic',
      sustainability: 'Moderate'
    }
  },
  {
    id: 'pvcl',
    name: 'Poly(N-vinylcaprolactam) (PVCL)',
    category: 'smart',
    formula: '(C₈H₁₃NO)ₙ',
    molarMass: '139.19 g/mol (repeat unit)',
    structure: 'Linear polymer with caprolactam ring pendant groups',
    synthesis: 'Free radical polymerization of N-vinylcaprolactam',
    image2D: '/src/assets/polymers/pvcl-2d.png',
    properties: {
      meltingPoint: 'LCST ~32-35°C in water',
      density: '1.1 g/cm³',
      solubility: 'Water-soluble below LCST'
    },
    uses: [
      'Biomedical applications',
      'Drug delivery systems',
      'Contact lenses',
      'Cosmetics',
      'Smart hydrogels'
    ],
    advantages: [
      'Excellent biocompatibility',
      'Non-toxic',
      'Stable phase transition',
      'Good mechanical properties'
    ],
    limitations: [
      'Expensive monomer',
      'Complex synthesis',
      'Limited availability',
      'Non-biodegradable'
    ],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Difficult to recycle',
      toxicity: 'Non-toxic, biocompatible',
      sustainability: 'Moderate - complex synthesis'
    }
  },
  {
    id: 'paa-smart',
    name: 'Poly(acrylic acid) (PAA)',
    category: 'smart',
    formula: '(C₃H₄O₂)ₙ',
    molarMass: '72.06 g/mol (repeat unit)',
    structure: 'Linear polymer with carboxylic acid groups',
    synthesis: 'Free radical polymerization of acrylic acid',
    image2D: '/src/assets/polymers/paa-2d.png',
    properties: {
      meltingPoint: 'Decomposes above 106°C',
      density: '1.1 g/cm³',
      solubility: 'Highly water-soluble, pH-responsive'
    },
    uses: [
      'pH-responsive drug delivery',
      'Superabsorbent polymers',
      'Hydrogels',
      'Water treatment',
      'Adhesives'
    ],
    advantages: [
      'Strong pH-responsiveness',
      'High water absorption',
      'Biocompatible',
      'Easy to functionalize'
    ],
    limitations: [
      'Poor mechanical strength',
      'Sensitive to ionic strength',
      'Can swell excessively',
      'Degrades at high pH'
    ],
    environmentalImpact: {
      biodegradability: 'Slowly biodegradable',
      recyclability: 'Limited recyclability',
      toxicity: 'Low toxicity',
      sustainability: 'Moderate - petroleum-based'
    }
  },
  {
    id: 'pmaa-smart',
    name: 'Poly(methacrylic acid) (PMAA)',
    category: 'smart',
    formula: '(C₄H₆O₂)ₙ',
    molarMass: '86.09 g/mol (repeat unit)',
    structure: 'Linear polymer with methyl and carboxylic acid groups',
    synthesis: 'Free radical polymerization of methacrylic acid',
    image2D: '/src/assets/polymers/pmaa-2d.png',
    properties: {
      meltingPoint: '228°C',
      density: '1.2 g/cm³',
      solubility: 'Water-soluble, pH-dependent'
    },
    uses: [
      'pH-sensitive drug delivery',
      'Controlled release systems',
      'Coatings',
      'Dental materials',
      'Biosensors'
    ],
    advantages: [
      'pH-responsive swelling',
      'Good biocompatibility',
      'Strong mucoadhesive properties',
      'Stable in physiological conditions'
    ],
    limitations: [
      'Brittle when dry',
      'Limited mechanical strength',
      'Requires crosslinking for stability',
      'Slow response time'
    ],
    environmentalImpact: {
      biodegradability: 'Slowly biodegradable',
      recyclability: 'Difficult to recycle',
      toxicity: 'Low toxicity',
      sustainability: 'Moderate - petroleum-based'
    }
  },
  {
    id: 'pdmaema',
    name: 'Poly(2-(dimethylamino)ethyl methacrylate) (PDMAEMA)',
    category: 'smart',
    formula: '(C₈H₁₅NO₂)ₙ',
    molarMass: '157.21 g/mol (repeat unit)',
    structure: 'Linear polymer with tertiary amine groups',
    synthesis: 'Reversible addition-fragmentation chain transfer (RAFT) or ATRP polymerization',
    image2D: '/src/assets/polymers/pdmaema-2d.png',
    properties: {
      meltingPoint: 'UCST behavior',
      density: '1.04 g/cm³',
      solubility: 'pH and temperature responsive in water'
    },
    uses: [
      'Gene delivery vectors',
      'Antimicrobial coatings',
      'pH-responsive drug delivery',
      'Flocculants',
      'Ion exchange materials'
    ],
    advantages: [
      'Dual pH and temperature responsive',
      'Antimicrobial properties',
      'DNA complexation ability',
      'Easy to modify'
    ],
    limitations: [
      'Cytotoxic at high concentrations',
      'Sensitive to ionic strength',
      'Hydrolytic degradation',
      'Limited stability'
    ],
    environmentalImpact: {
      biodegradability: 'Slowly biodegradable',
      recyclability: 'Not recyclable',
      toxicity: 'Moderate toxicity',
      sustainability: 'Low - complex synthesis'
    }
  },
  {
    id: 'azobenzene-polymer',
    name: 'Azobenzene-based Polymers',
    category: 'smart',
    formula: 'Variable (contains -N=N- chromophore)',
    molarMass: 'Variable',
    structure: 'Polymer backbone with azobenzene side groups or in main chain',
    synthesis: 'Polymerization of azobenzene-functionalized monomers or post-polymerization modification',
    image2D: '/src/assets/polymers/azobenzene-polymer-2d.png',
    properties: {
      meltingPoint: 'Variable',
      density: '1.1-1.3 g/cm³',
      solubility: 'Depends on backbone, photoisomerizable'
    },
    uses: [
      'Optical data storage',
      'Photoresponsive surfaces',
      'Molecular switches',
      'Light-controlled drug release',
      'Smart coatings'
    ],
    advantages: [
      'Reversible photoisomerization',
      'Fast response to light',
      'Multiple switching cycles',
      'Precise spatial control'
    ],
    limitations: [
      'UV degradation over time',
      'Limited thermal stability',
      'Complex synthesis',
      'Requires UV/visible light'
    ],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Difficult to recycle',
      toxicity: 'Low to moderate toxicity',
      sustainability: 'Low - complex synthesis'
    }
  },
  {
    id: 'spiropyran-polymer',
    name: 'Spiropyran-containing Polymers',
    category: 'smart',
    formula: 'Variable (contains spiropyran unit)',
    molarMass: 'Variable',
    structure: 'Polymer with spiropyran photochromic moieties',
    synthesis: 'Copolymerization with spiropyran-functionalized monomers',
    image2D: '/src/assets/polymers/spiropyran-polymer-2d.png',
    properties: {
      meltingPoint: 'Variable',
      density: '1.1-1.2 g/cm³',
      solubility: 'Photochromic, changes with UV/visible light'
    },
    uses: [
      'Photochromic lenses',
      'Security inks',
      'Sensors',
      'Light-responsive drug delivery',
      'Smart windows'
    ],
    advantages: [
      'Dramatic color change',
      'Reversible photoswitching',
      'pH and metal ion sensing',
      'Good fatigue resistance'
    ],
    limitations: [
      'Degradation under prolonged UV',
      'Expensive synthesis',
      'Limited commercial availability',
      'Slow thermal back-reaction'
    ],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Not recyclable',
      toxicity: 'Low toxicity',
      sustainability: 'Low - complex organic synthesis'
    }
  },
  {
    id: 'magnetite-hydrogel',
    name: 'Magnetite (Fe₃O₄)-filled Hydrogels',
    category: 'smart',
    formula: 'Hydrogel matrix + Fe₃O₄ nanoparticles',
    molarMass: 'Variable (composite)',
    structure: 'Crosslinked hydrogel network with embedded magnetic nanoparticles',
    synthesis: 'In situ precipitation of Fe₃O₄ in hydrogel or mixing preformed nanoparticles',
    image2D: '/src/assets/polymers/magnetite-hydrogel-2d.png',
    properties: {
      density: '1.2-1.8 g/cm³',
      solubility: 'Swells in water',
      conductivity: 'Magnetically responsive'
    },
    uses: [
      'Targeted drug delivery',
      'Magnetic hyperthermia',
      'Tissue engineering',
      'Bioseparation',
      'MRI contrast agents'
    ],
    advantages: [
      'Remote magnetic control',
      'Biocompatible',
      'Multifunctional',
      'Stimuli-responsive'
    ],
    limitations: [
      'Particle aggregation',
      'Complex preparation',
      'Potential toxicity of free nanoparticles',
      'Stability issues'
    ],
    environmentalImpact: {
      biodegradability: 'Partially biodegradable (hydrogel)',
      recyclability: 'Not recyclable',
      toxicity: 'Low toxicity when properly encapsulated',
      sustainability: 'Moderate'
    }
  },
  {
    id: 'magneto-elastomer',
    name: 'Magneto-sensitive Elastomers',
    category: 'smart',
    formula: 'Elastomer matrix + magnetic particles',
    molarMass: 'Variable (composite)',
    structure: 'Elastomeric polymer with embedded magnetic particles',
    synthesis: 'Mixing magnetic particles with liquid elastomer precursor followed by curing',
    image2D: '/src/assets/polymers/magneto-elastomer-2d.png',
    properties: {
      density: '1.5-2.5 g/cm³',
      tensileStrength: '1-10 MPa',
      solubility: 'Insoluble'
    },
    uses: [
      'Vibration dampers',
      'Soft actuators',
      'Sensors',
      'Seals and gaskets',
      'Adaptive structures'
    ],
    advantages: [
      'Tunable stiffness',
      'Fast response to magnetic field',
      'Reversible deformation',
      'No external power needed'
    ],
    limitations: [
      'Limited force generation',
      'Particle sedimentation',
      'Reduced mechanical properties',
      'Requires strong magnetic field'
    ],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Difficult to recycle',
      toxicity: 'Low toxicity',
      sustainability: 'Moderate - composite material'
    }
  },
  {
    id: 'pu-smp',
    name: 'Polyurethane-based Shape Memory Polymers',
    category: 'smart',
    formula: 'Variable (-NHCOO- linkages)',
    molarMass: 'Variable',
    structure: 'Segmented copolymer with hard and soft segments',
    synthesis: 'Step-growth polymerization of diisocyanates with polyols',
    image2D: '/src/assets/polymers/pu-smp-2d.png',
    properties: {
      meltingPoint: 'Transition temp 40-60°C (tunable)',
      density: '1.0-1.2 g/cm³',
      tensileStrength: '20-50 MPa'
    },
    uses: [
      'Biomedical stents',
      'Smart textiles',
      'Self-deploying structures',
      'Actuators',
      'Aerospace applications'
    ],
    advantages: [
      'Tunable transition temperature',
      'High shape recovery',
      'Biocompatible variants available',
      'Good mechanical properties'
    ],
    limitations: [
      'Degradation in moisture',
      'Limited recovery stress',
      'Isocyanate toxicity in synthesis',
      'Complex processing'
    ],
    environmentalImpact: {
      biodegradability: 'Some variants biodegradable',
      recyclability: 'Difficult to recycle',
      toxicity: 'Low toxicity in final form',
      sustainability: 'Moderate - petroleum-based'
    }
  },
  {
    id: 'pcl-smp',
    name: 'Poly(ε-caprolactone) (PCL)-based SMPs',
    category: 'smart',
    formula: '(C₆H₁₀O₂)ₙ',
    molarMass: '114.14 g/mol (repeat unit)',
    structure: 'Semi-crystalline aliphatic polyester',
    synthesis: 'Ring-opening polymerization of ε-caprolactone',
    image2D: '/src/assets/polymers/pcl-smp-2d.png',
    properties: {
      meltingPoint: '58-60°C',
      density: '1.145 g/cm³',
      tensileStrength: '16-25 MPa'
    },
    uses: [
      'Biodegradable sutures',
      'Drug delivery devices',
      'Tissue engineering scaffolds',
      'Self-tightening sutures',
      'Smart implants'
    ],
    advantages: [
      'Biodegradable',
      'Biocompatible',
      'FDA approved for medical use',
      'Predictable shape memory behavior'
    ],
    limitations: [
      'Low transition temperature',
      'Slow degradation rate',
      'Hydrophobic',
      'Limited mechanical strength'
    ],
    environmentalImpact: {
      biodegradability: 'Biodegradable (slow)',
      recyclability: 'Limited recyclability',
      toxicity: 'Non-toxic, biocompatible',
      sustainability: 'Moderate - petroleum-based but biodegradable'
    }
  },
  {
    id: 'microcapsule-polymer',
    name: 'Microcapsule-based Self-healing Polymers',
    category: 'smart',
    formula: 'Variable (composite)',
    molarMass: 'Variable',
    structure: 'Polymer matrix with embedded microcapsules containing healing agent',
    synthesis: 'Dispersion of microcapsules in polymer matrix followed by curing',
    image2D: '/src/assets/polymers/microcapsule-polymer-2d.png',
    properties: {
      density: '1.1-1.3 g/cm³',
      tensileStrength: 'Similar to base polymer',
      solubility: 'Depends on matrix'
    },
    uses: [
      'Protective coatings',
      'Structural composites',
      'Electronics encapsulation',
      'Automotive parts',
      'Construction materials'
    ],
    advantages: [
      'Autonomous healing',
      'Single-time healing effective',
      'Compatible with various matrices',
      'Proven technology'
    ],
    limitations: [
      'One-time healing only',
      'Microcapsule preparation complexity',
      'Reduced mechanical properties',
      'Limited shelf life'
    ],
    environmentalImpact: {
      biodegradability: 'Depends on matrix and healing agent',
      recyclability: 'Difficult to recycle',
      toxicity: 'Depends on healing agent',
      sustainability: 'Moderate - extends material life'
    }
  },
  {
    id: 'dynamic-covalent-polymer',
    name: 'Dynamic Covalent Bond Polymers',
    category: 'smart',
    formula: 'Variable (contains reversible bonds)',
    molarMass: 'Variable',
    structure: 'Polymer network with dynamic covalent bonds (disulfide, imine, boronic ester)',
    synthesis: 'Polymerization with monomers containing reversible covalent linkages',
    image2D: '/src/assets/polymers/dynamic-covalent-2d.png',
    properties: {
      meltingPoint: 'Variable',
      density: '1.0-1.3 g/cm³',
      solubility: 'Variable, can be reprocessable'
    },
    uses: [
      'Recyclable thermosets',
      'Self-healing materials',
      'Adaptive networks',
      'Shape memory materials',
      'Vitrimers'
    ],
    advantages: [
      'Multiple healing cycles',
      'Reprocessable',
      'Tunable properties',
      'Intrinsic healing mechanism'
    ],
    limitations: [
      'Requires specific conditions (heat, pH, catalyst)',
      'Slower healing than supramolecular',
      'Complex design',
      'Potential stability issues'
    ],
    environmentalImpact: {
      biodegradability: 'Variable',
      recyclability: 'Highly recyclable',
      toxicity: 'Depends on specific chemistry',
      sustainability: 'High - reprocessable'
    }
  },
  {
    id: 'peptide-hydrogel',
    name: 'Peptide-crosslinked Hydrogels',
    category: 'smart',
    formula: 'Variable (polymer + peptide crosslinks)',
    molarMass: 'Variable',
    structure: 'Hydrogel network crosslinked by enzyme-cleavable peptide sequences',
    synthesis: 'Crosslinking hydrophilic polymers with bifunctional peptides',
    image2D: '/src/assets/polymers/peptide-hydrogel-2d.png',
    properties: {
      density: '1.0-1.1 g/cm³',
      solubility: 'Swells in aqueous media',
      tensileStrength: '0.1-10 kPa'
    },
    uses: [
      'Tissue engineering',
      'Cell culture matrices',
      'Controlled drug release',
      '3D bioprinting',
      'Wound healing'
    ],
    advantages: [
      'Biocompatible',
      'Biodegradable',
      'Cell-responsive degradation',
      'Biomimetic properties'
    ],
    limitations: [
      'Expensive peptide synthesis',
      'Low mechanical strength',
      'Batch-to-batch variability',
      'Rapid degradation in vivo'
    ],
    environmentalImpact: {
      biodegradability: 'Highly biodegradable',
      recyclability: 'Not recyclable',
      toxicity: 'Non-toxic, biocompatible',
      sustainability: 'High - biological components'
    }
  },
  {
    id: 'dextranase-polymer',
    name: 'Dextranase-sensitive Polymers',
    category: 'smart',
    formula: '(C₆H₁₀O₅)ₙ + modifications',
    molarMass: 'Variable (10,000-2,000,000 Da)',
    structure: 'Dextran backbone with enzyme-cleavable α-1,6-glycosidic bonds',
    synthesis: 'Bacterial fermentation followed by chemical modification',
    image2D: '/src/assets/polymers/dextranase-polymer-2d.png',
    properties: {
      density: '1.5 g/cm³',
      solubility: 'Highly water-soluble',
      meltingPoint: 'Decomposes before melting'
    },
    uses: [
      'Colon-specific drug delivery',
      'Prodrug systems',
      'Targeted cancer therapy',
      'Blood plasma expanders',
      'Microbiome-responsive systems'
    ],
    advantages: [
      'Biocompatible',
      'Biodegradable',
      'Site-specific degradation',
      'Natural polymer'
    ],
    limitations: [
      'Variable molecular weight',
      'Limited mechanical strength',
      'Rapid clearance',
      'Immunogenicity possible'
    ],
    environmentalImpact: {
      biodegradability: 'Highly biodegradable',
      recyclability: 'Compostable',
      toxicity: 'Non-toxic',
      sustainability: 'High - biologically derived'
    }
  },
  {
    id: 'disulfide-polymer',
    name: 'Disulfide-containing Polymers',
    category: 'smart',
    formula: 'Variable (contains -S-S- bonds)',
    molarMass: 'Variable',
    structure: 'Polymer network with disulfide crosslinks or in backbone',
    synthesis: 'Oxidation of thiol-containing polymers or polymerization of disulfide monomers',
    image2D: '/src/assets/polymers/disulfide-polymer-2d.png',
    properties: {
      density: '1.1-1.3 g/cm³',
      solubility: 'Variable, redox-responsive',
      tensileStrength: 'Variable'
    },
    uses: [
      'Redox-responsive drug delivery',
      'Intracellular drug release',
      'Self-healing materials',
      'Protein conjugates',
      'Gene delivery'
    ],
    advantages: [
      'Cleavable in reducing environment',
      'Reversible crosslinking',
      'Biocompatible',
      'Multiple healing cycles'
    ],
    limitations: [
      'Oxidation sensitivity',
      'Slow healing kinetics',
      'Requires specific conditions',
      'Stability issues in air'
    ],
    environmentalImpact: {
      biodegradability: 'Variable',
      recyclability: 'Potentially recyclable',
      toxicity: 'Low toxicity',
      sustainability: 'Moderate'
    }
  },
  {
    id: 'mechanophore-polymer',
    name: 'Mechanophore-incorporated Polymers',
    category: 'smart',
    formula: 'Variable (contains mechanophore units)',
    molarMass: 'Variable',
    structure: 'Polymer with mechanically sensitive molecular units that change upon stress',
    synthesis: 'Incorporation of mechanophores (spiropyran, cyclobutane, etc.) into polymer backbone',
    image2D: '/src/assets/polymers/mechanophore-polymer-2d.png',
    properties: {
      density: '1.0-1.3 g/cm³',
      tensileStrength: 'Variable',
      solubility: 'Depends on polymer matrix'
    },
    uses: [
      'Stress sensing materials',
      'Damage detection',
      'Self-reporting materials',
      'Force-responsive catalysts',
      'Smart coatings'
    ],
    advantages: [
      'Real-time damage detection',
      'Visual stress indication',
      'Autonomous sensing',
      'Multiple detection mechanisms'
    ],
    limitations: [
      'Complex synthesis',
      'Expensive mechanophores',
      'Irreversible in many cases',
      'Limited commercial availability'
    ],
    environmentalImpact: {
      biodegradability: 'Depends on polymer backbone',
      recyclability: 'Difficult to recycle',
      toxicity: 'Generally low toxicity',
      sustainability: 'Low - complex synthesis'
    }
  },
  {
    id: 'pla',
    name: 'Polylactic Acid (PLA)',
    category: 'biomedical',
    formula: '(C₃H₄O₂)ₙ',
    molarMass: '72.06 g/mol (repeat unit)',
    structure: 'Aliphatic polyester with chiral carbon centers',
    synthesis: 'Ring-opening polymerization of lactide or direct condensation of lactic acid',
    image2D: '/src/assets/polymers/pla-2d.png',
    properties: {
      meltingPoint: '150-175°C',
      density: '1.21-1.43 g/cm³',
      tensileStrength: '50-70 MPa',
      solubility: 'Soluble in chlorinated solvents, hot benzene'
    },
    uses: [
      'Biodegradable sutures',
      'Orthopedic fixation devices',
      'Drug delivery systems',
      'Tissue engineering scaffolds',
      'Biodegradable implants'
    ],
    advantages: [
      'Biocompatible',
      'Biodegradable',
      'FDA approved',
      'Good mechanical properties',
      'Derived from renewable resources'
    ],
    limitations: [
      'Slow degradation rate',
      'Acidic degradation products',
      'Limited thermal stability',
      'Brittle at room temperature'
    ],
    environmentalImpact: {
      biodegradability: 'Fully biodegradable (6-24 months)',
      recyclability: 'Chemically recyclable',
      toxicity: 'Non-toxic, biocompatible',
      sustainability: 'High - made from corn starch or sugarcane'
    }
  },
  {
    id: 'pga',
    name: 'Polyglycolic Acid (PGA)',
    category: 'biomedical',
    formula: '(C₂H₂O₂)ₙ',
    molarMass: '58.04 g/mol (repeat unit)',
    structure: 'Simplest linear aliphatic polyester',
    synthesis: 'Ring-opening polymerization of glycolide',
    image2D: '/src/assets/polymers/pga-2d.png',
    properties: {
      meltingPoint: '225-230°C',
      density: '1.50-1.69 g/cm³',
      tensileStrength: '60-100 MPa',
      solubility: 'Insoluble in most organic solvents'
    },
    uses: [
      'Absorbable sutures (Dexon)',
      'Drug delivery carriers',
      'Tissue engineering',
      'Wound closure devices',
      'Temporary medical implants'
    ],
    advantages: [
      'Rapid biodegradation (2-4 weeks)',
      'High tensile strength',
      'Excellent biocompatibility',
      'Complete absorption'
    ],
    limitations: [
      'Very fast degradation',
      'Poor solubility',
      'Rapid loss of mechanical strength',
      'Acidic degradation'
    ],
    environmentalImpact: {
      biodegradability: 'Rapidly biodegradable (2-4 weeks)',
      recyclability: 'Not typically recycled',
      toxicity: 'Non-toxic',
      sustainability: 'High - fully biodegradable'
    }
  },
  {
    id: 'plga',
    name: 'Poly(lactic-co-glycolic acid) (PLGA)',
    category: 'biomedical',
    formula: '(C₃H₄O₂)ₓ(C₂H₂O₂)ᵧ',
    molarMass: 'Variable (depends on ratio)',
    structure: 'Random or block copolymer of lactic and glycolic acid',
    synthesis: 'Ring-opening copolymerization of lactide and glycolide',
    image2D: '/src/assets/polymers/plga-2d.png',
    properties: {
      meltingPoint: '40-60°C (depends on ratio)',
      density: '1.34-1.60 g/cm³',
      tensileStrength: '40-55 MPa',
      solubility: 'Soluble in acetone, chloroform, ethyl acetate'
    },
    uses: [
      'Controlled drug delivery systems',
      'Microspheres and nanoparticles',
      'Tissue engineering scaffolds',
      'Sutures',
      'Bone fixation devices'
    ],
    advantages: [
      'Tunable degradation rate',
      'FDA and EMA approved',
      'Excellent biocompatibility',
      'Versatile processing',
      'Controlled drug release'
    ],
    limitations: [
      'Acidic degradation',
      'Loss of mechanical integrity',
      'Potential inflammatory response',
      'Expensive'
    ],
    environmentalImpact: {
      biodegradability: 'Fully biodegradable (1-12 months)',
      recyclability: 'Not typically recycled',
      toxicity: 'Non-toxic',
      sustainability: 'High - biodegradable medical polymer'
    }
  },
  {
    id: 'pcl-biomed',
    name: 'Polycaprolactone (PCL) - Biomedical',
    category: 'biomedical',
    formula: '(C₆H₁₀O₂)ₙ',
    molarMass: '114.14 g/mol (repeat unit)',
    structure: 'Semi-crystalline aliphatic polyester',
    synthesis: 'Ring-opening polymerization of ε-caprolactone',
    image2D: '/src/assets/polymers/pcl-biomed-2d.png',
    properties: {
      meltingPoint: '58-60°C',
      density: '1.145 g/cm³',
      tensileStrength: '16-20 MPa',
      solubility: 'Soluble in chloroform, dichloromethane'
    },
    uses: [
      'Long-term drug delivery',
      'Tissue engineering scaffolds',
      'Contraceptive devices',
      'Suture materials',
      'Wound dressings'
    ],
    advantages: [
      'Excellent biocompatibility',
      'Slow degradation (2-3 years)',
      'Easy to process',
      'Low cost',
      'FDA approved'
    ],
    limitations: [
      'Very slow degradation',
      'Low mechanical strength',
      'Hydrophobic nature',
      'Low melting point'
    ],
    environmentalImpact: {
      biodegradability: 'Biodegradable (2-3 years)',
      recyclability: 'Can be recycled',
      toxicity: 'Non-toxic',
      sustainability: 'High - biodegradable'
    }
  },
  {
    id: 'peg',
    name: 'Polyethylene Glycol (PEG)',
    category: 'biomedical',
    formula: 'HO(C₂H₄O)ₙH',
    molarMass: 'Variable (300-10,000,000 g/mol)',
    structure: 'Linear or branched polyether',
    synthesis: 'Ring-opening polymerization of ethylene oxide',
    image2D: '/src/assets/polymers/peg-2d.png',
    properties: {
      meltingPoint: '4-8°C (low MW) to 60-65°C (high MW)',
      density: '1.1-1.2 g/cm³',
      solubility: 'Soluble in water and many organic solvents'
    },
    uses: [
      'Protein conjugation (PEGylation)',
      'Drug delivery vehicles',
      'Laxatives',
      'Hydrogels',
      'Surface modification'
    ],
    advantages: [
      'Excellent biocompatibility',
      'Non-immunogenic',
      'Water soluble',
      'FDA approved',
      'Versatile molecular weights'
    ],
    limitations: [
      'Not biodegradable',
      'Can undergo oxidation',
      'Immunogenicity with repeated use',
      'Accumulation in tissues'
    ],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Difficult to recycle',
      toxicity: 'Generally non-toxic',
      sustainability: 'Low - petroleum-based'
    }
  },
  {
    id: 'chitosan',
    name: 'Chitosan',
    category: 'biomedical',
    formula: '(C₆H₁₁NO₄)ₙ',
    molarMass: '161.16 g/mol (repeat unit)',
    structure: 'Linear polysaccharide of β-(1→4)-linked D-glucosamine',
    synthesis: 'Deacetylation of chitin from crustacean shells',
    image2D: '/src/assets/polymers/chitosan-2d.png',
    properties: {
      density: '1.35-1.40 g/cm³',
      solubility: 'Soluble in acidic aqueous solutions',
      tensileStrength: '40-100 MPa (films)'
    },
    uses: [
      'Wound healing dressings',
      'Drug delivery systems',
      'Tissue engineering',
      'Antimicrobial coatings',
      'Hemostatic agents'
    ],
    advantages: [
      'Biocompatible and biodegradable',
      'Antimicrobial properties',
      'Hemostatic activity',
      'Derived from natural sources',
      'Promotes tissue regeneration'
    ],
    limitations: [
      'Limited solubility',
      'Batch variability',
      'Potential allergenicity',
      'Poor mechanical properties when wet'
    ],
    environmentalImpact: {
      biodegradability: 'Highly biodegradable',
      recyclability: 'Compostable',
      toxicity: 'Non-toxic',
      sustainability: 'High - derived from waste crustacean shells'
    }
  },
  {
    id: 'alginate',
    name: 'Alginate',
    category: 'biomedical',
    formula: '(C₆H₈O₆)ₙ',
    molarMass: '176.13 g/mol (average repeat unit)',
    structure: 'Linear polysaccharide of β-D-mannuronic and α-L-guluronic acid',
    synthesis: 'Extracted from brown seaweed',
    image2D: '/src/assets/polymers/alginate-2d.png',
    properties: {
      density: '1.60 g/cm³',
      solubility: 'Soluble in water',
      tensileStrength: 'Variable (depends on crosslinking)'
    },
    uses: [
      'Cell encapsulation',
      'Tissue engineering scaffolds',
      'Wound dressings',
      'Drug delivery matrices',
      'Injectable hydrogels'
    ],
    advantages: [
      'Excellent biocompatibility',
      'Mild gelation conditions',
      'Natural origin',
      'Easy to process',
      'Non-immunogenic'
    ],
    limitations: [
      'Limited mechanical strength',
      'Uncontrolled degradation',
      'Batch-to-batch variation',
      'Limited cell adhesion'
    ],
    environmentalImpact: {
      biodegradability: 'Biodegradable',
      recyclability: 'Compostable',
      toxicity: 'Non-toxic',
      sustainability: 'High - marine-derived'
    }
  },
  {
    id: 'hyaluronic-acid',
    name: 'Hyaluronic Acid (HA)',
    category: 'biomedical',
    formula: '(C₁₄H₂₁NO₁₁)ₙ',
    molarMass: '379.33 g/mol (disaccharide unit)',
    structure: 'Linear polysaccharide of D-glucuronic acid and N-acetyl-D-glucosamine',
    synthesis: 'Bacterial fermentation or extraction from rooster combs',
    image2D: '/src/assets/polymers/hyaluronic-acid-2d.png',
    properties: {
      density: '1.0-1.1 g/cm³',
      solubility: 'Highly soluble in water',
      tensileStrength: 'Variable'
    },
    uses: [
      'Dermal fillers',
      'Osteoarthritis treatment',
      'Ophthalmic surgery',
      'Wound healing',
      'Drug delivery'
    ],
    advantages: [
      'Excellent biocompatibility',
      'Natural ECM component',
      'Non-immunogenic',
      'Viscoelastic properties',
      'Promotes tissue healing'
    ],
    limitations: [
      'Rapid enzymatic degradation',
      'Expensive',
      'Requires chemical modification',
      'Poor mechanical properties'
    ],
    environmentalImpact: {
      biodegradability: 'Rapidly biodegradable',
      recyclability: 'Not applicable',
      toxicity: 'Non-toxic',
      sustainability: 'High - biofermentation'
    }
  },
  {
    id: 'collagen',
    name: 'Collagen',
    category: 'biomedical',
    formula: '(Gly-X-Y)ₙ (X and Y are often Pro or Hyp)',
    molarMass: 'Variable (typically 300,000 g/mol)',
    structure: 'Triple helix protein structure',
    synthesis: 'Extracted from animal tissues (bovine, porcine, marine)',
    image2D: '/src/assets/polymers/collagen-2d.png',
    properties: {
      meltingPoint: 'Denaturation at 37-40°C',
      density: '1.3-1.4 g/cm³',
      tensileStrength: '50-100 MPa',
      solubility: 'Soluble in acidic solutions'
    },
    uses: [
      'Tissue engineering scaffolds',
      'Wound dressings',
      'Artificial skin',
      'Drug delivery',
      'Cosmetic implants'
    ],
    advantages: [
      'Excellent biocompatibility',
      'Natural ECM component',
      'Promotes cell adhesion',
      'Biodegradable',
      'Low immunogenicity (when purified)'
    ],
    limitations: [
      'Batch variability',
      'Risk of disease transmission',
      'Poor mechanical strength',
      'Fast degradation',
      'Potential allergenicity'
    ],
    environmentalImpact: {
      biodegradability: 'Fully biodegradable',
      recyclability: 'Not applicable',
      toxicity: 'Non-toxic',
      sustainability: 'Moderate - animal-derived'
    }
  },
  {
    id: 'gelatin',
    name: 'Gelatin',
    category: 'biomedical',
    formula: 'Derived from collagen',
    molarMass: 'Variable (15,000-400,000 g/mol)',
    structure: 'Denatured collagen with disrupted triple helix',
    synthesis: 'Thermal or chemical hydrolysis of collagen',
    image2D: '/src/assets/polymers/gelatin-2d.png',
    properties: {
      meltingPoint: 'Sol-gel transition 25-35°C',
      density: '1.3-1.4 g/cm³',
      solubility: 'Soluble in water at elevated temperatures'
    },
    uses: [
      'Drug delivery capsules',
      'Tissue engineering',
      'Wound dressings',
      'Hemostatic sponges',
      'Bioink for 3D printing'
    ],
    advantages: [
      'Excellent biocompatibility',
      'Low cost',
      'FDA approved',
      'Easy to process',
      'Biodegradable'
    ],
    limitations: [
      'Low mechanical strength',
      'Temperature-sensitive gelation',
      'Batch variability',
      'Rapid enzymatic degradation',
      'Potential allergenicity'
    ],
    environmentalImpact: {
      biodegradability: 'Fully biodegradable',
      recyclability: 'Not applicable',
      toxicity: 'Non-toxic',
      sustainability: 'Moderate - animal byproduct'
    }
  },
  {
    id: 'fibrin',
    name: 'Fibrin',
    category: 'biomedical',
    formula: 'Protein polymer',
    molarMass: '340,000 g/mol (fibrinogen monomer)',
    structure: 'Network of crosslinked fibrin proteins',
    synthesis: 'Polymerization of fibrinogen by thrombin',
    image2D: '/src/assets/polymers/fibrin-2d.png',
    properties: {
      density: '1.3 g/cm³',
      tensileStrength: '0.1-1 MPa',
      solubility: 'Insoluble in water'
    },
    uses: [
      'Surgical sealants',
      'Tissue engineering scaffolds',
      'Hemostatic agents',
      'Drug delivery',
      'Cell culture substrates'
    ],
    advantages: [
      'Autologous material available',
      'Excellent biocompatibility',
      'Natural wound healing',
      'Injectable',
      'Biodegradable'
    ],
    limitations: [
      'Rapid degradation',
      'Low mechanical strength',
      'Risk of disease transmission',
      'Batch variability',
      'Expensive to produce'
    ],
    environmentalImpact: {
      biodegradability: 'Rapidly biodegradable',
      recyclability: 'Not applicable',
      toxicity: 'Non-toxic',
      sustainability: 'Moderate - blood-derived'
    }
  },
  {
    id: 'pmma-biomed',
    name: 'Polymethyl Methacrylate (PMMA) - Biomedical',
    category: 'biomedical',
    formula: '(C₅H₈O₂)ₙ',
    molarMass: '100.12 g/mol (repeat unit)',
    structure: 'Linear vinyl polymer with ester side chains',
    synthesis: 'Free radical polymerization of methyl methacrylate',
    image2D: '/src/assets/polymers/pmma-2d.png',
    properties: {
      meltingPoint: '130-140°C (glass transition)',
      density: '1.17-1.20 g/cm³',
      tensileStrength: '48-76 MPa',
      solubility: 'Soluble in chloroform, THF'
    },
    uses: [
      'Bone cement',
      'Intraocular lenses',
      'Dental prosthetics',
      'Cranioplasty',
      'Drug delivery devices'
    ],
    advantages: [
      'Excellent optical clarity',
      'Good biocompatibility',
      'High mechanical strength',
      'Long-term stability',
      'Easy to process'
    ],
    limitations: [
      'Non-biodegradable',
      'Exothermic polymerization',
      'Monomer toxicity',
      'Brittle',
      'Permanent implant'
    ],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Difficult to recycle',
      toxicity: 'Low toxicity when cured',
      sustainability: 'Low - petroleum-based'
    }
  },
  {
    id: 'pva-biomed',
    name: 'Polyvinyl Alcohol (PVA) - Biomedical',
    category: 'biomedical',
    formula: '(C₂H₄O)ₙ',
    molarMass: '44.05 g/mol (repeat unit)',
    structure: 'Linear polymer with hydroxyl groups',
    synthesis: 'Hydrolysis of polyvinyl acetate',
    image2D: '/src/assets/polymers/pva-2d.png',
    properties: {
      meltingPoint: '180-228°C',
      density: '1.19-1.31 g/cm³',
      tensileStrength: '30-50 MPa',
      solubility: 'Soluble in water'
    },
    uses: [
      'Contact lenses',
      'Cartilage replacement',
      'Embolization particles',
      'Drug delivery',
      'Artificial organs'
    ],
    advantages: [
      'Excellent biocompatibility',
      'Hydrophilic',
      'Good mechanical properties',
      'Non-toxic',
      'Easy to process'
    ],
    limitations: [
      'Non-biodegradable',
      'Sensitive to moisture',
      'Limited stability in body',
      'Swelling in water'
    ],
    environmentalImpact: {
      biodegradability: 'Partially biodegradable',
      recyclability: 'Can be recycled',
      toxicity: 'Non-toxic',
      sustainability: 'Moderate'
    }
  },
  {
    id: 'polydioxanone',
    name: 'Polydioxanone (PDO)',
    category: 'biomedical',
    formula: '(C₄H₆O₃)ₙ',
    molarMass: '102.09 g/mol (repeat unit)',
    structure: 'Aliphatic polyester with ether linkages',
    synthesis: 'Ring-opening polymerization of p-dioxanone',
    image2D: '/src/assets/polymers/pdo-2d.png',
    properties: {
      meltingPoint: '110-115°C',
      density: '1.31 g/cm³',
      tensileStrength: '500-700 MPa',
      solubility: 'Soluble in hexafluoroisopropanol'
    },
    uses: [
      'Monofilament sutures',
      'Surgical mesh',
      'Bone fixation devices',
      'Drug delivery',
      'Cosmetic threads'
    ],
    advantages: [
      'Excellent biocompatibility',
      'Flexible and strong',
      'Predictable degradation',
      'Minimal tissue reaction',
      'Maintains strength longer'
    ],
    limitations: [
      'Relatively expensive',
      'Slower degradation than PGA',
      'Limited solubility',
      'Requires specific processing'
    ],
    environmentalImpact: {
      biodegradability: 'Biodegradable (6 months)',
      recyclability: 'Not typically recycled',
      toxicity: 'Non-toxic',
      sustainability: 'High - biodegradable'
    }
  },
  {
    id: 'polyurethane-biomed',
    name: 'Biomedical Polyurethane',
    category: 'biomedical',
    formula: 'R-NH-CO-O-R\'',
    molarMass: 'Variable',
    structure: 'Block copolymer with urethane linkages',
    synthesis: 'Polyaddition of diisocyanates with polyols',
    image2D: '/src/assets/polymers/polyurethane-biomed-2d.png',
    properties: {
      density: '1.1-1.3 g/cm³',
      tensileStrength: '30-55 MPa',
      solubility: 'Variable depending on composition'
    },
    uses: [
      'Vascular grafts',
      'Heart valves',
      'Pacemaker leads',
      'Catheters',
      'Wound dressings'
    ],
    advantages: [
      'Excellent biocompatibility',
      'High elasticity',
      'Tunable properties',
      'Good blood compatibility',
      'Durable'
    ],
    limitations: [
      'Non-biodegradable',
      'Potential degradation in vivo',
      'Complex synthesis',
      'Variable biocompatibility'
    ],
    environmentalImpact: {
      biodegradability: 'Generally non-biodegradable',
      recyclability: 'Difficult to recycle',
      toxicity: 'Low toxicity when stabilized',
      sustainability: 'Low - petroleum-based'
    }
  },
  {
    id: 'silk-fibroin',
    name: 'Silk Fibroin',
    category: 'biomedical',
    formula: '(Gly-Ala-Gly-Ala-Gly-Ser)ₙ',
    molarMass: 'Variable (370,000 g/mol average)',
    structure: 'Protein polymer with β-sheet crystalline domains',
    synthesis: 'Extracted from silkworm cocoons (Bombyx mori)',
    image2D: '/src/assets/polymers/silk-fibroin-2d.png',
    properties: {
      density: '1.3-1.4 g/cm³',
      tensileStrength: '500-740 MPa',
      solubility: 'Soluble in lithium bromide, formic acid'
    },
    uses: [
      'Tissue engineering scaffolds',
      'Drug delivery systems',
      'Surgical sutures',
      'Wound dressings',
      'Bone regeneration'
    ],
    advantages: [
      'Excellent biocompatibility',
      'High mechanical strength',
      'Biodegradable',
      'Natural origin',
      'Versatile processing'
    ],
    limitations: [
      'Batch variability',
      'Slow degradation',
      'Limited availability',
      'Complex processing',
      'Potential immunogenicity'
    ],
    environmentalImpact: {
      biodegradability: 'Biodegradable (months to years)',
      recyclability: 'Not applicable',
      toxicity: 'Non-toxic',
      sustainability: 'High - natural renewable resource'
    }
  },
  {
    id: 'cellulose-acetate',
    name: 'Cellulose Acetate',
    category: 'biomedical',
    formula: '(C₆H₇O₂(OH)ₓ(OCOCH₃)y)ₙ where x+y=3',
    molarMass: 'Variable',
    structure: 'Cellulose with acetyl substituents',
    synthesis: 'Acetylation of cellulose with acetic anhydride',
    image2D: '/src/assets/polymers/cellulose-acetate-2d.png',
    properties: {
      density: '1.28-1.32 g/cm³',
      tensileStrength: '25-50 MPa',
      solubility: 'Soluble in acetone, acetic acid'
    },
    uses: [
      'Dialysis membranes',
      'Drug delivery',
      'Wound dressings',
      'Chromatography',
      'Tissue engineering'
    ],
    advantages: [
      'Biocompatible',
      'Biodegradable',
      'Natural origin',
      'Good mechanical properties',
      'Easy to process'
    ],
    limitations: [
      'Sensitive to pH',
      'Slow degradation',
      'Limited solubility',
      'Weak mechanical properties when wet'
    ],
    environmentalImpact: {
      biodegradability: 'Biodegradable (3-6 months)',
      recyclability: 'Can be composted',
      toxicity: 'Non-toxic',
      sustainability: 'High - plant-derived'
    }
  },
  {
    id: 'peo-biomed',
    name: 'Polyethylene Oxide (PEO)',
    category: 'biomedical',
    formula: '(C₂H₄O)ₙ',
    molarMass: 'Variable (high MW form of PEG)',
    structure: 'High molecular weight polyether',
    synthesis: 'Anionic ring-opening polymerization of ethylene oxide',
    image2D: '/src/assets/polymers/peo-2d.png',
    properties: {
      meltingPoint: '65-70°C',
      density: '1.13-1.21 g/cm³',
      solubility: 'Highly water soluble',
      tensileStrength: '10-30 MPa'
    },
    uses: [
      'Mucoadhesive drug delivery',
      'Hydrogels',
      'Protein resistance coatings',
      'Wound dressings',
      'Cell encapsulation'
    ],
    advantages: [
      'Excellent biocompatibility',
      'Non-immunogenic',
      'Water soluble',
      'FDA approved',
      'Mucoadhesive properties'
    ],
    limitations: [
      'Non-biodegradable',
      'Oxidation susceptibility',
      'Limited mechanical strength',
      'Swelling behavior'
    ],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Difficult',
      toxicity: 'Non-toxic',
      sustainability: 'Low - petroleum-based'
    }
  },
  {
    id: 'plla',
    name: 'Poly-L-lactic Acid (PLLA)',
    category: 'biomedical',
    formula: '(C₃H₄O₂)ₙ',
    molarMass: '72.06 g/mol (repeat unit)',
    structure: 'Stereoregular polyester with L-enantiomer',
    synthesis: 'Ring-opening polymerization of L-lactide',
    image2D: '/src/assets/polymers/plla-2d.png',
    properties: {
      meltingPoint: '170-180°C',
      density: '1.24-1.26 g/cm³',
      tensileStrength: '60-70 MPa',
      solubility: 'Soluble in chlorinated solvents'
    },
    uses: [
      'Orthopedic screws and plates',
      'Facial volumizers',
      'Tissue engineering',
      'Drug-eluting stents',
      'Surgical mesh'
    ],
    advantages: [
      'High crystallinity',
      'Better mechanical properties than racemic PLA',
      'Biodegradable',
      'FDA approved',
      'Longer degradation time'
    ],
    limitations: [
      'Slow degradation (2-5 years)',
      'Acidic degradation products',
      'Inflammatory response possible',
      'Expensive'
    ],
    environmentalImpact: {
      biodegradability: 'Biodegradable (2-5 years)',
      recyclability: 'Chemically recyclable',
      toxicity: 'Non-toxic',
      sustainability: 'High - renewable resource'
    }
  },
  {
    id: 'ppf',
    name: 'Poly(propylene fumarate) (PPF)',
    category: 'biomedical',
    formula: '(C₆H₈O₄)ₙ',
    molarMass: '144.13 g/mol (repeat unit)',
    structure: 'Unsaturated linear polyester',
    synthesis: 'Polycondensation of diethyl fumarate with propylene glycol',
    image2D: '/src/assets/polymers/ppf-2d.png',
    properties: {
      density: '1.2-1.3 g/cm³',
      tensileStrength: '10-40 MPa',
      solubility: 'Soluble in chloroform, methylene chloride'
    },
    uses: [
      'Injectable bone cements',
      'Bone tissue engineering',
      'Craniofacial reconstruction',
      'Spinal fusion',
      'Orthopedic fixation'
    ],
    advantages: [
      'Biodegradable',
      'Injectable formulations',
      'Crosslinkable',
      'Osteoconductive',
      'Tunable mechanical properties'
    ],
    limitations: [
      'Slow degradation',
      'Complex synthesis',
      'Exothermic curing',
      'Limited commercial availability',
      'Requires crosslinking agents'
    ],
    environmentalImpact: {
      biodegradability: 'Biodegradable (6-12 months)',
      recyclability: 'Not typically recycled',
      toxicity: 'Low toxicity',
      sustainability: 'Moderate'
    }
  },
  // Engineering & High Performance Polymers
  {
    id: 'peek',
    name: 'Polyetheretherketone (PEEK)',
    category: 'engineering',
    formula: '(C₁₉H₁₂O₃)ₙ',
    molarMass: '288.3 g/mol (repeat unit)',
    structure: 'Semi-crystalline aromatic polymer with ether and ketone linkages',
    synthesis: 'Step-growth polymerization of bisphenol with difluorobenzophenone',
    image2D: '/src/assets/polymers/peek-2d.png',
    properties: {
      meltingPoint: '343°C',
      density: '1.30-1.32 g/cm³',
      tensileStrength: '90-100 MPa',
      solubility: 'Insoluble in most solvents except concentrated sulfuric acid'
    },
    uses: [
      'Aerospace components',
      'Medical implants',
      'Automotive parts',
      'Oil and gas industry',
      'Electronics and semiconductors'
    ],
    advantages: [
      'Excellent mechanical properties',
      'High temperature resistance',
      'Chemical resistance',
      'Biocompatible',
      'Low moisture absorption'
    ],
    limitations: [
      'High cost',
      'Difficult to process',
      'Requires high processing temperature',
      'Limited suppliers'
    ],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Recyclable but challenging',
      toxicity: 'Low toxicity',
      sustainability: 'Moderate - long service life offsets production impact'
    }
  },
  {
    id: 'pps',
    name: 'Polyphenylene Sulfide (PPS)',
    category: 'engineering',
    formula: '(C₆H₄S)ₙ',
    molarMass: '108.16 g/mol (repeat unit)',
    structure: 'Semi-crystalline aromatic polymer with phenylene rings linked by sulfide groups',
    synthesis: 'Polycondensation of dichlorobenzene with sodium sulfide',
    image2D: '/src/assets/polymers/pps-2d.png',
    properties: {
      meltingPoint: '285°C',
      density: '1.35 g/cm³',
      tensileStrength: '65-85 MPa',
      solubility: 'Insoluble in most solvents'
    },
    uses: [
      'Automotive electrical components',
      'Circuit breakers',
      'Pump housings',
      'Filter fabrics',
      'Aerospace components'
    ],
    advantages: [
      'Excellent chemical resistance',
      'High temperature stability',
      'Flame retardant',
      'Low moisture absorption',
      'Good dimensional stability'
    ],
    limitations: [
      'Brittle at room temperature',
      'Limited impact resistance',
      'Difficult to bond',
      'Expensive'
    ],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Recyclable',
      toxicity: 'Low toxicity',
      sustainability: 'Good - long service life, recyclable'
    }
  },
  {
    id: 'pei',
    name: 'Polyetherimide (PEI)',
    category: 'engineering',
    formula: '(C₃₇H₂₄O₆N₂)ₙ',
    molarMass: '592.6 g/mol (repeat unit)',
    structure: 'Amorphous polymer with imide and ether linkages',
    synthesis: 'Polycondensation of aromatic diamines with dianhydrides',
    image2D: '/src/assets/polymers/pei-2d.png',
    properties: {
      meltingPoint: 'Amorphous - Tg 217°C',
      density: '1.27 g/cm³',
      tensileStrength: '105 MPa',
      solubility: 'Soluble in chlorinated solvents'
    },
    uses: [
      'Aircraft interior parts',
      'Medical instruments',
      'Automotive under-hood components',
      'Food service equipment',
      'LED lighting'
    ],
    advantages: [
      'High heat resistance',
      'Excellent dimensional stability',
      'Inherent flame resistance',
      'Transparent',
      'Good electrical properties'
    ],
    limitations: [
      'Susceptible to stress cracking',
      'Limited chemical resistance to bases',
      'High cost',
      'UV degradation'
    ],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Recyclable',
      toxicity: 'Low toxicity',
      sustainability: 'Moderate'
    }
  },
  {
    id: 'pai',
    name: 'Polyamideimide (PAI)',
    category: 'engineering',
    formula: '(C₂₂H₁₄N₂O₅)ₙ',
    molarMass: '386.4 g/mol (repeat unit)',
    structure: 'Polymer combining amide and imide groups in the backbone',
    synthesis: 'Polycondensation of trimellitic anhydride with aromatic diamines',
    image2D: '/src/assets/polymers/pai-2d.png',
    properties: {
      meltingPoint: 'Does not melt - Tg 280°C',
      density: '1.40 g/cm³',
      tensileStrength: '110-185 MPa',
      solubility: 'Soluble in polar aprotic solvents'
    },
    uses: [
      'High-temperature bearings',
      'Seals and gaskets',
      'Wear-resistant parts',
      'Aerospace components',
      'Oil drilling equipment'
    ],
    advantages: [
      'Highest strength thermoplastic',
      'Excellent wear resistance',
      'High temperature capability',
      'Low coefficient of friction',
      'Chemical resistance'
    ],
    limitations: [
      'Expensive',
      'Difficult to process',
      'Hygroscopic',
      'Limited availability'
    ],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Difficult to recycle',
      toxicity: 'Low toxicity',
      sustainability: 'Moderate - long service life'
    }
  },
  {
    id: 'psu',
    name: 'Polysulfone (PSU)',
    category: 'engineering',
    formula: '(C₂₇H₂₂O₄S)ₙ',
    molarMass: '442.5 g/mol (repeat unit)',
    structure: 'Amorphous polymer with diphenylene sulfone groups',
    synthesis: 'Polycondensation of bisphenol A with dichlorodiphenyl sulfone',
    image2D: '/src/assets/polymers/psu-2d.png',
    properties: {
      meltingPoint: 'Amorphous - Tg 185°C',
      density: '1.24 g/cm³',
      tensileStrength: '70-80 MPa',
      solubility: 'Soluble in chlorinated solvents'
    },
    uses: [
      'Medical devices',
      'Food processing equipment',
      'Water filtration membranes',
      'Automotive parts',
      'Electrical insulation'
    ],
    advantages: [
      'Excellent thermal stability',
      'Good chemical resistance',
      'Transparent',
      'Steam sterilizable',
      'Good hydrolytic stability'
    ],
    limitations: [
      'Susceptible to stress cracking',
      'Limited UV resistance',
      'Expensive',
      'Attacked by polar solvents'
    ],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Recyclable',
      toxicity: 'Low toxicity',
      sustainability: 'Good - biocompatible, reusable'
    }
  },
  {
    id: 'pes',
    name: 'Polyethersulfone (PES)',
    category: 'engineering',
    formula: '(C₁₂H₈O₃S)ₙ',
    molarMass: '232.3 g/mol (repeat unit)',
    structure: 'Amorphous polymer with ether and sulfone linkages',
    synthesis: 'Nucleophilic aromatic substitution of bisphenols with activated dihalides',
    image2D: '/src/assets/polymers/pes-2d.png',
    properties: {
      meltingPoint: 'Amorphous - Tg 225°C',
      density: '1.37 g/cm³',
      tensileStrength: '84 MPa',
      solubility: 'Soluble in polar aprotic solvents'
    },
    uses: [
      'Membrane filtration',
      'Medical instruments',
      'Food industry equipment',
      'Automotive applications',
      'Aerospace components'
    ],
    advantages: [
      'High temperature resistance',
      'Excellent hydrolytic stability',
      'Transparent to amber color',
      'Sterilizable',
      'Good mechanical properties'
    ],
    limitations: [
      'Susceptible to environmental stress cracking',
      'Limited UV resistance',
      'High cost',
      'Attacked by strong bases'
    ],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Recyclable',
      toxicity: 'Low toxicity',
      sustainability: 'Good - long service life, recyclable'
    }
  },
  {
    id: 'ppsu',
    name: 'Polyphenylsulfone (PPSU)',
    category: 'engineering',
    formula: '(C₂₄H₁₈O₃S)ₙ',
    molarMass: '386.5 g/mol (repeat unit)',
    structure: 'Amorphous polymer with biphenyl sulfone structure',
    synthesis: 'Polycondensation of biphenol with dichlorodiphenyl sulfone',
    image2D: '/src/assets/polymers/ppsu-2d.png',
    properties: {
      meltingPoint: 'Amorphous - Tg 220°C',
      density: '1.29 g/cm³',
      tensileStrength: '72 MPa',
      solubility: 'Soluble in chlorinated solvents'
    },
    uses: [
      'Medical and dental instruments',
      'Food contact applications',
      'Plumbing fittings',
      'Aircraft interior components',
      'Automotive under-hood parts'
    ],
    advantages: [
      'Excellent impact strength',
      'Superior hydrolytic stability',
      'Resistant to steam sterilization',
      'Chemical resistance',
      'Tough at low temperatures'
    ],
    limitations: [
      'Expensive',
      'Susceptible to stress cracking in some solvents',
      'Limited UV resistance',
      'Opaque to light amber color'
    ],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Recyclable',
      toxicity: 'Very low toxicity',
      sustainability: 'Good - long service life, recyclable'
    }
  },
  {
    id: 'lcp',
    name: 'Liquid Crystal Polymer (LCP)',
    category: 'engineering',
    formula: 'Variable (typically aromatic polyesters)',
    molarMass: 'Variable',
    structure: 'Highly ordered molecular structure with rigid mesogenic units',
    synthesis: 'Polycondensation of aromatic diols and diacids at high temperature',
    image2D: '/src/assets/polymers/lcp-2d.png',
    properties: {
      meltingPoint: '280-350°C',
      density: '1.35-1.45 g/cm³',
      tensileStrength: '100-235 MPa',
      solubility: 'Insoluble in most solvents'
    },
    uses: [
      'Electronic connectors',
      'Fiber optic components',
      'Microwave cookware',
      'Chemical processing equipment',
      'Medical devices'
    ],
    advantages: [
      'Exceptional dimensional stability',
      'High strength and stiffness',
      'Excellent chemical resistance',
      'Low coefficient of thermal expansion',
      'Inherent flame resistance'
    ],
    limitations: [
      'Very expensive',
      'Anisotropic properties',
      'Difficult to process',
      'Limited suppliers',
      'Opaque'
    ],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Difficult to recycle',
      toxicity: 'Low toxicity',
      sustainability: 'Moderate - long service life but energy-intensive production'
    }
  },
  {
    id: 'ppa',
    name: 'Polyphthalamide (PPA)',
    category: 'engineering',
    formula: '(C₁₄H₁₀N₂O₂)ₙ',
    molarMass: '238.2 g/mol (repeat unit)',
    structure: 'Semi-crystalline polyamide with phthalic acid units',
    synthesis: 'Polycondensation of phthalic acid derivatives with aliphatic diamines',
    image2D: '/src/assets/polymers/ppa-2d.png',
    properties: {
      meltingPoint: '310°C',
      density: '1.18 g/cm³',
      tensileStrength: '110-130 MPa',
      solubility: 'Insoluble in most solvents'
    },
    uses: [
      'Automotive under-hood components',
      'Electrical connectors',
      'LED lighting reflectors',
      'Industrial pump components',
      'Power tool housings'
    ],
    advantages: [
      'Higher temperature resistance than nylon',
      'Good chemical resistance',
      'Low moisture absorption',
      'Good dimensional stability',
      'Excellent flow properties'
    ],
    limitations: [
      'More expensive than nylon',
      'Brittle at low temperatures',
      'Limited impact resistance',
      'UV sensitive'
    ],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Recyclable',
      toxicity: 'Low toxicity',
      sustainability: 'Moderate'
    }
  },
  {
    id: 'ptfe',
    name: 'Polytetrafluoroethylene (PTFE)',
    category: 'engineering',
    formula: '(C₂F₄)ₙ',
    molarMass: '100.02 g/mol (repeat unit)',
    structure: 'Linear polymer with carbon backbone fully fluorinated',
    synthesis: 'Free radical polymerization of tetrafluoroethylene',
    image2D: '/src/assets/polymers/ptfe-2d.png',
    properties: {
      meltingPoint: '327°C',
      density: '2.15-2.20 g/cm³',
      tensileStrength: '20-35 MPa',
      solubility: 'Insoluble in all solvents'
    },
    uses: [
      'Non-stick cookware coatings',
      'Gaskets and seals',
      'Chemical processing equipment',
      'Electrical insulation',
      'Medical implants'
    ],
    advantages: [
      'Lowest coefficient of friction',
      'Excellent chemical resistance',
      'Wide temperature range',
      'Non-stick properties',
      'Biocompatible'
    ],
    limitations: [
      'Poor mechanical properties',
      'Expensive',
      'Difficult to process',
      'Cannot be melt-processed',
      'Cold flow under load'
    ],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Difficult to recycle',
      toxicity: 'Low toxicity (concerns with production byproducts)',
      sustainability: 'Low - persistent in environment, energy-intensive production'
    }
  },
  {
    id: 'fep',
    name: 'Fluorinated Ethylene Propylene (FEP)',
    category: 'engineering',
    formula: '(C₂F₄-C₃F₆)ₙ',
    molarMass: 'Variable (copolymer)',
    structure: 'Copolymer of tetrafluoroethylene and hexafluoropropylene',
    synthesis: 'Copolymerization of tetrafluoroethylene with hexafluoropropylene',
    image2D: '/src/assets/polymers/fep-2d.png',
    properties: {
      meltingPoint: '260°C',
      density: '2.15 g/cm³',
      tensileStrength: '21 MPa',
      solubility: 'Insoluble in most solvents'
    },
    uses: [
      'Wire and cable insulation',
      'Chemical tubing',
      'Release films',
      'High-purity fluid handling',
      'Laboratory equipment'
    ],
    advantages: [
      'Melt-processable unlike PTFE',
      'Excellent chemical resistance',
      'Optical clarity',
      'Low permeability',
      'Non-stick surface'
    ],
    limitations: [
      'Lower maximum temperature than PTFE',
      'Expensive',
      'Poor mechanical strength',
      'Susceptible to creep'
    ],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Difficult to recycle',
      toxicity: 'Low toxicity',
      sustainability: 'Low - persistent in environment'
    }
  },
  {
    id: 'pvdf',
    name: 'Polyvinylidene Fluoride (PVDF)',
    category: 'engineering',
    formula: '(C₂H₂F₂)ₙ',
    molarMass: '64.04 g/mol (repeat unit)',
    structure: 'Semi-crystalline fluoropolymer',
    synthesis: 'Free radical polymerization of vinylidene fluoride',
    image2D: '/src/assets/polymers/pvdf-2d.png',
    properties: {
      meltingPoint: '177°C',
      density: '1.78 g/cm³',
      tensileStrength: '50-60 MPa',
      solubility: 'Soluble in polar aprotic solvents'
    },
    uses: [
      'Chemical processing equipment',
      'Piezoelectric sensors',
      'Lithium-ion battery binders',
      'Architectural coatings',
      'Water treatment membranes'
    ],
    advantages: [
      'Excellent chemical resistance',
      'Piezoelectric properties',
      'UV resistant',
      'Good mechanical properties',
      'Weatherability'
    ],
    limitations: [
      'Expensive',
      'Limited availability',
      'Requires special processing equipment',
      'Poor adhesion to some substrates'
    ],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Recyclable',
      toxicity: 'Low toxicity',
      sustainability: 'Moderate - long service life'
    }
  },
  {
    id: 'etfe',
    name: 'Ethylene Tetrafluoroethylene (ETFE)',
    category: 'engineering',
    formula: '(C₂H₄-C₂F₄)ₙ',
    molarMass: 'Variable (copolymer)',
    structure: 'Alternating copolymer of ethylene and tetrafluoroethylene',
    synthesis: 'Copolymerization of ethylene with tetrafluoroethylene',
    image2D: '/src/assets/polymers/etfe-2d.png',
    properties: {
      meltingPoint: '260-280°C',
      density: '1.70 g/cm³',
      tensileStrength: '42 MPa',
      solubility: 'Insoluble in most solvents'
    },
    uses: [
      'Architectural membranes',
      'Wire and cable insulation',
      'Chemical resistant coatings',
      'Solar panel backsheets',
      'Greenhouses and stadiums'
    ],
    advantages: [
      'Excellent chemical resistance',
      'High transparency',
      'Self-cleaning surface',
      'Good impact resistance',
      'Lightweight'
    ],
    limitations: [
      'Expensive',
      'Flammable',
      'Limited temperature range',
      'Requires special fabrication techniques'
    ],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Recyclable',
      toxicity: 'Low toxicity',
      sustainability: 'Good - energy efficient in buildings, recyclable'
    }
  },
  {
    id: 'pom',
    name: 'Polyoxymethylene (POM)',
    category: 'engineering',
    formula: '(CH₂O)ₙ',
    molarMass: '30.03 g/mol (repeat unit)',
    structure: 'Highly crystalline linear polymer of formaldehyde',
    synthesis: 'Polymerization of formaldehyde or trioxane',
    image2D: '/src/assets/polymers/pom-2d.png',
    properties: {
      meltingPoint: '175°C',
      density: '1.41-1.42 g/cm³',
      tensileStrength: '61-73 MPa',
      solubility: 'Insoluble in most solvents'
    },
    uses: [
      'Gears and bearings',
      'Automotive fuel system components',
      'Zippers and fasteners',
      'Medical delivery devices',
      'Precision parts'
    ],
    advantages: [
      'Excellent dimensional stability',
      'Low friction and wear',
      'High stiffness and strength',
      'Good fatigue resistance',
      'Easy to machine'
    ],
    limitations: [
      'Susceptible to degradation by strong acids',
      'Poor UV resistance',
      'Limited bonding capability',
      'Flammable'
    ],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Recyclable',
      toxicity: 'Low toxicity',
      sustainability: 'Moderate - long service life'
    }
  },
  {
    id: 'pi',
    name: 'Polyimide (PI)',
    category: 'engineering',
    formula: '(C₂₂H₁₀N₂O₅)ₙ',
    molarMass: '382.3 g/mol (repeat unit)',
    structure: 'Aromatic heterocyclic polymer with imide groups',
    synthesis: 'Polycondensation of dianhydrides with diamines followed by thermal imidization',
    image2D: '/src/assets/polymers/pi-2d.png',
    properties: {
      meltingPoint: 'Does not melt - stable to 500°C',
      density: '1.43 g/cm³',
      tensileStrength: '85-155 MPa',
      solubility: 'Insoluble in most solvents'
    },
    uses: [
      'Flexible printed circuits',
      'Aerospace thermal insulation',
      'High-temperature wire insulation',
      'Semiconductor manufacturing',
      'Space applications'
    ],
    advantages: [
      'Exceptional thermal stability',
      'Excellent electrical properties',
      'Chemical resistance',
      'Radiation resistance',
      'Low dielectric constant'
    ],
    limitations: [
      'Expensive',
      'Difficult to process',
      'Hygroscopic',
      'Limited availability',
      'Yellowing on exposure to UV'
    ],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Difficult to recycle',
      toxicity: 'Low toxicity',
      sustainability: 'Moderate - extremely long service life'
    }
  },
  {
    id: 'pekk',
    name: 'Polyetherketoneketone (PEKK)',
    category: 'engineering',
    formula: '(C₂₀H₁₂O₄)ₙ',
    molarMass: '316.3 g/mol (repeat unit)',
    structure: 'Semi-crystalline aromatic polymer with two ketone groups',
    synthesis: 'Nucleophilic aromatic substitution polymerization',
    image2D: '/src/assets/polymers/pekk-2d.png',
    properties: {
      meltingPoint: '305-360°C',
      density: '1.30 g/cm³',
      tensileStrength: '100 MPa',
      solubility: 'Insoluble in most solvents except concentrated sulfuric acid'
    },
    uses: [
      'Aerospace structural parts',
      '3D printing filament',
      'Oil and gas components',
      'Automotive applications',
      'Medical implants'
    ],
    advantages: [
      'Higher temperature resistance than PEEK',
      'Excellent chemical resistance',
      'Good mechanical properties',
      'Lower crystallinity variability',
      'Better flow than PEEK'
    ],
    limitations: [
      'Very expensive',
      'Limited commercial availability',
      'Requires high processing temperatures',
      'Difficult to bond'
    ],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Recyclable but challenging',
      toxicity: 'Low toxicity',
      sustainability: 'Moderate - extremely long service life offsets production impact'
    }
  },
  {
    id: 'pbi',
    name: 'Polybenzimidazole (PBI)',
    category: 'engineering',
    formula: '(C₂₀H₁₂N₄)ₙ',
    molarMass: '308.3 g/mol (repeat unit)',
    structure: 'Aromatic heterocyclic polymer with benzimidazole rings',
    synthesis: 'Polycondensation of aromatic tetraamines with diphenyl esters',
    image2D: '/src/assets/polymers/pbi-2d.png',
    properties: {
      meltingPoint: 'Does not melt - Tg 425-436°C',
      density: '1.3 g/cm³',
      tensileStrength: '165 MPa',
      solubility: 'Soluble only in strong acids'
    },
    uses: [
      'Firefighter protective gear',
      'High-temperature gaskets',
      'Fuel cell membranes',
      'Aerospace applications',
      'Welding protection'
    ],
    advantages: [
      'Highest heat resistance among organic polymers',
      'Excellent flame resistance',
      'High mechanical strength at elevated temperatures',
      'Chemical resistance',
      'Low smoke generation'
    ],
    limitations: [
      'Extremely expensive',
      'Very difficult to process',
      'Hygroscopic',
      'Limited availability',
      'Requires special processing techniques'
    ],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Difficult to recycle',
      toxicity: 'Low toxicity',
      sustainability: 'Moderate - exceptional durability, life-saving applications'
    }
  },
  {
    id: 'para',
    name: 'Polyarylamide (PARA)',
    category: 'engineering',
    formula: '(C₁₄H₁₀N₂O₂)ₙ',
    molarMass: '238.2 g/mol (repeat unit)',
    structure: 'Aromatic polyamide with fully aromatic backbone',
    synthesis: 'Polycondensation of aromatic diamines with aromatic diacids',
    image2D: '/src/assets/polymers/para-2d.png',
    properties: {
      meltingPoint: '370°C',
      density: '1.24 g/cm³',
      tensileStrength: '120 MPa',
      solubility: 'Insoluble in most solvents'
    },
    uses: [
      'High-temperature electrical connectors',
      'Automotive transmission components',
      'Industrial machinery parts',
      'Electronic housing',
      'Pump and valve components'
    ],
    advantages: [
      'Excellent heat resistance',
      'Good dimensional stability',
      'Chemical resistance',
      'Low warpage',
      'Good flow properties'
    ],
    limitations: [
      'Expensive',
      'Brittle at low temperatures',
      'Limited impact resistance',
      'Hygroscopic'
    ],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Recyclable',
      toxicity: 'Low toxicity',
      sustainability: 'Moderate'
    }
  },
  {
    id: 'ppa-gf',
    name: 'Glass-Filled Polyphthalamide (PPA-GF)',
    category: 'engineering',
    formula: '(C₁₄H₁₀N₂O₂)ₙ + Glass Fiber',
    molarMass: 'Composite material',
    structure: 'PPA matrix reinforced with glass fibers',
    synthesis: 'Compounding of polyphthalamide with glass fiber reinforcement',
    image2D: '/src/assets/polymers/ppa-gf-2d.png',
    properties: {
      meltingPoint: '310°C',
      density: '1.45-1.65 g/cm³',
      tensileStrength: '170-220 MPa',
      solubility: 'Insoluble'
    },
    uses: [
      'Automotive engine components',
      'Turbocharger air ducts',
      'Electrical connectors',
      'LED reflectors',
      'Power tool housings'
    ],
    advantages: [
      'Very high strength and stiffness',
      'Excellent heat resistance',
      'Low moisture absorption',
      'Good chemical resistance',
      'Dimensional stability'
    ],
    limitations: [
      'Expensive',
      'Anisotropic properties',
      'Surface finish challenges',
      'Difficult to weld'
    ],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Difficult to recycle due to glass fibers',
      toxicity: 'Low toxicity',
      sustainability: 'Moderate - long service life but difficult to recycle'
    }
  },
  {
    id: 'ppsx',
    name: 'Modified Polyphenylene Sulfide (PPSX)',
    category: 'engineering',
    formula: '(C₆H₄S)ₙ (crosslinked)',
    molarMass: '108.16 g/mol (repeat unit)',
    structure: 'Crosslinked polyphenylene sulfide with improved properties',
    synthesis: 'Post-polymerization crosslinking of PPS through thermal or chemical treatment',
    image2D: '/src/assets/polymers/ppsx-2d.png',
    properties: {
      meltingPoint: 'Does not melt - crosslinked',
      density: '1.35-1.40 g/cm³',
      tensileStrength: '70-90 MPa',
      solubility: 'Insoluble in all solvents'
    },
    uses: [
      'High-performance bearings',
      'Chemical processing equipment',
      'Automotive transmission parts',
      'Industrial seals',
      'High-temperature electrical components'
    ],
    advantages: [
      'Superior chemical resistance to PPS',
      'Better dimensional stability',
      'Improved mechanical strength',
      'Excellent thermal stability',
      'Lower creep than PPS'
    ],
    limitations: [
      'Cannot be remelted',
      'More expensive than PPS',
      'Difficult to process',
      'Limited availability',
      'Cannot be welded'
    ],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Not recyclable due to crosslinking',
      toxicity: 'Low toxicity',
      sustainability: 'Moderate - extremely long service life but not recyclable'
    }
  },
  {
    id: 'pha',
    name: 'Polyhydroxyalkanoate (PHA)',
    category: 'environmental',
    formula: '[-O-CHR-CH₂-CO-]ₙ',
    molarMass: '90-150 g/mol (monomer)',
    structure: 'Linear polyester with varying alkyl side chains',
    synthesis: 'Bacterial fermentation of sugars or lipids',
    image2D: '/src/assets/polymers/pha-2d.png',
    properties: {
      meltingPoint: '50-180°C (varies)',
      density: '1.18-1.26 g/cm³',
      tensileStrength: '20-40 MPa',
      solubility: 'Soluble in chloroform'
    },
    uses: ['Biodegradable packaging', 'Medical implants', 'Agriculture films', 'Food containers', '3D printing'],
    advantages: ['Fully biodegradable', 'Bio-based production', 'Biocompatible', 'Compostable', 'Non-toxic'],
    limitations: ['Higher cost', 'Processing challenges', 'Brittleness', 'Limited availability'],
    environmentalImpact: {
      biodegradability: 'Fully biodegradable in soil and marine environments',
      recyclability: 'Compostable',
      toxicity: 'Non-toxic',
      sustainability: 'Excellent - renewable feedstock and complete biodegradation'
    }
  },
  {
    id: 'pbs',
    name: 'Polybutylene Succinate (PBS)',
    category: 'environmental',
    formula: '[-O-(CH₂)₄-O-CO-(CH₂)₂-CO-]ₙ',
    molarMass: '~200 g/mol (monomer)',
    structure: 'Linear aliphatic polyester',
    synthesis: 'Polycondensation of succinic acid and 1,4-butanediol',
    image2D: '/src/assets/polymers/pbs-2d.png',
    properties: {
      meltingPoint: '90-120°C',
      density: '1.25-1.27 g/cm³',
      tensileStrength: '30-50 MPa',
      solubility: 'Soluble in chloroform, limited in water'
    },
    uses: ['Biodegradable films', 'Mulch films', 'Compost bags', 'Food packaging', 'Agricultural applications'],
    advantages: ['Biodegradable', 'Good mechanical properties', 'Processable like PE', 'Bio-based options'],
    limitations: ['Moderate cost', 'Lower thermal resistance', 'Hydrolytic degradation'],
    environmentalImpact: {
      biodegradability: 'Biodegradable in soil and compost',
      recyclability: 'Compostable and recyclable',
      toxicity: 'Non-toxic',
      sustainability: 'Good - can be bio-based'
    }
  },
  {
    id: 'phb',
    name: 'Polyhydroxybutyrate (PHB)',
    category: 'environmental',
    formula: '[-O-CH(CH₃)-CH₂-CO-]ₙ',
    molarMass: '86 g/mol (monomer)',
    structure: 'Linear polyester',
    synthesis: 'Bacterial fermentation',
    image2D: '/src/assets/polymers/phb-2d.png',
    properties: {
      meltingPoint: '170-180°C',
      density: '1.18-1.26 g/cm³',
      tensileStrength: '24-40 MPa',
      solubility: 'Soluble in chloroform'
    },
    uses: ['Medical sutures', 'Drug delivery', 'Packaging films', 'Agricultural films', 'Disposable items'],
    advantages: ['100% biodegradable', 'Biocompatible', 'Renewable source', 'Non-toxic'],
    limitations: ['Brittle', 'Expensive', 'Narrow processing window', 'Thermal instability'],
    environmentalImpact: {
      biodegradability: 'Fully biodegradable',
      recyclability: 'Compostable',
      toxicity: 'Non-toxic',
      sustainability: 'Excellent - renewable and biodegradable'
    }
  },
  {
    id: 'phbv',
    name: 'Polyhydroxybutyrate-co-valerate (PHBV)',
    category: 'environmental',
    formula: '[-O-CH(CH₃)-CH₂-CO-]ₙ[-O-CH(C₂H₅)-CH₂-CO-]ₘ',
    molarMass: '86-100 g/mol (monomer)',
    structure: 'Copolymer of hydroxybutyrate and hydroxyvalerate',
    synthesis: 'Bacterial fermentation with mixed carbon sources',
    image2D: '/src/assets/polymers/phbv-2d.png',
    properties: {
      meltingPoint: '137-170°C',
      density: '1.23-1.25 g/cm³',
      tensileStrength: '20-35 MPa',
      solubility: 'Soluble in chloroform and other organic solvents'
    },
    uses: ['Biodegradable films', 'Food packaging', 'Medical devices', 'Agricultural applications', 'Compostable bags'],
    advantages: ['More flexible than PHB', 'Fully biodegradable', 'Biocompatible', 'Adjustable properties', 'Marine biodegradable'],
    limitations: ['Expensive production', 'Limited heat resistance', 'Processing challenges', 'Variable properties'],
    environmentalImpact: {
      biodegradability: 'Fully biodegradable in soil, compost, and marine environments',
      recyclability: 'Compostable',
      toxicity: 'Non-toxic',
      sustainability: 'Excellent - bio-based and completely biodegradable'
    }
  },
  {
    id: 'pbat',
    name: 'Polybutylene Adipate Terephthalate (PBAT)',
    category: 'environmental',
    formula: '[-O-(CH₂)₄-O-CO-R-CO-]ₙ',
    molarMass: '~250 g/mol (repeat unit)',
    structure: 'Aliphatic-aromatic copolyester',
    synthesis: 'Polycondensation of adipic acid, terephthalic acid, and 1,4-butanediol',
    image2D: '/src/assets/polymers/pbat-2d.png',
    properties: {
      meltingPoint: '110-120°C',
      density: '1.25-1.27 g/cm³',
      tensileStrength: '15-35 MPa',
      solubility: 'Soluble in chloroform'
    },
    uses: ['Compostable bags', 'Mulch films', 'Food packaging', 'Agricultural films', 'Flexible packaging'],
    advantages: ['Good flexibility', 'Biodegradable', 'Easy to process', 'Good tear resistance', 'Compatible with PLA blends'],
    limitations: ['Moderate cost', 'Lower strength than conventional plastics', 'Requires industrial composting'],
    environmentalImpact: {
      biodegradability: 'Biodegradable in industrial composting conditions',
      recyclability: 'Compostable',
      toxicity: 'Non-toxic',
      sustainability: 'Good - biodegradable but partly petroleum-based'
    }
  },
  {
    id: 'pef',
    name: 'Polyethylene Furanoate (PEF)',
    category: 'environmental',
    formula: '[-O-CH₂-CH₂-O-CO-C₄H₂O-CO-]ₙ',
    molarMass: '~194 g/mol (repeat unit)',
    structure: 'Aromatic polyester with furan rings',
    synthesis: 'Polycondensation of furandicarboxylic acid (FDCA) and ethylene glycol',
    image2D: '/src/assets/polymers/pef-2d.png',
    properties: {
      meltingPoint: '210-220°C',
      density: '1.45 g/cm³',
      tensileStrength: '50-80 MPa',
      solubility: 'Low solubility in common solvents'
    },
    uses: ['Bottles and containers', 'Food packaging', 'Textiles', 'Films', 'Automotive parts'],
    advantages: ['100% bio-based', 'Better barrier properties than PET', 'Recyclable', 'Lower carbon footprint', 'Good mechanical properties'],
    limitations: ['Still in commercialization', 'Higher cost than PET', 'Limited availability', 'New recycling infrastructure needed'],
    environmentalImpact: {
      biodegradability: 'Not readily biodegradable',
      recyclability: 'Fully recyclable',
      toxicity: 'Non-toxic',
      sustainability: 'Excellent - 100% bio-based from renewable sources'
    }
  },
  {
    id: 'ppc',
    name: 'Polypropylene Carbonate (PPC)',
    category: 'environmental',
    formula: '[-O-CH(CH₃)-CH₂-O-CO-]ₙ',
    molarMass: '102 g/mol (repeat unit)',
    structure: 'Aliphatic polycarbonate',
    synthesis: 'Copolymerization of CO₂ and propylene oxide',
    image2D: '/src/assets/polymers/ppc-2d.png',
    properties: {
      meltingPoint: 'Amorphous - Tg 35-40°C',
      density: '1.3 g/cm³',
      tensileStrength: '20-30 MPa',
      solubility: 'Soluble in chloroform, THF'
    },
    uses: ['Packaging films', 'Barrier coatings', 'Adhesives', 'Biodegradable plastics', 'Oxygen barrier layers'],
    advantages: ['Uses CO₂ as feedstock', 'Biodegradable', 'Good oxygen barrier', 'Non-toxic', 'Carbon-negative production'],
    limitations: ['Low thermal stability', 'Limited mechanical properties', 'Moisture sensitivity', 'Processing challenges'],
    environmentalImpact: {
      biodegradability: 'Fully biodegradable',
      recyclability: 'Compostable',
      toxicity: 'Non-toxic',
      sustainability: 'Excellent - CO₂ utilization and biodegradability'
    }
  },
  {
    id: 'tps',
    name: 'Thermoplastic Starch (TPS)',
    category: 'environmental',
    formula: '(C₆H₁₀O₅)ₙ',
    molarMass: '~162 g/mol (monomer)',
    structure: 'Plasticized starch with disrupted crystallinity',
    synthesis: 'Thermal processing of starch with plasticizers (glycerol, water)',
    image2D: '/src/assets/polymers/tps-2d.png',
    properties: {
      meltingPoint: '110-180°C (process temperature)',
      density: '1.3-1.5 g/cm³',
      tensileStrength: '5-25 MPa',
      solubility: 'Water-sensitive'
    },
    uses: ['Loose-fill packaging', 'Disposable cutlery', 'Food packaging', 'Agricultural films', 'Compostable bags'],
    advantages: ['Very low cost', 'Abundant renewable source', 'Fully biodegradable', 'Compostable', 'Non-toxic'],
    limitations: ['Poor water resistance', 'Mechanical properties vary', 'Aging sensitivity', 'Limited thermal stability'],
    environmentalImpact: {
      biodegradability: 'Fully and rapidly biodegradable',
      recyclability: 'Compostable',
      toxicity: 'Non-toxic and edible',
      sustainability: 'Excellent - abundant, renewable, and completely biodegradable'
    }
  },
  {
    id: 'bio-pe',
    name: 'Bio-based Polyethylene (Bio-PE)',
    category: 'environmental',
    formula: '(CH₂-CH₂)ₙ',
    molarMass: '28.05 g/mol (repeat unit)',
    structure: 'Linear polyethylene identical to conventional PE',
    synthesis: 'Polymerization of ethylene derived from bioethanol (sugarcane)',
    image2D: '/src/assets/polymers/bio-pe-2d.png',
    properties: {
      meltingPoint: '120-130°C (HDPE)',
      density: '0.91-0.97 g/cm³',
      tensileStrength: '20-40 MPa',
      solubility: 'Insoluble in most solvents at room temperature'
    },
    uses: ['Bottles and containers', 'Shopping bags', 'Packaging films', 'Cosmetic packaging', 'Toys'],
    advantages: ['Drop-in replacement for PE', 'Renewable carbon source', 'Recyclable in existing streams', 'Identical properties to PE', 'Lower carbon footprint'],
    limitations: ['Not biodegradable', 'Same disposal issues as conventional PE', 'Higher cost', 'Feedstock competition with food'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Fully recyclable with conventional PE',
      toxicity: 'Non-toxic',
      sustainability: 'Good - renewable source but not biodegradable'
    }
  },
  {
    id: 'bio-pet',
    name: 'Bio-based PET (Bio-PET)',
    category: 'environmental',
    formula: '[-O-CH₂-CH₂-O-CO-C₆H₄-CO-]ₙ',
    molarMass: '192 g/mol (repeat unit)',
    structure: 'Aromatic polyester (partially or fully bio-based)',
    synthesis: 'Polycondensation using bio-based ethylene glycol and/or bio-based terephthalic acid',
    image2D: '/src/assets/polymers/bio-pet-2d.png',
    properties: {
      meltingPoint: '250-260°C',
      density: '1.38-1.40 g/cm³',
      tensileStrength: '50-70 MPa',
      solubility: 'Insoluble in most common solvents'
    },
    uses: ['Beverage bottles', 'Food containers', 'Textile fibers', 'Packaging films', 'Engineering applications'],
    advantages: ['Partially renewable', 'Same properties as conventional PET', 'Recyclable in existing systems', 'Reduced carbon footprint', 'Drop-in replacement'],
    limitations: ['Not fully bio-based yet', 'Not biodegradable', 'Higher cost than conventional PET', 'Still fossil-fuel dependent (TA)'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Fully recyclable with conventional PET',
      toxicity: 'Non-toxic',
      sustainability: 'Good - partially renewable (30-100% bio-content possible)'
    }
  },
  {
    id: 'ptt',
    name: 'Polytrimethylene Terephthalate (PTT)',
    category: 'environmental',
    formula: '[-O-(CH₂)₃-O-CO-C₆H₄-CO-]ₙ',
    molarMass: '206 g/mol (repeat unit)',
    structure: 'Aromatic polyester with three-carbon diol',
    synthesis: 'Polycondensation of terephthalic acid and 1,3-propanediol (bio-based)',
    image2D: '/src/assets/polymers/ptt-2d.png',
    properties: {
      meltingPoint: '227-230°C',
      density: '1.33-1.35 g/cm³',
      tensileStrength: '50-70 MPa',
      solubility: 'Insoluble in most solvents'
    },
    uses: ['Carpet fibers', 'Apparel textiles', 'Automotive interiors', 'Films', 'Engineering plastics'],
    advantages: ['Excellent elastic recovery', 'Soft hand feel', 'Partially bio-based (37%)', 'Good chemical resistance', 'Recyclable'],
    limitations: ['Higher cost than PET', 'Not biodegradable', 'Limited commercial availability', 'Processing equipment similar to PET needed'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Recyclable',
      toxicity: 'Non-toxic',
      sustainability: 'Good - partially bio-based with lower environmental impact than PET'
    }
  },
  {
    id: 'lignin-polymer',
    name: 'Lignin-based Polymer',
    category: 'environmental',
    formula: 'Complex phenolic polymer',
    molarMass: '1,000-20,000 g/mol',
    structure: 'Complex three-dimensional phenolic biopolymer',
    synthesis: 'Extracted from wood and plant biomass, modified chemically',
    image2D: '/src/assets/polymers/lignin-2d.png',
    properties: {
      meltingPoint: 'No definite melting point (softens 140-200°C)',
      density: '1.3-1.4 g/cm³',
      tensileStrength: 'Varies widely depending on formulation',
      solubility: 'Soluble in alkaline solutions and some organic solvents'
    },
    uses: ['Biocomposites', 'Adhesives', 'Carbon fiber precursor', 'Dispersants', 'Antioxidants'],
    advantages: ['Abundant waste product', 'Renewable', 'UV-protective', 'Antioxidant properties', 'Low cost'],
    limitations: ['Variable properties', 'Complex structure', 'Difficult to process', 'Color limitations (brown)', 'Heterogeneous'],
    environmentalImpact: {
      biodegradability: 'Biodegradable but slow',
      recyclability: 'Compostable',
      toxicity: 'Non-toxic',
      sustainability: 'Excellent - waste valorization from pulp industry'
    }
  },
  {
    id: 'bacterial-cellulose',
    name: 'Bacterial Cellulose',
    category: 'environmental',
    formula: '(C₆H₁₀O₅)ₙ',
    molarMass: '162.14 g/mol (monomer)',
    structure: 'Ultra-fine cellulose nanofiber network',
    synthesis: 'Biosynthesis by Acetobacter bacteria in culture medium',
    image2D: '/src/assets/polymers/bacterial-cellulose-2d.png',
    properties: {
      meltingPoint: 'Decomposes before melting (~260°C)',
      density: '1.5 g/cm³',
      tensileStrength: '200-300 MPa (dry)',
      solubility: 'Insoluble in water and most solvents'
    },
    uses: ['Wound dressings', 'Artificial blood vessels', 'Speaker diaphragms', 'Food products (nata de coco)', 'Paper and textiles'],
    advantages: ['High purity', 'Excellent mechanical properties', 'Biocompatible', 'High water holding capacity', 'Moldable when wet'],
    limitations: ['Expensive production', 'Slow growth rate', 'Limited scalability', 'Requires sterile conditions'],
    environmentalImpact: {
      biodegradability: 'Fully biodegradable',
      recyclability: 'Compostable',
      toxicity: 'Non-toxic',
      sustainability: 'Excellent - renewable and biodegradable'
    }
  },
  {
    id: 'chitin-polymer',
    name: 'Chitin',
    category: 'environmental',
    formula: '(C₈H₁₃NO₅)ₙ',
    molarMass: '203.19 g/mol (repeat unit)',
    structure: 'Linear polysaccharide with N-acetylglucosamine units',
    synthesis: 'Extracted from crustacean shells, insect exoskeletons, and fungi',
    image2D: '/src/assets/polymers/chitin-2d.png',
    properties: {
      meltingPoint: 'Decomposes before melting',
      density: '1.4-1.5 g/cm³',
      tensileStrength: '40-70 MPa',
      solubility: 'Insoluble in water and most organic solvents'
    },
    uses: ['Wound healing materials', 'Surgical sutures', 'Agriculture', 'Water treatment', 'Food industry'],
    advantages: ['Abundant natural resource', 'Biodegradable', 'Biocompatible', 'Antimicrobial', 'Non-toxic'],
    limitations: ['Poor solubility', 'Difficult to process', 'Variable quality', 'Extraction challenges'],
    environmentalImpact: {
      biodegradability: 'Fully biodegradable',
      recyclability: 'Compostable',
      toxicity: 'Non-toxic',
      sustainability: 'Excellent - waste valorization from seafood industry'
    }
  },
  {
    id: 'pcl-biomed',
    name: 'Polycaprolactone (PCL) - Biomedical',
    category: 'environmental',
    formula: '[-O-(CH₂)₅-CO-]ₙ',
    molarMass: '114.14 g/mol (repeat unit)',
    structure: 'Semi-crystalline aliphatic polyester',
    synthesis: 'Ring-opening polymerization of ε-caprolactone',
    image2D: '/src/assets/polymers/pcl-biomed-2d.png',
    properties: {
      meltingPoint: '58-60°C',
      density: '1.145 g/cm³',
      tensileStrength: '16-21 MPa',
      solubility: 'Soluble in chloroform, dichloromethane, and other organic solvents'
    },
    uses: ['Biodegradable sutures', 'Drug delivery systems', 'Tissue engineering scaffolds', '3D printing', 'Compostable packaging'],
    advantages: ['Biodegradable', 'Biocompatible', 'Easy to process', 'Good blend compatibility', 'Low melting point'],
    limitations: ['Low mechanical strength', 'Slow degradation rate', 'Hydrophobic', 'Limited thermal stability'],
    environmentalImpact: {
      biodegradability: 'Fully biodegradable (6 months - 2 years)',
      recyclability: 'Compostable',
      toxicity: 'Non-toxic and FDA approved',
      sustainability: 'Good - biodegradable but currently petroleum-based'
    }
  },
  {
    id: 'starch-polymer',
    name: 'Starch-based Bioplastic',
    category: 'environmental',
    formula: '(C₆H₁₀O₅)ₙ',
    molarMass: '162.14 g/mol (monomer)',
    structure: 'Amylose and amylopectin blend with plasticizers',
    synthesis: 'Modification of natural starch with additives and processing',
    image2D: '/src/assets/polymers/starch-bioplastic-2d.png',
    properties: {
      meltingPoint: 'Processing temperature 90-180°C',
      density: '1.2-1.4 g/cm³',
      tensileStrength: '10-40 MPa (depends on formulation)',
      solubility: 'Water-sensitive'
    },
    uses: ['Food packaging', 'Disposable utensils', 'Packing peanuts', 'Agricultural films', 'Bags and containers'],
    advantages: ['Very low cost', 'Renewable and abundant', 'Fully compostable', 'Food-safe', 'Good processability'],
    limitations: ['Moisture sensitivity', 'Limited barrier properties', 'Variable mechanical properties', 'Short shelf life in humid conditions'],
    environmentalImpact: {
      biodegradability: 'Rapidly biodegradable',
      recyclability: 'Fully compostable',
      toxicity: 'Non-toxic and edible',
      sustainability: 'Excellent - renewable, abundant, and fully biodegradable'
    }
  },
  {
    id: 'pha-phb-blend',
    name: 'PHA-PHB Blend',
    category: 'environmental',
    formula: 'Blend of various PHAs',
    molarMass: 'Variable',
    structure: 'Blend of different polyhydroxyalkanoates',
    synthesis: 'Bacterial co-fermentation or blending of different PHAs',
    image2D: '/src/assets/polymers/pha-phb-2d.png',
    properties: {
      meltingPoint: '120-170°C',
      density: '1.20-1.25 g/cm³',
      tensileStrength: '20-40 MPa',
      solubility: 'Soluble in chloroform'
    },
    uses: ['Flexible packaging', 'Agricultural films', 'Medical applications', 'Compostable products', 'Marine-safe applications'],
    advantages: ['Tunable properties', 'Fully biodegradable', 'Marine degradable', 'Bio-based', 'Balanced flexibility and strength'],
    limitations: ['Higher cost', 'Processing challenges', 'Limited availability', 'Property variations'],
    environmentalImpact: {
      biodegradability: 'Fully biodegradable in all environments',
      recyclability: 'Compostable',
      toxicity: 'Non-toxic',
      sustainability: 'Excellent - renewable and completely biodegradable'
    }
  },
  {
    id: 'bio-nylon',
    name: 'Bio-based Nylon (PA 11/PA 10,10)',
    category: 'environmental',
    formula: 'Variable based on type',
    molarMass: 'Variable',
    structure: 'Polyamide from renewable sources',
    synthesis: 'Polymerization of bio-based monomers from castor oil or other plant sources',
    image2D: '/src/assets/polymers/bio-nylon-2d.png',
    properties: {
      meltingPoint: '180-190°C (PA 11)',
      density: '1.02-1.05 g/cm³',
      tensileStrength: '50-60 MPa',
      solubility: 'Insoluble in common solvents'
    },
    uses: ['Automotive parts', 'Sports equipment', 'Textiles', 'Electrical connectors', '3D printing'],
    advantages: ['Partially/fully bio-based', 'Good mechanical properties', 'Chemical resistance', 'Lower moisture absorption than PA 6', 'Recyclable'],
    limitations: ['Higher cost', 'Not biodegradable', 'Limited suppliers', 'Processing similar to conventional nylon'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Recyclable',
      toxicity: 'Non-toxic',
      sustainability: 'Good - renewable source with reduced carbon footprint'
    }
  },
  {
    id: 'cnc',
    name: 'Cellulose Nanocrystals (CNC)',
    category: 'environmental',
    formula: '(C₆H₁₀O₅)ₙ',
    molarMass: '162.14 g/mol (monomer)',
    structure: 'Crystalline cellulose nanoparticles (rod-like)',
    synthesis: 'Acid hydrolysis of cellulose fibers',
    image2D: '/src/assets/polymers/cnc-2d.png',
    properties: {
      meltingPoint: 'Decomposes before melting',
      density: '1.5-1.6 g/cm³',
      tensileStrength: '7-10 GPa (theoretical)',
      solubility: 'Forms stable colloidal suspensions in water'
    },
    uses: ['Polymer nanocomposites', 'Barrier films', 'Rheology modifiers', 'Biomedical applications', 'Packaging reinforcement'],
    advantages: ['Exceptional strength', 'Renewable', 'Biodegradable', 'Low density', 'High surface area'],
    limitations: ['Expensive production', 'Moisture sensitivity', 'Aggregation issues', 'Scale-up challenges'],
    environmentalImpact: {
      biodegradability: 'Fully biodegradable',
      recyclability: 'Compostable',
      toxicity: 'Non-toxic',
      sustainability: 'Excellent - derived from abundant renewable resources'
    }
  },
  {
    id: 'mycelium',
    name: 'Mycelium-based Composite',
    category: 'environmental',
    formula: 'Chitin/chitosan + cellulose + proteins',
    molarMass: 'Complex mixture',
    structure: 'Natural composite of fungal biomass',
    synthesis: 'Growth of mycelium on agricultural waste substrate',
    image2D: '/src/assets/polymers/mycelium-2d.png',
    properties: {
      meltingPoint: 'Not applicable (decomposes)',
      density: '0.05-0.5 g/cm³',
      tensileStrength: '0.5-2 MPa',
      solubility: 'Insoluble'
    },
    uses: ['Packaging materials', 'Building insulation', 'Acoustic panels', 'Leather alternatives', 'Furniture'],
    advantages: ['Completely renewable', 'Uses agricultural waste', 'Biodegradable', 'Low energy production', 'Home compostable'],
    limitations: ['Low mechanical strength', 'Moisture sensitive', 'Slow growth (1-2 weeks)', 'Variable properties', 'Limited scalability'],
    environmentalImpact: {
      biodegradability: 'Fully and rapidly biodegradable',
      recyclability: 'Home compostable',
      toxicity: 'Non-toxic',
      sustainability: 'Excellent - carbon-negative, uses waste, fully biodegradable'
    }
  },
  // Functional Polymers
  {
    id: 'pu-smp',
    name: 'Polyurethane Shape-Memory Polymer (PU-SMP)',
    category: 'functional',
    formula: '(-RNHCOOR\'-)ₙ',
    molarMass: 'Variable (typically 20,000-100,000 g/mol)',
    structure: 'Segmented copolymer with hard and soft segments',
    synthesis: 'Polyaddition of diisocyanates with polyols containing switching segments',
    image2D: '/src/assets/polymers/pu-smp-2d.png',
    properties: {
      meltingPoint: '40-70°C (transition temperature)',
      density: '1.1-1.25 g/cm³',
      tensileStrength: '20-50 MPa',
      solubility: 'Soluble in DMF, THF'
    },
    uses: ['Biomedical devices', 'Smart textiles', 'Aerospace applications', 'Automotive components', 'Self-deploying structures'],
    advantages: ['Excellent shape recovery', 'Tunable transition temperature', 'Good mechanical properties', 'Biocompatible', 'Multiple shape programming'],
    limitations: ['Complex synthesis', 'Temperature sensitivity', 'Cost', 'Limited recovery force'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable (some biodegradable variants exist)',
      recyclability: 'Difficult to recycle',
      toxicity: 'Low toxicity',
      sustainability: 'Moderate - petroleum-based'
    }
  },
  {
    id: 'pcl-smp',
    name: 'Polycaprolactone Shape-Memory Polymer (PCL-SMP)',
    category: 'functional',
    formula: '(C₆H₁₀O₂)ₙ',
    molarMass: '114.14 g/mol (repeat unit)',
    structure: 'Semi-crystalline aliphatic polyester',
    synthesis: 'Ring-opening polymerization of ε-caprolactone',
    image2D: '/src/assets/polymers/pcl-smp-2d.png',
    properties: {
      meltingPoint: '58-60°C',
      density: '1.145 g/cm³',
      tensileStrength: '16-23 MPa',
      solubility: 'Soluble in chloroform, dichloromethane'
    },
    uses: ['Sutures', 'Drug delivery', 'Tissue engineering', 'Smart packaging', 'Biomedical implants'],
    advantages: ['Biodegradable', 'Biocompatible', 'FDA approved', 'Low melting point', 'Easy processing'],
    limitations: ['Slow degradation rate', 'Low mechanical strength', 'Limited temperature range', 'Hydrophobic'],
    environmentalImpact: {
      biodegradability: 'Fully biodegradable (2-4 years)',
      recyclability: 'Compostable',
      toxicity: 'Non-toxic',
      sustainability: 'Good - biodegradable and biocompatible'
    }
  },
  {
    id: 'disulfide-polymer',
    name: 'Disulfide-Bond Self-Healing Polymer',
    category: 'functional',
    formula: 'Variable with -S-S- linkages',
    molarMass: 'Variable',
    structure: 'Polymer network with dynamic disulfide crosslinks',
    synthesis: 'Polymerization with disulfide-containing monomers or post-polymerization modification',
    image2D: '/src/assets/polymers/disulfide-polymer-2d.png',
    properties: {
      meltingPoint: 'Variable',
      density: '1.0-1.3 g/cm³',
      tensileStrength: '10-40 MPa',
      solubility: 'Variable depending on backbone'
    },
    uses: ['Self-healing coatings', 'Recyclable thermosets', 'Flexible electronics', 'Biomedical materials', 'Shape-memory polymers'],
    advantages: ['Autonomous healing', 'Recyclable', 'Reprocessable', 'Multiple healing cycles', 'Stimuli-responsive'],
    limitations: ['Oxidation sensitivity', 'Slower healing at room temperature', 'Complex synthesis', 'Limited mechanical strength'],
    environmentalImpact: {
      biodegradability: 'Depends on backbone structure',
      recyclability: 'Excellent - reprocessable',
      toxicity: 'Low toxicity',
      sustainability: 'Good - recyclable and repairable'
    }
  },
  {
    id: 'microcapsule-polymer',
    name: 'Microcapsule Self-Healing Polymer',
    category: 'functional',
    formula: 'Polymer matrix + encapsulated healing agent',
    molarMass: 'Variable',
    structure: 'Composite with embedded microcapsules containing healing agent',
    synthesis: 'In-situ polymerization or interfacial polymerization to create capsules, then embedding in matrix',
    image2D: '/src/assets/polymers/microcapsule-polymer-2d.png',
    properties: {
      meltingPoint: 'Depends on matrix polymer',
      density: '1.0-1.5 g/cm³',
      tensileStrength: '20-70 MPa',
      solubility: 'Typically insoluble'
    },
    uses: ['Protective coatings', 'Structural composites', 'Aerospace applications', 'Concrete additives', 'Electronic encapsulation'],
    advantages: ['Autonomous healing', 'No external stimulus needed', 'High healing efficiency', 'Long shelf life', 'Versatile matrix compatibility'],
    limitations: ['One-time healing only', 'Capsule durability', 'Reduced toughness', 'Complex manufacturing', 'Cost'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Difficult to recycle',
      toxicity: 'Depends on healing agent',
      sustainability: 'Moderate - extends material lifetime'
    }
  },
  {
    id: 'dynamic-covalent',
    name: 'Dynamic Covalent Network Polymer',
    category: 'functional',
    formula: 'Variable with reversible covalent bonds',
    molarMass: 'Variable (crosslinked network)',
    structure: 'Polymer network with reversible bonds (Diels-Alder, imine, boronic ester)',
    synthesis: 'Polymerization with reversible covalent bond-forming reactions',
    image2D: '/src/assets/polymers/dynamic-covalent-2d.png',
    properties: {
      meltingPoint: 'Variable (often thermoplastic behavior)',
      density: '1.0-1.4 g/cm³',
      tensileStrength: '15-60 MPa',
      solubility: 'Typically insoluble but swellable'
    },
    uses: ['Self-healing materials', 'Recyclable thermosets', 'Adhesives', 'Shape-memory polymers', 'Vitrimers'],
    advantages: ['Multiple healing cycles', 'Recyclable', 'Reprocessable', 'Tunable properties', 'Chemical resistance when crosslinked'],
    limitations: ['Temperature sensitivity', 'Complex synthesis', 'Time-dependent properties', 'Higher cost'],
    environmentalImpact: {
      biodegradability: 'Generally non-biodegradable',
      recyclability: 'Excellent - fully recyclable and reprocessable',
      toxicity: 'Low toxicity',
      sustainability: 'Good - recyclable and repairable extends lifetime'
    }
  },
  {
    id: 'peg-hydrogel',
    name: 'Polyethylene Glycol Hydrogel (PEG)',
    category: 'functional',
    formula: '(C₂H₄O)ₙ',
    molarMass: 'Variable (200-10,000+ g/mol)',
    structure: 'Crosslinked polyether network that swells in water',
    synthesis: 'Chemical or physical crosslinking of PEG chains',
    image2D: '/src/assets/polymers/peg-2d.png',
    properties: {
      meltingPoint: 'Variable (4-65°C depending on MW)',
      density: '1.1-1.2 g/cm³',
      tensileStrength: '0.1-10 MPa (hydrated)',
      solubility: 'Water-soluble before crosslinking'
    },
    uses: ['Drug delivery', 'Tissue engineering scaffolds', 'Contact lenses', 'Wound dressings', 'Biosensors'],
    advantages: ['Biocompatible', 'Non-toxic', 'Tunable swelling', 'Protein resistant', 'FDA approved'],
    limitations: ['Weak mechanical properties', 'Fast degradation in vivo', 'Limited cell adhesion', 'Auto-oxidation'],
    environmentalImpact: {
      biodegradability: 'Biodegradable under certain conditions',
      recyclability: 'Not easily recyclable',
      toxicity: 'Non-toxic',
      sustainability: 'Moderate - petroleum-derived'
    }
  },
  {
    id: 'peptide-hydrogel',
    name: 'Peptide-Based Hydrogel',
    category: 'functional',
    formula: 'Amino acid sequences',
    molarMass: 'Variable (typically 500-5,000 g/mol)',
    structure: 'Self-assembled peptide network (β-sheet or α-helix)',
    synthesis: 'Self-assembly of designed peptide sequences',
    image2D: '/src/assets/polymers/peptide-hydrogel-2d.png',
    properties: {
      meltingPoint: 'Not applicable (gels at specific conditions)',
      density: '1.0-1.1 g/cm³',
      tensileStrength: '0.1-5 MPa',
      solubility: 'Forms gels in aqueous solutions'
    },
    uses: ['3D cell culture', 'Drug delivery', 'Tissue engineering', 'Injectable therapeutics', 'Wound healing'],
    advantages: ['Biocompatible', 'Biodegradable', 'Cell-adhesive', 'Injectable', 'Tunable mechanical properties'],
    limitations: ['Expensive', 'Batch variability', 'Weak mechanical properties', 'Enzymatic degradation', 'Scale-up challenges'],
    environmentalImpact: {
      biodegradability: 'Fully biodegradable',
      recyclability: 'Compostable',
      toxicity: 'Non-toxic',
      sustainability: 'Good - but synthesis can be resource-intensive'
    }
  },
  {
    id: 'magnetite-hydrogel',
    name: 'Magnetite Nanoparticle Hydrogel',
    category: 'functional',
    formula: 'Polymer matrix + Fe₃O₄',
    molarMass: 'Variable',
    structure: 'Hydrogel matrix with embedded magnetite nanoparticles',
    synthesis: 'In-situ synthesis of Fe₃O₄ in hydrogel or mixing nanoparticles with gel precursors',
    image2D: '/src/assets/polymers/magnetite-hydrogel-2d.png',
    properties: {
      meltingPoint: 'Not applicable',
      density: '1.2-1.8 g/cm³',
      tensileStrength: '0.5-10 MPa',
      solubility: 'Insoluble but swells in water'
    },
    uses: ['Targeted drug delivery', 'Hyperthermia treatment', 'MRI contrast agents', 'Biosensors', 'Tissue engineering'],
    advantages: ['Magnetic responsiveness', 'Remote actuation', 'Biocompatible', 'Controlled drug release', 'Imaging capability'],
    limitations: ['Nanoparticle aggregation', 'Complex synthesis', 'Toxicity concerns with high concentrations', 'Reduced gel transparency'],
    environmentalImpact: {
      biodegradability: 'Polymer biodegradable, nanoparticles persistent',
      recyclability: 'Difficult to recycle',
      toxicity: 'Low toxicity at low concentrations',
      sustainability: 'Moderate - nanoparticle production energy-intensive'
    }
  },
  {
    id: 'paa-ph',
    name: 'Poly(acrylic acid) pH-Responsive (PAA)',
    category: 'functional',
    formula: '(C₃H₄O₂)ₙ',
    molarMass: '72.06 g/mol (repeat unit)',
    structure: 'Linear polymer with carboxylic acid groups',
    synthesis: 'Free radical polymerization of acrylic acid',
    image2D: '/src/assets/polymers/paa-2d.png',
    properties: {
      meltingPoint: 'Decomposes before melting',
      density: '1.05-1.1 g/cm³',
      tensileStrength: 'Variable (depends on crosslinking)',
      solubility: 'Water-soluble at neutral/basic pH'
    },
    uses: ['Drug delivery', 'pH sensors', 'Superabsorbent materials', 'Coatings', 'Water treatment'],
    advantages: ['pH-responsive swelling', 'Biocompatible', 'Low cost', 'Easy to synthesize', 'Tunable properties'],
    limitations: ['pH-dependent solubility', 'Limited mechanical strength', 'Sensitive to ionic strength', 'Can be brittle when dry'],
    environmentalImpact: {
      biodegradability: 'Slowly biodegradable',
      recyclability: 'Difficult to recycle',
      toxicity: 'Low toxicity',
      sustainability: 'Moderate - petroleum-based'
    }
  },
  {
    id: 'pmaa-ph',
    name: 'Poly(methacrylic acid) pH-Responsive (PMAA)',
    category: 'functional',
    formula: '(C₄H₆O₂)ₙ',
    molarMass: '86.09 g/mol (repeat unit)',
    structure: 'Linear polymer with carboxylic acid and methyl groups',
    synthesis: 'Free radical polymerization of methacrylic acid',
    image2D: '/src/assets/polymers/pmaa-2d.png',
    properties: {
      meltingPoint: 'Decomposes before melting',
      density: '1.05-1.15 g/cm³',
      tensileStrength: 'Variable',
      solubility: 'Water-soluble at pH > 5'
    },
    uses: ['Enteric drug coatings', 'pH-responsive hydrogels', 'Biosensors', 'Dental cements', 'Contact lenses'],
    advantages: ['Sharp pH transition', 'Biocompatible', 'Good film-forming', 'Commercial availability', 'FDA approved for some applications'],
    limitations: ['pH-sensitive dissolution', 'Limited stability in basic conditions', 'Can swell excessively', 'Mechanical weakness'],
    environmentalImpact: {
      biodegradability: 'Slowly biodegradable',
      recyclability: 'Difficult to recycle',
      toxicity: 'Low toxicity',
      sustainability: 'Moderate - petroleum-based'
    }
  },
  {
    id: 'pdmaema-ph',
    name: 'Poly(DMAEMA) pH-Responsive',
    category: 'functional',
    formula: '(C₈H₁₅NO₂)ₙ',
    molarMass: '157.21 g/mol (repeat unit)',
    structure: 'Polymer with tertiary amine groups',
    synthesis: 'Free radical polymerization of 2-(dimethylamino)ethyl methacrylate',
    image2D: '/src/assets/polymers/pdmaema-2d.png',
    properties: {
      meltingPoint: 'Not applicable',
      density: '1.0-1.05 g/cm³',
      tensileStrength: 'Variable',
      solubility: 'Water-soluble at acidic pH'
    },
    uses: ['Gene delivery', 'Antibacterial coatings', 'pH-responsive surfaces', 'Flocculants', 'Ion exchange'],
    advantages: ['pH and temperature responsive', 'Antimicrobial activity', 'Cationic nature useful for delivery', 'Tunable properties', 'Commercial availability'],
    limitations: ['Cytotoxicity at high concentrations', 'Hydrophobic at neutral pH', 'Limited stability', 'Quaternization over time'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Difficult to recycle',
      toxicity: 'Moderate toxicity at high concentrations',
      sustainability: 'Moderate - petroleum-based'
    }
  },
  {
    id: 'mechanophore-polymer',
    name: 'Mechanophore-Containing Polymer',
    category: 'functional',
    formula: 'Variable with mechanophore units',
    molarMass: 'Variable',
    structure: 'Polymer chains with force-sensitive molecular units (spiropyran, anthracene, etc.)',
    synthesis: 'Incorporation of mechanophore units during or after polymerization',
    image2D: '/src/assets/polymers/mechanophore-polymer-2d.png',
    properties: {
      meltingPoint: 'Variable',
      density: '1.0-1.3 g/cm³',
      tensileStrength: '10-50 MPa',
      solubility: 'Variable depending on backbone'
    },
    uses: ['Stress sensors', 'Mechanically-adaptive materials', 'Self-reporting polymers', 'Smart coatings', 'Damage detection'],
    advantages: ['Real-time stress detection', 'Color change on damage', 'No external power needed', 'Self-diagnostic', 'Multiple response types'],
    limitations: ['Complex synthesis', 'Expensive', 'Fatigue effects', 'Limited reversibility', 'Optical interference'],
    environmentalImpact: {
      biodegradability: 'Generally non-biodegradable',
      recyclability: 'Difficult to recycle',
      toxicity: 'Low toxicity',
      sustainability: 'Moderate - extends material lifetime through monitoring'
    }
  },
  {
    id: 'spiropyran-polymer',
    name: 'Spiropyran-Containing Photochromic Polymer',
    category: 'functional',
    formula: 'Variable with spiropyran units',
    molarMass: 'Variable',
    structure: 'Polymer with spiropyran photochromic switches',
    synthesis: 'Copolymerization with spiropyran-functionalized monomers',
    image2D: '/src/assets/polymers/spiropyran-polymer-2d.png',
    properties: {
      meltingPoint: 'Variable',
      density: '1.0-1.2 g/cm³',
      tensileStrength: '10-40 MPa',
      solubility: 'Variable'
    },
    uses: ['Smart windows', 'Optical data storage', 'Sensors', 'Security inks', 'Light-controlled drug delivery'],
    advantages: ['Reversible photochromism', 'Fast switching', 'Multiple cycles', 'Tunable absorption', 'No byproducts'],
    limitations: ['UV sensitivity (degradation)', 'Fatigue after many cycles', 'Thermal back-reaction', 'Expensive synthesis'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Difficult to recycle',
      toxicity: 'Low toxicity',
      sustainability: 'Moderate'
    }
  },
  {
    id: 'azobenzene-polymer',
    name: 'Azobenzene-Containing Photoresponsive Polymer',
    category: 'functional',
    formula: 'Variable with -N=N- units',
    molarMass: 'Variable',
    structure: 'Polymer with azobenzene photoswitches',
    synthesis: 'Polymerization of azobenzene-containing monomers or post-modification',
    image2D: '/src/assets/polymers/azobenzene-polymer-2d.png',
    properties: {
      meltingPoint: 'Variable',
      density: '1.1-1.3 g/cm³',
      tensileStrength: '10-50 MPa',
      solubility: 'Variable'
    },
    uses: ['Light-controlled actuators', 'Optical switches', 'Liquid crystal displays', 'Drug delivery', 'Surface patterning'],
    advantages: ['Reversible isomerization', 'Fast response', 'Multiple switching cycles', 'Wavelength selectivity', 'Large conformational change'],
    limitations: ['UV degradation', 'Incomplete switching', 'Thermal relaxation', 'Complex synthesis', 'Photofatigue'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Difficult to recycle',
      toxicity: 'Low toxicity',
      sustainability: 'Moderate'
    }
  },
  {
    id: 'magneto-elastomer',
    name: 'Magneto-Responsive Elastomer',
    category: 'functional',
    formula: 'Elastomer matrix + magnetic particles',
    molarMass: 'Variable',
    structure: 'Elastomeric polymer with embedded magnetic nanoparticles',
    synthesis: 'Mixing magnetic particles with elastomer precursors followed by curing',
    image2D: '/src/assets/polymers/magneto-elastomer-2d.png',
    properties: {
      meltingPoint: 'Variable (elastomeric)',
      density: '1.5-3.0 g/cm³',
      tensileStrength: '1-10 MPa',
      solubility: 'Insoluble'
    },
    uses: ['Soft robotics', 'Actuators', 'Sensors', 'Vibration dampers', 'Adaptive structures'],
    advantages: ['Remote actuation', 'Fast response', 'Reversible deformation', 'No wiring needed', 'Tunable stiffness'],
    limitations: ['Heavy due to particles', 'Particle settling', 'Limited elongation', 'Complex fabrication', 'Magnetic field required'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Difficult to recycle',
      toxicity: 'Low toxicity',
      sustainability: 'Low - contains metal particles'
    }
  },
  {
    id: 'dextranase-polymer',
    name: 'Dextran Enzyme-Responsive Polymer',
    category: 'functional',
    formula: '(C₆H₁₀O₅)ₙ',
    molarMass: 'Variable (10,000-2,000,000 g/mol)',
    structure: 'Branched polysaccharide with α-1,6-glucosidic linkages',
    synthesis: 'Biosynthesis by Leuconostoc bacteria from sucrose',
    image2D: '/src/assets/polymers/dextranase-polymer-2d.png',
    properties: {
      meltingPoint: 'Decomposes before melting',
      density: '1.5-1.6 g/cm³',
      tensileStrength: 'Variable',
      solubility: 'Water-soluble'
    },
    uses: ['Drug delivery (colon-specific)', 'Biosensors', 'Blood plasma expander', 'Hydrogels', 'Enzyme-triggered release'],
    advantages: ['Biocompatible', 'Biodegradable', 'FDA approved', 'Enzyme-specific degradation', 'Non-toxic'],
    limitations: ['Variable molecular weight', 'Expensive', 'Limited mechanical properties', 'Batch variability', 'Enzymatic degradation'],
    environmentalImpact: {
      biodegradability: 'Fully biodegradable',
      recyclability: 'Compostable',
      toxicity: 'Non-toxic',
      sustainability: 'Good - biosynthesized'
    }
  },
  {
    id: 'pvme-thermo',
    name: 'Poly(vinyl methyl ether) Thermoresponsive (PVME)',
    category: 'functional',
    formula: '(C₃H₆O)ₙ',
    molarMass: '58.08 g/mol (repeat unit)',
    structure: 'Linear polymer with methyl ether side groups',
    synthesis: 'Cationic polymerization of vinyl methyl ether',
    image2D: '/src/assets/polymers/pvme-2d.png',
    properties: {
      meltingPoint: 'LCST ~34-38°C',
      density: '0.95-1.0 g/cm³',
      tensileStrength: 'Variable',
      solubility: 'Water-soluble below LCST'
    },
    uses: ['Temperature-responsive coatings', 'Drug delivery', 'Thermosensitive adhesives', 'Separation membranes', 'Actuators'],
    advantages: ['Sharp phase transition', 'Biocompatible', 'Easy synthesis', 'Reversible response', 'Low cost'],
    limitations: ['Sensitive to pH and salts', 'Limited stability', 'Hydrolysis susceptibility', 'Narrow temperature range'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Difficult to recycle',
      toxicity: 'Low toxicity',
      sustainability: 'Moderate - petroleum-based'
    }
  },
  {
    id: 'pvcl-thermo',
    name: 'Poly(N-vinylcaprolactam) Thermoresponsive (PVCL)',
    category: 'functional',
    formula: '(C₈H₁₃NO)ₙ',
    molarMass: '139.19 g/mol (repeat unit)',
    structure: 'Linear polymer with caprolactam side groups',
    synthesis: 'Free radical polymerization of N-vinylcaprolactam',
    image2D: '/src/assets/polymers/pvcl-2d.png',
    properties: {
      meltingPoint: 'LCST ~30-35°C',
      density: '1.0-1.05 g/cm³',
      tensileStrength: 'Variable',
      solubility: 'Water-soluble below LCST'
    },
    uses: ['Drug delivery', 'Tissue engineering', 'Bioseparation', 'Smart coatings', 'Contact lenses'],
    advantages: ['Sharp phase transition', 'Biocompatible', 'Stable in physiological conditions', 'Reversible', 'LCST near body temperature'],
    limitations: ['Higher cost than PNIPAM', 'Complex purification', 'Limited commercial availability', 'Slower kinetics'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Difficult to recycle',
      toxicity: 'Low toxicity',
      sustainability: 'Moderate - petroleum-based'
    }
  },
  {
    id: 'peo-thermo',
    name: 'Poly(ethylene oxide) Thermoresponsive (PEO)',
    category: 'functional',
    formula: '(C₂H₄O)ₙ',
    molarMass: 'Variable (200-8,000,000 g/mol)',
    structure: 'Linear polyether',
    synthesis: 'Ring-opening polymerization of ethylene oxide',
    image2D: '/src/assets/polymers/peo-2d.png',
    properties: {
      meltingPoint: 'LCST ~85-100°C (in water)',
      density: '1.12-1.2 g/cm³',
      tensileStrength: '10-25 MPa',
      solubility: 'Water-soluble at room temperature'
    },
    uses: ['Drug delivery', 'Protein PEGylation', 'Solid polymer electrolytes', 'Lubrication', 'Crystallization inhibitor'],
    advantages: ['Biocompatible', 'Non-toxic', 'FDA approved', 'High water solubility', 'Protein resistant'],
    limitations: ['High LCST limits applications', 'Auto-oxidation', 'Limited mechanical strength', 'Hydrolytic instability'],
    environmentalImpact: {
      biodegradability: 'Slowly biodegradable',
      recyclability: 'Difficult to recycle',
      toxicity: 'Non-toxic',
      sustainability: 'Moderate - petroleum-based'
    }
  },
  {
    id: 'doped-polyacetylene',
    name: 'Doped Polyacetylene',
    category: 'functional',
    formula: '(C₂H₂)ₙ + dopants',
    molarMass: '26.04 g/mol (repeat unit)',
    structure: 'Conjugated polymer with dopant ions for enhanced conductivity',
    synthesis: 'Ziegler-Natta polymerization followed by doping with I₂, AsF₅, or other dopants',
    image2D: '/src/assets/polymers/doped-polyacetylene-2d.png',
    properties: {
      conductivity: 'Up to 105 S/cm (heavily doped)',
      density: '1.16 g/cm³',
      tensileStrength: 'Poor mechanical properties',
      solubility: 'Insoluble'
    },
    uses: ['Conductive films', 'Battery electrodes', 'Electromagnetic shielding', 'Antistatic materials', 'Research applications'],
    advantages: ['Extremely high conductivity when doped', 'Historical significance (Nobel Prize 2000)', 'Tunable conductivity', 'Lightweight'],
    limitations: ['Highly unstable in air', 'Rapid degradation', 'Poor processability', 'Brittle', 'Limited practical use'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Not recyclable',
      toxicity: 'Low toxicity (dopants may be toxic)',
      sustainability: 'Low - unstable and impractical for most applications'
    }
  },
  {
    id: 'polyacetylene',
    name: 'Polyacetylene',
    category: 'optoelectronic',
    formula: '(C₂H₂)ₙ',
    molarMass: '26.04 g/mol (repeat unit)',
    structure: 'Conjugated linear polymer with alternating single and double bonds',
    synthesis: 'Ziegler-Natta polymerization of acetylene gas, ring-opening metathesis polymerization',
    image2D: '/src/assets/polymers/polyacetylene-2d.png',
    properties: {
      conductivity: '10⁻⁵ S/cm (undoped), up to 10⁵ S/cm (doped)',
      density: '1.16 g/cm³',
      tensileStrength: 'Very poor mechanical properties',
      solubility: 'Insoluble in most solvents'
    },
    uses: ['Conductive films', 'Battery electrodes', 'Antistatic materials', 'Research on organic conductors', 'Historical significance in conducting polymers'],
    advantages: ['First discovered conducting polymer (Nobel Prize 2000)', 'Very high conductivity when doped', 'Lightweight', 'Tunable electronic properties'],
    limitations: ['Extremely air sensitive', 'Degrades rapidly', 'Poor processability', 'Brittle', 'Difficult to handle'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Not recyclable',
      toxicity: 'Low toxicity',
      sustainability: 'Low - unstable and impractical for widespread use'
    }
  },
  {
    id: 'polythiophene',
    name: 'Polythiophene (PT)',
    category: 'optoelectronic',
    formula: '(C₄H₂S)ₙ',
    molarMass: '84.14 g/mol (repeat unit)',
    structure: 'Conjugated polymer with thiophene rings',
    synthesis: 'Chemical oxidation, electropolymerization, or cross-coupling reactions of thiophene monomers',
    image2D: '/src/assets/polymers/polythiophene-2d.png',
    properties: {
      conductivity: '10-1000 S/cm (doped)',
      density: '1.5 g/cm³',
      solubility: 'Insoluble (substituted versions are soluble)',
      tensileStrength: 'Moderate mechanical properties'
    },
    uses: ['Organic solar cells', 'OLEDs', 'Transistors', 'Sensors', 'Electrochromic devices', 'Antistatic coatings'],
    advantages: ['Good stability', 'High conductivity', 'Excellent processability (when substituted)', 'Tunable bandgap', 'Good charge transport'],
    limitations: ['Oxidative degradation', 'Limited solubility (unsubstituted)', 'Lower hole mobility than some alternatives'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Difficult to recycle',
      toxicity: 'Low toxicity',
      sustainability: 'Moderate - requires chemical synthesis'
    }
  },
  {
    id: 'polypyrrole-opto',
    name: 'Polypyrrole (PPy)',
    category: 'optoelectronic',
    formula: '(C₄H₃N)ₙ',
    molarMass: '67.09 g/mol (repeat unit)',
    structure: 'Conjugated heterocyclic polymer with nitrogen',
    synthesis: 'Chemical or electrochemical oxidation of pyrrole',
    image2D: '/src/assets/polymers/polypyrrole-2d.png',
    properties: {
      conductivity: '10-100 S/cm (doped)',
      density: '1.5 g/cm³',
      solubility: 'Insoluble in most solvents',
      tensileStrength: 'Moderate'
    },
    uses: ['Biosensors', 'Actuators', 'Supercapacitors', 'Neural interfaces', 'Antistatic coatings', 'EMI shielding'],
    advantages: ['Biocompatible', 'Easy synthesis', 'Good stability in air', 'High capacitance', 'Tunable properties'],
    limitations: ['Brittle when dried', 'Limited processability', 'Conductivity degrades over time', 'Insoluble'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Difficult to recycle',
      toxicity: 'Low toxicity, biocompatible',
      sustainability: 'Moderate - requires chemical synthesis'
    }
  },
  {
    id: 'polyaniline-opto',
    name: 'Polyaniline (PANI)',
    category: 'optoelectronic',
    formula: '(C₆H₅NH)ₙ',
    molarMass: '93.13 g/mol (repeat unit)',
    structure: 'Conjugated polymer with alternating single and double bonds, nitrogen in backbone',
    synthesis: 'Oxidative polymerization of aniline in acidic medium',
    image2D: '/src/assets/polymers/polyaniline-2d.png',
    properties: {
      conductivity: '1-100 S/cm (doped)',
      density: '1.3-1.4 g/cm³',
      solubility: 'Insoluble in water, soluble in organic solvents when doped',
      tensileStrength: 'Moderate'
    },
    uses: ['Rechargeable batteries', 'Corrosion protection', 'Sensors', 'EMI shielding', 'Electrochromic displays', 'Supercapacitors'],
    advantages: ['High conductivity', 'Easy synthesis', 'Good environmental stability', 'Tunable through doping', 'Low cost'],
    limitations: ['Limited processability', 'Brittle', 'Conductivity decreases over time', 'Requires doping for conductivity'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Difficult to recycle',
      toxicity: 'Low toxicity',
      sustainability: 'Moderate - requires chemical synthesis'
    }
  },
  {
    id: 'ppv',
    name: 'Poly(p-phenylene vinylene) (PPV)',
    category: 'optoelectronic',
    formula: '(C₈H₆)ₙ',
    molarMass: '104.15 g/mol (repeat unit)',
    structure: 'Conjugated polymer with alternating phenylene and vinylene units',
    synthesis: 'Precursor route (sulfonium polyelectrolyte), Wittig polycondensation, Heck coupling',
    image2D: '/src/assets/polymers/ppv-2d.png',
    properties: {
      conductivity: '10⁻⁸ - 10⁻⁵ S/cm (undoped)',
      density: '1.1-1.2 g/cm³',
      solubility: 'Insoluble (substituted versions are soluble)',
      tensileStrength: 'Moderate'
    },
    uses: ['OLEDs', 'Polymer LEDs', 'Photovoltaics', 'Light-emitting displays', 'Optical sensors'],
    advantages: ['High luminescence efficiency', 'Tunable emission color', 'Good film-forming properties', 'Stable electroluminescence'],
    limitations: ['Photo-oxidative degradation', 'Limited solubility', 'Requires encapsulation', 'Lower efficiency than modern alternatives'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Not recyclable',
      toxicity: 'Low toxicity',
      sustainability: 'Low - complex synthesis, limited lifetime'
    }
  },
  {
    id: 'polyfluorene',
    name: 'Polyfluorene (PF)',
    category: 'optoelectronic',
    formula: '(C₁₃H₈)ₙ',
    molarMass: '166.22 g/mol (repeat unit)',
    structure: 'Rigid conjugated polymer with fluorene units',
    synthesis: 'Suzuki coupling, Yamamoto coupling, Stille coupling of fluorene monomers',
    image2D: '/src/assets/polymers/polyfluorene-2d.png',
    properties: {
      conductivity: '10⁻¹² - 10⁻⁸ S/cm',
      density: '1.0-1.1 g/cm³',
      solubility: 'Soluble in organic solvents (with alkyl side chains)',
      tensileStrength: 'Good mechanical properties'
    },
    uses: ['Blue OLEDs', 'Polymer solar cells', 'Organic transistors', 'Light-emitting displays', 'Fluorescent sensors'],
    advantages: ['High photoluminescence quantum yield', 'Excellent blue emission', 'Good solubility', 'High charge mobility', 'Thermal stability'],
    limitations: ['Ketone defect formation', 'Green emission from aggregation', 'Photo-oxidation', 'High cost'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Not recyclable',
      toxicity: 'Low toxicity',
      sustainability: 'Low - complex synthesis'
    }
  },
  {
    id: 'polycarbazole',
    name: 'Polycarbazole (PCz)',
    category: 'optoelectronic',
    formula: '(C₁₂H₇N)ₙ',
    molarMass: '167.21 g/mol (repeat unit)',
    structure: 'Conjugated polymer with carbazole units containing nitrogen',
    synthesis: 'Electropolymerization or chemical oxidation of carbazole',
    image2D: '/src/assets/polymers/polycarbazole-2d.png',
    properties: {
      conductivity: '10⁻⁴ - 10⁻² S/cm',
      density: '1.2 g/cm³',
      solubility: 'Insoluble (substituted versions are soluble)',
      tensileStrength: 'Good mechanical properties'
    },
    uses: ['Hole transport layers', 'OLEDs', 'Electrochromic devices', 'Organic transistors', 'Photovoltaics'],
    advantages: ['Excellent hole mobility', 'High thermal stability', 'Good electrochemical stability', 'Tunable optoelectronic properties'],
    limitations: ['Limited solubility', 'Lower conductivity than other conducting polymers', 'Requires doping for high conductivity'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Difficult to recycle',
      toxicity: 'Low toxicity',
      sustainability: 'Moderate - requires chemical synthesis'
    }
  },
  {
    id: 'polyphenylene',
    name: 'Poly(p-phenylene) (PPP)',
    category: 'optoelectronic',
    formula: '(C₆H₄)ₙ',
    molarMass: '76.10 g/mol (repeat unit)',
    structure: 'Rigid rod conjugated polymer with para-linked benzene rings',
    synthesis: 'Suzuki coupling, oxidative coupling, or Yamamoto coupling',
    image2D: '/src/assets/polymers/polyphenylene-2d.png',
    properties: {
      conductivity: '10⁻¹² S/cm (undoped)',
      density: '1.3 g/cm³',
      solubility: 'Insoluble (substituted versions are soluble)',
      tensileStrength: 'Very high, rigid structure'
    },
    uses: ['High-strength fibers', 'OLEDs', 'Blue light emission', 'Liquid crystal displays', 'Sensors'],
    advantages: ['High thermal stability', 'Excellent mechanical strength', 'Good blue emission', 'High rigidity'],
    limitations: ['Very poor solubility', 'Difficult to process', 'Brittle', 'Expensive synthesis'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Not recyclable',
      toxicity: 'Low toxicity',
      sustainability: 'Low - complex synthesis, processing difficulties'
    }
  },
  {
    id: 'polynaphthalene',
    name: 'Polynaphthalene',
    category: 'optoelectronic',
    formula: '(C₁₀H₆)ₙ',
    molarMass: '128.17 g/mol (repeat unit)',
    structure: 'Conjugated polymer with naphthalene units',
    synthesis: 'Oxidative polymerization or coupling reactions of naphthalene derivatives',
    image2D: '/src/assets/polymers/polynaphthalene-2d.png',
    properties: {
      conductivity: '10⁻⁸ - 10⁻⁶ S/cm',
      density: '1.15 g/cm³',
      solubility: 'Insoluble (substituted versions may be soluble)',
      tensileStrength: 'Moderate to high'
    },
    uses: ['OLEDs', 'Photovoltaics', 'Organic semiconductors', 'Fluorescent materials', 'Research applications'],
    advantages: ['Extended conjugation', 'Good charge transport', 'Tunable optical properties', 'Thermal stability'],
    limitations: ['Poor solubility', 'Limited processability', 'Aggregation in solution', 'Lower efficiency than alternatives'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Not recyclable',
      toxicity: 'Low to moderate toxicity',
      sustainability: 'Low - complex synthesis'
    }
  },
  {
    id: 'polythiophene-vinylene',
    name: 'Polythiophene Vinylene (PTV)',
    category: 'optoelectronic',
    formula: '(C₆H₄S)ₙ',
    molarMass: '108.16 g/mol (repeat unit)',
    structure: 'Conjugated polymer combining thiophene and vinylene units',
    synthesis: 'Wittig-type polycondensation, Stille coupling, or Heck coupling',
    image2D: '/src/assets/polymers/polythiophene-vinylene-2d.png',
    properties: {
      conductivity: '10⁻⁶ - 10⁻⁴ S/cm',
      density: '1.3 g/cm³',
      solubility: 'Moderate in organic solvents (with substituents)',
      tensileStrength: 'Moderate'
    },
    uses: ['Organic solar cells', 'LEDs', 'Field-effect transistors', 'Photodetectors', 'Electrochromic devices'],
    advantages: ['Extended conjugation', 'Tunable bandgap', 'Good charge mobility', 'Red/near-IR emission'],
    limitations: ['Photo-oxidative degradation', 'Limited stability', 'Lower efficiency than modern materials', 'Synthesis complexity'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Not recyclable',
      toxicity: 'Low toxicity',
      sustainability: 'Low - complex synthesis'
    }
  },
  {
    id: 'polyazulene',
    name: 'Polyazulene',
    category: 'optoelectronic',
    formula: '(C₁₀H₆)ₙ',
    molarMass: '128.17 g/mol (repeat unit)',
    structure: 'Non-benzenoid conjugated polymer with azulene units (fused 5- and 7-membered rings)',
    synthesis: 'Electropolymerization or chemical oxidation of azulene',
    image2D: '/src/assets/polymers/polyazulene-2d.png',
    properties: {
      conductivity: '10⁻⁴ - 10⁻² S/cm',
      density: '1.2 g/cm³',
      solubility: 'Insoluble',
      tensileStrength: 'Moderate'
    },
    uses: ['Electrochromic devices', 'Organic semiconductors', 'Sensors', 'Research on non-benzenoid aromatics', 'Optical materials'],
    advantages: ['Unique non-benzenoid structure', 'Interesting optical properties', 'Good electrochemical stability', 'Colorful'],
    limitations: ['Expensive azulene monomer', 'Limited applications', 'Poor processability', 'Lower conductivity than other conducting polymers'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Not recyclable',
      toxicity: 'Low toxicity',
      sustainability: 'Low - expensive and rare monomer'
    }
  },
  {
    id: 'polyfuran',
    name: 'Polyfuran',
    category: 'optoelectronic',
    formula: '(C₄H₂O)ₙ',
    molarMass: '68.07 g/mol (repeat unit)',
    structure: 'Conjugated polymer with furan rings',
    synthesis: 'Chemical or electrochemical oxidation of furan',
    image2D: '/src/assets/polymers/polyfuran-2d.png',
    properties: {
      conductivity: '10⁻⁶ - 10⁻⁴ S/cm',
      density: '1.4 g/cm³',
      solubility: 'Insoluble',
      tensileStrength: 'Poor'
    },
    uses: ['Corrosion protection', 'Sensors', 'Research on conducting polymers', 'Electrochemical capacitors'],
    advantages: ['Renewable monomer source (furfural from biomass)', 'Low cost monomer', 'Biocompatible'],
    limitations: ['Low conductivity', 'Poor stability', 'Over-oxidation during synthesis', 'Limited applications'],
    environmentalImpact: {
      biodegradability: 'Slowly biodegradable',
      recyclability: 'Difficult to recycle',
      toxicity: 'Low toxicity',
      sustainability: 'High - can be derived from biomass'
    }
  },
  {
    id: 'polyselenophene',
    name: 'Polyselenophene',
    category: 'optoelectronic',
    formula: '(C₄H₂Se)ₙ',
    molarMass: '131.04 g/mol (repeat unit)',
    structure: 'Conjugated polymer with selenophene rings',
    synthesis: 'Electropolymerization or chemical oxidation of selenophene',
    image2D: '/src/assets/polymers/polyselenophene-2d.png',
    properties: {
      conductivity: '1-10 S/cm (doped)',
      density: '1.8 g/cm³',
      solubility: 'Insoluble (substituted versions may be soluble)',
      tensileStrength: 'Moderate'
    },
    uses: ['Organic solar cells', 'Transistors', 'Sensors', 'Research on heavy atom effects', 'Photodetectors'],
    advantages: ['Lower bandgap than polythiophene', 'Enhanced spin-orbit coupling', 'Good charge mobility', 'Near-IR absorption'],
    limitations: ['Selenium toxicity', 'Expensive monomer', 'Air sensitive', 'Limited commercial availability'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Not recyclable',
      toxicity: 'Moderate to high (selenium compounds)',
      sustainability: 'Low - toxic element, expensive'
    }
  },
  {
    id: 'polythiazole',
    name: 'Polythiazole',
    category: 'optoelectronic',
    formula: '(C₃HNS)ₙ',
    molarMass: '85.12 g/mol (repeat unit)',
    structure: 'Conjugated polymer with thiazole rings (nitrogen and sulfur heterocycle)',
    synthesis: 'Chemical oxidation or cross-coupling polymerization of thiazole monomers',
    image2D: '/src/assets/polymers/polythiazole-2d.png',
    properties: {
      conductivity: '10⁻⁵ - 10⁻³ S/cm',
      density: '1.4 g/cm³',
      solubility: 'Insoluble (substituted versions may be soluble)',
      tensileStrength: 'Moderate'
    },
    uses: ['Organic semiconductors', 'Sensors', 'Corrosion protection', 'Research applications', 'Electrochromic materials'],
    advantages: ['Good thermal stability', 'Electron-accepting properties', 'Tunable electronic properties', 'Bioactive'],
    limitations: ['Lower conductivity than polythiophene', 'Limited commercial use', 'Synthesis challenges', 'Poor processability'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Not recyclable',
      toxicity: 'Low to moderate toxicity',
      sustainability: 'Low - limited applications, complex synthesis'
    }
  },
  {
    id: 'pet',
    name: 'Polyethylene Terephthalate (PET)',
    category: 'packaging',
    formula: '(C₁₀H₈O₄)ₙ',
    molarMass: '192.17 g/mol (repeat unit)',
    structure: 'Semi-crystalline thermoplastic polyester with aromatic rings',
    synthesis: 'Polycondensation of terephthalic acid and ethylene glycol at high temperature',
    image2D: '/src/assets/polymers/pet-2d.png',
    properties: {
      meltingPoint: '250-260°C',
      density: '1.38-1.41 g/cm³',
      tensileStrength: '50-75 MPa',
      solubility: 'Insoluble in water, soluble in some organic solvents at high temp'
    },
    uses: ['Beverage bottles', 'Food packaging', 'Textile fibers', 'Film applications', 'Engineering plastics'],
    advantages: ['Excellent barrier properties', 'High strength', 'Transparent', 'Recyclable', 'Lightweight'],
    limitations: ['Limited heat resistance', 'Requires high processing temperatures', 'Can absorb odors', 'UV degradation'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable (hundreds of years)',
      recyclability: 'Highly recyclable (PETE #1)',
      toxicity: 'Low toxicity, food safe',
      sustainability: 'Moderate - petroleum-based but highly recyclable'
    }
  },
  {
    id: 'hdpe',
    name: 'High-Density Polyethylene (HDPE)',
    category: 'packaging',
    formula: '(C₂H₄)ₙ',
    molarMass: '28.05 g/mol (repeat unit)',
    structure: 'Linear polymer with minimal branching, high crystallinity',
    synthesis: 'Polymerization of ethylene using Ziegler-Natta or metallocene catalysts at low pressure',
    image2D: '/src/assets/polymers/hdpe-2d.png',
    properties: {
      meltingPoint: '120-130°C',
      density: '0.941-0.965 g/cm³',
      tensileStrength: '26-33 MPa',
      solubility: 'Insoluble in water and most solvents at room temperature'
    },
    uses: ['Milk jugs', 'Detergent bottles', 'Pipes and fittings', 'Cutting boards', 'Grocery bags'],
    advantages: ['High strength-to-density ratio', 'Chemical resistance', 'Impact resistant', 'Recyclable', 'Low cost'],
    limitations: ['Poor UV resistance without additives', 'Susceptible to stress cracking', 'Not transparent', 'Limited heat resistance'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Highly recyclable (HDPE #2)',
      toxicity: 'Non-toxic, food safe',
      sustainability: 'Moderate - petroleum-based but recyclable, bio-based alternatives exist'
    }
  },
  {
    id: 'ldpe',
    name: 'Low-Density Polyethylene (LDPE)',
    category: 'packaging',
    formula: '(C₂H₄)ₙ',
    molarMass: '28.05 g/mol (repeat unit)',
    structure: 'Branched polymer with lower crystallinity than HDPE',
    synthesis: 'Free radical polymerization of ethylene at high pressure (1000-3000 atm)',
    image2D: '/src/assets/polymers/ldpe-2d.png',
    properties: {
      meltingPoint: '105-115°C',
      density: '0.910-0.940 g/cm³',
      tensileStrength: '8-25 MPa',
      solubility: 'Insoluble in water, swells in some solvents'
    },
    uses: ['Plastic bags', 'Food wrap', 'Squeeze bottles', 'Flexible tubing', 'Agricultural films'],
    advantages: ['Excellent flexibility', 'Good chemical resistance', 'Easy to process', 'Transparent films', 'Low cost'],
    limitations: ['Low strength compared to HDPE', 'Poor barrier properties', 'Limited heat resistance', 'UV degradation'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Recyclable (LDPE #4) but less commonly recycled',
      toxicity: 'Non-toxic, food safe',
      sustainability: 'Low - petroleum-based, often single-use'
    }
  },
  {
    id: 'pp',
    name: 'Polypropylene (PP)',
    category: 'packaging',
    formula: '(C₃H₆)ₙ',
    molarMass: '42.08 g/mol (repeat unit)',
    structure: 'Semi-crystalline thermoplastic with methyl side groups',
    synthesis: 'Ziegler-Natta or metallocene catalyzed polymerization of propylene',
    image2D: '/src/assets/polymers/pp-2d.png',
    properties: {
      meltingPoint: '130-171°C',
      density: '0.895-0.92 g/cm³',
      tensileStrength: '30-40 MPa',
      solubility: 'Insoluble in cold water and most solvents'
    },
    uses: ['Food containers', 'Bottle caps', 'Automotive parts', 'Textiles and fibers', 'Medical devices'],
    advantages: ['Excellent fatigue resistance', 'Good chemical resistance', 'High melting point', 'Lightweight', 'Sterilizable'],
    limitations: ['UV degradation without stabilizers', 'Difficult to bond or paint', 'Brittle at low temperatures', 'Flammable'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Recyclable (PP #5)',
      toxicity: 'Non-toxic, food and medical grade available',
      sustainability: 'Moderate - petroleum-based but recyclable, bio-based versions in development'
    }
  },
  {
    id: 'pvc',
    name: 'Polyvinyl Chloride (PVC)',
    category: 'packaging',
    formula: '(C₂H₃Cl)ₙ',
    molarMass: '62.50 g/mol (repeat unit)',
    structure: 'Atactic polymer with chlorine atoms on alternating carbon atoms',
    synthesis: 'Free radical polymerization of vinyl chloride monomer',
    image2D: '/src/assets/polymers/pvc-2d.png',
    properties: {
      meltingPoint: '100-260°C (depends on plasticizer content)',
      density: '1.3-1.45 g/cm³',
      tensileStrength: '40-51 MPa (rigid)',
      solubility: 'Insoluble in water, soluble in THF and DMF'
    },
    uses: ['Pipes and fittings', 'Window frames', 'Blister packs', 'Wire insulation', 'Floor coverings'],
    advantages: ['Excellent chemical resistance', 'Fire resistant', 'Durable and long-lasting', 'Low cost', 'Versatile (rigid or flexible)'],
    limitations: ['Releases HCl when burned', 'Contains plasticizers that may leach', 'Poor heat stability', 'Environmental concerns'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Recyclable (PVC #3) but limited infrastructure',
      toxicity: 'Concerns about additives and combustion products',
      sustainability: 'Low - chlorine source, plasticizer concerns, difficult to recycle'
    }
  },
  {
    id: 'ps',
    name: 'Polystyrene (PS)',
    category: 'packaging',
    formula: '(C₈H₈)ₙ',
    molarMass: '104.15 g/mol (repeat unit)',
    structure: 'Atactic polymer with bulky phenyl side groups',
    synthesis: 'Free radical polymerization of styrene monomer',
    image2D: '/src/assets/polymers/ps-2d.png',
    properties: {
      meltingPoint: '240°C (amorphous, glass transition ~100°C)',
      density: '1.04-1.065 g/cm³ (solid), 0.016-0.640 g/cm³ (foam)',
      tensileStrength: '35-50 MPa',
      solubility: 'Insoluble in water, soluble in aromatic solvents'
    },
    uses: ['Disposable cups and plates', 'Packaging foam', 'CD/DVD cases', 'Food containers', 'Insulation'],
    advantages: ['Inexpensive', 'Easy to process', 'Good clarity', 'Excellent insulation (foam)', 'Rigid and strong'],
    limitations: ['Brittle', 'Poor UV resistance', 'Not heat resistant', 'Environmental persistence', 'Releases styrene'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Recyclable (PS #6) but rarely recycled',
      toxicity: 'Concerns about styrene monomer residues',
      sustainability: 'Very low - petroleum-based, often single-use, persistent in environment'
    }
  },
  {
    id: 'pbt',
    name: 'Polybutylene Terephthalate (PBT)',
    category: 'packaging',
    formula: '(C₁₂H₁₂O₄)ₙ',
    molarMass: '220.22 g/mol (repeat unit)',
    structure: 'Semi-crystalline thermoplastic polyester',
    synthesis: 'Polycondensation of terephthalic acid and 1,4-butanediol',
    image2D: '/src/assets/polymers/pbt-2d.png',
    properties: {
      meltingPoint: '220-230°C',
      density: '1.31 g/cm³',
      tensileStrength: '50-60 MPa',
      solubility: 'Insoluble in water and most solvents'
    },
    uses: ['Electrical connectors', 'Automotive parts', 'Appliance housings', 'Industrial fibers', 'Electronic components'],
    advantages: ['Excellent dimensional stability', 'Good electrical properties', 'Chemical resistance', 'Fast crystallization', 'Good processability'],
    limitations: ['Moderate heat resistance', 'Hydrolysis susceptibility', 'UV degradation', 'Higher cost than commodity plastics'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Technically recyclable but limited infrastructure',
      toxicity: 'Low toxicity',
      sustainability: 'Moderate - petroleum-based, durable applications'
    }
  },
  {
    id: 'pef',
    name: 'Polyethylene Furanoate (PEF)',
    category: 'packaging',
    formula: '(C₁₀H₈O₅)ₙ',
    molarMass: '208.17 g/mol (repeat unit)',
    structure: 'Bio-based polyester with furan ring replacing benzene ring of PET',
    synthesis: 'Polycondensation of 2,5-furandicarboxylic acid (FDCA) and ethylene glycol',
    image2D: '/src/assets/polymers/pef-2d.png',
    properties: {
      meltingPoint: '210-220°C',
      density: '1.43-1.45 g/cm³',
      tensileStrength: '50-70 MPa',
      solubility: 'Insoluble in water'
    },
    uses: ['Beverage bottles', 'Food packaging', 'Films', 'Fibers', 'PET replacement applications'],
    advantages: ['Bio-based (from renewable resources)', 'Better barrier properties than PET', 'Mechanical properties similar to PET', 'Recyclable', 'Lower carbon footprint'],
    limitations: ['Currently more expensive than PET', 'Limited commercial production', 'New technology', 'Processing optimization needed'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable but bio-based',
      recyclability: 'Potentially recyclable',
      toxicity: 'Low toxicity',
      sustainability: 'High - derived from renewable biomass (fructose), lower CO₂ emissions'
    }
  },
  {
    id: 'ppc',
    name: 'Poly(propylene carbonate) (PPC)',
    category: 'packaging',
    formula: '(C₄H₆O₃)ₙ',
    molarMass: '102.09 g/mol (repeat unit)',
    structure: 'Aliphatic polycarbonate with alternating carbonate and propylene units',
    synthesis: 'Copolymerization of CO₂ and propylene oxide using catalysts',
    image2D: '/src/assets/polymers/ppc-2d.png',
    properties: {
      meltingPoint: '35-45°C (Tg)',
      density: '1.3 g/cm³',
      tensileStrength: '25-40 MPa',
      solubility: 'Soluble in many organic solvents'
    },
    uses: ['Packaging films', 'Coatings', 'Adhesives', 'Medical applications', 'CO₂ utilization'],
    advantages: ['Uses CO₂ as feedstock', 'Biodegradable', 'Good barrier properties', 'Transparent', 'Non-toxic'],
    limitations: ['Low thermal stability', 'Limited mechanical strength', 'Moisture sensitivity', 'Relatively expensive'],
    environmentalImpact: {
      biodegradability: 'Biodegradable (6-12 months in soil)',
      recyclability: 'Limited recyclability',
      toxicity: 'Non-toxic',
      sustainability: 'Very high - utilizes waste CO₂, reduces carbon footprint'
    }
  },
  {
    id: 'pbat',
    name: 'Polybutylene Adipate Terephthalate (PBAT)',
    category: 'packaging',
    formula: '(C₁₆H₁₈O₆)ₙ',
    molarMass: '306.31 g/mol (average repeat unit)',
    structure: 'Biodegradable copolyester combining soft and hard segments',
    synthesis: 'Polycondensation of adipic acid, terephthalic acid, and 1,4-butanediol',
    image2D: '/src/assets/polymers/pbat-2d.png',
    properties: {
      meltingPoint: '110-120°C',
      density: '1.25-1.27 g/cm³',
      tensileStrength: '15-35 MPa',
      solubility: 'Insoluble in water, soluble in chlorinated solvents'
    },
    uses: ['Compostable bags', 'Agricultural mulch films', 'Food packaging', 'Disposable cutlery', 'Flexible films'],
    advantages: ['Biodegradable and compostable', 'Good flexibility', 'Similar properties to LDPE', 'Processable on conventional equipment', 'Blends well with PLA'],
    limitations: ['Higher cost than conventional plastics', 'Lower mechanical strength', 'Requires industrial composting', 'Petroleum-based components'],
    environmentalImpact: {
      biodegradability: 'Biodegradable (complies with EN 13432)',
      recyclability: 'Limited recyclability due to biodegradable nature',
      toxicity: 'Non-toxic',
      sustainability: 'Moderate to high - biodegradable but partially petroleum-based'
    }
  },
  {
    id: 'pbs',
    name: 'Polybutylene Succinate (PBS)',
    category: 'packaging',
    formula: '(C₈H₁₂O₄)ₙ',
    molarMass: '172.18 g/mol (repeat unit)',
    structure: 'Biodegradable aliphatic polyester',
    synthesis: 'Polycondensation of succinic acid and 1,4-butanediol',
    image2D: '/src/assets/polymers/pbs-2d.png',
    properties: {
      meltingPoint: '90-120°C',
      density: '1.26 g/cm³',
      tensileStrength: '30-50 MPa',
      solubility: 'Insoluble in water, soluble in chloroform and hot DMF'
    },
    uses: ['Packaging films', 'Agricultural mulch', 'Disposable products', 'Fibers', 'Medical applications'],
    advantages: ['Biodegradable', 'Good mechanical properties', 'Processable like conventional plastics', 'Can be bio-based', 'Heat sealable'],
    limitations: ['Higher cost', 'Limited availability', 'Lower heat resistance', 'Hydrolysis susceptibility'],
    environmentalImpact: {
      biodegradability: 'Biodegradable in soil and compost',
      recyclability: 'Limited recyclability',
      toxicity: 'Non-toxic',
      sustainability: 'High - can be fully bio-based from renewable resources'
    }
  },
  {
    id: 'tps',
    name: 'Thermoplastic Starch (TPS)',
    category: 'packaging',
    formula: '(C₆H₁₀O₅)ₙ',
    molarMass: '162.14 g/mol (repeat unit)',
    structure: 'Modified starch processed with plasticizers to achieve thermoplastic properties',
    synthesis: 'Destructurization of native starch using heat, pressure, and plasticizers (glycerol, water)',
    image2D: '/src/assets/polymers/tps-2d.png',
    properties: {
      meltingPoint: '110-180°C (processing temperature)',
      density: '1.2-1.3 g/cm³',
      tensileStrength: '5-20 MPa',
      solubility: 'Water-sensitive, swells in water'
    },
    uses: ['Biodegradable packaging', 'Loose-fill packaging', 'Agricultural films', 'Disposable items', 'Polymer blends'],
    advantages: ['Fully bio-based', 'Biodegradable', 'Low cost raw material', 'Renewable', 'Compostable'],
    limitations: ['High moisture sensitivity', 'Poor mechanical properties', 'Requires blending for most applications', 'Limited shelf life'],
    environmentalImpact: {
      biodegradability: 'Fully biodegradable and compostable',
      recyclability: 'Not recyclable but compostable',
      toxicity: 'Non-toxic, food safe',
      sustainability: 'Very high - renewable, abundant, low energy production'
    }
  },
  {
    id: 'starch-bioplastic',
    name: 'Starch-Based Bioplastic',
    category: 'packaging',
    formula: '(C₆H₁₀O₅)ₙ',
    molarMass: '162.14 g/mol (repeat unit)',
    structure: 'Composite material of starch blended with biodegradable polymers',
    synthesis: 'Blending starch with polymers like PLA, PBAT, or PCL using extrusion',
    image2D: '/src/assets/polymers/starch-bioplastic-2d.png',
    properties: {
      meltingPoint: 'Variable (60-180°C depending on formulation)',
      density: '1.2-1.4 g/cm³',
      tensileStrength: '10-40 MPa',
      solubility: 'Moisture sensitive'
    },
    uses: ['Food packaging', 'Shopping bags', 'Disposable tableware', 'Agricultural films', 'Protective packaging'],
    advantages: ['Renewable resource', 'Biodegradable', 'Cost-effective', 'Reduces plastic waste', 'Compostable'],
    limitations: ['Moisture sensitivity', 'Variable properties', 'Shorter shelf life', 'Limited heat resistance', 'Processing challenges'],
    environmentalImpact: {
      biodegradability: 'Biodegradable (rate depends on formulation)',
      recyclability: 'Compostable rather than recyclable',
      toxicity: 'Non-toxic',
      sustainability: 'Very high - made from renewable crops, reduces fossil fuel dependency'
    }
  },
  {
    id: 'bio-pet',
    name: 'Bio-Based PET',
    category: 'packaging',
    formula: '(C₁₀H₈O₄)ₙ',
    molarMass: '192.17 g/mol (repeat unit)',
    structure: 'Same as conventional PET but ethylene glycol derived from bio-sources',
    synthesis: 'Polycondensation using bio-based ethylene glycol from sugarcane and conventional terephthalic acid',
    image2D: '/src/assets/polymers/bio-pet-2d.png',
    properties: {
      meltingPoint: '250-260°C',
      density: '1.38-1.41 g/cm³',
      tensileStrength: '50-75 MPa',
      solubility: 'Same as conventional PET'
    },
    uses: ['Beverage bottles', 'Food packaging', 'Textile fibers', 'Films', 'All PET applications'],
    advantages: ['Identical to conventional PET', 'Partially bio-based', 'Fully recyclable in existing streams', 'Lower carbon footprint', 'Drop-in replacement'],
    limitations: ['Only 30% bio-based currently', 'Same non-biodegradable nature', 'Similar cost to fossil PET', 'Full bio-based PET still in development'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Fully recyclable with conventional PET (PETE #1)',
      toxicity: 'Non-toxic',
      sustainability: 'Moderate to high - 30% renewable content, reduces fossil fuel use'
    }
  },
  {
    id: 'bio-pe',
    name: 'Bio-Based Polyethylene (Bio-PE)',
    category: 'packaging',
    formula: '(C₂H₄)ₙ',
    molarMass: '28.05 g/mol (repeat unit)',
    structure: 'Chemically identical to conventional PE but derived from renewable sources',
    synthesis: 'Polymerization of bio-ethylene derived from sugarcane ethanol dehydration',
    image2D: '/src/assets/polymers/bio-pe-2d.png',
    properties: {
      meltingPoint: '105-135°C (depending on density)',
      density: '0.91-0.97 g/cm³',
      tensileStrength: '8-33 MPa',
      solubility: 'Same as conventional PE'
    },
    uses: ['Packaging films', 'Bottles', 'Bags', 'Toys', 'All conventional PE applications'],
    advantages: ['100% bio-based', 'Identical properties to fossil PE', 'Drop-in replacement', 'Recyclable in existing streams', 'Negative carbon footprint during growth'],
    limitations: ['Non-biodegradable', 'Same environmental persistence', 'Dependent on sugarcane availability', 'Land use concerns'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Fully recyclable with conventional PE',
      toxicity: 'Non-toxic',
      sustainability: 'High - renewable resource, captures CO₂ during sugarcane growth, reduces fossil fuel dependency'
    }
  },
  {
    id: 'pom',
    name: 'Polyoxymethylene (POM, Acetal)',
    category: 'packaging',
    formula: '(CH₂O)ₙ',
    molarMass: '30.03 g/mol (repeat unit)',
    structure: 'Highly crystalline thermoplastic with repeating -CH₂-O- units',
    synthesis: 'Ring-opening polymerization of trioxane or direct polymerization of formaldehyde',
    image2D: '/src/assets/polymers/pom-2d.png',
    properties: {
      meltingPoint: '165-175°C',
      density: '1.41-1.42 g/cm³',
      tensileStrength: '60-70 MPa',
      solubility: 'Insoluble in most solvents'
    },
    uses: ['Precision gears', 'Bearings', 'Automotive parts', 'Zippers', 'Conveyor belts', 'Medical devices'],
    advantages: ['Excellent dimensional stability', 'High stiffness and hardness', 'Low friction coefficient', 'Good chemical resistance', 'Easy to machine'],
    limitations: ['Poor UV resistance', 'Susceptible to strong acids/bases', 'Limited high-temperature use', 'Formaldehyde release concern'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Recyclable but not widely done',
      toxicity: 'Low toxicity but can release formaldehyde',
      sustainability: 'Moderate - derived from fossil fuels'
    }
  },
  {
    id: 'pmma',
    name: 'Polymethyl Methacrylate (PMMA, Acrylic)',
    category: 'packaging',
    formula: '(C₅H₈O₂)ₙ',
    molarMass: '100.12 g/mol (repeat unit)',
    structure: 'Amorphous thermoplastic with ester side groups',
    synthesis: 'Free radical polymerization of methyl methacrylate',
    image2D: '/src/assets/polymers/pmma-2d.png',
    properties: {
      meltingPoint: 'Amorphous, Tg ~105°C',
      density: '1.17-1.20 g/cm³',
      tensileStrength: '48-76 MPa',
      solubility: 'Soluble in chlorinated solvents, acetone'
    },
    uses: ['Display screens', 'Light fixtures', 'Aquariums', 'Medical devices', 'Automotive lighting', 'Signs and displays'],
    advantages: ['Excellent optical clarity', 'UV resistant', 'Weatherproof', 'Easy to fabricate', 'Lightweight'],
    limitations: ['Brittle at room temperature', 'Scratches easily', 'Moderate chemical resistance', 'Flammable'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Recyclable through chemical recycling',
      toxicity: 'Non-toxic',
      sustainability: 'Moderate - petroleum-based but recyclable'
    }
  },
  {
    id: 'abs',
    name: 'Acrylonitrile Butadiene Styrene (ABS)',
    category: 'packaging',
    formula: 'Variable composition terpolymer',
    molarMass: 'Variable (20-30% acrylonitrile, 25% butadiene, 45-55% styrene)',
    structure: 'Terpolymer with rigid SAN matrix and rubbery butadiene phase',
    synthesis: 'Emulsion, suspension, or continuous mass polymerization',
    image2D: '/src/assets/polymers/abs-2d.png',
    properties: {
      meltingPoint: 'Amorphous, Tg ~105°C',
      density: '1.04-1.07 g/cm³',
      tensileStrength: '40-50 MPa',
      solubility: 'Soluble in ketones, esters'
    },
    uses: ['Automotive components', '3D printing', 'Electronic housings', 'Toys (LEGO)', 'Luggage', 'Power tool housings'],
    advantages: ['Good impact resistance', 'Excellent toughness', 'Easy to process', 'Good dimensional stability', 'Can be painted and glued'],
    limitations: ['Poor UV resistance', 'Flammable', 'Moderate chemical resistance', 'Not suitable for outdoor use'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Recyclable but separation difficult',
      toxicity: 'Low toxicity',
      sustainability: 'Low - petroleum-based, requires energy-intensive production'
    }
  },
  {
    id: 'pa6',
    name: 'Nylon 6 (PA6, Polycaprolactam)',
    category: 'packaging',
    formula: '(C₆H₁₁NO)ₙ',
    molarMass: '113.16 g/mol (repeat unit)',
    structure: 'Semi-crystalline polyamide with 6-carbon repeating units',
    synthesis: 'Ring-opening polymerization of caprolactam',
    image2D: '/src/assets/polymers/pa6-2d.png',
    properties: {
      meltingPoint: '220°C',
      density: '1.12-1.14 g/cm³',
      tensileStrength: '60-85 MPa',
      solubility: 'Soluble in formic acid, phenol'
    },
    uses: ['Textile fibers', 'Carpet', 'Engineering parts', 'Film packaging', 'Automotive components', 'Industrial yarns'],
    advantages: ['High strength and toughness', 'Excellent abrasion resistance', 'Good chemical resistance', 'Easy to dye', 'Good fatigue resistance'],
    limitations: ['Hygroscopic (absorbs moisture)', 'Dimensional changes with moisture', 'UV degradation', 'Higher cost than polyolefins'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Recyclable (type 7)',
      toxicity: 'Non-toxic',
      sustainability: 'Moderate - petroleum-based but durable'
    }
  },
  {
    id: 'pa66',
    name: 'Nylon 66 (PA66)',
    category: 'packaging',
    formula: '(C₁₂H₂₂N₂O₂)ₙ',
    molarMass: '226.32 g/mol (repeat unit)',
    structure: 'Semi-crystalline polyamide from hexamethylene diamine and adipic acid',
    synthesis: 'Condensation polymerization of hexamethylene diamine and adipic acid',
    image2D: '/src/assets/polymers/pa66-2d.png',
    properties: {
      meltingPoint: '265°C',
      density: '1.13-1.15 g/cm³',
      tensileStrength: '70-90 MPa',
      solubility: 'Soluble in formic acid, concentrated sulfuric acid'
    },
    uses: ['Automotive parts', 'Electrical connectors', 'Gears and bearings', 'Textile fibers', 'Industrial applications', 'Cable ties'],
    advantages: ['Higher melting point than PA6', 'Excellent mechanical properties', 'Good thermal stability', 'Superior stiffness', 'Chemical resistance'],
    limitations: ['More expensive than PA6', 'Hygroscopic', 'Difficult to process', 'UV sensitive'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Recyclable (type 7)',
      toxicity: 'Non-toxic',
      sustainability: 'Moderate - petroleum-based, long service life'
    }
  },
  {
    id: 'pc',
    name: 'Polycarbonate (PC)',
    category: 'packaging',
    formula: '(C₁₆H₁₄O₃)ₙ',
    molarMass: '254.28 g/mol (repeat unit)',
    structure: 'Amorphous thermoplastic with carbonate groups and bisphenol A units',
    synthesis: 'Interfacial polymerization of bisphenol A and phosgene or melt transesterification',
    image2D: '/src/assets/polymers/pc-2d.png',
    properties: {
      meltingPoint: 'Amorphous, Tg ~145°C',
      density: '1.20-1.22 g/cm³',
      tensileStrength: '55-75 MPa',
      solubility: 'Soluble in chlorinated solvents, THF'
    },
    uses: ['Eyewear lenses', 'Automotive headlamp lenses', 'Electronic components', 'Medical devices', 'Safety equipment', 'CDs and DVDs'],
    advantages: ['High impact strength', 'Excellent optical clarity', 'Good heat resistance', 'Dimensional stability', 'Self-extinguishing'],
    limitations: ['Sensitive to hydrolysis', 'Poor scratch resistance', 'Notch sensitive', 'BPA concerns', 'Expensive'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Recyclable (type 7)',
      toxicity: 'BPA leaching concerns',
      sustainability: 'Moderate - long service life but BPA concerns'
    }
  },
  {
    id: 'petg',
    name: 'PETG (PET Glycol-Modified)',
    category: 'packaging',
    formula: '(C₁₀H₈O₄)ₙ with CHDM modification',
    molarMass: '~200 g/mol (repeat unit, varies)',
    structure: 'Modified PET with cyclohexanedimethanol replacing some ethylene glycol',
    synthesis: 'Polycondensation of terephthalic acid with ethylene glycol and CHDM',
    image2D: '/src/assets/polymers/petg-2d.png',
    properties: {
      meltingPoint: 'Amorphous to low crystalline, Tg ~80°C',
      density: '1.27 g/cm³',
      tensileStrength: '50-55 MPa',
      solubility: 'Limited solubility'
    },
    uses: ['Display stands', 'Point-of-sale displays', '3D printing', 'Medical packaging', 'Protective equipment', 'Thermoforming'],
    advantages: ['Excellent clarity', 'Good impact resistance', 'Easy to thermoform', 'FDA approved', 'Chemical resistant', 'No crystallization issues'],
    limitations: ['Lower heat resistance than PET', 'More expensive than PET', 'Sensitive to UV', 'Limited barrier properties'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Recyclable with PET (type 1)',
      toxicity: 'Non-toxic, FDA approved',
      sustainability: 'Moderate - petroleum-based but recyclable'
    }
  },
  {
    id: 'evoh',
    name: 'Ethylene Vinyl Alcohol (EVOH)',
    category: 'packaging',
    formula: '(C₂H₄)ₓ(C₂H₄O)y',
    molarMass: 'Variable (copolymer)',
    structure: 'Random copolymer of ethylene and vinyl alcohol',
    synthesis: 'Hydrolysis of ethylene vinyl acetate copolymer',
    image2D: '/src/assets/polymers/evoh-2d.png',
    properties: {
      meltingPoint: '165-183°C (varies with composition)',
      density: '1.14-1.20 g/cm³',
      tensileStrength: '45-75 MPa',
      solubility: 'Water soluble at high temperatures'
    },
    uses: ['Food packaging barrier layers', 'Fuel tanks', 'Bottles for chemicals', 'Medical packaging', 'Multi-layer films'],
    advantages: ['Excellent oxygen barrier', 'Good transparency', 'Oil and grease resistance', 'Flavor protection', 'Can be recycled in multilayer systems'],
    limitations: ['Moisture sensitive', 'Poor barrier in humid conditions', 'Expensive', 'Requires protective layers'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Difficult in multilayer films',
      toxicity: 'Non-toxic',
      sustainability: 'Moderate - extends food shelf life reducing waste'
    }
  },
  {
    id: 'pva',
    name: 'Polyvinyl Alcohol (PVA, PVOH)',
    category: 'packaging',
    formula: '(C₂H₄O)ₙ',
    molarMass: '44.05 g/mol (repeat unit)',
    structure: 'Water-soluble synthetic polymer with hydroxyl groups',
    synthesis: 'Hydrolysis (saponification) of polyvinyl acetate',
    image2D: '/src/assets/polymers/pva-2d.png',
    properties: {
      meltingPoint: '180-230°C (depends on degree of hydrolysis)',
      density: '1.19-1.31 g/cm³',
      tensileStrength: '60-140 MPa (dry)',
      solubility: 'Water-soluble (temperature dependent)'
    },
    uses: ['Laundry detergent pods', 'Water-soluble films', 'Paper coatings', 'Textile sizing', 'Adhesives', 'Emulsifier'],
    advantages: ['Biodegradable', 'Water-soluble', 'Excellent film-forming', 'Good oxygen barrier when dry', 'Non-toxic'],
    limitations: ['Moisture sensitive', 'Loses properties in humid conditions', 'Moderate cost', 'Storage stability issues'],
    environmentalImpact: {
      biodegradability: 'Biodegradable in wastewater treatment',
      recyclability: 'Dissolves in water, not conventionally recycled',
      toxicity: 'Non-toxic',
      sustainability: 'High - biodegradable, reduces packaging waste'
    }
  },
  {
    id: 'lldpe',
    name: 'Linear Low-Density Polyethylene (LLDPE)',
    category: 'packaging',
    formula: '(C₂H₄)ₙ with short-chain branches',
    molarMass: '28.05 g/mol (repeat unit)',
    structure: 'Linear polymer with short side-chain branches',
    synthesis: 'Copolymerization of ethylene with α-olefins (butene, hexene, octene)',
    image2D: '/src/assets/polymers/lldpe-2d.png',
    properties: {
      meltingPoint: '122-124°C',
      density: '0.915-0.925 g/cm³',
      tensileStrength: '8-30 MPa',
      solubility: 'Insoluble in water, soluble in hot aromatics'
    },
    uses: ['Stretch wrap', 'Grocery bags', 'Food packaging', 'Agricultural films', 'Liners', 'Flexible tubing'],
    advantages: ['Better puncture resistance than LDPE', 'Higher tensile strength', 'Good chemical resistance', 'Easier processing than HDPE', 'Cost-effective'],
    limitations: ['Lower clarity than LDPE', 'Moderate heat resistance', 'Non-biodegradable', 'Limited UV resistance'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Recyclable (type 4)',
      toxicity: 'Non-toxic',
      sustainability: 'Low - fossil fuel based, but recyclable'
    }
  },
  {
    id: 'eps',
    name: 'Expanded Polystyrene (EPS)',
    category: 'packaging',
    formula: '(C₈H₈)ₙ (foamed)',
    molarMass: '104.15 g/mol (repeat unit)',
    structure: 'Foamed polystyrene with 95-98% air content',
    synthesis: 'Expansion of polystyrene beads containing pentane blowing agent',
    image2D: '/src/assets/polymers/eps-2d.png',
    properties: {
      meltingPoint: '~240°C (softens ~100°C)',
      density: '0.016-0.035 g/cm³ (foamed)',
      tensileStrength: '0.3-0.5 MPa',
      solubility: 'Dissolves in aromatic and chlorinated solvents'
    },
    uses: ['Packaging materials', 'Insulation', 'Disposable food containers', 'Coolers', 'Protective packaging', 'Construction'],
    advantages: ['Excellent cushioning', 'Very lightweight', 'Low cost', 'Good thermal insulation', 'Moisture resistant'],
    limitations: ['Not biodegradable', 'Bulky waste', 'Flammable', 'Poor recycling rates', 'Environmental persistence'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Recyclable (type 6) but rarely done',
      toxicity: 'Non-toxic but styrene residue concerns',
      sustainability: 'Low - major environmental pollutant, low recycling rate'
    }
  },
  {
    id: 'coc',
    name: 'Cyclic Olefin Copolymer (COC)',
    category: 'packaging',
    formula: 'Ethylene-(norbornene derivatives) copolymer',
    molarMass: 'Variable (copolymer)',
    structure: 'Random copolymer of ethylene and cyclic olefin monomers',
    synthesis: 'Metallocene-catalyzed copolymerization of ethylene and cyclic olefins',
    image2D: '/src/assets/polymers/coc-2d.png',
    properties: {
      meltingPoint: 'Amorphous, Tg 70-180°C (tunable)',
      density: '1.02 g/cm³',
      tensileStrength: '50-65 MPa',
      solubility: 'Soluble in aromatic and chlorinated solvents'
    },
    uses: ['Pharmaceutical packaging', 'Diagnostic devices', 'Optical components', 'Medical vials', 'High-barrier films', 'Precision molded parts'],
    advantages: ['Excellent clarity', 'Very low moisture absorption', 'High purity', 'Good barrier properties', 'Biocompatible', 'Sterilizable'],
    limitations: ['Expensive', 'Limited temperature range', 'Brittle at low temperatures', 'Difficult to bond'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Theoretically recyclable but not widely done',
      toxicity: 'Non-toxic, USP Class VI',
      sustainability: 'Moderate - petroleum-based but high value applications'
    }
  },
  {
    id: 'apet',
    name: 'Amorphous PET (APET)',
    category: 'packaging',
    formula: '(C₁₀H₈O₄)ₙ',
    molarMass: '192.17 g/mol (repeat unit)',
    structure: 'Amorphous (non-crystalline) form of polyethylene terephthalate',
    synthesis: 'Same as PET but processed to maintain amorphous state',
    image2D: '/src/assets/polymers/apet-2d.png',
    properties: {
      meltingPoint: 'Amorphous, Tg ~70°C',
      density: '1.33-1.36 g/cm³',
      tensileStrength: '50-60 MPa',
      solubility: 'Minimal solubility'
    },
    uses: ['Food trays', 'Blister packaging', 'Clamshell containers', 'Display packaging', 'Thermoformed products'],
    advantages: ['Excellent clarity', 'Good impact resistance', 'Easy to thermoform', 'FDA approved', 'Recyclable', 'Cost-effective'],
    limitations: ['Lower heat resistance than crystalline PET', 'Cannot be used for hot-fill applications', 'Moderate barrier properties'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Recyclable with PET (type 1)',
      toxicity: 'Non-toxic',
      sustainability: 'Moderate - recyclable but fossil fuel based'
    }
  },
  {
    id: 'pai',
    name: 'Polyamide-Imide (PAI)',
    category: 'packaging',
    formula: 'Complex aromatic structure',
    molarMass: 'Variable (oligomer/polymer)',
    structure: 'Thermoplastic combining amide and imide linkages',
    synthesis: 'Reaction of trimellitic anhydride with various aromatic diamines',
    image2D: '/src/assets/polymers/pai-2d.png',
    properties: {
      meltingPoint: 'Amorphous, Tg ~280°C',
      density: '1.42 g/cm³',
      tensileStrength: '120-190 MPa',
      solubility: 'Soluble in polar aprotic solvents'
    },
    uses: ['High-temperature bearings', 'Seals and gaskets', 'Aerospace components', 'Electrical connectors', 'Industrial parts', 'Valve seats'],
    advantages: ['Excellent high-temperature properties', 'Outstanding wear resistance', 'High strength', 'Chemical resistant', 'Low coefficient of friction'],
    limitations: ['Very expensive', 'Difficult to process', 'Requires high temperatures', 'Moisture sensitive', 'Limited availability'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Not recyclable',
      toxicity: 'Low toxicity',
      sustainability: 'Low - energy-intensive production, niche applications'
    }
  },
  {
    id: 'ppa',
    name: 'Polyphthalamide (PPA)',
    category: 'packaging',
    formula: 'Semi-aromatic polyamide',
    molarMass: 'Variable (based on composition)',
    structure: 'Semi-crystalline polyamide with aromatic phthalic acid units',
    synthesis: 'Polycondensation of phthalic acid with aliphatic diamines',
    image2D: '/src/assets/polymers/ppa-2d.png',
    properties: {
      meltingPoint: '290-310°C',
      density: '1.10-1.18 g/cm³',
      tensileStrength: '85-165 MPa',
      solubility: 'Limited solubility'
    },
    uses: ['Automotive under-hood parts', 'Electrical connectors', 'LED reflectors', 'Industrial components', 'Surface-mount technology', 'High-temp housings'],
    advantages: ['Higher temperature resistance than PA6/66', 'Lower moisture absorption', 'Good dimensional stability', 'Excellent chemical resistance', 'Long-term heat aging'],
    limitations: ['More expensive than standard nylons', 'Requires higher processing temperatures', 'Lower impact strength', 'Limited suppliers'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Recyclable but rarely done',
      toxicity: 'Non-toxic',
      sustainability: 'Moderate - long service life in demanding applications'
    }
  },
  {
    id: 'pps',
    name: 'Polyphenylene Sulfide (PPS)',
    category: 'packaging',
    formula: '(C₆H₄S)ₙ',
    molarMass: '108.16 g/mol (repeat unit)',
    structure: 'Semi-crystalline thermoplastic with phenylene rings and sulfur linkages',
    synthesis: 'Reaction of p-dichlorobenzene with sodium sulfide',
    image2D: '/src/assets/polymers/pps-2d.png',
    properties: {
      meltingPoint: '285°C',
      density: '1.35 g/cm³',
      tensileStrength: '65-85 MPa (unfilled)',
      solubility: 'Insoluble in most solvents below 200°C'
    },
    uses: ['Automotive fuel systems', 'Electronic components', 'Industrial filters', 'Chemical processing equipment', 'Coatings', 'Composites'],
    advantages: ['Excellent chemical resistance', 'High temperature stability', 'Inherently flame retardant', 'Dimensional stability', 'Good electrical properties'],
    limitations: ['Brittle in unfilled state', 'Expensive', 'Difficult to process', 'Poor UV resistance', 'Limited color options'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Recyclable but rarely done',
      toxicity: 'Non-toxic',
      sustainability: 'Moderate - long service life in harsh environments'
    }
  },
  // Elastomers
  {
    id: 'natural-rubber',
    name: 'Natural Rubber (Polyisoprene)',
    category: 'elastomers',
    formula: '(C₅H₈)ₙ',
    molarMass: '68.12 g/mol (repeat unit)',
    structure: 'cis-1,4-Polyisoprene with high molecular weight',
    synthesis: 'Extracted from latex of rubber trees (Hevea brasiliensis)',
    image2D: '/src/assets/polymers/natural-rubber-2d.png',
    properties: {
      density: '0.92-0.93 g/cm³',
      tensileStrength: '25-30 MPa',
      solubility: 'Soluble in aromatic and chlorinated solvents'
    },
    uses: ['Tires', 'Gloves', 'Seals and gaskets', 'Footwear', 'Industrial belts and hoses'],
    advantages: ['Excellent elasticity', 'High resilience', 'Good abrasion resistance', 'Renewable resource', 'Biodegradable'],
    limitations: ['Poor ozone and UV resistance', 'Limited oil resistance', 'Temperature sensitivity', 'Latex allergies'],
    environmentalImpact: {
      biodegradability: 'Biodegradable (slow, years to decades)',
      recyclability: 'Difficult to recycle, often downcycled',
      toxicity: 'Non-toxic but can cause allergies',
      sustainability: 'High - renewable resource from trees'
    }
  },
  {
    id: 'sbr',
    name: 'Styrene-Butadiene Rubber (SBR)',
    category: 'elastomers',
    formula: '(C₈H₈·C₄H₆)ₙ',
    molarMass: 'Variable (copolymer)',
    structure: 'Random copolymer of styrene and butadiene',
    synthesis: 'Emulsion or solution polymerization of styrene and butadiene',
    image2D: '/src/assets/polymers/sbr-2d.png',
    properties: {
      density: '0.94 g/cm³',
      tensileStrength: '20-25 MPa',
      solubility: 'Insoluble in water, soluble in organic solvents'
    },
    uses: ['Tire treads', 'Shoe soles', 'Belts and hoses', 'Gaskets', 'Floor mats'],
    advantages: ['Good abrasion resistance', 'Lower cost than natural rubber', 'Better aging than natural rubber', 'Good processability'],
    limitations: ['Lower tensile strength', 'Poor oil resistance', 'Limited heat resistance', 'Non-renewable'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Difficult to recycle',
      toxicity: 'Low toxicity',
      sustainability: 'Low - petroleum-based synthetic rubber'
    }
  },
  {
    id: 'nbr',
    name: 'Nitrile Rubber (NBR)',
    category: 'elastomers',
    formula: '(C₄H₆·C₃H₃N)ₙ',
    molarMass: 'Variable (copolymer)',
    structure: 'Copolymer of butadiene and acrylonitrile',
    synthesis: 'Emulsion polymerization of butadiene and acrylonitrile',
    image2D: '/src/assets/polymers/nbr-2d.png',
    properties: {
      density: '1.0 g/cm³',
      tensileStrength: '15-25 MPa',
      solubility: 'Insoluble in water, resistant to oils'
    },
    uses: ['Oil seals', 'O-rings', 'Fuel hoses', 'Gloves', 'Automotive gaskets'],
    advantages: ['Excellent oil resistance', 'Good abrasion resistance', 'Wide temperature range', 'Chemical resistance'],
    limitations: ['Poor ozone resistance', 'Not biodegradable', 'Limited low-temperature flexibility', 'Moderate cost'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Difficult to recycle',
      toxicity: 'Low toxicity in cured form',
      sustainability: 'Low - petroleum-based'
    }
  },
  {
    id: 'epdm',
    name: 'Ethylene Propylene Diene Monomer (EPDM)',
    category: 'elastomers',
    formula: '(C₂H₄·C₃H₆·Diene)ₙ',
    molarMass: 'Variable (terpolymer)',
    structure: 'Terpolymer of ethylene, propylene, and a diene',
    synthesis: 'Copolymerization using Ziegler-Natta catalysts',
    image2D: '/src/assets/polymers/epdm-2d.png',
    properties: {
      density: '0.86 g/cm³',
      tensileStrength: '10-20 MPa',
      solubility: 'Insoluble in water, swells in oils'
    },
    uses: ['Weather stripping', 'Roofing membranes', 'Automotive seals', 'Electrical insulation', 'Hoses'],
    advantages: ['Excellent weather resistance', 'Good ozone resistance', 'Wide temperature range', 'Electrical insulation'],
    limitations: ['Poor oil and fuel resistance', 'Limited adhesion', 'Moderate cost', 'Non-renewable'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Challenging to recycle',
      toxicity: 'Low toxicity',
      sustainability: 'Low - petroleum-based'
    }
  },
  {
    id: 'silicone-rubber',
    name: 'Silicone Rubber (PDMS)',
    category: 'elastomers',
    formula: '[Si(CH₃)₂O]ₙ',
    molarMass: '74.09 g/mol (repeat unit)',
    structure: 'Siloxane backbone with organic side groups',
    synthesis: 'Hydrolysis and polycondensation of dichlorosilanes',
    image2D: '/src/assets/polymers/silicone-rubber-2d.png',
    properties: {
      density: '0.97-1.02 g/cm³',
      tensileStrength: '6-9 MPa',
      solubility: 'Insoluble in water, swells in some solvents'
    },
    uses: ['Medical devices', 'Sealants', 'Gaskets', 'Cooking utensils', 'Electrical insulation'],
    advantages: ['Extreme temperature range (-60 to 250°C)', 'Biocompatible', 'Chemically inert', 'Flexible', 'UV resistant'],
    limitations: ['Low tensile strength', 'Expensive', 'Poor tear resistance', 'Not biodegradable'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Limited recyclability',
      toxicity: 'Very low toxicity, food safe',
      sustainability: 'Moderate - silicon abundant but energy-intensive'
    }
  },
  // Composite & Structural
  {
    id: 'gfrp',
    name: 'Glass Fiber Reinforced Polymer (GFRP)',
    category: 'composite',
    formula: 'Composite material',
    molarMass: 'N/A (composite)',
    structure: 'Glass fibers embedded in polymer matrix (typically epoxy or polyester)',
    synthesis: 'Layup, pultrusion, or molding of glass fibers with resin',
    image2D: '/src/assets/polymers/gfrp-2d.png',
    properties: {
      density: '1.5-2.0 g/cm³',
      tensileStrength: '200-500 MPa',
      solubility: 'Insoluble'
    },
    uses: ['Marine hulls', 'Automotive body panels', 'Wind turbine blades', 'Storage tanks', 'Construction materials'],
    advantages: ['High strength-to-weight ratio', 'Corrosion resistant', 'Design flexibility', 'Lower cost than carbon fiber'],
    limitations: ['Difficult to recycle', 'Brittle failure mode', 'Lower strength than carbon fiber', 'Environmental persistence'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Very difficult to recycle',
      toxicity: 'Low toxicity when cured',
      sustainability: 'Low - difficult end-of-life management'
    }
  },
  {
    id: 'cfrp',
    name: 'Carbon Fiber Reinforced Polymer (CFRP)',
    category: 'composite',
    formula: 'Composite material',
    molarMass: 'N/A (composite)',
    structure: 'Carbon fibers (graphite) embedded in polymer matrix',
    synthesis: 'Layup and curing of carbon fiber prepreg with epoxy resin',
    image2D: '/src/assets/polymers/carbon-fiber-2d.png',
    properties: {
      density: '1.5-1.6 g/cm³',
      tensileStrength: '600-1000 MPa',
      solubility: 'Insoluble'
    },
    uses: ['Aerospace structures', 'High-performance vehicles', 'Sports equipment', 'Prosthetics', 'Industrial machinery'],
    advantages: ['Exceptional strength-to-weight ratio', 'High stiffness', 'Fatigue resistant', 'Corrosion resistant'],
    limitations: ['Very expensive', 'Difficult to recycle', 'Brittle', 'Conductive (electrical issues)'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Very difficult and expensive to recycle',
      toxicity: 'Low toxicity',
      sustainability: 'Low - energy-intensive production, difficult recycling'
    }
  },
  {
    id: 'kevlar',
    name: 'Aramid Fiber (Kevlar)',
    category: 'composite',
    formula: '(C₁₄H₁₀N₂O₂)ₙ',
    molarMass: '238.24 g/mol (repeat unit)',
    structure: 'Para-aramid with aromatic polyamide structure',
    synthesis: 'Polycondensation of para-phenylenediamine and terephthaloyl chloride',
    image2D: '/src/assets/polymers/kevlar-2d.png',
    properties: {
      density: '1.44 g/cm³',
      tensileStrength: '3000-3600 MPa',
      solubility: 'Insoluble in most solvents'
    },
    uses: ['Bulletproof vests', 'Helmets', 'Tires', 'Cables', 'Aerospace components'],
    advantages: ['Extremely high strength', 'Excellent cut resistance', 'Heat resistant', 'Lightweight', 'Impact resistant'],
    limitations: ['Expensive', 'UV degradation', 'Difficult to process', 'Poor compression strength'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Difficult to recycle',
      toxicity: 'Low toxicity',
      sustainability: 'Low - complex synthesis, long-lasting applications'
    }
  },
  {
    id: 'frp-basalt',
    name: 'Basalt Fiber Reinforced Polymer',
    category: 'composite',
    formula: 'Composite material',
    molarMass: 'N/A (composite)',
    structure: 'Basalt fibers in polymer matrix',
    synthesis: 'Melting basalt rock and drawing fibers, then embedding in resin',
    image2D: '/src/assets/polymers/gfrp-2d.png',
    properties: {
      density: '1.8-2.0 g/cm³',
      tensileStrength: '300-500 MPa',
      solubility: 'Insoluble'
    },
    uses: ['Marine applications', 'Construction reinforcement', 'Automotive parts', 'Fire-resistant materials'],
    advantages: ['Good strength', 'Excellent chemical resistance', 'Fire resistant', 'Natural material', 'Better than glass fiber in many properties'],
    limitations: ['Higher cost than glass fiber', 'Limited availability', 'Difficult to recycle', 'Relatively new technology'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Difficult to recycle',
      toxicity: 'Low toxicity',
      sustainability: 'Moderate - natural rock source but energy-intensive'
    }
  },
  {
    id: 'polyimide',
    name: 'Polyimide (PI, Kapton)',
    category: 'composite',
    formula: '(C₂₂H₁₀N₂O₅)ₙ',
    molarMass: '382.33 g/mol (repeat unit)',
    structure: 'Aromatic polymer with imide linkages providing exceptional thermal stability',
    synthesis: 'Polycondensation of aromatic dianhydrides with aromatic diamines',
    image2D: '/src/assets/polymers/pi-2d.png',
    image3D: '/src/assets/polymers/pi-3d.png',
    properties: {
      meltingPoint: 'Does not melt, Tg >350°C',
      density: '1.42 g/cm³',
      tensileStrength: '230 MPa',
      solubility: 'Insoluble in most solvents'
    },
    uses: ['Flexible circuits', 'Aerospace insulation', 'High-temperature films', 'Electronic substrates', 'Wire insulation', 'Space applications'],
    advantages: ['Extreme temperature resistance (-269°C to 400°C)', 'Excellent dimensional stability', 'Outstanding chemical resistance', 'Low thermal expansion', 'Good electrical properties'],
    limitations: ['Very expensive', 'Difficult to process', 'Requires high-temperature curing', 'Limited availability', 'Hygroscopic'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Extremely difficult to recycle',
      toxicity: 'Low toxicity',
      sustainability: 'Low - complex synthesis, long service life in critical applications'
    }
  },
  {
    id: 'pei',
    name: 'Polyetherimide (PEI, Ultem)',
    category: 'composite',
    formula: '(C₃₇H₂₄N₂O₆)ₙ',
    molarMass: '592.6 g/mol (repeat unit)',
    structure: 'Amorphous thermoplastic with ether and imide linkages',
    synthesis: 'Reaction of bisphenol A dianhydride with m-phenylenediamine',
    image2D: '/src/assets/polymers/pei-2d.png',
    image3D: '/src/assets/polymers/pei-3d.png',
    properties: {
      meltingPoint: 'Amorphous, Tg ~217°C',
      density: '1.27 g/cm³',
      tensileStrength: '105 MPa',
      solubility: 'Soluble in chlorinated solvents'
    },
    uses: ['Medical devices', 'Aircraft interiors', 'Automotive under-hood', 'Food service', 'Transparent structural parts', 'Electronics housings'],
    advantages: ['High heat resistance', 'Excellent strength and stiffness', 'Transparent', 'Sterilizable', 'Flame retardant', 'Good dimensional stability'],
    limitations: ['Expensive', 'Notch sensitive', 'UV degradation', 'Chemical attack by strong bases', 'Processing requires high temperatures'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Recyclable but rarely done',
      toxicity: 'Non-toxic, FDA compliant',
      sustainability: 'Moderate - long service life in demanding applications'
    }
  },
  {
    id: 'pekk',
    name: 'Polyetherketoneketone (PEKK)',
    category: 'composite',
    formula: '(C₂₀H₁₂O₄)ₙ',
    molarMass: '316.31 g/mol (repeat unit)',
    structure: 'Semi-crystalline aromatic polymer with alternating ether and ketone groups',
    synthesis: 'Step-growth polymerization of aromatic dihalides with diphenols',
    image2D: '/src/assets/polymers/pekk-2d.png',
    image3D: '/src/assets/polymers/pekk-3d.png',
    properties: {
      meltingPoint: '305-335°C (varies with isomer ratio)',
      density: '1.30 g/cm³',
      tensileStrength: '100-110 MPa',
      solubility: 'Insoluble below 300°C'
    },
    uses: ['Aerospace structures', '3D printing (FDM)', 'Oil and gas components', 'Medical implants', 'Automotive parts', 'Chemical processing equipment'],
    advantages: ['Excellent mechanical properties', 'High chemical resistance', 'Better processability than PEEK', 'Good fatigue resistance', 'Lower crystallization rate'],
    limitations: ['Very expensive', 'Requires high processing temperatures', 'Limited suppliers', 'Moisture sensitive during processing'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Recyclable but rarely done',
      toxicity: 'Non-toxic',
      sustainability: 'Low - energy-intensive production, niche high-performance applications'
    }
  },
  {
    id: 'pes',
    name: 'Polyethersulfone (PES)',
    category: 'composite',
    formula: '(C₁₂H₈O₃S)ₙ',
    molarMass: '232.25 g/mol (repeat unit)',
    structure: 'Amorphous thermoplastic with ether and sulfone linkages',
    synthesis: 'Nucleophilic aromatic substitution of bisphenol with dichlorodiphenylsulfone',
    image2D: '/src/assets/polymers/pes-2d.png',
    image3D: '/src/assets/polymers/pes-3d.png',
    properties: {
      meltingPoint: 'Amorphous, Tg ~225°C',
      density: '1.37 g/cm³',
      tensileStrength: '84 MPa',
      solubility: 'Soluble in polar aprotic solvents'
    },
    uses: ['Filtration membranes', 'Medical devices', 'Food processing equipment', 'Automotive sensors', 'Electrical components', 'Hemodialysis membranes'],
    advantages: ['High temperature resistance', 'Excellent hydrolytic stability', 'Good toughness', 'Transparent', 'Sterilizable', 'Chemical resistant'],
    limitations: ['Expensive', 'Poor UV resistance', 'Attacked by strong bases', 'Stress cracking in some solvents', 'Limited color options'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Recyclable but not commonly done',
      toxicity: 'Non-toxic, medical grade',
      sustainability: 'Moderate - long service life in critical applications'
    }
  },
  {
    id: 'psu',
    name: 'Polysulfone (PSU)',
    category: 'composite',
    formula: '(C₂₇H₂₂O₄S)ₙ',
    molarMass: '442.53 g/mol (repeat unit)',
    structure: 'Amorphous thermoplastic with sulfone groups and bisphenol A units',
    synthesis: 'Polycondensation of bisphenol A with dichlorodiphenylsulfone',
    image2D: '/src/assets/polymers/psu-2d.png',
    image3D: '/src/assets/polymers/psu-3d.png',
    properties: {
      meltingPoint: 'Amorphous, Tg ~190°C',
      density: '1.24 g/cm³',
      tensileStrength: '70 MPa',
      solubility: 'Soluble in polar aprotic solvents'
    },
    uses: ['Medical devices', 'Food contact applications', 'Plumbing fittings', 'Microwave cookware', 'Electrical components', 'Automotive'],
    advantages: ['Good heat resistance', 'Excellent hydrolytic stability', 'Tough and rigid', 'Transparent', 'Steam sterilizable', 'Good electrical properties'],
    limitations: ['Moderate cost', 'Poor UV resistance', 'Susceptible to stress cracking', 'Limited chemical resistance to organics', 'Notch sensitive'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Recyclable',
      toxicity: 'Non-toxic, FDA approved',
      sustainability: 'Moderate - durable applications, long service life'
    }
  },
  {
    id: 'ppsu',
    name: 'Polyphenylsulfone (PPSU)',
    category: 'composite',
    formula: '(C₂₄H₁₆O₃S)ₙ',
    molarMass: '384.45 g/mol (repeat unit)',
    structure: 'Amorphous thermoplastic with phenylene and sulfone groups',
    synthesis: 'Nucleophilic aromatic substitution polymerization',
    image2D: '/src/assets/polymers/ppsu-2d.png',
    image3D: '/src/assets/polymers/ppsu-3d.png',
    properties: {
      meltingPoint: 'Amorphous, Tg ~220°C',
      density: '1.29 g/cm³',
      tensileStrength: '75 MPa',
      solubility: 'Soluble in polar aprotic solvents'
    },
    uses: ['Medical surgical instruments', 'Baby bottles', 'Aircraft interiors', 'Plumbing manifolds', 'Food processing', 'Sterilizable components'],
    advantages: ['Highest heat resistance of sulfone polymers', 'Outstanding toughness', 'Steam sterilizable (>1000 cycles)', 'Excellent hydrolytic stability', 'Transparent'],
    limitations: ['Expensive', 'Poor UV resistance', 'Limited chemical resistance to organics', 'Processing requires high temperatures'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Recyclable',
      toxicity: 'Non-toxic, medical and food grade',
      sustainability: 'Moderate - long service life in demanding sterilization applications'
    }
  },
  {
    id: 'lcp',
    name: 'Liquid Crystal Polymer (LCP)',
    category: 'composite',
    formula: 'Complex aromatic polyester',
    molarMass: 'Variable',
    structure: 'Highly ordered aromatic polyester with rigid rod-like molecules',
    synthesis: 'Polycondensation of aromatic diols and diacids',
    image2D: '/src/assets/polymers/lcp-2d.png',
    image3D: '/src/assets/polymers/lcp-3d.png',
    properties: {
      meltingPoint: '280-350°C',
      density: '1.35-1.45 g/cm³',
      tensileStrength: '130-240 MPa',
      solubility: 'Insoluble'
    },
    uses: ['High-frequency connectors', 'Surface mount technology', 'Fiber optics components', 'Medical instruments', 'Precision parts', 'LED reflectors'],
    advantages: ['Exceptional dimensional stability', 'Low coefficient of thermal expansion', 'Excellent chemical resistance', 'High strength and stiffness', 'Outstanding electrical properties'],
    limitations: ['Very expensive', 'Anisotropic properties', 'Difficult to process', 'Limited color options', 'Notch sensitive'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Difficult to recycle',
      toxicity: 'Low toxicity',
      sustainability: 'Low - high-end electronics applications, long service life'
    }
  },
  {
    id: 'pbi',
    name: 'Polybenzimidazole (PBI)',
    category: 'composite',
    formula: '(C₂₀H₁₂N₄)ₙ',
    molarMass: '308.34 g/mol (repeat unit)',
    structure: 'Aromatic heterocyclic polymer with imidazole rings',
    synthesis: 'Polycondensation of tetraaminobiphenyl with diphenyl isophthalate',
    image2D: '/src/assets/polymers/pbi-2d.png',
    image3D: '/src/assets/polymers/pbi-3d.png',
    properties: {
      meltingPoint: 'Does not melt, decomposes >600°C',
      density: '1.3 g/cm³',
      tensileStrength: '170 MPa (fiber)',
      solubility: 'Soluble only in strong acids'
    },
    uses: ['Firefighter protective clothing', 'High-temperature gaskets', 'Fuel cell membranes', 'Aerospace thermal protection', 'Welding protective gear'],
    advantages: ['Highest heat resistance of organic polymers', 'Non-flammable', 'Excellent chemical resistance', 'Good mechanical properties at high temperatures', 'Radiation resistant'],
    limitations: ['Extremely expensive', 'Very difficult to process', 'Absorbs moisture', 'Limited availability', 'Degrades in strong bases'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Not recyclable',
      toxicity: 'Low toxicity',
      sustainability: 'Low - niche life-safety applications, very long service life'
    }
  },
  {
    id: 'peek-cf',
    name: 'Carbon Fiber Reinforced PEEK (CF-PEEK)',
    category: 'composite',
    formula: 'PEEK matrix with carbon fibers',
    molarMass: 'Composite material',
    structure: 'PEEK thermoplastic matrix reinforced with continuous or chopped carbon fibers',
    synthesis: 'Impregnation of carbon fibers with PEEK resin and consolidation',
    image2D: '/src/assets/polymers/peek-cf-2d.png',
    image3D: '/src/assets/polymers/peek-cf-3d.png',
    properties: {
      meltingPoint: '343°C (PEEK matrix)',
      density: '1.4-1.5 g/cm³',
      tensileStrength: '200-400 MPa (varies with fiber content)',
      solubility: 'Insoluble'
    },
    uses: ['Aerospace structures', 'Medical implants (spinal cages)', 'Oil and gas downhole tools', 'Automotive racing parts', 'Industrial bearings'],
    advantages: ['Outstanding strength-to-weight ratio', 'Excellent chemical resistance', 'High temperature capability', 'Biocompatible', 'Recyclable thermoplastic matrix'],
    limitations: ['Very expensive', 'Difficult to process', 'Requires specialized equipment', 'Anisotropic properties', 'Limited suppliers'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Theoretically recyclable but rarely done',
      toxicity: 'Non-toxic',
      sustainability: 'Low - high-cost niche applications, very long service life'
    }
  },
  {
    id: 'ppa-gf',
    name: 'Glass-Filled Polyphthalamide (GF-PPA)',
    category: 'composite',
    formula: 'PPA matrix with glass fibers',
    molarMass: 'Composite material',
    structure: 'Semi-aromatic polyamide reinforced with short glass fibers (30-50%)',
    synthesis: 'Compounding of PPA resin with chopped glass fibers',
    image2D: '/src/assets/polymers/ppa-gf-2d.png',
    image3D: '/src/assets/polymers/ppa-gf-3d.png',
    properties: {
      meltingPoint: '290-310°C',
      density: '1.4-1.5 g/cm³',
      tensileStrength: '150-200 MPa',
      solubility: 'Insoluble'
    },
    uses: ['Automotive connectors', 'LED lighting components', 'Water pump housings', 'Turbocharger components', 'Industrial electrical parts'],
    advantages: ['Excellent high-temperature strength', 'Low moisture absorption', 'Good dimensional stability', 'Chemical resistance', 'Lower cost than unfilled'],
    limitations: ['Expensive compared to PA6/66', 'Anisotropic properties', 'Surface finish issues', 'Difficult to bond or paint'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Difficult due to glass fibers',
      toxicity: 'Non-toxic',
      sustainability: 'Moderate - long service life in demanding automotive applications'
    }
  },
  {
    id: 'cfrp',
    name: 'Carbon Fiber Reinforced Polymer (CFRP)',
    category: 'composite',
    formula: 'Epoxy or other matrix with carbon fibers',
    molarMass: 'Composite material',
    structure: 'High-strength carbon fibers embedded in thermoset or thermoplastic matrix',
    synthesis: 'Layup of carbon fiber fabric/prepreg followed by curing under heat and pressure',
    image2D: '/src/assets/polymers/cfrp-2d.png',
    image3D: '/src/assets/polymers/cfrp-3d.png',
    properties: {
      density: '1.5-1.6 g/cm³',
      tensileStrength: '600-1000 MPa',
      solubility: 'Insoluble'
    },
    uses: ['Aerospace structures', 'High-performance automotive', 'Sports equipment', 'Wind turbine blades', 'Bicycle frames', 'Marine racing'],
    advantages: ['Exceptional strength-to-weight ratio', 'High stiffness', 'Fatigue resistant', 'Corrosion resistant', 'Tailorable properties'],
    limitations: ['Very expensive', 'Difficult to repair', 'Anisotropic properties', 'Conductive (lightning strike issue)', 'Energy-intensive production'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Very difficult and expensive to recycle',
      toxicity: 'Low toxicity when cured',
      sustainability: 'Low - high embodied energy, difficult end-of-life management'
    }
  },
  {
    id: 'aramid-composite',
    name: 'Aramid Fiber Composite (Kevlar Composite)',
    category: 'composite',
    formula: 'Epoxy matrix with aramid fibers',
    molarMass: 'Composite material',
    structure: 'Para-aramid (Kevlar) fibers embedded in epoxy or vinyl ester resin',
    synthesis: 'Wet layup or prepreg processing of aramid fabric with resin',
    image2D: '/src/assets/polymers/aramid-composite-2d.png',
    image3D: '/src/assets/polymers/aramid-composite-3d.png',
    properties: {
      density: '1.38-1.45 g/cm³',
      tensileStrength: '3000-3600 MPa (fiber)',
      solubility: 'Insoluble'
    },
    uses: ['Body armor', 'Ballistic helmets', 'Cut-resistant gloves', 'Aerospace honeycomb cores', 'Pressure vessels', 'Marine hulls'],
    advantages: ['Outstanding impact resistance', 'Excellent strength-to-weight ratio', 'High energy absorption', 'Good fatigue resistance', 'Does not conduct electricity'],
    limitations: ['Expensive', 'Difficult to cut and machine', 'Poor compression strength', 'UV sensitive', 'Absorbs moisture'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Very difficult to recycle',
      toxicity: 'Low toxicity',
      sustainability: 'Low - niche protective applications, very long service life'
    }
  },
  {
    id: 'paek',
    name: 'Polyaryletherketone (PAEK)',
    category: 'composite',
    formula: '(C₁₉H₁₂O₃)ₙ',
    molarMass: '288.3 g/mol (repeat unit)',
    structure: 'Family of semi-crystalline polymers with aromatic ether and ketone groups',
    synthesis: 'Nucleophilic aromatic substitution reactions',
    image2D: '/src/assets/polymers/paek-2d.png',
    image3D: '/src/assets/polymers/paek-3d.png',
    properties: {
      meltingPoint: '330-380°C (varies with exact structure)',
      density: '1.28-1.32 g/cm³',
      tensileStrength: '90-110 MPa',
      solubility: 'Insoluble below 300°C'
    },
    uses: ['Aerospace components', 'Oil and gas applications', 'Medical devices', 'Automotive under-hood', 'Industrial seals', 'Electrical insulators'],
    advantages: ['Exceptional temperature resistance', 'Excellent chemical resistance', 'Good mechanical properties', 'Radiation resistant', 'Biocompatible'],
    limitations: ['Very expensive', 'Difficult to process', 'Limited color options', 'Requires high processing temperatures', 'Moisture sensitive during processing'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Recyclable but rarely done',
      toxicity: 'Non-toxic',
      sustainability: 'Low - energy-intensive production, niche high-performance applications'
    }
  },
  {
    id: 'bfrp',
    name: 'Basalt Fiber Reinforced Polymer (BFRP)',
    category: 'composite',
    formula: 'Polymer matrix with basalt fibers',
    molarMass: 'Composite material',
    structure: 'Natural basalt rock fibers embedded in epoxy, vinyl ester, or polyester resin',
    synthesis: 'Melting basalt rock at 1400°C, drawing fibers, then impregnating with resin',
    image2D: '/src/assets/polymers/bfrp-2d.png',
    image3D: '/src/assets/polymers/bfrp-3d.png',
    properties: {
      density: '1.8-2.0 g/cm³',
      tensileStrength: '300-500 MPa',
      solubility: 'Insoluble'
    },
    uses: ['Marine applications', 'Construction reinforcement', 'Automotive parts', 'Corrosion-resistant structures', 'Fire-resistant applications'],
    advantages: ['Good strength-to-weight ratio', 'Excellent chemical resistance', 'High temperature resistance', 'Non-toxic', 'Natural material', 'Wider temperature range than glass fiber'],
    limitations: ['Higher cost than glass fiber', 'Limited availability', 'Lower strength than carbon fiber', 'Difficult to recycle', 'Relatively new technology'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Difficult to recycle',
      toxicity: 'Low toxicity, no carcinogenic fibers',
      sustainability: 'Moderate - natural abundant resource but energy-intensive processing'
    }
  },
  {
    id: 'phenolic-composite',
    name: 'Phenolic Resin Composite',
    category: 'composite',
    formula: 'Phenol-formaldehyde network',
    molarMass: 'Cross-linked thermoset',
    structure: 'Cross-linked phenol-formaldehyde resin, often reinforced with fibers',
    synthesis: 'Condensation of phenol and formaldehyde with heat and pressure',
    image2D: '/src/assets/polymers/phenolic-composite-2d.png',
    image3D: '/src/assets/polymers/phenolic-composite-3d.png',
    properties: {
      meltingPoint: 'Thermoset, does not melt',
      density: '1.2-1.4 g/cm³',
      tensileStrength: '40-60 MPa',
      solubility: 'Insoluble'
    },
    uses: ['Electrical insulators', 'Circuit boards', 'Brake pads', 'Adhesives', 'Molding compounds', 'Foundry sand binders'],
    advantages: ['Excellent fire resistance', 'Low smoke generation', 'Good electrical insulation', 'Low cost', 'Dimensional stability', 'Chemical resistant'],
    limitations: ['Brittle', 'Dark color only', 'Formaldehyde emissions during curing', 'Cannot be remolded', 'Poor impact strength'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Not recyclable (thermoset)',
      toxicity: 'Formaldehyde emissions concern',
      sustainability: 'Moderate - long service life but formaldehyde environmental concerns'
    }
  },
  {
    id: 'pps-composite',
    name: 'Glass-Filled PPS Composite',
    category: 'composite',
    formula: 'PPS matrix with glass fibers',
    molarMass: 'Composite material',
    structure: 'Semi-crystalline PPS reinforced with short glass fibers (20-50%)',
    synthesis: 'Compounding of PPS resin with chopped glass fibers',
    image2D: '/src/assets/polymers/ppsx-2d.png',
    image3D: '/src/assets/polymers/ppsx-3d.png',
    properties: {
      meltingPoint: '285°C',
      density: '1.5-1.65 g/cm³',
      tensileStrength: '130-170 MPa',
      solubility: 'Insoluble'
    },
    uses: ['Automotive fuel systems', 'Electronic connectors', 'Pump housings', 'Chemical processing equipment', 'Industrial filters', 'Under-hood automotive parts'],
    advantages: ['Excellent chemical resistance', 'High temperature stability', 'Inherently flame retardant', 'Dimensional stability', 'Low moisture absorption'],
    limitations: ['Expensive', 'Brittle without reinforcement', 'Anisotropic properties', 'Poor UV resistance', 'Surface finish challenges'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Difficult due to glass fibers',
      toxicity: 'Non-toxic',
      sustainability: 'Moderate - long service life in harsh chemical environments'
    }
  },
  {
    id: 'ptfe-composite',
    name: 'PTFE Composite (Filled Teflon)',
    category: 'composite',
    formula: 'PTFE with fillers',
    molarMass: 'Composite material',
    structure: 'PTFE matrix filled with glass fiber, carbon, bronze, or other materials',
    synthesis: 'Mixing PTFE powder with fillers followed by sintering',
    image2D: '/src/assets/polymers/ptfe-2d.png',
    image3D: '/src/assets/polymers/ptfe-3d.png',
    properties: {
      meltingPoint: '327°C (PTFE)',
      density: '2.1-2.3 g/cm³',
      tensileStrength: '20-35 MPa',
      solubility: 'Insoluble in all solvents'
    },
    uses: ['Seals and gaskets', 'Bearings', 'Valve seats', 'Piston rings', 'Chemical processing equipment', 'Electrical insulators'],
    advantages: ['Extremely low friction', 'Excellent chemical resistance', 'Wide temperature range', 'Non-stick properties', 'Improved wear resistance vs unfilled'],
    limitations: ['Expensive', 'Difficult to process', 'Poor mechanical properties', 'Cold flow (creep)', 'Difficult to bond'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Not recyclable',
      toxicity: 'Non-toxic at normal temperatures',
      sustainability: 'Low - very long service life but PFAS environmental concerns'
    }
  },
  // Recyclable/Green Polymers
  {
    id: 'rpet',
    name: 'Recycled PET (rPET)',
    category: 'recyclable',
    formula: '(C₁₀H₈O₄)ₙ',
    molarMass: '192.17 g/mol (repeat unit)',
    structure: 'Same as virgin PET, mechanically or chemically recycled',
    synthesis: 'Mechanical recycling (sorting, washing, melting) or chemical depolymerization',
    image2D: '/src/assets/polymers/rpet-2d.png',
    properties: {
      meltingPoint: '250-260°C',
      density: '1.38-1.41 g/cm³',
      tensileStrength: '45-70 MPa (may be slightly lower than virgin)',
      solubility: 'Same as virgin PET'
    },
    uses: ['Bottles', 'Textile fibers (fleece)', 'Packaging', 'Carpet fibers', 'Automotive parts'],
    advantages: ['Reduces plastic waste', 'Lower carbon footprint than virgin PET', 'Similar properties', 'Widely available', 'Circular economy'],
    limitations: ['Quality degradation after multiple cycles', 'Contamination issues', 'Sorting challenges', 'Energy-intensive recycling'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Highly recyclable (multiple cycles possible)',
      toxicity: 'Low toxicity',
      sustainability: 'High - reduces virgin plastic demand, closes material loop'
    }
  },
  {
    id: 'rhdpe',
    name: 'Recycled HDPE (rHDPE)',
    category: 'recyclable',
    formula: '(C₂H₄)ₙ',
    molarMass: '28.05 g/mol (repeat unit)',
    structure: 'Linear polyethylene, recycled from post-consumer or post-industrial sources',
    synthesis: 'Mechanical recycling: collection, sorting, cleaning, shredding, melting, pelletizing',
    image2D: '/src/assets/polymers/rhdpe-2d.png',
    properties: {
      meltingPoint: '120-130°C',
      density: '0.941-0.965 g/cm³',
      tensileStrength: '22-30 MPa',
      solubility: 'Same as virgin HDPE'
    },
    uses: ['Bottles', 'Trash bins', 'Lumber replacement', 'Piping', 'Packaging'],
    advantages: ['Reduces landfill waste', 'Lower energy than virgin production', 'Good properties retention', 'Well-established recycling'],
    limitations: ['Property degradation', 'Color limitations', 'Contamination sensitivity', 'Limited food-grade applications'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Highly recyclable',
      toxicity: 'Non-toxic',
      sustainability: 'High - diverts waste, conserves resources'
    }
  },
  {
    id: 'rpp',
    name: 'Recycled Polypropylene (rPP)',
    category: 'recyclable',
    formula: '(C₃H₆)ₙ',
    molarMass: '42.08 g/mol (repeat unit)',
    structure: 'Same as virgin PP, recycled',
    synthesis: 'Mechanical or advanced recycling from post-consumer/industrial waste',
    image2D: '/src/assets/polymers/pp-2d.png',
    properties: {
      meltingPoint: '130-171°C',
      density: '0.895-0.92 g/cm³',
      tensileStrength: '25-35 MPa',
      solubility: 'Insoluble in cold solvents'
    },
    uses: ['Automotive parts', 'Containers', 'Textile fibers', 'Furniture', 'Packaging'],
    advantages: ['Reduces waste', 'Good property retention', 'Lightweight', 'Chemical resistance', 'Lower carbon footprint'],
    limitations: ['Quality varies', 'Degradation over cycles', 'Sorting challenges', 'Lower acceptance than rPET'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Recyclable (improving infrastructure)',
      toxicity: 'Non-toxic',
      sustainability: 'High - circular economy, resource conservation'
    }
  },
  {
    id: 'green-pe',
    name: 'Green Polyethylene',
    category: 'recyclable',
    formula: '(C₂H₄)ₙ',
    molarMass: '28.05 g/mol (repeat unit)',
    structure: 'Identical to conventional PE but from renewable sources',
    synthesis: 'Polymerization of bio-ethylene from sugarcane or other biomass',
    image2D: '/src/assets/polymers/bio-pe-2d.png',
    properties: {
      meltingPoint: '105-135°C',
      density: '0.91-0.97 g/cm³',
      tensileStrength: '8-33 MPa',
      solubility: 'Same as fossil PE'
    },
    uses: ['Packaging', 'Bottles', 'Films', 'Bags', 'All PE applications'],
    advantages: ['Renewable carbon', 'Carbon negative during growth', 'Drop-in replacement', 'Recyclable', 'Reduces fossil fuel use'],
    limitations: ['Land use concerns', 'Not biodegradable', 'Higher cost', 'Limited production capacity'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Fully recyclable with conventional PE',
      toxicity: 'Non-toxic',
      sustainability: 'Very high - renewable, sequesters CO₂'
    }
  },
  {
    id: 'ocean-plastic',
    name: 'Ocean Plastic Recycled Polymer',
    category: 'recyclable',
    formula: 'Mixed (primarily PE, PP, PET)',
    molarMass: 'Variable',
    structure: 'Blend of recycled ocean-collected plastics',
    synthesis: 'Collection from oceans, sorting, cleaning, processing into usable material',
    image2D: '/src/assets/polymers/rpet-2d.png',
    properties: {
      density: 'Variable (0.9-1.4 g/cm³)',
      tensileStrength: 'Variable (20-50 MPa)',
      solubility: 'Depends on composition'
    },
    uses: ['Consumer products', 'Packaging', 'Textiles', 'Furniture', 'Accessories'],
    advantages: ['Removes ocean pollution', 'Raises awareness', 'Creates value from waste', 'Circular economy'],
    limitations: ['Inconsistent quality', 'High collection costs', 'Contamination', 'Degraded properties', 'Limited scalability'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Variable depending on composition',
      toxicity: 'Requires testing due to contamination',
      sustainability: 'Very high - environmental cleanup, waste valorization'
    }
  },
  // Additional Biodegradable Polymers
  {
    id: 'pla-biodeg',
    name: 'Polylactic Acid (PLA) - Biodegradable',
    category: 'biodegradable',
    formula: '(C₃H₄O₂)ₙ',
    molarMass: '72.06 g/mol (repeat unit)',
    structure: 'Aliphatic polyester derived from renewable resources',
    synthesis: 'Ring-opening polymerization of lactide from fermented plant starch',
    image2D: '/src/assets/polymers/pla-2d.png',
    properties: {
      meltingPoint: '150-160°C',
      density: '1.24 g/cm³',
      tensileStrength: '50-70 MPa',
      solubility: 'Insoluble in water, soluble in chlorinated solvents'
    },
    uses: ['3D printing', 'Food packaging', 'Medical implants', 'Disposable cutlery', 'Agricultural films'],
    advantages: ['Bio-based and biodegradable', 'Good mechanical properties', 'Transparent', 'Compostable', 'Low toxicity'],
    limitations: ['Low heat resistance', 'Brittle', 'Slow degradation without industrial composting', 'Moisture sensitive'],
    environmentalImpact: {
      biodegradability: 'Biodegradable in industrial composting (3-6 months)',
      recyclability: 'Technically recyclable but limited infrastructure',
      toxicity: 'Non-toxic',
      sustainability: 'Very high - renewable, compostable, carbon neutral'
    }
  },
  {
    id: 'pcl-biodeg',
    name: 'Polycaprolactone (PCL) - Biodegradable',
    category: 'biodegradable',
    formula: '(C₆H₁₀O₂)ₙ',
    molarMass: '114.14 g/mol (repeat unit)',
    structure: 'Aliphatic polyester with slow degradation rate',
    synthesis: 'Ring-opening polymerization of ε-caprolactone',
    image2D: '/src/assets/polymers/pcl-biomed-2d.png',
    properties: {
      meltingPoint: '58-60°C',
      density: '1.145 g/cm³',
      tensileStrength: '16-20 MPa',
      solubility: 'Soluble in chloroform, methylene chloride'
    },
    uses: ['Drug delivery', 'Tissue engineering', 'Biodegradable sutures', '3D printing', 'Packaging'],
    advantages: ['Excellent biocompatibility', 'Slow degradation (2-4 years)', 'Good processability', 'Blends well with other polymers'],
    limitations: ['Low melting point', 'Slow degradation', 'Limited mechanical strength', 'Hydrophobic'],
    environmentalImpact: {
      biodegradability: 'Fully biodegradable (2-4 years in soil)',
      recyclability: 'Limited',
      toxicity: 'Non-toxic, biocompatible',
      sustainability: 'High - biodegradable, used in medical applications'
    }
  },
  {
    id: 'pbat-biodeg',
    name: 'PBAT - Biodegradable Copolyester',
    category: 'biodegradable',
    formula: '(C₁₆H₁₈O₆)ₙ',
    molarMass: '306.31 g/mol (average)',
    structure: 'Random copolyester of adipic acid, terephthalic acid, and butanediol',
    synthesis: 'Polycondensation reaction',
    image2D: '/src/assets/polymers/pbat-2d.png',
    properties: {
      meltingPoint: '110-120°C',
      density: '1.25-1.27 g/cm³',
      tensileStrength: '15-35 MPa',
      solubility: 'Insoluble in water'
    },
    uses: ['Compostable bags', 'Mulch films', 'Food packaging', 'Flexible films', 'Coatings'],
    advantages: ['Flexible like LDPE', 'Compostable', 'Good processability', 'Blends well with PLA'],
    limitations: ['Higher cost', 'Requires industrial composting', 'Lower strength than conventional plastics'],
    environmentalImpact: {
      biodegradability: 'Fully biodegradable (EN 13432 certified, 3-6 months)',
      recyclability: 'Limited due to biodegradable nature',
      toxicity: 'Non-toxic',
      sustainability: 'High - biodegradable alternative to conventional plastics'
    }
  },
  {
    id: 'pbs-biodeg',
    name: 'Polybutylene Succinate (PBS)',
    category: 'biodegradable',
    formula: '(C₈H₁₂O₄)ₙ',
    molarMass: '172.18 g/mol (repeat unit)',
    structure: 'Aliphatic polyester',
    synthesis: 'Polycondensation of succinic acid and 1,4-butanediol',
    image2D: '/src/assets/polymers/pbs-2d.png',
    properties: {
      meltingPoint: '90-120°C',
      density: '1.26 g/cm³',
      tensileStrength: '30-50 MPa',
      solubility: 'Insoluble in water'
    },
    uses: ['Packaging', 'Agricultural mulch', 'Disposable products', 'Fibers', 'Medical uses'],
    advantages: ['Good mechanical properties', 'Processable like conventional plastics', 'Can be bio-based', 'Heat sealable'],
    limitations: ['Higher cost', 'Limited availability', 'Hydrolysis susceptibility'],
    environmentalImpact: {
      biodegradability: 'Biodegradable in soil and compost',
      recyclability: 'Limited',
      toxicity: 'Non-toxic',
      sustainability: 'Very high - can be fully bio-based'
    }
  },
  {
    id: 'pha-biodeg',
    name: 'Polyhydroxyalkanoate (PHA)',
    category: 'biodegradable',
    formula: '[-O-CHR-CH₂-CO-]ₙ',
    molarMass: '86-100 g/mol (repeat unit)',
    structure: 'Polyester produced by bacterial fermentation',
    synthesis: 'Bacterial fermentation of sugars or lipids',
    image2D: '/src/assets/polymers/pha-2d.png',
    properties: {
      meltingPoint: '170-180°C (PHB)',
      density: '1.18-1.26 g/cm³',
      tensileStrength: '24-40 MPa',
      solubility: 'Insoluble in water, soluble in chloroform'
    },
    uses: ['Packaging', 'Medical devices', 'Agricultural films', 'Disposable items', 'Marine applications'],
    advantages: ['Fully biodegradable', 'Bio-based', 'Similar properties to PP', 'Biodegrades in ocean', 'Compostable'],
    limitations: ['Expensive', 'Brittle', 'Limited production scale', 'Thermal instability'],
    environmentalImpact: {
      biodegradability: 'Fully biodegradable (weeks to months in various environments)',
      recyclability: 'Compostable',
      toxicity: 'Non-toxic',
      sustainability: 'Very high - bio-based, biodegrades in nature'
    }
  },
  // Additional Biopolymers
  {
    id: 'chitin-bio',
    name: 'Chitin',
    category: 'biopolymers',
    formula: '(C₈H₁₃NO₅)ₙ',
    molarMass: '203.19 g/mol (repeat unit)',
    structure: 'Linear polysaccharide of N-acetylglucosamine',
    synthesis: 'Extracted from crustacean shells, insect exoskeletons, or fungal cell walls',
    image2D: '/src/assets/polymers/chitin-2d.png',
    properties: {
      density: '1.4 g/cm³',
      solubility: 'Insoluble in water and common solvents',
      tensileStrength: '40-50 MPa (crystalline)'
    },
    uses: ['Wound dressings', 'Food packaging films', 'Water treatment', 'Cosmetics', 'Agricultural applications'],
    advantages: ['Abundant natural polymer', 'Biocompatible', 'Biodegradable', 'Antimicrobial', 'Non-toxic'],
    limitations: ['Insoluble', 'Difficult to process', 'Requires chemical modification', 'Brittle'],
    environmentalImpact: {
      biodegradability: 'Fully biodegradable',
      recyclability: 'Compostable',
      toxicity: 'Non-toxic',
      sustainability: 'Very high - abundant waste from seafood industry'
    }
  },
  {
    id: 'chitosan-bio',
    name: 'Chitosan',
    category: 'biopolymers',
    formula: '(C₆H₁₁NO₄)ₙ',
    molarMass: '161.16 g/mol (repeat unit)',
    structure: 'Deacetylated chitin with glucosamine units',
    synthesis: 'Deacetylation of chitin using alkaline treatment',
    image2D: '/src/assets/polymers/chitosan-2d.png',
    properties: {
      density: '1.4 g/cm³',
      solubility: 'Soluble in acidic solutions',
      tensileStrength: '30-40 MPa'
    },
    uses: ['Wound healing', 'Drug delivery', 'Water treatment', 'Food preservation', 'Tissue engineering'],
    advantages: ['Biocompatible', 'Biodegradable', 'Antimicrobial', 'Soluble in acids', 'Hemostatic'],
    limitations: ['pH dependent', 'Limited mechanical strength', 'Moisture sensitivity'],
    environmentalImpact: {
      biodegradability: 'Fully biodegradable',
      recyclability: 'Compostable',
      toxicity: 'Non-toxic',
      sustainability: 'Very high - from renewable sources'
    }
  },
  {
    id: 'collagen-bio',
    name: 'Collagen',
    category: 'biopolymers',
    formula: '(Gly-X-Y)ₙ',
    molarMass: '~300,000 g/mol',
    structure: 'Triple helix protein structure',
    synthesis: 'Extracted from animal tissues (skin, bones, tendons)',
    image2D: '/src/assets/polymers/collagen-2d.png',
    properties: {
      density: '1.3 g/cm³',
      solubility: 'Soluble in acidic solutions',
      tensileStrength: '50-100 MPa (tissue dependent)'
    },
    uses: ['Tissue engineering', 'Wound dressings', 'Cosmetics', 'Food casings', 'Surgical sutures'],
    advantages: ['Excellent biocompatibility', 'Promotes cell adhesion', 'Biodegradable', 'Natural ECM component'],
    limitations: ['Animal-derived', 'Batch variability', 'Immunogenic potential', 'Expensive'],
    environmentalImpact: {
      biodegradability: 'Fully biodegradable',
      recyclability: 'Compostable',
      toxicity: 'Non-toxic',
      sustainability: 'Moderate - animal source, but uses byproducts'
    }
  },
  {
    id: 'gelatin-bio',
    name: 'Gelatin',
    category: 'biopolymers',
    formula: 'Derived from collagen',
    molarMass: '15,000-400,000 g/mol',
    structure: 'Denatured collagen protein',
    synthesis: 'Hydrolysis of collagen from animal tissues',
    image2D: '/src/assets/polymers/gelatin-2d.png',
    properties: {
      density: '1.4 g/cm³',
      solubility: 'Soluble in hot water',
      tensileStrength: '20-40 MPa (film)'
    },
    uses: ['Food industry', 'Pharmaceuticals (capsules)', 'Photography', 'Cosmetics', 'Biomedical scaffolds'],
    advantages: ['Biodegradable', 'Biocompatible', 'Gelling properties', 'Edible', 'Low cost'],
    limitations: ['Temperature sensitive', 'Animal-derived', 'Poor mechanical properties', 'Requires crosslinking'],
    environmentalImpact: {
      biodegradability: 'Fully biodegradable',
      recyclability: 'Compostable',
      toxicity: 'Non-toxic',
      sustainability: 'Moderate - uses animal byproducts'
    }
  },
  {
    id: 'alginate-bio',
    name: 'Alginate',
    category: 'biopolymers',
    formula: '(C₆H₈O₆)ₙ',
    molarMass: '176.13 g/mol (average repeat unit)',
    structure: 'Linear polysaccharide from seaweed',
    synthesis: 'Extracted from brown seaweed',
    image2D: '/src/assets/polymers/alginate-2d.png',
    properties: {
      density: '1.6 g/cm³',
      solubility: 'Soluble in water (forms viscous solution)',
      tensileStrength: '30-50 MPa (depends on crosslinking)'
    },
    uses: ['Wound dressings', 'Food thickener', 'Drug delivery', 'Cell encapsulation', 'Dental impressions'],
    advantages: ['Biocompatible', 'Biodegradable', 'Gels with calcium', 'Marine-derived', 'Non-toxic'],
    limitations: ['Weak mechanical properties', 'Dissolves in chelating agents', 'Batch variability'],
    environmentalImpact: {
      biodegradability: 'Fully biodegradable',
      recyclability: 'Compostable',
      toxicity: 'Non-toxic',
      sustainability: 'Very high - renewable marine resource'
    }
  },
  {
    id: 'silk-fibroin-bio',
    name: 'Silk Fibroin',
    category: 'biopolymers',
    formula: '(Gly-Ala-Gly-Ala-Gly-Ser)ₙ',
    molarMass: '~370,000 g/mol',
    structure: 'Protein with β-sheet crystalline structure',
    synthesis: 'Extracted from silkworm cocoons or spider silk',
    image2D: '/src/assets/polymers/silk-fibroin-2d.png',
    properties: {
      density: '1.25 g/cm³',
      tensileStrength: '300-740 MPa (fiber)',
      solubility: 'Soluble in harsh conditions (LiBr solution)'
    },
    uses: ['Biomedical sutures', 'Tissue engineering', 'Drug delivery', 'Textiles', 'Cosmetics'],
    advantages: ['Excellent biocompatibility', 'High strength', 'Biodegradable', 'Low immunogenicity', 'Processable'],
    limitations: ['Expensive', 'Limited availability', 'Slow production', 'Requires dissolution for processing'],
    environmentalImpact: {
      biodegradability: 'Fully biodegradable',
      recyclability: 'Compostable',
      toxicity: 'Non-toxic',
      sustainability: 'High - renewable, requires minimal processing'
    }
  },
  {
    id: 'bacterial-cellulose-bio',
    name: 'Bacterial Cellulose',
    category: 'biopolymers',
    formula: '(C₆H₁₀O₅)ₙ',
    molarMass: '162.14 g/mol (repeat unit)',
    structure: 'Pure cellulose produced by bacteria',
    synthesis: 'Bacterial fermentation (Komagataeibacter)',
    image2D: '/src/assets/polymers/bacterial-cellulose-2d.png',
    properties: {
      density: '1.5 g/cm³',
      tensileStrength: '200-300 MPa',
      solubility: 'Insoluble in water and most solvents'
    },
    uses: ['Wound dressings', 'Audio speakers', 'Food products', 'Paper', 'Tissue engineering'],
    advantages: ['High purity', 'High crystallinity', 'Biocompatible', 'Moldable when wet', 'High water holding capacity'],
    limitations: ['Expensive production', 'Slow growth', 'Difficult to scale', 'Requires sterilization'],
    environmentalImpact: {
      biodegradability: 'Fully biodegradable',
      recyclability: 'Compostable',
      toxicity: 'Non-toxic',
      sustainability: 'High - bio-produced, renewable'
    }
  },
  // Additional Shape Memory Polymers
  {
    id: 'pu-smp-detailed',
    name: 'Polyurethane Shape Memory Polymer',
    category: 'shape-memory',
    formula: 'R-NHCOO-R\' (segmented)',
    molarMass: 'Variable',
    structure: 'Segmented polymer with hard and soft segments',
    synthesis: 'Polyaddition of diisocyanates with polyols',
    image2D: '/src/assets/polymers/pu-smp-2d.png',
    properties: {
      meltingPoint: '40-70°C (transition temperature)',
      density: '1.0-1.2 g/cm³',
      tensileStrength: '30-60 MPa',
      solubility: 'Varies with formulation'
    },
    uses: ['Medical stents', 'Actuators', 'Smart textiles', 'Self-deploying structures', 'Aerospace applications'],
    advantages: ['Programmable transition temperature', 'Good mechanical properties', 'Biocompatible versions available', 'Easy processing'],
    limitations: ['Limited recovery stress', 'Can degrade over time', 'Expensive', 'Temperature dependent'],
    environmentalImpact: {
      biodegradability: 'Generally non-biodegradable',
      recyclability: 'Difficult to recycle',
      toxicity: 'Low toxicity when cured',
      sustainability: 'Moderate - extends product life but petroleum-based'
    }
  },
  {
    id: 'pcl-smp-detailed',
    name: 'PCL-based Shape Memory Polymer',
    category: 'shape-memory',
    formula: '(C₆H₁₀O₂)ₙ',
    molarMass: '114.14 g/mol (repeat unit)',
    structure: 'Semi-crystalline polyester with shape memory effect',
    synthesis: 'Ring-opening polymerization with specific molecular weight control',
    image2D: '/src/assets/polymers/pcl-smp-2d.png',
    properties: {
      meltingPoint: '55-60°C (transition)',
      density: '1.145 g/cm³',
      tensileStrength: '16-20 MPa',
      solubility: 'Soluble in chloroform'
    },
    uses: ['Biomedical devices', 'Self-tightening sutures', 'Drug delivery', 'Tissue engineering', 'Minimally invasive surgery'],
    advantages: ['Biocompatible and biodegradable', 'Body temperature activation', 'Good shape recovery', 'FDA approved'],
    limitations: ['Low mechanical strength', 'Slow degradation', 'Limited to body temperature applications', 'Expensive'],
    environmentalImpact: {
      biodegradability: 'Biodegradable (2-4 years)',
      recyclability: 'Limited',
      toxicity: 'Non-toxic, biocompatible',
      sustainability: 'High - biodegradable medical applications'
    }
  },
  {
    id: 'epoxy-smp',
    name: 'Epoxy-based Shape Memory Polymer',
    category: 'shape-memory',
    formula: 'Crosslinked epoxy network',
    molarMass: 'N/A (thermoset)',
    structure: 'Crosslinked network with dynamic or fixed netpoints',
    synthesis: 'Curing of epoxy resins with specific crosslink density',
    image2D: '/src/assets/polymers/epoxy-2d.png',
    properties: {
      meltingPoint: '40-150°C (glass transition)',
      density: '1.1-1.4 g/cm³',
      tensileStrength: '40-90 MPa',
      solubility: 'Insoluble (thermoset)'
    },
    uses: ['Aerospace deployable structures', 'Self-healing composites', 'Morphing wings', 'Sensors', 'Actuators'],
    advantages: ['High recovery stress', 'Excellent shape fixity', 'Good mechanical properties', 'Tunable transition temperature'],
    limitations: ['Cannot be remolded', 'One-time programming', 'Brittle', 'Not biodegradable'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Not recyclable (thermoset)',
      toxicity: 'Low toxicity when cured',
      sustainability: 'Low - difficult end-of-life management'
    }
  },
  {
    id: 'styrene-smp',
    name: 'Styrene-based Shape Memory Polymer',
    category: 'shape-memory',
    formula: '(C₈H₈)ₙ based',
    molarMass: 'Variable',
    structure: 'Block copolymer with hard polystyrene segments',
    synthesis: 'Block copolymerization',
    image2D: '/src/assets/polymers/ps-2d.png',
    properties: {
      meltingPoint: '60-100°C (transition)',
      density: '1.0-1.05 g/cm³',
      tensileStrength: '20-40 MPa',
      solubility: 'Soluble in aromatic solvents'
    },
    uses: ['Smart packaging', 'Toys', 'Consumer products', 'Educational demonstrations', 'Prototyping'],
    advantages: ['Low cost', 'Easy processing', 'Good shape recovery', 'Non-toxic'],
    limitations: ['Limited applications', 'Moderate mechanical properties', 'Not biodegradable', 'Temperature range limited'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Potentially recyclable',
      toxicity: 'Low toxicity',
      sustainability: 'Moderate - petroleum-based but recyclable'
    }
  },
  // Additional Self-Healing Polymers
  {
    id: 'microcapsule-sh',
    name: 'Microcapsule-based Self-Healing Polymer',
    category: 'self-healing',
    formula: 'Polymer matrix + encapsulated healing agent',
    molarMass: 'Variable',
    structure: 'Polymer containing microcapsules with healing agent and catalyst',
    synthesis: 'Incorporation of microcapsules during polymer processing',
    image2D: '/src/assets/polymers/microcapsule-polymer-2d.png',
    properties: {
      density: 'Variable (typically 1.1-1.3 g/cm³)',
      tensileStrength: '30-50 MPa',
      solubility: 'Depends on matrix polymer'
    },
    uses: ['Protective coatings', 'Aerospace composites', 'Automotive parts', 'Infrastructure', 'Electronics encapsulation'],
    advantages: ['Autonomous healing', 'Can heal large cracks', 'One-time healing at damage site', 'Proven technology'],
    limitations: ['Single-use healing', 'Microcapsule preparation complex', 'Limited healing cycles', 'Expensive'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Difficult',
      toxicity: 'Depends on healing agent',
      sustainability: 'Moderate - extends service life significantly'
    }
  },
  {
    id: 'disulfide-sh',
    name: 'Disulfide Bond Self-Healing Polymer',
    category: 'self-healing',
    formula: 'Contains R-S-S-R\' linkages',
    molarMass: 'Variable',
    structure: 'Polymer with dynamic disulfide bonds',
    synthesis: 'Polymerization with disulfide-containing monomers or crosslinkers',
    image2D: '/src/assets/polymers/disulfide-polymer-2d.png',
    properties: {
      density: '1.0-1.3 g/cm³',
      tensileStrength: '20-60 MPa',
      solubility: 'Variable'
    },
    uses: ['Self-healing coatings', 'Recyclable thermosets', 'Biomedical devices', 'Adhesives', 'Electronics'],
    advantages: ['Multiple healing cycles', 'Stimulus-responsive', 'Can be triggered by heat or redox', 'Recyclable'],
    limitations: ['Requires specific conditions for healing', 'Oxidation sensitivity', 'Moderate healing efficiency'],
    environmentalImpact: {
      biodegradability: 'Generally non-biodegradable',
      recyclability: 'Can be reprocessed',
      toxicity: 'Low toxicity',
      sustainability: 'Good - recyclable and extends material life'
    }
  },
  {
    id: 'diels-alder-sh',
    name: 'Diels-Alder Self-Healing Polymer',
    category: 'self-healing',
    formula: 'Contains reversible DA bonds',
    molarMass: 'Variable',
    structure: 'Polymer with thermally reversible Diels-Alder crosslinks',
    synthesis: 'Polymerization with furan and maleimide functional groups',
    image2D: '/src/assets/polymers/dynamic-covalent-2d.png',
    properties: {
      density: '1.0-1.2 g/cm³',
      tensileStrength: '30-70 MPa',
      solubility: 'Variable'
    },
    uses: ['Self-healing composites', 'Recyclable thermosets', 'Coatings', 'Adhesives', 'Shape memory materials'],
    advantages: ['Multiple healing cycles', 'Thermally triggered', 'Recyclable', 'Predictable chemistry', 'No catalyst needed'],
    limitations: ['Requires heating (60-120°C)', 'Slower healing than some methods', 'Limited temperature range'],
    environmentalImpact: {
      biodegradability: 'Generally non-biodegradable',
      recyclability: 'Excellent - fully recyclable',
      toxicity: 'Low toxicity',
      sustainability: 'High - extends life and recyclable'
    }
  },
  {
    id: 'vascular-sh',
    name: 'Vascular Self-Healing Polymer',
    category: 'self-healing',
    formula: 'Polymer with embedded vascular network',
    molarMass: 'Variable',
    structure: 'Polymer matrix with hollow fiber network containing healing agent',
    synthesis: 'Incorporation of hollow fibers during composite fabrication',
    image2D: '/src/assets/polymers/microcapsule-polymer-2d.png',
    properties: {
      density: 'Variable',
      tensileStrength: 'Varies with matrix (30-100 MPa)',
      solubility: 'Depends on matrix'
    },
    uses: ['Large-scale composites', 'Aerospace structures', 'Wind turbine blades', 'Marine vessels', 'Infrastructure'],
    advantages: ['Multiple healing cycles', 'Can heal same location repeatedly', 'Suitable for large structures', 'Long service life'],
    limitations: ['Complex manufacturing', 'Very expensive', 'Adds weight', 'Requires careful design'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Very difficult',
      toxicity: 'Depends on healing agent',
      sustainability: 'High for long-term applications - dramatically extends service life'
    }
  },
  {
    id: 'ionomeric-sh',
    name: 'Ionomeric Self-Healing Polymer',
    category: 'self-healing',
    formula: 'Polymer with ionic clusters',
    molarMass: 'Variable',
    structure: 'Polymer with ionic crosslinks that can reform',
    synthesis: 'Copolymerization with ionic monomers',
    image2D: '/src/assets/polymers/dynamic-covalent-2d.png',
    properties: {
      density: '0.95-1.1 g/cm³',
      tensileStrength: '20-40 MPa',
      solubility: 'Limited solubility'
    },
    uses: ['Self-healing films', 'Coatings', 'Membranes', 'Sensors', 'Flexible electronics'],
    advantages: ['Room temperature healing', 'Fast healing', 'Multiple cycles', 'Transparent', 'No external stimulus needed'],
    limitations: ['Moderate mechanical properties', 'Moisture sensitive', 'Limited to specific applications'],
    environmentalImpact: {
      biodegradability: 'Generally non-biodegradable',
      recyclability: 'Potentially recyclable',
      toxicity: 'Low toxicity',
      sustainability: 'Good - extends material lifetime'
    }
  },
  // Additional Elastomers (to reach 20)
  {
    id: 'butyl-rubber',
    name: 'Butyl Rubber (IIR)',
    category: 'elastomers',
    formula: '(C₄H₈·C₅H₈)ₙ',
    molarMass: 'Variable (copolymer)',
    structure: 'Copolymer of isobutylene with small amounts of isoprene',
    synthesis: 'Cationic polymerization of isobutylene with isoprene',
    image2D: '/src/assets/polymers/butyl-rubber-2d.png',
    properties: {
      density: '0.92 g/cm³',
      tensileStrength: '17-20 MPa',
      solubility: 'Insoluble in water, soluble in hydrocarbons'
    },
    uses: ['Tire inner liners', 'Pharmaceutical stoppers', 'Adhesives', 'Vibration dampeners', 'Roofing membranes'],
    advantages: ['Excellent impermeability to gases', 'Outstanding weather resistance', 'Good chemical resistance', 'Low gas permeability'],
    limitations: ['Poor resistance to petroleum oils', 'Limited high-temperature performance', 'Slow vulcanization'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Difficult to recycle',
      toxicity: 'Low toxicity',
      sustainability: 'Low - petroleum-based'
    }
  },
  {
    id: 'neoprene',
    name: 'Chloroprene Rubber (CR, Neoprene)',
    category: 'elastomers',
    formula: '(C₄H₅Cl)ₙ',
    molarMass: '88.54 g/mol (repeat unit)',
    structure: 'Polychloroprene with 1,4-trans configuration',
    synthesis: 'Free radical emulsion polymerization of chloroprene',
    image2D: '/src/assets/polymers/neoprene-2d.png',
    properties: {
      density: '1.23 g/cm³',
      tensileStrength: '25-35 MPa',
      solubility: 'Insoluble in water, soluble in chlorinated solvents'
    },
    uses: ['Wetsuits', 'Automotive belts and hoses', 'Gaskets', 'Adhesives', 'Wire and cable jackets'],
    advantages: ['Excellent weather and ozone resistance', 'Good oil resistance', 'Flame resistant', 'Moderate cost'],
    limitations: ['Not suitable for strong oxidizing acids', 'Swells in aromatic solvents', 'Moderate heat resistance'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Difficult to recycle',
      toxicity: 'Moderate - contains chlorine',
      sustainability: 'Low - petroleum-based, chlorinated'
    }
  },
  {
    id: 'fluoroelastomer',
    name: 'Fluoroelastomer (FKM, Viton)',
    category: 'elastomers',
    formula: 'Variable fluorinated structure',
    molarMass: 'Variable',
    structure: 'Copolymer of vinylidene fluoride and hexafluoropropylene',
    synthesis: 'Emulsion polymerization of fluorinated monomers',
    image2D: '/src/assets/polymers/fluoroelastomer-2d.png',
    properties: {
      density: '1.8-1.9 g/cm³',
      tensileStrength: '10-20 MPa',
      solubility: 'Insoluble in most solvents'
    },
    uses: ['O-rings and seals', 'Fuel system components', 'Chemical processing equipment', 'Aerospace applications', 'High-temp gaskets'],
    advantages: ['Exceptional chemical resistance', 'High temperature stability (200°C+)', 'Excellent aging resistance', 'Low permeability'],
    limitations: ['Very expensive', 'Poor low-temperature flexibility', 'Difficult processing', 'PFAS environmental concerns'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Not recyclable',
      toxicity: 'Low toxicity but PFAS concerns',
      sustainability: 'Very low - persistent in environment'
    }
  },
  {
    id: 'polybutadiene',
    name: 'Polybutadiene Rubber (BR)',
    category: 'elastomers',
    formula: '(C₄H₆)ₙ',
    molarMass: '54.09 g/mol (repeat unit)',
    structure: 'Primarily 1,4-cis-polybutadiene',
    synthesis: 'Solution polymerization using Ziegler-Natta or neodymium catalysts',
    image2D: '/src/assets/polymers/polybutadiene-2d.png',
    properties: {
      density: '0.91 g/cm³',
      tensileStrength: '12-16 MPa',
      solubility: 'Soluble in hydrocarbons'
    },
    uses: ['Tire treads', 'Hoses and belts', 'Shoe soles', 'Golf balls', 'Polymer modification'],
    advantages: ['Excellent abrasion resistance', 'Low glass transition temperature', 'Good resilience', 'Low cost'],
    limitations: ['Poor tear strength alone', 'Low tensile strength', 'Limited chemical resistance'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Difficult to recycle',
      toxicity: 'Low toxicity',
      sustainability: 'Low - petroleum-based'
    }
  },
  {
    id: 'synthetic-isoprene',
    name: 'Synthetic Polyisoprene (IR)',
    category: 'elastomers',
    formula: '(C₅H₈)ₙ',
    molarMass: '68.12 g/mol (repeat unit)',
    structure: 'cis-1,4-Polyisoprene (synthetic version of natural rubber)',
    synthesis: 'Solution polymerization using Ziegler-Natta catalysts',
    image2D: '/src/assets/polymers/synthetic-isoprene-2d.png',
    properties: {
      density: '0.93 g/cm³',
      tensileStrength: '25-30 MPa',
      solubility: 'Soluble in hydrocarbons'
    },
    uses: ['Tires', 'Medical gloves', 'Adhesives', 'Footwear', 'Sporting goods'],
    advantages: ['Similar to natural rubber', 'More consistent quality', 'No protein allergens', 'Good elasticity'],
    limitations: ['More expensive than SBR', 'Poor oil resistance', 'Moderate weather resistance'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Difficult to recycle',
      toxicity: 'Non-toxic',
      sustainability: 'Low - petroleum-based synthetic'
    }
  },
  {
    id: 'epr',
    name: 'Ethylene Propylene Rubber (EPR)',
    category: 'elastomers',
    formula: '(C₂H₄·C₃H₆)ₙ',
    molarMass: 'Variable (copolymer)',
    structure: 'Random copolymer of ethylene and propylene',
    synthesis: 'Solution polymerization using Ziegler-Natta catalysts',
    image2D: '/src/assets/polymers/epr-2d.png',
    properties: {
      density: '0.86 g/cm³',
      tensileStrength: '7-10 MPa',
      solubility: 'Insoluble in water'
    },
    uses: ['Wire and cable insulation', 'Automotive weatherstripping', 'Roofing membranes', 'Hoses', 'Gaskets'],
    advantages: ['Excellent weather resistance', 'Good electrical insulation', 'Heat resistant', 'Ozone resistant'],
    limitations: ['Cannot be sulfur vulcanized', 'Poor oil resistance', 'Limited tear resistance'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Limited',
      toxicity: 'Low toxicity',
      sustainability: 'Low - petroleum-based'
    }
  },
  {
    id: 'hnbr',
    name: 'Hydrogenated Nitrile Rubber (HNBR)',
    category: 'elastomers',
    formula: 'Hydrogenated (C₄H₆·C₃H₃N)ₙ',
    molarMass: 'Variable',
    structure: 'Saturated version of NBR with reduced double bonds',
    synthesis: 'Hydrogenation of NBR',
    image2D: '/src/assets/polymers/hnbr-2d.png',
    properties: {
      density: '1.0 g/cm³',
      tensileStrength: '20-31 MPa',
      solubility: 'Insoluble in water'
    },
    uses: ['Automotive timing belts', 'Seals for oil drilling', 'High-temp hoses', 'Oil seals', 'Turbocharger hoses'],
    advantages: ['Superior heat resistance vs NBR', 'Excellent oil resistance', 'Good mechanical properties', 'Ozone resistant'],
    limitations: ['More expensive than NBR', 'Poor resistance to polar solvents', 'Limited low-temp performance'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Difficult',
      toxicity: 'Low toxicity',
      sustainability: 'Low - petroleum-based'
    }
  },
  {
    id: 'acm',
    name: 'Acrylate Rubber (ACM)',
    category: 'elastomers',
    formula: '(C₅H₈O₂)ₙ',
    molarMass: 'Variable',
    structure: 'Polyacrylate elastomer',
    synthesis: 'Emulsion polymerization of acrylic esters',
    image2D: '/src/assets/polymers/acm-2d.png',
    properties: {
      density: '1.1 g/cm³',
      tensileStrength: '7-14 MPa',
      solubility: 'Insoluble in water and petroleum oils'
    },
    uses: ['Automotive transmission seals', 'Engine gaskets', 'Shaft seals', 'Hoses exposed to hot oil', 'Power steering systems'],
    advantages: ['Excellent hot oil resistance', 'Good heat aging', 'Ozone resistant', 'Flexible at low temperatures'],
    limitations: ['Poor water resistance', 'Limited tear resistance', 'Not suitable for steam', 'Expensive'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Difficult',
      toxicity: 'Low toxicity',
      sustainability: 'Low - petroleum-based'
    }
  },
  {
    id: 'tpe',
    name: 'Thermoplastic Elastomer (TPE)',
    category: 'elastomers',
    formula: 'Variable (block copolymers)',
    molarMass: 'Variable',
    structure: 'Block copolymer with hard and soft segments',
    synthesis: 'Various methods depending on type (SBS, TPU, TPO, etc.)',
    image2D: '/src/assets/polymers/tpe-2d.png',
    properties: {
      density: '0.9-1.2 g/cm³',
      tensileStrength: '5-50 MPa (varies by type)',
      solubility: 'Depends on type'
    },
    uses: ['Consumer goods', 'Automotive parts', 'Medical devices', 'Footwear', 'Soft-touch grips'],
    advantages: ['Recyclable', 'Processable like thermoplastics', 'No vulcanization needed', 'Wide property range'],
    limitations: ['Lower max temperature than thermosets', 'Creep under load', 'Solvent sensitivity'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Recyclable',
      toxicity: 'Low toxicity',
      sustainability: 'Moderate - recyclable but petroleum-based'
    }
  },
  {
    id: 'ffkm',
    name: 'Perfluoroelastomer (FFKM)',
    category: 'elastomers',
    formula: 'Perfluorinated structure',
    molarMass: 'Variable',
    structure: 'Fully fluorinated elastomer backbone',
    synthesis: 'Copolymerization of perfluorinated monomers',
    image2D: '/src/assets/polymers/ffkm-2d.png',
    properties: {
      density: '1.9-2.0 g/cm³',
      tensileStrength: '10-15 MPa',
      solubility: 'Insoluble in virtually all solvents'
    },
    uses: ['Semiconductor processing', 'Chemical processing', 'Oil and gas extraction', 'Pharmaceutical equipment', 'Extreme environment seals'],
    advantages: ['Ultimate chemical resistance', 'Highest temperature capability (320°C)', 'Extremely low permeability', 'No swelling in chemicals'],
    limitations: ['Extremely expensive', 'Poor low-temperature performance', 'Difficult processing', 'Limited suppliers'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Not recyclable',
      toxicity: 'Low toxicity but PFAS concerns',
      sustainability: 'Very low - persistent PFAS'
    }
  },
  {
    id: 'aem',
    name: 'Ethylene Acrylic Elastomer (AEM)',
    category: 'elastomers',
    formula: '(C₂H₄·Acrylic ester)ₙ',
    molarMass: 'Variable',
    structure: 'Copolymer of ethylene and acrylic ester',
    synthesis: 'High-pressure copolymerization',
    image2D: '/src/assets/polymers/aem-2d.png',
    properties: {
      density: '1.05 g/cm³',
      tensileStrength: '8-12 MPa',
      solubility: 'Insoluble in petroleum oils'
    },
    uses: ['Automotive underhood applications', 'Power steering hoses', 'Engine mounts', 'Transmission seals', 'Turbocharger hoses'],
    advantages: ['Excellent hot oil resistance', 'Good compression set', 'Thermal stability', 'Lower cost than ACM'],
    limitations: ['Water sensitive cure system', 'Poor low-temperature flexibility', 'Limited tear resistance'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Difficult',
      toxicity: 'Low toxicity',
      sustainability: 'Low - petroleum-based'
    }
  },
  {
    id: 'csm',
    name: 'Chlorosulfonated Polyethylene (CSM, Hypalon)',
    category: 'elastomers',
    formula: 'PE with -Cl and -SO₂Cl groups',
    molarMass: 'Variable',
    structure: 'Modified polyethylene with chlorine and sulfonyl chloride groups',
    synthesis: 'Chlorination and chlorosulfonation of polyethylene',
    image2D: '/src/assets/polymers/csm-2d.png',
    properties: {
      density: '1.11-1.28 g/cm³',
      tensileStrength: '14-24 MPa',
      solubility: 'Soluble in aromatic solvents'
    },
    uses: ['Roofing membranes', 'Pond liners', 'Chemical resistant coatings', 'Wire and cable jackets', 'Industrial hoses'],
    advantages: ['Excellent weather and ozone resistance', 'Good chemical resistance', 'Flame resistant', 'Wide color range'],
    limitations: ['Production discontinued (2010)', 'Contains chlorine', 'Poor high-temperature properties'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Not recyclable',
      toxicity: 'Moderate - chlorinated',
      sustainability: 'Low - discontinued due to environmental concerns'
    }
  },
  {
    id: 'eco',
    name: 'Epichlorohydrin Rubber (ECO)',
    category: 'elastomers',
    formula: '(C₃H₅ClO)ₙ',
    molarMass: '92.53 g/mol (repeat unit)',
    structure: 'Polyether with pendant chloromethyl groups',
    synthesis: 'Polymerization of epichlorohydrin',
    image2D: '/src/assets/polymers/eco-2d.png',
    properties: {
      density: '1.27 g/cm³',
      tensileStrength: '10-17 MPa',
      solubility: 'Limited solubility in common solvents'
    },
    uses: ['Fuel hoses', 'Seals and O-rings', 'Gaskets', 'Diaphragms', 'Automotive applications'],
    advantages: ['Excellent fuel and oil resistance', 'Low gas permeability', 'Good low-temperature flexibility', 'Ozone resistant'],
    limitations: ['Water resistance limited', 'Moderate cost', 'Processing challenges', 'Contains chlorine'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Difficult',
      toxicity: 'Moderate - chlorinated compound',
      sustainability: 'Low - petroleum-based, chlorinated'
    }
  },
  {
    id: 'polyurethane-elastomer',
    name: 'Polyurethane Elastomer (PU)',
    category: 'elastomers',
    formula: 'R-NHCOO-R\' (segmented)',
    molarMass: 'Variable',
    structure: 'Segmented block copolymer with hard and soft segments',
    synthesis: 'Reaction of polyols with diisocyanates',
    image2D: '/src/assets/polymers/polyurethane-adhesive-2d.png',
    properties: {
      density: '1.05-1.25 g/cm³',
      tensileStrength: '20-70 MPa',
      solubility: 'Depends on formulation'
    },
    uses: ['Wheels and rollers', 'Solid tires', 'Seals', 'Footwear', 'Sports equipment'],
    advantages: ['Excellent abrasion resistance', 'High load-bearing capacity', 'Good tear resistance', 'Wide hardness range'],
    limitations: ['Hydrolyzes over time', 'Limited high-temperature performance', 'Sensitive to hot water', 'Can yellow'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Difficult',
      toxicity: 'Low once cured',
      sustainability: 'Moderate - long service life'
    }
  },
  // Additional Adhesive & Coatings (to reach 20)
  {
    id: 'melamine-resin',
    name: 'Melamine Formaldehyde Resin',
    category: 'adhesive',
    formula: '(C₃H₆N₆)ₙ·(CH₂O)ₘ',
    molarMass: 'Variable (crosslinked)',
    structure: 'Triazine ring structure crosslinked with formaldehyde',
    synthesis: 'Condensation of melamine with formaldehyde',
    image2D: '/src/assets/polymers/melamine-2d.png',
    properties: {
      meltingPoint: 'Thermoset (does not melt)',
      density: '1.5 g/cm³',
      tensileStrength: '50-70 MPa',
      solubility: 'Insoluble once cured'
    },
    uses: ['Laminates (Formica)', 'Dinnerware', 'Plywood adhesives', 'Surface coatings', 'Paper treatments'],
    advantages: ['Excellent hardness and scratch resistance', 'Heat resistant', 'Chemical resistant', 'Good surface finish'],
    limitations: ['Brittle', 'Formaldehyde emissions concern', 'Not recyclable', 'Can crack under impact'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Not recyclable (thermoset)',
      toxicity: 'Moderate - formaldehyde emissions',
      sustainability: 'Low - formaldehyde concerns'
    }
  },
  {
    id: 'urea-formaldehyde',
    name: 'Urea Formaldehyde Resin',
    category: 'adhesive',
    formula: '(CH₄N₂O)ₙ·(CH₂O)ₘ',
    molarMass: 'Variable (crosslinked)',
    structure: 'Urea units linked by methylene bridges',
    synthesis: 'Condensation reaction of urea and formaldehyde',
    image2D: '/src/assets/polymers/urea-formaldehyde-2d.png',
    properties: {
      meltingPoint: 'Thermoset',
      density: '1.5 g/cm³',
      tensileStrength: '40-55 MPa',
      solubility: 'Insoluble'
    },
    uses: ['Wood adhesives (plywood, particle board)', 'Molding compounds', 'Textile finishes', 'Paper adhesives', 'Foam insulation'],
    advantages: ['Low cost', 'Fast curing', 'Good bonding to wood', 'Colorless', 'Hard finish'],
    limitations: ['Formaldehyde emissions', 'Moisture sensitive', 'Brittle', 'Not suitable outdoors'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Not recyclable',
      toxicity: 'Moderate to high - formaldehyde emissions',
      sustainability: 'Low - health and environmental concerns'
    }
  },
  {
    id: 'phenolic-resin',
    name: 'Phenolic Resin (Bakelite)',
    category: 'adhesive',
    formula: '(C₆H₆O·CH₂O)ₙ',
    molarMass: 'Variable (crosslinked)',
    structure: 'Phenol units linked with formaldehyde bridges',
    synthesis: 'Condensation of phenol with formaldehyde',
    image2D: '/src/assets/polymers/phenolic-2d.png',
    properties: {
      meltingPoint: 'Thermoset',
      density: '1.25-1.30 g/cm³',
      tensileStrength: '40-60 MPa',
      solubility: 'Insoluble'
    },
    uses: ['Brake pads and linings', 'Electrical insulators', 'Foundry resins', 'Abrasive wheels', 'Laminates'],
    advantages: ['Excellent heat resistance', 'High mechanical strength', 'Good electrical insulation', 'Chemical resistant'],
    limitations: ['Brittle', 'Dark color limits applications', 'Formaldehyde emissions', 'Cannot be remolded'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Not recyclable (thermoset)',
      toxicity: 'Moderate - formaldehyde emissions',
      sustainability: 'Low - historical importance but environmental concerns'
    }
  },
  {
    id: 'alkyd-resin',
    name: 'Alkyd Resin',
    category: 'adhesive',
    formula: 'Polyester modified with fatty acids',
    molarMass: 'Variable',
    structure: 'Polyester backbone modified with oils',
    synthesis: 'Condensation of polyol, dibasic acid, and fatty acids',
    image2D: '/src/assets/polymers/epoxy-2d.png',
    properties: {
      density: '1.0-1.1 g/cm³',
      tensileStrength: '20-40 MPa',
      solubility: 'Soluble in organic solvents'
    },
    uses: ['Paints and varnishes', 'Industrial coatings', 'Marine coatings', 'Architectural coatings', 'Automotive finishes'],
    advantages: ['Good gloss and adhesion', 'Weather resistant', 'Good flow properties', 'Economical'],
    limitations: ['Slow drying', 'Yellowing with age', 'Limited chemical resistance', 'VOC emissions'],
    environmentalImpact: {
      biodegradability: 'Slowly biodegradable',
      recyclability: 'Not recyclable',
      toxicity: 'Low toxicity when cured',
      sustainability: 'Moderate - can use renewable oils'
    }
  },
  {
    id: 'polyester-resin',
    name: 'Unsaturated Polyester Resin',
    category: 'adhesive',
    formula: 'Variable polyester with unsaturated bonds',
    molarMass: 'Variable',
    structure: 'Unsaturated polyester dissolved in styrene',
    synthesis: 'Condensation of diols with unsaturated dicarboxylic acids',
    image2D: '/src/assets/polymers/pet-2d.png',
    properties: {
      density: '1.1-1.4 g/cm³',
      tensileStrength: '40-90 MPa',
      solubility: 'Insoluble once cured'
    },
    uses: ['Fiberglass composites', 'Boat hulls', 'Automotive body panels', 'Bathtubs', 'Corrosion-resistant equipment'],
    advantages: ['Low cost', 'Good mechanical properties', 'Chemical resistance', 'Fast room-temperature cure'],
    limitations: ['Styrene emissions', 'Shrinks during cure', 'Brittle', 'Limited UV resistance'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Not recyclable (thermoset)',
      toxicity: 'Moderate - styrene emissions',
      sustainability: 'Low - VOC concerns'
    }
  },
  {
    id: 'vinyl-ester',
    name: 'Vinyl Ester Resin',
    category: 'adhesive',
    formula: 'Epoxy-modified unsaturated polyester',
    molarMass: 'Variable',
    structure: 'Epoxy backbone with vinyl end groups',
    synthesis: 'Reaction of epoxy resin with unsaturated acid',
    image2D: '/src/assets/polymers/epoxy-2d.png',
    properties: {
      density: '1.05-1.20 g/cm³',
      tensileStrength: '70-85 MPa',
      solubility: 'Insoluble once cured'
    },
    uses: ['Corrosion-resistant tanks', 'Marine applications', 'Piping', 'Chemical storage', 'High-performance composites'],
    advantages: ['Better than polyester in corrosion resistance', 'Lower shrinkage', 'Good mechanical properties', 'Fast cure'],
    limitations: ['More expensive than polyester', 'Styrene emissions', 'Limited shelf life', 'Exothermic cure'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Not recyclable',
      toxicity: 'Moderate - styrene emissions',
      sustainability: 'Low - VOC emissions'
    }
  },
  {
    id: 'anaerobic-adhesive',
    name: 'Anaerobic Adhesive',
    category: 'adhesive',
    formula: 'Methacrylate-based',
    molarMass: 'Variable',
    structure: 'Dimethacrylate oligomers with initiator system',
    synthesis: 'Methacrylate polymerization in absence of oxygen',
    image2D: '/src/assets/polymers/acrylic-adhesive-2d.png',
    properties: {
      density: '1.0-1.1 g/cm³',
      tensileStrength: '10-20 MPa (bond strength)',
      solubility: 'Insoluble once cured'
    },
    uses: ['Threadlockers', 'Gasket sealants', 'Retaining compounds', 'Pipe sealants', 'Flange sealants'],
    advantages: ['Single component', 'Cures on metal in absence of air', 'Excellent vibration resistance', 'Easy to apply'],
    limitations: ['Only works on metal substrates', 'Limited gap filling', 'Inhibited by some surface treatments', 'Slow cure on inactive metals'],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Not recyclable',
      toxicity: 'Low toxicity',
      sustainability: 'Moderate - enables repair and maintenance'
    }
  }
];