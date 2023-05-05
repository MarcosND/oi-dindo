import { Pet } from "./pet";

interface Faq {
  question: string;
  answer: string;
}
export interface Ong {
  id: number;
  name: string;
  description: string;
  logo: string;
  banner: string;
  phone: string;
  email: string;
  facebook: string;
  instagram: string;
  money_goal: number;
  current_goal: number;
  pets: Pet[];
  address: string;
  faq: Faq[];
}
