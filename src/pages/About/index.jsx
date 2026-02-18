import { useState } from "react";
import {
  AboutContainer,
  Content,
  TextContent,
  ImageContent,
  MoreContent,
  SkillsContainer,
  SkillsList
} from "./styles";

import Header from "../../components/Hearder";
import profileimg from "../../assets/profile.png";import Button from "../../components/Button";
import Footer from "../../components/Footer";

function About() {
  const [showMore, setShowMore] = useState(false);

  return (
    <AboutContainer>
      <Header />

      <Content>
        <TextContent>
          <h1>Sobre Me</h1>
          <h2>Desenvolvedor Full Stack</h2>

          <p>
            Sou Desenvolvedor Full Stack com foco em criar aplicações modernas, organizadas e escaláveis.
            Atuo no desenvolvimento front-end com React, JavaScript e TypeScript, e no back-end com Node.js, sempre buscando código limpo, performance e uma boa experiência para o usuário.
          </p>

          {showMore && (
            <MoreContent>
              <p>
                Tenho como objetivo evoluir constantemente minhas habilidades técnicas, participar de projetos desafiadores e contribuir com soluções que gerem impacto real.
              </p>

              <SkillsContainer>
                <h3>Hard Skills</h3>
                <SkillsList>
                  <span>HTML5</span>
                  <span>CSS3</span>
                  <span>JavaScript</span>
                  <span>React</span>
                  <span>TypeScript</span>
                  <span>Node.js</span>
                  <span>Express</span>
                  <span>MongoDB</span>
                  <span>Git</span>
                  <span>GitHub</span>
                </SkillsList>
              </SkillsContainer>

              <SkillsContainer>
                <h3>Soft Skills</h3>
                <SkillsList>
                  <span>Comunicação</span>
                  <span>Trabalho em equipe</span>
                  <span>Aprendizado contínuo</span>
                  <span>Organização</span>
                  <span>Proatividade</span>
                  <span>Resolução de problemas</span>
                </SkillsList>
              </SkillsContainer>
            </MoreContent>
          )}

          <Button onClick={() => setShowMore(!showMore)}>
            {showMore ? "Ver menos" : "Ver mais"}
          </Button>
        </TextContent>

        <ImageContent>
          <img src={profileimg} alt="Foto de perfil Gabriel de Jesus" />
        </ImageContent>
      </Content>
      <Footer />
    </AboutContainer>
  );
}

export default About;
