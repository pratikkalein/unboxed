export type Product = {
    title: string,
    id: number,
    image: string,
    price: number,
    description: string,
    category?: string,
    rating: {
        rate: number,
        count: number
    }

}

type DataType = {
    id: number;
    title: string;
    price: number;
    quantity: number;
}


export type IProduct = {
    id: number,
}