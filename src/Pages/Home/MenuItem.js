import React from 'react';
import { FaStar } from 'react-icons/fa';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';

const MenuItem = ({ item }) => {
    const {_id, img, price, rating, title, description } = item;
    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl text-left">
            <figure>
                <PhotoProvider>
                    <PhotoView src={img}>
                        <img img className='h-48 w-full' src={img} alt="" />
                    </PhotoView>
                </PhotoProvider>
            </figure>
            <div className="card-body">
                <div >
                    <div className='flex justify-between items-center'>
                        <h3 className="card-title">{title}</h3>
                        <p className='flex-grow-0 text-lg font-bold'>${price}</p>
                    </div>
                </div>
                <p>{description.slice(0, 100)}...</p>
                <div className="card-actions justify-end">
                    <p className='flex items-center'>
                        <FaStar className='text-yellow-400 mr-2' />
                        <span className='font-bold'>{rating}/5</span>
                    </p>
                    <Link to={`/menu/${_id}`}>
                        <button className="bg-emerald-400 px-4 py-3 rounded-full hover:bg-emerald-600 font-semibold">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;