import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const View_Food = () => {
    const viewFood = useLoaderData();
    const { _id,
        picture_1,
        name_1,
        seller_name_1,
        seller_email_1,
        price_1,
        rating_1,
        available_quantity_1,
        detail_discription_1
    } = viewFood;
    return (
        <div>
            <center>
                <div className="card md:w-[640px] bg-gray-200 shadow-xl my-10 rounded-lg">
                    <figure className="px-10 pt-10">
                        <img src={picture_1} alt="" className="rounded-xl" />
                    </figure> <br />

                    <div className="card-body items-center text-center text-2xl  ">
                        <h2 className="card-title"> <b>Toy Name: </b> {name_1}</h2>

                        <p> <b>Seller Name: </b> {seller_name_1}</p>
                        <p> <b>Seller Email: </b> {seller_email_1}</p>
                        <p> <b>Price: </b> {price_1}</p>
                        <p> <b>Ratings: </b> {rating_1}</p>
                        <p> <b>Available Quantity: </b> {available_quantity_1}</p>
                        <p> <b>Details Description: </b> {detail_discription_1}</p>

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

export default View_Food;