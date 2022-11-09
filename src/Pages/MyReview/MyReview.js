import React, { useContext, useEffect, useState } from 'react';
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
    }, [user?.email])
    return (
        <div className=' my-8 lg:my-36 lg:mx-12'>
            {
                myReviews.length > 0 ?<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>{
                    myReviews.map(review =>
                        <MyReviewItems
                            key={review._id}
                            review={review}
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