/**
 * Moleqyn Chemistry Platform
 * Comprehensive NCERT Chapter Notes Database (Class 7 to 12)
 * High-yield conceptual theory, balanced equations, solved in-text questions, lab guides, and quizzes.
 */

window.MOLEQYN_CHAPTER_LESSONS_DB = {
  // ==========================================
  // CLASS 7 CURRICULUM
  // ==========================================
  'c7_01': {
    overview: 'Matter continuously undergoes physical and chemical transformations. In this chapter, students learn to differentiate between reversible state modifications and permanent chemical reactions that synthesize new substances with distinct chemical bonds.',
    sections: [
      {
        title: 'Physical Changes & Phase Reversibility',
        definition: 'A change in which a substance undergoes an alteration in physical properties (shape, size, color, or state) without the formation of any new chemical substance.',
        explanation: 'During physical changes, the intermolecular spacing and arrangement change, but the molecular identity remains unchanged. For example, melting of ice or evaporation of water alters physical state (Solid to Liquid to Gas), but the chemical formula remains H2O throughout. Most physical changes can be reversed by reversing temperature or pressure.',
        bullets: [
          'No new chemical substance is formed.',
          'The chemical composition and mass of the original substance remain identical.',
          'Usually reversible by simple physical methods (e.g. freezing, condensation, heating).'
        ],
        ncertQuestion: {
          q: 'Classify the following as physical or chemical change: (a) Melting of candle wax, (b) Burning of candle wax, (c) Digestion of food.',
          ans: '(a) Melting of wax is a Physical change (state changes solid to liquid without new substance). (b) Burning of wax is a Chemical change (wax hydrocarbons react with O2 to form CO2 and H2O). (c) Digestion is a Chemical change (enzymes break complex polymers into simple absorbable molecules).'
        },
        experiment: {
          name: 'Crystallisation of Copper Sulphate',
          details: 'Dissolve pure copper sulphate powder in boiling acidified water until saturated. Filter and allow to cool undisturbed. Beautiful blue rhombic crystals of pure CuSO4.5H2O separate out. This physical process purifies solid chemical compounds.'
        }
      },
      {
        title: 'Chemical Changes & Reaction Indicators',
        definition: 'A process where one or more substances react to form one or more new substances with completely different chemical compositions and properties.',
        explanation: 'Chemical changes occur through the breaking of old valence bonds and formation of new bonds between atoms. Energy is either absorbed (endothermic) or evolved (exothermic). Chemical changes are generally irreversible by simple physical techniques.',
        bullets: [
          'Formation of one or more entirely new chemical substances.',
          'Accompanied by energy changes (heat, light, or sound).',
          'Common observation indicators: Evolution of gas bubbles, color transition, precipitate formation, or odor change.'
        ],
        ncertQuestion: {
          q: 'When baking soda is mixed with lemon juice, bubbles are formed with the evolution of a gas. What type of change is it?',
          ans: 'It is a Chemical change because a gas (Carbon dioxide) is evolved along with the formation of a new salt (Sodium citrate) and water: Citric Acid + Sodium Hydrogen Carbonate -> Sodium Citrate + H2O + CO2.'
        },
        experiment: {
          name: 'Burning of Magnesium Ribbon',
          details: 'Clean a magnesium ribbon with sandpaper and hold it over a burner flame. It burns with a dazzling, blinding white light leaving behind a powdery white ash of Magnesium Oxide (2Mg + O2 -> 2MgO). Dissolving this ash in water yields Magnesium Hydroxide Mg(OH)2, turning red litmus blue (basic nature).'
        }
      },
      {
        title: 'Rusting of Iron & Corrosion Prevention',
        definition: 'The slow electrochemical deterioration of iron surfaces in the simultaneous presence of oxygen and moisture, forming hydrated iron(III) oxide (rust).',
        explanation: 'Iron does not rust in dry air or in air-free boiled water. Both oxygen (O2) and water (H2O) are mandatory reagents. Saline/coastal water accelerates the electrolytic corrosion process.',
        bullets: [
          'Reaction: 4Fe(s) + 3O2(g) + 2xH2O(l) -> 2Fe2O3.xH2O(s) (Reddish-brown rust).',
          'Prevention 1: Galvanisation - Coating molten zinc over iron sheets. Zinc protects iron even if scratched because zinc is more electropositive.',
          'Prevention 2: Alloying iron with chromium and nickel to manufacture stainless steel which resists corrosion.'
        ]
      }
    ],
    examTip: 'Always write state symbols (s, l, g, aq) in board exams. Remember: Galvanisation uses Zinc (Zn), not Tin or Lead!',
    formulas: [
      { title: 'Rusting of Iron', equation: '4Fe(s) + 3O2(g) + 2xH2O(l) -> 2Fe2O3.xH2O(s)', desc: 'Hydrated iron(III) oxide formed on exposure to moist air.' },
      { title: 'Magnesium Combustion', equation: '2Mg(s) + O2(g) -> 2MgO(s)', desc: 'Magnesium ribbon burning with intense white flame forming basic oxide.' },
      { title: 'Ash Dissolution', equation: 'MgO(s) + H2O(l) -> Mg(OH)2(aq)', desc: 'Magnesium oxide reacting with water to form basic hydroxide (turns red litmus blue).' },
      { title: 'Single Displacement', equation: 'CuSO4(aq) [Blue] + Fe(s) -> FeSO4(aq) [Light Green] + Cu(s) [Brown deposit]', desc: 'Iron nail displacing copper from blue vitriol solution.' },
      { title: 'Vinegar + Baking Soda', equation: 'CH3COOH(aq) + NaHCO3(s) -> CH3COONa(aq) + H2O(l) + CO2(g) [Effervescence]', desc: 'Carbon dioxide gas turns clear lime water milky due to CaCO3 precipitate.' }
    ],
    labGuide: {
      aim: 'To observe iron-copper sulphate displacement and magnesium oxidation in real-time.',
      apparatus: 'Beakers, copper sulphate crystals, iron nails, magnesium ribbon, burner, tongs, litmus paper.',
      procedure: '1. Dissolve CuSO4 in water to make a bright blue solution. 2. Immerse clean iron nails. 3. Observe the green FeSO4 color transition and copper deposition after 20 minutes.',
      inference: 'Iron is more reactive than copper in the electrochemical reactivity series and displaces Cu2+ ions from aqueous solution.'
    },
    quiz: [
      {
        q: 'Which of the following is an essential condition for iron to undergo rusting?',
        options: ['Only pure oxygen gas', 'Only moisture without air', 'Simultaneous presence of both oxygen and moisture', 'Extreme heat above 500 deg C'],
        ans: 2,
        explanation: 'Rusting requires BOTH oxygen and water/moisture. If iron is placed in boiled water sealed with oil, or in dry air with silica gel, no rust forms.'
      },
      {
        q: 'What color change is observed when an iron nail is immersed in copper sulphate solution?',
        options: ['Colorless to deep pink', 'Blue to light green with brown deposit', 'Yellow to dark purple', 'Green to milky white'],
        ans: 1,
        explanation: 'Fe displaces Cu from blue CuSO4 to form light green FeSO4 solution, while reddish-brown copper metal deposits onto the nail surface.'
      },
      {
        q: 'Why is galvanisation preferred for protecting iron sheets?',
        options: ['Zinc dissolves iron completely', 'Zinc forms a sacrificial protective layer that prevents air contact', 'Zinc turns iron into stainless steel', 'Zinc absorbs moisture from the atmosphere'],
        ans: 1,
        explanation: 'Galvanisation coats iron with zinc. Zinc oxidizes preferentially (sacrificial protection), preventing iron from coming into contact with air and moisture.'
      }
    ]
  },

  'c7_02': {
    overview: 'Acids and bases are fundamental chemical classifications that dictate biochemical digestion, soil agriculture, industrial manufacture, and domestic cleaning. Neutralisation reactions balance acidic and basic properties.',
    sections: [
      {
        title: 'Acids in Everyday Life & Indicators',
        definition: 'Chemical substances that taste sour, turn blue litmus red, and release hydrogen ions in aqueous solution.',
        explanation: 'Natural organic acids include Citric acid (lemons/oranges), Acetic acid (vinegar), Lactic acid (curd/milk), and Tartaric acid (tamarind). Mineral acids like Hydrochloric acid (HCl) and Sulphuric acid (H2SO4) are strong laboratory reagents.',
        bullets: [
          'Litmus: Natural dye from lichens. Blue turns RED in acid; Red turns BLUE in base.',
          'Turmeric: Natural yellow indicator. Remains yellow in acid, turns REDDISH-BROWN in base (soap solution).',
          'China Rose (Gudhal): Turns dark pink/magenta in acidic solution, and GREEN in basic solution.'
        ],
        ncertQuestion: {
          q: 'Why does a yellow turmeric stain on a white shirt turn red when washed with soap?',
          ans: 'Soap is basic in nature. Turmeric contains curcumin, an indicator that changes from yellow to deep reddish-brown in an alkaline/basic medium.'
        }
      },
      {
        title: 'Bases & Neutralisation Reaction',
        definition: 'Substances that are bitter in taste, soapy to the touch, turn red litmus blue, and neutralise acids.',
        explanation: 'When an acid reacts with a base, they neutralise each other’s chemical effects. The reaction produces a salt and water, with evolution of heat (exothermic process).',
        bullets: [
          'General Equation: Acid + Base -> Salt + Water + Heat',
          'Example: HCl + NaOH -> NaCl + H2O + Heat (Exothermic neutralization).',
          'Daily application: Antacid tablets (Milk of Magnesia Mg(OH)2) neutralize excessive stomach HCl acidity.',
          'Ant bite treatment: Formic acid injected during ant bite is neutralized by rubbing moist baking soda (NaHCO3) or calamine solution (Zinc carbonate).'
        ],
        ncertQuestion: {
          q: 'Explain why factory waste is neutralized before disposing it into rivers and water bodies.',
          ans: 'Factory wastes often contain high concentrations of strong mineral acids. Discharging them untreated lowers river pH, killing fish, aquatic plants, and micro-ecosystems. Basic substances like slaked lime are added to neutralize the acidity.'
        }
      }
    ],
    examTip: 'Remember: Turmeric turns reddish-brown ONLY in bases. It does not change color in acids!',
    formulas: [
      { title: 'Standard Neutralisation', equation: 'HCl(aq) + NaOH(aq) -> NaCl(aq) + H2O(l) + Heat', desc: 'Strong acid reacting with strong base forming neutral table salt and water.' },
      { title: 'Stomach Acid Relief', equation: '2HCl(aq) + Mg(OH)2(s) -> MgCl2(aq) + 2H2O(l)', desc: 'Milk of magnesia antacid neutralising excess gastric acid.' },
      { title: 'Ant Bite Neutralisation', equation: 'HCOOH(aq) + NaHCO3(s) -> HCOONa(aq) + H2O(l) + CO2(g)', desc: 'Baking soda neutralising formic acid from insect stings.' }
    ],
    labGuide: {
      aim: 'Testing unknown household solutions using natural indicators (litmus, turmeric, China rose).',
      apparatus: 'Test tubes, droppers, litmus strips, turmeric paper, lemon juice, soap solution, lime water, vinegar.',
      procedure: '1. Place 2 drops of indicator into separate test tubes. 2. Add test solutions. 3. Record color changes and classify solutions as acidic, basic, or neutral.',
      inference: 'Indicators change color due to structural changes in indicator molecules dependent on hydrogen ion concentration.'
    },
    quiz: [
      {
        q: 'What color does turmeric paper turn when brought into contact with soap solution?',
        options: ['Bright yellow', 'Reddish-brown', 'Dark blue', 'Colorless'],
        ans: 1,
        explanation: 'Soap solution is basic (contains sodium salts of fatty acids). Turmeric is a natural indicator that turns reddish-brown in basic solutions.'
      },
      {
        q: 'Which substance is used to treat soil that has become excessively acidic from chemical fertilisers?',
        options: ['Vinegar', 'Quicklime (Calcium oxide) or Slaked lime', 'Common salt', 'Citric acid'],
        ans: 1,
        explanation: 'Quicklime (CaO) or slaked lime (Ca(OH)2) are basic compounds added by farmers to neutralize excessive soil acidity.'
      },
      {
        q: 'What is the pH nature of the solution formed when carbon dioxide gas dissolves in pure water?',
        options: ['Neutral', 'Acidic (forms carbonic acid)', 'Strongly basic', 'Insoluble'],
        ans: 1,
        explanation: 'CO2 dissolves in water to form Carbonic acid (H2CO3): CO2 + H2O -> H2CO3, which turns blue litmus red.'
      }
    ]
  },

  'c7_03': {
    overview: 'Elements are broadly classified into metals and non-metals based on their physical and chemical attributes. Metals dominate the left and center of the periodic table, possessing lustrous, ductile, and malleable properties, while non-metals form covalent networks and acidic oxides.',
    sections: [
      {
        title: 'Physical Properties: Malleability, Ductility & Conductivity',
        definition: 'Malleability is the ability to be beaten into thin foil without breaking; Ductility is the ability to be drawn into elongated thin wires.',
        explanation: 'In metals, positive metal ion cores are immersed in a sea of delocalized valence electrons (metallic bonding). When stress is applied, crystal lattice layers slip past each other without shattering, enabling immense malleability (Gold foil can be 0.0001 mm thin) and ductility (1g gold yields 2km wire). The mobile electron sea also facilitates superior electrical and thermal conduction.',
        bullets: [
          'Best electrical conductors: Silver (Ag) followed by Copper (Cu) and Aluminium (Al).',
          'Exceptions in Metals: Mercury (Hg) is liquid at room temperature; Sodium (Na) and Potassium (K) are soft and can be cut with a knife.',
          'Exceptions in Non-Metals: Diamond (Carbon allotrope) is the hardest known natural substance; Graphite (Carbon) is a good conductor of electricity; Iodine is lustrous.'
        ],
        ncertQuestion: {
          q: 'Why are electrical wires coated with PVC (polyvinyl chloride) or rubber-like materials?',
          ans: 'Metals like copper and aluminum used in wiring are good conductors of electric current. PVC and rubber are electrical insulators that prevent leakage of current, short circuits, and accidental electric shocks to users.'
        }
      },
      {
        title: 'Chemical Reactions: Oxide Formation & Water Reactivity',
        definition: 'Metals lose electrons to form basic metal oxides; non-metals share or gain electrons to form acidic or neutral oxides.',
        explanation: 'Active alkali metals (Na, K) react explosively with cold water, evolving hydrogen gas that catches fire due to high exothermicity. Hence, they are stored submerged under kerosene oil. Iron reacts only slowly with steam, whereas Gold and Platinum do not react even with boiling water or concentrated single mineral acids.',
        bullets: [
          'Basic metal oxides: 2Mg + O2 -> 2MgO (Dissolves in water to form Mg(OH)2, turning red litmus blue).',
          'Acidic non-metal oxides: S + O2 -> SO2 (SO2 + H2O -> H2SO3 Sulphurous acid, turning blue litmus red).',
          'Amphoteric oxides: Al2O3 and ZnO react with BOTH acids and strong bases to yield salt and water.'
        ],
        ncertQuestion: {
          q: 'Why is sodium stored under kerosene oil while phosphorus is stored under water?',
          ans: 'Sodium reacts vigorously with atmospheric moisture and oxygen, catching fire spontaneously. It does not react with kerosene, so it is kept submerged in it. White phosphorus catches fire in contact with air (ignition temp ~35 deg C) but does not react with water, so it is safely stored submerged in water.'
        }
      },
      {
        title: 'The Metal Reactivity Series & Displacement Reactions',
        definition: 'An electrochemical arrangement of metals in decreasing order of their chemical reactivity.',
        explanation: 'A more reactive metal displaces a less reactive metal from its aqueous salt solution. Mnemonic: Potassium (Please) > Sodium (Send) > Calcium (Cats) > Magnesium (Monkeys) > Aluminium (And) > Zinc (Zebras) > Iron (In) > Lead (Large) > [Hydrogen] > Copper (Cages) > Silver (Securely) > Gold (Guarded).',
        bullets: [
          'Zinc nail in CuSO4 solution: Zn(s) + CuSO4(aq) [Blue] -> ZnSO4(aq) [Colorless] + Cu(s) [Reddish-brown].',
          'Copper nail in ZnSO4 solution: No reaction occurs because Copper is less reactive than Zinc.'
        ]
      }
    ],
    examTip: 'Remember the exceptions: Bromine is the ONLY non-metal liquid at room temperature. Graphite is the ONLY non-metal that conducts electricity.',
    formulas: [
      { title: 'Sodium in Water', equation: '2Na(s) + 2H2O(l) -> 2NaOH(aq) + H2(g) + Heat', desc: 'Vigorous exothermic reaction producing hydrogen that catches fire.' },
      { title: 'Magnesium Combustion', equation: '2Mg(s) + O2(g) -> 2MgO(s)', desc: 'Formation of basic magnesium oxide with bright white flame.' },
      { title: 'Sulphur Combustion', equation: 'S(s) + O2(g) -> SO2(g)', desc: 'Formation of acidic sulphur dioxide gas.' },
      { title: 'Sulphurous Acid', equation: 'SO2(g) + H2O(l) -> H2SO3(aq)', desc: 'Acidic solution turning blue litmus paper red.' },
      { title: 'Metal with Acid', equation: 'Zn(s) + 2HCl(aq) -> ZnCl2(aq) + H2(g) [Pop Sound]', desc: 'Zinc displacing hydrogen from dilute hydrochloric acid.' }
    ],
    labGuide: {
      aim: 'Investigating electrical conductivity of metals vs non-metals.',
      apparatus: 'Battery (6V), LED bulb, copper clips, connecting wires, iron nail, copper strip, graphite pencil lead, piece of sulphur/coal.',
      procedure: '1. Connect battery and LED bulb leaving two test terminals. 2. Place sample across terminals. 3. Observe whether LED glows brightly.',
      inference: 'Metals and graphite contain mobile valence electrons and conduct electricity; sulphur and non-metals lack free electrons and act as insulators.'
    },
    quiz: [
      {
        q: 'Which metal is liquid at room temperature and is widely used in laboratory thermometers?',
        options: ['Gallium', 'Mercury (Hg)', 'Sodium', 'Lead'],
        ans: 1,
        explanation: 'Mercury is the only metallic element that remains liquid at room temperature (melting point -38.8 deg C).'
      },
      {
        q: 'What gas is evolved when zinc metal reacts with dilute hydrochloric acid, producing a characteristic pop sound when a burning splinter is brought near?',
        options: ['Oxygen', 'Carbon dioxide', 'Hydrogen (H2)', 'Chlorine'],
        ans: 2,
        explanation: 'Active metals displace hydrogen from dilute acids: Zn + 2HCl -> ZnCl2 + H2. Hydrogen burns explosively with a pop sound.'
      },
      {
        q: 'Bronze is an alloy consisting of which two primary metals?',
        options: ['Copper and Zinc', 'Copper and Tin', 'Iron and Carbon', 'Lead and Tin'],
        ans: 1,
        explanation: 'Bronze is an alloy of Copper (~90%) and Tin (~10%). (Brass is Copper + Zinc).'
      }
    ]
  },

  'c7_04': {
    overview: 'Water is the universal solvent essential for biological survival, meteorological stability, and industrial synthesis. Understanding water chemistry involves exploring its polar molecular geometry, temporary and permanent hardness, water table hydrology, and modern wastewater treatment plant (WWTP) stages.',
    sections: [
      {
        title: 'Universal Solvent & Molecular Polarity',
        definition: 'Water dissolves more substances than any other liquid due to its polar bent structure and high dielectric constant (~80).',
        explanation: 'Water (H2O) has a bent geometry with a bond angle of 104.5 degrees. The electronegative oxygen pulls electron density away from hydrogens, creating partial charges (delta- on O, delta+ on H). This polar dipole allows water molecules to surround and hydrate both positive cations and negative anions, easily breaking ionic crystal lattices.',
        bullets: [
          'High specific heat capacity: Water absorbs large amounts of heat with minimal temperature change, moderating planetary climate.',
          'Anomalous expansion: Water expands when cooled below 4 deg C, making ice less dense than liquid water, allowing aquatic life to survive under frozen lakes.',
          'Water table: The upper level of underground soil saturated with water; replenished by percolation (infiltration).'
        ],
        ncertQuestion: {
          q: 'Explain how groundwater is recharged in nature.',
          ans: 'Groundwater is recharged through the process of infiltration. Rainwater and water from rivers and ponds seep through the topsoil and permeable rock layers, filling empty underground spaces and aquifers.'
        }
      },
      {
        title: 'Hard Water vs Soft Water & Desalination',
        definition: 'Hard water contains dissolved bicarbonates, chlorides, or sulphates of Calcium and Magnesium, preventing easy lathering with soap.',
        explanation: 'Soap molecules react with Ca2+ and Mg2+ ions to form an insoluble grey curdy precipitate known as scum, wasting soap. Synthetic detergents do not form scum because their calcium salts are water-soluble.',
        bullets: [
          'Temporary Hardness: Caused by dissolved Calcium Hydrogen Carbonate Ca(HCO3)2; can be removed simply by boiling.',
          'Boiling reaction: Ca(HCO3)2 -> CaCO3 (insoluble precipitate) + H2O + CO2.',
          'Permanent Hardness: Caused by dissolved Chlorides and Sulphates (CaCl2, MgSO4); removed by adding Washing Soda (Na2CO3) or using ion-exchange resin columns.'
        ]
      },
      {
        title: 'Wastewater Treatment Plant (WWTP) Engineering',
        definition: 'A multi-stage chemical and biological facility designed to remove physical, chemical, and biological contaminants from sewage.',
        explanation: 'Wastewater passes through physical bar screens (trapping rags, plastics, sticks), grit and sand chambers (settling stones), primary clarifiers (skimming oil/grease and settling organic sludge), and aeration tanks where aerobic bacteria digest organic matter.',
        bullets: [
          'Bar screens: Physical separation of large debris.',
          'Clarifier & Sludge: Settled fecal matter is pumped to an anaerobic digester producing methane biogas for electricity.',
          'Aeration Tank: Air is pumped into wastewater to promote growth of aerobic bacteria that consume human waste, food scraps, and soaps.',
          'Disinfection: Clarified water is treated with Chlorine gas or exposed to Ultraviolet (UV) light to kill pathogenic bacteria before river release.'
        ],
        ncertQuestion: {
          q: 'Why should cooking oil and fats not be released down the kitchen drain?',
          ans: 'Oils and fats harden and solidify in pipes, blocking them. In open drains, they clog soil pores, reducing water filtering capacity. They should always be disposed of in the dustbin.'
        }
      }
    ],
    examTip: 'Temporary hardness is removed by BOILING. Permanent hardness REQUIRES chemical treatment (Washing Soda Na2CO3 or Ion-Exchange).',
    formulas: [
      { title: 'Removing Temporary Hardness', equation: 'Ca(HCO3)2(aq) --[Boil]--> CaCO3(s) [Scale ppt] + H2O(l) + CO2(g)', desc: 'Thermal decomposition precipitating calcium carbonate.' },
      { title: 'Washing Soda Softening', equation: 'CaSO4(aq) + Na2CO3(aq) -> CaCO3(s) [ppt] + Na2SO4(aq)', desc: 'Removing permanent sulphate hardness using sodium carbonate.' },
      { title: 'Scum Formation with Soap', equation: '2C17H35COONa(aq) + Ca2+(aq) -> (C17H35COO)2Ca(s) [Scum] + 2Na+(aq)', desc: 'Calcium stearate precipitate formed in hard water.' },
      { title: 'Disinfection by Chlorination', equation: 'Cl2(g) + H2O(l) -> HOCl(aq) [Hypochlorous acid] + HCl(aq)', desc: 'Active germicidal agent destroying bacterial cell walls.' }
    ],
    labGuide: {
      aim: 'Comparing lather formation of soap in distilled water vs hard water.',
      apparatus: 'Test tubes, test tube stand, distilled water, hard water (tap water spiked with Epsom salt MgSO4), liquid soap, measuring dropper.',
      procedure: '1. Take 10 mL distilled water in tube A and 10 mL hard water in tube B. 2. Add exactly 3 drops of soap to both. 3. Shake vigorously for 30 seconds. 4. Measure foam/lather height and observe curdy scum.',
      inference: 'Distilled water produces rich voluminous foam; hard water forms curdy scum with minimal lather due to precipitation of insoluble magnesium stearate.'
    },
    quiz: [
      {
        q: 'Which chemical compound is formed as a white precipitate when temporary hard water is boiled?',
        options: ['Calcium Sulphate', 'Calcium Carbonate (CaCO3)', 'Sodium Chloride', 'Magnesium Hydroxide'],
        ans: 1,
        explanation: 'Heating decomposes soluble calcium hydrogen carbonate: Ca(HCO3)2 -> CaCO3 (insoluble white scale) + H2O + CO2.'
      },
      {
        q: 'What gas is bubbled into treated water in the final stage of a wastewater treatment plant before discharging into rivers to kill pathogenic germs?',
        options: ['Nitrogen gas', 'Chlorine gas (Cl2)', 'Carbon monoxide', 'Helium'],
        ans: 1,
        explanation: 'Chlorine is a powerful oxidising disinfectant that destroys microbial membranes and sterilizes municipal water.'
      },
      {
        q: 'What is the bond angle between the two hydrogen atoms in a polar water molecule (H2O)?',
        options: ['90.0 deg', '180.0 deg', '104.5 deg', '120.0 deg'],
        ans: 2,
        explanation: 'Water adopts a bent geometry with a 104.5 deg bond angle due to the strong electrostatic repulsion of oxygen’s two non-bonding lone pairs.'
      }
    ]
  },

  // ==========================================
  // CLASS 9 CURRICULUM CORE
  // ==========================================
  'c9_01': {
    overview: 'Matter in Our Surroundings explores the particulate nature of matter, kinetic molecular theory, phase transformations between solid, liquid, and gas, latent heat of fusion and vaporisation, and the thermodynamics of surface evaporation.',
    sections: [
      {
        title: 'Kinetic Particle Theory & States of Matter',
        definition: 'All matter is composed of tiny particles that possess kinetic energy, are in constant motion, and attract each other with intermolecular forces.',
        explanation: 'Solids have minimum intermolecular space, maximum intermolecular attraction, definite shape, and fixed volume. Liquids have slightly larger spaces, allowing particles to slide past one another and flow. Gases have immense intermolecular distances and negligible attraction, allowing them to expand and exert uniform pressure against container walls.',
        bullets: [
          'Kinetic energy is directly proportional to absolute Kelvin temperature: KE proportional to T.',
          'Diffusion: Spontaneous intermixing of particles of two different types on their own; rate increases with temperature due to higher kinetic speed.',
          'Brownian motion: Random zigzag motion of microscopic particles suspended in a fluid resulting from collisions with fast-moving atoms.'
        ],
        ncertQuestion: {
          q: 'Why does a desert cooler cool better on a hot, dry day?',
          ans: 'On a hot, dry day, the temperature is high and humidity (water vapour content in air) is very low. Low humidity and high temperature greatly accelerate the rate of water evaporation from the cooler pads. Since evaporation absorbs latent heat of vaporisation from the surroundings, it causes enhanced cooling.'
        }
      },
      {
        title: 'Phase Interconversions & Latent Heat',
        definition: 'Latent heat is the hidden thermal energy absorbed or released by a substance during a phase transition without causing any change in temperature.',
        explanation: 'When ice at 0 deg C is heated, the temperature remains strictly at 0 deg C until every gram of ice has melted. The absorbed thermal energy is utilized entirely in overcoming intermolecular hydrogen bonds between water molecules in the solid lattice. Latent heat of fusion of ice is 3.34 x 10^5 J/kg; Latent heat of vaporisation of water is 2.26 x 10^6 J/kg.',
        bullets: [
          'Sublimation: Direct transition from solid to gas without entering the liquid state (e.g. Camphor, Ammonium chloride NH4Cl, Naphthalene, Solid CO2 dry ice).',
          'Deposition: Direct transition from gas to solid.',
          'Why steam causes more severe burns than boiling water at 100 deg C: Steam particles possess an extra 2260 kJ/kg of latent heat of vaporisation.'
        ]
      }
    ],
    examTip: 'To convert Celsius to Kelvin: K = deg C + 273.15. Never write units like deg K; Kelvin has no degree symbol!',
    formulas: [
      { title: 'Temperature Conversion', equation: 'T(K) = t(deg C) + 273.15', desc: 'Standard absolute thermodynamic temperature relation.' },
      { title: 'Latent Heat of Phase Change', equation: 'Q = m . L', desc: 'Heat absorbed/released where m is mass and L is latent heat constant.' },
      { title: 'Latent Heat of Fusion (Ice)', equation: 'L_f = 3.34 x 10^5 J/kg (80 cal/g)', desc: 'Energy required to melt 1 kg of ice at 0 deg C.' },
      { title: 'Latent Heat of Vaporisation (Water)', equation: 'L_v = 2.26 x 10^6 J/kg (540 cal/g)', desc: 'Energy required to convert 1 kg of boiling water into steam at 100 deg C.' }
    ],
    labGuide: {
      aim: 'Determining the melting point of ice and boiling point of water with thermometer accuracy.',
      apparatus: 'Crushed ice, beaker, laboratory thermometer (-10 to 110 deg C), tripod stand, wire gauze, Bunsen burner, stirrer.',
      procedure: '1. Immerse thermometer bulb in crushed ice. 2. Record temperature every minute until completely melted. 3. Apply flame and record temperature until boiling.',
      inference: 'Temperature remains constant during phase transitions despite continuous heat input, confirming the absorption of latent heat.'
    },
    quiz: [
      {
        q: 'What is the physical state of water at 25 deg C, 0 deg C, and 100 deg C respectively?',
        options: ['Liquid, Solid, Gas', 'Gas, Liquid, Solid', 'Liquid, Gas, Solid', 'Solid, Liquid, Gas'],
        ans: 0,
        explanation: 'At 25 deg C water is liquid; at 0 deg C it freezes to solid ice; at 100 deg C it boils to gaseous steam.'
      },
      {
        q: 'Why do we wear cotton clothes in summer?',
        options: ['Cotton traps heat inside', 'Cotton is a good absorber of sweat which evaporates and causes cooling', 'Cotton reflects all UV radiation', 'Cotton is waterproof'],
        ans: 1,
        explanation: 'Cotton absorbs perspiration from the skin and exposes it to the atmosphere, facilitating rapid evaporation which takes latent heat from the body and cools it.'
      },
      {
        q: 'Which substance undergoes sublimation upon heating directly into gaseous fumes without melting?',
        options: ['Sodium chloride', 'Ammonium chloride (NH4Cl)', 'Sugar', 'Copper sulphate'],
        ans: 1,
        explanation: 'Ammonium chloride, camphor, iodine, and dry ice (solid CO2) sublime directly from solid to gas upon heating.'
      }
    ]
  },

  'c9_03': {
    overview: 'Atoms and Molecules establishes the fundamental quantitative laws of chemical combination (Mass Conservation, Definite Proportions), Dalton atomic theory, molecular mass calculations, and the Avogadro Mole Concept which bridges atomic scale mass with macroscopic laboratory grams.',
    sections: [
      {
        title: 'Laws of Chemical Combination & Daltons Postulates',
        definition: 'Law of Conservation of Mass: Mass can neither be created nor destroyed in a chemical reaction. Law of Constant Proportions: A chemical compound always contains elements combined in a fixed ratio by mass.',
        explanation: 'Antoine Lavoisier verified that total mass of reactants equals total mass of products in closed reaction vessels. Joseph Proust demonstrated that pure water always contains Hydrogen and Oxygen in a 1:8 mass ratio (e.g. 9g H2O decomposes into 1g H2 and 8g O2), irrespective of its geographic source.',
        bullets: [
          'Daltons Theory: All matter consists of indivisible atoms; Atoms of a given element are identical in mass and properties; Chemical reactions involve reorganization of atoms.',
          'Modern modifications: Atoms are divisible into subatomic particles (e-, p+, n); Isotopes show that atoms of same element can have different masses (C-12 vs C-14).'
        ],
        ncertQuestion: {
          q: 'In a reaction, 5.3 g of sodium carbonate reacted with 6.0 g of ethanoic acid. The products were 2.2 g of carbon dioxide, 0.9 g of water, and 8.2 g of sodium ethanoate. Show that these observations are in agreement with the law of conservation of mass.',
          ans: 'Total mass of reactants = 5.3 g (Sodium carbonate) + 6.0 g (Ethanoic acid) = 11.3 g. Total mass of products = 8.2 g (Sodium ethanoate) + 2.2 g (CO2) + 0.9 g (H2O) = 11.3 g. Since Mass of Reactants = Mass of Products, the Law of Conservation of Mass is strictly verified.'
        }
      },
      {
        title: 'The Mole Concept & Avogadros Constant',
        definition: 'One mole of any substance is defined as the amount containing exactly 6.02214076 x 10^23 elementary entities (atoms, molecules, or ions).',
        explanation: 'Just as 1 dozen equals 12 items, 1 mole equals 6.022 x 10^23 entities (Avogadro constant N_A). The mass of 1 mole of atoms in grams is numerically equal to its atomic mass in unified mass units (u). For example, 1 atom of Carbon has mass 12 u, so 1 mole of Carbon atoms weighs exactly 12.00 g.',
        bullets: [
          'Formula: Number of moles (n) = Given mass (m) / Molar mass (M).',
          'Formula: Number of particles (N) = Number of moles (n) x Avogadro number (N_A).',
          'Molar volume of any ideal gas at Standard Temperature and Pressure (STP: 273.15 K, 1 bar) = 22.7 L (or 22.4 L at 1 atm).'
        ],
        ncertQuestion: {
          q: 'Calculate the number of moles in 52 g of Helium (He).',
          ans: 'Atomic mass of Helium = 4 u. Therefore, Molar mass of He = 4 g/mol. Number of moles n = Mass / Molar mass = 52 g / (4 g/mol) = 13 moles.'
        }
      }
    ],
    examTip: 'Remember: 1 mole of H2 gas contains 2 moles of H atoms and 6.022 x 10^23 H2 molecules, which equals 12.044 x 10^23 H atoms!',
    formulas: [
      { title: 'Mole from Mass', equation: 'n = m / M', desc: 'Number of moles = Given mass in grams / Molar mass in g/mol.' },
      { title: 'Number of Particles', equation: 'N = n . N_A = (m / M) . (6.022 x 10^23)', desc: 'Calculating total count of atoms, molecules, or ions.' },
      { title: 'Percentage Composition', equation: '% Element = (Mass of element in 1 mol / Molar mass of compound) x 100', desc: 'Mass percentage calculation for chemical formulas.' },
      { title: 'Molar Gas Volume at STP', equation: 'V = n . 22.4 L', desc: 'Volume occupied by n moles of any gas at STP (1 atm, 273 K).' }
    ],
    labGuide: {
      aim: 'Verifying the Law of Conservation of Mass in precipitation of Barium Sulphate.',
      apparatus: 'Conical flask, small ignition tube, rubber cork, thread, digital chemical balance (0.01 g precision), Barium Chloride (BaCl2) solution, Sodium Sulphate (Na2SO4) solution.',
      procedure: '1. Pour 10 mL Na2SO4 into conical flask. 2. Suspend ignition tube with 5 mL BaCl2 inside flask without mixing. 3. Seal with cork and weigh flask (m1). 4. Invert and swirl flask to mix solutions, forming white BaSO4 precipitate. 5. Reweigh flask (m2).',
      inference: 'Mass m1 before reaction equals mass m2 after precipitation, experimentally validating the Law of Conservation of Mass.'
    },
    quiz: [
      {
        q: 'How many atoms are present in 1 mole of water molecules (H2O)?',
        options: ['6.022 x 10^23 atoms', '1.204 x 10^24 atoms', '1.806 x 10^24 atoms', '3.011 x 10^23 atoms'],
        ans: 2,
        explanation: 'Each molecule of H2O contains 3 atoms (2 H + 1 O). Thus 1 mole H2O contains 3 x 6.022 x 10^23 = 1.806 x 10^24 atoms.'
      },
      {
        q: 'What is the formula unit mass of Calcium Chloride (CaCl2)? (Atomic masses: Ca = 40 u, Cl = 35.5 u)',
        options: ['75.5 u', '111 u', '151 u', '95.5 u'],
        ans: 1,
        explanation: 'Formula mass = 1 x 40 + 2 x 35.5 = 40 + 71 = 111 u.'
      },
      {
        q: 'Which law states that in any chemical compound, elements are always present in definite proportions by mass?',
        options: ['Law of Multiple Proportions', 'Law of Constant Proportions', 'Law of Conservation of Mass', 'Avogadros Law'],
        ans: 1,
        explanation: 'Proust Law of Constant (or Definite) Proportions states that a pure chemical compound always contains exactly the same proportion of elements by mass.'
      }
    ]
  },

  // ==========================================
  // CLASS 10 CURRICULUM CORE
  // ==========================================
  'c10_01': {
    overview: 'Chemical Reactions and Equations is the cornerstone of secondary chemistry, covering the formulation and algebraic balancing of chemical equations, classification into combination, decomposition, displacement, double displacement (precipitation), and redox transformations, along with corrosion and rancidity.',
    sections: [
      {
        title: 'Types of Reactions: Combination & Decomposition',
        definition: 'Combination: Two or more reactants combine to yield a single product. Decomposition: A single reactant breaks down into two or more simpler products on supplying heat, light, or electricity.',
        explanation: 'When quicklime (Calcium oxide CaO) reacts with water, slaked lime (Calcium hydroxide Ca(OH)2) is synthesized with release of massive heat (exothermic combination). Conversely, heating green ferrous sulphate crystals (FeSO4.7H2O) drives off water of crystallization and decomposes into reddish-brown Fe2O3 and pungent SO2 and SO3 gases (thermal decomposition).',
        bullets: [
          'Exothermic: Respiration (C6H12O6 + 6O2 -> 6CO2 + 6H2O + Energy), decomposition of vegetable matter.',
          'Endothermic: Photosynthesis, thermal decomposition of limestone (CaCO3 -> CaO + CO2).',
          'Photolytic decomposition: 2AgCl(s) --[Sunlight]--> 2Ag(s) [Grey] + Cl2(g) (Used in black and white photography).'
        ],
        ncertQuestion: {
          q: 'Why is respiration considered an exothermic reaction?',
          ans: 'During digestion, food carbohydrates are broken down into glucose. In cells, glucose combines with inhaled oxygen to release continuous chemical energy in the form of ATP: C6H12O6 + 6O2 -> 6CO2 + 6H2O + Energy. Because heat/energy is evolved, respiration is an exothermic reaction.'
        }
      },
      {
        title: 'Redox Reactions, Corrosion & Rancidity',
        definition: 'Redox reactions involve simultaneous Oxidation (gain of oxygen or loss of electrons) and Reduction (loss of oxygen or gain of electrons).',
        explanation: 'In the reaction CuO + H2 -> Cu + H2O, Copper oxide loses oxygen and is reduced to metallic Copper; Hydrogen gains oxygen and is oxidized to Water. The substance that supplies oxygen (CuO) is the Oxidising Agent, while the substance that removes oxygen (H2) is the Reducing Agent.',
        bullets: [
          'Corrosion: Natural electrochemical destruction of metals by atmospheric air and moisture. Silver tarnishes black due to Ag2S; Copper develops green patina due to basic copper carbonate CuCO3.Cu(OH)2.',
          'Rancidity: Oxidation of fats and oils in food giving unpleasant odor and taste. Prevented by adding antioxidants (BHA/BHT), storing in airtight containers, or flushing chip bags with unreactive Nitrogen gas.'
        ],
        ncertQuestion: {
          q: 'Why do we apply paint on iron articles, and why are potato chip bags flushed with nitrogen gas?',
          ans: 'Painting forms an impermeable physical barrier preventing iron metal from coming into contact with atmospheric moisture and oxygen, halting rust formation. Nitrogen is an unreactive gas that displaces oxygen from chip packets, preventing oxidative rancidity of edible oils and fats.'
        }
      }
    ],
    examTip: 'To identify redox: The substance being oxidized is ALWAYS the reducing agent. The substance being reduced is ALWAYS the oxidising agent!',
    formulas: [
      { title: 'Slaking of Lime', equation: 'CaO(s) + H2O(l) -> Ca(OH)2(aq) + Heat', desc: 'Exothermic combination reaction producing calcium hydroxide.' },
      { title: 'Thermal Decomposition of Lead Nitrate', equation: '2Pb(NO3)2(s) --[Heat]--> 2PbO(s) [Yellow] + 4NO2(g) [Brown fumes] + O2(g)', desc: 'Key board exam test for nitrogen dioxide brown fumes.' },
      { title: 'Precipitation Reaction', equation: 'Na2SO4(aq) + BaCl2(aq) -> BaSO4(s) [White ppt] + 2NaCl(aq)', desc: 'Double displacement forming insoluble barium sulphate.' },
      { title: 'Redox with Copper Oxide', equation: 'CuO(s) + H2(g) --[Heat]--> Cu(s) [Reddish-brown] + H2O(l)', desc: 'CuO is reduced to Cu; H2 is oxidized to H2O.' }
    ],
    labGuide: {
      aim: 'Heating ferrous sulphate crystals in a boiling tube and identifying decomposition gases.',
      apparatus: 'Hard glass boiling tube, test tube holder, burner, ferrous sulphate crystals (FeSO4.7H2O), blue litmus paper.',
      procedure: '1. Take 2 g green FeSO4.7H2O in dry boiling tube. 2. Heat gently over flame. 3. Observe color change from green to white, then to reddish-brown Fe2O3. 4. Carefully waft gases towards nose; test with moist blue litmus paper.',
      inference: 'Evolution of suffocating burning-sulphur smell (SO2 and SO3 gases turning moist blue litmus red) confirms thermal decomposition.'
    },
    quiz: [
      {
        q: 'Which gas is released with brown fumes when lead nitrate powder is heated in a dry test tube?',
        options: ['Nitrous oxide (N2O)', 'Nitrogen dioxide (NO2)', 'Nitric oxide (NO)', 'Ammonia (NH3)'],
        ans: 1,
        explanation: 'Heating lead nitrate decomposes it into lead oxide, oxygen, and characteristic brown pungent fumes of Nitrogen Dioxide: 2Pb(NO3)2 -> 2PbO + 4NO2 + O2.'
      },
      {
        q: 'What type of reaction is represented by: BaCl2(aq) + Na2SO4(aq) -> BaSO4(s) + 2NaCl(aq)?',
        options: ['Combination reaction', 'Decomposition reaction', 'Double displacement (Precipitation) reaction', 'Electrolytic reaction'],
        ans: 2,
        explanation: 'There is a mutual exchange of ions between Ba2+ and Na+ cations, yielding an insoluble white precipitate of BaSO4.'
      },
      {
        q: 'In the reaction: Fe2O3 + 3CO -> 2Fe + 3CO2, which substance is acting as the reducing agent?',
        options: ['Fe2O3', 'CO', 'Fe', 'CO2'],
        ans: 1,
        explanation: 'Carbon monoxide (CO) removes oxygen from Fe2O3 and oxidizes to CO2, thereby serving as the reducing agent.'
      }
    ]
  },

  'c10_04': {
    overview: 'Carbon and Its Compounds explores the covalent bonding capability of carbon, its tetravalency and catenation properties that generate millions of organic structures, homologous series, functional group nomenclature, combustion, addition, and the cleansing mechanism of soaps via micelles.',
    sections: [
      {
        title: 'Covalent Bonding, Catenation & Tetravalency',
        definition: 'A covalent bond is formed by mutual sharing of electron pairs between two atoms to achieve a stable noble gas configuration.',
        explanation: 'Carbon (atomic number 6, electronic configuration 2, 4) requires 4 electrons to attain octet stability. Forming a C4- anion is energetically impossible due to nuclear charge repulsions (6 protons holding 10 electrons); forming a C4+ cation requires tremendous ionization energy to strip 4 electrons. Hence, carbon shares 4 valence electrons, displaying tetravalency and forming exceptionally strong C-C covalent bonds (catenation).',
        bullets: [
          'Allotropes of Carbon: Diamond (3D tetrahedral giant covalent lattice, hardest substance, non-conductor), Graphite (2D hexagonal sheets held by weak van der Waals forces, free delocalized pi electrons, conducts electricity, slippery lubricant), Buckminsterfullerene (C60 soccer ball cage).',
          'Saturated hydrocarbons (Alkanes, single C-C bonds, general formula CnH2n+2) vs Unsaturated hydrocarbons (Alkenes CnH2n with double bond, Alkynes CnH2n-2 with triple bond).'
        ],
        ncertQuestion: {
          q: 'Why does carbon form compounds mainly by covalent bonding rather than ionic bonding?',
          ans: 'Carbon cannot gain 4 electrons to form C4- because 6 protons in its nucleus cannot hold 10 electrons stably. It cannot lose 4 electrons to form C4+ because removing four electrons requires massive ionization energy. Therefore, carbon shares its valence electrons with other atoms, forming covalent bonds.'
        }
      },
      {
        title: 'Chemical Reactions of Carbon: Combustion, Addition & Soaps',
        definition: 'Saponification: Alkaline hydrolysis of natural vegetable oils or animal fats with sodium hydroxide to yield soap and glycerol.',
        explanation: 'Soap molecules are sodium or potassium salts of long-chain fatty acids (e.g. Sodium stearate C17H35COONa). A soap molecule consists of two distinct regions: an ionic hydrophilic head (water-soluble) and a long hydrophobic hydrocarbon tail (oil/grease-soluble). In water, soap molecules orient into spherical clusters called micelles, trapping grease droplets in the center for easy wash-off.',
        bullets: [
          'Addition Reaction: Hydrogenation of unsaturated vegetable oils (liquid) using Nickel catalyst at 473 K to manufacture saturated vanaspati ghee (solid).',
          'Esterification: Reaction of an alcohol with a carboxylic acid in presence of conc. H2SO4 producing sweet fruity-smelling Esters (R-COO-R).',
          'Difference between Soaps and Detergents: Soaps form insoluble scum in hard water (Ca2+/Mg2+); synthetic detergents (sodium alkyl sulphates) do not form scum and lather efficiently even in hard water.'
        ],
        ncertQuestion: {
          q: 'Explain the cleansing action of soaps with the help of a micelle diagram.',
          ans: 'Oily dirt on cloth is insoluble in water. Soap molecules have hydrophobic tails that dissolve in the oil droplet, while their hydrophilic ionic heads project outward into water. This radial arrangement forms a spherical micelle that keeps the oil suspended in an emulsion, which rinses away easily.'
        }
      }
    ],
    examTip: 'To test for unsaturation (double/triple bonds): Add Bromine water. Unsaturated alkenes decolorize reddish-brown bromine water instantly without catalyst!',
    formulas: [
      { title: 'Combustion of Methane', equation: 'CH4(g) + 2O2(g) -> CO2(g) + 2H2O(g) + Heat & Light', desc: 'Complete clean combustion of primary natural gas component.' },
      { title: 'Hydrogenation of Alkene', equation: 'R2C=CR2 + H2 --[Ni catalyst / 473 K]--> R2CH-CHR2', desc: 'Industrial hydrogenation converting liquid vegetable oil to solid fat.' },
      { title: 'Esterification Synthesis', equation: 'CH3COOH(l) + C2H5OH(l) --[conc. H2SO4]--> CH3COOC2H5(l) [Ethyl ethanoate] + H2O(l)', desc: 'Fruity-smelling ester synthesized from ethanoic acid and ethanol.' },
      { title: 'Saponification Reaction', equation: 'CH3COOC2H5(l) + NaOH(aq) -> CH3COONa(aq) [Soap] + C2H5OH(aq)', desc: 'Alkaline hydrolysis of ester back into sodium salt and alcohol.' }
    ],
    labGuide: {
      aim: 'Distinguishing between cooking oil and butter using alkaline Potassium Permanganate (Bayer test).',
      apparatus: 'Test tubes, droppers, vegetable cooking oil (unsaturated), butter/ghee (saturated), alkaline KMnO4 solution.',
      procedure: '1. Take 2 mL cooking oil in tube A and 2 mL melted butter in tube B. 2. Add 3 drops of pink alkaline KMnO4 to both. 3. Shake vigorously.',
      inference: 'Cooking oil decolorizes pink KMnO4 due to oxidation across unsaturated double bonds; saturated butter retains pink color.'
    },
    quiz: [
      {
        q: 'Which carbon allotrope conducts electricity and acts as a dry lubricant in machinery?',
        options: ['Diamond', 'Graphite', 'Fullerene C60', 'Coal'],
        ans: 1,
        explanation: 'In graphite, each carbon atom is bonded to 3 other carbon atoms in planar hexagonal rings, leaving one free delocalized pi electron per carbon to conduct electricity.'
      },
      {
        q: 'What is the catalyst used in the industrial hydrogenation of vegetable oils into vanaspati ghee?',
        options: ['Iron (Fe)', 'Nickel (Ni) or Palladium (Pd)', 'Zinc (Zn)', 'Copper (Cu)'],
        ans: 1,
        explanation: 'Finely divided Nickel (Ni) or Platinum/Palladium catalysts facilitate the addition of hydrogen across carbon-carbon double bonds.'
      },
      {
        q: 'What is the general formula for saturated hydrocarbons (alkanes)?',
        options: ['CnH2n', 'CnH2n-2', 'CnH2n+2', 'CnHn'],
        ans: 2,
        explanation: 'Alkanes possess only single covalent C-C bonds with general formula CnH2n+2 (e.g. CH4, C2H6, C3H8).'
      }
    ]
  },

  // ==========================================
  // CLASS 11 & 12 SENIOR SECONDARY CORE
  // ==========================================
  'c11_04': {
    overview: 'Chemical Bonding and Molecular Structure explores the quantum and electrostatic forces that assemble atoms into molecules, VSEPR 3D geometry prediction, Valence Bond orbital overlaps, Hybridization theory (sp, sp2, sp3, sp3d), dipole moments, and Molecular Orbital Theory (MOT).',
    sections: [
      {
        title: 'VSEPR Theory & 3D Molecular Geometries',
        definition: 'Valence Shell Electron Pair Repulsion theory states that electron pairs around a central atom orient in 3D space to minimize electrostatic repulsion.',
        explanation: 'The order of repulsive interactions is: Lone Pair - Lone Pair (lp - lp) > Lone Pair - Bond Pair (lp - bp) > Bond Pair - Bond Pair (bp - bp). Lone pairs are localized exclusively on the central atom and occupy greater spatial volume than shared bond pairs. Consequently, lone pairs compress adjacent bond angles (e.g. CH4 has 4 bp -> 109.5 deg; NH3 has 3 bp + 1 lp -> 107.0 deg; H2O has 2 bp + 2 lp -> 104.5 deg).',
        bullets: [
          'Linear: 2 bp (BeCl2, CO2, bond angle 180 deg).',
          'Trigonal Planar: 3 bp (BF3, BCl3, bond angle 120 deg).',
          'Tetrahedral: 4 bp (CH4, CCl4, bond angle 109.5 deg).',
          'Trigonal Bipyramidal: 5 bp (PCl5, axial bonds are longer and weaker than equatorial bonds due to repulsion).',
          'Octahedral: 6 bp (SF6, bond angle 90 deg).'
        ]
      },
      {
        title: 'Orbital Hybridization & Molecular Orbital Theory (MOT)',
        definition: 'Hybridization is the intermixing of non-equivalent atomic orbitals of comparable energy to generate an equal number of identical hybrid orbitals.',
        explanation: 'In Molecular Orbital Theory, atomic orbitals combine linearly (LCAO) to form Bonding Molecular Orbitals (psi_b = psi_A + psi_B, lower energy, higher electron density between nuclei) and Antibonding Molecular Orbitals (psi_a = psi_A - psi_B, higher energy, presence of nodal plane). Bond Order = 0.5 x (N_b - N_a). A molecule is stable if Bond Order > 0. Species with unpaired electrons in molecular orbitals are paramagnetic (e.g. O2 has 2 unpaired electrons in pi*2px and pi*2py orbitals).',
        bullets: [
          'Bond Order of N2 = 0.5 x (10 - 4) = 3 (Diamagnetic, exceptional bond enthalpy 945 kJ/mol).',
          'Bond Order of O2 = 0.5 x (10 - 6) = 2 (Paramagnetic, experimentally attracted to magnetic fields).'
        ]
      }
    ],
    examTip: 'MOT explains the paramagnetism of O2 which Lewis theory completely failed to predict!',
    formulas: [
      { title: 'Bond Order Formula', equation: 'Bond Order = 0.5 x (N_b - N_a)', desc: 'Half the difference between bonding and antibonding electrons.' },
      { title: 'Dipole Moment', equation: 'mu = q x d (Expressed in Debye: 1 D = 3.33564 x 10^-30 C.m)', desc: 'Vector product of charge magnitude and separation distance.' },
      { title: 'Formal Charge', equation: 'FC = V - N_lone - 0.5 x N_shared', desc: 'Valence electrons minus non-bonding electrons minus half bonding electrons.' }
    ],
    labGuide: {
      aim: 'Modeling VSEPR geometries and hybrid orbitals using 3D molecular modeling engines.',
      apparatus: 'Moleqyn 3D Molecular Workbench, ball-and-stick modeling kit, digital goniometer.',
      procedure: '1. Select central atom valence coordination. 2. Position bond pairs and lone pairs. 3. Measure equilibrium bond angle in 3D perspective.',
      inference: 'Electrostatic minimization dictates precise angular geometry and explains net polar dipole vectors.'
    },
    quiz: [
      {
        q: 'Why are the axial bonds in PCl5 longer and less stable than equatorial bonds?',
        options: ['Axial bonds suffer greater electron pair repulsion from 3 equatorial bonds at 90 deg', 'Axial bonds have higher s-character', 'Equatorial bonds contain lone pairs', 'Axial chlorine atoms have higher electronegativity'],
        ans: 0,
        explanation: 'Each axial bond pair experiences three 90 deg repulsions from equatorial bond pairs, whereas equatorial pairs suffer only two 90 deg repulsions.'
      },
      {
        q: 'According to Molecular Orbital Theory, why is the oxygen molecule (O2) paramagnetic?',
        options: ['It contains no unpaired electrons', 'It possesses 2 unpaired electrons in degenerate antibonding pi* orbitals', 'It has a fractional bond order', 'It has a linear dipole moment'],
        ans: 1,
        explanation: 'Electronic configuration of O2 shows two unpaired electrons in pi*2px and pi*2py orbitals, conferring experimental paramagnetism.'
      },
      {
        q: 'What is the hybridization and 3D molecular shape of SF6?',
        options: ['sp3d, Trigonal bipyramidal', 'sp3d2, Regular Octahedral', 'dsp2, Square planar', 'sp3, Tetrahedral'],
        ans: 1,
        explanation: 'Sulphur shares 6 valence electrons with 6 fluorine atoms forming 6 sigma bonds with sp3d2 hybridization and octahedral geometry.'
      }
    ]
  },

  'c12_01': {
    overview: 'Solutions explores homogeneous multi-component mixtures, Raoults and Henrys Laws for volatile and gaseous solutes, thermodynamic deviations from ideality, and the 4 colligative properties governed by the van t Hoff factor i.',
    sections: [
      {
        title: 'Henrys Law, Raoults Law & Azeotropes',
        definition: 'Raoults Law states that for a solution of volatile liquids, the partial vapour pressure of each component is equal to the product of its mole fraction and pure vapour pressure: P1 = x1 . P1_deg.',
        explanation: 'Ideal solutions follow Raoults Law over the entire concentration range with Delta H_mix = 0 and Delta V_mix = 0 (e.g. Benzene + Toluene, n-Hexane + n-Heptane). Non-ideal solutions showing positive deviation (A-B interactions weaker than A-A and B-B; Delta H_mix > 0, e.g. Ethanol + Acetone) form minimum boiling azeotropes. Non-ideal solutions showing negative deviation (A-B interactions stronger, e.g. Chloroform + Acetone hydrogen bonding; Delta H_mix < 0) form maximum boiling azeotropes.',
        bullets: [
          'Henrys Law: P = K_H x; Solubility of gas in liquid is inversely proportional to Henrys constant K_H.',
          'Aquatic life preference: Gases are more soluble in cold water (lower K_H), so aquatic organisms thrive better in cold aquatic environments.'
        ]
      },
      {
        title: 'Colligative Properties & van t Hoff Factor (i)',
        definition: 'Properties that depend solely on the number of solute particles in solution, independent of their chemical nature.',
        explanation: 'The four colligative properties are: Relative Lowering of Vapour Pressure, Elevation in Boiling Point (Delta Tb = i Kb m), Depression in Freezing Point (Delta Tf = i Kf m), and Osmotic Pressure (pi = i CRT). For electrolytes that dissociate into ions (e.g. NaCl -> Na+ + Cl-, i = 2; CaCl2 -> Ca2+ + 2Cl-, i = 3), colligative effects are multiplied. For associating solutes (e.g. Benzoic acid dimerizing in benzene via hydrogen bonds, i = 0.5), colligative effects decrease.',
        bullets: [
          'Reverse Osmosis: Applying hydrostatic pressure greater than osmotic pressure (P > pi) forces pure solvent out through semipermeable membranes, used in municipal seawater desalination.'
        ]
      }
    ],
    examTip: 'Always multiply colligative formulas by van t Hoff factor i. For non-electrolytes like glucose/urea, i = 1!',
    formulas: [
      { title: 'Raoults Law', equation: 'P_total = x1 . P1_deg + x2 . P2_deg', desc: 'Total vapour pressure of a binary liquid solution.' },
      { title: 'Boiling Point Elevation', equation: 'Delta T_b = i . K_b . m', desc: 'Kb is the molal ebullioscopic elevation constant.' },
      { title: 'Freezing Point Depression', equation: 'Delta T_f = i . K_f . m', desc: 'Kf is the molal cryoscopic depression constant.' },
      { title: 'Osmotic Pressure', equation: 'pi = i . C . R . T = i . (n/V) . R . T', desc: 'Van t Hoff equation for osmotic pressure in pascals/atm.' },
      { title: 'van t Hoff Factor', equation: 'i = 1 + (n - 1) . alpha', desc: 'Relation between i and degree of dissociation alpha.' }
    ],
    labGuide: {
      aim: 'Determining the molar mass of an unknown non-volatile solute by freezing point depression (Cryoscopy).',
      apparatus: 'Beckmann freezing point apparatus, sensitive digital thermometer (0.01 deg C), cooling bath with freezing mixture, stirrer, pure solvent, analytical balance.',
      procedure: '1. Measure freezing point of pure water T0. 2. Dissolve weighed amount of unknown solute. 3. Record new freezing point Tf. 4. Calculate molar mass using M2 = (1000 Kf w2) / (w1 Delta Tf).',
      inference: 'Freezing point depression is directly proportional to molality, allowing high-precision molecular mass determination.'
    },
    quiz: [
      {
        q: 'Which 0.1 M aqueous solution will exhibit the highest boiling point elevation?',
        options: ['0.1 M Glucose', '0.1 M Sodium Chloride (NaCl)', '0.1 M Barium Chloride (BaCl2)', '0.1 M Aluminium Chloride (AlCl3)'],
        ans: 3,
        explanation: 'AlCl3 dissociates into 4 ions (1 Al3+ + 3 Cl-), giving i = 4. Since Delta Tb is proportional to i, it produces the largest boiling point elevation.'
      },
      {
        q: 'What type of deviation from Raoults Law is observed when Acetone is mixed with Chloroform?',
        options: ['Zero deviation (Ideal)', 'Positive deviation', 'Negative deviation due to intermolecular H-bonding', 'Complete phase separation'],
        ans: 2,
        explanation: 'Chloroform and acetone form strong intermolecular hydrogen bonds (Cl3C-H...O=C(CH3)2) that exceed original interactions, causing negative deviation.'
      },
      {
        q: 'What is the value of the van t Hoff factor (i) for Potassium Sulphate (K2SO4) assuming 100% dissociation?',
        options: ['1', '2', '3', '4'],
        ans: 2,
        explanation: 'K2SO4 dissociates completely into 2 K+ cations and 1 SO4^2- anion, giving a total of 3 ions (i = 3).'
      }
    ]
  }
};
