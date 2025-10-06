export interface Polymer {
  id: string;
  name: string;
  category: string;
  formula: string;
  molarMass: string;
  structure: string;
  synthesis: string;
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
  }
];
