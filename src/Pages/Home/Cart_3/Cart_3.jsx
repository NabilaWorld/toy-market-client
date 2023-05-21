import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../provider/AuthProvider';

const Cart_3 = ({cart}) => {
    const { _id,picture_3, name_3, price_3, rating_3 } = cart;
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleViewDetails = () => {

        if (!user) {
            Swal.fire({
                title: 'Login error',
                text: "You have to login first",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login'
            }).then((result) => {
                if (result.isConfirmed) {

                    navigate('/login');
                }
            })
        } else {
            navigate(`/besin_details/${_id}`);
        }
    };
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
                        {/* <Link to={`/stove_details/${_id}`}> */}
                        <Link >
                          <button onClick={handleViewDetails} className="btn btn-warning rounded-lg">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Cart_3;