/* =========================================================
   PUBLICATIONS 페이지 내용 - publications.html
   ---------------------------------------------------------
   이 파일은 업로드된 Google Scholar 정리 엑셀을 기준으로 정리했습니다.

   [구성]
   1) publications
      - 학술지 논문 중심 목록
      - 홈페이지에는 연도별로 자동 묶여서 최신순으로 표시됩니다.

   2) otherSections
      - 특허 / 학회 초록 / preprint / erratum / 중복 레코드 등
      - 일반 학술지 논문과 분리해서 페이지 아래쪽에 표시됩니다.

   [새 논문 추가 방법]
   publications 배열의 맨 위에 아래 형식으로 추가하세요.

   {
     year: "2026",
     title: "논문 제목",
     authors: "A Author, B Author, J Joo",
     journal: "Journal Name 00 (0), 000-000",
     doi: "https://doi.org/10.xxxx/xxxxx",
     type: "Journal"
   },

   DOI를 모르면 doi: "" 로 두면 됩니다.
   마지막 항목을 제외한 각 항목 끝에는 쉼표(,)가 필요합니다.

   [주의]
   - 원본 엑셀에서 연도가 비어 있던 항목은 임의로 추정하지 않고
     "Year not listed"로 유지했습니다.
   - 동일 논문의 번역/중복 레코드로 보이는 항목은 main publication에서
     제외하고 otherSections에 분리했습니다.
   ========================================================= */

