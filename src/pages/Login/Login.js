import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import './Login.css';

export default function Login() {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState("");

  Axios.defaults.withCredentials = true;

  const login = () => {
    // Axios.post("http://localhost:3001/login", {
    Axios.post("https://examfinal-tallerweback.herokuapp.com/login", {
      username: username,
      password: password,
    }).then((response) => {
      console.log(response);
      if (response.data.loggedIn == true) {
        setLoginStatus(response.data.message);
        localStorage.setItem("id_rol", JSON.stringify(response.data.user));
        navigate("/main");
      } else {
        setLoginStatus(response.data[0].username);
        navigate("/");
      }
    });
  };

  // useEffect(() => {
  //   Axios.get("http://localhost:3001/login").then((response) => {
  //     // Axios.get("https://examfinal-tallerweback.herokuapp.com/login").then((response) => {
  //     if (response.data.loggedIn == true) {
  //       navigate("/main");
  //     }
  //   });
  // }, []);

  return (
    <>
      <div className="login-container">
        <div className="login-subcontainer card border-dark mb-3" style={{ width: "30rem" }}>
          <div className="card-header">
            <h3 className='header-h3'>Iniciar Sesión</h3>
          </div>
          <div className="card-body">
            <div className='form-group'>
              <h5 className="card-title">Nombre de Usuario</h5>
              <input 
                type="text" 
                className="form-control" 
                placeholder="Ingresa tu usuario"
                onChange={(e) => {
                  setUsername(e.target.value)
                }} />

              <h5 className="card-title mt-4">Contraseña</h5>
              <input 
                type="password" 
                className="form-control"  
                placeholder="Ingresa tu contraseña" 
                onChange={(e) => {
                  setPassword(e.target.value)
                }}/>

              <div className="login-boton mt-4">
                <button type="button" onClick={login} class="btn btn-primary btn-lg">Ingresar</button>
              </div>
            </div>
            <span className="login-span">No tienes cuenta? <a href="/registro">Registrate</a></span>
          </div>
        </div>
      </div>
    </>
  )
}