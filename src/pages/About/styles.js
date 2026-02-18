import styled from "styled-components";

export const AboutContainer = styled.section`
  width: 100%;
  min-height: 100vh;
  background: #0b1120;
  color: #cbd5f5;

  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  align-items: center; /* Mudei para center para alinhar melhor */
  justify-content: space-between;
  padding: 100px 10%;
  margin-top: 80px;
  gap: 100px;

  /* Responsividade Robusta */
  @media (max-width: 1024px) {
    padding: 100px 5%; /* Menos padding lateral em tablets */
    gap: 50px;
  }

  @media (max-width: 900px) {
    flex-direction: column-reverse; /* Imagem em cima, texto embaixo (opcional, ou column normal) */
    text-align: center;
    align-items: center;
    justify-content: center;
    padding: 80px 20px; /* Padding seguro para mobile */
    margin-top: 40px;
  }
`;


export const TextContent = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;

  /* Home Styles */
  span {
    color: #38bdf8;
    font-size: 30px;
    margin-bottom: 8px;
  }
  
  h1 {
    font-size: 3rem; /* 48px */
    color: #38bdf8;
    margin-bottom: 10px;
  }

  h2 {
    font-size: 1.5rem;
    color: #94a3b8;
    margin-bottom: 20px;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    color: #cbd5f5;
    margin-bottom: 25px;
  }

  @media (max-width: 900px) {
    align-items: center;
    max-width: 100%;

    span { font-size: 20px; }
    h1 { font-size: 2.2rem; line-height: 1.2; }
    h2 { font-size: 1.2rem; }
    p { font-size: 0.95rem; text-align: center; }
  }
`;

export const MoreContent = styled.div`
  margin-top: 5px;

  p {
    margin-bottom: 10px;
    line-height: 1.6;
    color: #e2e8f0;
  }
`;

export const SkillsContainer = styled.div`
  margin-top: 15px;
  gap: 7px;

  h3 {
    font-size: 1.2rem;
    margin-bottom: 10px;
    color: #38bdf8;
  }
`;

export const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  
  @media (max-width: 900px) {
    justify-content: center;
  }

  span {
    padding: 8px 16px;
    font-size: 0.9rem;
    font-weight: 500;
    color: #38bdf8;
    border: 1px solid #38bdf8;
    border-radius: 999px;
    background: rgba(56, 189, 248, 0.08);
    transition: all 0.3s ease;

    &:hover {
      background: #38bdf8;
      color: #0b1120;
      transform: translateY(-2px);
    }
  }
`;

export const ImageContent = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 0; 
  position: relative;

  img {
    width: 320px;
    max-width: 100%;
    margin-top: 8px;
    height: auto;
    border-radius: 20px;
    border: 4px solid #38bdf8;
    box-shadow: 0 0 25px #38bdf8;
  }

  @media (min-width: 1200px) {
    margin-right: 100px; 
  }

  @media (max-width: 768px) {
    margin-right: 0;
    margin-top: 20px;
    
    img {
      width: 250px;
      max-width: 80vw;
    }
  }
`;
