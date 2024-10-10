import User from "./features/User/User"
import Menu, {loader as MenuLoader} from "./features/Menu/Menu"
import NewOrder, {loader as OrderLoader} from "./features/Order/NewOrder"
import {action as UpdateOrderAction} from "./features/Order/UpdateOrder"
import Cart from "./features/Cart/Cart"
import CreateOrder, {action as CreateOrderAction} from "./features/Order/CreateOrder"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Error from "./ui/Error"
import './App.css'
import AppLayout from "./ui/AppLayout"
const router = createBrowserRouter([
  {
    element: <AppLayout/>,
    errorElement: <Error />,
    children: [
      {path: "/",
        element: <User/>
      },
      {path: "/menu",
        element: <Menu />,
        errorElement: <Error />,
        loader: MenuLoader
      },
      {path:"/cart",
        element: <Cart />,
      },
      {path: "/order/create",
        element: <CreateOrder />,
        action: CreateOrderAction,
      },
      {
        path: "/order/:orderId",
        element: <NewOrder />,
        action: UpdateOrderAction,
        loader: OrderLoader,
      },
    ]
  }
])
function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
