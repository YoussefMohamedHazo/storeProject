RouterProvider

import { RouterProvider,createBrowserRouter } from "react-router-dom";

import {
  HomeLayout,
  Error,
  Products,
  SingleProduct,
  Cart,
  Checkout,
  Oreders,
  Resister,
  Landing,
  Login,
  About,
} from "./pages/index";
import { ErrorElement } from "./components";

import { loader as landingLoader } from './pages/Landing'


const router = createBrowserRouter([
{
  path :'/',
  element:<HomeLayout/>,
  errorElement:<Error/>,
  children:[
    {
      index:true,
      element:<Landing/>,
      errorElement:<ErrorElement/>,
      loader:landingLoader

    },
    {
      path:'products',
      element:<Products/>
    },
    {
      path:'products/:id',
      element:<SingleProduct/>
    },
    {
      path:'cart',
      element:<Cart/>
    },
    {
      path:'about',
      element:<About/>
    },
    {
      path:'checkout',
      element:<Checkout/>
    },
    {
      path:'orders',
      element:<Oreders/>
    },

  ]

},
{
  path :'/login',
  element:<Login/>,
  errorElement:<Error/>
},{
  path :'/register',
  element:<Resister/>,
  errorElement:<Error/>
}
])

const App = () => {
  return <RouterProvider router={router}/>;
};

export default App;
