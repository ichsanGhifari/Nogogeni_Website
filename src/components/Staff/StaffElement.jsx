import styled from "styled-components";

export const Card = styled.div`
  max-height: 85px;
  cursor: ${({ isOpen }) => (isOpen ? "text" : "pointer")};
  -webkit-transition: background 0.2s linear 0.3s, width 0.4s ease-in-out,
    opacity 0.3s ease-in-out;
  -moz-transition: background 0.2s linear 0.3s, width 0.4s ease-in-out,
    opacity 0.3s ease-in-out;
  -o-transition: background 0.2s linear 0.3s, width 0.4s ease-in-out,
    opacity 0.3s ease-in-out;
  transition: background 0.2s linear 0.3s, width 0.4s ease-in-out,
    opacity 0.3s ease-in-out;
  background: ${({ isOpen }) =>
    isOpen
      ? "linear-gradient(to right, rgb(255,255,255,1) 2px, transparent 2px) 0 100%, linear-gradient(to left, rgb(255,255,255,1) 2px, transparent 2px) 95% 100%, linear-gradient(to top, rgb(255,255,255,1) 2px, transparent 2px) 0% 100%"
      : ""};
    
  border: ${({ isOpen }) =>
    isOpen
      ? "2px solid rgba(255, 255, 255,0)"
      : "2px solid rgba(255, 255, 255,1)"};
  border-radius: 7px;
  background-repeat: no-repeat;
  width: ${({ isOpen }) => (isOpen ? "20rem" : " 10rem")};
  margin: 0 auto;
  background-size: 330px 35px;
`;
