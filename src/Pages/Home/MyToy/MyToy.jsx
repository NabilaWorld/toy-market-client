import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MyToy = () => {
    const [cookings, setCookings] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetch('https://b7a11-toy-marketplace-server-side-three.vercel.app/myToy')
            .then(res => res.json())
            .then(data => setCookings(data));
    }, []);

    
// search
const handleSearch = () => {
    console.log(searchText)
    fetch(`https://b7a11-toy-marketplace-server-side-three.vercel.app/toySearch/${searchText}`)  
      .then(res => res.json())
      .then(data => {
        setCookings(data);
      });
  };



    return (
        <div>
            <div>
                <h1 className='text-center font-bold text-2xl my-5'>My Added data</h1>
                <div className="flex md:ml-[400px]">
                    <input
                        onChange={(e) => setSearchText(e.target.value)}
                        type="text"
                        className="border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                        placeholder="Search"
                    />{" "}
                    <button
                        onClick={handleSearch}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-r-lg px-4 py-2"
                    >
                        Search
                    </button>


                   
                </div>
            </div>
            <div className="container mx-auto">
                <table className="min-w-full my-10">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-800 uppercase tracking-wider">
                                Seller
                            </th>
                            <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-800 uppercase tracking-wider">
                                Toy Name
                            </th>
                            <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-800 uppercase tracking-wider">
                                Sub Category
                            </th>
                            <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-800 uppercase tracking-wider">
                                Price
                            </th>
                            <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-800 uppercase tracking-wider">
                                Available Quantity
                            </th>
                            <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-800 uppercase tracking-wider">
                                Details
                            </th>
                        </tr>


                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {cookings.map((item) => (
                            <tr key={item.id}>

                                <td className="px-6 py-4 whitespace-no-wrap">
                                    <div className="text-sm leading-5 text-gray-900">{item.seller_name}</div>
                                </td>

                                <td className="px-6 py-4 whitespace-no-wrap">
                                    <div className="text-sm leading-5 text-gray-900">{item.name}</div>
                                </td>

                                <td className="px-6 py-4 whitespace-no-wrap">
                                    <div className="text-sm leading-5 text-gray-900">{item.subcategory}</div>
                                </td>


                                <td className="px-6 py-4 whitespace-no-wrap">
                                    <div className="text-sm leading-5 text-gray-900">{item.price}</div>
                                </td>

                                <td className="px-6 py-4 whitespace-no-wrap">
                                    <div className="text-sm leading-5 text-gray-900">{item.quantity}</div>
                                </td>

                                <td className="px-6 py-4 whitespace-no-wrap">
                                    <Link to={`/allToyDetail/${item._id}`}>
                                        <button className='btn btn-warning rounded-lg'>Details</button>
                                    </Link>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToy;
