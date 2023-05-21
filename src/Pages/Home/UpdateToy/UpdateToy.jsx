import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';


const UpdateToy = () => {
  const updateToy = useLoaderData();
  const { _id, price, quantity, description } = updateToy;

  const handleUpdateToy = (event) => {
    event.preventDefault();

    const updatedPrice = event.target.elements.price.value;
    const updatedQuantity = event.target.elements.quantity.value;
    const updatedDescription = event.target.elements.description.value;

    const updatedToy = {
      price: updatedPrice,
      quantity: updatedQuantity,
      description: updatedDescription
    };

    fetch(`https://b7a11-toy-marketplace-server-side-three.vercel.app/myToy/${_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedToy)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);

        if (data.modifiedCount > 0) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Update Completed',
            showConfirmButton: false,
            timer: 1500
          });
        }
      });
      
  };

  return (
    <div>
      <h1 className='text-center text-2xl font-bold my-10'>Update Toy</h1>

      <form  onSubmit={handleUpdateToy} className="md:max-w-lg md:mx-auto mx-5 p-10 mb-4 bg-gray-200 rounded-lg">
        {/* price */}
        <div className="mb-4">
          <label htmlFor="price" className="block mb-2">Price</label>
          <input type="text" id="price" name='price' defaultValue={price} placeholder='Price' className="w-full border border-gray-300 rounded py-2 px-3" />
        </div>

        {/* quantity */}
        <div className="mb-4">
          <label htmlFor="quantity" className="block mb-2">Available quantity</label>
          <input type="text" id="quantity" defaultValue={quantity} name='quantity' placeholder='Available quantity' className="w-full border border-gray-300 rounded py-2 px-3" />
        </div>

        {/* description */}
        <div className="mb-4">
          <label htmlFor="description" className="block mb-2">Detail description</label>
          <textarea id="description" defaultValue={description} name='description' placeholder='Description' className="w-full border border-gray-300 rounded py-2 px-3" rows="4"></textarea>
        </div>

        <input className="btb btn-warning w-full text-white font-bold py-2 px-4 rounded" type="submit" value='Update Toy' />
      </form>
    </div>
  );
};

export default UpdateToy;
