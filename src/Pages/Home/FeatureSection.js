import React from 'react';
import img1 from '../../assets/3.jpeg';
import img2 from '../../assets/4.jpg'

const FeatureSection = () => {
    return (
        <div className='mt-12'>
            <h2 className='text-5xl font-bold italic my-8'>Special Items</h2>
            <section className="p-4 lg:p-8 dark:bg-gray-800 dark:text-gray-100">
                <div className="container mx-auto space-y-12">
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                        <img src={img1} alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                            <h3 className="text-3xl font-bold">Double Decker Chessy Burger</h3>
                            <p className="my-6 dark:text-gray-400">We only make this item in pre-order. It is only available on special occassion.</p>
                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                        <img src={img2} alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                            <h3 className="text-3xl font-bold">Special Turkish Kabab</h3>
                            <p className="my-6 dark:text-gray-400">Available on Friday on the website. Only pre-order.</p>                           
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FeatureSection;