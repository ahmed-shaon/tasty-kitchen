import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useDocumentTitle from '../../shared/DocumentTitle/DocumentTitle';
import MenuItem from '../Home/MenuItem';

const Menu = () => {
    const menu = useLoaderData();
    useDocumentTitle("Menu");
    return (
        <div className='lg:mx-12 my-12 relative z-0'>
            <h2 className='text-4xl font-bold text-left my-4'>Select todays menu.</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    menu.map(item => <MenuItem
                    key={item._id}
                    item={item}
                    ></MenuItem>)
                }
            </div>
        </div>
    );
};

export default Menu;