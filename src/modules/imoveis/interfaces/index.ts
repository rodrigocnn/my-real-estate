export interface Property {
  id?: number;
  title: string;
  negotiation_type: string; // você pode tipar melhor se quiser
  description: string;
  bedrooms: number;
  bathrooms: number;
  suites: number;
  price: number;
  latitude: number;
  longitude: number;
  neighborhood: string;
  address: string;
  state: string;
  city_id: number;
  property_type_id: number;
  owner_id: number;
  created_at?: string;
  updated_at?: string;
}
