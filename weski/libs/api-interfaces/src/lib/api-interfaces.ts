export interface BaseEntity {
  id: string | null;
}

export interface Offer extends BaseEntity {
  title: string;
  description: string;
}
