import React, { useContext, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const ToysDetails = () => {
    const { user } = useContext(AuthContext);
    const toy = useLoaderData();
    console.log(toy);
    if (!user) {
        useEffect(() => {
            if (!user) {
                toast.error('You have to log in first to view details', {
                    position: toast.POSITION.TOP_RIGHT
                });
            }
        }, [user]);
    }
    return (
        <div>
            <div className="mx-auto card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={toy.picture} alt="toy" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{toy.toyName}</h2>
                    {/* <p>Category: {toy.categ.categoryName}</p> */}
                    <p>Sub-Category: {toy.subCategory.subCategoryName}</p>
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