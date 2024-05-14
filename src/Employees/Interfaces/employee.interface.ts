import { Document } from 'mongoose';
export interface Employee extends Document {
  name: string;
  email: string;
  country: string;
}
