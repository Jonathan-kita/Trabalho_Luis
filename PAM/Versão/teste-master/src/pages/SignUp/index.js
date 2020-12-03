import React from "react";
import { Link } from "react-router-dom";
import history from "../../services/history";
import logo from "../../assets/logo-semfundo.png";
function SignUp() {
  return (
    <>
      <img src={logo} alt="ETEC" />
      <form>
        <input type="text" id="nome" name="nome" placeholder="Nome" />
        <input type="email" id="email" name="email" placeholder="E-mail" />
        <input type="text" id="senha" name="senha" placeholder="Senha" />
        <input type="text" id="funcao" name="funcao" placeholder="Função" />
        <div>
          <h3>Horário</h3>
          <input
            type="time"
            id="horario"
            name="horario"
            placeholder="Horário"
          />
        </div>
        <select>
          <option>Dias trabalhados</option>
          <option>SEG à SEX</option>
          <option>SEG à SAB</option>
          <option>SEG à DOM</option>
          <option>SEG à SEG</option>
          <option>SEG à TER</option>
          <option>SEG à QUA</option>
          <option>SEG à QUI</option>
        </select>
        <button onClick={() => history.push("/home")}>Cadastrar-se</button>
        <Link to="/">Já possuo conta</Link>
      </form>
    </>
  );
}

export default SignUp;
