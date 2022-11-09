import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';

const ReviewSetion = () => {
    const [reviews, setReviews] = useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    return (
        <div>
            {
                reviews.map(review => <ReviewCard
                key={review._id}
                review={review}
                ></ReviewCard>)
            }            
        </div>
    );
};

export default ReviewSetion;