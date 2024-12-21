import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
//import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from "./routes/homepage/Homepage"
import DashboardPage from "./routes/dashBoardPage/DashboardPage"
import ChatPage from "./routes/chatPage/ChatPage"
import RootLayout from './layouts/rootLayout/RootLayout'
import DashboardLayout from './layouts/dashboardLayout/DashboardLayout'
import SignInPage from "./routes/signInPage/SignInPage"
import SignUpPage from "./routes/signUpPage/SignUpPage"
import ExplorePage from './routes/explorePage/ExplorePage';
import ContactPage from './routes/contactPage/ContactPage';
import UpgradePage from './routes/upgradePage/UpgradePage';


const router = createBrowserRouter([
  {
    element: <RootLayout/>,
    children: [
      {
        path: "/", 
        element: <Homepage />,
      },
      {
        path: "/sign-in", 
        element: <SignInPage />,
      },
      {
        path: "/sign-up", 
        element: <SignUpPage />,
      },
      {
        path: "/explore",
        element: <ExplorePage />, 
      },
      {
        path: "/contact",
        element: <ContactPage />, 
      },
      {
        path: "/upgrade",
        element: <UpgradePage />, 
      },
      {
        element: <DashboardLayout/>,
        children: [
          {
            path:"/dashboard",
            element:<DashboardPage/>,
          },
          {
            path:"/dashboard/chats/:id",
            element:<ChatPage/>,
          }
        ]
      },
    ],

  },
  /*{{
    path: "/",
    element: 
      <Homepage/>,
  },
  {
    path: "/dashboard",
    children: [
      { path: "/dashboard", element: <DashboardPage/>},
      { path: "/dashboard/chats/:id", element:<ChatPage/>}
    ]
}},*/
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
