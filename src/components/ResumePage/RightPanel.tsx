import cx from "classnames";
import { ReactNode } from "react";
import { Header } from "src/common-components";
import { TimelineEntry } from "./TimelineEntry";

export function RightPanel() {
  return (
    <Container>
      <Header>CAREER</Header>

      <MultiColumns>
        <div className={cx("flex", "flex-col")}>{careerEntries}</div>
      </MultiColumns>

      <Header>EDUCATION</Header>

      <MultiColumns>{educationEntries}</MultiColumns>
    </Container>
  );
}

function Container({ children }: { children: ReactNode }) {
  return (
    <div
      className={cx(
        "bg-[#ffffff]",

        "flex",
        "flex-col",

        "p-[30px]",
        "gap-[30px]",

        "text-[15px]",
        "font-medium",
      )}
    >
      {children}
    </div>
  );
}

function MultiColumns({ children }: { children: ReactNode }) {
  return <div className={cx("columns-[400px]", "gap-[30px]")}>{children}</div>;
}

const careerEntries = (
  <>
    <TimelineEntry
      endYear={2024}
      startYear={2023}
      color="#0000ff"
      role="Front-end Developer"
      company="London Stock Exchange Group"
      duration="2 years"
      skills={[
        "React",
        "TypeScript",
        "Vite",
        "Redux",
        "Saga",
        "WebSocket",
        "Jest",
        "CI/CD",
        "Banking",
      ]}
    />

    <TimelineEntry
      endYear={2022}
      startYear={2022}
      color="#ff6000"
      role="Full-stack Developer"
      company="Dishes"
      duration="1 year"
      skills={["Flutter", "Dart", "Firebase", "NoSQL", "React", "JavaScript", "Figma", "UX/UI"]}
    />

    <TimelineEntry
      endYear={2021}
      startYear={2019}
      color="#8000ff"
      role="Salesforce Developer"
      company="Accenture"
      duration="3 years"
      skills={[
        "Salesforce",
        "APEX/Java",
        "Integrations",
        "Business Analysis",
        "Design Thinking",
        "UX/UI",
        "Real Estate",
        "Construction Material",
      ]}
      continueToNext
    />

    <TimelineEntry
      endYear={2018}
      startYear={2018}
      color="#8000ff"
      role="Back-end Developer"
      company="Accenture"
      duration="1 year"
      skills={[
        "JavaScript",
        "Node.js",
        "Express",
        "LoopBack",
        "SQL",
        "PostgreSQL",
        "Heroku",
        "Java",
        "Spring",
        "Construction Material",
        "Banking",
      ]}
      continueToNext
    />

    <TimelineEntry
      endYear={2017}
      startYear={2017}
      color="#8000ff"
      role="SAP ABAP Developer"
      company="Accenture"
      duration="1 year"
      skills={[
        "SAP",
        "ABAP",
        "Reportings",
        "Incident Support",
        "Oil & Gas",
        "Hospital",
        "Construction Material",
      ]}
      continueToNext
    />

    <TimelineEntry
      endYear={2016}
      startYear={2015}
      color="#8000ff"
      role="SAP Business Intelligence Developer"
      company="Accenture"
      duration="2 years"
      skills={[
        "SAP",
        "Business Intelligence",
        "Data Model",
        "Data Warehouse",
        "Data Visualization",
        "Financial Data",
        "Oil & Gas",
        "Construction Material",
      ]}
      continueToNext
    />

    <TimelineEntry
      endYear={2014}
      startYear={2013}
      color="#8000ff"
      role="SAP Developer"
      company="Accenture"
      duration="1 year"
      skills={[
        "SAP",
        "SQL",
        "VBA",
        "ETL",
        "Data Reconciliation",
        "Data Migration",
        "Oil & Gas",
        "Chemical",
      ]}
    />

    <TimelineEntry
      endYear={2012}
      startYear={2012}
      color="#40a0ff"
      role="Software Developer Intern"
      company="Krungthai Computer Services"
      duration="2 months"
      skills={["C#", "Background Service", "Network", "Encryption", "Banking"]}
    />
  </>
);

const educationEntries = (
  <>
    <TimelineEntry
      endYear={2013}
      startYear={2013}
      color="#ff40a0"
      role="Computer Engineering Bachelor’s Degree"
      company="Chulalongkorn University"
      duration="4 years"
      skills={[
        "Java",
        "C",
        "C++",
        "C#",
        "Database",
        "Data Structure",
        "Network",
        "Algorithm",
        "Software Architecture",
        "Distributed System",
        "Cybersecurity",
      ]}
    />
  </>
);
