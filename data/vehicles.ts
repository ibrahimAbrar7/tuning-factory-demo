export interface Vehicle {
  id: number;
  headings: {
    vehiclesWeService: string;
    services: string;
    performanceUpgrades: string;
    additionalInfo: string; 
  };
  names: string[];
  services: string[];
  performance: string[];
  additionalInfo: string[]; 
}


export const vehiclesData: Vehicle[] = [
  {
    id: 1,
    headings: {
      vehiclesWeService: "Audi vehicles we service",
      services: "Audi Services and repairs",
      performanceUpgrades: "Audi Performance Program",
      additionalInfo: "",
    },
    names: [
      "S3 2.0T",
      "RS3 2.5T",
      "B5 S4/RS4",
      "B7 RS4",
      "B8 RS4",
      "B9 RS4",
      "B8 RS5",
      "B9 RS5",
      "TTS/TTRS",
      "Q5 2.0T/3.0T",
      "SQ5 3.0T",
    ],
    services: [
      "Scheduled maintenance as per Audi",
      "Brake system maintenance and repair",
      "Control arm and bushing repairs and service",
      "Wheel bearing and axle shaft repair and service",
      "Transmission, Differential, Transfer case service and repairs",
      "Intake valve carbon cleaning services",
      "Timing chain service and repairs",
      "Cylinder head repairs if the timing chain tensioner failed",
      "Water pump/Thermostat repairs and service",
      "Fuel system repair and service to address fuel economy and engine light issues",
      "Electrical system diagnosis and repair",
      "Oil consumption remedy solutions",
      "Oil leak repairs",
      "Exhaust system repairs",
      "Supercharger services for the 3.0T",
      "Turbocharger rebuild, repairs and service for the 2.0T and 2.5T",
      "Wastegate rattle and p0299 related issues, diagnosing and repairing",
      "Full engine rebuild for the 2.0T, 2.5T, 3.0T",
      "Engine light diagnosing and repairing",
    ],
    
    performance: [
      "Summer and Winter wheel sets",
      "Brake system upgrades",
      "Lowering springs, airbag conversion and coilovers",
      "Control arm and bushing upgrades",
      "Exhaust system upgrades",
      "Intake system upgrades",
      "Engine and transmission mount reinforcements",
      "Intercooler upgrades",
      "Forced induction upgrades",
      "Engine build for the 2.0T, 2.5T, 3.0T",
      "Cooling system upgrades",
      "Engine DME remapping",
      "Haldex and transmission upgrades",
    ],    
    additionalInfo: [
      "tedst"
    ]
  },
  {
    id: 2,
    headings: {
      vehiclesWeService: "Volkswagen vehicles we service",
      services: "Volkswagen Services and repairs",
      performanceUpgrades: "Volkswagen Performance Program",
      additionalInfo: "",
    },
    names: ["Golf R 2.0T", "Tiguan 2.0T"],
    services: [
      "Scheduled maintenance as per Volkswagen",
      "Brake system maintenance and repair",
      "Control arm and bushing repairs and service",
      "Wheel bearing and axle shaft repair and service",
      "Transmission, Differential, Transfer case service and repairs",
      "Intake valve carbon cleaning services",
      "Timing chain service and repairs",
      "Water pump/Thermostat repairs and service",
      "Fuel system repair and service to address fuel economy and engine light issues",
      "Electrical system diagnosis and repair",
      "Oil consumption remedy solutions",
      "Oil leak repairs",
      "Exhaust system repairs",
      "Turbocharger rebuild, repairs and service",
      "Wastegate rattle and p0299 related issues, diagnosing and repairing",
      "Full engine rebuild for the 2.0T",
      "Engine light diagnosing and repairing",
    ],
    performance: [
      "Summer and Winter wheel sets",
      "Brake system upgrades",
      "Lowering springs, airbag conversion and coilovers",
      "Control arm and bushing upgrades",
      "Exhaust system upgrades",
      "Intake system upgrades",
      "Engine and transmission mount reinforcements",
      "Intercooler upgrades",
      "Forced induction upgrades",
      "Engine build for the 2.0T",
      "Cooling system upgrades",
      "Engine DME remapping",
      "4Motion/Haldex and transmission upgrades",
    ],
    additionalInfo: [
      ""
    ]
  },
  {
    id: 3,
    headings: {
      vehiclesWeService: "Porsche vehicles we service",
      services: "Porsche Services and repairs",
      performanceUpgrades: "Porsche Performance Program",
      additionalInfo: "",
    },
    names: [
      "911996",
      "911997",
      "911991",
      "911992",
      "Cayman",
      "Boxster",
      "Macan",
    ],
    services: [
      "Scheduled maintenance as per Porsche",
      "Brake system maintenance and repair",
      "Control arm and bushing repairs and service",
      "Wheel bearing and axle shaft repair and service",
      "Transmission, Differential, Transfer case service and repairs",
      "Intake valve carbon cleaning services",
      "Timing chain service and repairs",
      "Water pump/Thermostat repairs and service",
      "Fuel system repair and service to address fuel economy and engine light issues",
      "Electrical system diagnosis and repair",
      "Oil consumption remedy solutions",
      "Oil leak repairs",
      "Exhaust system repairs",
      "Turbocharger rebuild, repairs and service",
      "Wastegate rattle and p0299 related issues, diagnosing and repairing",
      "Full engine rebuild for the 911 996 to 992 series",
      "Engine light diagnosing and repairing",
    ],
    performance: [
      "Summer and Winter wheel sets",
      "Brake system upgrades",
      "Lowering springs, airbag conversion and coilovers",
      "Control arm and bushing upgrades",
      "Exhaust system upgrades",
      "Intake system upgrades",
      "Engine and transmission mount reinforcements",
      "Intercooler upgrades",
      "Forced induction upgrades",
      "Engine performance builds",
      "Cooling system upgrades",
    ],
    additionalInfo: [
      ""
    ],
  },
  {
    id: 4,
    headings: {
      vehiclesWeService: "BMW Vehicles we service",
      services: "BMW Services we offer",
      performanceUpgrades: "BMW Performance Program",
      additionalInfo: "",
    },
    names: [
    "M235 N55",
    "M240 B58",
    "M2 N55",
    "M2 Comp S55",
    "M2 S58",
    "E90 M3",
    "F8X M3/M4 S55",
    "G8X M3/M4 S58",
    "Z4 M40i B58",
    "X3/X4 M40i B58",
    "X3M/X4M S58"
  ],
  services: [
    "Scheduled maintenance as per BMW",
    "Brake system maintenance and repair",
    "Control arm and bushing repairs and service",
    "Wheel bearing and axle shaft repair and service",
    "Manual/Automatic transmission and Xdrive services",
    "Intake valve carbon cleaning services",
    "Timing chain service and repairs",
    "Cylinder head repairs if the timing chain tensioner failed",
    "Water pump/Thermostat repairs and service",
    "Fuel system repair and service to address fuel economy and engine light issues",
    "Electrical system diagnosis and repair",
    "Oil consumption remedy solutions",
    "Oil leak repairs",
    "Exhaust system repairs",
    "Turbocharger rebuild, repairs and service",
    "Wastegate rattle and p0299 related issues, diagnosing and repairing",
    "Full engine rebuild for the N55, B58, S55, S58",
    "Engine light diagnosing and repairing"
  ],
  performance: [
    "Summer and Winter wheel sets",
    "Brake system upgrades",
    "Lowering springs, airbag conversion and coilovers",
    "Control arm and bushing upgrades",
    "Exhaust system upgrades",
    "Intake system upgrades",
    "Turbo upgrades",
    "Engine and transmission mount reinforcements",
    "Intake manifold upgrades",
    "Intercooler upgrades",
    "Forged engine build for the N54, N55, B58, S55, S58",
    "Xdrive service and upgrades",
    "Cooling system upgrades",
    "Engine DME remapping",
    "Xdrive and transmission upgrades"
],additionalInfo: [
  ""
],

  },
  {
    id: 5,
    headings: {
      vehiclesWeService: "Dodge Vehicles we service",
      services: "Dodge Challenger Services and repairs",
      performanceUpgrades: "Dodge Challenger Performance Program",
      additionalInfo: "Dodge Challenger engines we specialize in",
    },
    names: [
    "Challenger 2008-Current"
  ],
  services: [
    "Scheduled maintenance as per Dodge",
    "Brake system maintenance and repair",
    "Control arm and bushing repairs and service",
    "Wheel bearing and axle shaft repair and service",
    "Transmission, Differential, Transfer case service and repairs",
    "Intake valve carbon cleaning services",
    "Water pump/Thermostat repairs and service",
    "Fuel system repair and service to address fuel economy and engine light issues",
    "Electrical system diagnosis and repair",
    "Oil consumption remedy solutions",
    "Oil leak repairs",
    "Exhaust system repairs",
    "Supercharger services",
    "Full engine rebuild for the N55, B58, S55, S58",
    "Engine light diagnosing and repairing"
  ],  
  performance: [
    "Summer and Winter wheel sets",
    "Brake system upgrades",
    "Lowering springs, airbag conversion and coilovers",
    "Control arm and bushing upgrades",
    "Exhaust system upgrades",
    "Intake system upgrades",
    "Engine and transmission mount reinforcements",
    "Intercooler upgrades",
    "Forced induction upgrades",
    "Cooling system upgrades",
    "Engine DME remapping"
  ],
  additionalInfo: [
    "5.7 Hemi",
    "6.4 Hemi",
    "6.1 Hemi",
    "6.2 Hemi",
  ]
  },
  {
    id: 6,
    headings: {
      vehiclesWeService: "Ford vehicles we service",
      services: "Ford Mustang Services and repairs",
      performanceUpgrades: "Ford Mustang Performance Program",
      additionalInfo: "Ford Mustang engines we specialize in",
    },
    names: [
      "SN95 Mustang 1994-2004",
      "S197 Mustang 2005-2014",
      "S550 Mustang 2015-2023",
      "S650 Mustang 2024-Current",
      "2021+ Bronco"
    ],
    services: [
      "Scheduled maintenance as per Ford",
      "Brake system maintenance and repair",
      "Control arm and bushing repairs and service",
      "Wheel bearing and axle shaft repair and service",
      "Transmission, Differential, Transfer case service and repairs",
      "Intake valve carbon cleaning services",
      "Timing chain service and repairs",
      "Water pump/Thermostat repairs and service",
      "Fuel system repair and service to address fuel economy and engine light issues",
      "Electrical system diagnosis and repair",
      "Oil consumption remedy solutions",
      "Oil leak repairs",
      "Exhaust system repairs",
      "Supercharger services",
      "Turbocharger rebuild, repairs and service",
      "Wastegate rattle and p0299 related issues, diagnosing and repairing",
      "Full engine rebuild for the modular and ecoboost series engines",
      "Engine light diagnosing and repairing"
    ],  
    performance: [
      "Summer and Winter wheel sets",
      "Brake system upgrades",
      "Lowering springs, airbag conversion and coilovers",
      "Control arm and bushing upgrades",
      "Exhaust system upgrades",
      "Intake system upgrades",
      "Engine and transmission mount reinforcements",
      "Intercooler upgrades",
      "Forced induction upgrades",
      "Engine build for the Modular and Ecoboost series engines",
      "Cooling system upgrades",
      "Engine PCM remapping"
    ]
    ,
  additionalInfo: [
    "4.6 2/3/4 Valve",
    "5.4 and 5.8 Trinity",
    "5.0 Coyote",
    "Ecoboost"
  ]  
  },
  {
    id: 7,
    headings: {
      vehiclesWeService: "Chevrolet/Pontiac/Cadillac we service",
      services: "Chevrolet Services and repairs",
      performanceUpgrades: "Chevrolet Performance Program",
      additionalInfo: "Chevrolet engines we specialize in"
    },
    names: [
      "Corvette 1997-Current",
      "F Body 1982 - 2002",
      "Camaro 2010 - 2024",
      "Cadillac ATSV",
      "Cadillac CT4V Blackwing",
      "Cadillac CTSV",
      "Cadillac CT5V",
      "Cadillac CT5V BLACKWING",
      "Pontiac GTO 2004 - 2006",
      "Pontiac G8 2008 - 2009"
    ],
    services: [
      "Scheduled maintenance as per Chevrolet",
      "Brake system maintenance and repair",
      "Control arm and bushing repairs and service",
      "Wheel bearing and axle shaft repair and service",
      "Transmission and Differential service and repairs",
      "Intake valve carbon cleaning services",
      "Timing chain service and repairs",
      "Water pump/Thermostat repairs and service",
      "Fuel system repair and service to address fuel economy and engine light issues",
      "Electrical system diagnosis and repair",
      "Oil consumption remedy solutions",
      "Oil leak repairs",
      "Exhaust system repairs",
      "Supercharger services",
      "Turbocharger rebuild, repairs and service",
      "Wastegate rattle and p0299 related issues, diagnosing and repairing",
      "Full engine rebuild for the LS/LT and Ecotec series engines",
      "Engine light diagnosing and repairing"
    ],  
    performance: [
      "Summer and Winter wheel sets",
      "Brake system upgrades",
      "Lowering springs, airbag conversion and coilovers",
      "Control arm and bushing upgrades",
      "Exhaust system upgrades",
      "Intake system upgrades",
      "Engine and transmission mount reinforcements",
      "Intercooler upgrades",
      "Forced induction upgrades",
      "Engine build for the LS/LT and Ecotec series engines",
      "Cooling system upgrades",
      "Engine PCM remapping"
    ],
  additionalInfo: [
    "LS1, LS2, LS6",
    "LS3, LS7, LS9",
    "LT1, LT2, LT4, LT5, LT6",
    "2.0 Ecotec",
    "3.0 Twin Turbo",
    "3.6 Twin Turbo"
  ]  
  },
  {
    id: 8,
    headings: {
      vehiclesWeService: "Mitsubishi Vehicles we service",
      services: "Mitsubishi Services we offer",
      performanceUpgrades: "Mitsubishi Performance Program",
      additionalInfo: ""
    },
    names: [
    "Evolution 4B11 and 4G63"
  ],
  services: [
    "Scheduled maintenance as per Mitsubishi",
    "Brake system maintenance and repair",
    "Brake system maintenance and repair",
    "Wheel bearing and axle shaft repair and service",
    "Manual/Automatic/SST transmission services",
    "Timing chain service and repairs",
    "Cylinder head repairs",
    "Water pump/Thermostat repairs and service",
    "Fuel system repair and service to address fuel economy and engine light issues",
    "Electrical system diagnosis and repair",
    "Oil consumption remedy solutions",
    "Oil leak repairs",
    "Exhaust system repairs",
    "Turbocharger rebuild, repairs and service",
    "Full engine rebuild for the 4G63 and 4B11 engines",
    "Engine light diagnosing and repairing"
  ],  
  performance: [
    "Summer wheel sets",
    "Brake system upgrades",
    "Lowering springs, airbag conversion and coilovers",
    "Control arm and bushing upgrades",
    "Exhaust system upgrades",
    "Intake system upgrades",
    "Turbo upgrades",
    "Engine and transmission mount reinforcements",
    "Intake manifold upgrades",
    "Intercooler upgrades",
    "Forged engine build for the 4B11 and 4G63",
    "Cooling system upgrades",
    "Engine DME remapping",
    "Engine management systems"
  ],
  additionalInfo: [
    ""
  ]
  },
  {
    id: 9,
    headings: {
      vehiclesWeService: "Nissan Vehicles we service",
      services: "Nissan Services we offer",
      performanceUpgrades: "Nissan Performance Program",
      additionalInfo: ""
    },
    names: [
    "180sx",
    "240sx",
    "Silvia"
  ],
  services: [
    "Scheduled maintenance as per Nissan",
    "Brake system maintenance and repair",
    "Control arm and bushing repairs and service",
    "Wheel bearing and axle shaft repair and service",
    "Manual/Automatic transmission services",
    "Timing chain service and repairs",
    "Cylinder head repairs",
    "Water pump/Thermostat repairs and service",
    "Fuel system repair and service to address fuel economy and engine light issues",
    "Electrical system diagnosis and repair",
    "Oil consumption remedy solutions",
    "Oil leak repairs",
    "Exhaust system repairs",
    "Turbocharger rebuild, repairs and service",
    "Full engine rebuild for the SR20DET and KA24DE",
    "Engine light diagnosing and repairing"
  ],  
  performance: [
    "Summer wheel sets",
    "Brake system upgrades",
    "Lowering springs, airbag conversion and coilovers",
    "Control arm and bushing upgrades",
    "Exhaust system upgrades",
    "Intake system upgrades",
    "Turbo upgrades",
    "Engine and transmission mount reinforcements",
    "Intake manifold upgrades",
    "Intercooler upgrades",
    "Forged engine build for the SR20DET and KA24DE",
    "Cooling system upgrades",
    "Engine DME remapping"
  ],
  additionalInfo: [
    "",
  ]
  },
  {
    id: 10,
    headings: {
      vehiclesWeService: "Toyota Vehicles we service",
      services: "Toyota Services we offer",
      performanceUpgrades: "Toyota Performance Program",
      additionalInfo: ""
    },
    names: [
    "MK5 Supra B48 & B58"
  ],
  services: [
    "Scheduled maintenance as per Toyota",
    "Brake system maintenance and repair",
    "Control arm and bushing repairs and service",
    "Wheel bearing and axle shaft repair and service",
    "Manual/ Automatic transmission services",
    "Intake valve carbon cleaning services",
    "Timing chain service and repairs",
    "Cylinder head repairs if the timing chain tensioner failed",
    "Water pump/Thermostat repairs and service",
    "Fuel system repair and service to address fuel economy and engine light issues",
    "Electrical system diagnosis and repair",
    "Oil consumption remedy solutions",
    "Oil leak repairs",
    "Exhaust system repairs",
    "Turbocharger rebuild, repairs and service",
    "Wastegate rattle and p0299 related issues, diagnosing and repairing",
    "Full engine rebuild for the B48 & B58",
    "Engine light diagnosing and repairing"
  ],  
  performance: [
    "Summer and Winter wheel sets",
    "Brake system upgrades",
    "Lowering springs, airbag conversion and coilovers",
    "Control arm and bushing upgrades",
    "Exhaust system upgrades",
    "Intake system upgrades",
    "Turbo upgrades",
    "Engine and transmission mount reinforcements",
    "Intake manifold upgrades",
    "Intercooler upgrades",
    "Forged engine build for the B48 & B58",
    "Cooling system upgrades",
    "Engine DME remapping",
    "Transmission upgrades"
  ],
  additionalInfo: [
    "",
  ]
  },
  {
    id: 11,
    headings: {
      vehiclesWeService: "Mazda Vehicles we service",
      services: "Mazda rotary Services we offer",
      performanceUpgrades: "Mazda Performance Program",
      additionalInfo: ""
    },
    names: [
    "Rotary powered vehicles",
    "Mazda Miata"
  ],
  services: [
    "Scheduled maintenance as per Mazda and experience",
    "Brake system maintenance and repair",
    "Control arm and bushing repairs and service",
    "Wheel bearing and axle shaft repair and service",
    "Manual/ Automatic transmission services",
    "Water pump/Thermostat repairs and service",
    "Fuel system repair and service to address fuel economy and engine light issues",
    "Electrical system diagnosis and repair",
    "Oil consumption remedy solutions",
    "Oil leak repairs",
    "Exhaust system repairs",
    "Turbocharger rebuild, repairs and service",
    "Full engine rebuild",
    "Engine light diagnosing and repairing"
  ],  
  performance: [
    "Summer wheel sets",
    "Brake system upgrades",
    "Lowering springs, airbag conversion and coilovers",
    "Control arm and bushing upgrades",
    "Exhaust system upgrades",
    "Intake system upgrades",
    "Turbo upgrades",
    "Engine and transmission mount reinforcements",
    "Intake manifold upgrades",
    "Intercooler upgrades",
    "Cooling system upgrades",
    "Engine DME remapping",
    "Engine management services"
  ],
  additionalInfo: [
    "",
  ]
  },
];
