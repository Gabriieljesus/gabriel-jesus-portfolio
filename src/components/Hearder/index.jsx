import { Container, Nav, NavItem } from "./styles";
import { useNavigate, useLocation } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Container>
      <h1 onClick={() => navigate("/")}>Gabriel Jesus</h1>

      <Nav>
        <NavItem
          $active={location.pathname === "/"}
          onClick={() => navigate("/")}
        >
          Home
        </NavItem>

        <NavItem
          $active={location.pathname === "/about"}
          onClick={() => navigate("/about")}
        >
          Sobre
        </NavItem>

        <NavItem
          $active={location.pathname === "/projects"}
          onClick={() => navigate("/projects")}
        >
          Projetos
        </NavItem>

        <NavItem
          $active={location.pathname === "/contact"}
          onClick={() => navigate("/contact")}
        >
          Contato
        </NavItem>
      </Nav>
    </Container>
  );
}

export default Header;
