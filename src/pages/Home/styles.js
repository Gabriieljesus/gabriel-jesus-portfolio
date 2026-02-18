import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #0b1120;
  
  display: flex;
  flex-direction: column;
`;

export const Content = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 100px 10%;
  margin-top: 80px;
  gap: 100px;

  @media (max-width: 1024px) {
    padding: 100px 5%; 
    gap: 50px;
  }

  @media (max-width: 900px) {
    flex-direction: column-reverse; 
    text-align: center;
    align-items: center;
    justify-content: center;
    padding: 80px 20px; 
    margin-top: 40px;
  }

`;

export const TextContent = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;

  span {
    color: #38bdf8;
    font-size: 30px;
    margin-bottom: 8px;
  }
  
  h1 {
    font-size: 3rem; 
    color: #fff;
    margin-bottom: 10px;
  }

  h2 {
    font-size: 1.5rem;
    color: #38bdf8; 
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

export const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 25px;

  @media (max-width: 900px) {
    justify-content: center;
  }

  a {
    width: 45px;
    height: 45px;
    border: 2px solid #38bdf8;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #38bdf8;
    font-size: 20px;
    transition: 0.3s;
  }

  a:hover {
    background: #38bdf8;
    color: #0b1120;
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
