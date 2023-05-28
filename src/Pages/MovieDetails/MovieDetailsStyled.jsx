import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 0px 20px 20px 20px;
  margin-bottom: 15px;

  border-bottom: 1px solid gray;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
`;

export const MovieDescript = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 40px;

  margin: 0;
  padding: 0;

  list-style: none;

  /* background-color: #e7e7e7; // --temp */

  & > li:first-child {
    min-width: 25%;
    max-width: 25%;

    /* outline: 1px solid salmon; */

    & img {
      box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
        0px 4px 5px 0px rgba(0, 0, 0, 0.14),
        0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    }
  }

  & > li:last-child {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  & > li:last-child > div > ul {
    display: flex;
    gap: 5px;
    /* width: 700px; */

    margin: 0;
    padding: 0;
    list-style: none;
  }
`;

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

export const LinkBackStyled = styled(Link)`
  display: inline-block;
  margin-bottom: 15px;
  padding: 6px 16px;
  border-radius: 4px;
  text-decoration: none;
  /* color: black; */
  color: white;
  background-color: orangered;
  font-weight: 500;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
