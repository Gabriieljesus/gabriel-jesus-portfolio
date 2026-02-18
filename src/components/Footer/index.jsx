import { Container } from "./styles";

function Footer() {
  return (
    <Container>
      <p>
        Desenvolvido por Gabriel Jesus © {new Date().getFullYear()} — Desenvolvedor Fullstack
      </p>
    </Container>
  );
}

export default Footer;
