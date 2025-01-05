import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Error from "./ui/Error";
import ProtectedRoute from "./ProtectedRoute";
import { Toaster } from "react-hot-toast";
import {DarkModeProvider} from "./context/DarkMode";
import {QueryClientProvider, QueryClient} from "@tanstack/react-query"
import {AppLayoutProvider} from "./context/AppLayoutProvider.jsx"
import GlobalStyles from './styles/GlobalStyles.js'

import React, { Suspense } from "react";

const AppLayout = React.lazy(() => import("./AppLayout.jsx"))
const Register = React.lazy(() =>import("./features/Auth/Register"))
const Login = React.lazy(() =>import("./features/Auth/Login"))
const Dashboard = React.lazy(() =>import("./features/Dashboard/Dashboard"))
const AuthLayout = React.lazy(() =>import("./features/Auth/AuthLayout"))
const Booking = React.lazy(() =>import("./features/Booking/Booking"))
const BookingDetail = React.lazy(() =>import("./features/Booking/BookingDetail"))
const Cabin = React.lazy(() =>import("./features/Cabin/Cabin"))
const Settings = React.lazy(() =>import("./features/Settings/Settings"))
const CreateUser = React.lazy(() =>import("./features/Auth/CreateUser"))
const AuthDashboardLayout = React.lazy(() =>import("./features/Auth/AuthDashboardLayout"))
const ResetPassword = React.lazy(() =>import("./features/Auth/ResetPassword"))

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0
    }
  }
})

const router = createBrowserRouter([
  {
    element: <Suspense fallback={<div>Loading...</div>}>
      <AuthLayout />
    </Suspense>,
    children: [
      {element: <Suspense fallback={<div>Loading...</div>}><Register/></Suspense>,
        path: "/auth/register"
      },
      {element: <Suspense fallback={<div>Loading...</div>}><Login/></Suspense>,
        path: "/auth/login"
      },
      {element: <Suspense fallback={<div>Loading...</div>}><ResetPassword/></Suspense>,
        path: "/auth/reset-password"
      }
    ]
  },
    {element: <Suspense fallback={<div>Loading...</div>}>
      <ProtectedRoute><AppLayout /></ProtectedRoute>
    </Suspense>,
    error: <Error />,
    children: [
        {
          path: "*",
          element: <Navigate to="/home/dashboard"/>
        },
        {
          path: "/home/dashboard",
          element: <Suspense fallback={<div>Loading...</div>}><Dashboard /></Suspense>
        },
        {
          path: "/home/login",
          element: <Suspense fallback={<div>Loading...</div>}><Login /></Suspense>
        },
        {
          path: "/home/booking",
          element: <Suspense fallback={<div>Loading...</div>}>
            <Booking />
          </Suspense>
        },
        {
          path: "/home/booking/:id",
          element: <Suspense fallback={<div>Loading...</div>}>
            <BookingDetail />
          </Suspense>
        },
        {
          path: "/home/cabin",
          element: <Suspense fallback={<div>Loading...</div>}>
            <Cabin />
          </Suspense>
        },
        {
          path: "/home/user",
          element: <Suspense fallback={<div>Loading...</div>}>
            <CreateUser />
          </Suspense>
        },
        {
          path: "/home/settings",
          element: <Suspense fallback={<div>Loading...</div>}>
            <Settings />
          </Suspense>
        },
        {
          path: "/home/auth/update",
          element: <Suspense fallback={<div>Loading...</div>}><AuthDashboardLayout/></Suspense>
        }
      ]
    }
])

function App() {
    return (
      <DarkModeProvider>
        
        <QueryClientProvider client={queryClient}>
          <AppLayoutProvider>
            <RouterProvider router={router}></RouterProvider>
          </AppLayoutProvider>
            <Toaster
              position="top-center" 
              gutter={12}
            ></Toaster>
        </QueryClientProvider>

      </DarkModeProvider>
    )
}

export default App