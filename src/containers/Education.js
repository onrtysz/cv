import React, { useContext } from "react";
import SectionItem from "../components/SectionItem";
import SectionTitle from "../components/SectionTitle";
import { LanguageContext } from "../utils/languageContext";

const translations = {
  en: {
    title: "EDUCATION",
    schools: [
      {
        companyTitle: "Yıldız Technical University",
        location: "Istanbul, Turkey",
        jobTitle: "Geomatics Engineering",
        startDate: "2012",
        endDate: "2016",
      },
      {
        companyTitle: "Siverek Anatolian High School",
        location: "Şanlıurfa, Turkey",
        jobTitle: "High School",
        startDate: "2007",
        endDate: "2011",
      },
      {
        companyTitle: "Rekabet Kurumu Science High School",
        location: "Diyarbakır, Turkey",
        jobTitle: "Science High School",
        startDate: "2007",
        endDate: "2007",
      },
    ],
  },
  tr: {
    title: "EĞİTİM",
    schools: [
      {
        companyTitle: "Yıldız Teknik Üniversitesi",
        location: "İstanbul, Türkiye",
        jobTitle: "Geomatik Mühendisliği",
        startDate: "2012",
        endDate: "2016",
      },
      {
        companyTitle: "Siverek Anadolu Lisesi",
        location: "Şanlıurfa, Türkiye",
        jobTitle: "Anadolu Lisesi",
        startDate: "2007",
        endDate: "2011",
      },
      {
        companyTitle: "Rekabet Kurumu Fen Lisesi",
        location: "Diyarbakır, Türkiye",
        jobTitle: "Fen Lisesi",
        startDate: "2007",
        endDate: "2007",
      },
    ],
  },
};

class Education extends React.Component {
  static contextType = LanguageContext;

  render() {
    const { language } = this.context;
    const t = translations[language];

    return (
      <div>
        <SectionTitle title={t.title} />
        {t.schools.map((school, index) => (
          <SectionItem
            key={index}
            companyTitle={
              <a
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "rgba(0,0,0,.87)" }}
              >
                {school.companyTitle}
              </a>
            }
            location={school.location}
            jobTitle={school.jobTitle}
            startDate={school.startDate}
            endDate={school.endDate}
            items={[]}
          />
        ))}
      </div>
    );
  }
}

export default Education;
