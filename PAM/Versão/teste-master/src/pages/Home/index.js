import React from "react";
import { HiPencil, HiPlus, HiOutlineTrash } from "react-icons/hi";
import { FiInfo } from "react-icons/fi";
import { Container } from "./styles";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <Container>
      <ul>
        <Link to="/AdicionarAula">
          <HiPlus size={25} color="#7159c1" />
          <strong>Adicionar Aula</strong>
        </Link>
        <Link to="/ListarAula">
          <HiPencil size={25} color="#7159c1" />
          <strong>Editar Aula</strong>
        </Link>
        <Link to="/ListarAula">
          <FiInfo size={25} color="#7159c1" />
          <strong>Ver Aulas </strong>
        </Link>
        <Link to="/ListarAula">
          <HiOutlineTrash size={25} color="#7159c1" />
          <strong>Excluir Aula</strong>
        </Link>
      </ul>
    </Container>
  );
}

export default Dashboard;
