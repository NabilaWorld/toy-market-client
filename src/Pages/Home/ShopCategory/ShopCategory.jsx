import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopCategory = () => {
    return (
        <div>
            <br /> <br />

            <h1 className='text-center font-bold text-3xl'>Shop by category</h1>

            <Tabs className='mx-10 my-10 font-bold'>
                <TabList>
                    <Tab>Food Toy</Tab>
                    <Tab>KitchenWare Toy</Tab>
                    <Tab>Wash Basin Toy</Tab>
                </TabList>

                <br /> <br />
                <TabPanel>

                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Name: </h2>
                            <p>Price:</p>
                            <p>Rating:</p>

                            <div className="card-actions justify-end">
                                <button className="btn btn-warning rounded-lg">View Details</button>
                            </div>
                        </div>
                    </div>

                </TabPanel>

                <TabPanel>

                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>

                </TabPanel>

                <TabPanel>

                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>

                </TabPanel>
            </Tabs>


        </div>
    );
};

export default ShopCategory;