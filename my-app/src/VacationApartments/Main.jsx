import { BrowserRouter } from "react-router-dom";
import { Nav } from "./Nav";
import { Routing } from "./Routing";
import { Menu } from "./menu";


export const Main = () => {
    return <>
        <BrowserRouter> 
            <Nav ></Nav>
            {/* <Menu></Menu> */}
            <Routing></Routing>
            
        </BrowserRouter>
    </>
}