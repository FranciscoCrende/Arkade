import React from "react";
import "../styles/styles-in.css"

function Register() {
    return (

        <div>
            <form className="formulario">
                <h1 id="registerlog_text" >Registrate</h1>
                <div className="contenedor">
                    <div className="input-contenedor">
                        <i className="fas fa-user icon"></i>
                        <input type="text" placeholder="Nombre Completo" />

                    </div>

                    <div className="input-contenedor">
                        <i className="fas fa-envelope icon"></i>
                        <input type="text" placeholder="Correo Electronico" />

                    </div>

                    <div className="input-contenedor">
                        <i className="fas fa-key icon"></i>
                        <input type="password" placeholder="Contraseña" />

                    </div>
                    <input type="submit" value="Registrate" className="button" />
                    <p>Al registrarte, aceptas nuestras Condiciones de uso y Política de privacidad.</p>
                    <p>¿Ya tienes una cuenta?<a className="link" href="log-in.html">Iniciar Sesion</a></p>
                </div>
            </form>
        </div>
    )
}

export default Register;