import React from "react";
import SectionItem from "../components/SectionItem";
import SectionTitle from "../components/SectionTitle";

class Experience extends React.Component {
  render() {
    return (
      <div>
        <SectionTitle title={"EXPERIENCE"} />
        <SectionItem
          companyTitle={
            <a
              href="https://venuex.io/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "rgba(0,0,0,.87)" }}
            >
              VenueX
            </a>
          }
          location={"İstanbul, Turkey (Remote)"}
          jobTitle={"Software Developer"}
          startDate={"02/2023"}
          endDate={"Halen"}
          items={[
            <span>
              Perakendecilerin mağaza, ürün ve stok verilerini online
              platformlara sunmak için ETL (Extract, Transform, Load) pipeline
              tasarımını yaptım ve sürdürdüm (AWS ürünlerinden Lambda, S3, ECS,
              ECR vb. Terraform ile ). Veri akışı fark aracını hashing
              kullanarak geliştirdim ve besleme yükünü %80'den fazla azalttım.
            </span>,
            <span>
              Pipeline vasıtasıyla üretilen verilerin ilgili platformlara data
              güvenliği ve doğrumlarını yaparak API'lar ile iletilmesini
              sağladım (Google Business Profile, Google Content API, Google Ads,
              Google Merchant Center, Meta, Apple)
            </span>,
            <span>
              Perakendecilerin verilerinin iletilmesi ve işlenmesi için backend
              RESTful API'leri (NestJS, TypeScript) geliştirdim ve sürdürdüm,
              veri tutarlılığı için özel doğrulamalarla birlikte. kullanıclar
              için kontrol panelleri, rapor sayfaları (ReactJS, TypeScript, MUI)
              ve veri entegrasyon kanalları geliştirdim. Kullanıcı senaryoları
              için Cypress kullanarak uçtan uca testler gerçekleştirdim.
            </span>,
            <span>
              Terraform ile dağıtılan altyapı yığınını (EC2, ECS) ve MongoDB
              veritabanı katmanını sürdürdüm ve sorunlarını giderdim. Altyapı ve
              veritabanı anormalliklerinin erken tespiti için özel uyarılar
              (SNS) ve bildirimleri kurdum.
            </span>,
          ]}
        />
        <SectionItem
          companyTitle={
            <a
              href="https://www.kns.com.tr/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "rgba(0,0,0,.87)" }}
            >
              KNS Information Technologies
            </a>
          }
          location={"İstanbul, Turkey (Remote)"}
          jobTitle={"Software Developer-GIS Specialist"}
          startDate={"07/2019"}
          endDate={"02/2023"}
          items={[
            <span>
            AVM, havaalanı, hastane gibi büyük yapıların iç mekan haritalarının oluşturulması ve bu haritaların Apple ve Google Maps ile entegrasyonu konusunda GIS uzmanlığı yaptım.
            </span>,
            <span>
            Yapılan iç mekanların, haritalanması ve yönetimi için web paneli yapımında Frontend, Backend, DevOps ve UI/UX tasarımı dahil olmak üzere tüm entegrasyon ve geliştirme çalışmalarında aktif olarak görev aldım.
            </span>,
          ]}
        />
      
       
        <SectionItem
          companyTitle={
            <a
             
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "rgba(0,0,0,.87)" }}
            >
            Geotek Coğrafi Bilgi Sistemleri
            </a>
          }
          location={"İstanbul, Turkey"}
          jobTitle={"GIS Specialist"}
          startDate={"12/2016"}
          endDate={"06/2019"}
          items={[
            <div>
             Yüzbinlerce pafta üzerinden okuma yaparak, metro istasyonlarının mekanik (sıhhi, yangın, havalandırma), elektrik ve statik disiplinlerini kapsayan kompleks yapıların 3 boyutlu GIS haritalarını başarıyla hazırladım.
              <div style={{ marginTop: "5px" }}>
              Proje süresince 3D modelleme ve veri entegrasyonu konularında derinlemesine çalışmalar yürüttüm. İstasyonların yapısal unsurlarının doğru şekilde entegre edilmesini sağlayarak, projenin her aşamasında yüksek doğruluk ve uyumluluk standartlarını garanti altına aldım.
              </div>
              <div style={{ marginTop: "5px" }}>
                {"◦"}&nbsp;&nbsp;Hazırlanan 3D veri modellerinin yönetimi ve kontrolü görevlerini üstlenerek, projenin başlangıcından sonuna kadar veri bütünlüğünü ve erişilebilirliğini sürdürdüm. Bu süreçte, projeye özgü zorlukların üstesinden gelmek için ileri düzey veri analiz tekniklerini kullandım.
              </div>
            </div>,
          ]}
        />
        
      </div>
    );
  }
}

export default Experience;
