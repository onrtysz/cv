import React, { useEffect, useState,useContext } from "react";
import { Header,Button } from "semantic-ui-react";
import { LanguageContext } from "../utils/languageContext";


const translations = {
  en: {
    title: "Onur TÜYSÜZ ▸ CV",
    name: "Onur TÜYSÜZ",
    role: "Business/Technical Analyst & Full Stack Developer",
    contact: "+90 506 511 78 07",
    email: "onurtuysuz63@gmail.com",
    github: "github.com/onrtysz",
    linkedin: "linkedin.com/in/onrtysz/",
  },
  tr: {
    title: "Onur TÜYSÜZ ▸ Özgeçmiş",
    name: "Onur TÜYSÜZ",
    role: "İş/Teknik Analisti & Full Stack Developer",
    contact: "+90 506 511 78 07",
    email: "onurtuysuz63@gmail.com",
    github: "github.com/onrtysz",
    linkedin: "linkedin.com/in/onrtysz/",
  },
};

export default function MyHeader() {
  const { language, changeLanguage } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <div>
      {/* Language toggle button */}
      <div style={{ display: "flex", justifyContent: "flex-end", padding: "5px" }}>
        <Button
          size="mini"
          color="linkedin"
          onClick={() => changeLanguage(language === "en" ? "tr" : "en")}
        >
          {language === "en" ? "EN" : "TR"}{" "}
        </Button>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          marginBottom: "20px",
          position: "relative",
        }}
      >
        {/* Profile Photo */}
        <div className="profile-photo-container">
          <img
            src="/cv/profile-photo.jpg"
            alt="Profile"
            className="profile-photo"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "flex";
            }}
          />
          <div
            style={{
              display: "none",
              color: "#999",
              fontSize: "12px",
              textAlign: "center",
              padding: "10px",
            }}
          >
            Profile Photo
          </div>
        </div>

        {/* Name and Contact Info */}
        <div style={{ flex: 1, textAlign: "center", paddingTop: "20px" }}>
          <Header as="h1" className="fontHeader">
            {t.name}
          </Header>

          <div style={{ textAlign: "center" }} className="px14">
            {t.role}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              letterSpacing: "0.33px",
              flexWrap: "wrap",
              marginTop: "10px",
            }}
            className="px12"
          >
            <span>{t.contact}</span>
            &nbsp;&nbsp;{"•"}&nbsp;&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="colorHighlight"
            >
              {t.email}
            </a>
            &nbsp;&nbsp;{"•"}&nbsp;&nbsp;
            <a
              href={`https://${t.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="colorHighlight"
            >
              {t.github}
            </a>
            &nbsp;&nbsp;{"•"}&nbsp;&nbsp;
            <a
              href={`https://${t.linkedin}`}
              target="blank"
              rel="noopener noreferrer"
              className="colorHighlight"
            >
              {t.linkedin}
            </a>
          </div>
        </div>

        {/* Spacer for balance */}
        <div style={{ width: "120px", height: "160px", flexShrink: 0 }}></div>
      </div>
    </div>
  );
}
