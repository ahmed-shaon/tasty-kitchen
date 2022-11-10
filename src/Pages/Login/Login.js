import React, { useContext, useState } from 'react';
import { FaGoogle, FaFacebook, FaGithub } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useDocumentTitle from '../../shared/DocumentTitle/DocumentTitle';
import { handleGoogleSignin } from '../../utilities/SocialLogin';

const Login = () => {
    const [error, setError] = useState();
    const {userLogin, signInWithGoogle} = useContext(AuthContext);
    const location = useLocation();
    const naviget = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = e => {
        e.preventDefault();
        setError('');
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        userLogin(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            const currentUser = {
                email:user.email
            }
            fetch('http://localhost:5000/jwt',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(currentUser)

            })
            .then(res => res.json())
            .then(data => {
                localStorage.setItem('token',data.token);
                form.reset();
                naviget(from, {replace:true});
            })
            .catch(err => console.err(err))
        })
        .catch(err => {
            console.log(err);
            setError(err.message);
        })
    }
    useDocumentTitle("Login -TastyKitchen");
    return (
        <div className=' mx-4  my-4 lg:my-12'>
            <div className="w-full max-w-md mx-auto p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100 border border-3 shadow-2xl">
                <h1 className="text-2xl font-bold text-center">Login</h1>
                <form onSubmit={handleLogin} className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="email" className="block dark:text-gray-400 text-left">Email</label>
                        <input type="email" name="email" placeholder="Email" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block dark:text-gray-400 text-left">Password</label>
                        <input type="password" name="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                        <div className="flex justify-between py-1 text-xs dark:text-gray-400">
                            <p className='text-red-500'>{error}</p>
                            <a  href="/">Forgot Password?</a>
                        </div>
                    </div>
                    <button type="submit" className="block w-full p-3 text-center rounded-sm bg-emerald-400 dark:text-gray-900 dark:bg-violet-400">Sign in</button>
                </form>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 bg-slate-700 dark:bg-gray-700"></div>
                    <p className="px-3 text-base dark:text-gray-400">Login with social accounts</p>
                    <div className="flex-1 h-px sm:w-16 bg-slate-700 dark:bg-gray-700"></div>
                </div>
                <div className="flex justify-center space-x-4 text-4xl">
                    <button aria-label="Log in with Google" className="p-3 rounded-sm">
                        <FaGoogle className="w-6 h-6 fill-current hover:text-gray-700"  onClick={() =>handleGoogleSignin(signInWithGoogle, location, naviget, from)}/>
                    </button>
                    <button aria-label="Log in with Twitter" className="p-3 rounded-sm">
                        <FaFacebook className="6-5 h-6 fill-current hover:text-gray-700" />
                    </button>
                    <button aria-label="Log in with GitHub" className="p-3 rounded-sm">
                        <FaGithub className="w-6 h-6 fill-current hover:text-gray-700" />
                    </button>
                </div>
                <p className="text-base text-center sm:px-6 dark:text-gray-400">Don't have an account?
                    <Link to='/signup' className="dark:text-gray-100 text-emerald-700 font-semibold">Sign up</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;