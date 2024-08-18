import cx from "classnames";
import { ReactNode } from "react";
import { email_logo, github_logo, linkedin_logo } from "src/assets";
import { ContactButton, ContactButtons, Header, Highlight, Section } from "src/common-components";
import { HeaderSection, InfoSection, SlideIn } from "./components";

export function AboutPage({ isVisible }: { isVisible: boolean }) {
  return (
    <Container isVisible={isVisible}>
      <HeaderSection />

      <InfoSection>
        <SlideIn delay={500}>
          <Highlight>Hi, I’m a senior software engineer based in Bangkok, Thailand. </Highlight>I am
          a full-stack developer. I develop web applications, front-end and back-end.
        </SlideIn>

        <SlideIn delay={700}>
          <Section>
            <Header>CONTACT</Header>

            <ContactButtons>
              <ContactButton
                src={github_logo}
                label="GitHub"
                href="https://github.com/tanachai-b"
              />

              <ContactButton
                src={linkedin_logo}
                label="LinkedIn"
                href="https://www.linkedin.com/in/tanachai-bunlutangtum/"
              />

              <ContactButton src={email_logo} label="Email" href="mailto:tanachai.bun@gmail.com" />
            </ContactButtons>
          </Section>
        </SlideIn>
      </InfoSection>
    </Container>
  );
}

function Container({ isVisible, children }: { isVisible: boolean; children: ReactNode }) {
  return (
    <div
      className={cx(
        "flex-auto",

        !isVisible ? "opacity-0" : "",
        "transition-all",
        "duration-[500ms]",

        "flex",
        "flex-col",

        "overflow-clip",
      )}
    >
      {children}
    </div>
  );
}
