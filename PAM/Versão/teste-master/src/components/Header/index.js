import React from "react";
import { Link } from "react-router-dom";

import { Container, Content } from "./styles";

import logo from "../../assets/logo.jpeg";

function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <Link to="/home">
            <img src={logo} alt="ETEC" />
            HOME
          </Link>
        </nav>
      </Content>
    </Container>
  );
}

export default Header;
