export interface Defect {
  id?: number;
  name: string;
  description: string;
  image: string[];
  itemId: number;
  createdAt?: Date;
  updateAt?: Date;
  updateBy?: any[];
}
