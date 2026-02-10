import React, { useContext } from "react";
import SectionItem from "../components/SectionItem";
import SectionTitle from "../components/SectionTitle";
import { LanguageContext } from "../utils/languageContext";

const translations = {
  en: {
    title: "EXPERIENCE",
    jobs: [
      {
        companyTitle: "Onedio",
        companyLink: "https://www.onedio.com/",
        location: "Istanbul, Turkey",
        jobTitle: "Full Stack Developer",
        startDate: "04/2025",
        endDate: "02/2026",
        items: [
          "Developed high-performance backend services using Node.js, Koa.js in microservices architecture for Turkey's leading digital media platform serving millions of daily users.",
          "Designed scalable RESTful APIs and data pipelines using AWS, Kubernetes, MongoDB, DynamoDB, and Elasticsearch for content management and user analytics.",
          "Architected microservices infrastructure on AWS with Docker, CI/CD pipelines, and auto-scaling to ensure 99.9% uptime.",
          "Collaborated with frontend teams using React.js, implemented unit and integration testing strategies.",
        ],
      },
      {
        companyTitle: "VenueX",
        companyLink: "https://venuex.io/",
        location: "Istanbul, Turkey",
        jobTitle: "Business/Technical Analyst",
        startDate: "02/2023",
        endDate: "04/2025",
        description: "Retail advertising spend to in-store conversion project:",
        items: [
          "Led business analysis for enterprise retail integrations (Migros, A101, BİM, LC Waikiki) using Agile/SDLC methodologies. Prepared BRD and Use Case documents for ETL pipeline development.",
          "Organized stakeholder workshops with Miro, created data flow diagrams for multi-platform integrations (Google Business Profile, Google Ads, Meta, Apple).",
          "Validated API integrations using Postman, Swagger, and SOAP UI. Managed UAT processes and wrote SQL queries for reporting.",
          "Managed sprint planning, backlog in JIRA, documented specifications in Confluence. Served as bridge between stakeholders and development teams.",
        ],
      },
      {
        companyTitle: "KNS Information Technologies",
        companyLink: "https://www.kns.com.tr/",
        location: "Istanbul, Turkey",
        jobTitle: "Business/Technical Analyst",
        startDate: "07/2019",
        endDate: "02/2023",
        items: [
          "Led requirements gathering for indoor mapping solutions with Apple/Google Maps integration. Prepared BRD, GTD, TTD, and Use Case documentation.",
          "Reviewed UI/UX mockups on Figma, modeled business processes using MS Visio, created data flow diagrams for location-based services.",
          "Tested APIs with Postman and SOAP UI, validated SQL data integrity, coordinated UAT sessions with end-users.",
          "Maintained documentation in Confluence, managed defects through JIRA, collaborated with iOS/Android teams for SDK integrations.",
        ],
      },
      {
        companyTitle: "Geotek / IBB Metro Istanbul",
        companyLink: "#",
        location: "Istanbul, Turkey",
        jobTitle: "Business/Technical Analyst",
        startDate: "12/2016",
        endDate: "06/2019",
        items: [
          "Led business analysis for archive digitization and indoor mapping projects for metro stations.",
          "Prepared BRD documents, managed SDLC-compliant documentation via JIRA and Confluence.",
          "Performed SQL data analysis, API testing (Postman, SOAP UI), and UAT management.",
          "Collaborated with cross-functional teams to align business needs with technical implementation.",
        ],
      },
    ],
  },
  tr: {
    title: "DENEYİM",
    jobs: [
      {
        companyTitle: "Onedio",
        companyLink: "https://www.onedio.com/",
        location: "İstanbul, Türkiye",
        jobTitle: "Full Stack Developer",
        startDate: "04/2025",
        endDate: "02/2026",
        items: [
          "Microservices mimarisinde Node.js ve Koa.js ile yüksek performanslı backend servisleri geliştirilmesi.",
          "Gemini ve ChatGpt API kullanarak yapay zeka destekli içerik yönetimi tasarlanması.",
          "AWS, Kubernetes, MongoDB, DynamoDB,PostgreSQL, Redis ve Elasticsearch kullanarak içerik yönetimi ve kullanıcı analitiği için ölçeklenebilir RESTful API'ler ve veri pipeline'ları tasarlanması.",
          "Docker, CI/CD pipeline'ları ve otomatik ölçeklendirmesi sağlanması.",
          "React.js ile componentlerin ve sayfaların geliştirilmesi ve kullanılması.",
        ],
      },
      {
        companyTitle: "VenueX",
        companyLink: "https://venuex.io/",
        location: "İstanbul, Türkiye",
        jobTitle: "İş/Teknik Analisti",
        startDate: "02/2023",
        endDate: "04/2025",
        items: [
          "Agile ve SDLC metodolojileri ile uçtan uca iş analizi süreçlerinin yönetilmesi.",
          "Sunum, raporlama, iş takibi ve ekip kodinasyonun sağlanması.",
          "İş ihtiyaçlarını analiz ederek teknik gereksinimlere dönüştürmelesi",
          "Visio kullanılarak iş süreçlerinin modellenmesi.",
          "JIRA ve Confluence kullanılarak backlog talep ve dökümantasyon yönetimi.",
          "Süreç modelleme ve analiz dökümanlarının hazırlanması.(Use Case, GTD, TTD,akış diyagramları)",
          "SoapUI, Postman, Swagger kullanılarak API testleri gerçekleştirilmesi.",
          "SQL sorguları ile veri doğrulama ve veritabanı analizlerinin yapılması.",
          "Fonksiyonel entegrasyon ve regresyon ortamlarında testlerin yapılması.",
          "Proje takımlarını yönetmek ve proje ilerlemesini izlemek."
        ],
      },
      {
        companyTitle: "KNS Bilgi Teknolojileri",
        companyLink: "https://www.kns.com.tr/",
        location: "İstanbul, Türkiye",
        jobTitle: "İş/Teknik Analisti",
        startDate: "07/2019",
        endDate: "02/2023",
        items: [
          "İş ve teknik ekipler arasında köpru kurarak uçtan uca iş analizi süreçlerinin yönetilmesi.",
          "İş süreçlerini iyileştirmek, yazılım geliştirme ve API entegrasyonları sağlamak.",
          "Süreç modelleme yaparak iş süreçlerini optimize etmek.",
          "Son kullanıcı kullanım dökümanın hazırlanması ve güncel tutulması.",
          "User experience design ve UI/UX tasarımının yapılması.",
          "İş süreçlerinde gerekli Oracle PL/SQL sorgularının yazılması.",
          "API entegrasyonları süreçlerinin analiz edilmesi ve test edilmesi.",
        ],
      },
      {
        companyTitle: "Geotek / İBB Metro Istanbul",
        companyLink: "#",
        location: "İstanbul, Türkiye",
        jobTitle: "İş/Teknik Analisti",
        startDate: "12/2016",
        endDate: "06/2019",
        items: [
          "Metro istasyonları için arşiv dijitalleştirme ve iç mekan haritalama projelerinde iş analizi sürecinin yönetilmesi.",
          "BRD dokümanları hazırlanması, JIRA ve Confluence ile SDLC uyumlu dokümantasyon yönetimi sağlanması.",
          "Paydaş toplantıların yürütülmesi gereksinimlerin netleştirilmesi ve önceliklendirilmesi.",
          "SQL ile veri analizi, Postman ve SOAP UI ile API testleri ve UAT süreç yönetimi sağlanması.",
          "Çapraz fonksiyonel ekiplerle iş ihtiyaçları ve teknik uygulama arasında uyum sağlanması.",
          "Kalite, güvence süreçlerinin yönetilmesi."
        ],
      },
    ],
  },
};

class Experience extends React.Component {
  static contextType=LanguageContext;

  render() {
    const { language }=this.context;
    const t=translations[language];

    return (
      <div>
        <SectionTitle title={t.title} />
        {t.jobs.map((job, index) => (
          <SectionItem
            key={index}
            companyTitle={
              <a
                href={job.companyLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "rgba(0,0,0,.87)" }}
              >
                {job.companyTitle}
              </a>
            }
            location={job.location}
            jobTitle={job.jobTitle}
            startDate={job.startDate}
            endDate={job.endDate}
            description={job.description}
            roleGroups={job.roleGroups}
            items={job.items? job.items.map((item, idx) => (
              <span key={idx}>{item}</span>
            )):undefined}
          />
        ))}
      </div>
    );
  }
}

export default Experience;
