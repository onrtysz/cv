import React, { useContext } from "react";
import SectionItem from "../components/SectionItem";
import SectionTitle from "../components/SectionTitle";
import { LanguageContext } from "../utils/languageContext";

const translations={
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
        description: "Worked as a full stack developer in microservices architecture serving millions of users on Turkey's leading digital media platform.",
        items: [
          "Development of high-performance backend services with Node.js and Koa.js in microservices architecture.",
          "Designing AI-powered content management using Gemini and ChatGPT APIs.",
          "Designing scalable RESTful APIs and data pipelines for content management and user analytics using AWS, Kubernetes, MongoDB, DynamoDB, PostgreSQL, Redis, and Elasticsearch.",
          "Implementation of Docker, CI/CD pipelines, and auto-scaling.",
          "Development and usage of components and pages with React.js.",
        ],
      },
      {
        companyTitle: "VenueX",
        companyLink: "https://venuex.io/",
        location: "Istanbul, Turkey",
        jobTitle: "Business/Technical Analyst",
        startDate: "02/2023",
        endDate: "04/2025",
        description: "Managed web platform integration and data analysis processes for major retail clients (Migros, A101, BİM, LC Waikiki).",
        items: [
          "Managing end-to-end business analysis processes with Agile and SDLC methodologies.",
          "Providing presentations, reporting, task tracking, and team coordination.",
          "Analyzing business needs and transforming them into technical requirements.",
          "Business process modeling using Visio.",
          "Backlog request and documentation management using JIRA and Confluence.",
          "Preparing process modeling and analysis documents (Use Case, GTD, TTD, flow diagrams).",
          "Conducting API tests using SoapUI, Postman, Swagger.",
          "Data validation and database analysis with SQL queries.",
          "Testing in functional integration and regression environments.",
          "Managing project teams and monitoring project progress.",
        ],
      },
      {
        companyTitle: "KNS Information Technologies",
        companyLink: "https://www.kns.com.tr/",
        location: "Istanbul, Turkey",
        jobTitle: "Business/Technical Analyst",
        startDate: "07/2019",
        endDate: "02/2023",
        description: "Worked as a business analyst in designing IT processes for managing indoor data of shopping malls and airports.",
        items: [
          "Managing end-to-end business analysis processes by bridging business and technical teams.",
          "Improving business processes, software development, and API integrations.",
          "Optimizing business processes through process modeling.",
          "Preparing and maintaining end-user documentation.",
          "User experience design and UI/UX design.",
          "Writing required Oracle PL/SQL queries in business processes.",
          "Analyzing and testing API integration processes.",
        ],
      },
      {
        companyTitle: "Geotek / IBB Metro Istanbul",
        companyLink: "#",
        location: "Istanbul, Turkey",
        jobTitle: "Business/Technical Analyst",
        startDate: "12/2016",
        endDate: "06/2019",
        description: "Worked as a business analyst for the project of digitizing Metro Istanbul's corporate document and archive processes. Managed system integration processes by identifying document management, data classification, OCR, and archiving needs.",
        items: [
          "Preparing BRD documents, managing SDLC-compliant documentation with JIRA and Confluence.",
          "Conducting stakeholder meetings, clarifying and prioritizing requirements.",
          "SQL data analysis, API testing with Postman and SOAP UI, and UAT process management.",
          "Ensuring alignment between business needs and technical implementation with cross-functional teams.",
          "Managing quality assurance processes.",
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
        description: "Türkiye'nin önde gelen dijital medya platformunda milyonlarca kullanıcıya hizmet veren microservices mimarisinde full stack developer olarak görev yaptım.",
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
        description: "Perakende (Migros, A101, BİM, LC Waikiki) sektöründe büyük müşteriler için yapılan Web platformu ile entegrasyon ve veri analizi süreçlerini yönettim.",
        items: [
          "Agile ve SDLC metodolojileri ile uçtan uca iş analizi süreçlerinin yönetilmesi.",
          "Sunum, raporlama, iş takibi ve ekip koordinasyonunun sağlanması.",
          "İş ihtiyaçlarını analiz ederek teknik gereksinimlere dönüştürülmesi.",
          "Visio kullanılarak iş süreçlerinin modellenmesi.",
          "JIRA ve Confluence kullanılarak backlog talep ve dokümantasyon yönetimi.",
          "Süreç modelleme ve analiz dokümanlarının hazırlanması (Use Case, GTD, TTD, akış diyagramları).",
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
        description: "Avm ve havalimanlarının iç mekan verilerinin yönetimi için IT süreçlerinin tasarlanmasında iş analisti olarak görev yaptım.",
        items: [
          "İş ve teknik ekipler arasında köprü kurarak uçtan uca iş analizi süreçlerinin yönetilmesi.",
          "İş süreçlerini iyileştirmek, yazılım geliştirme ve API entegrasyonları sağlamak.",
          "Süreç modelleme yaparak iş süreçlerini optimize etmek.",
          "Son kullanıcı kullanım dokümanının hazırlanması ve güncel tutulması.",
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
        description: "Metro İstanbul'un kurumsal doküman ve arşiv süreçlerinin dijital ortama aktarılması projesi için iş analisti olarak görev yaptım. Doküman yönetimi, veri sınıflandırma, OCR ve arşivleme ihtiyaçlarını belirleyerek sistem entegrasyonu süreçlerini yönettim.",
        items: [
          "BRD dokümanları hazırlanması, JIRA ve Confluence ile SDLC uyumlu dokümantasyon yönetimi sağlanması.",
          "Paydaş toplantılarının yürütülmesi, gereksinimlerin netleştirilmesi ve önceliklendirilmesi.",
          "SQL ile veri analizi, Postman ve SOAP UI ile API testleri ve UAT süreç yönetimi sağlanması.",
          "Çapraz fonksiyonel ekiplerle iş ihtiyaçları ve teknik uygulama arasında uyum sağlanması.",
          "Kalite güvence süreçlerinin yönetilmesi."
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
