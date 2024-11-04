import { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [activeCategory, setActiveCategory] = useState("All Product");

    useEffect(() => {
        fetch('./Product.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setFilteredProducts(data); // Show all products by default
            });
    }, []);

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
        if (category === "All Product") {
            setFilteredProducts(products);
        } else {
            const filtered = products.filter(product => product.category === category);
            setFilteredProducts(filtered.length > 0 ? filtered : null); // If no data, set to null
        }
    };

    return (
        <div className="md:mt-24 lg:mt-[25rem] mt-[8rem]">
            <h1 className="text-center text-3xl font-semibold">Explore Cutting-Edge Gadgets</h1>
            <div className="flex">
                <div className="flex flex-col items-start gap-4">
                    <button
                        className={`btn w-[9rem] hover:bg-purple-500 hover:text-white ${activeCategory === "All Product" ? "bg-purple-500 text-white" : ""}`}
                        onClick={() => handleCategoryClick("All Product")}
                    >
                        All Product
                    </button>
                    <button
                        className={`btn w-[9rem] hover:bg-purple-500 hover:text-white ${activeCategory === "Laptops" ? "bg-purple-500 text-white" : ""}`}
                        onClick={() => handleCategoryClick("Laptops")}
                    >
                        Laptops
                    </button>
                    <button
                        className={`btn w-[9rem] hover:bg-purple-500 hover:text-white ${activeCategory === "Accessories" ? "bg-purple-500 text-white" : ""}`}
                        onClick={() => handleCategoryClick("Accessories")}
                    >
                        Accessories
                    </button>
                    <button
                        className={`btn w-[9rem] hover:bg-purple-500 hover:text-white ${activeCategory === "Smartphones" ? "bg-purple-500 text-white" : ""}`}
                        onClick={() => handleCategoryClick("Smartphones")}
                    >
                        Smartphones
                    </button>
                    <button
                        className={`btn w-[9rem] hover:bg-purple-500 hover:text-white ${activeCategory === "Smart Watches" ? "bg-purple-500 text-white" : ""}`}
                        onClick={() => handleCategoryClick("Smart Watches")}
                    >
                        Smart Watches
                    </button>
                </div>

                <div className="justify-center grid lg:grid-cols-3 md:grid-cols-2">
                    {filteredProducts ? (
                        filteredProducts.map(product => (
                            <Product product={product} key={product.product_id} />
                        ))
                    ) : (
                        <p className=" pl-[25rem] mt-32 text-center col-span-full text-6xl font-semibold text-purple-500">
                            No data found
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Products;

