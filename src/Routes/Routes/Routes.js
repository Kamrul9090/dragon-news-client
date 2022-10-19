import Main from "../../layout/Main";
import Catagories from "../../Pages/Catagories/Catagories/Catagories";
import Home from "../../Pages/Home/Home/Home";
import News from "../../Pages/News/News/News";

const { createBrowserRouter } = require("react-router-dom");

export const routes = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/catagories/:id',
                element: <Catagories></Catagories>
            },
            {
                path: '/news/:id',
                element: <News></News>
            }
        ]
    }
])