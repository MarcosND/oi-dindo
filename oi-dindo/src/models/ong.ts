import { Address } from "./address";
import { Media } from "./media";
import { Pet } from "./pet";

export interface Ong {
    id: number,
    attributes: {
        name: string,
        description: string,
        logo: Media,
        banner: Media,
        phone: string,
        email: string,
        facebook: string,
        instagram: string,
        pets: Pet[],
        address: Address[],
        // faqs: Faq[]
    }
}