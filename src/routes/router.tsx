import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "../App";
import NotFound from "../page/NotFound";
  
  export const router = createBrowserRouter([
    {
      path: "/",
      element:<App/>,
    },
    {
      path: "*",
      element:<NotFound/>,
    },
  ]);