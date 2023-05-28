import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ListStyled = styled.ul`
  color: blue;

  /* & li {
    margin-bottom: 5px;
  } */
`;

export const LinkStyled = styled(Link)`
  color: blue;
  text-decoration: none;

  &:hover {
    color: red;
  }
`;
