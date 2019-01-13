import styled from 'styled-components';

const FadeIn = styled.div`
  opacity: ${props => props.loaded ? 1 : 0};
  transition: opacity 1s ease-in-out;
`;

export default FadeIn;