import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import ToyRow from './ToyRow';


const ToyAdd = () => {
    const { user } = useContext(AuthContext);

    const [girls, setGirls] = useState([]);

    const url = `http://localhost:5000/myToy?seller_email=${user.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setGirls(data))
    }, [])

    // slice data
    const slicedGirls = girls.slice(0, 20);
    
    // search data
    

      


    return (
        <div>
            <div>
                <h1 className='text-center font-bold text-2xl my-5'>All Added data</h1>

                <div class="flex md:ml-[500px]">
                    <input type="text"   className="border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:border-blue-500" placeholder="Search" />
                    
                    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-r-lg px-4 py-2">
                        Search
                    </button>
                </div>
            </div>

        <br />

            <table className="md:min-w-full md:divide-y divide-gray-200 ">
               
                {
                    slicedGirls.map(girl => <ToyRow
                        key={girl._id}
                        girl={girl}
                    ></ToyRow>)
                }
            </table>
        </div>
    );
};

export default ToyAdd;