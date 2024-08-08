import React from "react";
import SectionItem from "../components/SectionItem";
import SectionTitle from "../components/SectionTitle";

class Education extends React.Component {
  render() {
    return (
      <div>
        <SectionTitle title={"EDUCATION"} />

        <SectionItem
          companyTitle={
            <a
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "rgba(0,0,0,.87)" }}
            >
              Yıldız Teknik Üniversitesi
            </a>
          }
          location={"İstanbul, Turkey"}
          jobTitle={"Harita Mühendisliği"}
          startDate={"2012"}
          endDate={"2016"}
          items={[
          ]}
          relevantItems={[
          ]}
        />
        <SectionItem
          companyTitle={
            <a
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "rgba(0,0,0,.87)" }}
            >
              Siverek Anodu Lisesi
            </a>
          }
          location={"Şanlıurfa, Turkey"}
          jobTitle={"Anadolu Lisesi"}
          startDate={"2007"}
          endDate={"2011"}
          items={[]}
        />
          <SectionItem
          companyTitle={
            <a
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "rgba(0,0,0,.87)" }}
            >
             Rekabet Kurumu Fen Lisesi
            </a>
          }
          location={"Diyarbakır, Turkey"}
          jobTitle={"Fen Lisesi"}
          startDate={"2007"}
          endDate={"2007"}
          items={[]}
        />
      </div>
    );
  }
}

export default Education;
