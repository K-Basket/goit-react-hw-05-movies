import { Suspense } from 'react';
import { Header, NavLinkStyled } from './LayoutStyled';

const { Outlet } = require('react-router-dom');

const Layout = () => {
  return (
    <>
      <Header>
        <nav>
          <NavLinkStyled to="/">Home</NavLinkStyled>
          <NavLinkStyled to="/movies">Movies</NavLinkStyled>
        </nav>
      </Header>

      <main>
        <Suspense fallback={<div>loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
