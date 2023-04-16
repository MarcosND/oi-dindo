interface Getter<T> {
    (): Promise<T>,
}

interface UseGetOptions {
    isList?: boolean,
    populate?: boolean,
}

export function useGet<T>(url: string, options?: UseGetOptions) : Getter<T> {

    const get = async () : Promise<T> => {

        try {

            const response = await fetch(`${url}${options?.populate ? "?populate=*" : ""}`)
                .then(res => res.json())
                .then(res => {
                    if (options?.isList) {
                        return res.data.map((item : any) => {
                            let formatted = item.attributes
                            formatted.id = item.id
                            return formatted
                        })
                    } else {
                        let formatted = res.data.attributes
                        formatted.id = res.data.id
                        return formatted
                    }
                })

            return response as T;

        } catch (E) {
            throw E
        }
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