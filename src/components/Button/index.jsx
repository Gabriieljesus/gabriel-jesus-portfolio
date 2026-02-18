import { StyledButton } from "./styles.js";

function Button({ children, onClick, href, download }) {
  if (href) {
    return (
      <StyledButton
        as="a"
        href={href}
        download={download}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </StyledButton>
    );
  }

  return (
    <StyledButton onClick={onClick}>
      {children}
    </StyledButton>
  );
}

export default Button;
