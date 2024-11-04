import { useEffect } from "react";
import { useState } from "react";
import Product from "./Product";


const Products = () => {

    const [ products, setProducts ] = useState ([])

    useEffect ( () => {
        fetch ('./Product.json')
        .then (res => res.json())
        .then(data => setProducts(data) )
    } ,[] )

    return (
        <div className="md:mt-24 lg:mt-[25rem] mt-[8rem]">
            <h1 className="text-center text-3xl font-semibold">Explore Cutting-Edge Gadgets</h1>
            <div className="flex">
                <div className="flex flex-col items-start gap-4">
                <button className="btn">All Product</button>
                <button className="btn">Laptops</button>
                <button className="btn">Accessories</button>
                <button className="btn">Smartphones</button>
                <button className="btn">Smart Watches</button>
                </div>

                <div className=" justify-center grid lg:grid-cols-3 md:grid-cols-2">
                    {
                        products.map(product => <Product product={product} key={product.product_id}></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;