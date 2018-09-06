import React, { Component } from 'react';
import styled from 'styled-components';

const StyledNavbar = styled.div`
    height: 50px;
    width: 100vw;
    background: black;
    position: fixed;
    top: 0;
    z-index: 10;
    color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
`
const NavbarItem = styled.div`
    text-align: center;
    position: relative;
    cursor: pointer;
    &:hover{
        text-decoration: none;
        color: white;
    }
    &:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: -3px;
        left: 0;
        background-color: white;
        visibility: hidden;
        transform: scaleX(0);
        transform-origin: left;
        transition: all .1s cubic-bezier(1,.25,0,.75) 0s;;
    }
    &:hover:before {
        visibility: visible;
        transform: scaleX(1);
    }
`

class Navbar extends Component{
    render() {
        return(
            <StyledNavbar>
                <NavbarItem onClick={()=>{window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                })}}>Top</NavbarItem>
                <NavbarItem onClick={()=>{this.props.scrollTo("featuredRef")}}>Featured</NavbarItem>
                <NavbarItem onClick={()=>{this.props.scrollTo("section2018Ref")}}>2018</NavbarItem>
                <NavbarItem onClick={()=>{this.props.scrollTo("section2017Ref")}}>2017</NavbarItem>
            </StyledNavbar>
        )
    }
}
export default Navbar;