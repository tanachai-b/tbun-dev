import cx from "classnames";
import { ReactNode, useState } from "react";
import { email_logo, github_logo, linkedin_logo } from "src/assets";
import { Intersectable, Resizable } from "src/common-components";

export function AboutPage({ isVisible }: { isVisible: boolean }) {
  return (
    <Container isVisible={isVisible}>
      <HeaderSection />

      <InfoSection>
        <SlideIn delay={500}>
          <span className={cx("font-black")}>
            Hi, I’m a senior software engineer based in Bangkok, Thailand.
          </span>{" "}
          I am a full-stack developer. I develop web applications. I work on both front-end and
          back-end.
        </SlideIn>

        <SlideIn delay={700}>
          <Contact>
            <ContactButton src={github_logo} label="GitHub" href="https://github.com/tanachai-b" />

            <ContactButton
              src={linkedin_logo}
              label="LinkedIn"
              href="https://www.linkedin.com/in/tanachai-bunlutangtum/"
            />

            <ContactButton src={email_logo} label="Email" href="mailto:tanachai.bun@gmail.com" />
          </Contact>
        </SlideIn>

        {/* <SlideIn className={cx("w-full", "max-w-[300px]", "self-center")} delay={900}>
          <LinkButton href="">VIEW RESUMÉ</LinkButton>
        </SlideIn> */}
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

function HeaderSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [width, setWidth] = useState(0);

  return (
    <Intersectable
      className={cx("h-[500px]", "overflow-clip")}
      onIntersect={(ratio) => ratio > 0.2 && setIsVisible(true)}
    >
      <Resizable
        className={cx(
          "size-full",

          "grid",
          "place-items-center",

          "overflow-clip",
        )}
        onResize={({ width }) => setWidth(width)}
      >
        <div
          className={cx(
            !isVisible ? ["scale-[1000%]", "opacity-0"] : "",
            "transition-all",
            "duration-[1000ms]",
          )}
        >
          <div
            className={cx("text-center")}
            style={{
              fontSize: `${Math.min(200 * (width / 1920), 50)}px`,
              letterSpacing: `${0.5 * (width / 1920)}em`,
            }}
          >
            <span className={cx("font-black")}>TANACHAI</span> <span>BUNLUTANGTUM</span>
          </div>
        </div>
      </Resizable>
    </Intersectable>
  );
}

function InfoSection({ children }: { children: ReactNode }) {
  return (
    <div
      className={cx(
        "flex-auto",

        "h-[500px]",
        "bg-[white]",

        "flex",
        "flex-row",
        "justify-center",
      )}
    >
      <div
        className={cx(
          "w-[500px]",

          "flex",
          "flex-col",

          "p-[20px]",
          "pt-[50px]",
          "gap-[50px]",

          "text-[17px]",
          "text-justify",
        )}
      >
        {children}
      </div>
    </div>
  );
}

function SlideIn({
  className,
  delay: initDelay,
  children,
}: {
  className?: string;
  delay: number;
  children: ReactNode;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [delay, setDelay] = useState(initDelay);

  return (
    <Intersectable
      className={cx(
        "relative",

        !isVisible ? ["opacity-0", "left-[100px]"] : ["opacity-100", "left-0"],
        "transition-all",
        "duration-[500ms]",

        className,
      )}
      style={{ transitionDelay: `${delay}ms` }}
      onIntersect={(ratio) => {
        ratio <= 0.2 && setDelay(0);
        ratio > 0.2 && setIsVisible(true);
      }}
    >
      {children}
    </Intersectable>
  );
}

function Contact({ children }: { children: ReactNode }) {
  return (
    <div
      className={cx(
        "flex",
        "flex-col",
        "items-center",

        "gap-[20px]",
      )}
    >
      <div className={cx("text-[20px]", "font-black", "tracking-[0.25em]")}>CONTACT</div>

      <div
        className={cx(
          "grid",
          "grid-cols-3",

          "gap-[20px]",
        )}
      >
        {children}
      </div>
    </div>
  );
}

function ContactButton({ src, label, href }: { src: string; label: string; href: string }) {
  return (
    <a
      className={cx(
        "rounded-[10px]",

        "outline",
        "outline-[0px]",
        "outline-[#00000000]",
        "text-[black]",

        "hover:outline-[10px]",
        "hover:outline-[#00000040]",
        "hover:bg-[black]",
        "hover:text-[white]",

        "transition-all",

        "flex",
        "flex-col",
        "items-center",

        "p-[10px]",
        "gap-[10px]",

        "text-[15px]",
        "font-bold",
      )}
      href={href}
      target="_blank"
    >
      <div
        className={cx("bg-current", "size-[40px]")}
        style={{ mask: `url(${src})`, maskSize: "100%" }}
      />

      <div>{label}</div>
    </a>
  );
}
