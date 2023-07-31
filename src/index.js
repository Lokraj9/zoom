import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Meeting from './meeting';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
let payload={
  meetingNumber:'86571016783',
  role:'',
  sdkKey:'q1UgvsqtQsWjgVL_hUFrkw',
  sdkSecret:'2X6PZXXmJrtsCEvpcXDTVccHNdRoIaLl',
  passWord:'1tgGqf',
  userName:'test@gmail.com',
  userEmail:'',
  leaveUrl:'http://localhost:3000',

}
const root = ReactDOM.createRoot(document.getElementById('root'));
const router=createBrowserRouter([
  {
  path:'/',
  element:<App/>
},{
  path:'/meeting',
  element:<Meeting payload={payload}/>
}]);
root.render(
  
    <RouterProvider router={router}></RouterProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
