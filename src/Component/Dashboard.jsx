import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredCardList, getStoredLoveList } from './CardLove';
import ProductCard from './ProductCard';

const Dashboard = () => {
    const allProduct = useLoaderData();
    const [cardLists, setCardList] = useState([]);
    const [totalCost, setTotalCost] = useState(0);

    // Load Card List
    useEffect(() => {
        const storedCardList = getStoredCardList();
        const addCardList = allProduct.filter(product => storedCardList.includes(product.product_id));
        setCardList(addCardList);
    }, []);

    // Load Love List
    const [loveLists, setLoveList] = useState([]);
    useEffect(() => {
        const storedLoveList = getStoredLoveList();
        const addLoveList = allProduct.filter(product => storedLoveList.includes(product.product_id));
        setLoveList(addLoveList);
    }, []);

    // Calculate Total Cost
    useEffect(() => {
        const total = cardLists.reduce((sum, product) => sum + product.price, 0);
        setTotalCost(total);
    }, [cardLists]);

    // Remove Product from Card List
    const handleRemoveProduct = (productId) => {
        const updatedCardList = cardLists.filter(product => product.product_id !== productId);
        setCardList(updatedCardList);
    };

    // Sort Card List by Price
    const handleSortByPrice = () => {
        const sortedList = [...cardLists].sort((a, b) => b.price - a.price);
        setCardList(sortedList);
    };

    // Handle Purchase and show modal
    const handlePurchase = () => {
        setShowModal(true);
    };

    // Modal visibility control
    const [showModal, setShowModal] = useState(false);

    // Clear card list and close modal
    const closeModalAndClear = () => {
        setCardList([]);
        setShowModal(false);
    };

    return (
        <div>
            <div className='text-center bg-purple-500 pt-2 text-white'>
                <h3 className="text-3xl my-5">Dashboard</h3>
                <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>

            <Tabs>
                <TabList className="flex justify-center items-center space-x-4 bg-purple-500 pb-5 pt-2">
                    <Tab selectedClassName="bg-white text-purple-500" className="px-4 py-2 rounded-3xl cursor-pointer border-white border-2 duration-200 hover:bg-purple-500 hover:text-white focus:outline-none">
                        Title 1
                    </Tab>
                    <Tab selectedClassName="bg-white text-purple-500" className="px-4 py-2 rounded-3xl cursor-pointer border-white border-2 duration-200 hover:bg-purple-500 hover:text-white focus:outline-none">
                        Title 2
                    </Tab>
                </TabList>

                <TabPanel>
                    <div className="flex justify-between mt-5">
                        <h1>Card List</h1>
                        <div className="flex items-center gap-5">
                            <p>Total Cost: ${totalCost}</p>
                            <button className="btn" onClick={handleSortByPrice}>Sort by Price</button>
                            <button className="btn" onClick={handlePurchase}>Purchase</button>
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
                            <p>No products found in your card list.</p>
                        )}
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2 : ({loveLists.length})</h2>
                </TabPanel>
            </Tabs>

            {/* Modal for Purchase Confirmation */}
            <dialog id="purchase_modal" className="modal modal-bottom sm:modal-middle" open={showModal}>
                <div className="modal-box text-center p-5">
                    <h2 className="text-xl font-bold">Purchase Successful</h2>
                    <p>Your purchase has been completed successfully!</p>
                    <div className="modal-action">
                        <button className="btn" onClick={closeModalAndClear}>Close</button>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Dashboard;
