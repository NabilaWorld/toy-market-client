import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const View_Stove = () => {
    const viewStove = useLoaderData();
    const { _id,
        picture_3,
        name_3,
        seller_name_3,
        seller_email_3,
        price_3,
        rating_3,
        available_quantity_3,
        detail_discription_3
    } = viewStove;
    return (
        <div>
            <center>
                <div className="card md:w-[640px] bg-gray-200 shadow-xl my-10 rounded-lg">
                    <figure className="px-10 pt-10">
                        <img src={picture_3} alt="" className="rounded-xl" />
                    </figure> <br />

                    <div className="card-body items-center text-center text-2xl  ">
                        <h2 className="card-title"> <b>Name:</b> {name_3}</h2>

                        <p> <b>Seller Name: </b> {seller_name_3}</p>
                        <p> <b>Seller Email: </b> {seller_email_3}</p>
                        <p> <b>Price: </b> {price_3}</p>
                        <p> <b>Ratings: </b> {rating_3}</p>
                        <p> <b>Available Quantity: </b> {available_quantity_3}</p>
                        <p> <b>Details Description: </b> {detail_discription_3}</p>

                        <div className="card-actions">
                            <Link to='/'>
                              <button className="btn btn-warning rounded-lg">Back To Home</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </center>
        </div>
    );
};

export default View_Stove;