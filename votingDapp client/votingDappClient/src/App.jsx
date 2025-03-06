import Web3Provider from './context/web3Provider'
import './App.css'
import { router } from './routes/router'
import {RouterProvider }from "react-router-dom"

function App() {


  return (
    <>
    <Web3Provider>
      <RouterProvider router={router}></RouterProvider>
     

      </ Web3Provider>
   </>
  )
}

export default App
