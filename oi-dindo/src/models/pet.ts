import { Media } from "./media";
import { Ong } from "./ong";

export interface Pet {
    id: number,
    name: string,
    weight: number,
    age: number,
    description: string,
    totalValue: number,
    valueEarned: number,
    // skills: Skill[],
    ong: Ong,
    photo: Media,
    // faqs: Faq[]
}