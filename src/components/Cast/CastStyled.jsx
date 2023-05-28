import styled from 'styled-components';

export const CastsStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 0;

  list-style: none;
`;

export const CastCardStyled = styled.li`
  border-radius: 3px;

  flex-basis: calc((100% - 50px) / 6);

  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);

  & p {
    font-size: 10px;
  }

  & article > div:first-child {
    display: flex;
    justify-content: center;
  }

  & article > div:last-child {
    text-align: center;
    & h5,
    p {
      margin: 0;
      padding: 0;
    }

    & h5 {
      margin-top: 10px;
      margin-bottom: 2px;
    }

    & p {
      margin-bottom: 10px;
    }
  }
`;
