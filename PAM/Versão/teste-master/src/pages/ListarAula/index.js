import React, {useState,useEffect} from "react";
import { HiPencil, HiOutlineTrash } from "react-icons/hi";
import { Container } from "./styles";
import { Link, useHistory, List } from "react-router-dom";
import Lista from "../../components/Header/ListAulas/index"
import axios from 'axios'
function ListarAula() {
  
  const history = useHistory();

   const [Materias, setMaterias] = useState([])

  function cadastrar(){
     
  
     axios.post('http://localhost:3333/Trazer').then((resultado) => {
     
     setMaterias(resultado.data.rows)
    })

    }
    useEffect(() => {
      cadastrar()
        
    }, [])

  console.log(Materias)
  return (

   <ul>{
    Materias.map((results) =>{
      return  <Lista key={results.id}
                  value={results} />
    })}
    </ul>



    );


}

export default ListarAula;
