import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
import Swal from 'sweetalert2';

const Cart_2 = ({ cart }) => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const { _id, picture_2, name_2, price_2, rating_2 } = cart;


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
                    <figure><img src={picture_2} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Name: {name_2}</h2>
                        <p>Price: {price_2} </p>
                        <p>Rating: {rating_2} </p>

                        <div className="card-actions justify-end">
                            <button className="btn btn-warning rounded-lg" onClick={handleViewDetails}>
                                View Details
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart_2;