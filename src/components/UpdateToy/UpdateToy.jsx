import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers/AuthProvider';

const UpdateToy = () => {
    const toy = useLoaderData();
    console.log(toy);
    const { user } = useContext(AuthContext);

    const handleUpdateToy = event => {
        event.preventDefault();

        const form = event.target;

        const toyName = form.name.value;
        const availableQuantity = form.quantity.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const subCategory = form.subCategory.value;
        const details = form.details.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const picture = form.photo.value;

        const updatedToy = { toyName, availableQuantity, sellerName, sellerEmail, subCategory, details, price, rating, picture }

        console.log(updatedToy);

        // send data to the server
        fetch(`http://localhost:5000/toys/${toy._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    return (
        <div className="bg-sky-900 text-white p-24 m-10 rounded-lg">
            <h2 className="text-center text-3xl font-extrabold py-5">Update Toy</h2>
            <form onSubmit={handleUpdateToy}>
                {/* toy name and quantity row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Toy Name" defaultValue={toy.toyName} className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" defaultValue={toy.availableQuantity} placeholder="Available Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form seller row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="sellerName" defaultValue={toy.sellerName} placeholder="Seller Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <label className="input-group">
                            <input type="email" name="sellerEmail" placeholder="Seller Email" defaultValue={user.email} className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* toy subcategory and details row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Sub Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="subCategory" defaultValue={toy.subCategory} placeholder="Must be (Marvel , DC , Star wars)" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" defaultValue={toy.details} placeholder="Details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* toy price and rating row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" defaultValue={toy.price} placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" placeholder="Rating" defaultValue={toy.rating} className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* toy Photo url row */}
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" defaultValue={toy.picture} placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Update Toy" className="btn btn-block" />

            </form>
        </div>
    );
};

export default UpdateToy;