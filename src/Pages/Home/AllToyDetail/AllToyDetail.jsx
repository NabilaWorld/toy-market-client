import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AllToyDetail = () => {
    const allToy = useLoaderData();
    const { _id,
        photoUrl,
          name,
          seller_name,
          email,
          price,
          rating,
          quantity,
          description
    } = allToy;
    return (
        <div>
            <center>
                <div className="card md:w-[640px] bg-gray-200 shadow-xl my-10 rounded-lg">
                    <figure className="px-10 pt-10">
                        <img src={photoUrl} alt="" className="rounded-xl" />
                    </figure> <br />

                    <div className="card-body items-center text-center text-2xl  ">
                        <h2 className="card-title"> <b>Toy Name: </b> {name}</h2>

                        <p> <b>Seller Name: </b> {seller_name}</p>
                        <p> <b>Seller Email: </b> {email}</p>
                        <p> <b>Price: </b> {price}</p>
                        <p> <b>Ratings: </b> {rating}</p>
                        <p> <b>Available Quantity: </b> {quantity}</p>
                        <p> <b>Details Description: </b> {description}</p>

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

export default AllToyDetail;