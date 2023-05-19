import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Cart from '../Cart/Cart';
import Cart_2 from '../Cart_2/Cart_2';
import Cart_3 from '../Cart_3/Cart_3';

const ShopCategory = () => {

    const [carts, setCarts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/toy')
            .then(res => res.json())
            .then(data => setCarts(data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div> <br /> <br />

        <h1 className='text-center font-bold text-3xl my-10'>Shop by category</h1>
            <Tabs className='md:mx-16 mt-10 md:font-bold'>

                <TabList>
                    <Tab>Food</Tab>
                    <Tab>Besin</Tab>
                    <Tab>Stove</Tab>
                </TabList>

                <TabPanel>
                    <div className='grid md:grid-cols-3 md:ml-40 md:mx-32 ml-5 gap-5  '>
                        {
                            carts.map(cart => <Cart
                                key={cart.id}
                                cart={cart}
                            ></Cart>)
                        }
                    </div>
                </TabPanel>

                <TabPanel>

                    <div className='grid md:grid-cols-3 md:ml-40 md:mx-32 ml-5 gap-5  '>
                        {
                            carts.map(cart => <Cart_2
                                key={cart.id}
                                cart={cart}
                            ></Cart_2>)
                        }
                    </div>

                </TabPanel>

                <TabPanel>

                    <div className='grid md:grid-cols-3 md:ml-40 md:mx-32 ml-5 gap-5  '>
                        {
                            carts.map(cart => <Cart_3
                                key={cart.id}
                                cart={cart}
                            ></Cart_3>)
                        }
                    </div>

                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopCategory;