import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignUp from './pages/signUp';
import ChatPage from './pages/chatPage';
import Login from './pages/login';

const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [
    {
      path: '/',
      element: <Login/>
    },
    {
      path: '/login',
      element: <Login/>
    },
    {
      path: '/signUp',
      element: <SignUp />
    },
    {
      path: '/home',
      element: <ChatPage/>
    }
  ]
},
{
  path:'/signUp',
  element: <SignUp />
}])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
