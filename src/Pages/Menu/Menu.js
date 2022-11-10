import React, { useEffect, useState } from 'react';
import useDocumentTitle from '../../shared/DocumentTitle/DocumentTitle';
import MenuItem from '../Home/MenuItem';

const Menu = () => {
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect( () =>{
        fetch('http://localhost:5000/menu')
        .then(res => res.json())
        .then(data => {
            setMenu(data);
            setLoading(false);
        })
    },[])
    
    useDocumentTitle("Menu");

    if(loading){
        return <div className='flex justify-center'>
        <div className="w-16 h-16 border-4 border-dashed rounded-full border-emerald-500 animate-spin dark:border-violet-400"></div> 
        </div> ;
    }
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