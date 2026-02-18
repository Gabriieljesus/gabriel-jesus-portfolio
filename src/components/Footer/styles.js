import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  min-height: 70px;
  padding: 20px; 
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed; 
  bottom: 0;
  left: 0;
  z-index: 1000;
  background: #131d36;
  color: #cbd5f5;
  border-top: 1px solid #1e293b;

  p {
    font-size: 14px;
    letter-spacing: 1px;
    text-align: center;
    margin: 0;
  }

  @media (max-width: 768px) {
    min-height: 60px;
    p {
      font-size: 12px;
    }
  }
`;
