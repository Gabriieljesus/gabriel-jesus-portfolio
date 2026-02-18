import styled from "styled-components";

export const ProjectsContainer = styled.section`
  width: 100%;
  min-height: 100vh;
  background: #0b1120;
  color: #cbd5f5;
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 120px 24px 60px;

  h1 {
    font-size: 3rem;
    color: #38bdf8;
    margin-bottom: 60px;
  }

  @media (max-width: 600px) {
    padding: 80px 20px 40px;
    
    h1 {
      font-size: 2.2rem;
      text-align: center;
      margin-bottom: 40px;
    }
  }
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;


export const ProjectCard = styled.div`
  background: #131d36;
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-8px);
  }
`;

export const ProjectImage = styled.div`
  height: 180px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ProjectInfo = styled.div`
  padding: 20px;

  h2 {
    margin-bottom: 16px;
    color: #e2e8f0;
  }
`;

export const MoreButton = styled.button`
  padding: 10px 22px;
  background: transparent;
  color: #38bdf8;
  border: 2px solid #38bdf8;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #38bdf8;
    color: #0b1120;
  }
`;

export const ProjectModal = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(11, 17, 32, 0.6);
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

export const ModalContent = styled.div`
  background: #131d36;
  padding: 24px;
  border-radius: 20px;
  max-width: 700px;
  width: 90%; 
  max-height: 90vh;
  overflow-y: auto;
  text-align: center;
  position: relative;

  img {
    width: 100%;
    max-height: 300px;
    object-fit: cover;
    border-radius: 12px;
  }

  @media (max-width: 600px) {
    padding: 20px 16px;

    img {
      max-height: 200px;
    }
  }
`;


export const Carousel = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 20px;
`;

export const Arrow = styled.button`
  position: absolute;
  top: 50%;
  ${({ left }) => (left ? "left: -20px" : "right: -20px")};

  transform: translateY(-50%);
  background: #38bdf8;
  color: #0b1120;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    transform: translateY(-50%) scale(1.1);
  }
`;

export const TechList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;

  span {
    padding: 6px 14px;
    border-radius: 999px;
    font-size: 0.75rem;
    border: 1px solid #38bdf8;
    color: #38bdf8;
    background: rgba(56, 189, 248, 0.08);
  }
`;
