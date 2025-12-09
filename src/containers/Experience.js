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
        jobTitle: "Software Developer",
        startDate: "04/2025",
        endDate: "Present",
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
        jobTitle: "Software Developer",
        startDate: "02/2023",
        endDate: "04/2025",
        items: [
          "Designed and maintained an ETL (Extract, Transform, Load) pipeline to provide retailers' store, product, and inventory data to online platforms using AWS services like Lambda, S3, ECS, ECR with Terraform. Developed a hashing-based data flow difference tool that reduced ETL load by over 80%.",
          "Ensured the data produced by the pipeline was securely and correctly delivered to respective platforms via APIs (Google Business Profile, Google Content API, Google Ads, Google Merchant Center, Meta, Apple).",
          "Developed and maintained backend RESTful APIs (NestJS, TypeScript) for data processing and delivery. Designed user control panels, report pages (ReactJS, TypeScript, MUI), and data integration channels. Conducted end-to-end tests using Cypress for user scenarios.",
          "Managed and troubleshooted Terraform-deployed infrastructure stacks (EC2, ECS) and MongoDB database layers. Configured custom alerts (SNS) for early detection of infrastructure and database anomalies.",
        ],
      },
      {
        companyTitle: "KNS Information Technologies",
        companyLink: "https://www.kns.com.tr/",
        location: "Istanbul, Turkey (Remote)",
        jobTitle: "Software Developer",
        startDate: "07/2019",
        endDate: "02/2023",
        items: [
          "Specialized in creating indoor maps for large facilities like shopping malls, airports, and hospitals, integrating them with Apple and Google Maps.",
          "I actively participated in all integration and development efforts, including Frontend, Backend, DevOps, and UI/UX design, for integration management. In this scope, I developed and maintained RESTful backend APIs (NestJS, TypeScript) for data processing and delivery. Designed user control panels, reporting pages (ReactJS, TypeScript, MUI), and data integration channels. Conducted end-to-end tests using Cypress for user scenarios. Additionally, I managed and troubleshooted Terraform-deployed infrastructure stacks (EC2, ECS) and MongoDB database layers. Configured custom alerts (SNS) for early detection of infrastructure and database anomalies.",
        ],
      },
      {
        companyTitle: "Geotek Geographic Information Systems",
        companyLink: "#",
        location: "Istanbul, Turkey",
        jobTitle: "GIS Specialist",
        startDate: "12/2016",
        endDate: "06/2019",
        items: [
          "Successfully created 3D GIS maps of complex structures, including metro stations covering mechanical (sanitary, fire, ventilation), electrical, and structural disciplines by analyzing thousands of maps.",
          "Conducted extensive work in 3D modeling and data integration throughout the project, ensuring the structural elements of stations were accurately integrated to meet high precision and compatibility standards at all stages.",
          "Managed and controlled the prepared 3D data models from the start to the end of the project, maintaining data integrity and accessibility. Used advanced data analysis techniques to overcome project-specific challenges.",
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
        location: "İstanbul, Türkiye (Uzaktan)",
        jobTitle: "Software Developer",
        startDate: "04/2025",
        endDate: "Halen",
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
        location: "İstanbul, Türkiye (Uzaktan)",
        jobTitle: "Software Developer",
        startDate: "02/2023",
        endDate: "04/2025",
        items: [
          "Perakendecilerin mağaza, ürün ve stok verilerini online platformlara sunmak için AWS hizmetleri (Lambda, S3, ECS, ECR) ve Terraform ile ETL (Extract, Transform, Load) pipeline tasarımını yaptım ve sürdürdüm. Hashing tabanlı veri fark aracını geliştirerek ETL yükünü %80'in üzerinde azalttım.",
          "Pipeline tarafından üretilen verilerin ilgili platformlara güvenli ve doğru bir şekilde API'lar aracılığıyla iletilmesini sağladım (Google Business Profile, Google Content API, Google Ads, Google Merchant Center, Meta, Apple).",
          "Veri işleme ve iletimi için RESTful backend API'leri (NestJS, TypeScript) geliştirdim ve sürdürdüm. Kullanıcı kontrol panelleri, rapor sayfaları (ReactJS, TypeScript, MUI) ve veri entegrasyon kanalları tasarladım. Kullanıcı senaryoları için Cypress kullanarak uçtan uca testler gerçekleştirdim.",
          "Terraform ile dağıtılan altyapı yığınlarını (EC2, ECS) ve MongoDB veritabanı katmanını yönettim ve sorun giderdim. Altyapı ve veritabanı anormalliklerinin erken tespiti için özel uyarılar (SNS) kurdum.",
        ],
      },
      {
        companyTitle: "KNS Bilgi Teknolojileri",
        companyLink: "https://www.kns.com.tr/",
        location: "İstanbul, Türkiye (Uzaktan)",
        jobTitle: "Software Developer",
        startDate: "07/2019",
        endDate: "02/2023",
        items: [
          "AVM, havaalanı ve hastane gibi büyük yapıların  Apple ve Google Maps ile entegrasyon sağladım.",
          "Entegrasyon yönetimi için Frontend, Backend, DevOps ve UI/UX tasarımı dahil tüm entegrasyon ve geliştirme çalışmalarında aktif olarak görev aldım. Bu kapsamda, veri işleme ve iletimi için RESTful backend API'leri (NestJS, TypeScript) geliştirdim ve sürdürdüm. Kullanıcı kontrol panelleri, rapor sayfaları (ReactJS, TypeScript, MUI) ve veri entegrasyon kanalları tasarladım. Kullanıcı senaryoları için Cypress kullanarak uçtan uca testler gerçekleştirdim. Ayrıca, Terraform ile dağıtılan altyapı yığınlarını (EC2, ECS) ve MongoDB veritabanı katmanını yönettim ve sorun giderdim. Altyapı ve veritabanı anormalliklerinin erken tespiti için özel uyarılar (SNS) kurdum.",
        ],
      },
      {
        companyTitle: "Geotek Coğrafi Bilgi Sistemleri",
        companyLink: "#",
        location: "İstanbul, Türkiye",
        jobTitle: "GIS Specialist",
        startDate: "12/2016",
        endDate: "06/2019",
        items: [
          "Binlerce harita verisini analiz ederek metro istasyonlarının mekanik, elektrik ve statik disiplinlerini kapsayan 3D GIS haritalarını başarıyla hazırladım.",
          "Proje boyunca 3D modelleme ve veri entegrasyonu konularında kapsamlı çalışmalar yürüttüm, yüksek doğruluk ve uyumluluk standartlarını sağladım.",
          "Projenin başından sonuna kadar 3D veri modellerinin yönetimi ve kontrolünü üstlenerek veri bütünlüğünü korudum.",
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
            items={job.items.map((item, idx) => (
              <span key={idx}>{item}</span>
            ))}
          />
        ))}
      </div>
    );
  }
}

export default Experience;
