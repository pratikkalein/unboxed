export type Product = {
    title: string,
    id: number,
    image: string,
    price: number,
    description: string,
    rating: {
        rate: number,
        count: number
    }

}