import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AllToys = () => {
    const toys = useLoaderData();
    console.log(toys);

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
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
                        {toys.map((toy, index) => (
                            <tr key={index} className="hover">
                                <th>{index + 1}</th>
                                <td>{toy.seller}</td>
                                <td>{toy.toyName}</td>
                                <td>{toy.category.subcategory.subcategoryName}</td>
                                <td>{toy.price}</td>
                                <td>{toy.availableQuantity}</td>
                                <td>
                                <Link to={`/toyDetails/${toy._id}`}>
                                <button className="btn btn-primary">View Details</button>
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

export default AllToys;
