import {Product} from "./product.model";
import "reflect-metadata";
import { plainToClass } from "class-transformer";
import { validate} from "class-validator"
const products = [
   {title: "A carpet", price: 29.99},
   {title: "A Book", price: 10.99}
]
// const p1 = new Product("A book", 12.99)

// const loadedProducts = products.map(prod => {
//     return new Product(prod.title, prod.price)
// });
const newProd = new Product("", -5.99);
validate(newProd).then(error => {
    if(error.length > 0){
        console.log("VALIDATION ERROR")
        console.log(error)
    }else{
        console.log(newProd.getInformation());
    }

})
const loadedProducts = plainToClass(Product, products);

for(const prod of loadedProducts){
    console.log(prod.getInformation());
}
