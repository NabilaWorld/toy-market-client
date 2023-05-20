import React from 'react';

const ToyRow = ({ girl }) => {
    const { seller_name, name, subcategory, price, quantity } = girl;
    return (
        <div>
            <br />
             <thead>
                    <tr>
                        <th className="md:px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Seller Name</th>
                        <th className="md:px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Toy Name</th>
                        <th className="md:px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sub Category</th>
                        <th className="md:px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                        <th className="md:px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                        <th className="md:px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="md:px-6 py-4 whitespace-nowrap">{seller_name}</td>
                        <td className="md:px-6 py-4 whitespace-nowrap">{name}</td>
                        <td className="md:px-6 py-4 whitespace-nowrap">{subcategory}</td>
                        <td className="md:px-6 py-4 whitespace-nowrap">{price}</td>
                        <td className="md:px-6 py-4 whitespace-nowrap">{quantity}</td>

                        <td className="md:px-6 py-4 whitespace-nowrap"> <button className='btn btn-warning rounded-lg'>Details</button> </td>
                    </tr>
                </tbody>
            <br />
        </div>
    );
};

export default ToyRow;