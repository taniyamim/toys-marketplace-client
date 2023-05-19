import React from 'react';

const AllToys = () => {
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
                        {/* row 1 */}
                        <tr className='hover'>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Captain America red action</td>
                            <td>Captain America</td>
                            <td>13$</td>
                            <td>23</td>
                            <td><button className="btn btn-primary">View Details</button></td>
                        </tr>
                        {/* row 2 */}
                        <tr className='hover'>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Captain America red action</td>
                            <td>Captain America</td>
                            <td>13$</td>
                            <td>23</td>
                            <td><button className="btn btn-primary">View Details</button></td>
                        </tr>
                        {/* row 3 */}
                        <tr className='hover'>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Captain America red action</td>
                            <td>Captain America</td>
                            <td>13$</td>
                            <td>23</td>
                            <td><button className="btn btn-primary">View Details</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;