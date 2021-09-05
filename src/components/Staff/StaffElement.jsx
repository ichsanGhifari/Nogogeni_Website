import styled from "styled-components";

export const Card = styled.div`
  cursor: ${({isOpen})=> (isOpen?"text":"pointer")};
  opacity: 100;
  -webkit-transition:background 0.5s ease,width 0.4s ease-in-out ;
  -moz-transition:background 0.5s ease-in,width 0.4s ease-in-out;
  -o-transition:background 0.5s ease-in,width 0.4s ease-in-out;
  transition:background 0.4s linear 0.2s ,width 0.4s ease-in-out;
  background: ${({ isOpen }) =>
    isOpen
      ? "linear-gradient(to right, white 2px, transparent 2px) 0 100%, linear-gradient(to right, white 2px, transparent 2px) -583% 100%, linear-gradient(to top, white 2px, transparent 2px) 0% 100%"
      : ""};    
  border:${({isOpen})=> (isOpen?"2px solid rgba(255, 255, 255,0)":"2px solid rgba(255, 255, 255,1)")};    
  border-radius:7px;
  background-repeat: no-repeat;
  width:${({isOpen})=> (isOpen?"20rem":" 10rem")};
  margin:0 auto;
  background-size: 370px 35px;
`;
