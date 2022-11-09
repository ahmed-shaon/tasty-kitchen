import React from 'react';
import { FaStar } from 'react-icons/fa';

const ReviewCard = ({ review }) => {
    const { img, message, rating, name, date } = review;
    return (
        <div className='mb-12 mx-8'>
            <div className='flex justify-between items-center'>
            <div className='flex items-center'>
                <img alt="" className="w-12 h-12 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 ring-violet-400 ring-offset-gray-800" src={img} />
                <div className='ml-4'>
                    <h2 className='font-bold'>{name}</h2>
                    <p className=''>{date}</p>
                </div>
            </div>
            <div className='flex items-center'>
                <FaStar className='text-yellow-500 mr-2'/>
                {rating}
            </div>
            </div>
            <p className='text-left my-4'>{message}</p>
        </div>
    );
};

export default ReviewCard;