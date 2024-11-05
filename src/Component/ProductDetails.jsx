import { useLoaderData, useParams } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { addToStoredCardList, addToStoredLoveList } from "./CardLove";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ProductDetailsBlank from "./ProductDetailsBlank";

const ProductDetails = () => {
    const { product_id } = useParams();
    const data = useLoaderData();
    
    const product = data.find(product => product.product_id === product_id);
    const { product_id: newProductId, product_title, product_image, price, description, specification, rating } = product;

    const addToCard = (id) => {
      addToStoredCardList(id);
      toast.success("Added to Card!", {
          style: {
              backgroundColor: "white", // Purple background color
              color: "#9538E2", // White text color
              
            }
      });
  }
  
  const addToLove = (id) => {
      addToStoredLoveList(id);
      toast.success("Added to Love List!", {
          style: {
              backgroundColor: "white", // Purple background color
              color: "#9538E2", // White text color
          }
      });
  }
  

    return (
        <div className="relative mb-5">
            <div className="hero bg-[#9538E2] pb-[12rem] rounded-b-2xl text-white">
                <div className="hero-content text-center">
                    <div className="h-[10rem]">
                        <h1 className="lg:text-5xl text-4xl font-bold mt-5">Product Details</h1>
                        <p className="py-6 text-sm">
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to <br className="max-sm:hidden"/> the coolest accessories, we have it all!
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center absolute lg:bottom-[-17rem] lg:left-[8rem] md:bottom-[-22rem] md:left-[3rem] max-sm:bottom-[-39rem] max-sm:left-[3rem] md:w-5/6 md:mx-4 max-sm:w-4/5">
                <div className="md:flex justify-between rounded-xl items-start mx-2 mt-6 bg-base-200 p-5">
                    <figure>
                        <img className="md:w-[40rem] w-[20rem] rounded-xl p-5" src={product_image} alt="product" />
                    </figure>
                    <div className="w-2/3">
                        <h2 className="card-title">{product_title}</h2>
                        <p>Price: {price}$</p>
                        <p className="btn bg-green-200 text-green-700 rounded-2xl mt-2">In Stock</p>
                        <p className="mt-2">{description}</p>
                        <h2 className="mt-2 text-lg font-semibold">Specification:</h2>
                        <ol style={{ listStyleType: "decimal" }} className="pl-5">
                            {specification.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ol>
                        <p className="mt-2 text-lg font-semibold">Rating</p>
                        <div className="rating">
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" defaultChecked />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <p className="pl-1">{rating}</p>
                        </div>
                        <div className=" flex justify-start items-center mt-3">
                            <button onClick={() => addToCard(product_id)} className="btn rounded-3xl text-lg text-[#9538E2] border-[#9538E2] hover:bg-[#9538E2] hover:text-white">
                                Add To Card <IoCartOutline className="text-2xl" />
                            </button>
                            <button onClick={() => addToLove(product_id)} className="ml-3 hover:bg-[#9538E2] hover:text-white rounded-3xl p-1">
                                <FaRegHeart className="text-4xl" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            
            <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} closeOnClick pauseOnHover draggable />
        <ProductDetailsBlank></ProductDetailsBlank>
        </div>
    );
};

export default ProductDetails;
