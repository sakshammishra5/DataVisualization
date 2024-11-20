import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AppContextProvider } from './context/AppContext.jsx'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import LoginPage from './components/LoginPage';
  import SignupPage from './components/SignupPage';
  import Dashboard from './components/Dashboard';


const router = createBrowserRouter([
    {
      path: "/",
      element:  <App/>
    },
    {
      path: "/signup",
      element: <SignupPage />
    },
    {
      path: "/login",
      element: <LoginPage /> 
    }
  ])

createRoot(document.getElementById('root')).render(
    <AppContextProvider>
          <RouterProvider router={router} />
    </AppContextProvider>
)
