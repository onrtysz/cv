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
        location: "Istanbul, Turkey (Remote)",
        jobTitle: "Business/Technical Analyst & Full Stack Developer",
        startDate: "02/2023",
        endDate: "04/2025",
        roleGroups: [
          {
            roleTitle: "Business/Technical Analyst Role",
            items: [
              "Gathered and analyzed business requirements from retail customers for e-commerce platform integrations. Transformed complex data integration needs into BRD and Use Case documents for ETL pipeline development.",
              "Organized stakeholder workshops using Miro, performing collaborative requirements mapping and process visualization. Created data flow diagrams for multi-platform integrations (Google Business Profile, Google Ads, Meta, Apple).",
              "Validated API integrations using Postman and Swagger, ensuring data accuracy between retail systems and e-commerce platforms. Wrote complex SQL queries for inventory and sales reporting.",
              "Conducted API tests with SOAP UI, performed functional and regression testing. Managed UAT processes ensuring seamless data synchronization across multiple platforms.",
              "Performed sprint planning and backlog management in JIRA, documented technical specifications in Confluence following Agile methodology.",
            ],
          },
          {
            roleTitle: "Full Stack Developer Role",
            items: [
              "Developed RESTful backend APIs (NestJS, TypeScript) and designed user control panels with reporting dashboards (ReactJS, TypeScript, MUI).",
              "Designed ETL pipeline with AWS services (Lambda, S3, ECS, ECR) and Terraform. Developed a hashing-based optimization tool that reduced ETL load by over 80%.",
              "Managed Terraform-deployed infrastructure and MongoDB databases, implemented monitoring solutions and proactive alert mechanisms (SNS).",
            ],
          },
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
        jobTitle: "İş/Teknik Analisti & Full Stack Developer",
        startDate: "02/2023",
        endDate: "04/2025",
        roleGroups: [
          {
            roleTitle: "İş/Teknik Analisti Görevi",
            items: [
              "Agile ve SDLC metodolojileri ile çalışarak iş analizi yönettim.",
              "E-ticaret platform entegrasyonları için perakende müşterilerinden iş gereksinimlerini topladım ve analiz ettim. Karmaşık veri entegrasyon ihtiyaçlarını veri dönüşüm pipelinelarını geliştirme için BRD ve Use Case dokümanlarına dönüştürdüm.",
              "Miro kullanarak paydaş workshopları düzenledim, işbirlikçi gereksinim haritalama ve süreç görselleştirme gerçekleştirdim. Çoklu platform entegrasyonları (Google Business Profile, Google Ads, Meta, Apple) için veri akış diyagramları oluşturdum.",
              "Postman ve Swagger kullanarak API entegrasyonlarını doğruladım, perakende sistemleri ve e-ticaret platformları arasındaki veri doğruluğunu sağladım. Envanter ve satış raporlaması için SQL sorguları yazdım.",
              "SOAP UI ile API testleri, fonksiyonel ve regresyon testleri gerçekleştirdim. Birden fazla platformda sorunsuz veri senkronizasyonu sağlayarak UAT süreçlerini yönettim.",
              "JIRA'da sprint planlama ve backlog yönetimi yaptım, Agile metodolojisi takip ederek teknik spesifikasyonları Confluence'da dokümante ettim.",
            ],
          },
          {
            roleTitle: "Full Stack Developer Görevi",
            items: [
              "RESTful backend API'leri (NestJS, TypeScript) geliştirdim ve kullanıcı kontrol panelleri ile raporlama dashboardları (ReactJS, TypeScript, MUI) tasarladım.",
              "AWS hizmetleri (Lambda, S3, ECS, ECR) ve Terraform ile veri dönüşüm pipelineları tasarladım. ETL yükünü %80'in üzerinde azaltan hashing tabanlı optimizasyon aracı geliştirdim.",
              "Terraform ile dağıtılan altyapıyı ve MongoDB veritabanlarını yönettim, izleme çözümleri ve proaktif uyarı mekanizmaları (SNS) uyguladım.",
            ],
          },
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
          "SQL sorguları ile veritabanı analizi yaparak lokasyon verisi bütünlüğünü doğruladım ve paydaş karar alma süreçleri için raporlar oluşturdum.",
          "Müşteri lokasyonlarında son kullanıcılarla UAT oturumları koordine ettim, geri bildirimleri dokümante ettim ve hata çözümlerini JIRA üzerinden yönettim.",
          "Confluence'da proje dokümantasyonlarını sağladım, geliştirme döngüleri arasında bilgi transferini kolaylaştırdım.",
          "Haritalama SDK entegrasyonlarının fonksiyonel spesifikasyonları karşıladığından emin olmak için iOS ve Android geliştirme ekipleriyle işbirliği yaptım.",
        ],
      },
      {
        companyTitle: "Geotech / İBB Metro Istanbul",
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
          "SoapUI ve Postman ile API testleri gerçekleştirdim.",
          "UAT süreçlerini yönettim, test senaryoları ve kabul kriterlerini dokümante ettim.",
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
