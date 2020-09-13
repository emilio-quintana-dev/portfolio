import React, { useState, useEffect } from "react";
import {
  Nav,
  NavBarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavItemBtn,
  NavBtnLink,
} from "./Navbar.elements";
import { FaBars, FaTimes } from "react-icons/fa";

import { IconContext } from "react-icons/lib";
import { Button } from "../../globalStyles";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavBarContainer>
            <NavLogo to="/" onClick={closeMobileMenu}>
              <NavIcon />
              emilio.dev
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="/">Home</NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to="/about">About</NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to="/projects">Projects</NavLinks>
              </NavItem>

              <NavItemBtn>
                {button ? (
                  <NavBtnLink
                    href="https://medium.com/@emilioquintana90"
                    target="_blank"
                  >
                    <Button primary fontBig>
                      Dev Blog
                    </Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink
                    href="https://medium.com/@emilioquintana90"
                    target="_blank"
                  >
                    <Button onClick={closeMobileMenu} fontBig primary>
                      Dev Blog
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavBarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
