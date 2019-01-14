import styled from "styled-components";

const PageBackground = styled.div`

  ${({ backgroundsLoaded, backgroundImage }) => backgroundsLoaded && `
    background-image: url('${backgroundImage}');
  `}

  background-repeat: no-repeat;
  background-position: center center;
  transition: background-position 0.6s cubic-bezier(0.22, 0.7, 0.53, 0.96);
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  z-index: 0;
  transform: translateZ(0);
  pointer-events: none;

  ::before {
    content: "";
    background-color: rgba(0, 0, 0, 0.3);
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }
`;

export default PageBackground;
