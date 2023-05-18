import React from 'react';

const Cart_2 = ({ cart }) => {
    const { picture_2, name_2, price_2, rating_2 } = cart;
    return (
        <div>
            <div className='flex md:gap-20 mt-12'>
            

            <div className="card md:w-96 bg-base-100 rounded-lg shadow-xl">
                <figure><img src={picture_2} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {name_2}</h2>
                    <p>Price: {price_2} </p>
                    <p>Rating: {rating_2} </p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-warning rounded-lg">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Cart_2;