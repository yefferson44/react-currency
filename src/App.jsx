import { Menu } from "./components/menu/Menu"
import { Outlet, Navigate } from "react-router-dom"


function App(){

    if(!localStorage.getItem('tokenEdMarket')){
        return <Navigate to="/login" />
    }

    return(
        <> 
            <Menu />
            <Outlet></Outlet>
        </>
    )
}

export default App