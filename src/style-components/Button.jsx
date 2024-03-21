// style-components.js
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const Button = styled.button`
  display: flex;
  background: radial-gradient(#eeff56, #33570b);
  flex-direction: row;
  align-items: center;
  border: none;
  padding: 8px;
  border-color: black;
  justify-content: space-between;
  border-radius: 8px;
  position: relative;
  z-index: 0;
  transform: scale(1);
  transition: 2s;

  &:hover {
    transform: scale(1.1);
    transition: 2s;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-color: black;
    border-radius: 8px;
    background: linear-gradient(-45deg, #ff92eb, #a7d4ff, #93ff85, #003044);
    backdrop-filter: blur(50px);
    z-index: -1;
    background-size: 400% 400%;
    animation: ${gradientAnimation} 15s ease infinite;
  }
`;

export const Header = styled.header`
  display: flex;
  background: transparent;
  flex-direction: row;
  align-items: center;
  padding: 1px;
  justify-content: space-between;
  position: relative;
  z-index: 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(-55deg, #ffdbf8d3, #c6f6ff8f, #a2f4ff, #3fc5ff5a);
    backdrop-filter: blur(50px);
    z-index: -1;
    background-size: 400% 400%;
    animation: ${gradientAnimation} 15s ease infinite;
  }
`;

export const StyleLink = styled(Link)`
  color: #1a1a1a;
`;

export const LinkBtn = styled(Button)`
  background-color: #ff2600;
`;

export const ColorBtn = styled.button`
  background: linear-gradient(#000000, #0000009f);
  color: #fff;
  border-radius: 9px;
  border: none;
  justify-content: center;
  padding: 20px 20px;
  font-size: 20px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    margin: 0 1rem;
  }
`;

export const NavLink = styled(Link)`
  color: #1a1a1a;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: #4d4d4d;
  }
`;

export const HamburgerMenu = styled.div`
  display: none;
  cursor: pointer;
  width: 1px;
  font-size: 4rem;
  position: relative;
  top: 0;
  right: -45px; 
  z-index: 140;

  @media (max-width: 767px) {
    display: inline-block;
    z-index: 140;
    position: relative;
  }
`;

export const Card = styled.header`
  border-radius: 10px;
  margin: 1% 30%;
  padding: 20px 40px;
  background: radial-gradient(#faff,#acff4e0e);
  flex-direction: row;
  align-items: center;
  padding: 8px;
  justify-content: space-between;
  position: fixed;
  z-index: -1;
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(-45deg, #ffa8f0, #deefff, #faffb8, #01aa64);
    backdrop-filter: blur(50px);
    z-index: -1;
    border-radius: 10px;
    background-size: 400% 400%;
    animation: ${gradientAnimation} 15s ease infinite;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    margin: 10% 10%;
    padding: 20px 30px;
    transition: 2s;
  }


`;

export const Centrado = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  z-index: 2;
`;
