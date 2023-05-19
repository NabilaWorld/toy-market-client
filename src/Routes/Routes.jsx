import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Blog from "../Pages/Home/Blog/Blog";
import Login from "../Pages/Home/LogIn/Login";
import Registration from "../Pages/Home/Registration/Registration";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import View_Food from "../Pages/View_Food/View_Food";
import View_Besin from "../Pages/Shared/View_Besin/View_Besin";
import View_Stove from "../Pages/View_Stove/View_Stove";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element:<Home></Home>
        },
        {
          path: '/blog',
          element:<Blog></Blog>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/registration',
        element: <Registration></Registration>
      },
      {
        path: 'food_details/:id',
        element: <View_Food></View_Food>,
        loader: ({params}) => fetch(`http://localhost:5000/toy/${params.id}`)
      },
      {
        path: 'besin_details/:id',
        element: <View_Besin></View_Besin>,
        loader: ({params}) => fetch(`http://localhost:5000/toy/${params.id}`)
      },
      {
      path: 'stove_details/:id',
        element: <View_Stove></View_Stove>,
        loader: ({params}) => fetch(`http://localhost:5000/toy/${params.id}`)
      },
     
      ]
    },
  ]);

  export default router;