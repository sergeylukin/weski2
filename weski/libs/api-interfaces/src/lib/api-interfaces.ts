export interface BaseEntity {
  id: string | null;
}

export interface Offer extends BaseEntity {
  title: string;
  description: string;
}

export const OFFERS_API_URL = '/api/offers';