window.PAGE_CONTENT = {
  pageTitle: "Publications",
  pageDescription: "Peer-reviewed journal publications from our laboratory, organized by year.",

  publications: [
  {
    "year": "2026",
    "title": "Morphology and Phase Evolution of AACH Nanorods via CTAB-Regulated Hydrothermal Synthesis Toward Porous γ-Al2O3 Nanorods",
    "authors": "G Min, DH Yoon, SS Ryu, J Joo",
    "journal": "Korean Journal of Chemical Engineering, 1-10",
    "doi": "",
    "type": "Journal"
  },
  {
    "year": "2026",
    "title": "Submicron interfacial layers for nanoscale control of lithium deposition in surface-engineered current collectors",
    "authors": "Y Lee, W Choi, S Woo, Y Cho, G Lim, J Joo, KR Han, IW Cheong, D Lee, ...",
    "journal": "Nanoscale",
    "doi": "",
    "type": "Journal"
  },
  {
    "year": "2026",
    "title": "The Effects of Silane-Modified Hollow Silica Nanofillers on Thermo-Mechanical Properties of Rigid Polyurethane Foam",
    "authors": "KR Han, JB Lee, MW Ji, A Saddique, J Joo, IW Cheong",
    "journal": "Korean Journal of Chemical Engineering 43 (2), 441-454",
    "doi": "",
    "type": "Journal"
  },
  {
    "year": "2025",
    "title": "Dry electrode technology: A new processing paradigm for enhancing performance and sustainability in lithium-based batteries",
    "authors": "J Choi, S Moon, D Lee, S Han, S Yang, DS Jung, J Joo, PJ Kim",
    "journal": "Chemical Engineering Journal 519, 165044",
    "doi": "",
    "type": "Journal"
  },
  {
    "year": "2025",
    "title": "Controlled synthesis of branched 2D polytypic CdS quantum nanostructures",
    "authors": "Y Kim, H Ma, H Kim, H Ahn, G Min, DH Lee, YY Noh, J Joo, J Yang, ...",
    "journal": "Materials Today Nano 29, 100549",
    "doi": "",
    "type": "Journal"
  },
  {
    "year": "2025",
    "title": "Enhancing thermal and mechanical properties of rigid polyurethane foam with eco-friendly silane-modified cellulose nanocrystals",
    "authors": "A Saddique, KR Han, T Kim, J Joo, IW Cheong",
    "journal": "Colloids and Surfaces A: Physicochemical and Engineering Aspects 704, 135443",
    "doi": "",
    "type": "Journal"
  },
  {
    "year": "2024",
    "title": "Enhancing High-Rate Charge–Discharge Performance of Lithium–Sulfur Batteries Using Carbon Black Interlayer",
    "authors": "JB Lee, G Min, WG Lim, H Kang, K Shin, S Yoon, J Lee, J Joo",
    "journal": "Korean Journal of Chemical Engineering 41 (4), 1239-1248",
    "doi": "",
    "type": "Journal"
  },
  {
    "year": "2024",
    "title": "Untapped potential and prospects for non-lithium closed static “electrode-free” electrochemical energy storage architectures",
    "authors": "E Esparcia, J Joo, J Lee",
    "journal": "Chemical Engineering Journal 485, 149919",
    "doi": "",
    "type": "Journal"
  },
  {
    "year": "2023",
    "title": "PEI/super P cathode coating: a pathway to superior lithium–sulfur battery performance",
    "authors": "J Heo, G Min, JB Lee, PJ Kim, K Shin, IW Cheong, H Kang, S Yoon, ...",
    "journal": "Batteries 9 (11), 531",
    "doi": "",
    "type": "Journal"
  },
  {
    "year": "2022",
    "title": "Ultra-thin polymer-encapsulation of SrAl2O4:Eu2+, Dy3+ phosphor for enhanced hydrolytic resistance",
    "authors": "HM Lee, JH Heo, JC Kim, J Joo, IW Cheong",
    "journal": "Korean Journal of Chemical Engineering 39 (9), 2548-2554",
    "doi": "",
    "type": "Journal"
  },
  {
    "year": "2022",
    "title": "Synthesis and characterization of monodispersed spherical calcium oxide and calcium carbonate nanoparticles via simple pyrolysis",
    "authors": "R Atchudan, S Perumal, J Joo, YR Lee",
    "journal": "Nanomaterials 12 (14), 2424",
    "doi": "",
    "type": "Journal"
  },
  {
    "year": "2021",
    "title": "Vanadium oxide bronzes as cathode active materials for non-lithium-based batteries",
    "authors": "E Esparcia Jr, J Joo, J Lee",
    "journal": "CrystEngComm 23 (31), 5267-5283",
    "doi": "",
    "type": "Journal"
  },
  {
    "year": "2021",
    "title": "Colloidal synthesis of monodisperse ultrathin LiFePO4 nanosheets for Li-ion battery cathodes",
    "authors": "HH Oh, J Joo",
    "journal": "Korean Journal of Chemical Engineering 38 (5), 1052-1058",
    "doi": "",
    "type": "Journal"
  },
  {
    "year": "2020",
    "title": "Hydrogen halide-free synthesis of organohalides for organometal trihalide perovskite solar cells",
    "authors": "G Min, Y Yun, HJ Choi, S Lee, J Joo",
    "journal": "Journal of Industrial and Engineering Chemistry 89, 375-382",
    "doi": "",
    "type": "Journal"
  },
  {
    "year": "2020",
    "title": "Quantum Dots of [Na4Cs6PbBr4]8+, Water Stable in Zeolite X, Luminesce Sharply in the Green",
    "authors": "JY Kim, KI Shim, JW Han, J Joo, NH Heo, K Seff",
    "journal": "Advanced Materials 32 (34), 2001868",
    "doi": "",
    "type": "Journal"
  },
  {
    "year": "2020",
    "title": "Graphene oxide-embedded chitosan/gelatin hydrogel particles for the adsorptions of multiple heavy metal ions",
    "authors": "S Perumal, R Atchudan, DH Yoon, J Joo, IW Cheong",
    "journal": "Journal of Materials Science 55 (22), 9354-9363",
    "doi": "",
    "type": "Journal"
  },
  {
    "year": "2020",
    "title": "Solid-state conversion of metal oleate precursors for the preparation of LiNi1/3Co1/3Mn1/3O2 as cathode material for lithium-ion batteries",
    "authors": "D Kwak, WG Lim, K Shin, IW Cheong, J Lee, J Joo",
    "journal": "Korean Journal of Chemical Engineering 37 (7), 1258-1265",
    "doi": "",
    "type": "Journal"
  },
  {
    "year": "2020",
    "title": "Studies on the effect of acetate ions on the optical properties of InP/ZnSeS core/shell quantum dots",
    "authors": "CH Min, J Joo",
    "journal": "Journal of Industrial and Engineering Chemistry 82, 254-260",
    "doi": "",
    "type": "Journal"
  },
  {
    "year": "2019",
    "title": "Spherical chitosan/gelatin hydrogel particles for removal of multiple heavy metal ions from wastewater",
    "authors": "S Perumal, R Atchudan, DH Yoon, J Joo, IW Cheong",
    "journal": "Industrial & Engineering Chemistry Research 58 (23), 9900-9907",
    "doi": "",
    "type": "Journal"
  },
  {
    "year": "2019",
    "title": "Synthesis of high-quality carbon nanotubes by using monodisperse spherical mesoporous silica encapsulating iron oxide nanoparticles",
    "authors": "R Atchudan, BG Cha, N Lone, J Kim, J Joo",
    "journal": "Korean Journal of Chemical Engineering 36 (1), 157-165",
    "doi": "",
    "type": "Journal"
  },
  {
    "year": "2018",
    "title": "Preparation of CaCO3 and CaO nanoparticles via solid-state conversion of calcium oleate precursor",
    "authors": "R Atchudan, N Lone, J Joo",
    "journal": "Journal of nanoscience and nanotechnology 18 (3), 1958-1964",
    "doi": "",
    "type": "Journal"
  },
  {
    "year": "2017",
    "title": "Urushiol-Acrylate Terpolymers: Synthesis, Characterization, and Antibacterial Effects Against Staphylococcus aureus",
    "authors": "N Lone, D Chakradhar, IW Cheong, HR Kim, J Joo",
    "journal": "Science of Advanced Materials 9 (11), 1973-1982",
    "doi": "",
    "type": "Journal"
  },
  {
    "year": "2017",
    "title": "Preparation of urushiol-containing poly (methyl methacrylate) copolymers for antibacterial and antifouling coatings",
    "authors": "N Lone, IW Cheong, M Cho, YK Hong, YS Choi, S Perumal, BT Oh, J Joo",
    "journal": "Journal of Coatings Technology and Research 14 (3), 621-630",
    "doi": "",
    "type": "Journal"
  },
  {
    "year": "2016",
    "title": "The slip agents oleamide and erucamide reduce biofouling by marine benthic organisms (diatoms, biofilms and abalones)",
    "authors": "P Getachew, M Getachew, J Joo, YS Choi, DS Hwang, YK Hong",
    "journal": "Toxicology and Environmental Health Sciences 8 (5), 341-348",
    "doi": "",
    "type": "Journal"
  },
  {
    "year": "2016",
    "title": "A tailored TiO2 electron selective layer for high-performance flexible perovskite solar cells via low temperature UV process",
    "authors": "I Jeong, H Jung, M Park, JS Park, HJ Son, J Joo, J Lee, MJ Ko",
    "journal": "Nano Energy 28, 380-389",
    "doi": "",
    "type": "Journal"
  },
  {
    "year": "2016",
    "title": "Recombinant production and biochemical characterization of a hypothetical acidic shell matrix protein in Escherichia coli for the preparation of protein-based CaCO3 biominerals",
    "authors": "C Son, W Song, DS Hwang, YK Hong, J Joo, YS Choi",
    "journal": "Korean Journal of Chemical Engineering 33 (8), 2406-2410",
    "doi": "",
    "type": "Journal"
  },
  {
    "year": "2016",
    "title": "Antifouling effects of the periostracum on algal spore settlement in the mussel Mytilus edulis",
    "authors": "JY Kang, I Bangoura, JY Cho, J Joo, YS Choi, DS Hwang, YK Hong",
    "journal": "Fisheries and Aquatic Sciences 19 (1), 7",
    "doi": "",
    "type": "Journal"
  },
  {
    "year": "2015",
    "title": "Near-Room Temperature Synthesis of Core/Shell-Structured Quantum Dots",
    "authors": "J Kim, E Kang, J Son, IW Cheong, J Joo",
    "journal": "Journal of Nanoscience and Nanotechnology 15 (9), 7146-7152",
    "doi": "",
    "type": "Journal"
  },
  {
    "year": "2015",
    "title": "Effects of nanofillers on the thermo-mechanical properties and chemical resistivity of epoxy nanocomposites",
    "authors": "R Atchudan, A Pandurangan, J Joo",
    "journal": "Journal of nanoscience and nanotechnology 15 (6), 4255-4267",
    "doi": "",
    "type": "Journal"
  },
  {
    "year": "2015",
    "title": "Facile synthesis of monodispersed cubic and spherical calcite nanoparticles in the presence of cetyltrimethylammonium bromide",
    "authors": "R Atchudan, HB Na, IW Cheong, J Joo",
    "journal": "Journal of nanoscience and nanotechnology 15 (4), 2702-2714",
    "doi": "",
    "type": "Journal"
  },
  {
    "year": "2015",
    "title": "Hydrogel adsorbents of poly(N-isopropylacrylamide-co-methacryloyloxymethyl-12-crown-4) for Li+ recovery prepared by droplet microfluidics",
    "authors": "YS Kim, HM Lee, JH Kim, J Joo, IW Cheong",
    "journal": "RSC advances 5 (14), 10656-10661",
    "doi": "",
    "type": "Journal"
  },
  {
    "year": "2014",
    "title": "A direct one-step synthetic route to Pd–Pt nanostructures with controllable shape, size, and composition for electrocatalytic applications",
    "authors": "Y Ye, J Joo, S Lee, J Lee",
    "journal": "Journal of Materials Chemistry A 2 (45), 19239-19246",
    "doi": "",
    "type": "Journal"
  },
  {
    "year": "2014",
    "title": "Comparison of Ecklonia cava, Ecklonia stolonifera and Eisenia bicyclis for phlorotannin extraction",
    "authors": "MTH Chowdhury, I Bangoura, JY Kang, JY Cho, J Joo, YS Choi, ...",
    "journal": "Journal of Environmental Biology 35 (4), 713",
    "doi": "",
    "type": "Journal"
  },
  {
    "year": "2014",
    "title": "Effects of Calcification Inhibitors on the Viability of the Coralline Algae Lithophyllum yessoense and Corallina pilulifera",
    "authors": "JY Kang, JY Choi, J Joo, YS Choi, DS Hwang, JY Cho, YK Hong",
    "journal": "Fisheries and Aquatic Science 17 (2), 269-273",
    "doi": "",
    "type": "Journal"
  },
  {
    "year": "2014",
    "title": "Viability, fatty acid composition, and structure of the coralline alga Corallina pilulifera",
    "authors": "JY Kang, IMP Benliro, IJ Lee, JY Choi, J Joo, YS Choi, DS Hwang, ...",
    "journal": "Botanical Sciences 92 (1), 103-109",
    "doi": "",
    "type": "Journal"
  },
  {
    "year": "2014",
    "title": "Slow colloidal growth of PbSe nanocrystals for facile morphology and size control",
    "authors": "S Lee, DT Lee, JH Ko, WJ Kim, J Joo, S Jeong, JA McGuire, YH Kim, ...",
    "journal": "RSC advances 4 (19), 9842-9850",
    "doi": "",
    "type": "Journal"
  },
  {
    "year": "2013",
    "title": "Copper–indium–selenide quantum dot-sensitized solar cells",
    "authors": "J Yang, JY Kim, JH Yu, TY Ahn, H Lee, TS Choi, YW Kim, J Joo, MJ Ko, ...",
    "journal": "Physical Chemistry Chemical Physics 15 (47), 20517-20525",
    "doi": "",
    "type": "Journal"
  },
  {
    "year": "2013",
    "title": "Preparation of asymmetric porous Janus particles using microfluidics and directional UV curing",
    "authors": "J Kim, J Joo, SY Park",
    "journal": "Particle & Particle Systems Characterization 30 (11), 981-988",
    "doi": "",
    "type": "Journal"
  },
  {
    "year": "2013",
    "title": "Synthesis of multilayer graphene balls on mesoporous Co-MCM-41 molecular sieves by chemical vapour deposition method",
    "authors": "R Atchudan, A Pandurangan, J Joo",
    "journal": "Microporous and mesoporous materials 175, 161-169",
    "doi": "",
    "type": "Journal"
  },
  {
    "year": "2013",
    "title": "An efficient synthesis of graphenated carbon nanotubes over the tailored mesoporous molecular sieves by chemical vapor deposition",
    "authors": "R Atchudan, J Joo, A Pandurangan",
    "journal": "Materials Research Bulletin 48 (6), 2205-2212",
    "doi": "",
    "type": "Journal"
  },
  {
    "year": "2013",
    "title": "Advances in the colloidal synthesis of two-dimensional semiconductor nanoribbons",
    "authors": "J Yang, JS Son, JH Yu, J Joo, T Hyeon",
    "journal": "Chemistry of Materials 25 (8), 1190-1198",
    "doi": "",
    "type": "Journal"
  },
  {
    "year": "2013",
    "title": "Biological Characteristics and Tissue Structure of a Crustose Coralline Lithophyllum Alga",
    "authors": "JY Kang, IMP Benliro, IJ Lee, JY Choi, J Joo, YS Choi, DS Hwang, ...",
    "journal": "생명과학회지 23 (3), 341-346",
    "doi": "",
    "type": "Journal"
  },
  {
    "year": "2012",
    "title": "Highly effective surface passivation of PbSe quantum dots through reaction with molecular chlorine",
    "authors": "WK Bae, J Joo, LA Padilha, J Won, DC Lee, Q Lin, W Koh, H Luo, ...",
    "journal": "Journal of the American Chemical Society 134 (49), 20160-20168",
    "doi": "",
    "type": "Journal"
  },
  {
    "year": "2012",
    "title": "Dimension‐controlled synthesis of CdS nanocrystals: From 0D quantum dots to 2D nanoplates",
    "authors": "JS Son, K Park, SG Kwon, J Yang, MK Choi, J Kim, JH Yu, J Joo, T Hyeon",
    "journal": "Small 8 (15), 2394-2402",
    "doi": "",
    "type": "Journal"
  },
  {
    "year": "2012",
    "title": "Ultra-low-cost route to mesocellular siliceous foam from steel slag and mesocellular carbon foam as catalyst support in fuel cell",
    "authors": "S An, J Joo, J Lee",
    "journal": "Microporous and Mesoporous Materials 151, 450-456",
    "doi": "",
    "type": "Journal"
  },
  {
    "year": "2012",
    "title": "Highly efficient enzyme immobilization and stabilization within meso-structured onion-like silica for biodiesel production",
    "authors": "SH Jun, J Lee, BC Kim, JE Lee, J Joo, H Park, JH Lee, SM Lee, D Lee, ...",
    "journal": "Chemistry of Materials 24 (5), 924-929",
    "doi": "",
    "type": "Journal"
  },
  {
    "year": "2012",
    "title": "Simple synthesis of platinum dendritic aggregates supported on conductive tungsten oxide nanowires as high-performance methanol oxidation electrocatalysts",
    "authors": "Y Ye, J Joo, B Lim, J Lee",
    "journal": "Chemistry-A European Journal 18 (10), 2797-2801",
    "doi": "",
    "type": "Journal"
  },
  {
    "year": "2012",
    "title": "Synthesis and characterization of epoxy silane-modified silica/polyurethane-urea nanocomposite films",
    "authors": "J Joo, HS Kim, JT Kim, HJ Yoo, JR Lee, IW Cheong",
    "journal": "Korean Chemical Engineering Research 50 (2), 371-378",
    "doi": "",
    "type": "Journal"
  },
  {
    "year": "2011",
    "title": "Magnetic mesoporous materials for removal of environmental wastes",
    "authors": "BC Kim, J Lee, W Um, J Kim, J Joo, JH Lee, JH Kwak, JH Kim, C Lee, ...",
    "journal": "Journal of hazardous materials 192 (3), 1140-1147",
    "doi": "",
    "type": "Journal"
  },
  {
    "year": "2011",
    "title": "Colloidal synthesis of ultrathin two‐dimensional semiconductor nanocrystals",
    "authors": "JS Son, JH Yu, SG Kwon, J Lee, J Joo, T Hyeon",
    "journal": "Advanced Materials 23 (28), 3214-3219",
    "doi": "",
    "type": "Journal"
  },
  {
    "year": "2011",
    "title": "Well-dispersed Pd3Pt1 alloy nanoparticles in large pore sized mesocellular carbon foam for improved methanol-tolerant oxygen reduction reaction",
    "authors": "S An, JH Park, CH Shin, J Joo, E Ramasamy, J Hwang, J Lee",
    "journal": "Carbon 49 (4), 1108-1117",
    "doi": "",
    "type": "Journal"
  },
  {
    "year": "2011",
    "title": "Microfluidic synthesis of Janus particles by UV-directed phase separation",
    "authors": "S Lone",
    "journal": "Chemical Communications",
    "doi": "",
    "type": "Journal"
  },
  {
    "year": "2011",
    "title": "Synthesis of Palladium Nanoparticles Encapsulated in Phosphine Ligand-Grafted Mesoporous Silicas and Their Application to Suzuki Cross-Coupling Reaction",
    "authors": "SW Kim, J Joo",
    "journal": "Clean Technology 17 (1), 13-18",
    "doi": "",
    "type": "Journal"
  },
  {
    "year": "2010",
    "title": "Spectroscopic signatures of photocharging due to hot-carrier transfer in solutions of semiconductor nanocrystals under low-intensity ultraviolet excitation",
    "authors": "JA McGuire, M Sykora, I Robel, LA Padilha, J Joo, JM Pietryga, VI Klimov",
    "journal": "ACS nano 4 (10), 6087-6097",
    "doi": "",
    "type": "Journal"
  },
  {
    "year": "2010",
    "title": "Revealing the exciton fine structure of PbSe nanocrystal quantum dots using optical spectroscopy in high magnetic fields",
    "authors": "RD Schaller, SA Crooker, DA Bussian, JM Pietryga, J Joo, VI Klimov",
    "journal": "Physical review letters 105 (6), 067403",
    "doi": "",
    "type": "Journal"
  },
  {
    "year": "2010",
    "title": "Apparent versus true carrier multiplication yields in semiconductor nanocrystals",
    "authors": "JA McGuire, M Sykora, J Joo, JM Pietryga, VI Klimov",
    "journal": "Nano letters 10 (6), 2049-2057",
    "doi": "",
    "type": "Journal"
  },
  {
    "year": "2010",
    "title": "Giant Zeeman splitting in nucleation-controlled doped CdSe:Mn2+ quantum nanoribbons",
    "authors": "JH Yu, X Liu, KE Kweon, J Joo, J Park, KT Ko, DW Lee, S Shen, ...",
    "journal": "Nature materials 9 (1), 47-53",
    "doi": "",
    "type": "Journal"
  },
  {
    "year": "2009",
    "title": "Magnetically-separable and highly-stable enzyme system based on crosslinked enzyme aggregates shipped in magnetite-coated mesoporous silica",
    "authors": "J Lee, HB Na, BC Kim, JH Lee, B Lee, JH Kwak, Y Hwang, JG Park, ...",
    "journal": "Journal of Materials Chemistry 19 (42), 7864-7870",
    "doi": "",
    "type": "Journal"
  },
  {
    "year": "2009",
    "title": "Large-scale soft colloidal template synthesis of 1.4 nm thick CdSe nanosheets",
    "authors": "JS Son, XD Wen, J Joo, J Chae, S Baek, K Park, JH Kim, K An, JH Yu, ...",
    "journal": "Angew. Chem., Int. Ed 48 (37), 6861-6864",
    "doi": "",
    "type": "Journal"
  },
  {
    "year": "2009",
    "title": "A reduction pathway in the synthesis of PbSe nanocrystal quantum dots",
    "authors": "J Joo, JM Pietryga, JA McGuire, SH Jeon, DJ Williams, HL Wang, ...",
    "journal": "Journal of the American Chemical Society 131 (30), 10620-10628",
    "doi": "",
    "type": "Journal"
  },
  {
    "year": "2008",
    "title": "New aspects of carrier multiplication in semiconductor nanocrystals",
    "authors": "JA McGuire, J Joo, JM Pietryga, RD Schaller, VI Klimov",
    "journal": "Accounts of chemical research 41 (12), 1810-1819",
    "doi": "",
    "type": "Journal"
  },
  {
    "year": "2008",
    "title": "Large‐scale synthesis of water dispersible ceria nanocrystals by a simple sol–gel process and their use as a chemical mechanical planarization slurry",
    "authors": "T Yu, YI Park, MC Kang, J Joo, JK Park, HY Won, JJ Kim, T Hyeon",
    "journal": "European Journal of Inorganic Chemistry 2008 (6), 855-858",
    "doi": "",
    "type": "Journal"
  },
  {
    "year": "2007",
    "title": "Synthesis of monodisperse spherical nanocrystals",
    "authors": "J Park, J Joo, SG Kwon, Y Jang, T Hyeon",
    "journal": "Angewandte Chemie International Edition 46 (25), 4630-4660",
    "doi": "",
    "type": "Journal"
  },
  {
    "year": "2007",
    "title": "Ultrafast electronic dynamics of monodisperse PbS and CdS nanoparticles/nanorods: Effects of size on nonlinear relaxation",
    "authors": "F Wu, JH Yu, J Joo, T Hyeon, JZ Zhang",
    "journal": "Optical Materials 29 (7), 858-866",
    "doi": "",
    "type": "Journal"
  },
  {
    "year": "2006",
    "title": "Low-temperature solution-phase synthesis of quantum well structured CdSe nanoribbons",
    "authors": "J Joo, JS Son, SG Kwon, JH Yu, T Hyeon",
    "journal": "Journal of the American Chemical Society 128 (17), 5632-5633",
    "doi": "",
    "type": "Journal"
  },
  {
    "year": "2006",
    "title": "Interplay between the local structural disorder and the length of structural coherence in stabilizing the cubic phase in nanocrystalline ZrO2",
    "authors": "M Gateshki, V Petkov, T Hyeon, J Joo, M Niederberger, Y Ren",
    "journal": "Solid state communications 138 (6), 279-284",
    "doi": "",
    "type": "Journal"
  },
  {
    "year": "2006",
    "title": "Single unit cell thick samaria nanowires and nanoplates",
    "authors": "T Yu, J Joo, YI Park, T Hyeon",
    "journal": "Journal of the American Chemical Society 128 (6), 1786-1787",
    "doi": "",
    "type": "Journal"
  },
  {
    "year": "2005",
    "title": "Large-scale nonhydrolytic sol-gel synthesis of uniform-sized ceria nanocrystals with spherical, wire, and tadpole shapes",
    "authors": "T Yu, J Joo, YI Park, T Hyeon",
    "journal": "Angewandte Chemie-International Edition 44 (45), 7411-7414",
    "doi": "",
    "type": "Journal"
  },
  {
    "year": "2005",
    "title": "Large-Scale Synthesis of TiO2 Nanorods via Nonhydrolytic Sol−Gel Ester Elimination Reaction and Their Application to Photocatalytic Inactivation of E. coli",
    "authors": "J Joo, SG Kwon, T Yu, M Cho, J Lee, J Yoon, T Hyeon",
    "journal": "The Journal of Physical Chemistry B 109 (32), 15297-15302",
    "doi": "",
    "type": "Journal"
  },
  {
    "year": "2005",
    "title": "Synthesis of ZnO nanocrystals with cone, hexagonal cone, and rod shapes via non-hydrolytic ester elimination sol-gel reactions",
    "authors": "J Joo, SG Kwon, HY Jung, T Hyeon",
    "journal": "Advanced Materials 17 (15), 1873-1877",
    "doi": "",
    "type": "Journal"
  },
  {
    "year": "2005",
    "title": "Synthesis of quantum-sized cubic ZnS nanorods by the oriented attachment mechanism",
    "authors": "JH Yu, J Joo, HM Park, SI Baik, YW Kim, SC Kim, T Hyeon",
    "journal": "Journal of the American Chemical Society 127 (15), 5662-5670",
    "doi": "",
    "type": "Journal"
  },
  {
    "year": "2004",
    "title": "Diameter-controlled synthesis of discrete and uniform-sized single-walled carbon nanotubes using monodisperse iron oxide nanoparticles embedded in zirconia nanoparticle arrays …",
    "authors": "S Han, T Yu, J Park, B Koo, J Joo, T Hyeon, S Hong, J Im",
    "journal": "The Journal of Physical Chemistry B 108 (24), 8091-8095",
    "doi": "",
    "type": "Journal"
  },
  {
    "year": "2003",
    "title": "Generalized and facile synthesis of semiconducting metal sulfide nanocrystals",
    "authors": "J Joo, HB Na, T Yu, JH Yu, YW Kim, F Wu, JZ Zhang, T Hyeon",
    "journal": "Journal of the American Chemical Society 125 (36), 11100-11105",
    "doi": "",
    "type": "Journal"
  },
  {
    "year": "2003",
    "title": "Multigram scale synthesis and characterization of monodisperse tetragonal zirconia nanocrystals",
    "authors": "J Joo, T Yu, YW Kim, HM Park, F Wu, JZ Zhang, T Hyeon",
    "journal": "Journal of the American Chemical Society 125 (21), 6553-6557",
    "doi": "",
    "type": "Journal"
  },
  {
    "year": "Year not listed",
    "title": "Fabrication of novel mesoporous dimethylsiloxane-incorporated silicas",
    "authors": "J Joo, T Hyeon, J Hyeon-Lee",
    "journal": "Chemical Communications 36 (16), 1487-1488",
    "doi": "",
    "type": "Journal"
  }
],

  otherSections: [
  {
    "title": "Patent",
    "items": [
      {
        "year": "2019",
        "title": "Electron transport layer for flexible perovskite solar cell and flexible perovskite solar cell including the same",
        "authors": "MJ KO, J Joo, HJ Son, JK Kim, DK Lee, I Jeong",
        "journal": "US Patent 10,431,759",
        "doi": "",
        "type": "Patent"
      }
    ]
  },
  {
    "title": "Conference / Abstract",
    "items": [
      {
        "year": "2012",
        "title": "Surface modification of lead chalcogenide quantum dots for enhanced optical properties and improved stability against oxidation",
        "authors": "WK Bae, LA Padilha, J Joo, VI Klimov, JM Pietryga",
        "journal": "ABSTRACTS OF PAPERS OF THE AMERICAN CHEMICAL SOCIETY 243",
        "doi": "",
        "type": "Conference / Abstract"
      },
      {
        "year": "2010",
        "title": "Dark Exciton States in PbSe Nanocrystals",
        "authors": "R Schaller, D Bussian, J Joo, J Pietryga, V Klimov, S Crooker",
        "journal": "APS March Meeting Abstracts 2010, A9. 007",
        "doi": "",
        "type": "Conference / Abstract"
      },
      {
        "year": "2009",
        "title": "MCD investigation on Mn doped CdSe Quantum Ribbons",
        "authors": "K Tivakornsasithorn, X Liu, M Dobrowolska, JK Furdyna, JH Yu, J Joo, ...",
        "journal": "APS March Meeting Abstracts, X22. 003",
        "doi": "",
        "type": "Conference / Abstract"
      },
      {
        "year": "2009",
        "title": "Carrier Multiplication in PbSe Nanocrystals and Extraneous Processes",
        "authors": "JA McGuire, J Joo, JM Pietryga, I Robel, VI Klimov",
        "journal": "APS March Meeting Abstracts, H10. 009",
        "doi": "",
        "type": "Conference / Abstract"
      },
      {
        "year": "2006",
        "title": "Synthesis and Characterization of Ultrathin Nanorods, Nanowires, and Nanoribbons of Oxides and Chalcogenides",
        "authors": "T Hyeon, K An, SH Choi, J Joo, T Yu, JH Yu",
        "journal": "한국진공학회 학술발표회초록집, 58-58",
        "doi": "",
        "type": "Conference / Abstract"
      },
      {
        "year": "2005",
        "title": "Generalized and large-scale synthesis of uniform-sized nanocrystals and nanorods",
        "authors": "T Hyeon, J Park, J Joo, T Yu, JH Yu, K An",
        "journal": "05AIChE: 2005 AIChE Annual Meeting and Fall Showcase",
        "doi": "",
        "type": "Conference / Abstract"
      },
      {
        "year": "2003",
        "title": "Synthesis and characterization of monodisperse transition metal oxide nanocrystals.",
        "authors": "T Hyeon, J Park, J Joo, SW Kim",
        "journal": "ABSTRACTS OF PAPERS OF THE AMERICAN CHEMICAL SOCIETY 225, U437-U437",
        "doi": "",
        "type": "Conference / Abstract"
      },
      {
        "year": "2003",
        "title": "The synthesis of Highly Crystalline and monodisperse maghemite and zirconia Nanocrystallites without size-selection process",
        "authors": "JN Park, J Joo, T Yoo, HB Na, SS Lee, HM Park, YW Kim, TH Hyun",
        "journal": "Proceedings of the Korea Crystallographic Association Conference, 20-20",
        "doi": "",
        "type": "Conference / Abstract"
      }
    ]
  },
  {
    "title": "Preprint",
    "items": [
      {
        "year": "2010",
        "title": "Revealing the Exciton Fine Structure in PbSe Nanocrystal Quantum Dots",
        "authors": "RD Schaller, SA Crooker, DA Bussian, JM Pietryga, J Joo, VI Klimov",
        "journal": "arXiv preprint arXiv:1006.5673",
        "doi": "",
        "type": "Preprint"
      }
    ]
  },
  {
    "title": "Book / Proceedings",
    "items": [
      {
        "year": "2006",
        "title": "Synthesis and catalytic applications of uniform-sized nanocrystals",
        "authors": "J Park, J Joo, Y Jang, T Hyeon",
        "journal": "Studies in surface science and catalysis 159, 47-54",
        "doi": "",
        "type": "Book / Proceedings"
      }
    ]
  },
  {
    "title": "Erratum",
    "items": [
      {
        "year": "2000",
        "title": "Erratum: Fabrication of novel mesoporous dimethylsiloxane-incorporated silicas (Chemical Communications (2000)(1487))",
        "authors": "J Joo, T Hyeon, J Hyeon-Lee",
        "journal": "Chemical Communications, 2173",
        "doi": "",
        "type": "Erratum"
      }
    ]
  },
  {
    "title": "Duplicate / Alternate-language record",
    "items": [
      {
        "year": "2014",
        "title": "Viabilidad, composición de los ácidos grasos y estructura del alga coralina Corallina pilulifera",
        "authors": "JY Kang, IMP Benliro, IJ Lee, JY Choi, J Joo, YS Choi, DS Hwang, ...",
        "journal": "Botanical Sciences 92 (1), 103-109",
        "doi": "",
        "type": "Duplicate / Alternate-language record"
      },
      {
        "year": "2007",
        "title": "Synthese monodisperser sphärischer Nanokristalle",
        "authors": "J Park, J Joo, SG Kwon, Y Jang, T Hyeon",
        "journal": "Angewandte Chemie 119 (25), 4714-4745",
        "doi": "",
        "type": "Duplicate / Alternate-language record"
      }
    ]
  },
  {
    "title": "Needs review",
    "items": [
      {
        "year": "2007",
        "title": "John McGuire",
        "authors": "JA McGuire, J Joo, JM Pietryga, RD Schaller, VI Klimov, SA Ivanov, ...",
        "journal": "Nature 447, 441",
        "doi": "",
        "type": "Needs review"
      },
      {
        "year": "2003",
        "title": "Rapid sonochemical synthesis of spherical-shaped mesoporous SBA-15 silica and Ti-incorporated SBA-15 silica materials",
        "authors": "SK Lee, J Lee, A Joo, T Hyeon, WS Ahn, HI Lee, CH Lee, W Choi",
        "journal": "KOREAN SOC INDUSTRIAL ENGINEERING CHEMISTRY",
        "doi": "",
        "type": "Needs review"
      }
    ]
  }
]
};
