import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './index.css'

import Landing from "./pages/Landing"
import Browse from "./pages/Browse"
import Watch from '@/pages/Watch'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />
  },
  {
    path: "/browse",
    element: <Browse />
  },
  {
    path: "/watch/:id",
    element: <Watch />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)