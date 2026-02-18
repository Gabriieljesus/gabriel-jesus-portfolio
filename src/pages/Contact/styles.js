import styled from "styled-components";

export const ContactContainer = styled.section`
  width: 100%;
  min-height: 100vh;
  background: #0b1120;
  color: #cbd5f5;
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 120px 24px;
  display: flex;
  gap: 120px;

  @media (max-width: 1024px) {
    gap: 60px;
    padding: 100px 40px;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 80px 20px;
    gap: 40px;
  }
`;

export const LeftSide = styled.div`
  flex: 1;

  h1 {
    font-size: 3rem;
    color: #38bdf8;
    margin-bottom: 24px;
  }

  p {
    margin-bottom: 32px;
    line-height: 1.6;
    max-width: 400px;
  }

  @media (max-width: 900px) {
    text-align: center;
    
    p {
      max-width: 100%;
    }
    
    h1 {
      font-size: 2.2rem;
    }
  }
`;

export const InfoItem = styled.div`
  margin-bottom: 16px;

  strong {
    display: block;
    color: #38bdf8;
    margin-bottom: 4px;
  }

  span {
    color: #e2e8f0;
  }
`;

export const RightSide = styled.div`
  flex: 1;
  width: 100%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 14px 16px;
  background: #131d36;
  border: 1px solid #1e293b;
  border-radius: 10px;
  color: #fff;
  font-size: 1rem;
  outline: none;
  transition: 0.3s;

  &:focus {
    border-color: #38bdf8;
    box-shadow: 0 0 10px #38bdf8;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 14px 16px;
  background: #131d36;
  border: 1px solid #1e293b;
  border-radius: 10px;
  color: #fff;
  font-size: 1rem;
  resize: vertical;
  min-height: 120px;
  outline: none;
  transition: 0.3s;

  &:focus {
    border-color: #38bdf8;
    box-shadow: 0 0 10px #38bdf8;
  }
`;

export const SubmitButton = styled.button`
  padding: 14px;
  background: transparent;
  border: 2px solid #38bdf8;
  color: #38bdf8;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #38bdf8;
    color: #0b1120;
  }
`;
