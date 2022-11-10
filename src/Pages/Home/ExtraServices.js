import React from 'react';
import imgextra from '../../assets/5.jpg';

const ExtraServices = () => {
    return (
        <div className='mx-8 my-8 lg:my-16'>
            <h2 className='text-5xl font-bold my-8'>Special Services</h2>
            <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center text-left">
                <div>
                    <div className="mt-12 space-y-12">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <div className="flex items-center justify-center w-12 h-12 rounded-md bg-emerald-500 dark:bg-violet-400 dark:text-gray-900">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                            </div>
                            <div className="ml-4">
                                <h4 className="text-lg font-medium leading-6 dark:text-gray-50">Wedding Cooking</h4>
                                <p className="mt-2 dark:text-gray-400">Sometimes need to cook food in event spot. Also provide that service.</p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <div className="flex items-center justify-center w-12 h-12 rounded-md bg-emerald-500 dark:bg-violet-400 dark:text-gray-900">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                            </div>
                            <div className="ml-4">
                                <h4 className="text-lg font-medium leading-6 dark:text-gray-50">Birthday Party</h4>
                                <p className="mt-2 dark:text-gray-400">Take order to make food for birthday pary.</p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <div className="flex items-center justify-center w-12 h-12 rounded-md bg-emerald-500 dark:bg-violet-400 dark:text-gray-900">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                            </div>
                            <div className="ml-4">
                                <h4 className="text-lg font-medium leading-6 dark:text-gray-50">Pre-Order</h4>
                                <p className="mt-2 dark:text-gray-400">Deliver pre-order food for party or family occasion.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div aria-hidden="true" className="mt-10 lg:mt-0">
                    <img src={imgextra} alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
                </div>
            </div>
        </div>
    );
};

export default ExtraServices;