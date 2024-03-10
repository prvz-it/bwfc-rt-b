import React from 'react';
import Home from './pages/Home';
import Product from './pages/Product';
import Template from './pages/Template';
import Blog from './pages/Blog';
import Pricing from './pages/Pricing';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import Layout from './components/root/Layout';

const prvz = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout/>}>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/product' element={<Product/>}></Route>
    <Route path='/template' element={<Template/>}></Route>
    <Route path='/blog' element={<Blog/>}></Route>
    <Route path='/pricing' element={<Pricing/>}></Route>
  </Route>
))

function App () {
  return (
    <>
      <RouterProvider router={prvz}></RouterProvider>
    </>
  )
}

export default App
