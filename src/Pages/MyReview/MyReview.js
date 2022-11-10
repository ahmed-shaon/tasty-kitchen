import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import MyReviewItems from './MyReviewItems';

const MyReview = () => {
    const [myReviews, setMyReviews] = useState([]);
    const { user } = useContext(AuthContext);
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyReviews(data);
            })
    }, [user?.email, myReviews])
    const handleReviewDelete = (id) => {
        const agree = window.confirm('Are you sure?');
        if (agree) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success('Successfully Deleted.!');
                        const restReviews = myReviews.filter(review => review._id !== id);
                        setMyReviews(restReviews);
                    }
                })
                .catch(err => console.log(err))

        }

    }
    return (
        <div className=' my-8 lg:my-36 lg:mx-12'>
            {
                myReviews.length > 0 ? <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>{
                    myReviews.map(review =>
                        <MyReviewItems
                            key={review._id}
                            review={review}
                            handleReviewDelete={handleReviewDelete}
                        ></MyReviewItems>)
                }</div>
                    : <div className="artboard phone-2 mx-auto flex items-center justify-center">
                        <p className='text-2xl font-bold'>No reviews were added</p>
                    </div>
            }
        </div>
    );
};

export default MyReview;