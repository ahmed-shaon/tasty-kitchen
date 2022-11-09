import React from 'react';

const AddReview = ({ id }) => {
    const handleReview = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const imgURL = form.img.value;
        const message = form.message.value;
        const rating = form.rating.value;
        const current = new Date();
        const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
        console.log(name, imgURL, message);
        const review = {
            itemId: id,
            name,
            img: imgURL,
            date,
            message,
            rating
        }
        fetch('http://localhost:5000/reviews',{
            method:'POST',
            headers:{
                'content-type':'application'
            },
            body:JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
        .catch(err => console.log(err))

    }
    return (
        <div className='my-8 lg:mx-16'>
            <h2 className='text-2xl font-semibold my-3'>Please review this menu.</h2>
            <p>Your review will help me to understandt the customer <br /> satisfaction. Feel free to give a review.</p>
            <div>
                <section className="p-6 lg:text-left dark:bg-gray-800 dark:text-gray-50">
                    <form onSubmit={handleReview} className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
                        <div className="grid grid-cols-3 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="name" className="text-sm">Name</label>
                                <input type="text" name="name" placeholder="Name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" required />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="rating" className="text-sm">Rating</label>
                                <input type="text" name="rating" placeholder="rating out of 5" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" required />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="img" className="text-sm">Image</label>
                                <input type="text" name="img" placeholder="Image URL" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="message" className="text-sm">Let us know your feedback.</label>
                                <textarea name="message" placeholder="Message" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" required></textarea>
                            </div>
                        </div>
                        <input type="submit" className='bg-emerald-400 px-4 py-3 rounded-full hover:bg-emerald-600 font-semibold' value="Add Review" />
                    </form>
                </section>
            </div>
        </div>
    );
};

export default AddReview;