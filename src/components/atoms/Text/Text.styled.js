import styled from 'styled-components';

const SCText = styled.p`
  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'none')};
  font-style: ${({ fontStyle }) => fontStyle};
  text-align: ${({ textAlign }) => textAlign};
  color: ${({ color }) => color};
`;

export { SCText };
