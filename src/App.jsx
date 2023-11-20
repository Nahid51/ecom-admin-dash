import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import NotFound from './pages/NotFound';
import DashboardDrawer from './pages/Dashboard/DashboardDrawer';
import Dashboard from './pages/Dashboard/Dashboard';
import AddProduct from './pages/SubPages/AddProduct';
import AddCategory from './pages/SubPages/AddCategory';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/dashboard" />,
    },
    {
      path: "/dashboard",
      element: <DashboardDrawer />,
      children: [
        {
          path: "/dashboard",
          element: <Dashboard />
        },
        {
          path: "/dashboard/add-product",
          element: <AddProduct />
        },
        {
          path: "/dashboard/add-category",
          element: <AddCategory />
        },
        {
          path: "*",
          element: <NotFound />
        },
      ]
    },
    {
      path: "*",
      element: <NotFound />
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;
