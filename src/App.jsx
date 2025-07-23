import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./components/Home"
import Snip from "./components/Snip"
import ViewSnip from "./components/ViewSnip"
import Navbar from "./components/Navbar"


const router = createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div className="w-full h-full flex flex-col">
        <Navbar/>
        <Home/>
      </div>
    },
    {
      path:"/snips",
      element: <div className="w-full h-full flex flex-col">
      <Navbar/>
      <Snip/>
    </div>
    },
    {
      path:"/snips/:id",
      element: <div className="w-full h-full flex flex-col">
      <Navbar/>
      <ViewSnip/>
    </div>,
    }
  ]
)

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
