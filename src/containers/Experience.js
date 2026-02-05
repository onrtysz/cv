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
        location: "Istanbul, Turkey (Remote)",
        jobTitle: "Full Stack Developer",
        startDate: "04/2025",
        endDate: "02/2026",
        items: [
          "Developed and maintained high-performance backend services using Node.js and Koa.js framework within a microservices architecture to handle millions of daily user interactions and content delivery for Turkey's leading digital media platform.",
          "Designed and implemented scalable RESTful APIs and data processing pipelines using AWS services and Kubernetes to support content management, user analytics, and real-time engagement features across web and mobile platforms.",
          "Built robust data storage and retrieval systems utilizing MongoDB for content management, DynamoDB for user sessions and analytics, and Elasticsearch for advanced search capabilities and content recommendation algorithms.",
          "Architected and deployed microservices infrastructure on AWS using Docker containers, implementing CI/CD pipelines, monitoring solutions, and auto-scaling policies to ensure 99.9% uptime and optimal performance during traffic spikes.",
          "Collaborated with frontend teams to develop responsive user interfaces using React.js and implemented comprehensive testing strategies including unit and integration testing to maintain code quality and system reliability.",
        ],
      },
      {
        companyTitle: "VenueX",
        companyLink: "https://venuex.io/",
        location: "Istanbul, Turkey",
        jobTitle: "Business/Technical Analyst",
        startDate: "02/2023",
        endDate: "04/2025",
        items: [
          "Managed end-to-end business analysis for enterprise retail integrations with Turkey's leading retail chains such as Migros, A101, BİM, and LC Waikiki, working with Agile and SDLC methodologies, enabling big data processing capabilities.",
          "Responsible for presentations, reporting, team task distribution, and task tracking as part of my role.",
          "Gathered and analyzed business requirements from retail customers for e-commerce platform integrations. Prepared BRD and Use Case documents for ETL pipeline to be developed using AWS services (Lambda, S3, ECS).",
          "Organized stakeholder workshops using Miro, performed collaborative requirements mapping. Created detailed technical specifications and data flow diagrams for multi-platform integrations (Google Business Profile, Google Ads, Meta, Apple).",
          "Defined functional requirements for backend APIs (NestJS, TypeScript) and frontend dashboards (ReactJS, MUI), ensuring alignment between business needs and technical implementation.",
          "Validated API integrations using Postman and Swagger, tested RESTful services, and verified data accuracy between retail systems and e-commerce platforms. Documented API specifications for development teams.",
          "Conducted comprehensive API tests with SOAP UI, performed functional and regression tests on ETL pipelines. Identified optimization opportunities that reduced data processing load by 80%.",
          "Wrote complex queries for MongoDB to validate data integrity, generate inventory reports, and support business intelligence needs for retail analytics.",
          "Managed coordinated UAT processes with retail customers, documented test scenarios and acceptance criteria. Tracked defects and resolutions through JIRA.",
          "Led sprint planning, backlog management, and daily meetings following Agile/Scrum methodology. Served as a bridge between business stakeholders and development teams.",
        ],
      },
      {
        companyTitle: "KNS Information Technologies",
        companyLink: "https://www.kns.com.tr/",
        location: "Istanbul, Turkey (Remote)",
        jobTitle: "Business/Technical Analyst",
        startDate: "07/2019",
        endDate: "02/2023",
        items: [
          "Led requirements gathering processes for indoor mapping solutions with Apple and Google Maps integration for shopping malls, airports, and hospitals. Prepared BRD, GTD, TTD, and Use Case documentation.",
          "Reviewed UI/UX mockups with design teams on Figma, ensuring alignment between user requirements and interface designs. Created user flow diagrams and wireframe feedback documentation.",
          "Modeled business processes and system integrations using MS Visio, created detailed data flow diagrams and workflow documentation for location-based services.",
          "Tested RESTful APIs with Postman and validated SOAP services with SOAP UI, ensuring map data synchronization accuracy between internal systems and Apple/Google platforms.",
          "Performed database analysis with complex SQL queries to validate location data integrity and created reports for stakeholder decision-making processes.",
          "Coordinated UAT sessions with end-users at client locations, documented feedback and managed defect resolutions through JIRA.",
          "Maintained project documentation and knowledge base in Confluence, facilitating knowledge transfer across development cycles.",
          "Collaborated with iOS and Android development teams to ensure mapping SDK integrations met functional specifications.",
        ],
      },
      {
        companyTitle: "Geotek Geographic Information Systems",
        companyLink: "#",
        location: "Istanbul, Turkey",
        jobTitle: "Business/Technical Analyst",
        startDate: "12/2016",
        endDate: "06/2019",
        items: [
          "Organized stakeholder meetings to identify business requirements and integration needs.",
          "Prepared BRD documents and actively participated in end-to-end management of documentation processes.",
          "Monitored project and request compliance with SDLC processes.",
          "Managed requests, defects, and bugs through JIRA; created dashboards in JIRA and maintained documentation in Confluence. Tracked project timeline and progress.",
          "Performed data analysis using SQL and similar tools.",
          "Conducted comprehensive data analysis on thousands of engineering documents across mechanical, electrical, and structural disciplines, creating detailed requirement specifications and functional documentation.",
          "Collaborated with cross-functional teams including engineers, project managers, and technical staff to ensure alignment between business needs and technical implementation throughout the project lifecycle.",
          "Developed and maintained project documentation, data quality standards, and validation procedures to ensure data integrity and compliance with industry standards.",
          "Performed gap analysis and impact assessments for system integrations, providing recommendations to optimize data workflows and improve operational efficiency.",
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
          "Türkiye'nin önde gelen dijital medya platformunda milyonlarca günlük kullanıcı etkileşimini ve içerik dağıtımını desteklemek için microservices mimarisinde Node.js ve Koa.js framework kullanarak yüksek performanslı backend servisleri geliştirdim ve sürdürdüm.",
          "Web ve mobil platformlarda içerik yönetimi, kullanıcı analitiği ve gerçek zamanlı etkileşim özelliklerini desteklemek için AWS hizmetleri ve Kubernetes kullanarak ölçeklenebilir RESTful API'ler ve veri işleme pipeline'ları tasarladım ve uyguladım.",
          "İçerik yönetimi için MongoDB, kullanıcı oturumları ve analitiği için DynamoDB, gelişmiş arama yetenekleri ve içerik öneri algoritmaları için Elasticsearch kullanan güçlü veri depolama ve geri alma sistemleri kurdum.",
          "Traffic artışları sırasında %99.9 uptime ve optimal performans sağlamak için Docker konteynerları kullanarak AWS üzerinde microservices altyapısını tasarladım, CI/CD pipeline'ları, izleme çözümleri ve otomatik ölçeklendirme politikaları uyguladım.",
          "Frontend ekipleriyle React.js kullanarak responsive kullanıcı arayüzleri geliştirmek için işbirliği yaptım ve kod kalitesini ve sistem güvenilirliğini korumak için unit ve entegrasyon testler dahil kapsamlı test stratejileri uyguladım.",
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
          "Migros, A101, BİM ve LC Waikiki gibi Türkiye'nin önde gelen perakende zincirleri için kurumsal perakende entegrasyonlarında uçtan uca Agile ve SDLC metodolojileri ile çalışarak iş analizi yönettim, bu sayede büyük verilerle çalışma olanağı sağladım.",
          "Rolümün sorumluluğu gereği sunum, raporlama, ekip iş paylaşımı ve iş takiplerini yaptım.",
          "E-ticaret platform entegrasyonları için perakende müşterilerinden iş gereksinimlerini topladım ve analiz ettim. AWS hizmetleri (Lambda, S3, ECS) kullanılarak geliştirilecek ETL pipeline için BRD ve Use Case dokümanları hazırladım.",
          "Miro kullanarak paydaş workshopları düzenledim, işbirlikçi gereksinim haritalama gerçekleştirdim. Çoklu platform entegrasyonları (Google Business Profile, Google Ads, Meta, Apple) için detaylı teknik spesifikasyonlar ve veri akış diyagramları oluşturdum.",
          "Backend API'ler (NestJS, TypeScript) ve frontend dashboardlar (ReactJS, MUI) için fonksiyonel gereksinimleri tanımladım, iş ihtiyaçları ile teknik uygulama arasındaki uyumu sağladım.",
          "Postman ve Swagger kullanarak API entegrasyonlarını doğruladım, RESTful servisleri test ettim ve perakende sistemleri ile e-ticaret platformları arasındaki veri doğruluğunu kontrol ettim. Geliştirme ekipleri için API spesifikasyonlarını dokümante ettim.",
          "SOAP UI ile kapsamlı API testleri, fonksiyonel ve regresyon testleri gerçekleştirdim. Veri işleme yükünde %80 azalma sağlayan optimizasyon fırsatlarını belirledim.",
          "Veri bütünlüğünü doğrulamak, envanter raporları oluşturmak ve perakende analitiği için iş zekası ihtiyaçlarını desteklemek üzere MongoDB için karmaşık sorguları yazdım.",
          "Perakende müşterilerle koordineli UAT süreçlerini yönettim, test senaryoları ve kabul kriterlerini dokümante ettim. Hataları ve çözümleri JIRA üzerinden takip ettim.",
          "Agile/Scrum metodolojisi takip ederek sprint planlama, backlog yönetimi ve günlük toplantıları yönettim. İş paydaşları ve geliştirme ekipleri arasında köprü görevi üstlendim.",
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
          "AVM, havaalanı ve hastane için Apple ve Google Maps entegrasyonlu iç mekan haritalama çözümleri için gereksinim toplama süreçlerini yönettim. BRD, GTD, TTD ve Use Case dokümantasyonu hazırladım.",
          "Figma üzerinde tasarım ekipleriyle UI/UX mockup'larını inceledim, kullanıcı gereksinimleri ile arayüz tasarımları arasındaki uyumu sağladım. Kullanıcı akış diyagramları ve wireframe geri bildirim dokümantasyonu oluşturdum.",
          "MS Visio kullanarak iş süreçlerini ve sistem entegrasyonlarını modelledim, lokasyon tabanlı hizmetler için detaylı veri akış diyagramları ve iş akışı dokümantasyonu oluşturdum.",
          "Postman ile RESTful API'leri test ettim ve SOAP UI ile SOAP servislerini doğruladım, dahili sistemler ile Apple/Google platformları arasındaki harita veri senkronizasyonu doğruluğunu sağladım.",
          "Karmaşık SQL sorguları ile veritabanı analizi yaparak lokasyon verisi bütünlüğünü doğruladım ve paydaş karar alma süreçleri için raporlar oluşturdum.",
          "Müşteri lokasyonlarında son kullanıcılarla UAT oturumları koordine ettim, geri bildirimleri dokümante ettim ve hata çözümlerini JIRA üzerinden yönettim.",
          "Confluence'da proje dokümantasyonu ve bilgi tabanı sürdürdüm, geliştirme döngüleri arasında bilgi transferini kolaylaştırdım.",
          "Haritalama SDK entegrasyonlarının fonksiyonel spesifikasyonları karşıladığından emin olmak için iOS ve Android geliştirme ekipleriyle işbirliği yaptım.",
        ],
      },
      {
        companyTitle: "Geotek Coğrafi Bilgi Sistemleri",
        companyLink: "#",
        location: "İstanbul, Türkiye",
        jobTitle: "İş/Teknik Analisti",
        startDate: "12/2016",
        endDate: "06/2019",
        items: [
          "İş gereksinimlerinin belirlenmesi ve entegrasyon ihtiyaçları için paydaş toplantıları düzenledim.",
          "BRD dokümanlarını hazırladım ve dokümantasyon süreçlerini uçtan uca yönetilmesinde aktif olarak görev aldım.",
          "Proje ve taleplerin SDLC süreçlerine uygunluğunu takip ettim.",
          "JIRA üzerinden talep, defect ve bug yönetimini gerçekleştirdim; JIRA'da dashboardlar hazırladım, Confluence'da dokümantasyon sağladım. Proje takvimi ve ilerleme takibini yaptım.",
          "SQL ve benzeri araçlarla veri analizleri gerçekleştirdim.",
          "Mekanik, elektrik ve yapısal disiplinlerdeki binlerce mühendislik dokümanı üzerinde kapsamlı veri analizi gerçekleştirdim, detaylı gereksinim spesifikasyonları ve fonksiyonel dokümantasyon oluşturdum.",
          "Proje yaşam döngüsü boyunca iş ihtiyaçları ile teknik uygulama arasındaki uyumu sağlamak için mühendisler, proje yöneticileri ve teknik personel dahil çapraz fonksiyonel ekiplerle işbirliği yaptım.",
          "Veri bütünlüğünü ve endüstri standartlarına uyumu sağlamak için proje dokümantasyonu, veri kalite standartları ve doğrulama prosedürleri geliştirdim ve sürdürdüm.",
          "Sistem entegrasyonları için boşluk analizi ve etki değerlendirmeleri yaparak veri iş akışlarını optimize etmek ve operasyonel verimliliği artırmak için öneriler sundum.",
        ],
      },
    ],
  },
};

class Experience extends React.Component {
  static contextType = LanguageContext;

  render() {
    const { language } = this.context;
    const t = translations[language];

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
            roleGroups={job.roleGroups}
            items={job.items ? job.items.map((item, idx) => (
              <span key={idx}>{item}</span>
            )) : undefined}
          />
        ))}
      </div>
    );
  }
}

export default Experience;
