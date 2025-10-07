export interface Polymer {
  id: string;
  name: string;
  category: string;
  formula: string;
  molarMass: string;
  structure: string;
  synthesis: string;
  image2D?: string;
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
    id: 'epoxy',
    name: 'Epoxy Resin',
    category: 'adhesive',
    formula: 'Variable epoxide structure',
    molarMass: '340-400 g/mol (DGEBA)',
    structure: 'Crosslinked polymer with epoxide groups',
    synthesis: 'Reaction of epichlorohydrin with bisphenol A',
    properties: {
      density: '1.1-1.4 g/cm³',
      tensileStrength: '55-130 MPa'
    },
    uses: [
      'Adhesives',
      'Coatings',
      'Composite materials',
      'Electronic encapsulation',
      'Construction materials'
    ],
    advantages: [
      'Excellent adhesion',
      'Chemical resistance',
      'Low shrinkage',
      'Good mechanical properties'
    ],
    limitations: [
      'Brittle when cured',
      'Long cure times',
      'Skin irritant (uncured)',
      'Not recyclable'
    ],
    environmentalImpact: {
      biodegradability: 'Non-biodegradable',
      recyclability: 'Not recyclable (thermoset)',
      toxicity: 'Moderate - uncured resin toxic',
      sustainability: 'Low - petroleum-based'
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
  }
];
