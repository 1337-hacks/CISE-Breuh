import React from "react";
import { HeaderContainer, Logo, LogoWrapper } from "./Header";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <HeaderContainer>
            <LogoWrapper>
            <Link to ='/'>
                <Logo src='/seperlogo.png' alt='Seper Logo' />
            </Link>
            </LogoWrapper>            
            <h1> header </h1>
        </HeaderContainer>
    );
};

export default Header;
