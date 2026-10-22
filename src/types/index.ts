export type ServiceType = "kiloan" | "satuan" | "express";

export interface LaundryService {
  readonly id: string;
  name: string;
  price: number;
  unit: string;
  duration: string;
  isExpress: boolean;
  type: ServiceType;
}