import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import history from "../../services/history";
import logo from "../../assets/logo-semfundo.png";
import Verificar from "./Verifica_login";
import {useForm } from 'react-hook-form';
function SignIn() {
  const history = useHistory();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const {register,handleSubmit} = useForm();
    async function Login(data) {
   
      if (data.email !== "" && data.pass !== "") {
        
        await Verificar(data.email, data.pass).then((results) => {
         
          if (results.validacao) {
      
            history.push("/home")

          } else if (results == false) {
            console.log("Não foi possivel efetuar login");
           
          } else if (results == null) {
     
            console.log("Erro Critico!");
          }
        });
      } else {
        
      }
    }
  
  return (
    <>
      <img src={logo} />
      <form onSubmit={handleSubmit(Login)}>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
         ref={register}
        />
        <input
          type="password"
          id="pass"
          name="pass"
          placeholder="Senha"
          ref={register}
        />
        <button type="submit">Acessar</button>
        <Link to="/register">Criar Conta</Link>
      </form>
    </>
  );
}

export default SignIn;
