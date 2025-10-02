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
  }
];
