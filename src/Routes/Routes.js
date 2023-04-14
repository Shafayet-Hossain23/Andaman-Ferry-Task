import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ChooseRoute from "../Pages/BookAndaman/ChooseRoute/ChooseRoute";
import BookAndaman from "../Pages/BookAndaman/BookAndaman/BookAndaman";
import ContactDetails from "../Pages/BookAndaman/Contact Details/ContactDetails";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <BookAndaman></BookAndaman>
            },
            {
                path: "/chooseRoute",
                element: <ChooseRoute></ChooseRoute>
            },
            {
                path: "/contact-details",
                element: <ContactDetails></ContactDetails>
            },
        ]
    }
])