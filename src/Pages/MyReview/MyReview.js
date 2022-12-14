import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useDocumentTitle from '../../shared/DocumentTitle/DocumentTitle';
import MyReviewItems from './MyReviewItems';

const MyReview = () => {
    const [myReviews, setMyReviews] = useState([]);
    const {logOut} = useContext(AuthContext);
    const { user } = useContext(AuthContext);
    useEffect(() => {
        fetch(`https://tasty-kitchen-server.vercel.app/reviews?email=${user?.email}`,{
            headers:{
                authorization:`Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                if(res.status === 401 || res.status === 403){
                    logOut()
                    .then(() => {})
                    .catch(err => {console.log(err)})
                }
                return res.json()
            })
            .then(data => {
                setMyReviews(data);
            })
    }, [user?.email, myReviews,logOut])
    const handleReviewDelete = (id) => {
        const agree = window.confirm('Are you sure?');
        if (agree) {
            fetch(`https://tasty-kitchen-server.vercel.app/reviews/${id}`, {
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
    useDocumentTitle("My Review -TastyKitchen");
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
                    : <div className="artboard phone-1 mx-auto flex items-center justify-center">
                        <p className='text-2xl font-bold'>No reviews were added</p>
                    </div>
            }
        </div>
    );
};

export default MyReview;