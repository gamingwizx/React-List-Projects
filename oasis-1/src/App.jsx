import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import AppLayout from "./AppLayout";
import Error from "./ui/Error";
import Register from "./features/Auth/Register";
import Login from "./features/Auth/Login";
import Dashboard from "./features/Dashboard/Dashboard"
import AuthLayout from "./features/Auth/AuthLayout"
import Booking from "./features/Booking/Booking"
import BookingDetail from "./features/Booking/BookingDetail"
import Cabin from "./features/Cabin/Cabin"
import Settings from "./features/Settings/Settings"
import {QueryClientProvider, QueryClient} from "@tanstack/react-query"
import { Toaster } from "react-hot-toast";
import CreateUser from "./features/Auth/CreateUser";
import AuthDashboardLayout from "./features/Auth/AuthDashboardLayout";
import Test from "./ui/Test";
import UpdatePassword from "./features/Auth/UpdatePassword";
import ResetPassword from "./features/Auth/ResetPassword";
import useGetUser from "./features/Auth/useGetUser";
import Loader from "./ui/Spinner";
import ProtectedRoute from "./ProtectedRoute";
import {DarkModeProvider} from "./DarkMode";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0
    }
  }
})
const router = createBrowserRouter([
    {element: <ProtectedRoute><AppLayout /></ProtectedRoute>,
    error: <Error />,
    children: [
        {
          path: "*",
          element: <Navigate to="/home/dashboard"/>
        },
        {
          path: "/home/dashboard",
          element: <Dashboard />
        },
        {
          path: "/home/login",
          element: <Login />
        },
        {
          path: "/home/booking",
          element: <Booking />
        },
        {
          path: "/home/booking",
          element: <Booking />
        },
        {
          path: "/home/booking/:id",
          element: <BookingDetail />
        },
        {
          path: "/home/cabin",
          element: <Cabin />
        },
        {
          path: "/home/user",
          element: <CreateUser />
        },
        {
          path: "/home/settings",
          element: <Settings />
        },
        {
          path: "/home/auth/update",
          element: <AuthDashboardLayout/>
        }
      ]
    },
        
    {
      element: <AuthLayout />,
      children: [
        {element: <Register/>,
          path: "/auth/register"
        },
        {element: <Login/>,
          path: "/auth/login"
        },
        {element: <ResetPassword/>,
          path: "/auth/reset-password"
        }
      ]
    }
])

function App() {
    return (
      <DarkModeProvider>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router}></RouterProvider>
            <Toaster
              position="top-center" 
              gutter={12}
            ></Toaster>
        </QueryClientProvider>

      </DarkModeProvider>
    )
}

export default App