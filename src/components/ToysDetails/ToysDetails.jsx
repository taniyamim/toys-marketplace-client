import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ToysDetails = () => {
    const toy = useLoaderData();
    console.log(toy);
    return (
        <div>
            <div className="mx-auto card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={toy.picture} alt="toy" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{toy.toyName}</h2>
                    <p>Category: {toy.category.categoryName}</p>
                    <p>Sub-Category: {toy.category.subcategory.subcategoryName}</p>
                    <p>Available Quantity: {toy.availableQuantity}</p>
                    <h2>Price: {toy.price}</h2>
                    <p>Rating: {toy.rating}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToysDetails;