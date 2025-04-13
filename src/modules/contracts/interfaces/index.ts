export interface Contract {
  id?: string;
  clientId: string;
  propertyId: string;
  startDate: string;
  endDate?: string;
  monthlyRent: number | undefined;
  depositAmount?: number | undefined;
  status: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface DateFormContract {
  startDate: Date | null;
  endDate: Date | null;
}
