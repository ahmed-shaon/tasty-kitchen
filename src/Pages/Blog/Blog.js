import React from 'react';

const Blog = () => {
    return (
        <div className='my-12'>
            <h2 className='text-5xl font-bold '>Welcome to blog.</h2>
            <div className='text-left'>
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                    <div rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900">
                        <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20191104165821/SQL-Vs-NoSQL1.png" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                        <div className="p-6 space-y-2 lg:col-span-5 bg-emerald-100">
                            <h3 className="text-2xl font-semibold sm:text-4xl">Difference between SQL and NoSQL</h3>
                            <p>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
                        </div>
                    </div>
                </div>
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                    <div rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900">
                        <div className="p-6 space-y-2 lg:col-span-5 bg-emerald-100">
                            <h3 className="text-2xl font-semibold sm:text-4xl">What is JWT, and how does it work?</h3>
                            <p>First, some termes d’art need to be disambiguated. It’s not uncommon to hear somebody refer to a REST API as simply an API. Likewise, we frequently see JWTs conflated with the pattern of JWT-based authentication. JWT on its own is nothing but an open standard (RFC 7519) for transmitting messages via HTTP. JWT as a standard can be used for any message at all. It has one characteristic in particular that makes it a good tool for sending a user’s identity to a backend service. We can trust the integrity of a JWT because JWTs are signed, making them tamper-proof..</p>
                        </div>
                        <img src="https://i.ytimg.com/vi/K6pwjJ5h0Gg/maxresdefault.jpg" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                    </div>
                </div>
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                    <div rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900">
                        <img src="https://cdn.educba.com/academy/wp-content/uploads/2018/07/Java-Script-vs-Node-JS-1.png" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                        <div className="p-6 space-y-2 lg:col-span-5 bg-emerald-100">
                            <h3 className="text-2xl font-semibold sm:text-4xl">What is the difference between javascript and NodeJS?</h3>
                            <p>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful.</p>
                        </div>
                    </div>
                </div>
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                    <div rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900">
                        <div className="p-6 space-y-2 lg:col-span-5 bg-emerald-100">
                            <h3 className="text-2xl font-semibold sm:text-4xl">How does NodeJS handle multiple requests at the same time?</h3>
                            <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.
                                If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>
                        </div>
                        <img src="https://kinsta.com/wp-content/uploads/2021/03/Nodejs-Architecture.png" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;