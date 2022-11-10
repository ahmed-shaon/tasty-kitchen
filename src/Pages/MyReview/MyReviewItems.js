import React, { useContext, useState } from 'react';
import Modal from 'react-modal';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import {FaWindowClose} from 'react-icons/fa';
import toast from 'react-hot-toast';

Modal.setAppElement('#root');
const MyReviewItems = ({ review, handleReviewDelete }) => {
    const { user } = useContext(AuthContext);
    const {_id, name, rating, message, itemName } = review;
    const [modalIsOpen, setIsOpen] = useState(false);
    const [updatedReview, setUpdatedReview] = useState({});

    function openModal() {
        setIsOpen(true);
    }


    function closeModal() {
        setIsOpen(false);
    }

    const handleUpdateReview = e => {
        e.preventDefault();
        // console.log(updatedReview);
        fetch(`http://localhost:5000/reviews/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updatedReview)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount>0)
            {
                toast.success('Successfully updated');
            }
        })
        .catch(err => console.log(err))
    }
    const handleBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newReview = {...updatedReview};
        newReview[field] = value;
        setUpdatedReview(newReview);
    }
    return (
        <div>
            <div className="card bg-emerald-100 shadow-xl">
                <div className="p-4">
                    <div className='flex justify-between items-center'>
                        <h2 className="card-title">Item Name: <span className='text-emerald-900 font-bold'>{itemName}</span></h2>
                        <p>Rating: <span className='text-emerald-900 font-bold'>{rating}</span></p>
                    </div>
                    <p className='my-8'><span>Messgae:</span> <span className='text-emerald-900 font-bold'>{message}</span></p>
                    <div className="card-actions justify-between">
                        <button className="btn btn-primary" onClick={openModal}>Update</button>
                        <button className="btn btn-primary" onClick={() => handleReviewDelete(_id)}>Delete</button>
                    </div>
                </div>
                <div>
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        contentLabel="Example Modal"

                    >
                        <div className='bg-emerald-100 h-full relative'>
                            <h2 className='pt-8 text-2xl font-bold text-center'>Update your review</h2>
                            <form onSubmit={handleUpdateReview} className="space-y-6 ng-untouched ng-pristine ng-valid lg:w-1/2 mx-auto">
                                <div className="space-y-1 text-sm">
                                    <label htmlFor="email" className="block dark:text-gray-400">Email</label>
                                    <input type="text" name="email" placeholder="Email" defaultValue={user?.email} className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" readOnly />
                                </div>
                                <div className="space-y-1 text-sm">
                                    <label htmlFor="rating" className="block dark:text-gray-400">Rating</label>
                                    <input onBlur={handleBlur} type="text" name="rating" placeholder="rating" defaultValue={rating} className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                                </div>
                                <div className="space-y-1 text-sm">
                                    <label htmlFor="message" className="block dark:text-gray-400">Message</label>
                                    <textarea onBlur={handleBlur} className="textarea textarea-bordered w-full" placeholder="Message" name="message" defaultValue={message}></textarea>
                                </div>
                                <div className='flex justify-end'>
                                    <button type='submit' className='btn btn-primary mr-4'>Save</button>
                                    <button className='btn btn-ghost bg-slate-400' onClick={closeModal}>Cancle</button>
                                </div>
                            </form>

                            <button onClick={closeModal} className="absolute top-0 right-0 p-2"><FaWindowClose className='text-red-600 text-2xl bg-white hover:text-red-500'/></button>
                        </div>
                    </Modal>

                </div>
            </div>
        </div>
    );
};

export default MyReviewItems;