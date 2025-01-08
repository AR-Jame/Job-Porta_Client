import { createBrowserRouter } from "react-router-dom";
import Root from "./Pages/Root";
import Home from "./Pages/Home/Home";
import Login from "./Pages/login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import AddJob from "./Pages/AddJob/AddJob";
import PrivateRoute from "./Auth/PrivateRoute";
import AllJobs from "./Pages/AllJobs/AllJobs";
import JobsDetails from "./Pages/JobDetails/JobsDetails";
import Application from "./Pages/Application/Application";
import MyApplication from "./Pages/MyApplication/MyApplication";
import MyJobs from "./Pages/MyJobs/MyJobs";
import ViewApplication from "./Pages/viewApplication/ViewApplication";
import EditPost from "./Pages/EditPost/EditPost";
const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signUp',
                element: <SignUp />
            },
            {
                path: '/addJob',
                element: <PrivateRoute><AddJob /></PrivateRoute>
            },
            {
                path: '/allJobs',
                element: <AllJobs />,
                // loader: () => fetch('https://job-portal-server-neon-nu.vercel.app/jobs', { credentials: 'include' })
            },
            {
                path: '/jobs/details/:id',
                element: <PrivateRoute><JobsDetails /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://job-portal-server-neon-nu.vercel.app/jobs/details/${params.id}`)
            },
            {
                path: '/application/apply/:id',
                element: <PrivateRoute><Application /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://job-portal-server-neon-nu.vercel.app/jobs/details/${params.id}`)
            },
            {
                path: '/myApplication',
                element: <PrivateRoute><MyApplication /></PrivateRoute>
            },
            {
                path: '/myPost',
                element: <PrivateRoute><MyJobs /></PrivateRoute>
            },
            {
                path: '/viewApplications/:jobId',
                element: <PrivateRoute><ViewApplication /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://job-portal-server-neon-nu.vercel.app/application/${params.jobId}`, { credentials: 'include' })
            },
            {
                path: '/editPost/:id',
                element: <PrivateRoute><EditPost /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://job-portal-server-neon-nu.vercel.app/jobs/details/${params.id}`)
            }
        ]
    }
])
export default router