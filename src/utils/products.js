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
            name: "Information & Spec Sheet",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/q_auto/v1767923198/Datasheet_-_CP5340_Hitec_ujthi6.pdf",
          },
          {
            name: "Installation & Maintenance Instructions",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/q_auto/v1767923262/Manual_-_CP5340_Hitec_lzrtga.pdf",
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
            name: "Information & Spec Sheet",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/q_auto/v1767913143/Datasheet_-_Gasmeter_GMS-4-xx-EUR-x_Crowcon_hlcxzw.pdf",
          },
          {
            name: "Installation & Maintenance Instructions",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/q_auto/v1767913147/Manual_-_Gasmeter_GMS-4-xx-EUR-x_Crowcon_v6gwep.pdf",
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
            name: "Information & Spec Sheet",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/q_auto/v1767913567/Datasheet_-_Xgard_XG2-xx-xx-xx_Crowcon_ngocj4.pdf",
          },
          {
            name: "Installation & Maintenance Instructions",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/q_auto/v1767913567/Manual_-_Xgard_XG2-xx-xx-xx_Crowcon_jav1nn.pdf",
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
            name: "Information & Spec Sheet",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/q_auto/v1767912674/Datasheet_-_TH109-009_PECO_qhdidu.pdf",
          },
          {
            name: "Installation & Maintenance Instructions",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/q_auto/v1767912679/Manual_-_TH109-009_PECO_ow9x8m.pdf",
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
      {
        id: "DAYTON-804T16",
        name: "Dayton Electric Wall & Ceiling Unit Heater (5kW)",
        manufacturerPartNumber: "804T16",
        AGPPartNumber: "AGP-HEAT-UNT-5KW",
        Make: "Dayton",
        images: [
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1768054802/804T16_Dayton_01_pvyjpp.webp",
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1768054803/804T16_Dayton_02_pznuke.webp",
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1768054807/804T16_Dayton_03_tzuaab.webp",
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1768054810/804T16_Dayton_04_jvyt9l.webp",
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1768054811/804T16_Dayton_05_mhjnqs.webp",
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1768054818/804T16_Dayton_06_vypsl3.webp",
        ],
        shortDescription:
          "5kW 208V AC Fan-forced electric heater for wall or ceiling mounting in commercial and industrial spaces.",
        description:
          "The Dayton 804T16 is a high-performance, fan-forced electric unit heater designed for versatile installation in warehouses, workshops, and garages. Capable of being mounted on either a wall or ceiling, it provides a powerful 17,000 BtuH heating capacity. The unit features a robust steel housing with a beige powder-coated finish and includes adjustable louvers to direct airflow precisely where needed. Safety is prioritized with an automatic reset linear thermal protector and a totally enclosed heavy-duty motor.",
        uses: [
          "Commercial warehouse and workshop heating",
          "Industrial garage and storage area climate control",
          "Supplemental heating for large open buildings",
          "Temporary heating for buildings under construction or repair",
        ],
        downloads: [
          {
            name: "Information & Spec Sheet",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/q_auto/v1768242821/Datasheet_Manual_-_804T16_Dayton_x9jcnu.pdf",
          },
          {
            name: "Installation & Maintenance Instructions",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/q_auto/v1768242821/Datasheet_Manual_-_804T16_Dayton_x9jcnu.pdf",
          },
        ],
        details: {
          WattageOutput: "5 kW",
          HeatingCapacity: "17,000 BtuH",
          Voltage: "208V AC",
          Phase: "1 or 3 (Field Convertible)",
          Amperage: "24 A",
          AirFlow: "350 cfm",
          AirTempRise: "45°F",
          HorizontalAirThrow: "12 ft",
          VerticalFloorCoverage: "18 ft",
          MountingLocation: "Wall or Ceiling",
          HousingMaterial: "Steel (Beige Powder Coated)",
          ControlType: "Mechanical Selector Dial",
          Frequency: "60 Hz",
          Dimensions: '16" (H) x 14" (W) x 8.5" (D)',
          Weight: "20.8 lbs",
          Standards: "cULus Listed",
          Warranty: "1 Year Parts / 5 Year Elements",
        },
      },
      {
        id: "PRECISION-ST168",
        name: "Precision ST168 Lumatrol Swivel Mount Photocontrol (208V-277V)",
        manufacturerPartNumber: "ST168",
        AGPPartNumber: "AGP-ELEC-PHOTO-SWIV-208",
        Make: "Precision Multiple Controls",
        images: [
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1768062009/ST-168_Precision_01_fcnpr2.webp",
        ],
        shortDescription:
          "208V-277V Swivel-mount photocell with 1800W Tungsten / 1100VA Ballast rating and 5-year warranty.",
        description:
          "The Precision ST168 (Lumatrol ST Series) is a commercial-grade, thermal-type photocontrol designed for high-voltage outdoor lighting systems. It features a weatherproof Lexan® housing and a broad-surface cadmium sulfide sensing element. The 180-degree swivel arm allows for precise directional aiming to avoid interference from other light sources. Equipped with a built-in 15-second time delay, it prevents accidental turn-off from lightning or vehicle headlights.",
        uses: [
          "Automated dusk-to-dawn control of LED, HID, and Induction lighting",
          "Commercial parking lot and security area lighting",
          "Outdoor wall packs and floodlight automation",
          "Directional light sensing for complex building exteriors",
        ],
        downloads: [
          {
            name: "Information & Spec Sheet",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/q_auto/v1768238358/Datasheet_-_ST168_Precision_Multiple_Controls_01_qpmwzq.pdf",
          },
        ],
        details: {
          VoltageRating: "208V - 277V AC, 50/60 Hz",
          TungstenRating: "1800 Watts",
          BallastRating: "1100 VA",
          Mounting: '1/2"-14 TPI Threaded Swivel Arm',
          HousingMaterial: "Weatherproof Lexan® (Gray)",
          SwitchType: "SPST-NC (Normally Closed at night)",
          TurnOnLightLevel: "1 to 3 Foot-candles",
          TurnOnOffRatio: "1:3",
          TimeDelay: "Minimum 15 Seconds",
          OperatingTemperature: "-40°C to 70°C (-40°F to 158°F)",
          PowerConsumption: "Under 1 Watt (Average)",
          WireLeads: "6-inch color-coded 18 AWG",
          Dimensions: '2" (H) x 1.5" (W) x 1" (D)',
          Standards: "UL Listed (US & Canada), CSA Certified",
          Warranty: "5 Year Limited",
        },
      },
      {
        id: "HYTEK-OLE-C2020-A-C23",
        name: "O.L.E C2020 Tank Gauge Kit 0.3m - 3m",
        manufacturerPartNumber: "C2020-A-C23",
        AGPPartNumber: "AGP-FUEL-GAUGE-C2020-3M",
        Make: "O.L.E (Offshore & Line Equipment Ltd)",
        images: [
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1768158239/C2020_O.L.E_Offshore_Line_Equipment_Ltd_Hytek_01_jt5if4.webp",
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1768158241/C2020_O.L.E_Offshore_Line_Equipment_Ltd_Hytek_02_ssmiyo.webp",
        ],
        shortDescription:
          "Precision electronic tank gauge kit with 110dB high/low level alarms and +/-1% accuracy for tanks up to 3m high.",
        description:
          'The O.L.E C2020 is a high-accuracy electronic tank contents gauge designed for continuous monitoring of diesel, HVO, AdBlue®, and water tanks. This complete kit includes the weatherproof display unit, a high-precision pressure sensor (probe), and a 1" BSPT tank adaptor. The system provides a clear digital readout in litres and a percentage bar graph. It features integrated high and low-level audible alarms (110dB) with a flashing visual alert, making it ideal for environmental compliance and inventory management. The gauge is pre-configured for easy installation but allows for site-specific calibration via the front panel.',
        uses: [
          "Continuous level monitoring for commercial fuel tanks",
          "Overfill prevention via integrated high-level alarm",
          "Low-level notification for fuel reordering",
          "Integration with Building Management Systems (BMS) via 4-20mA output",
        ],
        downloads: [
          {
            name: "Information & Spec Sheet",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/q_auto/v1768238613/Datasheet_-_C2020_O.L.E_Offshore_Line_Equipment_Ltd_Hytek_cpnsol.pdf",
          },
          {
            name: "Technical Data",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/q_auto/v1768247641/Technical_Data_Installation_-_C2020_O.L.E_Offshore_Line_Equipment_Ltd_Hyek_q3sncm.pdf",
          },
          {
            name: "Installation & Maintenance Instructions",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/q_auto/v1768238612/Manual_-_C2020_O.L.E_Offshore_Line_Equipment_Ltd_Hytek_vsnpmr.pdf",
          },
        ],
        details: {
          TankHeightRange: "0.3m – 3.0m",
          Accuracy: "+/- 1% of total tank capacity",
          AlarmSounder: "110dB Internal Sounder (High & Low)",
          Display: "Backlit LCD (Litres & % Bar)",
          PowerSupply: "230V AC (110V & 24VDC options available)",
          OutputSignal: "4-20mA (Standard)",
          EnclosureRating: "IP55 Weatherproof",
          ProbeFitting: '1" BSPT Male',
          CableLength: "7m (Extendable up to 100m with shielded cable)",
          CompatibleFluids:
            "Diesel, HVO, Biodiesel (to B100), AdBlue®, Water, Antifreeze",
          Compatibility:
            "Suitable for all tank shapes (Rectangular, Cylindrical, Plastic, Steel)",
          Warranty: "1 Year",
        },
      },
      {
        id: "HYTEK-OLE-C2020-A-C25",
        name: "O.L.E C2020 Tank Gauge Kit 3.0m - 5.0m",
        manufacturerPartNumber: "C2020-A-C25",
        AGPPartNumber: "AGP-FUEL-GAUGE-C2020-5M",
        Make: "O.L.E (Offshore & Line Equipment Ltd)",
        images: [
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1768158239/C2020_O.L.E_Offshore_Line_Equipment_Ltd_Hytek_01_jt5if4.webp",
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1768158241/C2020_O.L.E_Offshore_Line_Equipment_Ltd_Hytek_02_ssmiyo.webp",
        ],
        shortDescription:
          "Advanced electronic tank contents gauge for deep tanks up to 5m, featuring 4-20mA output and integrated high/low alarms.",
        description:
          "The O.L.E C2020-A-C25 is a heavy-duty electronic gauging system designed for larger storage tanks with depths between 0.6 and 5.0 metres. This kit utilizes a high-sensitivity hydrostatic pressure probe to provide accurate, real-time volume readings in litres and percentages. Housed in a durable IP55-rated enclosure, the display unit includes a 110dB alarm sounder for high and low level alerts, ensuring operational safety and environmental protection. It is a 'universal' gauge, compatible with various liquids and tank geometries, and comes standard with a 4-20mA output for remote monitoring or BMS integration.",
        uses: [
          "Inventory management for large-scale diesel and fuel oil storage",
          "Deep tank monitoring (up to 5 metres)",
          "Overfill prevention and dry-run protection via programmable alarms",
          "Remote data logging using the integrated 4-20mA signal",
        ],
        downloads: [
          {
            name: "Information & Spec Sheet",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/q_auto/v1768238613/Datasheet_-_C2020_O.L.E_Offshore_Line_Equipment_Ltd_Hytek_cpnsol.pdf",
          },
          {
            name: "Technical Data",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/q_auto/v1768247641/Technical_Data_Installation_-_C2020_O.L.E_Offshore_Line_Equipment_Ltd_Hyek_q3sncm.pdf",
          },
          {
            name: "Installation & Maintenance Instructions",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/q_auto/v1768238612/Manual_-_C2020_O.L.E_Offshore_Line_Equipment_Ltd_Hytek_vsnpmr.pdf",
          },
        ],
        details: {
          TankHeightRange: "3.0m – 5.0m",
          Accuracy: "+/- 1% of total tank capacity",
          AlarmSounder: "110dB Internal Sounder & Visual LED Flash",
          Display: "Backlit LCD (Litres, % Bar, and Alarm Status)",
          PowerRequirement: "230V AC (Standard)",
          SignalOutput: "4-20mA (Standard), RS485 (Optional)",
          EnclosureProtection: "IP55 (Suitable for outdoor installation)",
          ProbeFitting: '1" BSPT Male (Stainless Steel Probe Body)',
          CompatibleFluids: "Diesel, HVO, Kerosene, Water, Waste Oil, AdBlue®",
          Calibration: "Simple keypad setup for tank dimensions and density",
          OperatingTemperature: "-10°C to +50°C",
          Warranty: "1 Year",
        },
      },
      {
        id: "HYTEK-OLE-C2020-A-C27",
        name: "O.L.E C2020 Tank Gauge Kit 5.0m - 10.0m",
        manufacturerPartNumber: "C2020-A-C27",
        AGPPartNumber: "AGP-FUEL-GAUGE-C2020-10M",
        Make: "O.L.E (Offshore & Line Equipment Ltd)",
        images: [
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1768158239/C2020_O.L.E_Offshore_Line_Equipment_Ltd_Hytek_01_jt5if4.webp",
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1768158241/C2020_O.L.E_Offshore_Line_Equipment_Ltd_Hytek_02_ssmiyo.webp",
        ],
        shortDescription:
          "Heavy-duty electronic tank gauge kit for deep tanks (5m - 10m), accurate to +/-1% with integrated 110dB high/low alarms.",
        description:
          "The O.L.E C2020-A-C27 is a precision hydrostatic tank contents gauge designed for exceptionally deep storage tanks, ranging from 5 to 10 metres in height. Manufactured in the UK, this kit provides a continuous digital readout of tank volume in litres and a percentage bar graph. It features a high-sensitivity 10m-rated pressure sensor and a 110dB audible/visual alarm system for high and low level alerts. The unit is housed in an IP55 weatherproof enclosure and includes a 4-20mA output as standard, making it the ideal solution for large-scale industrial fuel, AdBlue®, and water storage monitoring.",
        uses: [
          "Monitoring ultra-deep storage tanks (up to 10m height)",
          "Overfill prevention and low-level alerting for bulk fuel depots",
          "Interfacing with BMS or remote monitoring systems via 4-20mA signal",
          "Accurate gauging for large plastic or steel tanks in industrial environments",
        ],
        downloads: [
          {
            name: "Information & Spec Sheet",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/q_auto/v1768238613/Datasheet_-_C2020_O.L.E_Offshore_Line_Equipment_Ltd_Hytek_cpnsol.pdf",
          },
          {
            name: "Technical Data",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/q_auto/v1768247641/Technical_Data_Installation_-_C2020_O.L.E_Offshore_Line_Equipment_Ltd_Hyek_q3sncm.pdf",
          },
          {
            name: "Installation & Maintenance Instructions",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/q_auto/v1768238612/Manual_-_C2020_O.L.E_Offshore_Line_Equipment_Ltd_Hytek_vsnpmr.pdf",
          },
        ],
        details: {
          TankHeightRange: "5.0m – 10.0m",
          Accuracy: "+/- 1% of tank capacity",
          AlarmSounder: "110dB Internal Sounder & Flashing Visual Alert",
          Display: "Backlit LCD (Litres & % Bar)",
          PowerSupply: "230V AC (110V & 24VDC options available)",
          OutputSignal: "4-20mA (Standard)",
          EnclosureRating: "IP55 Weatherproof",
          ProbeFitting: '1" BSPT Male',
          ProbeCableLength: "10m (Standard, extendable up to 100m)",
          CompatibleFluids: "Diesel, HVO, AdBlue®, Antifreeze, B100, Water",
          OperatingTemperature: "-5°C to +50°C",
          Weight: "2.1 kg",
          Warranty: "1 Year",
        },
      },
      {
        id: "HYTEK-OLE-T4020-01",
        name: "Hytek O.L.E Programming Kit for T5020/Z5020 Gauges",
        manufacturerPartNumber: "T4020-01",
        AGPPartNumber: "AGP-FUEL-PROG-T4020",
        Make: "O.L.E (Offshore & Line Equipment Ltd)",
        images: [
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1768062961/T4020-01_OLE_Offshore_Line_Equipment_Ltd__Hyek_01_uvqosz.webp",
        ],
        shortDescription:
          "USB programming and calibration kit for O.L.E T5020 and Z5020 electronic tank gauges.",
        description:
          "The Hytek T4020-01 is an essential tool for engineers installing or maintaining O.L.E T5020 and Z5020 series tank gauges. Since these gauges cannot be configured via the front panel, this kit provides the hardware and software required to set tank dimensions, calibrate capacity, and define alarm thresholds. The kit includes a high-quality USB-to-RS485 converter cable and access to the O.L.E configuration software, allowing for precise site-specific adjustments and field updates.",
        uses: [
          "On-site calibration of fuel tank capacities",
          "Configuration of high, low, and bund alarm set-points",
          "Inputting custom tank dimensions for non-standard shapes",
          "Updating gauge settings for different liquid types (Diesel, AdBlue, Oil)",
        ],
        downloads: [
          {
            name: "Technical Instruction Sheet",
            url: "https://hytekgb.com/wp-content/uploads/2024/11/t4020_01_s956_1_tech.pdf",
          },
          {
            name: "Configuration software (T4020 Configurator)",
            url: "https://hytekgb.com/technical-support/downloads/",
          },
        ],
        details: {
          CableType: "USB to RS485 / UART",
          InterfaceIC: "FT232RQ UART",
          Connection: "USB Type-A to 4-Way Terminal Connector",
          Indicators: "2 x LED (Traffic Flow)",
          DataTransferRate: "3 Mbaud",
          OperatingSystem: "Windows Compatible (Auto-installing drivers)",
          OperatingTemperature: "-40°C to +85°C",
          Compliance: "RoHS, CE, FCC Certified",
          ProtocolSupport: "Standard & Modbus RTU",
          Compatibility: "O.L.E T5020, O.L.E Z5020 Series",
          PowerSource: "USB Powered (No external PSU required)",
          Warranty: "1 Year",
        },
      },
      {
        id: "HYTEK-T4020-OJ",
        name: "Probe/Tank Adaptor for O.L.E Gauges (Fits 30mm Hole)",
        manufacturerPartNumber: "T4020-OJ",
        AGPPartNumber: "AGP-FUEL-ADAPT-30MM",
        Make: "O.L.E (Offshore & Line Equipment Ltd)",
        images: [
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1768158636/T4020-OJ_O.L.E_Offshore_Line_Equipment_Ltd_Hyek_01_irqdfr.webp",
        ],
        shortDescription:
          "Compression-fit tank probe adaptor designed to provide a secure, weatherproof seal in 30mm holes on plastic fuel tanks.",
        description:
          'The Hytek T4020-OJ is a specialized tank probe adaptor designed specifically for installing O.L.E tank gauge probes into plastic storage tanks. Unlike standard 1" BSPT threaded fittings, this adaptor uses an expansion/compression mechanism to fit securely into a plain 30mm bored hole. It is engineered to create an IP65-rated seal, ensuring the tank remains weatherproof and the probe stays accurately positioned. This component is typically supplied as standard with O.L.E T5020 gauge kits but is available here as a replacement or for custom installations.',
        uses: [
          "Installing O.L.E tank gauge probes on plastic (polyethylene) tanks",
          "Retrofitting electronic gauges to tanks without threaded ports",
          "Creating a liquid-tight and weatherproof seal for hydrostatic sensors",
          "Ensuring correct probe suspension height in varying tank depths",
        ],
        downloads: [
          {
            name: "C2020 Installation Guide (Fitting Instructions)",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/q_auto/v1768247641/Technical_Data_Installation_-_C2020_O.L.E_Offshore_Line_Equipment_Ltd_Hyek_q3sncm.pdf",
          },
        ],
        details: {
          HoleSizeRequired: "30mm",
          FittingType: "Expansion / Compression Fitting",
          Material: "High-grade Plastic / Polymer",
          SealRating: "IP65 Weatherproof",
          CompatibleFluids:
            "Diesel, HVO, AdBlue®, Antifreeze, Kerosene, Water, Petrol",
          Compatibility: "O.L.E T5020, C2020, and Z2000 Series Probes",
          Weight: "0.1 kg",
          InstallationNote:
            "Probe must be suspended 50mm from tank bottom before tightening",
          Warranty: "1 Year",
        },
      },
      {
        id: "HYTEK-OLE-T5020-1A-3M",
        name: "O.L.E T5020 Tank Gauge Kit 0.3m to 3m",
        manufacturerPartNumber: "T5020-1A-3M",
        AGPPartNumber: "AGP-FUEL-GAUGE-T5020-3M",
        Make: "O.L.E (Offshore and Line Equipment Ltd)",
        images: [
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1768167655/T5020_O.L.E_Offshore_and_Line_Equipment_Ltd_Hytek_saikuu.webp",
        ],
        shortDescription:
          "High precision electronic tank gauge kit for tanks up to 3m height, featuring 0.25 percent accuracy and Modbus RS485.",
        description:
          "The O.L.E T5020-1A-3M is an ultra-high accuracy hydrostatic tank contents gauge, designed and manufactured in the UK. Providing a continuous digital readout in litres and a percentage bar graph, it is accurate to within 0.25 percent of total tank capacity. This complete kit includes a weatherproof IP55/IP65 display unit, a high-precision pressure sensor, a 1 inch tank adaptor, and a junction box for extending the probe cable. The gauge features an integrated 90dB high level sounder and a dedicated low level alarm LED. It is equipped with 4-20mA and Modbus RS485 RTU outputs as standard for seamless connection to Building Management Systems (BMS).",
        uses: [
          "Ultra-accurate volume monitoring for diesel, HVO, and AdBlue tanks",
          "Advanced BMS integration via Modbus RS485 or 4-20mA output",
          "Leak detection and inventory control for smaller industrial tanks",
          "Integrated overfill prevention and low level notification",
        ],
        downloads: [
          {
            name: "T5020 Technical Data Sheet",
            url: "https://hytekgb.com/wp-content/uploads/2024/11/hytek_t5020_sales_v2.pdf",
          },
          {
            name: "T5020 Setup and Installation Guide",
            url: "https://hytekgb.com/wp-content/uploads/2024/12/T5020_s961_6_tech.pdf",
          },
        ],
        details: {
          TankHeightRange: "0.3m to 3.0m",
          Accuracy: "0.25 percent",
          AlarmSounder: "90dB Internal Sounder",
          VisualAlert: "Low Level Alarm LED",
          Display: "Backlit LCD (Litres, Percent Bar, Status)",
          PowerSupply: "230V AC (110V and 24VDC options available)",
          Communication: "4-20mA Output and Modbus RS485 RTU",
          EnclosureRating: "IP55 Weatherproof",
          ProbeFitting: "1 inch BSPT Male",
          CableLength: "10m (Standard, extendable to 100m)",
          CompatibleFluids: "Diesel, HVO, AdBlue, Antifreeze, B100, Water",
          Warranty: "1 Year",
        },
      },
      {
        id: "HYTEK-OLE-T5020-1A-5M",
        name: "O.L.E T5020 Tank Gauge Kit 3m to 5m",
        manufacturerPartNumber: "T5020-1A-5M",
        AGPPartNumber: "AGP-FUEL-GAUGE-T5020-5M",
        Make: "O.L.E (Offshore and Line Equipment Ltd)",
        images: [
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1768167655/T5020_O.L.E_Offshore_and_Line_Equipment_Ltd_Hytek_saikuu.webp",
        ],
        shortDescription:
          "Ultra high accuracy electronic tank gauge kit for tanks up to 5m featuring Modbus RS485 and integrated alarms.",
        description:
          "The O.L.E T5020-1A-5M is a premium hydrostatic tank contents gauge manufactured in the UK. Accurate to 0.25 percent of tank capacity, it provides continuous digital readouts in litres and a percentage bar graph. This kit includes a weatherproof display unit, pressure sensor, 1 inch tank adaptor, and a junction box. It features a 90dB high level sounder and low level alarm LED. Includes 4-20mA and Modbus RS485 outputs for BMS integration.",
        uses: [
          "Precision volume monitoring for diesel and AdBlue tanks",
          "Advanced BMS integration via Modbus RS485",
          "Leak detection and inventory management",
          "Overfill prevention and low level alerting",
        ],
        downloads: [
          {
            name: "T5020 Technical Data Sheet",
            url: "https://hytekgb.com/wp-content/uploads/2024/11/hytek_t5020_sales_v2.pdf",
          },
          {
            name: "T5020 Installation Guide",
            url: "https://hytekgb.com/wp-content/uploads/2024/12/T5020_s961_6_tech.pdf",
          },
        ],
        details: {
          TankHeightRange: "3.0m to 5.0m",
          Accuracy: "0.25 percent",
          AlarmSounder: "90dB Internal Sounder",
          VisualAlert: "Low Level Alarm LED",
          Display: "Backlit LCD",
          PowerSupply: "230V AC",
          Communication: "4-20mA Output and Modbus RS485 RTU",
          EnclosureRating: "IP55 Weatherproof",
          ProbeFitting: "1 inch BSPT Male",
          CableLength: "10m",
          CompatibleFluids: "Diesel, HVO, AdBlue, Antifreeze, Water",
          Warranty: "1 Year",
        },
      },
      {
        id: "HYTEK-OLE-T5020-1A-10M",
        name: "O.L.E T5020 Tank Gauge Kit 5m to 10m",
        manufacturerPartNumber: "T5020-1A-10M",
        AGPPartNumber: "AGP-FUEL-GAUGE-T5020-10M",
        Make: "O.L.E (Offshore and Line Equipment Ltd)",
        images: [
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1768168967/T5020-1A-10M_O.L.E_Offshore_and_Line_Equipment_Ltd_Hytek_rclp9o.webp",
        ],
        shortDescription:
          "Ultra high accuracy electronic tank gauge kit for deep tanks up to 10m featuring Modbus RS485 and integrated alarms.",
        description:
          "The O.L.E T5020-1A-10M is a professional-grade hydrostatic tank contents gauge designed for exceptionally deep storage tanks. Manufactured in the UK, it offers a superior accuracy of 0.25 percent of total tank capacity. This system provides a continuous digital readout in litres and a percentage bar graph, making it ideal for large-scale industrial fuel, AdBlue, and water storage monitoring. The kit includes the electronic display unit, a high-precision pressure sensor, a 1 inch tank adaptor, and a junction box for cable extension. It features a 90dB high level sounder and a dedicated low level alarm LED, with 4-20mA and Modbus RS485 outputs included as standard.",
        uses: [
          "High precision monitoring for deep storage tanks up to 10m",
          "Advanced BMS integration via Modbus RS485 or 4-20mA",
          "Bulk fuel inventory management and leak detection",
          "Industrial overfill prevention and low level notification",
        ],
        downloads: [
          {
            name: "T5020 Technical Data Sheet",
            url: "https://hytekgb.com/wp-content/uploads/2024/11/hytek_t5020_sales_v2.pdf",
          },
          {
            name: "T5020 Setup and Installation Guide",
            url: "https://hytekgb.com/wp-content/uploads/2024/12/T5020_s961_6_tech.pdf",
          },
        ],
        details: {
          TankHeightRange: "5.0m to 10.0m",
          Accuracy: "0.25 percent",
          AlarmSounder: "90dB Internal Sounder",
          VisualAlert: "Low Level Alarm LED",
          Display: "Backlit LCD",
          PowerSupply: "230V AC",
          Communication: "4-20mA Output and Modbus RS485 RTU",
          EnclosureRating: "IP55 Weatherproof",
          ProbeFitting: "1 inch BSPT Male",
          CableLength: "10m to 12.5m",
          CompatibleFluids: "Diesel, HVO, AdBlue, Antifreeze, Water",
          Warranty: "1 Year",
        },
      },
      {
        id: "FEL-VALVES-SCREWED-FIRE-VALVE",
        name: "FEL Valves Screwed Free Fall Fire Valve",
        manufacturerPartNumber: "20-001 to 20-011",
        AGPPartNumber: "AGP-FIRE-SCD-01",
        Make: "FEL Valves",
        images: [
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1768155286/20-G_Series_FEL_Valves_pkz0bq.webp",
        ],
        shortDescription:
          "Compact, leak-proof positive action mechanism for 100% fuel shut-off or dump applications.",
        description:
          "The FEL range of screwed free fall fire valves provides a compact, positive action mechanism designed for 100% shut-off as an isolating valve or 100% opening as a fuel dump valve. These valves feature double Viton O-ring stem seals, making them ideal for vacuum pump suction lines and ensuring leak-proof operation in oil-fired plant rooms.",
        uses: [
          "Positive fuel isolation in fire emergencies",
          "Fuel dump valve for emergency tank drainage",
          "Vacuum pump suction line protection",
          "Commercial and industrial oil-fired plant rooms",
        ],
        downloads: [
          {
            name: "Information & Spec Sheet",
            url: "https://www.felvalves.com/wp-content/uploads/2021/04/20-001-20-011-Free-Fall-Fire-Valve-Screwed.pdf",
          },
        ],
        details: {
          SizeRange: '1/2" (15mm) to 2" (50mm)',
          Bore: "Full Bore",
          EndConnection: "Screwed (Threaded)",
          BodyMaterial: "Ductile Iron GGG40 or Brass",
          StemMaterial: "Brass or Stainless Steel",
          SealMaterial: "Double Viton O-rings",
          OperatingPressure: "Up to 14 bar",
          SafetyCertifications: [
            "100% Leak-proof Design",
            "Suitable for Vacuum Suction Lines",
            "Positive Mechanical Actuation",
          ],
          KitsAvailable:
            "Standard kits include pulleys, SS cable, fusible links, and warning signs",
        },
        sizingData: [
          {
            Size: "1/2-inch",
            Code: "20-001",
            Dimension_C: 51.6,
            Weight_Kg: 2.03,
          },
          { Size: "1-inch", Code: "20-005", Dimension_C: 65.5, Weight_Kg: 2.4 },
          {
            Size: "2-inch",
            Code: "20-011",
            Dimension_C: 101.4,
            Weight_Kg: 6.8,
          },
        ],
      },
      {
        id: "FEL-VALVES-20-B-RANGE",
        name: "FEL Valves 'B' Range Flanged Fire Valve",
        manufacturerPartNumber: "20-B Series",
        AGPPartNumber: "AGP-FIRE-FLG-B",
        Make: "FEL Valves",
        images: [
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1768155605/Free_Fall_Fire_Valves_FEL_Valves_lryxkx.webp",
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1768155286/20-G_Series_FEL_Valves_pkz0bq.webp",
        ],
        shortDescription:
          "Heavy-duty flanged fire valve for diesel and gas, finished in high-visibility RAL 3000 Flame Red.",
        description:
          "The 20-B Range is a heavy-duty flanged free fall fire valve assembly designed for 100% shut-off in fuel isolating applications or 100% opening for fuel dump functions. The entire assembly—valve body, lever, and weight—is finished in RAL 3000 Flame Red for easy identification in emergencies. It is suitable for both horizontal and vertical pipework and features double Viton O-ring stem seals, making it ideal for vacuum pump suction lines.",
        uses: [
          "Bulk fuel storage isolation",
          "Gas supply emergency shut-off",
          "Automated fire suppression system integration",
          "Large scale industrial boiler houses",
        ],
        downloads: [
          {
            name: "B Range Flanged Diesel/Gas Datasheet",
            url: "https://www.felvalves.com/wp-content/uploads/2021/04/Flanged-For-Diesel.pdf",
          },
        ],
        details: {
          SizeRange: '1/2" (15mm) to 8" (200mm)',
          EndConnection: "Flanged BS 4504 PN 16 / ANSI CL.150",
          BodyMaterial: "EN GJS 400-15 Epoxy Coated Ductile Iron",
          Ball_StemMaterial: "CuZn40Pb2 Chrome Plated Brass / Brass",
          SeatMaterial: "Reinforced PTFE",
          SealMaterial: "Double Viton O-rings",
          OperatingPressure: "Up to 14 bar",
          TemperatureRange: "-10°C to 150°C",
          Finish: "RAL 3000 Flame Red",
          SafetyFeatures: [
            "100% Positive Shut-off",
            "Mechanical or Electrical Actuation",
            "ISO 5211 for Direct Mount",
          ],
          KitsAvailable:
            "Supplied with Fire Valve Kits (Small, Medium, or Large)",
        },
        sizingData: [
          {
            Size: "1/2-inch (15mm)",
            Length_A: 115,
            Height_H: 84,
            Weight_Kg: 2.6,
            Kv: 22.3,
          },
          {
            Size: "1-inch (25mm)",
            Length_A: 125,
            Height_H: 96,
            Weight_Kg: 4.2,
            Kv: 83.5,
          },
          {
            Size: "2-inch (50mm)",
            Length_A: 150,
            Height_H: 135,
            Weight_Kg: 9.0,
            Kv: 435.0,
          },
          {
            Size: "4-inch (100mm)",
            Length_A: 190,
            Height_H: 180,
            Weight_Kg: 18.5,
            Kv: 1508.0,
          },
          {
            Size: "8-inch (200mm)",
            Length_A: 400,
            Height_H: 320,
            Weight_Kg: 93.0,
            Kv: 5957.0,
          },
        ],
      },
      {
        id: "FEL-VALVES-20-G-RANGE",
        name: "FEL Valves 'G' Range Flanged Gas Fire Valve",
        manufacturerPartNumber: "20-G Series",
        AGPPartNumber: "AGP-FIRE-FLG-G",
        Make: "FEL Valves",
        images: [
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1768155605/Free_Fall_Fire_Valves_FEL_Valves_lryxkx.webp",
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1768155286/20-G_Series_FEL_Valves_pkz0bq.webp",
        ],
        shortDescription:
          "High-visibility flanged fire valve specifically rated for gas applications up to 14 bar.",
        description:
          "The 20-G Range is a flanged free fall fire valve assembly designed for 100% shut-off in gas isolating applications or 100% opening for fuel dump functions. The entire assembly—valve, lever, and weight—is finished in RAL 3000 Flame Red for easy identification. It is suitable for both horizontal and vertical pipework and features double Viton O-ring stem seals, making it ideal for vacuum pump suction lines.",
        uses: [
          "Gas supply emergency shut-off",
          "Emergency fuel dump valve",
          "Vacuum pump suction line protection",
          "Industrial and commercial gas-fired plant rooms",
        ],
        downloads: [
          {
            name: "G Range Flanged Gas Datasheet",
            url: "https://www.felvalves.com/wp-content/uploads/2021/04/20-G-Range-%E2%80%93-Flanged-For-Gas.pdf",
          },
        ],
        details: {
          SizeRange: '1/2" (15mm) to 8" (200mm)',
          EndConnection: "Flanged BS 4504 PN 16",
          BodyMaterial: "EN GJS 400-15 Epoxy Coated Ductile Iron",
          Ball_StemMaterial: "CuZn40Pb2 Brass / Chrome Plated Brass",
          SeatMaterial: "Reinforced PTFE",
          SealMaterial:
            "NBR O-rings (Double Viton O-ring stem seals specified for suction)",
          OperatingPressure: "Up to 14 bar (PN16 rated)",
          TemperatureRange: "-10°C to 70°C",
          Finish: "RAL 3000 Flame Red",
          SafetyFeatures: [
            "100% Positive Shut-off",
            "Mechanical or Electrical Actuation",
            "ISO 5211 for Direct Mount",
          ],
          KitsAvailable:
            "Supplied with Fire Valve Kits (Small, Medium, or Large)",
        },
        sizingData: [
          {
            Size: "1/2-inch (15mm)",
            Length_A: 115,
            Height_H: 160,
            Weight_Kg: 2.6,
            Kv: 22.3,
          },
          {
            Size: "1-inch (25mm)",
            Length_A: 125,
            Height_H: 170,
            Weight_Kg: 4.2,
            Kv: 83.5,
          },
          {
            Size: "2-inch (50mm)",
            Length_A: 150,
            Height_H: 135,
            Weight_Kg: 9.0,
            Kv: 435.0,
          },
          {
            Size: "4-inch (100mm)",
            Length_A: 190,
            Height_H: 180,
            Weight_Kg: 18.5,
            Kv: 1508.0,
          },
          {
            Size: "8-inch (200mm)",
            Length_A: 400,
            Height_H: 320,
            Weight_Kg: 93.0,
            Kv: 5957.0,
          },
        ],
      },
      {
        id: "FEL-VALVES-20-SS-RANGE",
        name: "FEL Valves 'SS' Range Stainless Steel Fire Valve",
        manufacturerPartNumber: "20-SS Series",
        AGPPartNumber: "AGP-FIRE-FLG-SS",
        Make: "FEL Valves",
        images: [
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1768155605/Free_Fall_Fire_Valves_FEL_Valves_lryxkx.webp",
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1768154863/20-SS_Series_FEL_Valves_cedtgy.webp",
        ],
        shortDescription:
          "All stainless steel flanged fire valve for corrosive environments and high-spec diesel systems.",
        description:
          "The 20-SS Range is a high-specification flanged free fall fire valve assembly constructed entirely from stainless steel (body and internals). It is designed for 100% positive shut-off in fuel isolating applications or 100% opening for fuel dump functions. Its superior corrosion resistance makes it the premier choice for marine, offshore, or high-spec industrial environments. The valve features double Viton O-ring stem seals, making it fully compatible with vacuum suction lines.",
        uses: [
          "Marine and offshore fuel systems",
          "Chemical processing facilities",
          "Mission-critical data centres",
          "Aggressive or corrosive environmental installations",
        ],
        downloads: [
          {
            name: "SS Range Flanged Diesel Datasheet",
            url: "https://www.felvalves.com/wp-content/uploads/2021/04/20-SS-Range-%E2%80%93-Free-Fall-Fire-Valve-FlangedFor-Diesel.pdf",
          },
        ],
        details: {
          SizeRange: '1/2" (15mm) to 8" (200mm)',
          EndConnection: "Flanged BS 4504 PN 16 / ANSI CL.150",
          BodyMaterial: "Stainless Steel",
          Ball_StemMaterial: "Stainless Steel",
          SeatMaterial: "Reinforced PTFE",
          SealMaterial: "Double Viton O-rings",
          OperatingPressure: "Up to 14 bar",
          SafetyFeatures: [
            "100% Positive Shut-off",
            "Mechanical or Electrical Actuation",
            "Corrosion Resistant Construction",
            "Vacuum Pump Suction Line Ready",
          ],
          KitsAvailable:
            "Supplied with Fire Valve Kits (Small, Medium, or Large)",
        },
        sizingData: [
          {
            Size: "1/2-inch (15mm)",
            Length_A: 108,
            Height_H: 165,
            Weight_Kg: 3.3,
            Kv: 50.0,
          },
          {
            Size: "1-inch (25mm)",
            Length_A: 127,
            Height_H: 162,
            Weight_Kg: 3.9,
            Kv: 105.0,
          },
          {
            Size: "2-inch (50mm)",
            Length_A: 178,
            Height_H: 203,
            Weight_Kg: 5.5,
            Kv: 310.0,
          },
          {
            Size: "4-inch (100mm)",
            Length_A: 229,
            Height_H: 323,
            Weight_Kg: 16.5,
            Kv: 800.0,
          },
          {
            Size: "8-inch (200mm)",
            Length_A: 457,
            Height_H: 460,
            Weight_Kg: 82.0,
            Kv: 3250.0,
          },
        ],
      },
      {
        id: "FEL-VALVES-20-CS-RANGE",
        name: "FEL Valves 'CS' Range Flanged Fire Valve",
        manufacturerPartNumber: "20-CS Series",
        AGPPartNumber: "AGP-FIRE-FLG-CS",
        Make: "FEL Valves",
        images: [
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1768155605/Free_Fall_Fire_Valves_FEL_Valves_lryxkx.webp",
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1768155286/20-G_Series_FEL_Valves_pkz0bq.webp",
        ],
        shortDescription:
          "Standard ductile iron flanged fire valve for diesel fuel systems.",
        description:
          "The 20-CS Range is a flanged free fall fire valve assembly designed specifically for diesel applications. It provides 100% positive shut-off when used for isolation or 100% opening when used as a fuel dump valve. Constructed with a ductile iron body and the option of brass or stainless steel internals, it is suitable for both horizontal and vertical pipework. The inclusion of double Viton O-ring stem seals ensures the valve is leak-proof and ideal for vacuum pump suction lines.",
        uses: [
          "Diesel fuel line isolation",
          "Emergency fuel dump systems",
          "Vacuum pump suction line protection",
          "Commercial and industrial generator fuel systems",
        ],
        downloads: [
          {
            name: "CS Range Flanged Diesel Datasheet",
            url: "https://www.felvalves.com/wp-content/uploads/2021/04/20-CS-Range-%E2%80%93-Flanged-For-Diesel.pdf",
          },
        ],
        details: {
          SizeRange: '1/2" (15mm) to 8" (200mm)',
          EndConnection: "Flanged BS 4504 PN 16 / ANSI CL.150",
          BodyMaterial: "Ductile Iron GGG40",
          Ball_StemMaterial: "Brass or Stainless Steel",
          SeatMaterial: "Reinforced PTFE",
          SealMaterial: "Double Viton O-rings",
          OperatingPressure: "Up to 14 bar",
          SafetyFeatures: [
            "100% Positive Shut-off",
            "Mechanical or Electrical Actuation",
            "Vacuum Pump Suction Line Ready",
            "Horizontal or Vertical Installation",
          ],
          KitsAvailable:
            "Supplied with Fire Valve Kits (Small, Medium, or Large)",
        },
        sizingData: [
          {
            Size: "1/2-inch (15mm)",
            Length_A: 108,
            Height_H: 165,
            Weight_Kg: 3.3,
            Kv: 50.0,
          },
          {
            Size: "1-inch (25mm)",
            Length_A: 127,
            Height_H: 162,
            Weight_Kg: 3.9,
            Kv: 105.0,
          },
          {
            Size: "2-inch (50mm)",
            Length_A: 178,
            Height_H: 203,
            Weight_Kg: 5.5,
            Kv: 310.0,
          },
          {
            Size: "4-inch (100mm)",
            Length_A: 229,
            Height_H: 323,
            Weight_Kg: 16.5,
            Kv: 800.0,
          },
          {
            Size: "8-inch (200mm)",
            Length_A: 457,
            Height_H: 460,
            Weight_Kg: 82.0,
            Kv: 3250.0,
          },
        ],
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
            name: "Information & Spec Sheet",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/q_auto/v1767911942/Datasheet_-_0-605-53_Durite_uxfehd.pdf",
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
            name: "Information & Spec Sheet",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/q_auto/v1767911311/Datasheet_-_880175-0002_Littlefuse_smysfw.pdf",
          },
          {
            name: "Manual",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/q_auto/v1767911321/Manual_-_880175-0002_Littlefuse_huzlt6.pdf",
          },
          {
            name: "Installation Instructions",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/q_auto/v1767911316/Installation_Instruction_-_880175-0002_Littlefuse_zr0frt.pdf",
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
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1767813264/C5N_Frico_01_w87vcz.webp",
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
            name: "Information & Spec Sheet",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/q_auto/v1767911661/Datasheet_-_C5N_Frico_h4negs.pdf",
          },
          {
            name: "Installation & Maintenance Instructions",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/q_auto/v1767911666/Manual_-_C5N_Frico_mcykbb.pdf",
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
            name: "Information & Spec Sheet",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/q_auto/v1767912286/Datasheet_-_EXN30T3H_Schneider_Electric_qznd9r.pdf",
          },
          {
            name: "Installation & Maintenance Instructions",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/q_auto/v1767912369/Manual_-_EXN30T3H_Schneider_Electric_a7fnb4.pdf",
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
            name: "Information & Spec Sheet",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/q_auto/v1767908118/Datasheet_-_A9F55110_Schneider_Electric_mmlu4s.pdf",
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
        name: "Acti9 iC60H MCB 1P 10A B 10kA",
        manufacturerPartNumber: "A9F53110",
        AGPPartNumber: "AGP-ELEC-MCB-10A-B",
        Make: "Schneider Electric",
        images: [
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1767910203/A9F53110_Schneider_Electric_01_lnhcs3.webp",
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1767910205/A9F53110_Schneider_Electric_02_bpb53l.webp",
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1767910209/A9F53110_Schneider_Electric_03_mpetaw.webp",
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1767910215/A9F53110_Schneider_Electric_04_zol5cq.webp",
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1767910218/A9F53110_Schneider_Electric_05_flopsj.webp",
        ],
        shortDescription:
          "10A Single Pole B-Curve Miniature Circuit Breaker (MCB) for standard residential and commercial protection.",
        description:
          "The Acti9 iC60H (A9F53110) is a high-performance miniature circuit breaker providing essential protection against short-circuits and overload currents. This single-pole device features a B-curve tripping characteristic, making it ideal for residential and light commercial applications where inrush currents are low, such as lighting and domestic socket circuits. Equipped with VisiSafe for guaranteed contact opening and VisiTrip for rapid fault identification, it ensures high reliability and safety for both users and equipment.",
        uses: [
          "Protection of domestic and commercial lighting circuits",
          "Standard power socket protection (low inrush loads)",
          "Protection of persons against indirect contact in TN and IT systems",
          "Suitable for environments requiring 10kA breaking capacity",
        ],
        downloads: [
          {
            name: "Information & Spec Sheet",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/q_auto/v1767908125/Datasheet_-_A9F53110_Schneider_Electric_ynpdu7.pdf",
          },
        ],
        details: {
          CurrentRating: "10A (at 30 °C)",
          VoltageRating: "230/240V AC 50/60 Hz",
          ShortCircuitRating:
            "10,000A Icn (EN/IEC 60898-1) / 15kA Icu (EN/IEC 60947-2)",
          TrippingCurve: "Type B (4 x In +/- 20%)",
          NumberOfPoles: "1P",
          NumberofProtectedPoles: "1",
          NetworkType: "AC / DC",
          MountingMode: "Clip-on DIN Rail (35mm)",
          ConnectionTerminals: "Single terminal (Top or Bottom) 1…25 mm² rigid",
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
            name: "Information & Spec Sheet",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/q_auto/v1767908120/Datasheet_-_A9F53106_Schneider_Electric_zts7jn.pdf",
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
            name: "Information & Spec Sheet",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/q_auto/v1767907302/Datasheet_-_A9F53363_Schneider_Electric_sebsc3.pdf",
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
            name: "Information & Spec Sheet",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/q_auto/v1767907299/Datasheet_-_A9F53306_Schneider_Electric_r7fa6c.pdf",
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
            name: "Information & Spec Sheet",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/q_auto/v1767907305/Datasheet_-_A9D31820_Schneider_Electric_w8ow42.pdf",
          },
          {
            name: "Installation & Maintenance Instructions",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/q_auto/v1767906534/Manual_-_A9D12810_Schneider_Electric_m7zmye.pdf",
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
        id: "SCHNEIDER-A9D12810",
        name: "Acti9 iC60H RCBO 1P+Ns 10A C 100mA 10kA Type A",
        manufacturerPartNumber: "A9D12810",
        AGPPartNumber: "AGP-ELEC-RCBO-10A-C-100",
        Make: "Schneider Electric",
        images: [
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1767879023/A9D31820_Schneider_Electric_01_ajex1k.webp",
        ],
        shortDescription:
          "10A 1P+N C-Curve 100mA Type A RCBO providing combined protection against earth leakage, short-circuits, and overloads.",
        description:
          "The Acti9 iC60H (A9D12810) is a modular residual current breaker with overcurrent protection (RCBO). Rated at 10A with a C-tripping curve and a higher 100mA earth-leakage sensitivity, it is specifically designed for protection against indirect contact and to mitigate fire risks caused by leakage currents. It features VisiTrip for instant fault identification and VisiSafe for guaranteed contact opening during maintenance, ensuring high continuity of service and safety in demanding electrical environments.",
        uses: [
          "Protection of persons against electric shock (indirect contact)",
          "Protection of equipment against electrical fires set by leakage currents",
          "Combined protection of circuits against short-circuits and overloads",
          "Ideal for commercial and industrial distribution in TN earthing systems",
        ],
        downloads: [
          {
            name: "Information & Spec Sheet",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/q_auto/v1767906533/Datasheet_-_A9D12810_Schneider_Electric_fa8fok.pdf",
          },
          {
            name: "Installation & Maintenance Instructions",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/q_auto/v1767906534/Manual_-_A9D12810_Schneider_Electric_m7zmye.pdf",
          },
        ],
        details: {
          CurrentRating: "10A (at 50 °C)",
          VoltageRating: "230/240V AC 50/60 Hz",
          ShortCircuitRating: "10,000A Icn (EN/IEC 61009-2-2)",
          EarthLeakageSensitivity: "100 mA",
          EarthLeakageClass: "Type A (Instantaneous)",
          TrippingCurve: "Type C",
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
          Standards: "EN/IEC 61009-2-2, EN/IEC 61009-1, BS EN 61009-1",
          Warranty: "18 Months",
        },
      },
      {
        id: "SCHNEIDER-A9D10820",
        name: "Schneider Electric Acti9 iC60H RCBO 1P+N 20A C-Curve 10mA",
        manufacturerPartNumber: "A9D10820",
        AGPPartNumber: "AGP-RCBO-IC60H-20A-10MA",
        Make: "Schneider Electric",
        images: [
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1768064992/A9D10820_Schneider_Electric_01_fvphkw.webp",
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1768064995/A9D10820_Schneider_Electric_02_wlj5ya.webp",
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1768064999/A9D10820_Schneider_Electric_03_okn3zl.webp",
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1768065001/A9D10820_Schneider_Electric_04_do9hy0.webp",
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1768065004/A9D10820_Schneider_Electric_05_y5awva.webp",
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1768065009/A9D10820_Schneider_Electric_07_tflqma.webp",
        ],
        shortDescription:
          "Acti9 iC60H 20A single-pole RCBO with high-sensitivity 10mA protection and C-curve trip characteristics.",
        description:
          "The Acti9 iC60H (A9D10820) is a high-performance Residual Current Breaker with Overcurrent protection (RCBO). It provides integrated protection against short circuits, overloads, and earth leakage in a single device. With a 10mA sensitivity, it is specifically engineered for high-risk applications requiring maximum personnel protection against electric shock. It features the VisiSafe and VisiTrip indicators for enhanced safety and faster maintenance.",
        uses: [
          "Critical personnel protection in high-risk environments",
          "Enhanced safety for hospital and laboratory equipment",
          "School and nursery electrical circuit protection",
          "Industrial and commercial installations requiring 10mA sensitivity",
        ],
        downloads: [
          {
            name: "Information & Spec Sheet",
            url: "https://www.se.com/uk/en/product/A9D10820/ic60h-earth-leakage-circuit-breaker-1p-+-n-c-curve-20-a-10-ma-240-v/",
          },
          {
            name: "Installation & Maintenance Instructions",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/q_auto/v1767906534/Manual_-_A9D12810_Schneider_Electric_m7zmye.pdf",
          },
        ],
        details: {
          PolesDescription: "1P + N",
          RatedCurrent: "20 A at 30 °C",
          CurveCode: "C",
          EarthLeakageSensitivity: "10 mA",
          EarthLeakageProtectionClass: "Type AC",
          BreakingCapacity: "10000 A Icn at 240 V AC 50/60 Hz",
          NetworkType: "AC",
          MountingMode: "Clip-on (DIN rail)",
          MechanicalDurability: "20,000 cycles",
          ElectricalDurability: "10,000 cycles",
          IPRating: "IP20",
          OperatingTemp: "-5 °C to +60 °C",
          Dimensions: "110 x 18 x 77.5 mm (H x W x D)",
          SafetyFeatures: [
            "VisiSafe for guaranteed circuit disconnection during maintenance",
            "VisiTrip for immediate visual identification of a faulty circuit",
            "10mA sensitivity for superior protection of human life",
            "Double-clip design for easy removal with busbar in place",
            "High 10kA breaking capacity for industrial robustness",
          ],
        },
      },
      {
        id: "SCHNEIDER-A9D10816",
        name: "Schneider Electric Acti9 iC60H RCBO 1P+N 16A C-Curve 10mA",
        manufacturerPartNumber: "A9D10816",
        AGPPartNumber: "AGP-RCBO-IC60H-16A-10MA",
        Make: "Schneider Electric",
        images: [
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1768069282/A9D10816_Schneider_Electric_01_v7suaz.webp",
        ],
        shortDescription:
          "Acti9 iC60H 16A single-pole RCBO with high-sensitivity 10mA protection and C-curve trip characteristics.",
        description:
          "The Acti9 iC60H (A9D10816) is a high-performance combined Residual Current Breaker with Overcurrent protection (RCBO). It provides complete protection against short circuits, overloads, and earth leakage. Featuring a high-sensitivity 10mA threshold, it is designed for environments where maximum protection against electric shock is mandatory. The unit includes VisiSafe and VisiTrip technology for faster diagnostics and guaranteed safety during maintenance.",
        uses: [
          "Critical life safety protection in high-risk areas",
          "Enhanced protection for laboratory and medical electrical sockets",
          "School, nursery, and residential high-sensitivity circuits",
          "Industrial control systems requiring precise leakage monitoring",
        ],
        downloads: [
          {
            name: "Information & Spec Sheet",
            url: "https://www.se.com/uk/en/product/A9D10816/ic60h-earth-leakage-circuit-breaker-1p-+-n-c-curve-16-a-10-ma-240-v/",
          },
          {
            name: "Installation & Maintenance Instructions",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/q_auto/v1767906534/Manual_-_A9D12810_Schneider_Electric_m7zmye.pdf",
          },
        ],
        details: {
          PolesDescription: "1P + N",
          RatedCurrent: "16 A at 30 °C",
          CurveCode: "C",
          EarthLeakageSensitivity: "10 mA",
          EarthLeakageProtectionClass: "Type AC",
          BreakingCapacity: "10000 A Icn at 240 V AC 50/60 Hz",
          NetworkType: "AC",
          MountingMode: "Clip-on (DIN rail)",
          MechanicalDurability: "20,000 cycles",
          ElectricalDurability: "10,000 cycles",
          IPRating: "IP20",
          OperatingTemp: "-5 °C to +60 °C",
          Dimensions: "110 x 18 x 77.5 mm (H x W x D)",
          Weight: "0.205 kg",
          SafetyFeatures: [
            "VisiSafe for guaranteed safe downstream maintenance",
            "VisiTrip for rapid visual identification of a fault trip",
            "Ultra-sensitive 10mA protection for human life safety",
            "Double-clip for easy mounting/unmounting with busbar in situ",
            "High 10kA short-circuit breaking capacity",
          ],
        },
      },
      {
        id: "SCHNEIDER-XB7EV03MP",
        name: "Schneider Electric Harmony XB7 Monolithic Green Pilot Light",
        manufacturerPartNumber: "XB7EV03MP",
        AGPPartNumber: "AGP-SIG-XB7-GRN",
        Make: "Schneider Electric",
        images: [
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1768133639/XB7EV03MP_Schneider_Electric_01_y1in1e.webp",
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1768133812/XB7EV03MP_Schneider_Electric_02_bapvdm.webp",
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1768134643/XB7EV03MP_Schneider_Electric_03_piogtr.webp",
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1768135030/XB7EV03MP_Schneider_Electric_04_q93m75.webp",
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1768150925/XB7EV03MP_Schneider_Electric_05_tykf5j.webp",
        ],
        shortDescription:
          "22mm monolithic green pilot light with integral LED for 230-240V AC applications.",
        description:
          "The Harmony XB7EV03MP is a compact, monolithic green pilot light designed for industrial signaling. It features a plain lens with an integral LED, ensuring clear visibility and high energy efficiency. Built with a double-insulated plastic bezel, it is ideal for harsh environments requiring resistance to chemical agents and vibration. Its 22mm diameter makes it compatible with standard industrial control panels and machinery.",
        uses: [
          "Power status indication in control panels",
          "Machine status signaling in manufacturing plants",
          "Automation system condition monitoring",
          "Electrical cabinet signaling",
        ],
        downloads: [
          {
            name: "Product Characteristics Sheet",
            url: "https://www.se.com/uk/en/product/XB7EV03MP/monolithic-pilot-light-plastic-green-%C3%B822-integral-led-230240-v-ac/",
          },
        ],
        details: {
          MountingDiameter: "22.5 mm",
          SupplyVoltage: "230...240 V AC (50/60 Hz)",
          LightSource: "Integral LED (Steady signaling)",
          LensColour: "Green",
          BezelMaterial: "Plastic",
          IPRating: "IP65 (Front face) / IP20 (Rear face)",
          OperatingTemp: "-25°C to +70°C",
          ServiceLife: "70,000 hours at 25°C",
          CurrentConsumption: "16...20 mA",
          Terminals: "Screw clamp terminals (≤ 2 x 1.5 mm² with cable end)",
          TighteningTorque: "0.8...1.2 N.m",
          Dimensions: "29 x 29 x 54 mm (H x W x D)",
          Weight: "0.02 kg",
          SafetyFeatures: [
            "Vibrant green LED for clear visual status",
            "Robust IP65 protection against dust and water",
            "Standard 22mm cutout for easy retrofitting",
            "Double insulated plastic bezel for electrical safety",
            "Impact and vibration resistant",
          ],
        },
      },
      {
        id: "SCHNEIDER-XB7EV04MP3",
        name: "Schneider Electric Harmony XB7 Monolithic Red Pilot Light",
        manufacturerPartNumber: "XB7EV04MP3",
        AGPPartNumber: "AGP-SIG-XB7-RED",
        Make: "Schneider Electric",
        images: [
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1768151473/XB7EV04MP3_Schneider_Electric_01_fctrle.webp",
        ],
        shortDescription:
          "22mm monolithic red pilot light with integral LED and Faston connectors for 230-240V AC.",
        description:
          "The Harmony XB7EV04MP3 is a monolithic red pilot light designed for clear visual signaling in industrial automation and control applications. It features a round, plain lens with an integral LED, providing high-visibility steady signaling. This model is specifically equipped with 6.35 mm Faston connectors for quick electrical termination and is housed in a robust plastic bezel suitable for 22mm panel cutouts.",
        uses: [
          "Emergency or stop status indication",
          "Fault signaling in industrial control panels",
          "Hazard warning for machinery and plant equipment",
          "General power status monitoring",
        ],
        downloads: [
          {
            name: "Product Characteristics Sheet",
            url: "https://www.se.com/us/en/product/XB7EV04MP3/pilot-light-harmony-xb7-round-22mm-red-integral-led-230-240v-faston-connectors/",
          },
        ],
        details: {
          MountingDiameter: "22.5 mm",
          SupplyVoltage: "230...240 V AC (50/60 Hz)",
          LightSource: "Integral LED (Steady signaling)",
          LensColour: "Red",
          BezelMaterial: "Plastic",
          ConnectionTypes:
            "Faston connectors (6.35 x 0.8 mm) / Solder terminals",
          IPRating: "IP65 (Front face) / IP20 (Rear face)",
          OperatingTemp: "-25°C to +70°C",
          ServiceLife: "70,000 hours at 25°C",
          CurrentConsumption: "16...20 mA",
          Dimensions: "29 x 29 x 54 mm (H x W x D)",
          Weight: "0.02 kg",
          SafetyFeatures: [
            "Vibrant red LED for high-visibility alert signaling",
            "Faston connector design for rapid and secure wiring",
            "IP65 protection rating for dust and moisture resistance",
            "Compact monolithic design for space-saving panel installation",
            "Double insulated construction",
          ],
        },
      },
      {
        id: "SCHNEIDER-XB7EV05MP",
        name: "Schneider Electric Harmony XB7 Monolithic Yellow Pilot Light",
        manufacturerPartNumber: "XB7EV05MP",
        AGPPartNumber: "AGP-SIG-XB7-YEL",
        Make: "Schneider Electric",
        images: [
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1768151797/XB7EV05MP_Schneider_Electric_01_ko8ljs.webp",
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1768151798/XB7EV05MP_Schneider_Electric_02_o4ujjt.webp",
        ],
        shortDescription:
          "22mm monolithic yellow pilot light with integral LED and screw clamp terminals for 230-240V AC.",
        description:
          "The Harmony XB7EV05MP is a professional monolithic yellow pilot light designed for industrial visual signaling. It features an integral LED providing a steady yellow light, typically used for 'caution' or 'abnormal condition' alerts. The unit is constructed with a robust, double-insulated plastic bezel for 22mm panel cutouts and is designed for long-term reliability in harsh industrial environments with resistance to vibration and chemicals.",
        uses: [
          "Caution or warning status indication",
          "Abnormal condition signaling in automation lines",
          "Process standby or intervention required notification",
          "General industrial control panel monitoring",
        ],
        downloads: [
          {
            name: "Product Characteristics Sheet",
            url: "https://www.se.com/ae/en/product/XB7EV05MP/monolithic-pilot-light-plastic-yellow-%C3%B822-integral-led-230240-v-ac/",
          },
        ],
        details: {
          MountingDiameter: "22.5 mm",
          SupplyVoltage: "230...240 V AC (50/60 Hz)",
          LightSource: "Integral LED (Steady signaling)",
          LensColour: "Yellow",
          BezelMaterial: "Plastic",
          IPRating: "IP65 (Front face) / IP20 (Rear face)",
          OperatingTemp: "-25°C to +70°C",
          ServiceLife: "70,000 hours at 25°C",
          CurrentConsumption: "16...20 mA",
          Terminals: "Screw clamp terminals (≤ 2 x 1.5 mm² with cable end)",
          TighteningTorque: "0.8...1.2 N.m",
          Dimensions: "29 x 29 x 54 mm (H x W x D)",
          Weight: "0.02 kg",
          SafetyFeatures: [
            "Vibrant yellow LED for clear cautionary signaling",
            "High ingress protection (IP65) for demanding environments",
            "Standard 22mm mounting for easy installation",
            "Double insulated construction for electrical safety",
            "Energy-efficient and long-lasting LED technology",
          ],
        },
      },
      {
        id: "SCHNEIDER-QO116C06RCBO10",
        name: "Schneider Electric Square D QOVS RCBO 1P+Ns 16A C-Curve 10mA",
        manufacturerPartNumber: "QO116C06RCBO10",
        AGPPartNumber: "AGP-RCBO-QO-16A-10MA",
        Make: "Schneider Electric",
        images: [
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1768152068/QO116C06RCBO10_Schneider_Electric_01_kpydlr.webp",
        ],
        shortDescription:
          "16A single-pole RCBO with 10mA sensitivity and C-curve trip characteristics for Square D QO systems.",
        description:
          "The QO116C06RCBO10 is a high-sensitivity Residual Current Breaker with Overcurrent protection (RCBO) from the Square D QOVS range. It provides essential protection against short circuits, overloads, and earth leakage. With a 10mA residual current sensitivity, it is specifically designed for high-risk areas where enhanced protection against electric shock is required. It features the signature QO plug-on design for rapid installation into compatible distribution boards.",
        uses: [
          "Residential and commercial electrical circuit protection",
          "High-sensitivity protection for damp areas (bathrooms, kitchens)",
          "Protection of sensitive electronic equipment",
          "Enhanced personnel protection against electric shock",
        ],
        downloads: [
          {
            name: "Product Datasheet",
            url: "https://www.se.com/th/en/product/QO116C06RCBO10/residual-current-breaker-with-overcurrent-protection-rcbo-square-d-qovs-1p+ns-16a-c-curve-6000a-ac-type-10ma/",
          },
        ],
        details: {
          Poles: "1P + Ns",
          RatedCurrent: "16 A at 40 °C",
          CurveCode: "C",
          EarthLeakageSensitivity: "10 mA",
          EarthLeakageProtectionClass: "Type AC",
          BreakingCapacity: "6000 A Icn at 240 V AC",
          RatedOperatingVoltage: "240 V AC 50/60 Hz",
          MountingMode: "Plug-on",
          MechanicalDurability: "20,000 cycles",
          ElectricalDurability: "10,000 cycles",
          IPRating: "IP20",
          OperatingTemp: "-5 °C to +40 °C",
          Dimensions: "110 x 19 x 77 mm (H x W x D)",
          SafetyFeatures: [
            "10mA sensitivity for superior life safety protection",
            "Combined MCB and RCD functionality in a single module",
            "Square D QO plug-on system for secure electrical connection",
            "Visi-Trip indicator for fast identification of tripped circuits",
            "Robust 6kA short-circuit breaking capacity",
          ],
        },
      },
      {
        id: "SCHNEIDER-QO120C06RCBO10",
        name: "Schneider Electric Square D QOVS RCBO 1P+Ns 20A C-Curve 10mA",
        manufacturerPartNumber: "QO120C06RCBO10",
        AGPPartNumber: "AGP-RCBO-QO-20A-10MA",
        Make: "Schneider Electric",
        images: [
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1768152068/QO116C06RCBO10_Schneider_Electric_01_kpydlr.webp",
        ],
        shortDescription:
          "20A single-pole RCBO with high-sensitivity 10mA protection and C-curve trip characteristics for Square D QO systems.",
        description:
          "The QO120C06RCBO10 is a high-sensitivity Residual Current Breaker with Overcurrent protection (RCBO) part of the Square D QOVS range. It combines the functions of a miniature circuit breaker (MCB) and a residual current device (RCD) in a single compact module. With a 10mA sensitivity, it provides superior protection against electric shock in high-risk areas. It features the signature QO plug-on mounting for fast, secure installation into compatible distribution boards.",
        uses: [
          "High-sensitivity personnel protection in residential and commercial settings",
          "Enhanced safety for wet environments (bathrooms, laundries, outdoor sockets)",
          "Protection of sensitive electronic equipment and laboratory circuits",
          "Critical circuit protection where 10mA earth leakage trip is required",
        ],
        downloads: [
          {
            name: "Product Datasheet",
            url: "https://www.se.com/th/en/product/QO120C06RCBO10/residual-current-breaker-with-overcurrent-protection-rcbo-square-d-qovs-1p+ns-20a-c-curve-6000a-ac-type-10ma/",
          },
        ],
        details: {
          Poles: "1P + Ns",
          RatedCurrent: "20 A at 40 °C",
          CurveCode: "C",
          EarthLeakageSensitivity: "10 mA",
          EarthLeakageProtectionClass: "Type AC",
          BreakingCapacity: "6000 A Icn at 240 V AC",
          RatedOperatingVoltage: "240 V AC 50/60 Hz",
          MountingMode: "Plug-on",
          MechanicalDurability: "20,000 cycles",
          ElectricalDurability: "10,000 cycles",
          IPRating: "IP20",
          OperatingTemp: "-5 °C to +40 °C",
          Dimensions: "110 x 19 x 77 mm (H x W x D)",
          SafetyFeatures: [
            "10mA sensitivity for high-level personnel protection",
            "Integrated MCB and RCD functionality saves panel space",
            "Square D QO plug-on design for vibration-resistant connection",
            "Visi-Trip indicator for immediate identification of the faulty circuit",
            "Robust 6kA short-circuit breaking capacity",
          ],
        },
      },
      {
        id: "SCHNEIDER-QO132C06RCBO10",
        name: "Schneider Electric Square D QOVS RCBO 1P+Ns 32A C-Curve 10mA",
        manufacturerPartNumber: "QO132C06RCBO10",
        AGPPartNumber: "AGP-RCBO-QO-32A-10MA",
        Make: "Schneider Electric",
        images: [
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1768152068/QO116C06RCBO10_Schneider_Electric_01_kpydlr.webp",
        ],
        shortDescription:
          "32A single-pole RCBO with high-sensitivity 10mA protection and C-curve trip characteristics for Square D QO systems.",
        description:
          "The QO132C06RCBO10 is a high-specification Residual Current Breaker with Overcurrent protection (RCBO) from the Square D QOVS range. It provides integrated protection against short circuits, overloads, and earth leakage. This unit features a 10mA sensitivity, offering advanced personnel protection against electric shock, and is designed with the QO plug-on system for quick and secure installation into compatible distribution boards.",
        uses: [
          "High-power circuit protection in residential and commercial installations",
          "Enhanced personnel safety for high-risk or wet environments",
          "Protection of heavy-duty appliances requiring high-sensitivity earth leakage monitoring",
          "Point-of-use protection for sensitive laboratory or medical equipment",
        ],
        downloads: [
          {
            name: "Product Datasheet",
            url: "https://www.se.com/th/en/product/QO132C06RCBO10/residual-current-breaker-with-overcurrent-protection-rcbo-square-d-qovs-1p+ns-32a-c-curve-6000a-ac-type-10ma/",
          },
        ],
        details: {
          Poles: "1P + Ns",
          RatedCurrent: "32 A at 40 °C",
          CurveCode: "C",
          EarthLeakageSensitivity: "10 mA",
          EarthLeakageProtectionClass: "Type AC",
          BreakingCapacity: "6000 A Icn at 240 V AC",
          RatedOperatingVoltage: "240 V AC 50/60 Hz",
          MountingMode: "Plug-on",
          MechanicalDurability: "20,000 cycles",
          ElectricalDurability: "10,000 cycles",
          IPRating: "IP20",
          OperatingTemp: "-5 °C to +40 °C",
          Dimensions: "110 x 19 x 77 mm (H x W x D)",
          SafetyFeatures: [
            "Critical 10mA sensitivity for superior life safety protection",
            "Space-saving 1-pole + neutral pigtail design",
            "Visi-Trip window for instant visual identification of faulty circuits",
            "Square D QO plug-on mounting for vibration-proof connection",
            "High 6kA interrupt rating for robust circuit safety",
          ],
        },
      },
      {
        id: "SCHNEIDER-QO140C06RCBO10",
        name: "Schneider Electric Square D QOVS RCBO 1P+Ns 40A C-Curve 10mA",
        manufacturerPartNumber: "QO140C06RCBO10",
        AGPPartNumber: "AGP-RCBO-QO-40A-10MA",
        Make: "Schneider Electric",
        images: [
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1768152068/QO116C06RCBO10_Schneider_Electric_01_kpydlr.webp",
        ],
        shortDescription:
          "40A single-pole RCBO with high-sensitivity 10mA protection and C-curve trip characteristics for Square D QO systems.",
        description:
          "The QO140C06RCBO10 is a high-capacity Residual Current Breaker with Overcurrent protection (RCBO) within the Square D QOVS range. It provides integrated protection against short circuits, overloads, and earth leakage. This unit is distinguished by its 10mA sensitivity, providing an elite level of personnel protection against electric shock, and features the QO plug-on design for rapid and reliable installation into compatible distribution boards.",
        uses: [
          "High-load circuit protection for residential and commercial power systems",
          "Point-of-use protection for high-power appliances in wet environments",
          "Specialized life-safety protection for laboratory and industrial workstations",
          "Enhanced personnel protection for high-risk electrical circuits",
        ],
        downloads: [
          {
            name: "Product Datasheet",
            url: "https://www.se.com/th/en/product/QO140C06RCBO10/residual-current-breaker-with-overcurrent-protection-rcbo-square-d-qovs-1p+ns-40a-c-curve-6000a-ac-type-10ma/",
          },
        ],
        details: {
          Poles: "1P + Ns",
          RatedCurrent: "40 A at 40 °C",
          CurveCode: "C",
          EarthLeakageSensitivity: "10 mA",
          EarthLeakageProtectionClass: "Type AC",
          BreakingCapacity: "6000 A Icn at 240 V AC",
          RatedOperatingVoltage: "240 V AC 50/60 Hz",
          MountingMode: "Plug-on",
          MechanicalDurability: "20,000 cycles",
          ElectricalDurability: "10,000 cycles",
          IPRating: "IP20",
          OperatingTemp: "-5 °C to +40 °C",
          Dimensions: "110 x 19 x 77 mm (H x W x D)",
          SafetyFeatures: [
            "Ultra-sensitive 10mA trip level for maximum life safety",
            "Visi-Trip red mechanical indicator for easy fault location",
            "Plug-on jaw for easy, tool-free installation and secure connection",
            "Combined overcurrent and earth leakage protection in a single module",
            "Robust 6kA short-circuit interrupt rating",
          ],
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
      {
        id: "CLARKE-WIBC200-STARTER-CHARGER",
        name: "Clarke WIBC200 200A Battery Starter/Charger",
        manufacturerPartNumber: "6261520",
        modelNumber: "WIBC200",
        AGPPartNumber: "AGP-BATT-WIBC200",
        Make: "Clarke",
        images: [
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1768153668/6261520_wibc200_Clarke_01_qz9v9b.webp",
        ],
        shortDescription:
          "Heavy-duty 12V/24V intelligent battery starter/charger with 200A boost and microprocessor control.",
        description:
          "The Clarke WIBC200 is a heavy-duty intelligent battery starter/charger designed for use in professional environments such as garages and bodyshops. It features a built-in intelligent microprocessor to make the charging process faster, easier, and safer. The unit is highly portable due to its large wheels and includes a clear ammeter for real-time monitoring of output current.",
        uses: [
          "Charging 12V and 24V lead-acid batteries, including GEL, WET, and AGM types",
          "Emergency engine starting with a 200A maximum boost output",
          "Heavy-duty garage and workshop battery maintenance for batteries up to 450Ah capacity",
        ],
        downloads: [
          {
            name: "Technical Specification Datasheet",
            url: "https://www.machinemart.co.uk/p/clarke-wibc200-200a-battery-startercharger/",
          },
        ],
        details: {
          InputVoltage: "230V (50Hz)",
          Charge_BoostVoltage: "12V & 24V",
          MaxChargeCurrent: "40 Amps",
          MaxBoostStartCurrent: "200 Amps",
          BatteryCompatibility: "Lead Acid (including GEL, WET, and AGM)",
          MaxBatteryCapacity: "450Ah",
          ChargeIndicator: "Ammeter",
          ControlMethod: "Intelligent Microprocessor",
          PhysicalFeatures: [
            "Large wheels for easy movement",
            "Convenient cable storage compartment",
          ],
          RemoteStart: "No",
        },
      },
      {
        id: "PHOENIX-2903151",
        name: "Phoenix Contact TRIO-PS-2G/1AC/24DC/20 Power Supply",
        manufacturerPartNumber: "2903151",
        modelNumber: "TRIO-PS-2G/1AC/24DC/20",
        AGPPartNumber: "AGP-PWR-TRIO-20A",
        Make: "Phoenix Contact",
        images: [
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1768153903/2903151_Phoenix_Contact_01_hq75ys.webp",
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1768153902/2903151_Phoenix_Contact_02_uzmtgy.webp",
        ],
        shortDescription:
          "Primary-switched TRIO POWER supply unit with push-in connection, DIN rail mounting, 24V DC / 20A output.",
        description:
          "The TRIO-PS-2G/1AC/24DC/20 is a robust 1-phase power supply unit from the TRIO POWER range. It features tool-free push-in connection technology and a space-saving design. Engineered for high operational reliability, it includes a dynamic boost that provides 150% of the nominal current for 5 seconds to start heavy loads. Its electrically robust design makes it suitable for demanding industrial mechanical engineering applications.",
        uses: [
          "Industrial automation and control systems",
          "Mechanical engineering and machine building",
          "Power distribution in electrical cabinets",
          "DC motor and heavy load starting",
        ],
        downloads: [
          {
            name: "Product Data Sheet",
            url: "https://www.phoenixcontact.com/en-gb/products/power-supply-trio-ps-2g1ac24dc20-2903151",
          },
        ],
        details: {
          InputVoltageRange: "100 V AC ... 240 V AC (-15 % ... +10 %)",
          OutputVoltage: "24 V DC ±1 %",
          OutputCurrent: "20 A (Continuous) / 30 A (Dynamic Boost for 5s)",
          OutputPower: "480 W",
          Efficiency: "> 93 % (at 230 V AC)",
          ConnectionMethod: "Push-in Connection",
          MountingType: "DIN rail mounting",
          Dimensions: "68 x 130 x 160 mm (W x H x D)",
          Weight: "1.5 kg",
          IPRating: "IP20",
          OperatingTemp: "-25 °C ... 70 °C (> 60 °C Derating)",
          MTBF: "> 1,800,000 h (at 25 °C)",
          SafetyFeatures: [
            "Dynamic Boost technology for starting difficult loads",
            "Tool-free Push-in connection for rapid installation",
            "Active 'DC OK' signal contact for remote monitoring",
            "High noise immunity and vibration resistance",
            "Overvoltage and short-circuit protection",
          ],
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
            name: "Information & Spec Sheet",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/q_auto/v1767900340/Datasheet_-_RIS-STOP-2SF-R-AF_Risbridger_c3knqt.pdf",
          },
          {
            name: "Installation Instruction",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/q_auto/v1767900341/Installation_Instruction_-_RIS-STOP-2SF-R-AF_Risbridger_roh3lb.pdf",
          },
          {
            name: "Maintenance Instruction",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/q_auto/v1767900342/Maintenance_Instruction_-_RIS-STOP-2SF-R-AF_Risbridger_fsytki.pdf",
          },
          {
            name: "Adjustable Float Kit Installation",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/q_auto/v1767900338/Adjustable_Float_Kit_Instruction_-_RIS-STOP-2SF-R-AF_Risbridger_qfhke3.pdf",
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
            name: "Information & Spec Sheet",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/v1767899820/Datasheet_-_ERB_Series_Elmac_it4ntw.pdf",
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
            name: "Information & Spec Sheet",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/q_auto/v1767899187/Datasheet_-_109037XX_Landon_Kingsway_fnmlyi.pdf",
          },
          {
            name: "Installation & Maintenance Instructions",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/q_auto/v1767899187/Datasheet_-_109037XX_Landon_Kingsway_fnmlyi.pdf",
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
            name: "Information & Spec Sheet",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/q_auto/v1767898698/Datasheet_-_197VA-50-AL_Ridart_mhy9op.pdf",
          },
          {
            name: "Installation & Maintenance Instructions",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/q_auto/v1767898699/Manual_-_197VA-50-AL_Ridart_z3pafm.pdf",
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
            name: "Information & Spec Sheet",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/q_auto/v1767898698/Datasheet_-_197VA-50-AL_Ridart_mhy9op.pdf",
          },
          {
            name: "Installation & Maintenance Instructions",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/q_auto/v1767898699/Manual_-_197VA-50-AL_Ridart_z3pafm.pdf",
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
            name: "Information & Spec Sheet",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/q_auto/v1767898698/Datasheet_-_197VA-50-AL_Ridart_mhy9op.pdf",
          },
          {
            name: "Installation & Maintenance Instructions",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/q_auto/v1767898699/Manual_-_197VA-50-AL_Ridart_z3pafm.pdf",
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
            name: "Information & Spec Sheet",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/q_auto/v1767897854/Datasheet_-_SRFA-S2-R_Belimo_Automation_cbvvne.pdf",
          },
          {
            name: "Installation & Maintenance Instructions",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/q_auto/v1767898127/Manual_-_SRFA-S2-R_Belimo_Automation_jrin3k.pdf",
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
            name: "Information & Spec Sheet",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/q_auto/v1767897558/Datasheet_-_LV8635_Leengate_Valves_idrtw0.pdf",
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
        manufacturerPartNumber: "LV5556",
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
            name: "Information & Spec Sheet",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/q_auto/v1767897320/Datasheet_-_LV5556_Leengate_Valves_vqrrxs.pdf",
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
      {
        id: "AALBERTS-PEGLER-1059PT",
        name: "Pegler 1059PT Brass Y-Pattern Strainer",
        manufacturerPartNumber: "1059PT Series",
        AGPPartNumber: "AGP-VALV-STR-1059PT",
        Make: "Pegler (Aalberts IPS)",
        images: [
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1767963472/1059PT_Series_Pegler_Aalberts_integrated_piping_systems_01_s5y034.webp",
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1767963474/1059PT_Series_Pegler_Aalberts_integrated_piping_systems_02_wizntu.webp",
        ],
        shortDescription:
          "PN20/PN16 Brass Y-pattern strainer with stainless steel mesh for protecting systems from debris.",
        description:
          "The Pegler 1059PT is a high-quality brass Y-pattern strainer designed to protect sensitive components like meters, pumps, and valves from waterborne contamination and debris. It features a robust forged brass body and a removable stainless steel filter element (0.75mm to 0.80mm mesh). Designed for use in potable water, heating, and chilled water systems, it offers a reliable metal-to-metal seal and a compact 45° angle design for efficient flow.",
        uses: [
          "Protection of pumps and meters from debris",
          "Potable water distribution systems",
          "Heating and chilled water systems",
          "Commercial and industrial plumbing installations",
        ],
        downloads: [
          {
            name: "Information & Spec Sheet",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/q_auto/v1767963692/Datasheet_-_1059PT_Series_Pegler_Aalberts_integrated_piping_systems_znlrjs.pdf",
          },
          {
            name: "Installation & Maintenance Instructions",
            url: "https://aalberts-ips.co.uk/wp-content/uploads/2024/11/1059-PT_Manual.pdf",
          },
        ],
        details: {
          BodyMaterial: "Brass (CW617N)",
          MeshMaterial: "Stainless Steel",
          Sealing: "PTFE / Metal Sealing",
          Connection: "Parallel Thread ISO 228 (BSPP)",
          PressureRating: 'PN20 (1/2" to 2") / PN16 (2 1/2" to 4")',
          TemperatureRange: "-10°C to 110°C (Standard) / 120°C (Peak)",
          MeshSize: '0.75mm (up to 2") / 0.80mm (2 1/2" to 4")',
          Standards: "ISO 228, BS 2779, WRAS Approved",
          Warranty: "5 Years",
        },
        sizingData: [
          {
            Size: '1/2"',
            PartNumber: "120011",
            Length_L1: "58mm",
            Weight_kg: 0.14,
            Kv_Value: 3.8,
          },
          {
            Size: '3/4"',
            PartNumber: "120012",
            Length_L1: "70mm",
            Weight_kg: 0.2,
            Kv_Value: 7.3,
          },
          {
            Size: '1"',
            PartNumber: "120013",
            Length_L1: "87mm",
            Weight_kg: 0.38,
            Kv_Value: 11.0,
          },
          {
            Size: '1 1/4"',
            PartNumber: "120014",
            Length_L1: "96mm",
            Weight_kg: 0.56,
            Kv_Value: 15.5,
          },
          {
            Size: '1 1/2"',
            PartNumber: "120015",
            Length_L1: "106mm",
            Weight_kg: 0.8,
            Kv_Value: 25.0,
          },
          {
            Size: '2"',
            PartNumber: "120016",
            Length_L1: "126mm",
            Weight_kg: 1.1,
            Kv_Value: 41.0,
          },
          {
            Size: '2 1/2"',
            PartNumber: "120017",
            Length_L1: "150mm",
            Weight_kg: 1.95,
            Kv_Value: 68.0,
          },
          {
            Size: '3"',
            PartNumber: "120018",
            Length_L1: "169mm",
            Weight_kg: 3.05,
            Kv_Value: 102.0,
          },
          {
            Size: '4"',
            PartNumber: "120019",
            Length_L1: "219mm",
            Weight_kg: 5.65,
            Kv_Value: 175.0,
          },
        ],
      },
      {
        id: "ITAP-108-YORK",
        name: "Itap 108 YORK® Foot Valve",
        manufacturerPartNumber: "108 Series",
        AGPPartNumber: "AGP-VALV-FOOT-108",
        Make: "Itap S.p.A.",
        images: [
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1768154142/108_Series_Itap_01_clbhfd.webp",
        ],
        shortDescription:
          "Brass spring-loaded foot valve with stainless steel strainer for water, heating, and compressed air systems.",
        description:
          "The Itap Art. 108 YORK® is a high-quality foot valve designed for use with domestic water services, heating/air-conditioning plants, and compressed air systems. It combines the reliable YORK® spring-check mechanism with a polymer and stainless steel strainer to prevent debris from entering the pump suction line. It can be installed in any position (vertical, horizontal, or oblique) and features a robust brass body with a NBR washer for tight sealing.",
        uses: [
          "Pump suction line protection in water wells",
          "Domestic water service distribution",
          "Heating and air-conditioning systems",
          "Compressed air systems",
        ],
        downloads: [
          {
            name: "Information & Spec Sheet",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/q_auto/v1768336794/Datasheet_-_108_Series_Itap_uggn1i.pdf",
          },
          {
            name: "Installation & Maintenance Instructions",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/q_auto/v1768336990/Manual_-_108_Series_Itap_cy9wjz.pdf",
          },
        ],
        details: {
          BodyMaterial: "Brass CW617N",
          StrainerMaterial: "Polymer and Stainless Steel AISI 304",
          SpringMaterial: "Stainless Steel AISI 302",
          SealMaterial: "NBR (Nitrile Rubber)",
          InternalPlate: "Polymer",
          Threads: "ISO 228 (BSPP Parallel)",
          OperatingTemperature: "-20°C to 100°C",
          FiltrationDegree: '1200µm (3/8" to 2") / 2000µm (2 1/2" to 4")',
          InstallationPosition: "Vertical, Horizontal, or Oblique",
          Certifications: 'ACS (Sizes 3/8" to 2")',
          Warranty: "2 Years",
        },
        sizingData: [
          {
            Size: '3/8"',
            PartNumber: "1080038",
            Pressure_Bar: 12,
            Length_A: "69.5mm",
            Diameter_B: "35mm",
          },
          {
            Size: '1/2"',
            PartNumber: "1080012",
            Pressure_Bar: 12,
            Length_A: "70mm",
            Diameter_B: "35mm",
          },
          {
            Size: '3/4"',
            PartNumber: "1080034",
            Pressure_Bar: 12,
            Length_A: "82mm",
            Diameter_B: "42mm",
          },
          {
            Size: '1"',
            PartNumber: "1080100",
            Pressure_Bar: 12,
            Length_A: "91.5mm",
            Diameter_B: "48mm",
          },
          {
            Size: '1 1/4"',
            PartNumber: "1080114",
            Pressure_Bar: 10,
            Length_A: "108mm",
            Diameter_B: "59.5mm",
          },
          {
            Size: '1 1/2"',
            PartNumber: "1080112",
            Pressure_Bar: 10,
            Length_A: "119mm",
            Diameter_B: "70.5mm",
          },
          {
            Size: '2"',
            PartNumber: "1080200",
            Pressure_Bar: 10,
            Length_A: "136.5mm",
            Diameter_B: "86mm",
          },
          {
            Size: '2 1/2"',
            PartNumber: "1080212",
            Pressure_Bar: 6,
            Length_A: "164.5mm",
            Diameter_B: "103mm",
          },
          {
            Size: '3"',
            PartNumber: "1080300",
            Pressure_Bar: 6,
            Length_A: "184.5mm",
            Diameter_B: "126mm",
          },
          {
            Size: '4"',
            PartNumber: "1080400",
            Pressure_Bar: 6,
            Length_A: "214.5mm",
            Diameter_B: "154mm",
          },
        ],
      },
      {
        id: "FEL-VALVES-FLOAT-SWITCHES",
        name: "FEL Valves Float Switch Range",
        manufacturerPartNumber: "20-270 Series",
        AGPPartNumber: "AGP-ACC-003",
        Make: "FEL Valves",
        images: [
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1768154293/20-270_Series_FEL_Valves_01_ubsv9l.webp",
        ],
        shortDescription:
          "Robust 1-4 float switch assemblies for high/low fuel level indication and pump control.",
        description:
          "FEL Float switches are engineered for high-reliability fuel monitoring, featuring a robust 316 stainless steel stem and NBR floats. Available in single, twin, or four-float configurations, these switches provide precise 'Make on Rise' or 'Make on Fall' signals for tank overfill alarms, fuel reorder points, or automated pump start/stop functions. Designed for durability, the units utilize an IP67 aluminium terminal housing and are fully compatible with vacuum suction lines.",
        uses: [
          "High-level fuel indication for Tank Overfill Alarms",
          "Indirect pump start/stop automation via twin float points",
          "Critical Low-Low and High-High alarm monitoring via four-float arrays",
          "Bund leak detection using flexible lead float switches (Ref 20-274)",
          "Industrial fuel storage management with customizable switch depths",
        ],
        downloads: [
          {
            name: "Information & Spec Sheet",
            url: "https://www.felvalves.com/wp-content/uploads/2021/04/Float-Switches.pdf",
          },
        ],
        details: {
          Configurations:
            "Single (20-270), Twin (20-270/2), or Four Float (20-270/4)",
          StemMaterial: "316 Stainless Steel Tube & Float Stops",
          FloatMaterial: "NBR (Nitrile Butadiene Rubber)",
          Enclosure: "IP67 Rated Aluminium Terminal Housing",
          ProcessConnection: '1" BSP or 1" NPT Brass Connection',
          ElectricalRating: "1 Amp Switch Rating",
          CableEntry: "M20 Cable Gland",
          SwitchOrientation: "User Specified: 'Make on Rise' or 'Make on Fall'",
          InstallationLimits:
            "65mm Min (1st float), 40mm Min spacing between floats",
          Compatibility:
            "Suitable for various fuel oils and vacuum suction lines",
        },
      },
      {
        id: "EAT-GAS-RETAIN-001",
        name: "Gas Retention Damper (Low Leakage)",
        manufacturerPartNumber: "Standard Gas Retention Series",
        AGPPartNumber: "AGP-DAMP-001",
        Make: "Engineered Air Treatment Ltd",
        images: [
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1767895270/Gas-retention-damper_Engineered_Air_Treatment_Ltd_01_mfsqwr.webp",
        ],
        shortDescription:
          "Low-leakage gas retention dampers designed for integrity testing and fire suppression systems.",
        description:
          "Engineered Air Treatment Gas Retention Dampers (Low Leakage Dampers) are designed for environments where air or gas leakage is a critical concern[cite: 15, 16]. They are frequently used in fire suppression systems to maintain gas concentration or in cold air environments to prevent thermal loss[cite: 16]. The robust 2mm frame makes them suitable for both heavy-duty industrial assemblies and lighter HVAC installations[cite: 18].",
        uses: [
          "Fire suppression system gas retention [cite: 16]",
          "Cold air environment containment [cite: 16]",
          "Integrity testing for sealed containers [cite: 26, 73]",
          "Heavy-duty HVAC installations [cite: 18]",
        ],
        downloads: [
          {
            name: "Information & Spec Sheet",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/q_auto/v1767896143/Dataheet_-_Gas_Retention_Dampers_Engineered_Air_Treatment_Ltd_cayqxl.pdf",
          },
        ],
        details: {
          Material: "Pre-Galvanised M.S. to BS EN 10346 2015 DX51D [cite: 32]",
          BladeType:
            "0.8mm 'Z' Type Double Skinned, Parallel Opening [cite: 32]",
          LeakageClass:
            "Class 2 Closed Blade / Class C Casing (BS EN 1751:1999) [cite: 25]",
          TemperatureRange: "-30°C to +80°C [cite: 40]",
          Actuator:
            "Belimo SFA/SFA-S2 20Nm Spring Return (Standard) [cite: 91, 94]",
          Maintenance: "Accessible mechanism for easy maintenance [cite: 13]",
        },
      },
      {
        id: "EAT-MOT-DAMP-002",
        name: "Motorised Damper",
        manufacturerPartNumber: "Standard Motorised Series",
        AGPPartNumber: "AGP-DAMP-002",
        Make: "Engineered Air Treatment Ltd",
        images: [
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1767905667/Motorised_Dampers_Engineered_Air_Treatment_Ltd_01_z2gxyj.webp",
        ],
        shortDescription:
          "High-performance motorized dampers designed to control airflows and protect against environmental ingress.",
        description:
          "Engineered Air Treatment Motorised Dampers are precision-built to control airflows through buildings and generator housings. They provide critical protection for containers against the ingress of water and dust while assisting with thermal insulation. Featuring robust 2mm frames, these dampers are versatile enough for heavy-duty industrial assemblies as well as standard HVAC installations.",
        uses: [
          "Building and generator housing airflow control",
          "Water and dust ingress protection for containers",
          "Thermal protection in cold environments",
          "Industrial and commercial HVAC air distribution",
        ],
        downloads: [
          {
            name: "Information & Spec Sheet",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/q_auto/v1767905452/Datasheet_-_Motorised_Dampers_Engineered_Air_Treatment_Ltd_ngwacu.pdf",
          },
        ],
        details: {
          Casing:
            "2mm Pre-Galvanised M.S. (BS EN 10346), fully welded with Silver QD8 finish",
          Blades:
            "1.2mm Pre-Galvanised M.S. 'Z' Type Double Skinned, Opposed Action (Standard)",
          Seals: "Silicon Blade Seals and Side Shims for enhanced closure",
          Actuator:
            "Belimo SFA/SFA-S2 20Nm Spring Return (24-240V AC/DC, IP54)",
          OperatingRange: "-30°C to +80°C (Standard)",
          SpecialOptions:
            "Low temperature designs for -60°C with heated blankets",
          MaterialsOptional: "Stainless Steel (304/316), Zintec, Aluminium",
          Hardware:
            "Stainless Steel spindles, Phosphor Bronze bushes, BZP hardware",
          Warranty: "2 Years on damper / 5 Years on Belimo actuators",
          QualityStandards:
            "ISO 9001:2015 certified with full material traceability",
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
            name: "Information & Spec Sheet",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/q_auto/v1767922936/Datasheet_-_10056CL902205_Kason_Industries_wr3zqf.pdf",
          },
          {
            name: "Installation & Maintenance Instructions",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/q_auto/v1767922855/Manual_-_10056CL902205_Kason_Industries_cicq8h.pdf",
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
        id: "KASON-0481A-00600",
        name: "Kason 481A Safety-Glow Inside Release Handle",
        manufacturerPartNumber: "0481A-00600",
        AGPPartNumber: "AGP-REFR-ISR-0481A",
        Make: "Kason Industries",
        images: [
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1768166195/0481A-00600_Kason_01_p9et3v.webp",
        ],
        shortDescription:
          'Safety-Glow inside release handle for Kason 56 series latches, featuring a 6" (152mm) steel rod.',
        description:
          "The Kason 481A (0481A-00600) is a critical safety component designed for walk-in coolers and freezers. Specifically engineered to work with the Kason 56 and 5656 series Safeguard® latches, it allows personnel to release the latch from the inside, even if the door is cylinder-locked or padlocked on the exterior. This model features the 'Safety-Glow' plastic knob, which remains visible in the event of a power failure, and a durable kasonized steel rod and flange for high-use commercial environments. It is ADA compliant when paired with the appropriate latch.",
        uses: [
          "Emergency release for walk-in cooler and freezer doors",
          "Pairing with Kason 56 and 5656 Safeguard® latches",
          "Safety compliance for commercial kitchens and food storage",
          "Internal door operation for insulated panels",
        ],
        downloads: [
          {
            name: "Installation Instructions (IS-0481)",
            url: "https://www.kasonind.com/files/pdf/Kason_IS_0481_0482_0487_ISRHandles.pdf",
          },
          {
            name: "Safeguard 56 Latch Spec Sheet",
            url: "https://www.acedoors.co.nz/wp-content/uploads/kason-56-latch-spec-sheet.pdf",
          },
        ],
        details: {
          RodLength: '6" (152mm)',
          MinimumDoorThickness: '2-1/2" (63.5mm)',
          MaximumDoorThickness: 'Up to 5" (127mm)',
          RodMaterial: "Kasonized Steel (Zinc Plated)",
          KnobType: "Safety-Glow™ (Glow in the dark) Plastic",
          CompatibleLatches: "Kason 56, 5656 Series",
          Mounting: "(3) Holes for #10 (5.0mm) Screws",
          OperatingTemperature: "-40°C to 65°C (-40°F to 150°F)",
          ADACompliant: "Yes (when used with appropriate latch)",
          DrillHoleSize: '3/4" (19.1mm) Diameter',
          SafetyFeature: "Releases locked doors from inside",
          Weight: "0.34 kg (0.76 lbs)",
          Warranty: "1 Year",
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
            name: "Information & Spec Sheet",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/q_auto/v1767962593/Datasheet_-_082005700_Pommier_rcygml.pdf",
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
            name: "Information & Spec Sheet",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/q_auto/v1767962092/Datasheet_-_082005740_Pommier_c2suce.pdf",
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
            name: "Information & Spec Sheet",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/q_auto/v1767962252/Datasheet_-_082005792_Pommier_ejkcak.pdf",
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
            name: "Information & Spec Sheet",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/q_auto/v1767962253/Datasheet_-_082005780_Pommier_fuy9t7.pdf",
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
            name: "Information & Spec Sheet",
            url: "https://res.cloudinary.com/dc912sjxj/image/upload/q_auto/v1767962253/Datasheet_-_BCP20103E_Bloxwich_wqrv4h.pdf",
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
        id: "AGP-CONT-DC-CUSTOM",
        name: "Custom Data Center Acoustic & Weatherproof Enclosure",
        manufacturerPartNumber: "Custom-DC-GEN-ENCL",
        AGPPartNumber: "AGP-CONT-XXX",
        Make: "ESI-Art GenPower Solutions Ltd",
        images: [
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1768326360/Art_Genpower_Solutions_Ltd_ESI_Container_01_lufldh.webp",
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1768329341/Art_Genpower_Solutions_Ltd_ESI_Container_02_axoz6j.webp",
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1768326359/Art_Genpower_Solutions_Ltd_ESI_Container_03_tkl9ds.webp",
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,r_20/v1768327794/Art_Genpower_Solutions_Ltd___ESI_Container_04_klp7lm.webp",
          "https://res.cloudinary.com/dc912sjxj/image/upload/f_auto,q_auto,r_20/v1767730757/Hamriyah_Facility_03_z6hmoe.webp",
          "https://res.cloudinary.com/dc912sjxj/image/upload/f_auto,q_auto,r_20/v1767730367/Sajja_Facility_02_t6limt.webp",
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1768327414/Art_Genpower_Solutions_Ltd_ESI_Container_Layout_01_dquuzi.webp",
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1768327414/Art_Genpower_Solutions_Ltd_ESI_Container_Layout_02_lveqwf.webp",
        ],
        shortDescription:
          "Custom-engineered acoustic and weatherproof containers for data center standby power, rated for critical sound levels and hazardous environments.",
        description:
          "These heavy-duty generator containers are custom-engineered to provide a secure, climate-controlled environment for mission-critical data center power systems. Designed to meet the highest standards of reliability, our containers feature advanced acoustic insulation to achieve 'critical' sound levels, making them suitable for urban or noise-sensitive environments. Each module is built following rigorous manufacturing procedures and quality inspections. The integrated gas detection and fire suppression systems (CO2 or Water Mist) provide automated protection, while the IP-rated construction ensures that internal electronics remain protected from external contaminants. The structural design is analyzed for client-specific load requirements, ensuring durability for both onshore and offshore applications.",
        uses: [
          "Mission-critical data center standby power protection",
          "Urban noise-sensitive power installations",
          "Hazardous environment (Zone II ATEX) power housing",
          "Offshore and Onshore heavy-duty engine containment",
          "High-risk zones requiring certified fire-rated protection",
        ],
        productRange: [
          {
            category: "Standard & Custom Containers",
            options:
              "Standard ISO & High Cube configurations (20ft, 30ft, & 40ft)",
          },
          {
            category: "Acoustic Enclosures",
            options: "Custom-built sound-attenuated for Off-Shore & On-Shore",
          },
          {
            category: "Specialized Safety Units",
            options: "Fully certified Fire Rated Enclosures",
          },
          {
            category: "Compact Solutions",
            options: "Drop Over Canopies for quick installation",
          },
          {
            category: "Critical Infrastructure",
            options: "Dedicated Data Center Acoustic Solutions",
          },
          {
            category: "Integration Services",
            options: "Professional Engine & Alternator Coupling",
          },
        ],
        details: {
          EnvironmentalRating: "Weatherproof (Enclosure) / IP rated",
          AcousticPerformance: "65 - 85 dBA @ 1 Meter (Customizable)",
          FireSuppression: "Optional CO2 / Water Mist / Integrated Detection",
          ElectricalCompliance: "Optional Zone II ATEX / IECEx Fittings",
          FuelSystem: "Single or Double Wall Base Tank",
          StructuralStandard: "Client-Specific Analysis (Seismic/Wind rated)",
          Inspections: "Third-Party Certification (ABS, Lloyd’s, etc.)",
        },
      },
      {
        id: "AGP-EHOUSE-MOD-001",
        name: "Modular E-House & E-POD Solutions",
        manufacturerPartNumber: "MOD-EHOUSE-OS-OFF",
        AGPPartNumber: "AGP-PWR-EHOUSE",
        Make: "ESI-Art GenPower Solutions Ltd",
        images: [
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1768330245/E-House_E-Pod_Art_Genpower_Solutions_Ltd_ESI_01_l7dfol.webp",
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1768330248/E-House_E-Pod_Art_Genpower_Solutions_Ltd_ESI_02_kq90fj.webp",
          "https://res.cloudinary.com/dc912sjxj/image/upload/f_auto,q_auto,r_20/v1768330571/E-House_E-Pod_Art_Genpower_Solutions_Ltd_ESI_03_sirvro.webp",
          "https://res.cloudinary.com/dc912sjxj/image/upload/f_auto,q_auto/v1768330687/E-House_E-Pod_Art_Genpower_Solutions_Ltd_ESI_04_ebzsbb.webp",
        ],
        shortDescription:
          "A complete, plug-and-play power distribution center. Our customized E-House modules deliver reliable power infrastructure to the most remote and demanding locations.",
        description:
          "Our Electrical Houses (E-Houses) and E-PODs are prefabricated, modular substations designed to house critical electrical and automation equipment. Moving away from traditional brick-and-mortar substations, these steel-structure solutions offer a smarter, faster way to deploy power. \n\nEngineered for both Onshore and Offshore applications, our modules provide a controlled environment for sensitive equipment such as MV/LV Switchgears, Variable Frequency Drives (VFDs), and Control Panels. We offer a true One-Stop Solution: we handle the structural manufacturing, system integration (HVAC, F&G, Lighting), and factory testing before the unit ever reaches your site.",
        uses: [
          "Rapid deployment of power infrastructure in remote sites",
          "Offshore platform power distribution modules",
          "Industrial plant substation upgrades with optimized footprint",
          "Controlled environments for sensitive MV/LV Switchgear",
          "Mobile power solutions for mining and oil & gas fields",
        ],
        productRange: [
          {
            category: "Climate Control",
            options:
              "Heavy-duty HVAC systems for extreme desert or marine heat",
          },
          {
            category: "Safety Systems",
            options: "Integrated Fire & Gas (F&G) detection and suppression",
          },
          {
            category: "Electrical & MEP",
            options:
              "Complete internal lighting, small power, and auxiliary panels",
          },
          {
            category: "Structural Integrity",
            options:
              "IP55 rated steel enclosures with raised flooring and motorized louvers",
          },
          {
            category: "Scalability",
            options: "Modular coupling of 20ft/40ft ISO High Cube units",
          },
        ],
        successStories: [
          {
            client: "Saudi Aramco (KSA)",
            project:
              "Custom-built substations with HVAC, F&G, and raised flooring",
          },
          {
            client: "Rolls-Royce Solutions (KSA)",
            project: "4x MV Switchgear containers and 14x Custom Enclosures",
          },
          {
            client: "Bahrain International Airport",
            project: "E-House with full auxiliary integration",
          },
          {
            client: "Drydocks World (Dubai)",
            project:
              "Modularized containers for marine applications with full FAT",
          },
        ],
        details: {
          ModuleType: "ISO Containerized (20ft/40ft) or Custom Steel Building",
          Application: "Onshore (Desert/Industrial) & Offshore (Marine)",
          ProtectionRating: "IP55 / NEMA 4X",
          FireSafety: "Integrated Smoke/Heat Detection & Gas Suppression",
          Flooring: "Anti-static Raised Flooring or Chequered Plate",
          Cooling: "Redundant HVAC Units (Roof or Wall Mounted)",
          Certifications: "Factory Acceptance Tested (FAT) prior to shipping",
        },
      },
      {
        id: "AGP-PUMP-SKID-003",
        name: "High-Performance Pump Skids & Chemical Injection Packages",
        manufacturerPartNumber: "PUMP-INJ-OG-MOD",
        AGPPartNumber: "AGP-FLUID-INJ",
        Make: "ESI-Art GenPower Solutions Ltd",
        images: [
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1768331209/Pump_Skids_and_Chemical_Injection_Art_Genpower_Solutions_Ltd___ESI_01_jj0rdu.webp",
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,c_pad,w_700,h_500/v1768331658/Pump_Skids_and_Chemical_Injection_Art_Genpower_Solutions_Ltd___ESI_02_eqgm8e.webp",
          "https://res.cloudinary.com/dc912sjxj/image/upload/b_white,f_auto,q_auto,r_20/v1768331854/Pump_Skids_and_Chemical_Injection_Art_Genpower_Solutions_Ltd___ESI_03_jdh8w1.webp",
        ],
        shortDescription:
          "Engineered for the demanding Oil & Gas sector, our modular Pump Skids and Injection Packages provide precise fluid delivery and well intervention solutions.",
        description:
          "Our Pump Skids and Injection Packages are specialized equipment systems designed to support critical operations in various industries, with a primary focus on Oil & Gas Operations. These units are essential for well intervention and stimulation processes. \n\nEach package is engineered as a fully integrated solution, combining high-pressure pumping capabilities with precise chemical dosing systems. Whether you require a standalone injection unit or a complex system integrated with coiled tubing operations, our skids are built to deliver fluids and chemicals into the wellbore safely and efficiently. Designed for mobility and rapid deployment, our systems come mounted on heavy-duty structural steel skids, ensuring they can be easily transported and lifted into position on crowded drill sites or platforms.",
        uses: [
          "Oil & Gas well stimulation and productivity improvement",
          "Injection of corrosion inhibitors and biocides",
          "Downhole fluid delivery for well intervention",
          "Continuous fluid delivery support for Coiled Tubing units",
          "High-pressure chemical dosing in harsh environments",
        ],
        productRange: [
          {
            category: "System Design",
            options:
              "Integrated pumping, metering, and control in a single compact unit",
          },
          {
            category: "Intervention Capability",
            options:
              "Engineered for tasks such as well stimulation and downhole delivery",
          },
          {
            category: "Precision Injection",
            options:
              "Accurate dosing systems for controlled chemical flow rates",
          },
          {
            category: "Modular Mounting",
            options:
              "Robust frames with integrated lifting points for easy transport",
          },
          {
            category: "Materials",
            options:
              "High-grade stainless steel components to resist extreme corrosion",
          },
        ],
        details: {
          PrimaryApplication:
            "Well Intervention, Stimulation, Chemical Injection",
          MaxOperatingPressure: "Custom (up to 10,000 PSI / 15,000 PSI)",
          SkidMaterial: "Heavy-Duty Carbon Steel (Galvanized or Painted)",
          PipingMaterial: "Stainless Steel (316L) / Duplex / Inconel",
          ControlSystem: "Manual / PLC Automated / Remote Operation",
          Compliance: "API Standards / DNV Certified Frames (Offshore)",
        },
      },
      {
        id: "AGP-FUEL-ACECUBE-004",
        name: "High-Performance Self-Bunded Fuel Storage",
        manufacturerPartNumber: "AC-SB-FUEL-SERIES",
        AGPPartNumber: "AGP-FUEL-TANKS",
        Make: "Acecube / ESI-Art GenPower Solutions Ltd",
        images: [
          "https://res.cloudinary.com/dc912sjxj/image/upload/v1768234812/Acecube_Self_Bunded_Fuel_Tank_Main.webp",
        ],
        shortDescription:
          "Premium range of Acecube fuel tanks offering 110% self-bunded (double-walled) design for safe, compliant onsite fuel storage and transport in any environment.",
        description:
          "Our premium range of Acecube fuel tanks offers the ultimate solution for safe onsite fuel storage and transport. Featuring a 110% self-bunded (double-walled) design, these tanks ensure zero environmental contamination while maximizing durability and ease of use.\n\nFrom construction sites to offshore platforms, these tanks are engineered with a unique Hex-Corner Design for added structural strength and impact resistance. The smart engineering includes a removable inner tank for easy maintenance and a 'Letter Box' opening that allows fuel hoses to run while the cabinet remains securely locked and pressurized. Built to be stackable (up to 3-high empty) and easily maneuverable via bi-directional forklift pockets.",
        uses: [
          "Secure onsite fuel storage for construction and mining",
          "Auxiliary fuel supply for standby power generators",
          "DNV 2.7-1 certified fuel transport for offshore platforms",
          "Agricultural and industrial bulk fuel management",
          "Remote site refueling with integrated pump dispensing",
        ],
        productRange: [
          {
            category: "Standard Series",
            options:
              "Industry standard for general construction (950L - 10,000L)",
          },
          {
            category: "Versatile Series",
            options:
              "Enhanced life with galvanized hatch lids and corners (950L - 10,000L)",
          },
          {
            category: "All-Terrain Series",
            options:
              "Fully galvanized frame for extreme rust protection (Up to 60,000L)",
          },
          {
            category: "Offshore Series",
            options:
              "DNV 2.7-1 Certified with heavy-duty side frames (950L - 3,000L)",
          },
          {
            category: "Bulk / ISO Solutions",
            options:
              "CSC regulated containers with bund leak detection (20kL, 27kL, 60kL)",
          },
        ],
        details: {
          Certifications: "UL 142, ULC S-601, UN/ADR 31AY, BS 799",
          EnvironmentalCompliance: "PPG2 Compliant (110% Spill Prevention)",
          StructuralDesign: "Hex-Corner Design with Stacking Corners",
          LidSystem: "Pitched Outer Lid (Anti-rain accumulation)",
          Security: "Lockable Primary & Secondary Hatches",
          PumpCompatibility:
            "Mounting brackets included; Optional AC/DC Dispenser",
          SafetyFeatures: "Emergency Vents & Optional Bund Leak Detector",
          Handling: "Bi-directional Forklift Pockets & Corner Lifting Lugs",
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
