import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const View_Besin = () => {
    const viewBesin = useLoaderData();
    const { _id,
        picture_2,
        name_2,
        seller_name_2,
        seller_email_2,
        price_2,
        rating_2,
        available_quantity_2,
        detail_discription_2
    } = viewBesin;
    return (
        <div>
            <center>
                <div className="card md:w-[640px] bg-gray-200 shadow-xl my-10 rounded-lg">
                    <figure className="px-10 pt-10">
                        <img src={picture_2} alt="" className="rounded-xl" />
                    </figure> <br />

                    <div className="card-body items-center text-center text-2xl  ">
                        <h2 className="card-title"> <b>Toy Name: </b> {name_2}</h2>

                        <p> <b>Seller Name: </b> {seller_name_2}</p>
                        <p> <b>Seller Email: </b> {seller_email_2}</p>
                        <p> <b>Price: </b> {price_2}</p>
                        <p> <b>Ratings: </b> {rating_2}</p>
                        <p> <b>Available Quantity: </b> {available_quantity_2}</p>
                        <p> <b>Details Description: </b> {detail_discription_2}</p>

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

export default View_Besin;