import { Ong } from "./ong"

export interface Address {
    id: number,
    attributes: {
        street: string,
        city: string,
        state: string,
        complement: string,
        number: number,
        ongs: Ong[]
    }
}