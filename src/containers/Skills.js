import React, { useContext } from "react";
import SectionTitle from "../components/SectionTitle";
import { LanguageContext } from "../utils/languageContext";

const translations = {
  en: {
    title: "SKILLS",
    skills: [
      {
        title: "front-end",
        items: [
          "React.js", "Next.js","Vite.js",
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
          "Express.js",
          "Koa.js",
          "TypeScript",
          "FastAPI",
          "Flask",
          "Django",
          "Python; Django",
          "MongoDB, MySQL",
          "Elasticsearch",
          "Kubernetes",
          "Docker",
          "Redis",
          "RabbitMQ",
          "RESTful APIs, gRPC",
          "Jaeger, New Relic, Sentry, Datadog",
          "Swagger",
        ],
      },
      {
        title: "dev-ops",
        items: [
          "AWS; EKS, EC2, ECS, S3, Lambda, Step Functions, DynamoDB, CloudWatch, SNS, SQS, VPC, IAM, Fargate ",
          "Terraform, CDKTF",
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
        title: "front-end",
        items: [
          "React.js", "Next.js","Vite.js",
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
          "Express.js",
          "Koa.js",
          "TypeScript",
          "FastAPI",
          "Flask",
          "Django",
          "Python; Django",
          "MongoDB, MySQL",
          "Elasticsearch",
          "Kubernetes",
          "Docker",
          "Redis",
          "RabbitMQ",
          "RESTful APIs, gRPC",
          "Jaeger, New Relic, Sentry, Datadog",
          "Swagger",
        ],
      },
      {
        title: "dev-ops",
        items: [
          "AWS; EKS, EC2, ECS, S3, Lambda, Step Functions, DynamoDB, CloudWatch, SNS, SQS, VPC, IAM, Fargate ",
          "Terraform, CDKTF",
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
};

function Skills() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  const tagStyle = {
    display: "inline-block",
    backgroundColor: "#f0f4f8",
    color: "#2d3748",
    padding: "4px 10px",
    borderRadius: "15px",
    fontSize: "11px",
    margin: "3px",
    border: "1px solid #e2e8f0",
  };

  const categoryStyle = {
    marginBottom: "12px",
  };

  const categoryTitleStyle = {
    fontSize: "12px",
    fontWeight: "600",
    color: "#4a5568",
    marginBottom: "6px",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  };

  return (
    <div>
      <SectionTitle title={t.title} />
      <div style={{ marginTop: "10px", marginBottom: "10px" }}>
        {t.skills.map((skill, index) => (
          <div key={index} style={categoryStyle}>
            <div style={categoryTitleStyle}>{skill.title}</div>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {skill.items.map((item, idx) => (
                <span key={idx} style={tagStyle}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
