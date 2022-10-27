import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import Courses from "../components/Courses/Courses";
import Faq from "../components/Faq/Faq";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Profile from "../components/Profile/Profile";
import Register from "../components/Register/Register";
import TermsAndConditions from "../components/TermsAndConditions/TermsAndConditions";
import Main from "../layout/Main";
import ErrorPage from "../Pages/ErrorPage";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },

            {
                path: '/courses',
                loader: async() => fetch('https://assignment-10-server-side-six.vercel.app/courses'),
                element: <Courses></Courses>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            },
            {
                path: '/terms',
                element: <TermsAndConditions></TermsAndConditions>
            },
        ]

    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])