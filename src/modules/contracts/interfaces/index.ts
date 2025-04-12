export interface Contract {
  id?: string;
  clientId: string;
  propertyId: string;
  startDate: string;
  endDate?: string;
  monthlyRent: number;
  depositAmount?: number;
  status: string;
  createdAt?: Date;
  updatedAt?: Date;
}
