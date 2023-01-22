
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./Pages/Error";

import Home from "./Pages/Home";
import ProductDetail from "./Pages/ProductDetail";
import Products from "./Pages/Products";
import Root from "./Pages/Root";

// const routeDefinition = createRoutesFromElements(
//   <Route>
//   <Route path='/' element={<Home/>}/>
//   <Route path='/product' element= {<Products/>}/>
//   </Route>
// )

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index:true, element: <Home /> }, //path:'' alternatively
      { path: "product", element: <Products /> },
      { path: "product/:id", element: <ProductDetail /> },
    ],
  },
]);

// const router = createBrowserRouter(routeDefinition)

function App() {
  return <RouterProvider router={router} />;
}

export default App;
