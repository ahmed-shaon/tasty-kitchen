import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const MyReview = () => {
    const [myReview, setMyReview] = useState([]);
    const {user} = useContext(AuthContext);
    useEffect(() =>{
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setMyReview(data);
        })
    },[user?.email])
    return (
        <div className='h-96'>
            my review
        </div>
    );
};

export default MyReview;