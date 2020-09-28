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
import * as Scroll from "react-scroll";

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
                <NavLinks
                  to="intro"
                  offset={-100}
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Home
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks
                  to="about"
                  offset={-100}
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  About
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks
                  to="projects"
                  spy={true}
                  offset={-80}
                  smooth={true}
                  duration={500}
                >
                  Projects
                </NavLinks>
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
