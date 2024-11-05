import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredCardList, getStoredLoveList, removeFromStoredCardList, removeFromStoredLoveList } from './CardLove';
import ProductCard from './ProductCard';
import ProductLove from './ProductLove';
import { GiSettingsKnobs } from "react-icons/gi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = () => {
    const allProduct = useLoaderData();
    const [cardLists, setCardList] = useState([]);
    const [totalCost, setTotalCost] = useState(0);
    const [loveLists, setLoveList] = useState([]);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const storedCardList = getStoredCardList();
        const addCardList = allProduct.filter(product => storedCardList.includes(product.product_id));
        setCardList(addCardList);
    }, [allProduct]);

    useEffect(() => {
        const storedLoveList = getStoredLoveList();
        const addLoveList = allProduct.filter(product => storedLoveList.includes(product.product_id));
        setLoveList(addLoveList);
    }, [allProduct]);

    useEffect(() => {
        const total = cardLists.reduce((sum, product) => sum + product.price, 0);
        setTotalCost(total);
    }, [cardLists]);

    const handleRemoveProduct = (productId) => {
        const updatedCardList = cardLists.filter(product => product.product_id !== productId);
        setCardList(updatedCardList);
        removeFromStoredCardList(productId);
        toast.success("Removed from Card List!", {
            style: {
                backgroundColor: "white",
                color: "#9538E2",
            }
        });
    };

    const handleRemoveProductLove = (productId) => {
        const updatedLoveList = loveLists.filter(product => product.product_id !== productId);
        setLoveList(updatedLoveList);
        removeFromStoredLoveList(productId);
        toast.success("Removed from Love List!", {
            style: {
                backgroundColor: "white",
                color: "#9538E2",
            }
        });
    };

    const handleSortByPrice = () => {
        const sortedList = [...cardLists].sort((a, b) => b.price - a.price);
        setCardList(sortedList);
    };

    const handlePurchase = () => {
        setShowModal(true);
    };

    const closeModalAndClear = () => {
        setCardList([]); 
        localStorage.removeItem('card-list'); 
        setShowModal(false); 
    };

    return (
        <div>
            <div className='text-center bg-purple-500 pt-2 rounded-t-2xl text-white'>
                <h3 className="text-5xl my-5">Dashboard</h3>
                <p>Explore the latest gadgets that will take your experience to the next level. From smart devices <br className=' max-sm:hidden' /> to the coolest accessories, we have it all!</p>
            </div>

            <Tabs>
                <TabList className="flex justify-center items-center space-x-4 rounded-b-2xl bg-purple-500 pb-5 pt-2">
                    <Tab selectedClassName="bg-white text-purple-500" className="px-4 py-2 rounded-3xl cursor-pointer border-white border-2 duration-200 hover:bg-purple-500 hover:text-white focus:outline-none">
                        Card List
                    </Tab>
                    <Tab selectedClassName="bg-white text-purple-500" className="px-4 py-2 rounded-3xl cursor-pointer border-white border-2 duration-200 hover:bg-purple-500 hover:text-white focus:outline-none">
                        Love List
                    </Tab>
                </TabList>

                <TabPanel>
                    <div className="flex justify-between mt-5">
                        <h1 className='text-xl font-semibold'>Card List : (<span className='text-purple-500'>{cardLists.length}</span>) </h1>
                        <div className="flex items-center gap-5">
                            <p className='text-xl font-semibold'>Total Cost: <span className='text-purple-500'>{totalCost}$</span></p>
                            <button className="btn text-purple-500 border-purple-500 text-xl hover:bg-purple-500 hover:text-white" onClick={handleSortByPrice}>Sort by Price<GiSettingsKnobs /></button>
                            <button className="btn text-xl text-purple-500 border-purple-500 hover:bg-purple-500 hover:text-white" onClick={handlePurchase}>Purchase</button>
                        </div>
                    </div>
                    <div>
                        {cardLists.length > 0 ? (
                            cardLists.map(product => (
                                <ProductCard 
                                    product={product} 
                                    key={product.product_id}
                                    onRemove={() => handleRemoveProduct(product.product_id)} 
                                />
                            ))
                        ) : (
                            <p className="text-center mt-10 mb-10 text-5xl font-semibold text-purple-500">No data found</p>
                        )}
                    </div>
                </TabPanel>
                
                <TabPanel>
                    <div className='mt-5'>
                        <h2 className='text-xl font-semibold'>Watch List : (<span className='text-purple-500'>{loveLists.length}</span>)</h2>
                    </div>
                    <div>
                        {loveLists.length > 0 ? (
                            loveLists.map(product => (
                                <ProductLove 
                                    product={product} 
                                    key={product.product_id}
                                    onRemove={() => handleRemoveProductLove(product.product_id)} 
                                />
                            ))
                        ) : (
                            <p className="text-center mt-10 mb-10 text-5xl font-semibold text-purple-500">No data found</p>
                        )}
                    </div>
                </TabPanel>
            </Tabs>

            
            <dialog id="purchase_modal" className="modal modal-bottom sm:modal-middle" open={showModal}>
                <div className="modal-box text-center p-5">
                    <div className='flex items-center justify-center'>
                    <img className='w-[5rem]' src="https://i.ibb.co.com/7R8SQ2k/right-7067868-960-720.webp" alt="" />
                    </div>

                    <h2 className="text-3xl font-bold">Payment Successfully</h2>
                    <p>Thanks for purchasing.</p>
                    <p>Total:(<span className='text-purple-500'>{totalCost}$</span>)</p>
                    <div className="modal-action justify-center">
                        <button className="btn w-full text-xl text-purple-500 border-purple-500" onClick={closeModalAndClear}>Close</button>
                    </div>
                </div>
            </dialog>

            <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} closeOnClick pauseOnHover draggable />
        </div>
    );
};

export default Dashboard;
