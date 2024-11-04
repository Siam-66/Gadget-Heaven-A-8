import { Link } from "react-router-dom";

const Product = ({product}) => {
    
    const { product_id, product_title, product_image, price } = product;

    return (
<div className="card card-compact lg:mx-32 md:
mx-10 mt-6 bg-base-200 lg:w-96 md:w-72">
  <figure>
    <img className="w-[20rem]  p-5"
      src= {product_image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{product_title}</h2>
    <p>Price: {price}$</p>
    <div className="card-actions justify-start">
        <Link to={`/product/${product_id}`} className="btn rounded-3xl text-lg text-[#9538E2] border-[#9538E2]">
        View Details
        </Link>

    </div>
  </div>
</div>
    );
};

export default Product;