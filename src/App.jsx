import React, { useState } from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu';
import styled from 'styled-components';
import { Header, Nav, NavMenu, NavLink as StyledNavLink, HamburgerMenu } from './style-components/Button';
import Home from "./components/home";
import { ButtonVM } from "./style-components/themes";
import SearchPage from "./components/seachPage";
import Celulares from "./components/celulares";
import LoginForm from "./components/Login";
import MediaQuery from 'react-responsive';
import Footer from './components/Footer'; 
import Logo from './style-components/img/Logo.png'

const StyledMenu = styled(Menu)`
  
  .bm-burger-button {
    position: fixed;
    width: 36px;
    height: 30px;
    right: 36px;
    top: 36px;
    z-index: 2000; 
  }

  .bm-burger-bars {
    background: #373a47;
  }

  .bm-cross-button {
    height: 24px;
    width: 24px;
  }

  .bm-cross {
    background: #bdc3c7;
  }

  .bm-menu {
    background: #373a47;
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
    z-index: 10; 
    display: flex;
  }

  .bm-menu a {
    color: #d1d1d1;
    padding: 0.8em;
  }

  .bm-item-list {
    color: #b8b7ad;
  }
`;

function App() {
  const [loginVisible, setLoginVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const toggleLoginForm = () => {
    setLoginVisible(!loginVisible);
  };

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen); 
  };

  return (
    <div>
      <Header>
        <img src={Logo} alt="logo" width="200" height="80" />
        <MediaQuery minWidth={768}>
          <Nav>
            <NavMenu>
              <li>
                <StyledNavLink to="/">Home</StyledNavLink>
              </li>
              <li>
                <StyledNavLink to="/search-page">Store</StyledNavLink>
              </li>
              <ButtonVM className="btn-login" onClick={toggleLoginForm}>
                <a className="btn-a" href="#">Login</a>
              </ButtonVM>
            </NavMenu>
          </Nav>
        </MediaQuery>
        <MediaQuery maxWidth={767}>
          <HamburgerMenu onClick={handleMenuClick}>&#9776;</HamburgerMenu>
          <StyledMenu isOpen={isMenuOpen} right>
            <NavMenu>
              <li>
                <StyledNavLink to="/">Home</StyledNavLink>
              </li>
              <li>
                <StyledNavLink to="/search-page">Store</StyledNavLink>
              </li>
              <ButtonVM className="btn-login" onClick={toggleLoginForm}>
                <a className="btn-a" href="#">Login</a>
              </ButtonVM>
            </NavMenu>
          </StyledMenu>
        </MediaQuery>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search-page" element={<SearchPage />} />
        <Route path="/celulares/:nameCelular" element={<Celulares />} />
      </Routes>
      {loginVisible && <LoginForm onClose={toggleLoginForm} />}
      <Footer /> 
    </div>
  );
}

export default App;
