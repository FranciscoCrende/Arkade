
import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/styles-in.css"
const { ipcRenderer } = window.require("electron")





function Login() {

    const navigate = useNavigate()

    function MaximizeNav() {
        ipcRenderer.send('fullscren')
        navigate('/Principal')
    }
  
    return (
        <form className="formulario">
            <h1 id="registerlog_text">INICIAR SESION</h1>
            <div className="contenedor">



                <div className="input-contenedor">
                    <i className="fas fa-envelope icon"></i>
                    <input type="text" placeholder="Correo Electronico" />

                </div>

                <div className="input-contenedor">
                    <i className="fas fa-key icon"></i>
                    <input type="password" placeholder="Contraseña" />

                </div>
                <button onClick={MaximizeNav} className="fullscren">Login</button>
                <p>Al  registrarte ,  aceptas  nuestras  Condiciones  de  uso  y  Políticas  de  privacidad.</p>
                <p>¿No tienes una cuenta? <a className="link" href="/registro">Registrate </a></p>
            </div>
        </form>
    )


}
export default Login;
