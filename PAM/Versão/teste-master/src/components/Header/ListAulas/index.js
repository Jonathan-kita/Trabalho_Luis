import React from "react";
import { HiPencil, HiOutlineTrash } from "react-icons/hi";
import { Container } from "./styles";
import { Link, useHistory } from "react-router-dom";
import axios from 'axios'
function ListarAula(props) {
  console.log(props)
  const history = useHistory();

  let manha = props.value.periodo_manha;
  let tarde = props.value.periodo_tarde;
  let noite = props.value.periodo_noite;

  function deletar(){
    axios.post('http://localhost:3333/Deletar',
    {
        "id":props.value.id     
        
    }
  
  ).then(resul => console.log(resul))

  window.location.reload(false);
  }
  
  if(manha){
    manha = "manha"
  }else{manha = ""}
  if(tarde){
    tarde = "tarde"
  }else{tarde = ""}
  if(noite){
    noite = "noite"
  }else{noite = ""}

  return (
    <Container>
      <ul>
        <li>
          <div>
            <strong>
                 {props.value.name}
            </strong>
            <div>
              <p>descrição</p>
             <p>{props.value.descricao}</p> 
            
            </div>
            <div>
              <p>periodo: </p>
                <p>{manha}</p>
                <p>{tarde}</p>
                <p>{noite}</p>
                
              </div>
          </div>
          <nav>
            <button
              onClick={() => {
                 history.push("/editarAula",props);
              }}
            >
              <HiPencil size={20} color="#81b214" />
            </button>
            <button onClick={deletar}>
              <HiOutlineTrash size={20} color="#ec5858" />
            </button>
          </nav>
        </li>
      </ul>
    </Container>
  );
}

export default ListarAula;
