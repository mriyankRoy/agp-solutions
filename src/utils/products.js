export const products = [
  /* --------------------------------------------------------------------------
     CATEGORY 1 — INSTRUMENT & GENERATOR PACKAGE ACCESSORIES
  --------------------------------------------------------------------------- */
  {
    category: "Instrument & Generator Package Accessories",
    slug: "instrument-generator-accessories",
    categoryId: "CAT-ACC",
    image: {
      url: "https://res.cloudinary.com/dc912sjxj/image/upload/v1767795640/AGP_Instrument_Generator_Package_Accessories_pwyvhg.webp",
      alt: "Close-up of industrial sensors and manometers on a pipeline.",
    },
    description:
      "Sensors, gauges, and monitoring systems for continuous fluid level, gas, and temperature control within generator and plant packages.",
    items: [
      {
        id: "CP5340",
        name: "Hydrostatic Level Transmitter",
        manufacturerPartNumber: "CP5340",
        AGPPartNumber: "AGP-ACC-001",
        Make: "Hitec",
        images: [
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1767807823/Hitec_Hydrostatic_Level_Transmitter_ofru7c.webp",
        ],
        shortDescription:
          "High-precision 316L SS hydrostatic transmitter for heating oil, gasoline, and hydrocarbons.",
        description:
          "The CP5340 uses piezoresistive technology to measure differential pressure between the liquid surface and the submerged transmitter. Built with a 316L stainless steel body and PA6 polyamide ends, it features a 2-conductor FEP cable with an integrated capillary for atmospheric reference. Designed for immersion in harsh hydrocarbons, it supports pendulum suspension or flat-bottom tank mounting. Note: Do not press on the protective 316L membrane to avoid damage.",
        uses: [
          "Level measurement of heating oil, gasoline, and hydrocarbons",
          "Continuous monitoring in 316L/PA6/FEP compatible liquids",
          "Diesel day tank and industrial fluid monitoring",
          "Remote inventory via 4-20mA loop (4mA = 0m, 20mA = Full Scale)",
        ],
        downloads: [
          {
            name: "Datasheet",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/v1765811657/Datasheet_-_GB_CP5340_xdizgc.pdf",
          },
          {
            name: "Manual",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/v1765811714/Manual_-_CP5340_1_gdlfje.pdf",
          },
        ],
        details: {
          PowerSupply: "6-38V DC (at transmitter terminals)",
          OutputSignal: "4-20mA (2-wire loop)",
          MeasurementRange: "0-5m H2O (Customizable)",
          Accuracy: "±0.5% F.S.",
          Materials: "316L Stainless Steel, PA6 Polyamide, FEP Cable Sheath",
          CableType: "2 conductors + capillary under shielding",
          Dimensions: "22mm Diameter x 180mm Height",
          Weight: "170g (including standard 5m cable)",
          ProtectionRating: "IP68 (Submersible)",
        },
      },
      {
        id: "GMS-4-xx-EUR-x",
        name: "Gasmaster 4 Control Panel",
        manufacturerPartNumber: "GMS-4-xx-EUR-x",
        AGPPartNumber: "AGP-ACC-002",
        Make: "Crowcon",
        images: [
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1767807824/Crowcon_Gasmaster_4_Control_Panel_01_k8aan0.webp",
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1767807823/Crowcon_Gasmaster_4_Control_Panel_02_kgxlu7.webp",
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1767807825/Crowcon_Gasmaster_4_Control_Panel_03_peszlq.webp",
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1767807823/Crowcon_Gasmaster_4_Control_Panel_04_nvzutn.webp",
        ],
        shortDescription:
          "High-versatility 4-channel control hub for integrated gas, fire, and flame detection with Modbus connectivity.",
        description:
          "The Gasmaster 4 is a compact yet powerful wall-mounted control system designed for centralized safety management. It features a large, multi-lingual LCD that provides simultaneous real-time data from up to four detectors, including 4-20mA, mV pellistor, and fire zones. Engineered for seamless integration, it offers RS-485 Modbus for DCS/PLC/SCADA interfacing alongside dual-stage independent alarms per channel. The intuitive front-panel interface facilitates rapid re-calibration and system testing without specialized tools, while a time-stamped event log ensures full traceability of alarm and fault histories.",
        uses: [
          "Centralized monitoring of gas, smoke, and flame detectors in a single hub",
          "Automated industrial safety via 8A non-inductive double-pole relay outputs",
          "Integration into plant-wide SCADA/PLC networks via RS-485 Modbus RTU",
          "Remote safety management through inhibit and re-set command facilities",
          "High-reliability deployment using internal 1.2Ah battery backup for power redundancy",
        ],
        downloads: [
          {
            name: "Datasheet",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/v1767102451/Gasmaster-Datasheet-12_2025_nzqots.pdf",
          },
          {
            name: "Manual",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/v1767102454/M070010-Gasmaster-III-Manual-Issue-2-UK_nmjcgs.pdf",
          },
        ],
        details: {
          Dimensions: "288 x 278 x 110mm (4.5kg Chassis)",
          Enclosure: "IP65 Rated Cast Aluminium with Flame-Retardant ABS",
          PowerSupply: "Global Compatibility: 90-264Vac or 20-30Vdc",
          EmergencyBackup: "Internal 1.2Ah Lead-Acid Battery Reserve",
          InputCapacity:
            "4-Channel Flex (4-20mA / mV Pellistor / Fire Loops / ESU)",
          RelayOutputs: "8A 250Vac DPCO Contacts (Alarm 1, Alarm 2, Fault)",
          Communication: "RS-485 Modbus RTU & Digital Event Upload",
          DataLogging: "300 Event Capacity (Alarms, Faults & Interventions)",
          UserInterface:
            "Multi-Lingual LCD (8 Languages) with 85dB Integral Sounder",
          Standards: "ATEX Certified, EMC: EN50270, EN60945, FCC Part 15",
          ThermalRange: "-10°C to +50°C (14°F to 122°F)",
        },
      },
      {
        id: "XG2-xx-xx-xx",
        name: "Xgard Type 5 Gas Detector (H2)",
        manufacturerPartNumber: "XG2-xx-xx-xx",
        AGPPartNumber: "AGP-ACC-003",
        Make: "Crowcon",
        images: [
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1767801637/Crowcon_Xgard_01_ypnfj4.webp",
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1767801637/Crowcon_Xgard_02_rdvmev.webp",
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1767801639/Crowcon_Xgard_03_zesj6c.webp",
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1767801643/Crowcon_Xgard_04_wuuyft.webp",
        ],
        shortDescription:
          "Flameproof (Exd) electrochemical detector for toxic gases and Oxygen monitoring with 2-wire 4-20mA output.",
        description:
          "The Xgard Type 2 is a high-reliability, flameproof (Exd) gas detector specifically designed for the monitoring of Oxygen and a wide spectrum of toxic gases. Combining an advanced electrochemical sensor with an integrated amplifier/transmitter, it delivers a precise 2-wire 4-20mA signal. Housed in a rugged, polyester-coated aluminium or 316 stainless steel enclosure, the Type 2 is optimized for easy maintenance with plug-in sensors and versatile mounting options, ensuring functional safety in harsh industrial environments like water treatment and power facilities.",
        uses: [
          "Toxic gas monitoring and Oxygen depletion detection in industrial plant rooms",
          "Safety deployment in hazardous areas (Exd Flameproof) requiring SIL 1-3 validation",
          "Water treatment and research facility hazardous atmosphere surveillance",
          "Integration into legacy 2-wire control systems via 4-20mA current loops",
        ],
        downloads: [
          {
            name: "Datasheet",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/v1767122046/Xgard-Datasheet-2025_Aug_aqwtwy.pdf",
          },
          {
            name: "Manual",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/v1767123554/Manual-M071038-Xgard-Consolidated-Issue-1-June-18_tfnl8z.pdf",
          },
        ],
        details: {
          SensorTechnology: "Poison-Resistant Catalytic Bead",
          SignalOutput: "3-Wire 4-20mA (Configurable Sink or Source)",
          DetectionRange: "0-100% LEL (Lower Explosive Limit)",
          PhysicalDimensions: "156 x 166 x 111 mm",
          UnitWeight: "Aluminium: 1kg | Stainless Steel: 3.1kg",
          HousingMaterial:
            "Corrosion-Resistant Aluminium or 316 Stainless Steel",
          EnvironmentalRating: "IP65 Ingress Protection",
          OperationalVoltage: "10-30V DC",
          PowerConsumption: "50mA @ 24V DC (1.2W)",
          ThermalTolerance: "-40°C to +55°C (-40°F to +131°F)",
          HumidityRange: "0-99% RH (Non-condensing)",
          ResponseTime: "T90 < 15 Seconds (Typical)",
          CableInterface: "M20 or 1/2” NPT Entry (Right-side)",
          WiringTerminals: "0.5 to 2.5mm² Cross-section",
          Compliance:
            "ATEX/IECEx II 2 GD (Ex db IIC T6/T4), UL Class I Div 1, FCC Part 15",
          AccuracyStability:
            "Repeatability <2% FSD; Zero Drift <2% FSD per Month",
        },
      },
      {
        id: "LAG-13 KR",
        name: "Tank Bund Leak Detection Sensor",
        manufacturerPartNumber: "LAG-13 KR",
        AGPPartNumber: "AGP-ACC-004",
        Make: "Afriso",
        images: [
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1767807822/Afriso_Tank_Bund_Leak_Detection_u0f81t.webp",
          "https://res.cloudinary.com/dc912sjxj/image/upload/v1765716273/Afriso_Tank_Bund_Leak_Detection_mq9ekl.png",
          "https://res.cloudinary.com/dc912sjxj/image/upload/v1765716273/Afriso_Tank_Bund_Leak_Detection_mq9ekl.png",
        ],
        shortDescription:
          "Float-type sensor for immediate detection of liquid accumulation in tank bunds.",
        description:
          "The Afriso Leak Detection Sensor is a float-type device designed for the interstice or bund of fuel tanks. Featuring a standard 0.5-inch or 1-inch BSPT/NPT connection, it provides immediate alerts if fuel or water accumulates in the containment area, preventing environmental contamination and ensuring regulatory compliance.",
        uses: [
          "Double-wall tank interstitial monitoring",
          "Generator drip tray leak detection",
          "Sumps and containment bund monitoring",
          "Environmental compliance for fuel storage",
        ],
        // UPDATED: Replaced pdfLink with downloads array
        downloads: [
          { name: "Datasheet", url: "/pdfs/afriso-leak-detection.pdf" },
        ],
        details: {
          SensorType: "Float Switch (NO/NC)",
          Output: "Potential-free contact",
          Connection: "1-inch NPT Male",
          OperatingFluids: "Diesel, Oil, Water",
          Material: "Polypropylene (PP)",
          MaxPressure: "1 bar",
        },
      },
      {
        id: "TH109-009",
        name: "Multi-Use Industrial Thermostat",
        manufacturerPartNumber: "TH109-009",
        AGPPartNumber: "AGP-ACC-005",
        Make: "PECO",
        images: [
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1767807824/PECO_Multi-Use_Industrial_Thermostat_xpanjv.webp",
        ],
        shortDescription:
          "Rugged NEMA 4X line-voltage mechanical thermostat for high-capacity industrial heating or cooling.",
        description:
          "The PECO TH109-009 is a heavy-duty line-voltage mechanical thermostat housed in a gray NEMA 4X plastic enclosure, suitable for both indoor and outdoor surface mounting. It features automatic changeover for heat or cool applications with a fixed 3°F differential. Designed for harsh environments, it handles high resistive loads up to 25A and provides reliable temperature regulation in plant rooms and generator enclosures.",
        uses: [
          "Industrial heating or cooling control",
          "Indoor and outdoor enclosure temperature regulation",
          "Frost protection and HVAC in mechanical rooms",
          "High-capacity resistive and motor load switching",
        ],
        downloads: [
          {
            name: "Datasheet",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/v1767218814/Datasheet_-_TH109-009t_kobbbs.pdf",
          },
          {
            name: "Manual",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/v1767218814/Manual_-_TH109-009_jnggct.pdf",
          },
        ],
        details: {
          ControlRange: "40°F to 100°F",
          Differential: "3°F (Fixed)",
          SwitchAction: "SPDT (Heat or Cool)",
          ContactRatingResistive: "25A @ 120V/240V/277V AC",
          FullLoadAmps: "16A @ 120V, 12A @ 240V AC",
          LockedRotorAmps: "80A @ 120V, 60A @ 240V",
          Enclosure: "NEMA 4X (Gray Plastic)",
          Mounting: "Surface Mount (Indoor/Outdoor)",
          Height: "13.21 cm",
          Width: "21.08 cm",
          Depth: "9.65 cm",
        },
      },
    ],
  },

  /* --------------------------------------------------------------------------
     CATEGORY 2 — ELECTRICAL ITEMS AND ACCESSORIES
  --------------------------------------------------------------------------- */
  {
    category: "Electrical Items and Accessories",
    slug: "electrical-items-accessories",
    categoryId: "CAT-ELEC",
    image: {
      url: "https://res.cloudinary.com/dc912sjxj/image/upload/v1767795637/AGP_Electrical_Items_and_Accessories_z0et1c.webp",
      alt: "Interior view of an industrial electrical panel with circuit breakers and wires.",
    },
    description:
      "High-current switches, transformers, heaters, and lighting solutions for industrial power distribution and enclosure management.",
    items: [
      {
        id: "DURITE-0-605-53",
        name: "Battery Isolator Switch (Heavy-Duty)",
        manufacturerPartNumber: "0-605-53",
        AGPPartNumber: "AGP-ELEC-001",
        Make: "Durite",
        images: [
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1767807823/0-605-53_Durite_01_selgtv.webp",
        ],
        shortDescription:
          "Weatherproof IP66-rated 400A battery isolator with 4000A surge capacity and removable safety key.",
        description:
          "The Durite 0-605-53 is a professional-grade battery disconnect designed for 12V-24V systems. It supports a 400A continuous load and a massive 4000A peak surge for 10 seconds. Engineered with solid copper contacts and an IP66 rating, it is built for extreme environments. The design includes a removable key and an 8mm lockout hole to ensure safety during maintenance or to prevent unauthorized use.",
        uses: [
          "Main battery disconnect for heavy-duty diesel generators",
          "Safety lockout for construction and agricultural machinery",
          "Marine-grade battery isolation (IP66 compliant)",
          "Emergency power termination for industrial vehicles",
        ],
        downloads: [
          {
            name: "Datasheet",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/v1767373873/Datasheet_-_0-605-53_Durite_l6nk8j.pdf",
          },
        ],
        details: {
          SwitchType: "Heavy-Duty Battery Isolator (Normally Open)",
          OperatingVoltage: "12V to 24V DC (24V Max)",
          RatedContinuousLoad: "400A @ 24V",
          PeakSurgeCapacity: "4000A for 10 seconds",
          Hardware: "Dual M10 Threaded Bolts",
          ContactMaterial: "Solid Copper",
          ThermalRange: "-40°C to +85°C",
          TerminalTorque: "24Nm",
          Polarity: "Non-Polarised",
          MountingCutout: "22.5mm Diameter",
          IngressProtection: "IP66 (Dust/Water Jet Proof)",
          UnitWeight: "640g",
        },
      },
      {
        id: "LITTELFUSE-880175-0002",
        name: "Switch Master TR 2 Pole 500A. YELLOW | Series: TR",
        manufacturerPartNumber: "880175-0002",
        AGPPartNumber: "AGP-ELEC-002",
        Make: "Littelfuse",
        images: [
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1767801088/880175-0002_Littlefuse_01_u1vbjr.webp",
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1767801091/880175-0002_Littlefuse_02_u9hdll.webp",
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1767801090/880175-0002_Littlefuse_04_vmkblq.webp",
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1767801090/880175-0002_Littlefuse_03_bgew81.webp",
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1767801090/880175-0002_Littlefuse_05_q4ac1j.webp",
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1767801092/880175-0002_Littlefuse_07_cjhwdk.webp",
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1767801092/880175-0002_Littlefuse_06_hu8cd9.webp",
        ],
        shortDescription:
          "IP67/IPX9K rated 500A dual-pole battery disconnect switch with yellow knob and integrated LOTO.",
        description:
          "The Littelfuse 880175-0002 is a heavy-duty, dual-pole single-throw (DPST) master battery disconnect switch featuring a yellow knob. Rated at IP67 and IPX9K, it is designed for high-vibration and high-shock environments, allowing for the simultaneous switching of two circuits or both positive and negative lines.",
        uses: [
          "Heavy Trucks and Construction equipment",
          "Emergency Vehicles and Military applications",
          "Bus and Transit systems",
          "Agricultural equipment requiring high vibration tolerance",
        ],
        downloads: [
          {
            name: "Datasheet",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/v1767375087/Datasheet_-_880175-0002_Littlefuse_peo0vz.pdf",
          },
          {
            name: "Manual",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/v1767375088/Manual_-_880175-0002_Littlefuse_z6cz4e.pdf",
          },
          {
            name: "Installation Instruction",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/v1767376084/Installation_Instruction_-_880175-0002_kcevua.pdf",
          },
        ],
        details: {
          VoltageRating: "32V DC",
          ContinuousCurrent: "500A per circuit (with 2x 4/0 cables)",
          InrushRating: "2250A (30 seconds)",
          ProtectionRating: "IP67 / IPX9K",
          Operation: "DPST Rotary Switch (Lock-out/Tag-out)",
          TerminalSize: "Four M12 x 25mm Tin-Plated Copper Studs",
          OperatingTemperature: "-40°C to +85°C",
          Mounting: 'Flange; 2x M8 or 5/16" holes',
        },
      },
      {
        id: "FRICO-C5N",
        name: "CAT C5N Industrial Fan Heater (5kW)",
        manufacturerPartNumber: "C5N",
        AGPPartNumber: "AGP-ELEC-003",
        Make: "Frico",
        images: [
          "https://res.cloudinary.com/dc912sjxj/image/upload/v1767813264/C5N_Frico_01_w87vcz.webp",
        ],
        shortDescription:
          "Compact 5kW industrial fan heater with IP44 rating and 480 m³/h airflow.",
        description:
          "The Frico CAT C5N is a fixed-mounting industrial fan heater designed for small warehouses, garages, and workshops. It features a traffic white (RAL 9016) galvanized steel casing and telegrey (RAL 7046) outlet grilles. The unit includes a wall bracket allowing for 10° rotation to optimize heat distribution.",
        uses: [
          "Small warehouse heating",
          "Garage and workshop climate control",
          "Retail shop heating",
          "Plant room frost protection",
        ],
        downloads: [
          {
            name: "Datasheet",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/v1767377220/Datasheet_-_C5N_Frico_vxjedg.pdf",
          },
          {
            name: "Manual",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/v1767377221/Manual_-_C5N_Frico_qb2yfh.pdf",
          },
        ],
        details: {
          HeatOutput: "5kW / 2.5kW (Adjustable)",
          Voltage: "400V 3N~ (Electric Heat)",
          ControlMotorVoltage: "230V",
          Airflow: "480 m³/h",
          ProtectionRating: "IP44",
          Dimensions: "335mm (W) x 255mm (H) x 276mm (D)",
          Weight: "6.4 kg",
          FanSpeed: "1350 rpm",
          HeatAmperage: "7.3A / 6.3A",
          AmbientTempRange: "-20°C to +30°C",
          TemperatureRise: "31°C (at max output)",
        },
      },
      {
        id: "SCHNEIDER-EXN30T3H",
        name: "Dry Type Transformer (30kVA)",
        manufacturerPartNumber: "EXN30T3H",
        AGPPartNumber: "AGP-ELEC-004",
        Make: "Schneider",
        images: [
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1767814062/EXN30T3H_Schneider_01_uq3ex8.webp",
        ],
        shortDescription:
          "High-efficiency 30kVA DOE 2016 compliant transformer, 480V Delta to 208Y/120V with 150°C rise.",
        description:
          "The Schneider EXN30T3H is a Square D low-voltage dry-type distribution transformer fully compliant with DOE 2016 and NRCan energy standards. Featuring aluminum windings and a 220°C insulation system, it achieves 98.23% efficiency at 35% load. The unit is designed for space-saving floor mounting with front-only exhaust vents, allowing for a tight 1/2-inch rear clearance. It is shipped as a Type 2 indoor unit but is field-convertible to Type 3R for outdoor applications using a weathershield.",
        uses: [
          "Energy-efficient low voltage power distribution",
          "Indoor and outdoor industrial electrical systems",
          "Seismic-rated installations (ICS ES AC 156 tested)",
          "Square D coordinated breaker and panelboard systems",
          "Space-constrained utility and plant rooms",
        ],
        downloads: [
          {
            name: "Datasheet",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/v1767377919/Datasheet_-_EXN30T3H_Schneider_gfq7er.pdf",
          },
        ],
        details: {
          kVARating: "30 kVA",
          PrimaryVoltage: "480V Delta (3-wire)",
          SecondaryVoltage: "208Y/120V (4-wire)",
          Phase: "Three-Phase",
          TemperatureRise: "150°C",
          Efficiency: "98.23% (DOE 2016/NRCan compliant)",
          EnclosureType: "Type 2 (Field convertible to Type 3R)",
          Cooling: "Natural Air (Front exhaust)",
          WindingMaterial: "Aluminum",
          SoundLevel: "3dB below NEMA ST-20",
          Mounting: "Floor (Optional wall/trapeze accessories available)",
        },
      },
      {
        id: "SCHNEIDER-A9F55110",
        name: "Acti9 iC60H 10A Single Pole 10kA D Curve MCB",
        manufacturerPartNumber: "A9F55110",
        AGPPartNumber: "AGP-ELEC-MCB-10A-D",
        Make: "Schneider Electric",
        images: [
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1767877458/A9F55110_Schneider_Electric_01_ttiwkq.webp",
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1767877456/A9F55110_Schneider_Electric_02_ilktzt.webp",
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1767877456/A9F55110_Schneider_Electric_03_j88rm2.webp",
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1767877457/A9F55110_Schneider_Electric_04_sxjf2h.webp",
        ],
        shortDescription:
          "High-performance 10A 1P 10kA Type D MCB for industrial and commercial circuit protection.",
        description:
          "The Schneider Acti9 iC60H (A9F55110) is a multi-standard miniature circuit breaker that provides circuit protection against short-circuit and overload currents. It features a D-curve tripping characteristic designed specifically for circuits with high inrush currents, such as motor starters and transformers. Its VisiSafe and VisiTrip features ensure maximum safety and rapid intervention during maintenance.",
        uses: [
          "Industrial motor and transformer protection",
          "Commercial electrical distribution boards",
          "High inrush current lighting circuits",
          "Protection of power outlets in workshop environments",
        ],
        downloads: [
          {
            name: "Datasheet",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/v1767643038/kwribxkcsbkmuuaq6mvx.pdf",
          },
        ],
        details: {
          CurrentRating: "10A",
          VoltageRating: "230V AC (50/60 Hz)",
          ShortCircuitRating:
            "10kA Icn (BS EN 60898-1) / 15kA Icu (BS EN 60947-2)",
          TrippingCurve: "Type D (10 to 14 x In)",
          NumberOfPoles: "1P (Single Pole)",
          MountingMode: "Clip-on DIN Rail (35mm)",
          ConnectionTerminals:
            "Tunnel type (1..25 mm² rigid / 1..16 mm² flexible)",
          TighteningTorque: "2 N.m",
          MechanicalDurability: "20,000 cycles",
          ElectricalDurability: "10,000 cycles",
          IPRating: "IP20 (Terminal) / IP40 (Enclosure)",
          PollutionDegree: "3",
          OperatingTemperature: "-35°C to 70°C",
          StorageTemperature: "-40°C to 85°C",
          Dimensions: "85mm (H) x 18mm (W) x 78.5mm (D)",
          Weight: "0.125 kg",
          LegacyPartNumber: "C60HD110",
          Standards: "EN/IEC 60898-1, EN/IEC 60947-2",
        },
      },
      {
        id: "SCHNEIDER-A9F53110",
        name: "Acti9 iC60H 1P 10A B Miniature Circuit Breaker",
        manufacturerPartNumber: "A9F553110",
        AGPPartNumber: "AGP-ELEC-MCB-10A-B",
        Make: "Schneider Electric",
        images: [
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1767878109/A9F553110_Schneider_Electric_01_e4un9m.webp",
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1767878109/A9F553110_Schneider_Electric_02_xkgjoq.webp",
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1767878111/A9F553110_Schneider_Electric_03_tkpnni.webp",
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1767878112/A9F553110_Schneider_Electric_04_rwhsk6.webp",
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1767878112/A9F553110_Schneider_Electric_05_uq6mtx.webp",
        ],
        shortDescription:
          "10A Single Pole 10kA B-Curve MCB for circuit protection against short-circuit and overload currents.",
        description:
          "The Acti9 iC60H is a multi-standard miniature circuit breaker with a B-curve tripping characteristic. It provides thermal-magnetic protection and is suitable for both AC and DC networks. Features include VisiTrip for fault indication and VisiSafe for guaranteed contact opening during maintenance. Designed for DIN rail mounting with double tunnel terminals for secure cabling.",
        uses: [
          "Residential and commercial circuit protection",
          "Protection of lighting and power circuits with low inrush currents",
          "Control and isolation of electrical distribution systems",
          "Suitable for AC and DC application environments",
        ],
        downloads: [
          {
            name: "Datasheet",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/v1767643397/um2osdm5raby4sg0kajn.pdf",
          },
        ],
        details: {
          CurrentRating: "10A",
          VoltageRating: "230V AC / 72V DC",
          ShortCircuitRating:
            "10kA Icn (BS EN 60898-1) / 15kA Icu (BS EN 60947-2)",
          TrippingCurve: "Type B (3 to 5 x In)",
          NumberOfPoles: "1P (Single Pole)",
          NetworkType: "AC / DC",
          MountingMode: "Clip-on DIN Rail (35mm)",
          ConnectionTerminals:
            "Single terminal (Top or Bottom) 1..25 mm² rigid / 1..16 mm² flexible",
          TighteningTorque: "2 N.m",
          MechanicalDurability: "20,000 cycles",
          ElectricalDurability: "10,000 cycles",
          IPRating: "IP20 (Terminals) / IP40 (Enclosure)",
          OperatingTemperature: "-35°C to 70°C",
          Dimensions: "85mm (H) x 18mm (W) x 78.5mm (D)",
          Weight: "0.125 kg",
          Standards: "EN/IEC 60898-1, EN/IEC 60947-2",
          Warranty: "18 Months",
        },
      },
      {
        id: "SCHNEIDER-A9F53106",
        name: "Acti9 iC60H 1P 6A B Miniature Circuit Breaker",
        manufacturerPartNumber: "A9F53106",
        AGPPartNumber: "AGP-ELEC-MCB-06A-B",
        Make: "Schneider Electric",
        images: [
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1767878716/A9F53106_Schneider_Electric_01_t6lpqj.webp",
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1767878717/A9F53106_Schneider_Electric_02_fo4lks.webp",
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1767878718/A9F53106_Schneider_Electric_03_jtnatz.webp",
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1767878719/A9F53106_Schneider_Electric_04_ictub7.webp",
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1767878719/A9F53106_Schneider_Electric_05_h3roaq.webp",
        ],
        shortDescription:
          "6A Single Pole 10kA B-Curve MCB for circuit protection against overloads and short circuits.",
        description:
          "The Schneider Acti9 iC60H (A9F53106) is a multi-standard miniature circuit breaker with a B-curve tripping characteristic. It provides high-performance thermal-magnetic protection and is suitable for AC and DC networks. Key safety features include VisiTrip for fault indication and VisiSafe for physical contact gap status. Designed for 35mm DIN rail mounting with double tunnel terminals.",
        uses: [
          "Residential and light commercial lighting circuits",
          "Small appliance circuit protection",
          "Control and isolation in distribution boards",
          "Suitable for high-specification industrial and commercial applications",
        ],
        downloads: [
          {
            name: "Datasheet",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/v1767643710/yhr47fary6ygxdttk2sg.pdf",
          },
        ],
        details: {
          CurrentRating: "6A",
          VoltageRating: "230V AC / 72V DC",
          ShortCircuitRating:
            "10kA Icn (BS EN 60898-1) / 15kA Icu (BS EN 60947-2)",
          TrippingCurve: "Type B (3 to 5 x In)",
          NumberOfPoles: "1P (Single Pole)",
          NetworkType: "AC / DC",
          MountingMode: "Clip-on DIN Rail (35mm)",
          ConnectionTerminals:
            "Single terminal (Top or Bottom) 1..25 mm² rigid / 1..16 mm² flexible",
          TighteningTorque: "2 N.m",
          MechanicalDurability: "20,000 cycles",
          ElectricalDurability: "10,000 cycles",
          IPRating: "IP20 (Terminals) / IP40 (Enclosure)",
          PollutionDegree: "3",
          OperatingTemperature: "-35°C to 70°C",
          Dimensions: "85mm (H) x 18mm (W) x 78.5mm (D)",
          Weight: "0.125 kg",
          Standards: "EN/IEC 60898-1, EN/IEC 60947-2",
          Warranty: "18 Months",
        },
      },
      {
        id: "SCHNEIDER-A9F53363",
        name: "Acti9 iC60H 3P 63A B Miniature Circuit Breaker",
        manufacturerPartNumber: "A9F53363",
        AGPPartNumber: "AGP-ELEC-MCB-63A-3P-B",
        Make: "Schneider Electric",
        images: [
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1767813832/A9F53363_Schneider_01_tsfrvm.webp",
        ],
        shortDescription:
          "63A Three Pole 10kA B-Curve MCB for industrial and commercial circuit protection.",
        description:
          "The Acti9 iC60H is a multi-standard miniature circuit breaker that provides high-level circuit protection against short-circuits and overloads. This 3-pole version is rated at 63A with a B-curve tripping characteristic. It features VisiSafe for physical contact indication and VisiTrip for rapid fault identification, ensuring maximum safety and operational efficiency in AC and DC networks.",
        uses: [
          "Industrial and commercial electrical distribution boards",
          "Three-phase circuit protection for power and lighting",
          "Protection of circuits with low inrush currents",
          "Suitable for isolation in compliance with industrial standards",
        ],
        downloads: [
          {
            name: "Datasheet",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/v1767643955/orhfswh7ldhmz8wwalj7.png",
          },
        ],
        details: {
          CurrentRating: "63A",
          VoltageRating: "415V AC / <= 180V DC",
          ShortCircuitRating:
            "10kA Icn (BS EN 60898-1) / 15kA Icu (BS EN 60947-2)",
          TrippingCurve: "Type B (3 to 5 x In)",
          NumberOfPoles: "3P (Triple Pole)",
          NetworkType: "AC / DC",
          MountingMode: "Clip-on DIN Rail (35mm)",
          ConnectionTerminals:
            "Single terminal (Top or Bottom) 1..35 mm² rigid / 1..16 mm² flexible",
          TighteningTorque: "3.5 N.m",
          MechanicalDurability: "20,000 cycles",
          ElectricalDurability: "10,000 cycles",
          IPRating: "IP20 (Terminals) / IP40 (Enclosure)",
          PollutionDegree: "3",
          OperatingTemperature: "-35°C to 70°C",
          Dimensions: "85mm (H) x 54mm (W) x 78.5mm (D)",
          Weight: "0.375 kg",
          Standards: "EN/IEC 60898-1, EN/IEC 60947-2",
          Warranty: "18 Months",
        },
      },
      {
        id: "SCHNEIDER-A9F53306",
        name: "Acti9 iC60H 3P 6A B Miniature Circuit Breaker",
        manufacturerPartNumber: "A9F53306",
        AGPPartNumber: "AGP-ELEC-MCB-06A-3P-B",
        Make: "Schneider Electric",
        images: [
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1767813415/A9F53306_Schneider_01_mtnepd.webp",
        ],
        shortDescription:
          "6A Three Pole 10kA B-Curve MCB for industrial and commercial circuit protection.",
        description:
          "The Acti9 iC60H is a multi-standard miniature circuit breaker (MCB) with a B-curve tripping characteristic. This 3-pole model is rated at 6A and is designed for the protection of circuits against short-circuit and overload currents. It features VisiTrip for rapid fault identification and VisiSafe to guarantee the physical opening of the contacts during maintenance, suitable for both AC and DC networks.",
        uses: [
          "Industrial and commercial three-phase circuit protection",
          "Protection of small motors and control circuits",
          "Lighting and power circuits with low inrush currents",
          "Suitable for use in harsh environments with Tropicalisation 2 rating",
        ],
        downloads: [
          {
            name: "Datasheet",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/v1767644171/c3zbihpvpohfx18lppq3.pdf",
          },
        ],
        details: {
          CurrentRating: "6A",
          VoltageRating: "415V AC / <= 180V DC",
          ShortCircuitRating:
            "10kA Icn (BS EN 60898-1) / 15kA Icu (BS EN 60947-2)",
          TrippingCurve: "Type B (3 to 5 x In)",
          NumberOfPoles: "3P (Triple Pole)",
          NetworkType: "AC / DC",
          MountingMode: "Clip-on DIN Rail (35mm)",
          ConnectionTerminals:
            "Single terminal (Top or Bottom) 1..25 mm² rigid / 1..16 mm² flexible",
          TighteningTorque: "2 N.m",
          MechanicalDurability: "20,000 cycles",
          ElectricalDurability: "10,000 cycles",
          IPRating: "IP20 (Terminals) / IP40 (Enclosure)",
          PollutionDegree: "3",
          OperatingTemperature: "-35°C to 70°C",
          Dimensions: "85mm (H) x 54mm (W) x 78.5mm (D)",
          Weight: "0.375 kg",
          Standards: "EN/IEC 60898-1, EN/IEC 60947-2",
          Warranty: "18 Months",
        },
      },
      {
        id: "SCHNEIDER-A9D31820",
        name: "Acti9 iC60H RCBO 1P+Ns 20A B 30mA 10kA Type A",
        manufacturerPartNumber: "A9D31820",
        AGPPartNumber: "AGP-ELEC-RCBO-20A-B",
        Make: "Schneider Electric",
        images: [
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1767879023/A9D31820_Schneider_Electric_01_ajex1k.webp",
        ],
        shortDescription:
          "20A 1P+N B-Curve 30mA Type A RCBO for combined earth leakage, short-circuit, and overload protection.",
        description:
          "The Acti9 iC60H RCBO is a high-performance residual current breaker with overcurrent protection. This single-pole plus neutral (1P+Ns) device is rated at 20A with a B-curve tripping characteristic and 30mA earth-leakage sensitivity. It provides critical protection against electric shocks and electrical fires while also guarding the circuit against short-circuits and overloads. Features include VisiSafe for physical contact indication and VisiTrip for rapid fault identification.",
        uses: [
          "Protection of persons against electric shock (direct contact)",
          "Combined protection of electrical circuits against short-circuit and overload",
          "Residential and commercial electrical distribution boards",
          "Suitable for TN earthing systems",
        ],
        downloads: [
          {
            name: "Datasheet",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/v1767644418/x65vmzen1zxmm1mil8vd.pdf",
          },
          {
            name: "Manual",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/v1767644417/ulza8hrfuskss70opgty.pdf",
          },
        ],
        details: {
          CurrentRating: "20A (at 50 °C)",
          VoltageRating: "230/240V AC 50/60 Hz",
          ShortCircuitRating: "10,000A Icn (IEC 61009-2-2)",
          EarthLeakageSensitivity: "30 mA",
          EarthLeakageClass: "Type A (Instantaneous)",
          TrippingCurve: "Type B",
          NumberOfPoles: "1P + Ns",
          NeutralPosition: "Left",
          MountingMode: "Clip-on DIN Rail (35mm)",
          ConnectionTerminals:
            "Screw clamp (Top: 1-25mm² rigid; Bottom: 1-16mm² rigid)",
          TighteningTorque: "Top: 3.5 N.m / Bottom: 2 N.m",
          MechanicalDurability: "20,000 cycles",
          ElectricalDurability: "5,000 cycles",
          IPRating: "IP20 (Terminals) / IP40 (Enclosure)",
          OperatingTemperature: "-15°C to 60°C",
          Dimensions: "110mm (H) x 18mm (W) x 77.5mm (D)",
          Weight: "0.205 kg",
          Standards: "IEC 61009-2-2, IEC 61009-1, BS EN 61009-1",
          Warranty: "18 Months",
        },
      },
      {
        id: "MK-K3631WHI",
        name: "MK Grid Plus 1 Gang Grid Front Plate White",
        manufacturerPartNumber: "K3631WHI",
        AGPPartNumber: "AGP-WIR-GRID-1G-WHI",
        Make: "MK Electric",
        images: [
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1767886334/K3631WHI_MK_Electric_01_vd1loo.webp",
        ],
        shortDescription:
          "1 Gang white moulded grid front plate for use with the MK Grid Plus modular system.",
        description:
          "The MK Grid Plus (K3631WHI) is a 1-gang front plate designed for modular flexibility. Part of the Logic Plus range, it features a screwless 'clip-fit' design for modules, allowing them to be easily moved, removed, or replaced without special tools even after the frame is fitted. The plate is made from high-grade urea formaldehyde with antimicrobial properties, providing a durable and hygienic finish.",
        uses: [
          "Commercial and domestic modular switch installations",
          "Custom switching arrangements using MK Grid Plus modules",
          "Installations requiring frequent configuration changes",
          "Healthcare or public areas due to antimicrobial properties",
        ],
        downloads: [
          {
            name: "MK Catalogue",
            url: "https://www.mkelectric.com/en-gb/Products/WD/GridPlus/Plates/Pages/K3631WHI.aspx",
          },
        ],
        details: {
          NumberofGangs: "1 Gang",
          ProductRange: "Grid Plus / Logic Plus",
          Material: "Urea Formaldehyde (Antimicrobial)",
          Colour: "White",
          Finish: "Moulded White Gloss",
          MountingType: "Grid (Requires K3701 Yoke/Frame)",
          FixingCentres: "60.3 mm",
          Height: "86 mm",
          Width: "86 mm",
          Depth: "12 mm",
          Standards: "BS 5733",
          IPRating: "IP2X",
          OperatingTemperature: "-5°C to +40°C",
          Warranty: "20 Years",
        },
      },
      {
        id: "MK-K4899WHI",
        name: "MK Grid Plus 20A 2-Way Key Grid Switch marked 'EMG LTG'",
        manufacturerPartNumber: "K4899WHI",
        AGPPartNumber: "AGP-WIR-GRID-KEY-EMG",
        Make: "MK Electric",
        images: [
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1767886597/K4899WHI_MK_Electric_01_dkdxux.webp",
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1767886597/K4899WHI_MK_Electric_02_xklrsx.webp",
        ],
        shortDescription:
          "20A 2-Way Key Operated Grid Switch module, white, marked 'EMG LTG' for emergency lighting test circuits.",
        description:
          "A high-performance key-operated switch module from the MK Grid Plus range. Designed specifically for emergency lighting testing, it features the 'EMG LTG' marking and requires a key for operation to prevent unauthorized tampering or accidental switching of safety circuits. The module employs the signature 'clip-fit' design for tool-free installation into Grid Plus mounting frames.",
        uses: [
          "Emergency lighting test circuits",
          "Secure switching in public or commercial buildings",
          "Preventing unauthorized operation of critical lighting",
          "Modular configuration within Grid Plus front plates",
        ],
        downloads: [
          {
            name: "MK Grid Plus Technical Datasheet",
            url: "https://www.mkelectric.com/en-gb/Products/WD/GridPlus/Documents/Grid%20Plus%20Technical.pdf",
          },
        ],
        details: {
          CurrentRating: "20 Amp",
          VoltageRating: "230V AC",
          SwitchType: "Key Operated",
          SwitchFunction: "2-Way",
          Marking: "EMG LTG (Emergency Lighting)",
          ProductRange: "Grid Plus",
          Material: "Urea Formaldehyde (Antimicrobial)",
          Colour: "White",
          MountingType: "Grid (Clip-fit)",
          TerminalCapacity:
            "4 x 1.0mm², 4 x 1.5mm², 3 x 2.5mm², 2 x 4.0mm², or 1 x 6.0mm²",
          Standards: "BS EN 60669-1",
          IPRating: "IP2X",
          Weight: "0.031 kg",
          Warranty: "20 Years",
        },
      },
      {
        id: "MK-K3701",
        name: "MK Grid Plus 1 Gang Grid Yoke / Mounting Frame",
        manufacturerPartNumber: "K3701",
        AGPPartNumber: "AGP-WIR-GRID-YOKE-1G",
        Make: "MK Electric",
        images: [
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1767874963/K3701_MK_01_kvbpic.webp",
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1767874965/K3701_MK_02_dpjvne.webp",
        ],
        shortDescription:
          "1 Gang steel mounting frame for MK Grid Plus modular switching system.",
        description:
          "The MK Grid Plus K3701 is a high-quality 1-gang mounting frame (yoke) constructed from pre-galvanised steel for maximum corrosion resistance. It acts as the backbone of the Grid Plus modular system, allowing any single grid module (switches, indicators, etc.) to be securely clipped in from the front. The design allows modules to be added or replaced easily after the frame has been fixed to the back box.",
        uses: [
          "Primary mounting frame for all MK Grid Plus 1-module installations",
          "Commercial, industrial, and domestic modular wiring projects",
          "Used in conjunction with Logic Plus, Metalclad, and Aspect front plates",
        ],
        downloads: [
          {
            name: "MK Grid Plus Technical Datasheet",
            url: "https://www.mkelectric.com/en-gb/Products/WD/GridPlus/Documents/Grid%20Plus%20Technical.pdf",
          },
        ],
        details: {
          NumberofGangs: "1 Gang",
          Material: "Pre-galvanised Steel",
          FixingCentres: "60.3 mm",
          EarthTerminalCapacity: "16 mm²",
          ProductRange: "Grid Plus",
          CorrosionResistance: "High (Pre-galvanised)",
          InstallationMethod:
            "Screw fixed to back box; modules clip into frame",
          Standards: "BS 5733",
          Weight: "0.059 kg",
          Warranty: "20 Years",
        },
      },
      {
        id: "MK-K8891ALM",
        name: "MK Electric Metalclad 1 Gang Surface Back Box",
        manufacturerPartNumber: "K8891ALM",
        AGPPartNumber: "AGP-WIR-MET-SBX-1G",
        Make: "MK Electric",
        images: [
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1767875138/K8891ALM_MK_01_ntg5ft.webp",
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1767875138/K8891ALM_MK_02_ruxohj.webp",
        ],
        shortDescription:
          "1 Gang 38mm deep Metalclad surface mounting back box in silver aluminium finish.",
        description:
          "The MK K8891ALM is a rugged 1-gang surface-mounted back box from the Metalclad Plus range. Constructed from durable aluminium, it is designed for use in industrial and commercial environments where impact resistance is essential. The box features multiple 20mm knockouts for easy conduit entry and is finished in a metallic silver/grey to match the Metalclad Plus switch and socket range.",
        uses: [
          "Surface mounting for Metalclad Plus switches and sockets",
          "Industrial, workshop, and garage installations",
          "High-traffic commercial areas requiring robust wiring protection",
        ],
        downloads: [
          {
            name: "MK Metalclad Plus Technical Datasheet",
            url: "https://docs.rs-online.com/6290/0900766b8002a24d.pdf",
          },
        ],
        details: {
          NumberofGangs: "1 Gang",
          Depth: "38 mm",
          Material: "Aluminium / Steel",
          Colour: "Silver / Aluminium",
          Finish: "Powder Coated Metallic",
          Dimensions: "86mm (L) x 86mm (W) x 38mm (D)",
          IPRating: "IP20",
          FixingStandard: "BS Standard",
          ProductRange: "Metalclad Plus",
          Knockouts: "Multiple 20mm",
          MountingType: "Surface",
          Weight: "0.191 kg",
          Warranty: "20 Years",
        },
      },
    ],
  },

  /* --------------------------------------------------------------------------
     CATEGORY 3 — MECHANICAL ITEMS AND ACCESSORIES
  --------------------------------------------------------------------------- */
  {
    category: "Mechanical Items and Accessories",
    slug: "mechanical-items-accessories",
    categoryId: "CAT-MECH",
    image: {
      url: "https://res.cloudinary.com/dc912sjxj/image/upload/v1767795639/AGP_Mechanical_Items_and_Accessories_ak01wl.webp",
      alt: "Industrial pipes and valves with red handwheels.",
    },
    description:
      "Valves, flame arrestors, and actuators for safe and precise control of fuel, water, and air flow in fluid handling systems.",
    items: [
      {
        id: "RIS-STOP-2SF-R",
        name: "RIS-STOP-2SF-R Overfill Prevention Valve (2-inch)",
        manufacturerPartNumber: "RIS-STOP-2SF-R",
        AGPPartNumber: "AGP-MECH-001",
        Make: "Risbridger",
        images: [
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1767833418/RIS-STOP-2SF-R-AF_Risbridger_01_i19he5.webp",
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1767814209/RIS-STOP-2SF-R-AF_Risbridger_02_quharg.webp",
        ],
        shortDescription:
          '2" high-flow overfill prevention valve with 4-bolt flanged inlet and anti-syphon capability.',
        description:
          "The Risbridger RIS-STOP-2SF-R is designed for above-ground commercial diesel storage and pressure deliveries. It features a compact 4-bolt flanged inlet allowing for greater maximum tank fluid levels. Its cartridge construction ensures easy installation via the provided 2” tank lid socket, while the normally closed position enables it to function as an anti-syphon valve. The design excludes dynamic seals to promote a longer service life and allows for on-site inspection via an access cap without disassembling pipework.",
        uses: [
          "Above ground commercial diesel storage installations",
          "Pressure delivery systems (up to 8 bar)",
          "Anti-syphon protection for fuel lines",
          "Applications requiring high-level fluid maintenance",
          "Manned filling operations with high flow rates",
        ],
        downloads: [
          {
            name: "Datasheet",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/v1767379486/Datasheet_-_RIS-STOP-2SF-R-AF_Risbridger_qy5hhw.pdf",
          },
          {
            name: "Installation Instruction",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/v1767379498/Installation_Instruction_-_RIS-STOP-2SF-R-AF_Risbridger_kok3rl.pdf",
          },
          {
            name: "Maintenance Instruction",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/v1767379499/Maintenance_Instruction_-_RIS-STOP-2SF-R-AF_Risbridger_spjeys.pdf",
          },
          {
            name: "Adjustable Float Kit Installation",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/v1767379486/Adjustable_Float_Kit_Instruction_-_RIS-STOP-2SF-R-AF_Risbridger_tqdom3.pdf",
          },
        ],
        details: {
          NominalSize: "2-inch",
          InletDesign: "Compact 4-bolt flanged body",
          FlowRateRange: "10 - 600 L/min",
          MaximumPressure: "8 bar",
          ShutOff: "Two-stage (warning over last 15mm)",
          Viscosity: "Suitable for SAE10 or lower",
          Materials:
            "Anodised Aluminium, Viton A (FKM), Stainless Steel, HDPE Closed cell foam",
          Compatibility: "Diesel, Bio-Diesel, FAME Blends, Waste Oil",
          Features: "Anti-syphon, No dynamic seals, Cartridge construction",
          SafetyConstraint:
            "Not suitable for true shut-off or continuously pressurised systems",
        },
      },
      {
        id: "ELMAC-ERB050",
        name: "Deflagration Flame Arrestor (2-inch)",
        manufacturerPartNumber: "ERB-050FS-125(W)",
        AGPPartNumber: "AGP-MECH-002",
        Make: "Elmac",
        images: [
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1767834293/ERB_Elmac_01_xbf4gn.webp",
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1767834296/ERB_Elmac_02_bgqvdd.webp",
        ],
        shortDescription:
          "2-inch End-of-Line deflagration flame arrestor for tank vent protection.",
        description:
          "The Elmac ERB-050FS is a high-specification deflagration flame arrestor with 2-inch NPT connections. Installed on tank vent lines, it uses a precision-crimped metal ribbon element to extinguish subsonic flames, preventing external fires from propagating into the fuel storage tank and causing explosions.",
        uses: [
          "Vent line protection for flammable liquid tanks",
          "Oil & Gas refinery storage safety",
          "Diesel generator fuel tank venting",
          "Chemical processing tank safety",
        ],
        // UPDATED: Replaced pdfLink with downloads array
        downloads: [
          {
            name: "Datasheet",
            url: "https://elmactechnologies.com/wp-content/uploads/2021/07/ERB-Series-Datasheet-1.pdf",
          },
        ],
        details: {
          NominalSize: "2-inch NPT",
          ArrestorType: "End-of-Line Deflagration",
          Material: "Carbon Steel / Stainless Steel 316",
          ElementType: "Crimped Metal Ribbon (Removable)",
          Certifications: "ISO 16852 (ATEX)",
          MaxOperatingTemperature: "+60°C",
        },
      },
      {
        id: "LANDON-KINGSWAY-109037XX",
        name: "Free Fall Fire Valve MKII",
        manufacturerPartNumber: "109037XX",
        AGPPartNumber: "AGP-MECH-003",
        Make: "Landon Kingsway",
        images: [
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1767813004/109037XX_Landon_Kingsway_aaom82.webp",
        ],
        shortDescription:
          "Essential fuel isolation valve for plant rooms and generators, activated by fusible links or electrical intervention.",
        description:
          "The Landon Kingsway Free Fall Fire Valve MKII is a critical safety component for oil-fed systems. Designed for either cut-off or dump applications, it utilizes a lubricated plug valve for superior reliability over standard ball valves. The free-fall linkage allows the weight to gain momentum before moving the lever, ensuring a positive shut-off even after long periods of inactivity.",
        uses: [
          "Generator fuel line isolation",
          "Boiler plant room fire protection",
          "Emergency fuel dump systems",
          "BMS/Fire Alarm integrated fuel shut-off",
        ],
        downloads: [
          {
            name: "Datasheet",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/v1767467902/Datasheet_-_109037XX_Landon_Kingsway_xthmnn.pdf",
          },
        ],
        details: {
          BodyMaterial: "Cast Iron (Standard)",
          MaximumPressure: "14 Bar (200 psi)",
          StandardFusibleLink: "72°C",
          CableLength: "9m Standard",
          Finish: "RAL3020 Red",
          MaintenanceRequirement: "Test and lubricate 3 times/year",
          OptionalAncillaryItems: [
            "Tilt position switch",
            "Manual quick release button",
            "SQR (Electrical) intervention",
          ],
        },
        sizingData: [
          {
            Size: '1/2"',
            PartNumber: "10903701H",
            Type: "Screwed",
            Kv: 16,
            Cv: 19,
          },
          {
            Size: '3/4"',
            PartNumber: "10903705H",
            Type: "Screwed",
            Kv: 27,
            Cv: 31,
          },
          {
            Size: '1"',
            PartNumber: "10903709H",
            Type: "Screwed",
            Kv: 36,
            Cv: 42,
          },
          {
            Size: '1"',
            PartNumber: "10903710H",
            Type: "Flanged",
            Kv: 35,
            Cv: 40,
          },
          {
            Size: '1 1/4"',
            PartNumber: "10903713H",
            Type: "Screwed",
            Kv: 62,
            Cv: 72,
          },
          {
            Size: '1 1/4"',
            PartNumber: "10903714H",
            Type: "Flanged",
            Kv: 60,
            Cv: 70,
          },
          {
            Size: '1 1/2"',
            PartNumber: "10903717H",
            Type: "Screwed",
            Kv: 73,
            Cv: 85,
          },
          {
            Size: '1 1/2"',
            PartNumber: "10903718H",
            Type: "Flanged",
            Kv: 79,
            Cv: 91,
          },
          {
            Size: '2"',
            PartNumber: "10903721H",
            Type: "Screwed",
            Kv: 115,
            Cv: 133,
          },
          {
            Size: '2"',
            PartNumber: "10903722H",
            Type: "Flanged",
            Kv: 110,
            Cv: 127,
          },
          {
            Size: '3"',
            PartNumber: "10903726H",
            Type: "Flanged",
            Kv: 249,
            Cv: 288,
          },
          {
            Size: '4"',
            PartNumber: "10903730H",
            Type: "Flanged",
            Kv: 443,
            Cv: 511,
          },
          {
            Size: '6"',
            PartNumber: "10903734H",
            Type: "Flanged",
            Kv: 997,
            Cv: 1152,
          },
        ],
      },
      {
        id: "RIDART-197-AL-RANGE",
        name: "Aluminium Pressure Vacuum Valve with Flame Arrester",
        manufacturerPartNumber: "197-EN-P-AL",
        AGPPartNumber: "AGP-MECH-004",
        Make: "Ridart",
        images: [
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1767812829/197-EN-P-AL_Ridart_wxyeml.webp",
        ],
        shortDescription:
          'Aluminium pressure/vacuum relief valve available in 2", 3", 4", and 6" sizes for traditional fuels.',
        description:
          'A full-range protection system (available in 2", 3", 4", and 6" NPT) designed to regulate pressure in hydrocarbon storage tanks. The standard aluminium construction is optimized for traditional fuels. For the 3" through 6" models, the unit features high-flow capacity with painted carbon steel caps and PTFE seals.',
        uses: [
          "Traditional fuel storage (Diesel/Petrol)",
          "Stage I vapor recovery systems",
          "Pressure regulation for small to large tanks",
        ],
        downloads: [
          {
            name: "Datasheet",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/v1767436583/Datasheet_-_197VA-50-AL_Ridart_miy6ef.pdf",
          },
          {
            name: "Manual",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/v1767436583/Manual_-_197VA-50-AL_Ridart_d5tybe.pdf",
          },
        ],
        details: {
          AvailableSizes: '2", 3", 4", 6" NPT',
          SettingPressure: "35 mbar",
          SettingVacuum: "-2.5 mbar",
          Material: "Aluminium Body",
          Components: {
            Seals: 'Viton® (2") / PTFE (3"+)',
            Poppets: 'Brass (2") / Aluminium (3"+)',
            Cap: 'Aluminium (2") / Painted Carbon Steel (3"+)',
            RibbonCoil: "Stainless Steel",
          },
        },
        sizingData: [
          {
            Size: '2"',
            PartNumber: "197 EN P-35",
            Thread: '2" NPT FEMALE',
            Pressure_mbar: 35,
            Vacuum_mbar: -2.5,
            TestFlow_Pressure_l_min: 1900,
            TestFlow_Vacuum_l_min: 1500,
          },
          {
            Size: '3"',
            PartNumber: "197FA-80-35",
            Thread: '3" NPT FEMALE',
            Pressure_mbar: 35,
            Vacuum_mbar: -2.5,
            TestFlow_Pressure_l_min: 4600,
            TestFlow_Vacuum_l_min: 3700,
          },
          {
            Size: '4"',
            PartNumber: "197FA-100-35",
            Thread: '4" NPT FEMALE',
            Pressure_mbar: 35,
            Vacuum_mbar: -2.5,
            TestFlow_Pressure_l_min: 4600,
            TestFlow_Vacuum_l_min: 3700,
          },
          {
            Size: '6"',
            PartNumber: "197FA-150-35",
            Thread: '6" NPT FEMALE',
            Pressure_mbar: 35,
            Vacuum_mbar: -2.5,
            TestFlow_Pressure_l_min: "> 9000",
            TestFlow_Vacuum_l_min: "> 6000",
          },
        ],
      },
      {
        id: "RIDART-197-PTFE-SERIES",
        name: "PTFE Coated Pressure Vacuum Valve with Flame Arrester",
        manufacturerPartNumber: "197-EN-P-PTFE",
        AGPPartNumber: "AGP-MECH-005",
        Make: "Ridart",
        images: [
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1767813004/197-EN-P-PTFE_Ridart_icdkz2.webp",
        ],
        shortDescription:
          'PTFE coated chemical-resistant valve available in 3", 4", and 6" sizes (2" not available).',
        description:
          'Chemical protection system featuring Al + PTFE coating, available specifically in 3", 4", and 6" sizes. Designed for special fuels and non-aggressive solvents, this series uses stainless steel caps to ensure durability against chemical vapors where standard 2" aluminium models are insufficient.',
        uses: [
          "Special fuel storage protection",
          "Non-aggressive solvent regulation",
          "Chemical product tank protection",
        ],
        downloads: [
          {
            name: "Datasheet",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/v1767436583/Datasheet_-_197VA-50-AL_Ridart_miy6ef.pdf",
          },
          {
            name: "Manual",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/v1767436583/Manual_-_197VA-50-AL_Ridart_d5tybe.pdf",
          },
        ],
        details: {
          AvailableSizes: '3", 4", 6" NPT',
          SettingPressure: "35 mbar",
          SettingVacuum: "-2.5 mbar",
          Material: "Aluminium + PTFE Coating",
          Components: {
            Seals: "PTFE",
            Poppets: "Al + PTFE Coating",
            Cap: "Stainless Steel",
            Body: "Al + PTFE Coating",
          },
        },
        sizingData: [
          {
            Size: '3"',
            PartNumber: "197FP-80-35",
            Thread: '3" NPT FEMALE',
            Pressure_mbar: 35,
            Vacuum_mbar: -2.5,
            TestFlow_Pressure_l_min: 4600,
            TestFlow_Vacuum_l_min: 3700,
          },
          {
            Size: '4"',
            PartNumber: "197FP-100-35",
            Thread: '4" NPT FEMALE',
            Pressure_mbar: 35,
            Vacuum_mbar: -2.5,
            TestFlow_Pressure_l_min: 4600,
            TestFlow_Vacuum_l_min: 3700,
          },
          {
            Size: '6"',
            PartNumber: "197FP-150-35",
            Thread: '6" NPT FEMALE',
            Pressure_mbar: 35,
            Vacuum_mbar: -2.5,
            TestFlow_Pressure_l_min: "> 9000",
            TestFlow_Vacuum_l_min: "> 6000",
          },
        ],
      },
      {
        id: "RIDART-197-SS-SERIES",
        name: "Stainless Steel Pressure Vacuum Valve with Flame Arrester",
        manufacturerPartNumber: "197-EN-P-SS",
        AGPPartNumber: "AGP-MECH-006",
        Make: "Ridart",
        images: [
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1767813005/197-EN-P-SS_Ridart_wp74ht.webp",
        ],
        shortDescription:
          'Full Stainless Steel valve for aggressive media, available in 3", 4", and 6" sizes (2" not available).',
        description:
          'Heavy-duty Stainless Steel (SS) protection system for aggressive acids and bases, available in industrial 3", 4", and 6" sizes. This series provides maximum corrosion resistance for pharmaceutical and petrochemical applications. Note that the 2" entry-level size is not available in the full SS configuration.',
        uses: [
          "Aggressive acid/base storage",
          "Pharmaceutical industry vessels",
          "Highly corrosive environment protection",
        ],
        downloads: [
          {
            name: "Datasheet",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/v1767436583/Datasheet_-_197VA-50-AL_Ridart_miy6ef.pdf",
          },
          {
            name: "Manual",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/v1767436583/Manual_-_197VA-50-AL_Ridart_d5tybe.pdf",
          },
        ],
        details: {
          AvailableSizes: '3", 4", 6" NPT',
          SettingPressure: "35 mbar",
          SettingVacuum: "-2.5 mbar",
          Material: "Stainless Steel (SS)",
          Components: {
            Seals: "PTFE",
            Poppets: "Stainless Steel",
            Cap: "Stainless Steel",
            Body: "Stainless Steel",
          },
        },
        sizingData: [
          {
            Size: '3"',
            PartNumber: "197FS-80-35",
            Thread: '3" NPT FEMALE',
            Pressure_mbar: 35,
            Vacuum_mbar: -2.5,
            TestFlow_Pressure_l_min: 4600,
            TestFlow_Vacuum_l_min: 3700,
          },
          {
            Size: '4"',
            PartNumber: "197FS-100-35",
            Thread: '4" NPT FEMALE',
            Pressure_mbar: 35,
            Vacuum_mbar: -2.5,
            TestFlow_Pressure_l_min: 4600,
            TestFlow_Vacuum_l_min: 3700,
          },
          {
            Size: '6"',
            PartNumber: "197FS-150-35",
            Thread: '6" NPT FEMALE',
            Pressure_mbar: 35,
            Vacuum_mbar: -2.5,
            TestFlow_Pressure_l_min: "> 9000",
            TestFlow_Vacuum_l_min: "> 6000",
          },
        ],
      },
      {
        id: "BELIMO-SRFA",
        name: "Rotary Fail Safe Actuator AC 24-240V/ DC 24-125V Open/Close",
        manufacturerPartNumber: "SRFA-S2-R",
        AGPPartNumber: "AGP-MECH-008",
        Make: "Belimo",
        images: [
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1767814209/SRFA-S2-R_Belimo_01_zjkhon.webp",
        ],
        shortDescription:
          "20Nm fail-safe actuator for precise open/close control in cold and warm water HVAC systems.",
        description:
          "The Belimo SRFA-S2 is a versatile powered-open, spring-close rotary actuator engineered for stationary heating, ventilation, and air conditioning systems. Supporting a wide power supply range (AC 24-240V / DC 24-125V), it provides reliable 20Nm torque for water-side control of air handling units. Its integrated spring-return mechanism ensures fail-safe protection and operational continuity during power disruptions, while its 75-second running time prevents abrupt system changes and pressure spikes.",
        uses: [
          "Modulating water-side control for air handling units",
          "Fail-safe actuation for stationary heating and cooling systems",
          "Open/closed control for commercial cold and warm water loops",
          "Industrial HVAC applications requiring power supply flexibility",
          "System protection against pressure spikes during power loss",
        ],
        downloads: [
          {
            name: "Datasheet",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/v1767431076/Datasheet_-_SRFA-S2-R_Belimo_vh7khh.pdf",
          },
          {
            name: "Manual",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/v1767431081/Manual_-_SRFA-S2-R_Belimo_i5scsn.pdf",
          },
        ],
        details: {
          Voltage: "AC 24...240 V / DC 24...125 V",
          PowerConsumptionRunning: "7 W",
          PowerConsumptionHolding: "3.5 W",
          PowerConsumptionWireSizing: "18 VA",
          AuxiliarySwitches: "2x SPDT",
          ConnectionSupplyControl: "Cable 1 m, 2x 0.75 mm²",
          ConnectionAuxiliarySwitch: "Cable 1 m, 6x 0.75 mm²",
          Torque: "20 Nm",
          ControlType: "Open/close",
          DirectionOfRotation: "Selectable (NC/NO)",
          ManualOverride: "Hand crank and locking switch",
          RunningTimeMotor: "75 s / 90°",
          RunningTimeFailSafe: "<20 s",
          ProtectionCategory: "IP54",
          NEMARating: "NEMA 2",
          EnclosureType: "UL Enclosure Type 2",
        },
      },
      {
        id: "LEENGATE-LV8635",
        name: "Carbon Steel Ball Valve - Flanged PN16 - ISO Top",
        manufacturerPartNumber: "LV8635",
        AGPPartNumber: "AGP-MECH-009",
        Make: "Leengate",
        images: [
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1767814124/LV8635_Leengate_qf1yxs.webp",
        ],
        shortDescription:
          "Full bore carbon steel ball valve, flanged PN16/40 with ISO 5211 direct mount pad.",
        description:
          'The LV8635 is a high-performance carbon steel ball valve featuring a split-body design. It is equipped with an ISO 5211 direct mounting pad for easy actuation, an anti-blowout stem, and anti-static devices. The valve is Firesafe certified up to 4" and designed for industrial applications involving high-pressure fluids and a wide temperature range.',
        uses: [
          "Main fuel line isolation",
          "Automated fuel transfer systems",
          "Industrial water and chemical piping",
          "High-pressure fluid control",
          "ATEX zone applications",
        ],
        downloads: [
          {
            name: "Datasheet",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/v1767466073/Datasheet_-_LV8635_Leengate_oqqmj8.pdf",
          },
        ],
        details: {
          SizeRange:
            '1/2", 3/4", 1", 1 1/4", 1 1/2", 2", 2 1/2", 3", 4", 5", 6"',
          Bore: "Full Bore",
          EndConnection: "Flanged PN16/25/40 (Size dependent)",
          BodyMaterial: "1.0619 Carbon Steel",
          BallStemMaterial: "Stainless Steel (CF8M Ball / 316 Stem)",
          SeatMaterial: "TFM 1600",
          OperatingPressure: {
            "0.5_to_2_inch": "PN40",
            "2.5_to_6_inch": "PN16",
          },
          TemperatureRange: "-10°C to +200°C",
          SafetyCertifications: [
            'Firesafe Certified (up to 4")',
            "ATEX Approved",
            "Anti-static Device",
            "Anti-blowout Stem",
          ],
          ActuationMount: "ISO 5211 Direct Mount Pad",
        },
        sizingData: [
          {
            Size: "1.5-inch",
            FaceToFace_L: 140,
            Height_H: 111,
            Weight_Kg: 6.93,
            Torque_Nm: 31.0,
          },
          {
            Size: "2-inch",
            FaceToFace_L: 150,
            Height_H: 118,
            Weight_Kg: 9.38,
            Torque_Nm: 38.0,
          },
          {
            Size: "3-inch",
            FaceToFace_L: 180,
            Height_H: 163,
            Weight_Kg: 19.0,
            Torque_Nm: 88.0,
          },
          {
            Size: "4-inch",
            FaceToFace_L: 190,
            Height_H: 178,
            Weight_Kg: 26.6,
            Torque_Nm: 125.0,
          },
        ],
      },
      {
        id: "LEENGATE-LV5556",
        name: "Ductile Iron Ball Valve - Flanged PN16 - Direct Mount",
        manufacturerPartNumber: "LV 5556",
        AGPPartNumber: "AGP-MECH-010",
        Make: "Leengate",
        images: [
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1767814123/LV5556_Leengate_q8wdoi.webp",
        ],
        shortDescription:
          "PN16 flanged ductile iron ball valve with brass ball/stem and ISO 5211 direct mount pad.",
        description:
          'The LV 5556 is a ductile iron ball valve featuring PN16 flanges and an ISO 5211 direct mounting pad for simplified automation. It is designed with an epoxy-coated ductile iron body, chrome-plated brass ball, and RPTFE seats. It adheres to DIN 3202 F4 face-to-face dimensions for sizes up to 6" and F5 for 8".',
        uses: [
          "Industrial water systems",
          "Low-pressure fuel transfer",
          "HVAC and irrigation",
          "Automated flow control",
        ],
        downloads: [
          {
            name: "Datasheet",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/v1767466927/LV5556_Leengate_pfmqs0.png",
          },
        ],
        details: {
          SizeRange: '1/2" to 8"',
          Bore: "Full Bore",
          EndConnection: "Flanged PN16",
          BodyMaterial: "EN GJS 400-15 Epoxy Coated Ductile Iron",
          BallStemMaterial: "CuZn40Pb2 Brass (Chrome Plated Ball)",
          SeatMaterial: "Reinforced PTFE",
          OperatingPressure: "PN16 (16 bar)",
          TemperatureRange: "-10°C to +150°C",
          Features: [
            "ISO 5211 Direct Mount",
            "Viton O-rings",
            "Anti-blowout stem design",
            "Epoxy coated exterior",
          ],
          ActuationMount: "ISO 5211 Direct Mount Pad",
        },
        sizingData: [
          {
            Size: '1/2"',
            FaceToFace_A: 115,
            Height_H: 84,
            Weight_Kg: 2.6,
            Torque_Nm: 15.0,
          },
          {
            Size: '1"',
            FaceToFace_A: 125,
            Height_H: 96,
            Weight_Kg: 4.2,
            Torque_Nm: 18.0,
          },
          {
            Size: '1.5"',
            FaceToFace_A: 140,
            Height_H: 125,
            Weight_Kg: 7.5,
            Torque_Nm: 18.0,
          },
          {
            Size: '2"',
            FaceToFace_A: 150,
            Height_H: 135,
            Weight_Kg: 9.0,
            Torque_Nm: 20.0,
          },
          {
            Size: '3"',
            FaceToFace_A: 180,
            Height_H: 165,
            Weight_Kg: 15.5,
            Torque_Nm: 70.0,
          },
          {
            Size: '4"',
            FaceToFace_A: 190,
            Height_H: 180,
            Weight_Kg: 18.5,
            Torque_Nm: 100.0,
          },
          {
            Size: '6"',
            FaceToFace_A: 210,
            Height_H: 243,
            Weight_Kg: 38.5,
            Torque_Nm: 250.0,
          },
          {
            Size: '8"',
            FaceToFace_A: 400,
            Height_H: 320,
            Weight_Kg: 93.0,
            Torque_Nm: 600.0,
          },
        ],
      },
    ],
  },

  /* --------------------------------------------------------------------------
     CATEGORY 4 — GENERATOR ENCLOSURES, PUMP SKIDS, E-HOUSE / E-POD
  --------------------------------------------------------------------------- */
  {
    category: "Generator Enclosures, Pump Skids, E-House/E-POD",
    slug: "generator-systems",
    categoryId: "CAT-ENCL",
    image: {
      url: "https://res.cloudinary.com/dc912sjxj/image/upload/v1767795636/AGP_Generator_Enclosures_Pump_Skids_E-House_E-POD_zp5f8n.webp", // Reusing an existing product image for context
      alt: "Heavy-duty industrial door latch and damper components.",
    },
    description:
      "Heavy-duty hardware and safety components for constructing robust, secure, and certified generator enclosures and modular buildings.",
    items: [
      {
        id: "ATEX-DAMPER",
        name: "ATEX Zone 2 Gas Retention Damper",
        manufacturerPartNumber: "Custom-ATEX-GRD",
        AGPPartNumber: "AGP-ENCL-001",
        Make: "Engineered Air Treatment",
        images: [
          "https://www.engineeredairtreatment.co.uk/wp-content/uploads/2020/10/damperopenclosed_1.gif",
          "https://www.engineeredairtreatment.co.uk/wp-content/uploads/2020/10/damperopenclosed_1.gif",
          "https://www.engineeredairtreatment.co.uk/wp-content/uploads/2020/10/damperopenclosed_1.gif",
        ],
        shortDescription:
          "Certified ATEX Zone 2 dampers for gas retention and hazardous area ventilation.",
        description:
          "These heavy-duty dampers are custom-engineered for ATEX Zone 2 hazardous environments. They provide precise airflow control for generator enclosures and feature gas retention capabilities to seal off the enclosure in case of an emergency shutdown or gas leak, preventing the spread of hazardous fumes.",
        uses: [
          "Ventilation control in Oil & Gas generator enclosures",
          "Emergency air shut-off for hazardous areas",
          "Gas retention during fire suppression release",
          "Offshore platform HVAC protection",
        ],
        // UPDATED: Replaced pdfLink with downloads array
        downloads: [
          {
            name: "Datasheet",
            url: "https://engineeredairtreatment.co.uk/wp-content/uploads/2021/02/Gas-Retention-Dampers-v1.pdf",
          },
        ],
        details: {
          ATEXZone: "Zone 2 (Gas)",
          Function: "Gas Retention / Shut-off",
          BladeOperation: "Opposed Blade (Low Leakage)",
          Material: "Galvanized or Stainless Steel",
          Actuation: "Pneumatic or Electric Actuator (Sold Separately)",
          Certifications: "Ex II 3G",
        },
      },
      {
        id: "KASON-LATCH",
        name: "Door Latch & Cylinder (Stainless Steel)",
        manufacturerPartNumber: "10056CL902205",
        AGPPartNumber: "AGP-ENCL-002",
        Make: "Kason",
        images: [
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1767874555/10056CL902205_Kason_01_vxuzgm.webp",
        ],
        shortDescription:
          "Polished stainless steel heavy-duty door latch with locking cylinder.",
        description:
          "The Kason 10056 series latch is a premium door locking mechanism designed for heavy insulated walk-in doors. Finished in polished stainless steel, it offers superior corrosion resistance and durability. It includes a cylinder lock for security and an inside release mechanism to prevent accidental entrapment.",
        uses: [
          "Walk-in generator enclosure doors",
          "E-House access doors",
          "Cold storage and industrial cabinets",
          "Sound-proof acoustic doors",
        ],
        // UPDATED: Replaced pdfLink with downloads array
        downloads: [
          {
            name: "Datasheet",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/v1767555013/by6ahhqh434fby9vmz13.pdf",
          },
        ],
        details: {
          Finish: "Polished Stainless Steel (or Black Powder Coated)",
          Function: "Cylinder Lock with Safety Release",
          Locking: "Keyed Cylinder Lock",
          DoorThickness: "Up to 150mm (adjustable)",
          Handing: "Reversible",
          Series: "SafeGuard™ 10056",
        },
      },
      {
        id: "POMMIER-082005700",
        name: "Stainless Steel Hinge with Self-Lubricating Bushes",
        manufacturerPartNumber: "082005700",
        AGPPartNumber: "AGP-ENCL-003",
        Make: "Pommier",
        images: [
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1767813004/082005700_Pommier_01_qzalaf.webp",
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1767813005/082005700_Pommier_02_wawvm9.webp",
        ],
        shortDescription:
          "Heavy-duty Grade 304 stainless steel hinge with integrated self-lubricating bushes for panels up to 100mm thickness.",
        description:
          "A polished austenitic stainless steel hinge specifically engineered for high-performance commercial vehicle openings. It features maintenance-free self-lubricating bushes and is designed for heavy-duty applications on insulated or refrigerated vehicle bodies.",
        uses: [
          "Refrigerated truck door assemblies",
          "Insulated trailer rear doors",
          "Heavy-duty commercial vehicle openings",
          "Maintenance-free hinge installations",
        ],
        downloads: [
          {
            name: "Datasheet",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/v1767549894/hsuwby84vgdl0f5tuu0q.pdf",
          },
        ],
        details: {
          Material: "Austenitic Stainless Steel (Grade 304)",
          Finish: "Polished",
          Weight: "1.13 kg",
          MaxPanelThickness: "100 mm",
          Feature: "Self-lubricating bushes",
          Compatibility: "Fits brackets 082005740, 082010207, 082005760",
          Maintenance: "Self-lubricating (no grease required)",
        },
      },
      {
        id: "POMMIER-082005740",
        name: "Stainless Steel Bolt-on Bracket",
        manufacturerPartNumber: "082005740",
        AGPPartNumber: "AGP-ENCL-004",
        Make: "Pommier",
        images: [
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1767874556/082005740_Pommier_01_be08u2.webp",
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1767874557/082005740_Pommier_02_w2nb69.webp",
        ],
        shortDescription:
          "High-quality Grade 304 stainless steel bracket designed for secure bolt-on mounting in commercial vehicle opening systems.",
        description:
          "A polished austenitic stainless steel bracket specifically engineered for truck and trailer bodies. It is designed to work in conjunction with reference 082005700 and provides a durable, corrosion-resistant solution for door and hinge assemblies.",
        uses: [
          "Commercial vehicle rear door hinges",
          "Side door opening systems",
          "Heavy-duty trailer hardware",
          "Corrosion-resistant mounting applications",
        ],
        downloads: [
          {
            name: "Datasheet",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/v1767551709/rg39bwjzo5uskdvvtqkl.pdf",
          },
        ],
        details: {
          Material: "Austenitic Stainless Steel (Grade 304)",
          Finish: "Polished",
          Weight: "0.35 kg",
          Compatibility: "Designed for component 082005700",
          MountingType: "Bolt-on",
          CorrosionResistance: "High (Standard Industrial), Grade 304",
          MaintenanceNote:
            "Surface rust from external pollutants can be removed by cleaning without loss of integrity",
        },
      },
      {
        id: "POMMIER-082005792",
        name: "Stainless Steel Lock Nut HM10",
        manufacturerPartNumber: "082005792",
        AGPPartNumber: "AGP-ENCL-005",
        Make: "Pommier",
        images: [
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1767874555/082005792_Pommier_01_dv0nqg.webp",
        ],
        shortDescription:
          "Grade 304 stainless steel HM10 lock nut for commercial vehicle opening systems.",
        description:
          "A raw finish austenitic stainless steel lock nut designed to provide a secure fastening for hinge pins and axles in truck and trailer bodywork. This nut is specifically engineered for use with multiple Pommier hinge systems to ensure vibration-resistant assembly.",
        uses: [
          "Securing hinge pins in door assemblies",
          "Fastening hardware for commercial vehicle bodies",
          "Anti-vibration fastening in opening systems",
        ],
        downloads: [
          {
            name: "Datasheet",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/v1767553068/yeprwv1clddjc8j14snt.pdf",
          },
        ],
        details: {
          Material: "Austenitic Stainless Steel (Grade 304)",
          Finish: "Raw",
          Type: "HM10",
          Compatibility:
            "Fits hinges 082005700, 082011077, 082505710, and 084011765",
          CorrosionResistance: "High (Standard Industrial), Grade 304",
          Application: "Axles / Openings",
        },
      },
      {
        id: "POMMIER-082005780",
        name: "Hexagonal Head Hinge Pin",
        manufacturerPartNumber: "082005780",
        AGPPartNumber: "AGP-ENCL-006",
        Make: "Pommier",
        images: [
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1767874555/082005780_Pommier_01_iyd3os.webp",
        ],
        shortDescription:
          "Grade 304 stainless steel hexagonal head hinge pin (HM10-125) for commercial vehicle door assemblies.",
        description:
          "A raw finish austenitic stainless steel hinge pin designed to provide a secure and durable pivot point for truck and trailer door hinges. Specifically engineered for use with hinge systems and brackets in heavy-duty commercial vehicle bodywork.",
        uses: [
          "Commercial vehicle rear door hinge pivot",
          "Side door hinge assembly",
          "Securing door brackets to hinge bodies",
          "Replacement hardware for Pommier hinge systems",
        ],
        downloads: [
          {
            name: "Datasheet",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/v1767553292/juhjynwez3nbaxtnydoo.pdf",
          },
        ],
        details: {
          Material: "Austenitic Stainless Steel (Grade 304)",
          Finish: "Raw",
          Type: "HM10-125",
          Compatibility: "Fits hinges 082005700 and 082011077",
          CorrosionResistance: "High (Standard Industrial), Grade 304",
          Application: "Hinge Axles / Openings",
        },
      },
      {
        id: "BLOXWICH-GASKET",
        name: "Walk-In Heavy Duty Strike Gasket",
        manufacturerPartNumber: "BCP20103E",
        AGPPartNumber: "AGP-ENCL-007",
        Make: "Bloxwich",
        images: [
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1767876698/BCP20103E_Bloxwich_01_osc8dz.webp",
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1767874557/BCP20103E_Bloxwich_02_dzw2sz.webp",
        ],
        shortDescription:
          "EPDM rubber gasket designed to prevent abrasion and galvanic corrosion on heavy-duty walk-in strikes.",
        description:
          "The Bloxwich BCP20103E is a specialized EPDM rubber gasket designed for walk-in fridges, freezers, and industrial enclosures. It prevents 'in service' abrasion between door components and the door surface, while also eliminating potential 'galvanic' corrosion caused by direct contact between dissimilar materials.",
        uses: [
          "Walk-in fridges and freezers",
          "Foodservice equipment",
          "Industrial enclosures and generators",
          "Offshore equipment and delivery vans",
        ],
        downloads: [
          {
            name: "Datasheet",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/v1767553831/ydukrc9lzwtlq2rb9g0b.pdf",
          },
        ],
        details: {
          Material: "EPDM Rubber",
          Weight: "4 g",
          CommodityCode: "400829",
          GTIN: "5060345317213",
          Function: "Abrasion Prevention and Galvanic Corrosion Protection",
          Compatibility:
            "Specifically for BCP22035 and BCSP22035 Walk-In Latches",
        },
      },
    ],
  },

  /* --------------------------------------------------------------------------
     CATEGORY 5 — TESTING AND MEASUREMENT TOOLS
  --------------------------------------------------------------------------- */
  {
    category: "Testing and Measurement Tools",
    slug: "testing-measurement-tools",
    categoryId: "CAT-TEST",
    image: {
      url: "https://res.cloudinary.com/dc912sjxj/image/upload/v1767795639/AGP_Testing_and_Measurement_Tools_qpdgeu.webp",
      alt: "Engineer checking voltage with a digital multimeter in an electrical panel.",
    },
    description:
      "Portable and fixed instruments for on-site quality control, inspection, calibration, and material verification.",
    items: [
      {
        id: "FLEXBAR-17295",
        name: "Portable Hardness Tester (Quick-Check)",
        manufacturerPartNumber: "17295",
        AGPPartNumber: "AGP-TEST-001",
        Make: "Flexbar",
        images: [
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1767894202/17295_Flexbar_01_qfslef.webp",
        ],
        shortDescription:
          "Portable Quick-Check instrument for verifying metal hardness on-site.",
        description:
          "The Flexbar 17295 Quick-Check is a precision handheld tool designed for the rapid testing of material hardness. It allows quality control inspectors and engineers to verify the hardness of metals (such as steel, aluminum, and brass) directly on the production floor or job site without needing heavy benchtop equipment. It aids in verifying material compliance for structural components.",
        uses: [
          "On-site material quality control",
          "Verifying hardness of pipework and structural steel",
          "Incoming goods inspection for metal parts",
          "Maintenance checks on wear components",
        ],
        // UPDATED: Replaced pdfLink with downloads array
        downloads: [
          {
            name: "Datasheet",
            url: "https://www.tqscorp.com/docs/products/Flexbar-Catalog.pdf",
          },
        ],
        details: {
          MeasurementScale: "Rockwell C, B, HRC, HRB (Requires Conversion)",
          TestMethod: "Rebound / Impact",
          Accuracy: "±6 HRC (Dependent on Conversion)",
          Display: "Analog Dial",
          Portability: "Handheld",
          Batteries: "N/A (Mechanical)",
        },
      },
    ],
  },
];
