db.cars.insertMany([
  {
    name: "Creta",
    brand: "Hyundai",
    company: "Hyundai Motor India",
    modelYear: 2025,
    price: 1850000,
    color: "White",
    fuelType: "Petrol",
    transmission: "Automatic",
    mileage: 18.4,
    engine: {
      type: "Turbo Petrol",
      displacement: 1482,
      cylinders: 4
    },
    seatingCapacity: 5,
    features: [
      "Sunroof",
      "Wireless Charging",
      "Ventilated Seats",
      "Cruise Control"
    ],
    safetyFeatures: [
      "ABS",
      "Airbags",
      "ESC",
      "Hill Assist"
    ],
    availableColors: ["White", "Black", "Silver", "Blue"],
    rating: 4.5
  },

  {
    name: "Nexon",
    brand: "Tata",
    company: "Tata Motors",
    modelYear: 2025,
    price: 1450000,
    color: "Blue",
    fuelType: "Diesel",
    transmission: "Manual",
    mileage: 23.2,
    engine: {
      type: "Diesel",
      displacement: 1497,
      cylinders: 4
    },
    seatingCapacity: 5,
    features: [
      "Touchscreen",
      "Android Auto",
      "Apple CarPlay",
      "Cruise Control"
    ],
    safetyFeatures: [
      "ABS",
      "Airbags",
      "ESC",
      "ISOFIX"
    ],
    availableColors: ["Blue", "Red", "White", "Black"],
    rating: 4.4
  },

  {
    name: "Swift",
    brand: "Maruti Suzuki",
    company: "Maruti Suzuki India",
    modelYear: 2024,
    price: 850000,
    color: "Red",
    fuelType: "Petrol",
    transmission: "Manual",
    mileage: 22.4,
    engine: {
      type: "Petrol",
      displacement: 1197,
      cylinders: 3
    },
    seatingCapacity: 5,
    features: [
      "Touchscreen",
      "Rear Camera",
      "Cruise Control"
    ],
    safetyFeatures: [
      "ABS",
      "Airbags",
      "ESP"
    ],
    availableColors: ["Red", "White", "Blue", "Silver"],
    rating: 4.2
  },

  {
    name: "Fortuner",
    brand: "Toyota",
    company: "Toyota Kirloskar Motor",
    modelYear: 2025,
    price: 4200000,
    color: "Black",
    fuelType: "Diesel",
    transmission: "Automatic",
    mileage: 14.4,
    engine: {
      type: "Diesel",
      displacement: 2755,
      cylinders: 4
    },
    seatingCapacity: 7,
    features: [
      "4WD",
      "Sunroof",
      "Leather Seats",
      "Cruise Control",
      "Power Tailgate"
    ],
    safetyFeatures: [
      "ABS",
      "Airbags",
      "Hill Assist",
      "Traction Control"
    ],
    availableColors: ["Black", "White", "Silver"],
    rating: 4.7
  },

  {
    name: "City",
    brand: "Honda",
    company: "Honda Cars India",
    modelYear: 2024,
    price: 1650000,
    color: "Silver",
    fuelType: "Petrol",
    transmission: "CVT",
    mileage: 18.6,
    engine: {
      type: "Petrol",
      displacement: 1498,
      cylinders: 4
    },
    seatingCapacity: 5,
    features: [
      "Sunroof",
      "Lane Watch",
      "Cruise Control",
      "Wireless Charging"
    ],
    safetyFeatures: [
      "ABS",
      "Airbags",
      "VSA",
      "Hill Start Assist"
    ],
    availableColors: ["Silver", "White", "Red", "Black"],
    rating: 4.3
  },

  {
    name: "Seltos",
    brand: "Kia",
    company: "Kia India",
    modelYear: 2025,
    price: 1950000,
    color: "Green",
    fuelType: "Diesel",
    transmission: "Automatic",
    mileage: 20.7,
    engine: {
      type: "Diesel",
      displacement: 1493,
      cylinders: 4
    },
    seatingCapacity: 5,
    features: [
      "Panoramic Sunroof",
      "360 Camera",
      "Ventilated Seats",
      "ADAS"
    ],
    safetyFeatures: [
      "ABS",
      "Airbags",
      "ESC",
      "ADAS"
    ],
    availableColors: ["Green", "White", "Black", "Silver"],
    rating: 4.6
  },

  {
    name: "XUV700",
    brand: "Mahindra",
    company: "Mahindra & Mahindra",
    modelYear: 2025,
    price: 2600000,
    color: "Red",
    fuelType: "Diesel",
    transmission: "Automatic",
    mileage: 16.5,
    engine: {
      type: "Turbo Diesel",
      displacement: 2198,
      cylinders: 4
    },
    seatingCapacity: 7,
    features: [
      "Panoramic Sunroof",
      "ADAS",
      "Smart Door Handles",
      "Dual Screen",
      "Voice Assistant"
    ],
    safetyFeatures: [
      "ABS",
      "Airbags",
      "ESC",
      "ADAS",
      "Hill Hold"
    ],
    availableColors: ["Red", "Black", "White", "Blue"],
    rating: 4.8
  },

  {
    name: "Venue",
    brand: "Hyundai",
    company: "Hyundai Motor India",
    modelYear: 2024,
    price: 1250000,
    color: "Black",
    fuelType: "Petrol",
    transmission: "Automatic",
    mileage: 18.2,
    engine: {
      type: "Turbo Petrol",
      displacement: 998,
      cylinders: 3
    },
    seatingCapacity: 5,
    features: [
      "Sunroof",
      "Connected Car",
      "Wireless Charging"
    ],
    safetyFeatures: [
      "ABS",
      "Airbags",
      "ESC"
    ],
    availableColors: ["Black", "White", "Red"],
    rating: 4.2
  },

  {
    name: "Harrier",
    brand: "Tata",
    company: "Tata Motors",
    modelYear: 2025,
    price: 2450000,
    color: "Grey",
    fuelType: "Diesel",
    transmission: "Automatic",
    mileage: 16.8,
    engine: {
      type: "Diesel",
      displacement: 1956,
      cylinders: 4
    },
    seatingCapacity: 5,
    features: [
      "Panoramic Sunroof",
      "360 Camera",
      "Ventilated Seats",
      "JBL Sound System"
    ],
    safetyFeatures: [
      "ABS",
      "Airbags",
      "ESC",
      "ADAS"
    ],
    availableColors: ["Grey", "Black", "White"],
    rating: 4.5
  },

  {
    name: "Innova Hycross",
    brand: "Toyota",
    company: "Toyota Kirloskar Motor",
    modelYear: 2025,
    price: 3200000,
    color: "White",
    fuelType: "Hybrid",
    transmission: "Automatic",
    mileage: 23.2,
    engine: {
      type: "Hybrid Petrol",
      displacement: 1987,
      cylinders: 4
    },
    seatingCapacity: 7,
    features: [
      "Panoramic Sunroof",
      "Captain Seats",
      "ADAS",
      "Powered Tailgate"
    ],
    safetyFeatures: [
      "ABS",
      "Airbags",
      "ESC",
      "Traction Control"
    ],
    availableColors: ["White", "Black", "Silver"],
    rating: 4.7
  },

  {
    name: "Thar",
    brand: "Mahindra",
    company: "Mahindra & Mahindra",
    modelYear: 2024,
    price: 1800000,
    color: "Orange",
    fuelType: "Petrol",
    transmission: "Manual",
    mileage: 15.2,
    engine: {
      type: "Turbo Petrol",
      displacement: 1997,
      cylinders: 4
    },
    seatingCapacity: 4,
    features: [
      "4WD",
      "Removable Roof",
      "Off-Road Mode"
    ],
    safetyFeatures: [
      "ABS",
      "Airbags",
      "ESP",
      "Hill Hold"
    ],
    availableColors: ["Orange", "Red", "Black", "White"],
    rating: 4.6
  },

  {
    name: "Baleno",
    brand: "Maruti Suzuki",
    company: "Maruti Suzuki India",
    modelYear: 2024,
    price: 950000,
    color: "Blue",
    fuelType: "Petrol",
    transmission: "AMT",
    mileage: 22.3,
    engine: {
      type: "Petrol",
      displacement: 1197,
      cylinders: 4
    },
    seatingCapacity: 5,
    features: [
      "Head-Up Display",
      "360 Camera",
      "Touchscreen"
    ],
    safetyFeatures: [
      "ABS",
      "Airbags",
      "ESP"
    ],
    availableColors: ["Blue", "Red", "White", "Silver"],
    rating: 4.1
  },

  {
    name: "Verna",
    brand: "Hyundai",
    company: "Hyundai Motor India",
    modelYear: 2025,
    price: 1700000,
    color: "White",
    fuelType: "Petrol",
    transmission: "DCT",
    mileage: 20.6,
    engine: {
      type: "Turbo Petrol",
      displacement: 1482,
      cylinders: 4
    },
    seatingCapacity: 5,
    features: [
      "ADAS",
      "Ventilated Seats",
      "Sunroof",
      "Wireless Charging"
    ],
    safetyFeatures: [
      "ABS",
      "Airbags",
      "ESC",
      "ADAS"
    ],
    availableColors: ["White", "Black", "Red"],
    rating: 4.5
  },

  {
    name: "Sonet",
    brand: "Kia",
    company: "Kia India",
    modelYear: 2024,
    price: 1400000,
    color: "Silver",
    fuelType: "Petrol",
    transmission: "DCT",
    mileage: 19.2,
    engine: {
      type: "Turbo Petrol",
      displacement: 998,
      cylinders: 3
    },
    seatingCapacity: 5,
    features: [
      "Sunroof",
      "Ventilated Seats",
      "Connected Car",
      "Wireless Charging"
    ],
    safetyFeatures: [
      "ABS",
      "Airbags",
      "ESC"
    ],
    availableColors: ["Silver", "Black", "White", "Red"],
    rating: 4.3
  },

  {
    name: "Safari",
    brand: "Tata",
    company: "Tata Motors",
    modelYear: 2025,
    price: 2800000,
    color: "Blue",
    fuelType: "Diesel",
    transmission: "Automatic",
    mileage: 16.3,
    engine: {
      type: "Diesel",
      displacement: 1956,
      cylinders: 4
    },
    seatingCapacity: 7,
    features: [
      "Panoramic Sunroof",
      "Captain Seats",
      "360 Camera",
      "JBL Audio"
    ],
    safetyFeatures: [
      "ABS",
      "Airbags",
      "ADAS",
      "ESC"
    ],
    availableColors: ["Blue", "White", "Black"],
    rating: 4.6
  },

  {
    name: "Slavia",
    brand: "Skoda",
    company: "Skoda Auto India",
    modelYear: 2024,
    price: 1800000,
    color: "Red",
    fuelType: "Petrol",
    transmission: "Automatic",
    mileage: 19.4,
    engine: {
      type: "Turbo Petrol",
      displacement: 1498,
      cylinders: 4
    },
    seatingCapacity: 5,
    features: [
      "Sunroof",
      "Ventilated Seats",
      "Wireless Charging"
    ],
    safetyFeatures: [
      "ABS",
      "Airbags",
      "ESC",
      "Hill Hold"
    ],
    availableColors: ["Red", "White", "Blue", "Black"],
    rating: 4.4
  },

  {
    name: "Virtus",
    brand: "Volkswagen",
    company: "Volkswagen India",
    modelYear: 2025,
    price: 1850000,
    color: "Blue",
    fuelType: "Petrol",
    transmission: "DCT",
    mileage: 18.9,
    engine: {
      type: "Turbo Petrol",
      displacement: 1498,
      cylinders: 4
    },
    seatingCapacity: 5,
    features: [
      "Digital Cockpit",
      "Sunroof",
      "Cruise Control"
    ],
    safetyFeatures: [
      "ABS",
      "Airbags",
      "ESC",
      "Hill Hold"
    ],
    availableColors: ["Blue", "White", "Red", "Black"],
    rating: 4.4
  },

  {
    name: "Taigun",
    brand: "Volkswagen",
    company: "Volkswagen India",
    modelYear: 2024,
    price: 1750000,
    color: "Grey",
    fuelType: "Petrol",
    transmission: "Automatic",
    mileage: 19.2,
    engine: {
      type: "Turbo Petrol",
      displacement: 1498,
      cylinders: 4
    },
    seatingCapacity: 5,
    features: [
      "Sunroof",
      "Digital Cockpit",
      "Wireless Charging"
    ],
    safetyFeatures: [
      "ABS",
      "Airbags",
      "ESC"
    ],
    availableColors: ["Grey", "White", "Blue"],
    rating: 4.3
  },

  {
    name: "Kushaq",
    brand: "Skoda",
    company: "Skoda Auto India",
    modelYear: 2025,
    price: 1900000,
    color: "Green",
    fuelType: "Petrol",
    transmission: "Automatic",
    mileage: 18.6,
    engine: {
      type: "Turbo Petrol",
      displacement: 1498,
      cylinders: 4
    },
    seatingCapacity: 5,
    features: [
      "Sunroof",
      "Ventilated Seats",
      "Ambient Lighting"
    ],
    safetyFeatures: [
      "ABS",
      "Airbags",
      "ESC",
      "Hill Hold"
    ],
    availableColors: ["Green", "White", "Black"],
    rating: 4.4
  },

  {
    name: "Compass",
    brand: "Jeep",
    company: "Jeep India",
    modelYear: 2024,
    price: 3000000,
    color: "Black",
    fuelType: "Diesel",
    transmission: "Automatic",
    mileage: 17.1,
    engine: {
      type: "Diesel",
      displacement: 1956,
      cylinders: 4
    },
    seatingCapacity: 5,
    features: [
      "4WD",
      "Panoramic Sunroof",
      "Connected Car"
    ],
    safetyFeatures: [
      "ABS",
      "Airbags",
      "ESC",
      "Hill Descent Control"
    ],
    availableColors: ["Black", "White", "Red"],
    rating: 4.5
  },

  {
    name: "Ciaz",
    brand: "Maruti Suzuki",
    company: "Maruti Suzuki India",
    modelYear: 2023,
    price: 1150000,
    color: "Brown",
    fuelType: "Petrol",
    transmission: "Automatic",
    mileage: 20.0,
    engine: {
      type: "Petrol",
      displacement: 1462,
      cylinders: 4
    },
    seatingCapacity: 5,
    features: [
      "Leather Seats",
      "Cruise Control",
      "Rear Camera"
    ],
    safetyFeatures: [
      "ABS",
      "Airbags",
      "ESP"
    ],
    availableColors: ["Brown", "White", "Silver"],
    rating: 4.0
  },

  {
    name: "Ertiga",
    brand: "Maruti Suzuki",
    company: "Maruti Suzuki India",
    modelYear: 2024,
    price: 1250000,
    color: "White",
    fuelType: "CNG",
    transmission: "Manual",
    mileage: 26.1,
    engine: {
      type: "CNG",
      displacement: 1462,
      cylinders: 4
    },
    seatingCapacity: 7,
    features: [
      "Touchscreen",
      "Rear AC",
      "Cruise Control"
    ],
    safetyFeatures: [
      "ABS",
      "Airbags",
      "ESP"
    ],
    availableColors: ["White", "Grey", "Black"],
    rating: 4.2
  },

  {
    name: "Kiger",
    brand: "Renault",
    company: "Renault India",
    modelYear: 2024,
    price: 1100000,
    color: "Orange",
    fuelType: "Petrol",
    transmission: "CVT",
    mileage: 19.8,
    engine: {
      type: "Turbo Petrol",
      displacement: 999,
      cylinders: 3
    },
    seatingCapacity: 5,
    features: [
      "Wireless Charging",
      "Touchscreen",
      "Cruise Control"
    ],
    safetyFeatures: [
      "ABS",
      "Airbags",
      "ESC"
    ],
    availableColors: ["Orange", "White", "Blue"],
    rating: 4.0
  },

  {
    name: "Magnite",
    brand: "Nissan",
    company: "Nissan India",
    modelYear: 2024,
    price: 1050000,
    color: "Red",
    fuelType: "Petrol",
    transmission: "CVT",
    mileage: 19.7,
    engine: {
      type: "Turbo Petrol",
      displacement: 999,
      cylinders: 3
    },
    seatingCapacity: 5,
    features: [
      "360 Camera",
      "Wireless Charging",
      "Touchscreen"
    ],
    safetyFeatures: [
      "ABS",
      "Airbags",
      "ESC"
    ],
    availableColors: ["Red", "Black", "White"],
    rating: 4.1
  },

  {
    name: "Astor",
    brand: "MG",
    company: "MG Motor India",
    modelYear: 2024,
    price: 1750000,
    color: "White",
    fuelType: "Petrol",
    transmission: "Automatic",
    mileage: 15.4,
    engine: {
      type: "Petrol",
      displacement: 1498,
      cylinders: 4
    },
    seatingCapacity: 5,
    features: [
      "AI Assistant",
      "ADAS",
      "Panoramic Sunroof",
      "Connected Car"
    ],
    safetyFeatures: [
      "ABS",
      "Airbags",
      "ADAS",
      "ESC"
    ],
    availableColors: ["White", "Red", "Black"],
    rating: 4.3
  },

  {
    name: "Hector",
    brand: "MG",
    company: "MG Motor India",
    modelYear: 2025,
    price: 2300000,
    color: "Black",
    fuelType: "Petrol",
    transmission: "CVT",
    mileage: 13.8,
    engine: {
      type: "Turbo Petrol",
      displacement: 1451,
      cylinders: 4
    },
    seatingCapacity: 5,
    features: [
      "Panoramic Sunroof",
      "Voice Assistant",
      "Connected Car",
      "360 Camera"
    ],
    safetyFeatures: [
      "ABS",
      "Airbags",
      "ESC",
      "ADAS"
    ],
    availableColors: ["Black", "White", "Red"],
    rating: 4.4
  },

  {
    name: "Grand Vitara",
    brand: "Maruti Suzuki",
    company: "Maruti Suzuki India",
    modelYear: 2025,
    price: 1950000,
    color: "Silver",
    fuelType: "Hybrid",
    transmission: "Automatic",
    mileage: 27.9,
    engine: {
      type: "Strong Hybrid",
      displacement: 1490,
      cylinders: 3
    },
    seatingCapacity: 5,
    features: [
      "Panoramic Sunroof",
      "360 Camera",
      "Wireless Charging"
    ],
    safetyFeatures: [
      "ABS",
      "Airbags",
      "ESC",
      "Hill Hold"
    ],
    availableColors: ["Silver", "White", "Black", "Blue"],
    rating: 4.5
  },

  {
    name: "Gloster",
    brand: "MG",
    company: "MG Motor India",
    modelYear: 2024,
    price: 3900000,
    color: "Grey",
    fuelType: "Diesel",
    transmission: "Automatic",
    mileage: 12.4,
    engine: {
      type: "Twin Turbo Diesel",
      displacement: 1996,
      cylinders: 4
    },
    seatingCapacity: 7,
    features: [
      "4WD",
      "ADAS",
      "Panoramic Sunroof",
      "Massage Seats",
      "360 Camera"
    ],
    safetyFeatures: [
      "ABS",
      "Airbags",
      "ADAS",
      "ESC",
      "Traction Control"
    ],
    availableColors: ["Grey", "White", "Black"],
    rating: 4.6
  },

  {
    name: "Civic",
    brand: "Honda",
    company: "Honda Cars India",
    modelYear: 2023,
    price: 2200000,
    color: "Blue",
    fuelType: "Petrol",
    transmission: "CVT",
    mileage: 17.8,
    engine: {
      type: "Petrol",
      displacement: 1498,
      cylinders: 4
    },
    seatingCapacity: 5,
    features: [
      "Sunroof",
      "Leather Seats",
      "Cruise Control",
      "Wireless Charging"
    ],
    safetyFeatures: [
      "ABS",
      "Airbags",
      "VSA",
      "Hill Start Assist"
    ],
    availableColors: ["Blue", "White", "Red", "Black"],
    rating: 4.4
  },

  {
    name: "Q3",
    brand: "Audi",
    company: "Audi India",
    modelYear: 2025,
    price: 4800000,
    color: "White",
    fuelType: "Petrol",
    transmission: "Automatic",
    mileage: 14.2,
    engine: {
      type: "Turbo Petrol",
      displacement: 1984,
      cylinders: 4
    },
    seatingCapacity: 5,
    features: [
      "Virtual Cockpit",
      "Panoramic Sunroof",
      "Ambient Lighting",
      "Wireless Charging"
    ],
    safetyFeatures: [
      "ABS",
      "Airbags",
      "ESC",
      "Traction Control"
    ],
    availableColors: ["White", "Black", "Blue"],
    rating: 4.7
  },

  {
    name: "3 Series",
    brand: "BMW",
    company: "BMW India",
    modelYear: 2025,
    price: 6500000,
    color: "Black",
    fuelType: "Petrol",
    transmission: "Automatic",
    mileage: 16.1,
    engine: {
      type: "Turbo Petrol",
      displacement: 1998,
      cylinders: 4
    },
    seatingCapacity: 5,
    features: [
      "Sunroof",
      "Digital Cockpit",
      "Gesture Control",
      "Wireless Charging"
    ],
    safetyFeatures: [
      "ABS",
      "Airbags",
      "Dynamic Stability Control"
    ],
    availableColors: ["Black", "White", "Blue", "Grey"],
    rating: 4.8
  },

  {
    name: "C-Class",
    brand: "Mercedes-Benz",
    company: "Mercedes-Benz India",
    modelYear: 2025,
    price: 7000000,
    color: "Silver",
    fuelType: "Petrol",
    transmission: "Automatic",
    mileage: 15.7,
    engine: {
      type: "Turbo Petrol",
      displacement: 1496,
      cylinders: 4
    },
    seatingCapacity: 5,
    features: [
      "Ambient Lighting",
      "Panoramic Sunroof",
      "Digital Cockpit",
      "Voice Assistant",
      "Wireless Charging"
    ],
    safetyFeatures: [
      "ABS",
      "Airbags",
      "ESC",
      "Attention Assist"
    ],
    availableColors: ["Silver", "Black", "White", "Blue"],
    rating: 4.9
  }
])