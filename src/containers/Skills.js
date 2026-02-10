import React, { useContext } from "react";
import SectionTitle from "../components/SectionTitle";
import { LanguageContext } from "../utils/languageContext";

const translations={
  en: {
    title: "SKILLS",
    skills: [
      {
        title: "business analysis",
        items: [
          "Requirements Gathering & Analysis",
          "SDLC (Software Development Life Cycle)",
          "User Stories & Acceptance Criteria",
          "BRD, GTD, Use Case Documentation",
          "Stakeholder Communication",
          "Process Modeling & Data Flow Diagrams",
          "Gap Analysis & Impact Assessment",
          "Business Process Improvement",
          "Database Analysis & Validation",
          "SQL & Data Analysis",
          "API Testing (Postman, Swagger, SOAP UI)",
          "Agile/Scrum Methodology",
          "JIRA",
          "Confluence",
          "MS Visio",
        ],
      },
      {
        title: "design tools",
        items: ["Figma", "Miro", "Canva"],
      },
      {
        title: "testing",
        items: [
          "Cypress (E2E Test)",
          "Jest",
          "Unit Test",
          "Integration Testing",
          "Regression Testing",
          "System Testing",
          "UAT (User Acceptance Testing)",
          "Test Case Design",
          "Test Plan Documentation",
          "API Testing (Postman, Swagger, SOAP UI)",
        ],
      },
      {
        title: "front-end",
        items: [
          "React.js",
          "Next.js",
          "Vite.js",
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
          "AWS; EKS, EC2, ECS, S3, Lambda, Step Functions, DynamoDB, CloudWatch, SNS, SQS, VPC, IAM, Fargate",
          "Terraform, CDKTF",
          "Heroku",
          "Azure DevOps",
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
      {
        title: "AI tools",
        items: ["Claude AI", "Cursor AI", "Google Gemini", "Anthropic"],
      },
      {
        title: "languages",
        items: ["Turkish (Native)", "English (Professional)"],
      },
    ],
  },
  tr: {
    title: "YETENEKLER",
    skills: [
      {
        title: "iş analizi",
        items: [
          "Gereksinim Toplama & Analiz",
          "SDLC (Yazılım Geliştirme Yaşam Döngüsü)",
          "Kullanıcı Hikayeleri & Kabul Kriterleri",
          "BRD, GTD, Use Case Dokümantasyonu",
          "Paydaş İletişimi",
          "Süreç Modelleme & Veri Akış Diyagramları",
          "Boşluk Analizi & Etki Değerlendirmesi",
          "İş Süreçleri İyileştirme",
          "Veritabanı Analizi & Doğrulama",
          "SQL & Veri Analizi",
          "API Testi (Postman, Swagger, SOAP UI)",
          "Agile/Scrum Metodolojisi",
          "JIRA",
          "Confluence",
          "MS Visio",
        ],
      },
      {
        title: "tasarım araçları",
        items: ["Figma", "Miro", "Canva"],
      },
      {
        title: "test",
        items: [
          "Cypress (E2E Test)",
          "Jest",
          "Unit Test",
          "Entegrasyon Testi",
          "Regresyon Testi",
          "Sistem Testi",
          "UAT (Kullanıcı Kabul Testi)",
          "Test Senaryosu Tasarımı",
          "Test Planı Dokümantasyonu",
          "API Testi (Postman, Swagger, SOAP UI)",
        ],
      },
      {
        title: "front-end",
        items: [
          "React.js",
          "Next.js",
          "Vite.js",
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
          "AWS",
          "GCP",
          "Heroku",
          "Azure DevOps",
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
      {
        title: "yapay zeka araçları",
        items: ["Claude AI", "Cursor AI", "Google Gemini", "Anthropic"],
      },
      {
        title: "diller",
        items: ["Türkçe (Anadil)", "İngilizce (Profesyonel)"],
      },
    ],
  },
};

function Skills() {
  const { language }=useContext(LanguageContext);
  const t=translations[language];

  const tagStyle={
    display: "inline-block",
    backgroundColor: "#f0f4f8",
    color: "#2d3748",
    padding: "4px 10px",
    borderRadius: "15px",
    fontSize: "11px",
    margin: "3px",
    border: "1px solid #e2e8f0",
  };

  const categoryStyle={
    marginBottom: "12px",
  };

  const categoryTitleStyle={
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
          <div key={index} style={{
            ...categoryStyle,
            ...(skill.title==="front-end"&&{ marginTop: "20px" })
          }}>
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
