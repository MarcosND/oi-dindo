import { useState } from "react";

interface Getter<T> {
    (): Promise<T>,
}

interface GetterOptions {}

export function useGet<T>(url: string, options?: GetterOptions) : Getter<T> {

    // const [data, setData] = useState<Getter<T>>();

    const get = async () : Promise<T> => {
        const response = await fetch(url);
        return response.body as T;
    }

    return get;
}

// export function usePost<P, T>(url: string, options?: GetterOptions) : Getter<T> {

//     // const [data, setData] = useState<Getter<T>>();

//     const get = async (data: P) : Promise<T> => {
//         const response = await fetch(
//             'https://example.com/api/data', 
//             {
//                 method: 'POST',
//                 body: JSON.stringify(data),
//                 headers: {
//                   'Content-Type': 'application/json'
//                 }
//             }
//         );
//         return response.body as T;
//     }

//     return get;
// }