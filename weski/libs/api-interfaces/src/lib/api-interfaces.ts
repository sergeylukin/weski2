export interface BaseEntity {
  id: string | null;
}

export interface Hotel extends BaseEntity {
  name: string;
}

export interface Resort extends BaseEntity {
  name: string;
}

export interface OFFERS_API_RESPONSE {
  data: Hotel[];
}

export const API_URL = '/api/';
