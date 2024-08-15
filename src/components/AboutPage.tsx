import cx from "classnames";
import { useState } from "react";
import { email_logo, github_logo, linkedin_logo } from "src/assets";
import { Resizable } from "src/common-components";
import { Copyright } from "./Copyright";

export function AboutPage() {
  const [width, setWidth] = useState(0);

  return (
    <>
      <Resizable
        className={cx(
          "h-[500px]",

          "grid",
          "place-items-center",

          "overflow-clip",
        )}
        onResize={({ width }) => setWidth(width)}
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
      </Resizable>

      <div
        className={cx(
          "bg-[white]",

          "flex",
          "flex-row",
          "justify-center",
        )}
      >
        <div
          className={cx(
            "w-[500px]",
            "h-[500px]",

            "flex",
            "flex-col",

            "p-[20px]",
            "pt-[50px]",
            "gap-[50px]",
          )}
        >
          <div className={cx("text-[17px]")}>
            <span className={cx("font-black")}>
              Hi, I’m a senior software engineer based in Bangkok, Thailand.{" "}
            </span>
            I develop web applications. I work on both front-end and back-end.
          </div>

          <div className={cx("flex", "flex-col", "items-center", "gap-[20px]")}>
            <div className={cx("text-[20px]", "font-black", "tracking-[0.25em]")}>CONTACT</div>

            <div className={cx("grid", "grid-cols-3", "gap-[20px]")}>
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
            </div>
          </div>
        </div>
      </div>

      <Copyright />
    </>
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
    >
      <div
        className={cx("bg-current", "size-[40px]")}
        style={{ mask: `url(${src})`, maskSize: "100%" }}
      />

      <div>{label}</div>
    </a>
  );
}
