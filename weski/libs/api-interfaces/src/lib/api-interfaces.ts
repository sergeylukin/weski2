export interface BaseEntity {
  id: string | null;
}

export interface Offer extends BaseEntity {
  title: string;
  description: string;
}

export interface Resort extends BaseEntity {
  name: string;
}

export const API_URL = '/api/';
