import { LaundryService } from "../types";

export const services: LaundryService[] = [
  {
    id: "1",
    name: "Cuci Kering",
    price: 7000,
    unit: "kg",
    duration: "2 hari",
    isExpress: false,
    type: "kiloan",
  },
  {
    id: "2",
    name: "Cuci Setrika",
    price: 10000,
    unit: "kg",
    duration: "3 hari",
    isExpress: false,
    type: "kiloan",
  },
  {
    id: "3",
    name: "Setrika Saja",
    price: 5000,
    unit: "kg",
    duration: "1 hari",
    isExpress: false,
    type: "kiloan",
  },
  {
    id: "4",
    name: "Express 6 Jam",
    price: 15000,
    unit: "kg",
    duration: "6 jam",
    isExpress: true,
    type: "express",
  },
  {
    id: "5",
    name: "Cuci Sepatu",
    price: 25000,
    unit: "pasang",
    duration: "3 hari",
    isExpress: false,
    type: "satuan",
  },
];