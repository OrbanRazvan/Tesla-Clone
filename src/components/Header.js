import React, { useState } from 'react'
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";
import { Link } from 'react-scroll';

function Header() {

  const [burgerStatus, setBurgerStatus] = useState(false);

  const cars = useSelector(selectCars);

  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="logo" />
      </a>
      <Menu>
        {cars && cars.map((car, index) => (
          <NavLink to={car} smooth={true} duration={1000} key={index}>{car}</NavLink>
        ))}
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu onClick={() => setBurgerStatus(true)} />
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>
        {cars && cars.map((car, index) => (
          <li key={index}><NavLink to={car} smooth={true} duration={1000} key={index} >{car}</NavLink></li>
        ))}
        <li><NavLink to="Lowest Cost Solar Panels in America" smooth={true} duration={1000} key="1" >Solar Panels</NavLink></li>
        <li><NavLink to="Solar for New Roofs" smooth={true} duration={1000} key="2" >New Roofs</NavLink></li>
        <li><NavLink to="Accessories" smooth={true} duration={1000} key="3" >Accessories</NavLink></li>
      </BurgerNav>

    </Container>
  )
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  @media(max-width: 768px){
    a{
      img{
        width: 70%;
      }
    }
  }
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  @media(max-width: 768px){
    display: none;
  }
`;

const NavLink = styled(Link)`
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a{
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
  }
  @media(max-width: 768px){
    font-size: 12px;
    padding-right: 10px;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.2s ease-in-out;

  li{
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, .2);


    a{
      font-weight: 600;
    }
  }

  @media(max-width: 768px){
    width: 180px;
    padding: 10px;
  }
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;