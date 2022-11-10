import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Main from "../../layout/Main";
import AddItem from "../../Pages/AddItem/AddItem";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Login/Signup";
import Menu from "../../Pages/Menu/Menu";
import Orders from "../../Pages/Orders.js/Orders";
import MenuDetails from "../../Pages/Menu/MenuDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import MyReview from "../../Pages/MyReview/MyReview";


export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/menu',
                element:<Menu></Menu>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<Signup></Signup>
            },
            {
                path:'/orders',
                element:<Orders></Orders>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/additem',
                element:<PrivateRoute><AddItem></AddItem></PrivateRoute>
            },
            {
                path:'/menu/:id',
                element: <MenuDetails></MenuDetails>,
                loader:({params}) => fetch(`https://tasty-kitchen-server.vercel.app/menu/${params.id}`)
            },
            {
                path:'/myreview',
                element:<PrivateRoute><MyReview></MyReview></PrivateRoute>
            }
        ]
    }
])