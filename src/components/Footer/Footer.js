import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import {
  FooterContainer,
  FooterSubscription,
  FooterSubHeading,
  FooterSubText,
  Form,
  FormInput,
  FooterLinksWrapper,
  FooterLinksContainer,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  SocialIcons,
  SocialIconLink,
} from "./Footer.elements";
import { Button } from "../../globalStyles";

const Footer = () => {
  const [message, setMessage] = useState({ message: "" });

  var service_id = "default_service";
  var template_id = "contact_form";
  var user_id = "user_0s0p6hVDhQaHTDwYYA0vo";

  const sendEmail = () => {
    emailjs.send(service_id, template_id, message, user_id);
    setMessage({ message: "I will be in touch!" });
  };

  return (
    <>
      <FooterContainer>
        <FooterSubscription>
          <FooterSubHeading>Feel free to reach out!</FooterSubHeading>
          <FooterSubText>
            I'll be happy to talk{" "}
            <span role="img" aria-label="Toy">
              👾
            </span>
          </FooterSubText>
          <Form>
            <FormInput
              name="email"
              type="text"
              placeholder="Message"
              value={message.message}
              onChange={(e) => setMessage({ message: e.target.value })}
            />

            <Button fontBig onClick={sendEmail}>
              Say hi
            </Button>
          </Form>
        </FooterSubscription>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink
                href="http://www.linkedin.com/in/emilio-quintana-dev"
                target="_blank"
              >
                LinkedIn
              </FooterLink>
              <FooterLink
                href="https://medium.com/@emilioquintana90"
                target="_blank"
              >
                Medium
              </FooterLink>
              <FooterLink
                href="https://www.instagram.com/equintanalopez/"
                target="_blank"
              >
                Instagram
              </FooterLink>
              <FooterLink
                href="https://twitter.com/EmilioQuintana_"
                target="_blank"
              >
                Twitter
              </FooterLink>
            </FooterLinkItems>

            <FooterLinkItems>
              <FooterLinkTitle>Projects</FooterLinkTitle>
              <FooterLink
                href="https://github.com/emilio-quintana-dev/servitodo-client"
                target="_blank"
              >
                Servitodo
              </FooterLink>
              <FooterLink
                href="https://github.com/emilio-quintana-dev/CerealVis"
                target="_blank"
              >
                CerealVis
              </FooterLink>
              <FooterLink
                href="https://github.com/emilio-quintana-dev/notes-react-app"
                target="_blank"
              >
                Evernot
              </FooterLink>
              <FooterLink
                href="https://github.com/emilio-quintana-dev/pomodoro-clock-app"
                target="_blank"
              >
                Pomoclock
              </FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>

          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Blog Posts</FooterLinkTitle>
              <FooterLink
                href="https://dev.to/emilioquintana90/building-a-controlled-form-using-react-hooks-4fml"
                target="_blank"
              >
                React Forms
              </FooterLink>
              <FooterLink
                href="https://medium.com/@emilioquintana90/navigating-props-vs-state-in-react-2432bf505113"
                target="_blank"
              >
                Props vs State
              </FooterLink>
              <FooterLink
                href="https://medium.com/@emilioquintana90/explaining-the-use-of-the-faker-gem-for-development-purposes-99e5dc0011af"
                target="_blank"
              >
                The Faker Gem
              </FooterLink>
              <FooterLink
                href="https://medium.com/@emilioquintana90/my-path-to-understanding-rubys-enumerable-methods-1373691b3efb"
                target="_blank"
              >
                Ruby's Enumerables
              </FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">
              <SocialIcon />
              emilio.dev
            </SocialLogo>
            <SocialIcons>
              <SocialIconLink
                href="https://www.facebook.com/emilio.quintana.50/"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>

              <SocialIconLink
                href="https://www.instagram.com/equintanalopez/"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>

              <SocialIconLink
                href="http://www.linkedin.com/in/emilio-quintana-dev"
                target="_blank"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterContainer>
    </>
  );
};

export default Footer;
