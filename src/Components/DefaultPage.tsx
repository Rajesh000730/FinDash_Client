import Navbar from "../scenes/navbar"
import { Outlet } from "react-router-dom"
function DefaultPage() {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default DefaultPage