import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ListStyled = styled.ul`
  /* margin: 0; */
  /* margin-left: 20px; */
  /* padding: 0; */
  /* list-style: none; */

  & li {
    margin-bottom: 5px;
  }
`;

export const LinkStyled = styled(Link)`
  color: black;
  text-decoration: none;

  &:hover {
    color: red;
  }
`;
