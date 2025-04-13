export interface Property {
  id?: string;
  title: string;
  negotiationType: string;
  description: string;
  bedrooms: number;
  bathrooms: number;
  suites: number;
  price: number;
  address: string;
  latitude: number | null;
  longitude: number | null;
  neighborhood: string;
  cityId: string;
  state: string;
  createdAt?: string;
  updatedAt?: string;
}
