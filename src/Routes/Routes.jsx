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
import PrivateRoute from "./PrivateRoute";
import ToyAdd from "../Pages/Home/ToyAdd/ToyAdd";
import AddToyPage from "../Pages/Home/AddToyPage/AddToyPage";
import AllToyDetail from "../Pages/Home/AllToyDetail/AllToyDetail";
import MyToy from "../Pages/Home/MyToy/MyToy";



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
        element: <PrivateRoute><View_Food></View_Food></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/toy/${params.id}`)
      },

      {
        path: 'besin_details/:id',
        element: <PrivateRoute><View_Besin></View_Besin></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/toy/${params.id}`)
      },

      {
      path: 'stove_details/:id',
        element: <PrivateRoute><View_Stove></View_Stove></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/toy/${params.id}`)
      },

      {
        path: '/toyAdd',
        element: <PrivateRoute><ToyAdd></ToyAdd></PrivateRoute>
        
      },

      {
        path: '/addToyPage',
        element: <AddToyPage></AddToyPage>,
      },

      {
        path: '/allToyDetail/:id',
          element: <PrivateRoute> <AllToyDetail></AllToyDetail> </PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/myToy/${params.id}`)
        },

        {
          path: '/myToy',
          element: <PrivateRoute> <MyToy></MyToy> </PrivateRoute>
          
        },
     
      ]
    },
  ]);

  export default router;