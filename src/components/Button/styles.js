import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 14px 32px;
  width: fit-content;
  background: #38bdf8;
  color: #0f172a;
  font-size: 1rem;
  font-weight: 600;
  margin-top: 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.9;
    background: #0ea5e9;
    transform: translateY(-2px);
  }

  &:active {
    opacity: 0.7;
  }

  @media (max-width: 900px) {
    align-self: center;
    width: 100%; 
    max-width: 300px;
  }
`;