import React, { useContext } from "react";
import { Grid } from "semantic-ui-react";
import SectionTitle from "../components/SectionTitle";
import { SkillRow } from "../components/SkillRow";
import useWindowSize from "../utils/useWindowSize";
import { LanguageContext } from "../utils/languageContext";

const translations = {
  en: {
    title: "SKILLS",
    skills: [
      {
        title: "front-end",
        items: [
          "React.js",
          "TypeScript",
          "MobX, Easy Peasy",
          "Material UI, Semantic UI, Tailwind CSS",
        ],
      },
      {
        title: "back-end",
        items: [
          "NestJS",
          "Node.js",
          "TypeScript",
          "Python; Django",
          "MongoDB, MySQL",
          "Redis",
          "RESTful APIs",
          "Jaeger, New Relic",
          "Swagger",
        ],
      },
      {
        title: "dev-ops",
        items: [
          "AWS; EC2, ECS, S3, Lambda, Step Functions, DynamoDB, CloudWatch, SNS, SQS, VPC, IAM",
          "Terraform, CDKTF",
          "Docker",
          "Heroku",
        ],
      },
      {
        title: "CI/CD",
        items: ["Git, GitHub Actions"],
      },
      {
        title: "data science",
        items: ["Python; NumPy, Pandas", "MATLAB"],
      },
    ],
  },
  tr: {
    title: "YETENEKLER",
    skills: [
      {
        title: "Front-end",
        items: [
          "React.js",
          "TypeScript",
          "MobX, Easy Peasy",
          "Material UI, Semantic UI, Tailwind CSS",
        ],
      },
      {
        title: "Back-end",
        items: [
          "NestJS",
          "Node.js",
          "TypeScript",
          "Python; Django",
          "MongoDB, MySQL",
          "Redis",
          "RESTful API'ler",
          "Jaeger, New Relic",
          "Swagger",
        ],
      },
      {
        title: "Dev-ops",
        items: [
          "AWS; EC2, ECS, S3, Lambda, Step Functions, DynamoDB, CloudWatch, SNS, SQS, VPC, IAM",
          "Terraform, CDKTF",
          "Docker",
          "Heroku",
        ],
      },
      {
        title: "CI/CD",
        items: ["Git, GitHub Actions"],
      },
      {
        title: "Veri Bilimi",
        items: ["Python; NumPy, Pandas", "MATLAB"],
      },
    ],
  },
};

function Skills() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  const isNarrow = useWindowSize().width < 450;
  const titleColumnWidth = 3;
  const dataColumnWidth = 13;
  const className = "px12";

  return (
    <div>
      <SectionTitle title={t.title} />
      <Grid
        columns={2}
        style={{ marginTop: "10px", marginBottom: "10px" }}
        className={className}
        stackable={isNarrow}
      >
        {t.skills.map((skill, index) => (
          <SkillRow
            key={index}
            titleColumnWidth={titleColumnWidth}
            dataColumnWidth={dataColumnWidth}
            title={skill.title}
            items={skill.items}
            isNarrow={isNarrow}
          />
        ))}
      </Grid>
    </div>
  );
}

export default Skills;
