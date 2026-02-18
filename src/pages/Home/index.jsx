import { 
  Container, 
  Content, 
  TextContent, 
  SocialLinks,
  ImageContent
} from "./styles.js";

import Header from "../../components/Hearder";
import profileimg from "../../assets/profile.png";
import Button from "../../components/Button";
import pdfArquivo from '../../assets/curriculo.pdf';

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Footer from "../../components/Footer";

function Home() {
  const viewCurriculo = () => {
    window.open(pdfArquivo, '_blank');
  };

  return (
    <Container>
      <Header />

      <Content>
        <TextContent>
          <span>Olá, Eu sou</span>
          <h1>Gabriel de Jesus</h1>
          <h2>Desenvolvedor FullStack</h2>
          
          <p>Bem-vindo ao meu portfólio.
          Sou Desenvolvedor Full Stack e crio aplicações modernas e funcionais com React e Node.js, focando em performance, organização e experiência do usuário.</p>

          <SocialLinks> 
            <a href="https://github.com/Gabriieljesus"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/gabrieljesus-silva/"><FaLinkedinIn /></a>
          </SocialLinks>

        <Button onClick={viewCurriculo}>Ver curriculo</Button>
        
        </TextContent>
        <ImageContent>
            <img src={profileimg} alt="Foto de perfil Gabriel de Jesus" />
        </ImageContent>

       
      </Content>
       <Footer />
    </Container>
  );
}

export default Home;
