import React, { useState } from 'react';
import Axios from 'axios';
import { Link } from 'wouter';
import './Register.css';

function Register() {
  const [usernameReg, setUsernameReg] = useState('')
  const [passwordReg, setPasswordReg] = useState('')

  const register = () => {
    Axios.post("http://localhost:3001/register", {
      username: usernameReg,
      password: passwordReg,
    }).then((response) => {
      console.log(response);
    })
  }

  return (
    <>
      <div className="login-container">
        <div className="login-subcontainer card border-dark mb-3" style={{ width: "30rem" }}>
          <div className="card-header">
            <h3 className='header-h3'>Registrarse</h3>
          </div>
          <div className="card-body">
            <div className='form-group'>
              <h5 className="card-title">Nombre de Usuario</h5>
              <input
                type="text"
                onChange={(e) => {
                  setUsernameReg(e.target.value);
                }}
                className="form-control"
                placeholder="Ingresa tu usuario" />

              <h5 className="card-title mt-4">Contraseña</h5>
              <input
                type="password"
                onChange={(e) => {
                  setPasswordReg(e.target.value);
                }}
                className="form-control"
                placeholder="Ingresa tu contraseña" />

              {/* <h5 className="card-title mt-4">Confirmar Contraseña</h5>
                <input type="password" className="form-control" id="usuario" placeholder="Confirmar Contraseña" /> */}

              <div className="login-boton mt-4">
                <Link to={"/login"}>
                  <button type="button" onClick={register} className="btn btn-primary btn-lg">Registrarse</button>
                </Link>
              </div>
            </div>
            <span className="login-span">Ya tienes cuenta? <a href="/login">Logueate</a></span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register;