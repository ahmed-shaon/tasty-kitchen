import React from 'react';

const MyReviewItems = ({ review }) => {
    const { name, rating, message, itemName } = review;
    return (
        <div className="card bg-emerald-100 shadow-xl">
            <div className="p-4">
                <div className='flex justify-between items-center'>
                    <h2 className="card-title">Item Name: <span className='text-emerald-900 font-bold'>{itemName}</span></h2>
                    <p>Rating: <span className='text-emerald-900 font-bold'>{rating}</span></p>
                </div>
                <p className='my-8'><span>Messgae:</span> <span className='text-emerald-900 font-bold'>{message}</span></p>
                <div className="card-actions justify-between">
                    <button className="btn btn-primary"><label htmlFor="my-modal-2">open modal</label></button>
                    <button className="btn btn-primary">Delete</button>
                </div>
            </div>
            <div className="modal" id="my-modal-2">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className="modal-action">
                        <a href="#" className="btn">Yay!</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyReviewItems;