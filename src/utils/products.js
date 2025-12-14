export const products = [
  /* --------------------------------------------------------------------------
     CATEGORY 1 — INSTRUMENT & GENERATOR PACKAGE ACCESSORIES
  --------------------------------------------------------------------------- */
  {
    category: "Instrument & Generator Package Accessories",
    slug: "instrument-generator-accessories",
    categoryId: "CAT-ACC",
    items: [
      {
        id: "CP5340-CF005F",
        name: "Hydrostatic Level Transmitter",
        manufacturerPartNumber: "CP5340-CF005F",
        AGPPartNumber: "AGP-ACC-001",
        Make: "Hitec",
        images: [
          "https://res.cloudinary.com/dc912sjxj/image/upload/v1765716273/Hitec_Hydrostatic_Level_Transmitter_sorctl.png",
          "https://res.cloudinary.com/dc912sjxj/image/upload/v1765716273/Hitec_Hydrostatic_Level_Transmitter_sorctl.png",
          "https://res.cloudinary.com/dc912sjxj/image/upload/v1765716273/Hitec_Hydrostatic_Level_Transmitter_sorctl.png",
        ],
        shortDescription:
          "High-precision hydrostatic level transmitter with 4-20mA output for continuous tank monitoring.",
        description:
          "The Hitec CP5340-CF005F is a precision hydrostatic level transmitter designed for continuous immersion in fuel and water tanks. It features a robust 4-20mA output signal for seamless integration with BMS and PLC systems. The unit comes with 5 meters of cable and includes the PE1 (HITE0018) mounting accessory, ensuring stable installation even in turbulent tank environments.",
        uses: [
          "Continuous level monitoring in diesel day tanks",
          "Hydrostatic pressure measurement for industrial fluids",
          "Remote inventory management via BMS",
          "Underground and above-ground storage tank monitoring"
        ],
        // UPDATED: Replaced pdfLink with downloads array
        downloads: [
          { name: "Datasheet", url: "/pdfs/hitec-cp5340.pdf" }
        ],
        details: {
          PowerSupply: "12-30V DC",
          OutputSignal: "4-20mA (2-wire)",
          MeasurementRange: "0-5m H2O (Customizable)",
          Accuracy: "±0.5% F.S.",
          OperatingTemperature: "-20°C to +70°C",
          ProtectionRating: "IP68 (Submersible)"
        }
      },
      {
        id: "GMS-4-40-EU",
        name: "Gasmaster 4 Control Panel",
        manufacturerPartNumber: "GMS-4-40-EU R-C",
        AGPPartNumber: "AGP-ACC-002",
        Make: "Crowcon",
        images: [
          "https://res.cloudinary.com/dc912sjxj/image/upload/v1765717438/Crowcon_Gasmaster_4_Control_Panel_ugauxx.jpg",
          "https://res.cloudinary.com/dc912sjxj/image/upload/v1765717438/Crowcon_Gasmaster_4_Control_Panel_ugauxx.jpg",
          "https://res.cloudinary.com/dc912sjxj/image/upload/v1765717438/Crowcon_Gasmaster_4_Control_Panel_ugauxx.jpg",
        ],
        shortDescription:
          "Advanced 4-channel gas detection control panel with mA inputs for hazardous area monitoring.",
        description:
          "The Crowcon Gasmaster 4 is a versatile gas detection control panel capable of monitoring up to four gas detectors simultaneously. Capable of accepting 4-20mA inputs, it is designed to protect plant rooms and generator enclosures. It features comprehensive communication ports and relay outputs to trigger ventilation or emergency shutdowns upon gas detection.",
        uses: [
          "Central monitoring for generator room gas detection",
          "Control of ventilation fans upon gas leak detection",
          "Industrial plant safety systems",
          "Integration with fire and gas safety matrices"
        ],
        // UPDATED: Replaced pdfLink with downloads array
        downloads: [
          { name: "Datasheet", url: "/pdfs/crowcon-gasmaster.pdf" }
        ],
        details: {
          InputChannels: "4 (4-20mA)",
          OperatingVoltage: "230V AC",
          RelayOutputs: "3 (Alarm 1, 2, Fault)",
          OperatingTemperature: "-10°C to +50°C",
          ProtectionRating: "IP55",
          Dimensions: "220mm x 250mm x 80mm"
        }
      },
      {
        id: "XG5-A1-01-FA",
        name: "Xgard Type 5 Gas Detector (H2)",
        manufacturerPartNumber: "XG5-A1-01-FA",
        AGPPartNumber: "AGP-ACC-003",
        Make: "Crowcon",
        images: [
          "https://res.cloudinary.com/dc912sjxj/image/upload/v1765716273/Crowcon_Xgard_Type_5_Gas_Detector_l5pyt9.png",
          "https://res.cloudinary.com/dc912sjxj/image/upload/v1765716273/Crowcon_Xgard_Type_5_Gas_Detector_l5pyt9.png",
          "https://res.cloudinary.com/dc912sjxj/image/upload/v1765716273/Crowcon_Xgard_Type_5_Gas_Detector_l5pyt9.png",
        ],
        shortDescription:
          "Aluminium explosion-proof gas detector calibrated for Hydrogen (H2) 0-100% LEL.",
        description:
          "The Crowcon Xgard Type 5 is a robust, explosion-proof gas detector housed in durable aluminium alloy with an M20 cable entry. It is specifically calibrated for Hydrogen (H2) detection (0-100% LEL), making it an essential safety device for battery rooms and industrial areas where combustible gases may accumulate.",
        uses: [
          "Hydrogen gas detection in battery charging rooms",
          "Hazardous area (Zone 1/2) monitoring",
          "Petrochemical and industrial safety",
          "Leak detection in hydrogen fuel cell applications"
        ],
        // UPDATED: Replaced pdfLink with downloads array
        downloads: [
          { name: "Datasheet", url: "/pdfs/crowcon-xgard.pdf" }
        ],
        details: {
          GasDetected: "Hydrogen (H2)",
          DetectionRange: "0-100% LEL",
          SensorType: "Catalytic Bead",
          HousingMaterial: "Die-cast Aluminium",
          ATEXCertification: "II 2 G EEx d IIC T6",
          ProtectionRating: "IP65"
        }
      },
      {
        id: "AFRISO-LEAK",
        name: "Tank Bund Leak Detection Sensor",
        manufacturerPartNumber: "AFR-FLOAT-TYPE",
        AGPPartNumber: "AGP-ACC-004",
        Make: "Afriso",
        images: [
          "https://res.cloudinary.com/dc912sjxj/image/upload/v1765716273/Afriso_Tank_Bund_Leak_Detection_mq9ekl.png",
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
          "Environmental compliance for fuel storage"
        ],
        // UPDATED: Replaced pdfLink with downloads array
        downloads: [
          { name: "Datasheet", url: "/pdfs/afriso-leak-detection.pdf" }
        ],
        details: {
          SensorType: "Float Switch (NO/NC)",
          Output: "Potential-free contact",
          Connection: "1-inch NPT Male",
          OperatingFluids: "Diesel, Oil, Water",
          Material: "Polypropylene (PP)",
          MaxPressure: "1 bar"
        }
      },
      {
        id: "TH109-009",
        name: "Multi-Use Industrial Thermostat",
        manufacturerPartNumber: "TH109-009",
        AGPPartNumber: "AGP-ACC-005",
        Make: "PECO",
        images: [
          "https://res.cloudinary.com/dc912sjxj/image/upload/v1765716274/PECO_Multi-Use_Industrial_Thermostat_ufbshm.png",
          "https://res.cloudinary.com/dc912sjxj/image/upload/v1765716274/PECO_Multi-Use_Industrial_Thermostat_ufbshm.png",
          "https://res.cloudinary.com/dc912sjxj/image/upload/v1765716274/PECO_Multi-Use_Industrial_Thermostat_ufbshm.png",
        ],
        shortDescription:
          "Rugged industrial thermostat for reliable temperature control in plant rooms and enclosures.",
        description:
          "The PECO TH109-009 is a heavy-duty multi-use thermostat engineered for industrial environments. It provides precise temperature control for heating and cooling systems within generator enclosures and mechanical rooms, ensuring equipment operates within safe thermal limits regardless of external weather conditions.",
        uses: [
          "HVAC control in generator enclosures",
          "Temperature regulation in pump rooms",
          "Frost protection activation",
          "Industrial heater control circuits"
        ],
        // UPDATED: Replaced pdfLink with downloads array
        downloads: [
          { name: "Datasheet", url: "/pdfs/peco-thermostat.pdf" }
        ],
        details: {
          ControlRange: "0°C to +40°C",
          SwitchAction: "Single Pole Double Throw (SPDT)",
          ElectricalRating: "22A @ 120-277V AC",
          SensingElement: "Vapour-filled bellows",
          Enclosure: "NEMA 1 / IP40",
          Mounting: "Surface Mount"
        }
      }
    ]
  },

  /* --------------------------------------------------------------------------
     CATEGORY 2 — ELECTRICAL ITEMS AND ACCESSORIES
  --------------------------------------------------------------------------- */
  {
    category: "Electrical Items and Accessories",
    slug: "electrical-items-accessories",
    categoryId: "CAT-ELEC",
    items: [
      {
        id: "DURITE-0-605-53",
        name: "Battery Isolator Switch (Heavy-Duty)",
        manufacturerPartNumber: "0-605-53",
        AGPPartNumber: "AGP-ELEC-001",
        Make: "Durite",
        images: [
          "https://www.arc-components.com/user/products/large/0-605-53-durite-heavy-duty-battery-isolator-250a-at-24vdc-main.jpg",
          "https://www.arc-components.com/user/products/large/0-605-53-durite-heavy-duty-battery-isolator-250a-at-24vdc-main.jpg",
          "https://www.arc-components.com/user/products/large/0-605-53-durite-heavy-duty-battery-isolator-250a-at-24vdc-main.jpg",
        ],
        shortDescription:
          "Heavy-duty 400A battery disconnect switch with removable key for secure isolation.",
        description:
          "The Durite 0-605-53 is a high-capacity battery isolator switch capable of handling 400A continuous load at 24V DC. It features a removable key, providing both safety during maintenance and security against unauthorized equipment operation. It is an industry-standard component for heavy diesel generators and industrial vehicles.",
        uses: [
          "Main battery disconnect for diesel generators",
          "Heavy construction machinery safety lockout",
          "Marine battery isolation",
          "Emergency power cut-off"
        ],
        // UPDATED: Replaced pdfLink with downloads array
        downloads: [
          { name: "Datasheet", url: "/pdfs/durite-isolator.pdf" }
        ],
        details: {
          VoltageRating: "48V DC Max",
          ContinuousCurrent: "400A @ 24V DC",
          IntermittentCurrent: "2500A (5 seconds)",
          Operation: "Removable Key",
          TerminalSize: "M10 Studs",
          MountingHoleDiameter: "55mm"
        }
      },
      {
        id: "LITTELFUSE-880175",
        name: "Waterproof Battery Isolator (IP69K)",
        manufacturerPartNumber: "880175-0002",
        AGPPartNumber: "AGP-ELEC-002",
        Make: "Littelfuse",
        images: [
          "https://cdn2.webdamdb.com/1280_wKXtSXekYAm51M9z.jpg?1759442014",
          "https://cdn2.webdamdb.com/1280_wKXtSXekYAm51M9z.jpg?1759442014",
          "https://cdn2.webdamdb.com/1280_wKXtSXekYAm51M9z.jpg?1759442014",
        ],
        shortDescription:
          "IP67/IP69K rated battery switch designed for extreme environments and wash-down areas.",
        description:
          "The Littelfuse 880175-0002 is an ultra-rugged battery isolator switch engineered for the harshest environments. With an IP67/IP69K rating, it is completely dust-tight and can withstand high-pressure water jets, making it ideal for external mounting on pump skids, mining equipment, and marine generators.",
        uses: [
          "External generator enclosure isolation",
          "Mining and off-highway equipment",
          "Marine and offshore power systems",
          "Wash-down areas in food processing plants"
        ],
        // UPDATED: Replaced pdfLink with downloads array
        downloads: [
          { name: "Datasheet", url: "/pdfs/littelfuse-isolator.pdf" }
        ],
        details: {
          VoltageRating: "12-48V DC",
          ContinuousCurrent: "300A",
          ProtectionRating: "IP67 / IP69K",
          Operation: "Rotary Switch (Locking)",
          TerminalSize: "M10 Studs",
          OperatingTemperature: "-40°C to +85°C"
        }
      },
      {
        id: "FRICO-C5N",
        name: "Industrial Fan Heater (5kW, 400V)",
        manufacturerPartNumber: "C5N",
        AGPPartNumber: "AGP-ELEC-003",
        Make: "Frico",
        images: [
          "https://www.frico.net/_next/image?url=https%3A%2F%2Fstepimassets.blob.core.windows.net%2Fdsassetsprod%2FPRODUCT-MAIN-IMAGE_CAT.JPG&w=640&q=80",
          "https://www.frico.net/_next/image?url=https%3A%2F%2Fstepimassets.blob.core.windows.net%2Fdsassetsprod%2FPRODUCT-MAIN-IMAGE_CAT.JPG&w=640&q=80",
          "https://www.frico.net/_next/image?url=https%3A%2F%2Fstepimassets.blob.core.windows.net%2Fdsassetsprod%2FPRODUCT-MAIN-IMAGE_CAT.JPG&w=640&q=80",
        ],
        shortDescription:
          "5kW, 3-Phase 400V industrial fan heater with IP44 rating for plant room heating.",
        description:
          "The Frico C5N is a powerful 5kW fan heater designed for stationary use in industrial environments. Operating on a 3-phase 400V supply with an IP44 rating, it is resilient against dampness and dust. It is essential for maintaining optimal operating temperatures in large generator rooms and preventing condensation in electrical switchgear rooms.",
        uses: [
          "Heating large generator acoustic enclosures",
          "Plant room frost protection",
          "Drying and heating in workshops",
          "Temperature maintenance in pump houses"
        ],
        // UPDATED: Replaced pdfLink with downloads array
        downloads: [
          { name: "Datasheet", url: "/pdfs/frico-heater.pdf" }
        ],
        details: {
          PowerOutput: "5kW",
          Voltage: "400V 3-Phase",
          Airflow: "400 m³/h",
          ProtectionRating: "IP44",
          Dimensions: "350mm x 320mm x 250mm",
          ThermostatRange: "5°C to +35°C"
        }
      },
      {
        id: "SCHNEIDER-EXN30T3H",
        name: "Dry Type Transformer (30kVA)",
        manufacturerPartNumber: "EXN30T3H",
        AGPPartNumber: "AGP-ELEC-004",
        Make: "Schneider",
        images: [
          "https://download.schneider-electric.com/files?p_Doc_Ref=EXN30T_DA21&p_File_Type=rendition_369_jpg&default_image=DefaultProductImage.png",
          "https://download.schneider-electric.com/files?p_Doc_Ref=EXN30T_DA21&p_File_Type=rendition_369_jpg&default_image=DefaultProductImage.png",
          "https://download.schneider-electric.com/files?p_Doc_Ref=EXN30T_DA21&p_File_Type=rendition_369_jpg&default_image=DefaultProductImage.png",
        ],
        shortDescription:
          "30kVA Dry Type Transformer stepping down 480V Delta to 208Y/120V.",
        description:
          "The Schneider EXN30T3H is a high-efficiency 30kVA ventilated dry-type transformer. It is engineered to step down high industrial voltages (480V Delta) to usable distribution voltages (208Y/120V). Its robust construction ensures reliable power distribution for lighting panels, receptacles, and auxiliary equipment within E-Houses and industrial facilities.",
        uses: [
          "Power distribution in E-House modules",
          "Stepping down generator output for auxiliary loads",
          "Industrial lighting and control power",
          "Data center power distribution units"
        ],
        // UPDATED: Replaced pdfLink with downloads array
        downloads: [
          { name: "Datasheet", url: "/pdfs/schneider-transformer.pdf" }
        ],
        details: {
          kVARating: "30 kVA",
          PrimaryVoltage: "480V Delta",
          SecondaryVoltage: "208Y/120V",
          Phase: "Three-Phase",
          InsulationClass: "220°C (NEMA TP-1)",
          EnclosureType: "NEMA 3R (Ventilated)"
        }
      },
      {
        id: "LITHONIA-WST",
        name: "LED Wall Pack (4000K)",
        manufacturerPartNumber: "WST LED P1 40K",
        AGPPartNumber: "AGP-ELEC-005",
        Make: "Lithonia",
        images: [
          "https://img.acuitybrands.com/public-assets/catalog/114966/wst-led_mid.jpg?abl_version=06%2f30%2f2025+15%3a58%3a44",
          "https://img.acuitybrands.com/public-assets/catalog/114966/wst-led_mid.jpg?abl_version=06%2f30%2f2025+15%3a58%3a44",
          "https://img.acuitybrands.com/public-assets/catalog/114966/wst-led_mid.jpg?abl_version=06%2f30%2f2025+15%3a58%3a44",
        ],
        shortDescription:
          "Energy-efficient LED wall pack for perimeter and security lighting.",
        description:
          "The Lithonia WST LED is a high-performance wall pack designed for exterior lighting. Featuring a 4000K cool white output and rugged housing, it provides superior visibility for building perimeters, generator yards, and walkways while minimizing energy consumption and maintenance needs.",
        uses: [
          "Exterior lighting for generator enclosures",
          "Security lighting for industrial facilities",
          "Perimeter illumination",
          "Loading dock and walkway lighting"
        ],
        // UPDATED: Replaced pdfLink with downloads array
        downloads: [
          { name: "Product Spec Sheet", url: "https://img.acuitybrands.com/public-assets/catalog/114966/wst-led.pdf" }
        ],
        details: {
          LightSource: "LED",
          LumenOutput: "Approx 10,000 lumens",
          ColorTemperature: "4000K (Cool White)",
          Voltage: "120-277V AC",
          ProtectionRating: "IP66",
          Lifespan: "L70 > 100,000 hours"
        }
      }
    ]
  },

  /* --------------------------------------------------------------------------
     CATEGORY 3 — MECHANICAL ITEMS AND ACCESSORIES
  --------------------------------------------------------------------------- */
  {
    category: "Mechanical Items and Accessories",
    slug: "mechanical-items-accessories",
    categoryId: "CAT-MECH",
    items: [
      {
        id: "RIS-STOP-2SF",
        name: "Overfill Prevention Valve (2-inch)",
        manufacturerPartNumber: "RIS-STOP-2SF-R-AF",
        AGPPartNumber: "AGP-MECH-001",
        Make: "Risbridger",
        images: [
          "https://risbridger.com/wp-content/uploads/2018/01/OverfillPreventsionValve.png",
          "https://risbridger.com/wp-content/uploads/2018/01/OverfillPreventsionValve.png",
          "https://risbridger.com/wp-content/uploads/2018/01/OverfillPreventsionValve.png",
        ],
        shortDescription:
          "2-inch mechanical overfill prevention valve with high flow rate capacity (600 L/min).",
        description:
          "The Risbridger RIS-STOP-2SF-R-AF is a premium mechanical overfill prevention device designed for pressure delivery. It utilizes a magnetic shut-off mechanism to stop fuel flow instantly when the tank reaches capacity. With a flow range of 10-600 liters per minute, it allows for rapid refuelling while strictly preventing environmental spills.",
        uses: [
          "Overfill protection for diesel bulk tanks",
          "High-speed refuelling of generator belly tanks",
          "Fuel farm safety compliance",
          "Prevents soil contamination and fuel wastage"
        ],
        // UPDATED: Replaced pdfLink with downloads array
        downloads: [
          { name: "Datasheet", url: "https://risbridger.com/wp-content/uploads/2021/01/DATA-RIS-STOP-2SF-R-190523.pdf" }
        ],
        details: {
          NominalSize: "2-inch BSPT",
          MaxFlowRate: "600 L/min",
          ClosureType: "Magnetic Mechanical Shut-off",
          Material: "Anodized Aluminium",
          OperatingPressure: "0.5 to 10 bar",
          FuelCompatibility: "Diesel, Petrol, Biofuels"
        }
      },
      {
        id: "ELMAC-ERB050",
        name: "Deflagration Flame Arrestor (2-inch)",
        manufacturerPartNumber: "ERB-050FS-125(W)",
        AGPPartNumber: "AGP-MECH-002",
        Make: "Elmac",
        images: [
          "https://elmactechnologies.com/wp-content/uploads/2017/11/ERB-1.png",
          "https://elmactechnologies.com/wp-content/uploads/2017/11/ERB-1.png",
          "https://elmactechnologies.com/wp-content/uploads/2017/11/ERB-1.png",
        ],
        shortDescription:
          "2-inch End-of-Line deflagration flame arrestor for tank vent protection.",
        description:
          "The Elmac ERB-050FS is a high-specification deflagration flame arrestor with 2-inch NPT connections. Installed on tank vent lines, it uses a precision-crimped metal ribbon element to extinguish subsonic flames, preventing external fires from propagating into the fuel storage tank and causing explosions.",
        uses: [
          "Vent line protection for flammable liquid tanks",
          "Oil & Gas refinery storage safety",
          "Diesel generator fuel tank venting",
          "Chemical processing tank safety"
        ],
        // UPDATED: Replaced pdfLink with downloads array
        downloads: [
          { name: "Datasheet", url: "https://elmactechnologies.com/wp-content/uploads/2021/07/ERB-Series-Datasheet-1.pdf" }
        ],
        details: {
          NominalSize: "2-inch NPT",
          ArrestorType: "End-of-Line Deflagration",
          Material: "Carbon Steel / Stainless Steel 316",
          ElementType: "Crimped Metal Ribbon (Removable)",
          Certifications: "ISO 16852 (ATEX)",
          MaxOperatingTemperature: "+60°C"
        }
      },
      {
        id: "LK-FIRE-VALVE",
        name: "Free Fall Fire Valve Kit",
        manufacturerPartNumber: "10903709H",
        AGPPartNumber: "AGP-MECH-003",
        Make: "Landon Kingsway",
        images: [
          "https://www.landonkingsway.com/wordpress/wp-content/uploads/2020/02/freefall-fire-valve.png",
          "https://www.landonkingsway.com/wordpress/wp-content/uploads/2020/02/freefall-fire-valve.png",
          "https://www.landonkingsway.com/wordpress/wp-content/uploads/2020/02/freefall-fire-valve.png",
        ],
        shortDescription:
          "Gravity-operated fire safety valve kit with fusible link activation.",
        description:
          "The Landon Kingsway Free Fall Fire Valve is a gravity-actuated safety device. It is installed in fuel supply lines and held open by a tension cable connected to a fusible link (typically rated at 72°C or 145°C). In the event of a fire, the link melts, releasing the tension and allowing the valve to snap shut instantly, isolating the fuel supply to the generator.",
        uses: [
          "Emergency fuel isolation for boiler rooms",
          "Diesel generator fire safety systems",
          "Burner fuel line protection",
          "Compliance with building fire safety codes"
        ],
        // UPDATED: Replaced pdfLink with downloads array
        downloads: [
          { name: "Datasheet", url: "https://www.landonkingsway.com/wordpress/wp-content/uploads/2021/08/109037XX-FREEFALL-FIRE-VALVE-MKII-1.pdf" }
        ],
        details: {
          ValveSize: "1/2 inch",
          Actuation: "Gravity-Free Fall",
          FusibleLinkRating: "72°C Standard (Optional 145°C)",
          BodyMaterial: "Brass",
          MaxOperatingPressure: "10 bar",
          InletOutlet: "BSP Female"
        }
      },
      {
        id: "RIDART-197VA",
        name: "Vent Valve & Flame Arrester (Combined)",
        manufacturerPartNumber: "197VA-50-AL",
        AGPPartNumber: "AGP-MECH-004",
        Make: "Ridart",
        images: [
          "https://www.ridart.it/images/CAT-197OLD.jpg",
          "https://www.ridart.it/images/CAT-197OLD.jpg",
          "https://www.ridart.it/images/CAT-197OLD.jpg",
        ],
        shortDescription:
          "Combined 2-inch pressure/vacuum vent valve with integrated flame arrestor.",
        description:
          "The Ridart 197VA-50-AL combines two critical safety functions in one unit. It acts as a breather valve to regulate internal tank pressure during filling and emptying, and includes an integrated flame arrestor to block external ignition sources. The aluminium construction ensures durability and corrosion resistance.",
        uses: [
          "Atmospheric venting for above-ground tanks",
          "Combined pressure/vacuum relief",
          "Fire protection for diesel storage",
          "Vapour control in fuel systems"
        ],
        // UPDATED: Replaced pdfLink with downloads array
        downloads: [
          { name: "Datasheet", url: "https://www.ridart.it/datasheet/vacuum_vent_197.pdf" }
        ],
        details: {
          NominalSize: "2-inch Flange (DN50)",
          SettingPressure: "+30 mbar",
          SettingVacuum: "-2 mbar",
          FlameArrestor: "Integrated",
          Material: "Aluminium Body",
          FlowRate: "500 m³/h"
        }
      },
      {
        id: "BELIMO-SRFA",
        name: "Spring-Return Rotary Actuator (20Nm)",
        manufacturerPartNumber: "SRFA-S2-R",
        AGPPartNumber: "AGP-MECH-005",
        Make: "Belimo",
        images: [
          "https://www.belimo.com/pim/mam/europe/pictures-and-graphics/product/water_solutions/Actuators/Rotary-Spring/PIC_EU_SRF24A-R_ZSF_4C-product.jpg",
          "https://www.belimo.com/pim/mam/europe/pictures-and-graphics/product/water_solutions/Actuators/Rotary-Spring/PIC_EU_SRF24A-R_ZSF_4C-product.jpg",
          "https://www.belimo.com/pim/mam/europe/pictures-and-graphics/product/water_solutions/Actuators/Rotary-Spring/PIC_EU_SRF24A-R_ZSF_4C-product.jpg",
        ],
        shortDescription:
          "20Nm fail-safe rotary actuator for automated damper and valve control.",
        description:
          "The Belimo SRFA-S2-R is a heavy-duty rotary actuator designed for fail-safe applications. With 20Nm of torque and a spring-return mechanism, it ensures that dampers or valves return to a safe 'closed' or 'open' position in the event of power loss. It allows for precise automated control of airflow and fluid flow in critical systems.",
        uses: [
          "Automating air intake/outlet dampers on generators",
          "Actuating large ball valves for fluid control",
          "Emergency isolation in HVAC systems",
          "Fire and smoke damper actuation"
        ],
        // UPDATED: Replaced pdfLink with downloads array
        downloads: [
          { name: "Datasheet", url: "https://www.belimo.com/mam/general-documents/datasheets/en-gb/belimo_SRFA-S2-R_datasheet_en-gb.pdf" }
        ],
        details: {
          Torque: "20 Nm",
          ControlSignal: "0-10V DC Modulating",
          PowerSupply: "24V AC/DC",
          SpringReturnTime: "< 15 seconds",
          ProtectionRating: "IP54",
          OperatingTemperature: "-30°C to +50°C"
        }
      },
      {
        id: "LEENGATE-LV8635",
        name: "Carbon Steel Ball Valve (Flanged 1.5-inch)",
        manufacturerPartNumber: "LV8635",
        AGPPartNumber: "AGP-MECH-006",
        Make: "Leengate",
        images: [
          "https://www.leengatevalves.co.uk/wp-content/uploads/2016/10/LV8635-600x600.jpg",
          "https://www.leengatevalves.co.uk/wp-content/uploads/2016/10/LV8635-600x600.jpg",
          "https://www.leengatevalves.co.uk/wp-content/uploads/2016/10/LV8635-600x600.jpg",
        ],
        shortDescription:
          "Industrial 1.5-inch flanged carbon steel ball valve with ISO mounting top.",
        description:
          "The Leengate LV8635 is a robust carbon steel ball valve featuring PN16 flanges for secure pipeline connection. It includes an ISO top mounting pad, making it ready for direct actuation (electric or pneumatic). Its carbon steel body ensures high pressure and temperature resistance suitable for industrial fuel and water lines.",
        uses: [
          "Main fuel line isolation",
          "Automated fuel transfer systems",
          "Industrial water and chemical piping",
          "High-pressure fluid control"
        ],
        // UPDATED: Replaced pdfLink with downloads array
        downloads: [
          { name: "Datasheet", url: "https://www.leengatevalves.co.uk/wp-content/uploads/LV8635.pdf" }
        ],
        details: {
          NominalSize: "1.5-inch",
          EndConnection: "Flanged PN16",
          BodyMaterial: "Carbon Steel A216 WCB",
          OperatingPressure: "PN16 (16 bar)",
          TemperatureRange: "-29°C to +200°C",
          ActuationMount: "ISO 5211 Pad"
        }
      }
    ]
  },

  /* --------------------------------------------------------------------------
     CATEGORY 4 — GENERATOR ENCLOSURES, PUMP SKIDS, E-HOUSE / E-POD
  --------------------------------------------------------------------------- */
  {
    category: "Generator Enclosures, Pump Skids, E-House/E-POD",
    slug: "generator-systems",
    categoryId: "CAT-ENCL",
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
          "Offshore platform HVAC protection"
        ],
        // UPDATED: Replaced pdfLink with downloads array
        downloads: [
          { name: "Product Brochure", url: "https://engineeredairtreatment.co.uk/wp-content/uploads/2021/02/Gas-Retention-Dampers-v1.pdf" }
        ],
        details: {
          ATEXZone: "Zone 2 (Gas)",
          Function: "Gas Retention / Shut-off",
          BladeOperation: "Opposed Blade (Low Leakage)",
          Material: "Galvanized or Stainless Steel",
          Actuation: "Pneumatic or Electric Actuator (Sold Separately)",
          Certifications: "Ex II 3G"
        }
      },
      {
        id: "KASON-LATCH",
        name: "Door Latch & Cylinder (Stainless Steel)",
        manufacturerPartNumber: "10056CL902205",
        AGPPartNumber: "AGP-ENCL-002",
        Make: "Kason",
        images: [
          "https://www.cateringhardwaredirect.co.uk/cdn/shop/products/black-powder-coated-cylinder-locking-latch-latches-410780_800x.jpg?v=1750922891",
          "https://www.cateringhardwaredirect.co.uk/cdn/shop/products/black-powder-coated-cylinder-locking-latch-latches-410780_800x.jpg?v=1750922891",
          "https://www.cateringhardwaredirect.co.uk/cdn/shop/products/black-powder-coated-cylinder-locking-latch-latches-410780_800x.jpg?v=1750922891",
        ],
        shortDescription:
          "Polished stainless steel heavy-duty door latch with locking cylinder.",
        description:
          "The Kason 10056 series latch is a premium door locking mechanism designed for heavy insulated walk-in doors. Finished in polished stainless steel, it offers superior corrosion resistance and durability. It includes a cylinder lock for security and an inside release mechanism to prevent accidental entrapment.",
        uses: [
          "Walk-in generator enclosure doors",
          "E-House access doors",
          "Cold storage and industrial cabinets",
          "Sound-proof acoustic doors"
        ],
        // UPDATED: Replaced pdfLink with downloads array
        downloads: [
          { name: "Installation Guide", url: "https://www.kasonind.com/files/pdf/Kason_IS_0056_SafeGuardLatch.pdf" }
        ],
        details: {
          Finish: "Polished Stainless Steel (or Black Powder Coated)",
          Function: "Cylinder Lock with Safety Release",
          Locking: "Keyed Cylinder Lock",
          DoorThickness: "Up to 150mm (adjustable)",
          Handing: "Reversible",
          Series: "SafeGuard™ 10056"
        }
      },
      {
        id: "POMMIER-HINGE",
        name: "Stainless Steel Hinge System (300mm)",
        manufacturerPartNumber: "082005700 Series",
        AGPPartNumber: "AGP-ENCL-003",
        Make: "Pommier",
        images: [
          "https://www.pommier.eu/sites/default/files/pim/thumbs_380_380/G/0820_05700.jpg",
          "https://www.pommier.eu/sites/default/files/pim/thumbs_380_380/G/0820_05700.jpg",
          "https://www.pommier.eu/sites/default/files/pim/thumbs_380_380/G/0820_05700.jpg",
        ],
        shortDescription:
          "Heavy-duty stainless steel hinge system (blade, bracket, pin) for large industrial doors.",
        description:
          "The Pommier hinge system is a modular, high-load bearing solution for heavy industrial doors. Comprising a 300mm stainless steel blade, robust bracket, and pin, it is engineered to support the weight of acoustic and armored doors on generator enclosures and containers without sagging or corrosion.",
        uses: [
          "Containerized generator doors",
          "Heavy acoustic enclosure access points",
          "Truck body and trailer doors",
          "Marine grade external cabinetry"
        ],
        // UPDATED: Replaced pdfLink with downloads array
        downloads: [
          { name: "Product Data", url: "https://www.pommier.eu/sites/default/files/downloads-documentions/pdf/AGS01-Web_082005700_en.pdf" }
        ],
        details: {
          BladeLength: "300mm",
          Material: "Stainless Steel",
          LoadCapacity: "Heavy-Duty (Spec varies by assembly)",
          Mounting: "Weld-on or Bolt-on",
          CorrosionResistance: "Excellent (Marine Grade)",
          PinType: "Non-removable safety pin"
        }
      },
      {
        id: "BLOXWICH-GASKET",
        name: "Strike Gasket (Heavy-Duty Rubber)",
        manufacturerPartNumber: "BCP20103E",
        AGPPartNumber: "AGP-ENCL-004",
        Make: "Bloxwich",
        images: [
          "https://www.bloxwichdoorgear.com/acatalog/mzi_db45e6f10cef0f50184496a27826e5fc_162_162_ffffff_75.jpg",
          "https://www.bloxwichdoorgear.com/acatalog/mzi_db45e6f10cef0f50184496a27826e5fc_162_162_ffffff_75.jpg",
          "https://www.bloxwichdoorgear.com/acatalog/mzi_db45e6f10cef0f50184496a27826e5fc_162_162_ffffff_75.jpg",
        ],
        shortDescription:
          "Heavy-duty rubber gasket for sealing door strikes against weather and vibration.",
        description:
          "The Bloxwich BCP20103E is a specialized heavy-duty rubber gasket designed to sit behind door strikes. It provides essential cushioning to absorb the impact of heavy doors closing and ensures a watertight seal around the locking mechanism, protecting the enclosure from moisture and dust ingress.",
        uses: [
          "Weatherproofing container door locks",
          "Vibration dampening for door strikes",
          "Sealing generator enclosure access points",
          "Industrial vehicle door assemblies"
        ],
        // UPDATED: Replaced pdfLink with downloads array
        downloads: [
          { name: "Image Reference", url: "https://www.bloxwichdoorgear.com/acatalog/BCP20103E-zoom1.jpg" }
        ],
        details: {
          Material: "Heavy-Duty Rubber (EPDM/Neoprene blend)",
          Function: "Seal and Vibration Dampener",
          Application: "Behind Door Strike Plates",
          Color: "Black",
          Durability: "UV and Weather Resistant",
          Dimensions: "Custom cut for standard strike plates"
        }
      }
    ]
  },

  /* --------------------------------------------------------------------------
     CATEGORY 5 — TESTING AND MEASUREMENT TOOLS
  --------------------------------------------------------------------------- */
  {
    category: "Testing and Measurement Tools",
    slug: "testing-measurement-tools",
    categoryId: "CAT-TEST",
    items: [
      {
        id: "FLEXBAR-17295",
        name: "Portable Hardness Tester (Quick-Check)",
        manufacturerPartNumber: "17295",
        AGPPartNumber: "AGP-TEST-001",
        Make: "Flexbar",
        images: [
          "https://www.flexbar.com/cdn/shop/products/17295_trans_1800x1800.jpg?v=1549385188",
          "https://www.flexbar.com/cdn/shop/products/17295_trans_1800x1800.jpg?v=1549385188",
          "https://www.flexbar.com/cdn/shop/products/17295_trans_1800x1800.jpg?v=1549385188",
        ],
        shortDescription:
          "Portable Quick-Check instrument for verifying metal hardness on-site.",
        description:
          "The Flexbar 17295 Quick-Check is a precision handheld tool designed for the rapid testing of material hardness. It allows quality control inspectors and engineers to verify the hardness of metals (such as steel, aluminum, and brass) directly on the production floor or job site without needing heavy benchtop equipment. It aids in verifying material compliance for structural components.",
        uses: [
          "On-site material quality control",
          "Verifying hardness of pipework and structural steel",
          "Incoming goods inspection for metal parts",
          "Maintenance checks on wear components"
        ],
        // UPDATED: Replaced pdfLink with downloads array
        downloads: [
          { name: "Product Catalog", url: "https://www.tqscorp.com/docs/products/Flexbar-Catalog.pdf" }
        ],
        details: {
          MeasurementScale: "Rockwell C, B, HRC, HRB (Requires Conversion)",
          TestMethod: "Rebound / Impact",
          Accuracy: "±6 HRC (Dependent on Conversion)",
          Display: "Analog Dial",
          Portability: "Handheld",
          Batteries: "N/A (Mechanical)"
        }
      }
    ]
  }
];