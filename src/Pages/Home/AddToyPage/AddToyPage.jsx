import React, { useContext, useRef } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import Swal from 'sweetalert2';


const AddToyPage = () => {

    const { user } = useContext(AuthContext);
    const formRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const photoUrl = form['picture-url'].value;
        const name = form.name.value;
        const seller_name = user?.displayName;
        const email = user?.email;
        const subcategory = form.subcategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        console.log(photoUrl, name, seller_name, email, subcategory, price, rating, quantity, description);

        const cookingToy = {
            photoUrl, name, seller_name, email, subcategory, price, rating, quantity, description
        }

        fetch('https://b7a11-toy-marketplace-server-side-three.vercel.app/myToy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(cookingToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)


               if(data.insertedId){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                })
               }
            })

        formRef.current.reset();

    };



    return (
        <div>
            <h1 className='text-center text-2xl font-bold my-10'>Add A Toy</h1>

            <form ref={formRef} onSubmit={handleSubmit} className="md:max-w-lg md:mx-auto mx-5  p-10 mb-4 bg-gray-200 rounded-lg">

                {/* photo url */}
                <div className="mb-4">
                    <label htmlFor="picture-url" className="block mb-2">Picture URL of the toy</label>
                    <input type="text" id="picture-url" name='picture-url' placeholder='Photo_Url' className="w-full border border-gray-300 rounded py-2 px-3" />
                </div>

                {/* toy name */}

                <div className="mb-4">
                    <label htmlFor="name" className="block mb-2">Toy Name</label>
                    <input type="text" id="name" name='name' placeholder='Toy Name' className="w-full border border-gray-300 rounded py-2 px-3" />
                </div>

                {/* seller name */}

                <div className="mb-4">
                    <label htmlFor="seller-name" className="block mb-2">Seller name (if available)</label>
                    <input type="text" id="seller-name" defaultValue={user?.displayName} name='seller-name' placeholder='Seller Name' className="w-full border border-gray-300 rounded py-2 px-3" />
                </div>


                {/* email */}
                <div className="mb-4">
                    <label htmlFor="seller-email" className="block mb-2">Seller email (from logged in user)</label>

                    <input type="email" id="email" defaultValue={user?.email} name='email' placeholder='email' className="w-full border border-gray-300 rounded py-2 px-3" />
                </div>

                {/* sub category */}
                <div className="mb-4">
                    <label htmlFor="subcategory" className="block mb-2">Sub-category</label>
                    <select id="subcategory" name='subcategory' className="w-full border border-gray-300 rounded py-2 px-3">
                        <option value="Food Toy">Toy Food</option>
                        <option value="Besin Toy">Toy Besin</option>
                        <option value="Stove Toy">Toy Stove</option>
                    </select>
                </div>


                {/* price */}
                <div className="mb-4">
                    <label htmlFor="price" className="block mb-2">Price</label>
                    <input type="text" id="price" name='price' placeholder='Price' className="w-full border border-gray-300 rounded py-2 px-3" />
                </div>


                {/* rating */}

                <div className="mb-4">
                    <label htmlFor="rating" className="block mb-2">Rating</label>
                    <input type="text" id="rating" name='rating' placeholder='rating' className="w-full border border-gray-300 rounded py-2 px-3" />
                </div>


                {/* quantity */}
                <div className="mb-4">
                    <label htmlFor="quantity" className="block mb-2">Available quantity</label>
                    <input type="text" id="quantity" name='quantity' placeholder='Available quantity' className="w-full border border-gray-300 rounded py-2 px-3" />
                </div>


                {/* description */}
                <div className="mb-4">
                    <label htmlFor="description" className="block mb-2">Detail description</label>
                    <textarea id="description" name='description' placeholder='Description' className="w-full border border-gray-300 rounded py-2 px-3" rows="4"></textarea>
                </div>



                <input className="btb btn-warning w-full text-white font-bold py-2 px-4 rounded" type="submit" value='SUBMIT' />
            </form>



        </div>
    );
};

export default AddToyPage;
