import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './component/Home/Home.jsx'
import About from './component/About/About.jsx'
import Layout from './Layout.jsx'
import Contact from './component/Contact/Contact.jsx'
import Users from './component/Users/Users.jsx'
import Github, { githubInfoLoader } from './component/Github/Github.jsx'


//Two way we can use Routes 


// First way
// const router = createBrowserRouter([
//   { 
//     path: '/',
//     element: <Layout />,

//     children:[
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])

// Secound way

const router = createBrowserRouter (
  createRoutesFromElements(
    <Route path="/" element={<Layout /> }>
      <Route path="" element={<Home /> } />
      <Route path="about" element={<About /> } />
      <Route path="contact" element={<Contact /> } />
      <Route path="users/:usersID" element={<Users /> } />
      <Route path="github" element={<Github /> } />
      <Route 
      loader={githubInfoLoader}
      path="github" 
      element={<Github /> } />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
