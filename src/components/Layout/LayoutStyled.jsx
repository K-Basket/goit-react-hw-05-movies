import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 10px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid gray;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);

  & nav {
    display: flex;
    gap: 15px;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  padding: 6px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  &.active {
    color: white;
    background-color: orangered;
  }
`;
