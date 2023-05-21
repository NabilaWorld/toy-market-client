import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

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

  const handleDelete = id => {
    const proceed = window.confirm('Are you want to delete');
    if (proceed) {
      fetch(`http://localhost:5000/myToy/${id}`, {
        method: 'DELETE',
        
      })
        .then(response => {
          console.log(response);
          if (response.status === 200) {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'DELETE SUCCESSFULLY',
              showConfirmButton: false,
              timer: 1500
            });
            fetchGirlsData(); 
          } else {
            throw new Error('Failed to delete the toy.');
          }
        })
        .catch(error => {
          console.log(error);
          
        });
    }
  };
    return (
        <div>
            <div>
                <h1 className='text-center font-bold text-2xl my-5'>My Added data</h1>

            </div>

            <br />

            <table className="min-w-full my-10">
                <thead>
                    <tr>


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
                            Description
                        </th>

                        <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-800 uppercase tracking-wider">
                            Update
                        </th>

                        <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-800 uppercase tracking-wider">
                            Delete
                        </th>



                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {girls.map((item) => (
                        <tr key={item.id}>



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
                                <div className="text-sm leading-5 text-gray-900">{item.description}</div>
                            </td>

                            <td className="px-6 py-4 whitespace-no-wrap">
                                <div className="text-sm leading-5 text-gray-900">
                                    <Link to={`/updateToy/${item._id}`}>
                                       <button className='btn btn-warning rounded-lg'>Update</button>
                                    </Link>
                                </div>
                            </td>


                            <td className="px-6 py-4 whitespace-no-wrap">
                                <div className="text-sm leading-5 text-gray-900">
                                    <button onClick={() => handleDelete(item._id)} className='btn btn-danger rounded-lg'>DELETE</button>
                                </div>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ToyAdd;
