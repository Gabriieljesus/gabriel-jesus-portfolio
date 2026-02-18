import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 80px;
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #131d36;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  h1 {
    font-size: 1.4rem;
    font-weight: 600;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    padding: 0 20px;
    height: 70px;
    
    h1 {
      font-size: 1.1rem;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 32px;

  @media (max-width: 768px) {
    gap: 12px; 
  }
`;

export const NavItem = styled.span`
  color: ${({ $active }) => ($active ? "#38bdf8" : "#cbd5f5")};
  font-size: 1rem;
  font-weight: ${({ $active }) => ($active ? "700" : "600")};
  cursor: pointer;
  transform: ${({ $active }) => ($active ? "scale(1.15)" : "scale(1)")};
  transition: all 0.3s ease;

  &:hover {
    color: #38bdf8;
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;


