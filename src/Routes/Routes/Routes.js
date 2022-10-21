import Main from "../../layout/Main";
import Category from "../../Pages/Catagories/Category/Category";

import Home from "../../Pages/Home/Home/Home";
import News from "../../Pages/News/News/News";

const { createBrowserRouter } = require("react-router-dom");

export const routes = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch(`http://localhost:5000/news`)
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/news/:id',
                element: <News></News>,
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    }
])