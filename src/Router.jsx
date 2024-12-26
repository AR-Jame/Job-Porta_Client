import { createBrowserRouter } from "react-router-dom";
import Root from "./Pages/Root";
import Home from "./Pages/Home/Home";
import Login from "./Pages/login/Login";
import SignUp from "./Pages/SignUp/SignUp";

const router = createBrowserRouter([
    {
        path: '/',
        element:<Root />,
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
            }
        ]
    }
])
export default router