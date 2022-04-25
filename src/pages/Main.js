import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

import Normal from "../components/normalpage/Normal";
import Empresa from "../components/empresapage/Empresa";

export default function Main() {

  const navigate = useNavigate();

  const [role, setRole] = useState("");

  Axios.defaults.withCredentials = true;
  useEffect(() => {
    var avion = JSON.parse(localStorage.getItem("id_rol"));
    setRole(avion[0].idrol);
    // Axios.get("http://localhost:3001/login").then((response) => {
    //   // Axios.get("https://examfinal-tallerweback.herokuapp.com/login").then((response) => {
    //   if (response.data.loggedIn == true) {
    //     setRole(response.data.user[0].role);
    //   }
    // });
  }, []);

  const deslog = () => {
    Axios.get("http://localhost:3001/logout").then((response) => {
      if (response.data.loggedIn == false) {
        navigate("/login");
      }
    });
  }

  return (
    <div>
      {role == "3" && <Normal />}
      {role == "2" && <Empresa />}
      <button type="button" onClick={deslog} class="btn btn-primary btn-lg">Cerrar Sesión</button>
    </div>
  );
}