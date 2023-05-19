import React from 'react';

const Cart_3 = ({cart}) => {
    const { picture_3, name_3, price_3, rating_3 } = cart;
    return (
        <div>
            <div className='flex md:gap-20 mt-12'>
            

            <div className="card md:w-96 bg-base-100 rounded-lg shadow-xl">
                <figure><img src={picture_3} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {name_3}</h2>
                    <p>Price: {price_3} </p>
                    <p>Rating: {rating_3} </p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-warning rounded-lg">View Details</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Cart_3;