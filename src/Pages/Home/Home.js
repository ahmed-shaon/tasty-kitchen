import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../../Banner.jpg';
import MenuItem from './MenuItem';

const Home = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/menu?home=${1}`)
            .then(res => res.json())
            .then(data => setMenu(data))
    }, [])
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${Banner})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-6xl font-bold">Tasty Food is Tasty Life and Happiness.</h1>
                        <p className="mb-5 text-xl">Try new recipe. Get new experience. <br />Bring happiness in life. <br /> Good food is good experience in life</p>
                    </div>
                </div>
            </div>
            <div className='text-center my-12 lg:px-12'>
                <h2 className='text-2xl font-semibold text-emerald-600'>Menu</h2>
                <p className='text-lg text-emerald-700 my-4'>Choose your menu</p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        menu.map(item => <MenuItem
                            key={item._id}
                            item={item}
                        ></MenuItem>)
                    }
                </div>
                <div className='flex justify-center my-8'>
                    <Link to='/menu'>
                        <button className='bg-emerald-400 px-4 py-3 rounded-full hover:bg-emerald-600 font-semibold'>See All</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;