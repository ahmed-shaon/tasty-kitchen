import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useDocumentTitle from '../../shared/DocumentTitle/DocumentTitle';

const Signup = () => {
    const [error, setError] = useState();
    const { createUser, updateUserInfo } = useContext(AuthContext);

    const handleLogin = e => {
        e.preventDefault();
        setError('');
        const form = e.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirmPassword.value;
        const profile = { displayName: name, photoURL }
        if (password !== confirm) {
            return setError('password do not match');
        }
        // console.log(name, email, password, confirm);
        createUser(email, password)
            .then(result => {
                const user = result.user;
                updateUser(profile);
                const currentUser = {
                    email: user.email
                }
                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)

                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('token', data.token);
                        toast.success('Registration Successfully Completed.');
                        form.reset();
                    })
                    .catch(err => console.err(err))

            })
            .catch(err => console.log(err));
    }

    const updateUser = (profile) => {
        updateUserInfo(profile)
            .then(() => { })
            .catch(err => console.log(err))
    }
    useDocumentTitle("Signup -TastyKitchen");
    return (
        <div className=' mx-4  my-4 lg:my-12'>
            <div className="w-full max-w-md mx-auto p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100 border border-3 shadow-2xl">
                <h1 className="text-2xl font-bold text-center">Sign up</h1>
                <form onSubmit={handleLogin} className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="firstName" className="block dark:text-gray-400 text-left">First Name</label>
                        <input type="text" name="firstName" placeholder="First Name" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" required />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="lastName" className="block dark:text-gray-400 text-left">Last Name</label>
                        <input type="text" name="lastName" placeholder="Last Name" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" required />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="photoURL" className="block dark:text-gray-400 text-left">Photo URL</label>
                        <input type="text" name="photoURL" placeholder="Photo URL" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" required />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="email" className="block dark:text-gray-400 text-left">Email</label>
                        <input type="email" name="email" placeholder="Email" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" required />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block dark:text-gray-400 text-left">Password</label>
                        <input type="password" name="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" required />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="confirmPassword" className="block dark:text-gray-400 text-left">Confirm Password</label>
                        <input type="password" name="confirmPassword" placeholder="Confirm Password" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" required />
                        <div className="flex justify-between py-1 text-base dark:text-gray-400">
                            <p className='text-red-500'>{error}</p>
                        </div>
                    </div>
                    <button type="submit" className="block w-full p-3 text-center rounded-sm bg-emerald-400 dark:text-gray-900 dark:bg-violet-400">Sign up</button>
                </form>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 bg-slate-700 dark:bg-gray-700"></div>
                    <p className="px-3 text-base dark:text-gray-400">Login with social accounts</p>
                    <div className="flex-1 h-px sm:w-16 bg-slate-700 dark:bg-gray-700"></div>
                </div>
                <div className="flex justify-center space-x-4 text-4xl">
                    <button aria-label="Log in with Google" className="p-3 rounded-sm">
                        <FaGoogle className="w-6 h-6 fill-current hover:text-gray-700" />
                    </button>
                    <button aria-label="Log in with Twitter" className="p-3 rounded-sm">
                        <FaFacebook className="6-5 h-6 fill-current hover:text-gray-700" />
                    </button>
                    <button aria-label="Log in with GitHub" className="p-3 rounded-sm">
                        <FaGithub className="w-6 h-6 fill-current hover:text-gray-700" />
                    </button>
                </div>
                <p className="text-base text-center sm:px-6 dark:text-gray-400">Already have an account?
                    <Link to='/login' className="dark:text-gray-100 text-emerald-700 font-semibold">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;