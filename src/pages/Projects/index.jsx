import { useState } from "react";
import Header from "../../components/Hearder";
import { projects } from "../../data/projects";

import {
  ProjectsContainer,
  Content,
  ProjectsGrid,
  ProjectCard,
  ProjectImage,
  ProjectInfo,
  MoreButton,
  TechList,
  ProjectModal,
  ModalContent,
  Carousel,
  Arrow
} from "./styles";
import Footer from "../../components/Footer";

function Projects() {
  const [openProject, setOpenProject] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);

  const selectedProject = projects.find(
    (project) => project.id === openProject
  );

  const nextImage = () => {
    if (!selectedProject) return;

    setCurrentImage((prev) =>
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    if (!selectedProject) return;

    setCurrentImage((prev) =>
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
  };

  return (
    <ProjectsContainer>
      <Header />

      <Content>
        <h1>Projetos</h1>

        <ProjectsGrid>
          {projects.map((project) => (
            <ProjectCard key={project.id}>
              <ProjectImage>
                <img
                  src={project.images[0]}
                  alt={project.title}
                />
              </ProjectImage>

              <ProjectInfo>
                <h2>{project.title}</h2>

                <MoreButton
                  onClick={() => {
                    setOpenProject(project.id);
                    setCurrentImage(0);
                  }}
                >
                  Ver mais
                </MoreButton>
              </ProjectInfo>
            </ProjectCard>
          ))}
        </ProjectsGrid>
        </Content>

              {selectedProject && (
                <ProjectModal onClick={() => setOpenProject(null)}>
                  <ModalContent onClick={(e) => e.stopPropagation()}>
                  <Carousel>
                    {selectedProject.images.length > 1 && (
                      <Arrow left onClick={prevImage}>
                      ❮
                      </Arrow>
                  )}

                  <img
                    src={selectedProject.images[currentImage]}
                    alt={selectedProject.title}
                  />

                  {selectedProject.images.length > 1 && (
                    <Arrow onClick={nextImage}>
                      ❯
                    </Arrow>
                  )}
                </Carousel>

              <h2>{selectedProject.title}</h2>
              <p>{selectedProject.description}</p>

              <TechList>
                {selectedProject.techs.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </TechList>

              <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
                {selectedProject.repository && (
                  <MoreButton
                    onClick={() =>
                      window.open(selectedProject.repository, "_blank")
                    }
                  >
                    Ver Repositório
                  </MoreButton>
                )}

                <MoreButton onClick={() => setOpenProject(null)}>
                  Fechar
                </MoreButton>
              </div>
            </ModalContent>
          </ProjectModal>
        )}

      <Footer />
    </ProjectsContainer>
  );
}

export default Projects;
