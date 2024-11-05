import { IoCartOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { addToStoredCardList } from "./CardLove";
const ProductLove = ({ product, onRemove }) => {
    const {product_id, product_title, product_image, price, description } = product;
    
    const addToCard = (id) => {
        addToStoredCardList(id);
      }
    return (
        <div className="flex justify-between rounded-xl items-start mx-10 mt-6 bg-base-200">
            <figure>
                <img className="w-[20rem] p-5" src={product_image} alt="Product" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{product_title}</h2>
                <p>{description}</p>
                <p className="text-xl font-semibold">Price: ${price}</p>
                < button onClick={()=> addToCard(product_id)} className="btn rounded-3xl text-lg text-[#9538E2] border-[#9538E2] hover:bg-[#9538E2] hover:text-white">
        Add To Card <IoCartOutline className="text-2xl"/>
        </button>
            </div>
            <div >
            <button className=" mt-2 mr-2 text-3xl  text-purple-500 " onClick={onRemove}><MdDelete /></button>
            </div>

        </div>
    );
};

export default ProductLove;