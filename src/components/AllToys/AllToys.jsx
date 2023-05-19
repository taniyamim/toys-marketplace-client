import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const AllToys = () => {
    const allToys = useLoaderData();
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredToys, setFilteredToys] = useState(allToys.slice(0, 20));

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchTerm(value);

        const filtered = allToys.filter((toy) =>
            toy.toyName.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredToys(filtered.slice(0, 20));
    };

    return (
        <div>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search by toy name"
                    value={searchTerm}
                    onChange={handleSearch}
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </div>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* table head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Sub-Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Generate table rows dynamically */}
                        {filteredToys.map((toy, index) => (
                            <tr key={index} className="hover">
                                <th>{index + 1}</th>
                                <td>{toy.seller}</td>
                                <td>{toy.toyName}</td>
                                <td>{toy.subcategory}</td>
                                <td>{toy.price}</td>
                                <td>{toy.availableQuantity}</td>
                                <td>
                                    <button className="btn btn-primary">View Details</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;
