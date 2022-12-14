import React, { useContext } from 'react';
import { FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useDocumentTitle from '../../shared/DocumentTitle/DocumentTitle';
import AddReview from '../MyReview/AddReview';
import ReviewSetion from '../MyReview/ReviewSetion';

const MenuDetails = () => {
    const {user} = useContext(AuthContext);
    const {_id, img, rating, price, description, title } = useLoaderData();
    useDocumentTitle("Menu Details -Menu");
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-3'>
                <div className=' col-span-2'>
                    <div className="max-w-lg p-4 shadow-md dark:bg-gray-900 dark:text-gray-100 mx-auto">
                        <div className=" pb-4 border-bottom">
                            <h2 className='text-3xl font-semibold'>{title}</h2>
                        </div>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <img src={img} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                            </div>
                            <div className="space-y-2">
                                <div className='flex justify-between text-lg font-bold my-4'>
                                    <p >Price: <span className='text-emerald-500'>${price}</span></p>
                                    <div className='flex items-center'>
                                        <FaStar className='text-yellow-500 mr-2' />
                                        <p>{rating}/5</p>
                                    </div>
                                </div>
                                <p className="leading-snug dark:text-gray-400">{description}</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        {
                            user?.uid ? <AddReview id={_id} title={title}></AddReview>
                            :<>
                            <p className='my-8 text-3xl'>Please <Link to='/login' className='text-emerald-600 font-bold hover:text-emerald-700'>Login</Link> to add your review.</p>
                             </>
                        }
                        
                    </div>
                </div>
                <div className='my-8'>
                    <h2 className='text-2xl font-bold mb-4'>User Reviews</h2>
                    <ReviewSetion id={_id}/>
                </div>
            </div>

        </div>
    );
};

export default MenuDetails;