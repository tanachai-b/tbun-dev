import cx from "classnames";
import { ReactNode } from "react";
import { email_logo, github_logo, linkedin_logo } from "src/assets";
import {
  ContactButton,
  ContactButtons,
  Header,
  Highlight,
  Section,
  SlideIn,
} from "src/common-components";

export function LeftPanel() {
  return (
    <Container>
      <SlideIn>
        <Section>
          <div>
            <Highlight>I’m a senior software engineer based in Bangkok, Thailand. </Highlight>I have
            over 10 years of experience.
          </div>
        </Section>
      </SlideIn>

      <SlideIn>
        <Section>
          <Header>EXPERTISE</Header>

          <div>
            <Highlight>I am a full-stack developer.</Highlight> I develop web applications,
            front-end and back-end. I have also worked on enterprise software in the past.
          </div>
        </Section>
      </SlideIn>

      <SlideIn>
        <Section>
          <Header>JOURNEY</Header>

          <div>
            I graduated with a <Highlight>computer engineering degree</Highlight>. Became a{" "}
            <Highlight>tech consultant</Highlight>. Implemented enterprise software for many years.
            Moved on to become a <Highlight>full-stack developer</Highlight>. Now work on web
            applications.
          </div>
        </Section>
      </SlideIn>

      <SlideIn>
        <Section>
          <Header>CONTACT</Header>

          <ContactButtons>
            <ContactButton src={github_logo} label="GitHub" href="https://github.com/tanachai-b" />

            <ContactButton
              src={linkedin_logo}
              label="LinkedIn"
              href="https://www.linkedin.com/in/tanachai-bunlutangtum/"
            />

            <ContactButton src={email_logo} label="Email" href="mailto:tanachai.bun@gmail.com" />
          </ContactButtons>
        </Section>
      </SlideIn>
    </Container>
  );
}

function Container({ children }: { children: ReactNode }) {
  return (
    <div className={cx("flex", "flex-row", "justify-center")}>
      <div
        className={cx(
          "min-w-[350px]",
          "max-w-[400px]",

          "flex",
          "flex-col",

          "p-[30px]",
          "gap-[30px]",

          "text-[15px]",
          "text-justify",
        )}
      >
        {children}
      </div>
    </div>
  );
}
