import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import ToyRow from './ToyRow';

const ToyAdd = () => {
  const { user } = useContext(AuthContext);

  const [girls, setGirls] = useState([]);

  useEffect(() => {
    fetchGirlsData();
  }, []);

  const fetchGirlsData = () => {
    const url = `http://localhost:5000/myToy?email=${user?.email}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setGirls(data))
      .catch(error => console.log(error));
  };

  // slice data
//   const slicedGirls = girls.slice(0, 20);

  // search data

  return (
    <div>
      <div>
        <h1 className='text-center font-bold text-2xl my-5'>All Added data</h1>

        </div>

      <br />

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

                            {/* <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-800 uppercase tracking-wider">
                                Toy Name
                            </th> */}

                            

                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {girls.map((item) => (
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
                                
                                {/* <td className="px-6 py-4 whitespace-no-wrap">
                                    <div className="text-sm leading-5 text-gray-900">{item.email}</div>
                                </td> */}

                            </tr>
                        ))}
                    </tbody>
                </table>
    </div>
  );
};

export default ToyAdd;
