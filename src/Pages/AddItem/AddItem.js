import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const AddItem = () => {
    const {user} = useContext(AuthContext);

    const handleAddItem = e => {
        e.preventDefault();
        const form = e.target;
        const title = form.name.value;
        const price = form.price.value;
        const img = form.img.value;
        const rating = form.rating.value;
        const description = form.description.value;
        const item ={
            title,
            price,
            rating,
            img,
            description,
            email:user?.email
        }
        console.log(item)
        fetch('http://localhost:5000/menu',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(item)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged)
            {
                toast.success('Successfully added one item.');
                form.reset();
            }
        })
    }
    return (
        <div className='lg:w-1/2 mx-auto my-8 lg:my-32'>
            <h2 className='text-4xl font-bold my-6'>Please add an item to the menu.</h2>
            <form onSubmit={handleAddItem} className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 text-left">
                <div className="col-span-full sm:col-span-3">
                    <label htmlFor="name" className="text-sm">Item Name</label>
                    <input type="text" name='name' placeholder="Item Name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" required/>
                </div>
                <div className="col-span-full sm:col-span-3">
                    <label htmlFor="price" className="text-sm">Price</label>
                    <input type="text" name="price" placeholder="Price" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" required/>
                </div>
                <div className="col-span-full sm:col-span-3">
                    <label htmlFor="rating" className="text-sm">Rating</label>
                    <input name="rating" type="text" placeholder="Rating" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" required/>
                </div>
                <div className="col-span-full sm:col-span-3">
                    <label htmlFor="img" className="text-sm">Photo</label>
                    <input name="img" type="text" placeholder="Photo URL of the item" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" required/>
                </div>
                <div className="col-span-full">
                    <label htmlFor="description" className="text-sm">Description</label>
                    <textarea name="description" placeholder="Description about the item" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" required></textarea>
                </div>
                <div className='col-span-full text-center'>
                    <button type='submit' className="bg-emerald-400 px-4 py-3 rounded-full hover:bg-emerald-600 font-semibold">Add Item</button>
                </div>
            </form>
        </div>
    );
};

export default AddItem;