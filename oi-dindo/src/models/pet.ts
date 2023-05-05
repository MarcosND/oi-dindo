export interface Pet {
  id: number;
  name: string;
  weight: number;
  age: number;
  description: string;
  totalValue: number;
  valueEarned: number;
  sex: "Masculino" | "Feminino";
  // skills: Skill[],
  photo: string;
  // faqs: Faq[]
}
