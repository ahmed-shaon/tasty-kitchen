import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ReviewSetion from '../MyReview/ReviewSetion';

const MenuDetails = () => {
    const {img, rating, price, description, title} = useLoaderData();
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div className="max-w-lg p-4 shadow-md dark:bg-gray-900 dark:text-gray-100 mx-auto">
                    <div className=" pb-4 border-bottom">
                        <h2 className='text-3xl font-semibold'>{title}</h2>
                    </div>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <img src={img} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                        </div>
                        <div className="space-y-2">
                            <a rel="noopener noreferrer" href="/" className="block">
                                <h3 className="text-xl font-semibold dark:text-violet-400">Facere ipsa nulla corrupti praesentium pariatur architecto</h3>
                            </a>
                            <p className="leading-snug dark:text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi.</p>
                        </div>
                    </div>
                </div>
                <div className='my-8'>
                    <h2 className='text-2xl font-bold'>User Reviews</h2>
                    <ReviewSetion />
                </div>
            </div>

        </div>
    );
};

export default MenuDetails;