import React, { useState } from "react";
import axios from 'axios';
import { Container } from "./styles";
import {useForm } from 'react-hook-form';
function AdicionarAula() {
  let Manha = false;
  let Tarde = false;
  let Noite = false;



  const [Materia, setMateria] = useState('')
  const [Descricao, setDescricao] = useState('')
  const {register,handleSubmit} = useForm();

   function cadastrar(data){
  
 
   
      axios.post('http://localhost:3333/Cadastrar',
        {
            "Name": data.Materia,
            "Desc": data.Desc,
            "Periodo": [
              {
                "Manha": data.Manha
              },
              {
                "Tarde":data.Tarde
              },
              {
                "Noite": data.Noite
              }
            ]
        }
      ).then(resul => console.log(resul))

  

   }

  return (
    <Container>
      <form onSubmit={handleSubmit(cadastrar)} >
        <input type="text" ref={register} id="Materia" name="Materia"  placeholder="Matéria" value={Materia} onChange={event =>{setMateria(event.target.value)}}/>
        <textarea id="desc" ref={register} name="Desc" placeholder="Descreva sua Matéria" value={Descricao} onChange={event =>{setDescricao(event.target.value)}} />
        <h2>Periodo</h2>
        <div className="divcheckbox">
          <div>
            <h3>Manhã</h3>
            <input
              type="checkbox"
              id="Manha"
              name="Manha"
              className="checkbox"
              ref={register}
              onChange={(event) => {
                Manha = event.target.checked;
              }}
            />
          </div>
          <div>
            <h3>Tarde</h3>
            <input
              type="checkbox"
              id="Tarde"
              name="Tarde"
              ref={register}
              className="checkbox"
              onChange={(event) => {
                Tarde = event.target.checked;
              }}
            />
          </div>
          <div>
            <h3>Noite</h3>
            <input
              type="checkbox"
              id="Noite"
              name="Noite"
              ref={register}
              className="checkbox"
              onChange={(event) => {
                Noite = event.target.checked;
              }}
            />
          </div>
        </div>

        <button type="submit">Adicionar Aula</button>
     
      </form>
    </Container>
  );
}

export default AdicionarAula;
