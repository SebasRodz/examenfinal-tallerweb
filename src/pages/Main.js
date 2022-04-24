import React, { useEffect, useState } from "react";
import Axios from "axios";

import Normal from "../components/normalpage/Normal";
import Empresa from "../components/empresapage/Empresa";
import Admin from "../components/adminpage/Admin";

export default function Main() {
  const [role, setRole] = useState("");

  Axios.defaults.withCredentials = true;
  useEffect(() => {
    Axios.get("https://examfinal-tallerweback.herokuapp.com/login").then((response) => {
      if (response.data.loggedIn == true) {
        setRole(response.data.user[0].role);
      }
    });
  }, []);

  return (
    <div>
      {role == "normal" && <Normal />}
      {role == "empresa" && <Empresa />}
      {role == "admin" && <Admin />}
    </div>
  );
}