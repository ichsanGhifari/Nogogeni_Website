import styled from 'styled-components';

export const MainContainer = styled.div`
  /* top:0;
  left:0;
  right:0;
  bottom:0; */
  z-index: -1;
  align-items: center;
  /* flex-direction: column; */
  /* height: 100%;
  width: 100%; */
  background: linear-gradient(152.97deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 100%);
  box-shadow: 4px 4px 22px 4px rgba(0, 0, 0, 0.42);
  
  /* filter: blur(5px); */
  backdrop-filter:blur(5px);
  /* filter: blur(3px);
-webkit-filter: blur(3px);
-ms-filter: blur(3px); */
/* filter: url("data:image/svg+xml;utf9,<svg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'><filter%20id='blur'><feGaussianBlur%20stdDeviation='3'%20/></filter></svg>#blur"); */
filter:progid:DXImageTransform.Microsoft.Blur(PixelRadius='3'); 
   
/* Note: backdrop-filter has minimal browser support */
`;


