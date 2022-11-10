import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';

const ReviewSetion = ({id}) => {
    const [reviews, setReviews] = useState([]);
    useEffect( () => {
        fetch(`http://localhost:5000/reviewsbyid?id=${id}`)
        .then(res => res.json())
        .then(data => setReviews(data))
    },[id],reviews)
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