import React from 'react';

const Cart = ({ cart }) => {
    const { picture_1, name_1, price_1, rating_1 } = cart;
    return (

        <div className='flex md:gap-20 mt-12'>
            

            <div className="card md:w-96 bg-base-100 rounded-lg shadow-xl">
                <figure><img src={picture_1} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {name_1}</h2>
                    <p>Price: {price_1} </p>
                    <p>Rating: {rating_1} </p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-warning rounded-lg">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;