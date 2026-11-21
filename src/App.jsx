import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Template from './components/Template'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Login from './components/Login'
import Error from './components/Error'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Template />,
      children: [
        {
          path:"/",
          element:<Home />
        },
        {
          path:"/:username",
          element:<Home />
        },
        {
          path:"/about",
          element: <About />
        },
        {
          path:"/projects",
          element: <Projects/>
        },
        {
          path:"/contact",
          element: <Contact />
        },
        {
          path:"/login",
          element: <Login />
        },
        {
          path:"/*",
          element: <Error />
        }
      ]
    }
  ])

  return <RouterProvider router={router}/>
}

export default App
