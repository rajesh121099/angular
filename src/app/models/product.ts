export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;

    constructor(id: number , name= '', description='', price = 0, imageUrl="https://pngimg.com/uploads/mario/mario_PNG53.png") {
        this.id = id
        this.name = name
        this.description = description
        this.price = price
        this.imageUrl =imageUrl      


    }
}
