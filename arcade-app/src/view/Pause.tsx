
import { useNavigate } from "react-router-dom";
import Menus from "../components/Menus";
import Menu from "../models/Menu";


function Pause({toExit}:{toExit:()=>void}) {
    const navigate = useNavigate()

    let menus: Menu[] = [
        { title: "Salir al menu", function: () => navigate("/galagaMenu") },
        { title: "Ir a tienda", function: () => navigate("/Store") },
        { title: "Reanudar", function: toExit },
    ]
    return (

        <div className='menuP' style={{ 
            display: "flex",
            height: "100%",
            flexDirection: "column",
            justifyContent: "center",
           
         }}>

                <h1 style={{ 
                    
                    textAlign:"center",
                    fontSize:"50px",
                  
                    
                 }}>Pausa</h1>
            
            
            <Menus menus={menus} />
        </div>
    )
}
export default Pause;