import { ReactNode } from "react";

export type TimelineEntryData = {
  endYear: number;
  startYear: number;
  color: string;
  company: ReactNode;
  role: ReactNode;
  duration: ReactNode;
  skills: ReactNode[];
  description: ReactNode;
};

export const careerEntries: TimelineEntryData[] = [
  {
    endYear: 2024,
    startYear: 2023,
    color: "#0000ff",
    company: "London Stock Exchange Group",
    role: "Front-end Developer",
    duration: "2 years",
    skills: [
      "React",
      "TypeScript",
      "Vite",
      "Redux",
      "Saga",
      "WebSocket",
      "Jest",
      "CI/CD",
      "Banking",
    ],
    description: (
      <ul>
        <li>Working on currency trading applications</li>
        <li>Use React / Typescript for front-end</li>
        <li>Use Redux / Saga for state management</li>
        <li>Write unit tests with Jest</li>
        <li>Use web sockets to retrieve real-time data</li>
        <li>Configure deployment scripts for CI/CD pipelines</li>
      </ul>
    ),
  },

  {
    endYear: 2022,
    startYear: 2022,
    color: "#ff6000",
    company: "Dishes",
    role: "Full-stack Developer",
    duration: "1 year",
    skills: [
      "Dart",
      "Flutter",
      "JavaScript",
      "React",
      "Firebase",
      "Firestore",
      "NoSQL",
      "UX/UI",
      "Figma",
      "PWA",
      "SEO",
    ],
    description: (
      <ul>
        <li>Designed UIs for web applications and landing page using Figma</li>
        <li>Developed web applications using Dart / Flutter</li>
        <li>Developed landing page using React</li>
        <li>Ensured progressive web application (PWA) capabilities</li>
        <li>Configured page for search engine optimization (SEO)</li>
        <li>Deployed page / web applications on Firebase Hosting</li>
      </ul>
    ),
  },

  {
    endYear: 2021,
    startYear: 2019,
    color: "#8000ff",
    company: "Accenture",
    role: "Salesforce Developer",
    duration: "3 years",
    skills: [
      "Salesforce",
      "Apex/Java",
      "Integrations",
      "Business Analysis",
      "Design Thinking",
      "UX/UI",
      "Real Estate",
      "Construction Material",
      "Chemical",
    ],
    description: (
      <ul>
        <li>Implemented Salesforce for clients’ sales team and back-office</li>
        <li>Designed data model</li>
        <li>Wrote complex business logic using Apex/Java</li>
        <li>Worked on complex integration patterns linking multiple systems</li>
        <li>Configured Salesforce UI</li>
        <li>Worked with real estate industry, construction material industry</li>
      </ul>
    ),
  },

  {
    endYear: 2018,
    startYear: 2018,
    color: "#8000ff",
    company: "Accenture",
    role: "Back-end Developer",
    duration: "1 year",
    skills: [
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
    ],
    description: (
      <ul>
        <li>Developed back-end Rest APIs for mobile applications</li>
        <li>Used Javascript / Node.js / Express.js / LoopBack.io</li>
        <li>Used Java / Java Spring Boot</li>
        <li>Used PostgreSQL as database</li>
        <li>Integrated with Salesforce</li>
        <li>Managed deployments on Heroku</li>
      </ul>
    ),
  },

  {
    endYear: 2017,
    startYear: 2017,
    color: "#8000ff",
    company: "Accenture",
    role: "SAP ABAP Developer",
    duration: "1 year",
    skills: [
      "SAP",
      "ABAP",
      "Reportings",
      "Incident Support",
      "Oil & Gas",
      "Hospital",
      "Construction Material",
    ],
    description: (
      <ul>
        <li>Wrote SAP extensions using ABAP language</li>
        <li>Worked on SAP Project Management and SAP Human Resources</li>
        <li>Developed various business reportings</li>
        <li>Supported SAP incidents</li>
      </ul>
    ),
  },

  {
    endYear: 2016,
    startYear: 2015,
    color: "#8000ff",
    company: "Accenture",
    role: "SAP Business Intelligence Developer",
    duration: "2 years",
    skills: [
      "SAP",
      "Business Intelligence",
      "Data Warehouse",
      "Data Visualization",
      "Financial Data",
      "Oil & Gas",
      "Construction Material",
    ],
    description: (
      <ul>
        <li>Created executive dashboards using SAP Business Intelligence tools</li>
        <li>Designed logic to query, map, and aggregate data</li>
        <li>Use SAP BI tools to create charts and dashboard UIs</li>
        <li>Worked on financial related data</li>
      </ul>
    ),
  },

  {
    endYear: 2014,
    startYear: 2013,
    color: "#8000ff",
    company: "Accenture",
    role: "SAP Developer",
    duration: "1 year",
    skills: [
      "SAP",
      "SQL",
      "VBA",
      "ETL",
      "Data Reconciliation",
      "Data Migration",
      "Oil & Gas",
      "Chemical",
    ],
    description: (
      <ul>
        <li>Migrated data between SAP systems</li>
        <li>Wrote complex SQL logic to extract data</li>
        <li>Wrote Excel VBA macros to transform and map data</li>
        <li>Reconciled new and old data before uploaded to the new system.</li>
      </ul>
    ),
  },

  {
    endYear: 2012,
    startYear: 2012,
    color: "#40a0ff",
    company: "Krungthai Computer Services",
    role: "Software Developer Intern",
    duration: "2 months",
    skills: ["C#", "Background Service", "Network", "Encryption", "Banking"],
    description: (
      <ul>
        <li>Wrote Windows background service on ATM machines</li>
        <li>Retrieved advertisement data from a central server</li>
        <li>Used basic encryptions like MD5 hashing</li>
      </ul>
    ),
  },
];

export const educationEntries: TimelineEntryData[] = [
  {
    endYear: 2013,
    startYear: 2013,
    color: "#ff40a0",
    company: "Chulalongkorn University",
    role: "Computer Engineering Bachelor’s Degree",
    duration: "4 years",
    skills: [
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
    ],
    description: (
      <>
        <ul>
          <li>Computer Engineering Department, Faculty of Engineering</li>
          <li>
            Developed mobile application aiding people with language impairments on Android using
            Java
          </li>
          <li>Developed brain neural links visualization tool on Java</li>
        </ul>
      </>
    ),
  },
];

export const credentialEntries: TimelineEntryData[] = [
  {
    endYear: 2023,
    startYear: 2023,
    color: "#0060e0",
    company: "Microsoft",
    role: "Microsoft Certified: Azure Fundamentals",
    duration: "",
    skills: ["Azure Cloud", "Azure Architecture", "Azure Services", "Azure Governance"],
    description: (
      <>
        <ul>
          <li>Describe cloud concepts</li>
          <li>Describe Azure architecture and services</li>
          <li>Describe Azure management and governance</li>
        </ul>
      </>
    ),
  },
  {
    endYear: 2022,
    startYear: 2022,
    color: "#c000ff",
    company: "Udemy",
    role: "The Complete Flutter Development Bootcamp with Dart",
    duration: "",
    skills: ["Dart", "Flutter", "Cross-platform Application", "Mobile Application"],
    description: (
      <>
        <ul>
          <li>Completed the course on Udemy</li>
          <li>Built cross-platform applications from scratch using Dart and Flutter</li>
        </ul>
      </>
    ),
  },
];
