import React, { useEffect, useState,useContext } from "react";
import { Header,Button } from "semantic-ui-react";
import { LanguageContext } from "../utils/languageContext";


const translations = {
  en: {
    title: "Onur TÜYSÜZ ▸ CV",
    name: "Onur TÜYSÜZ",
    role: "Software Developer",
    contact: "+90 506 511 78 07",
    email: "onurtuysuz63@gmail.com",
    github: "github.com/onrtysz",
    linkedin: "linkedin/onur-tüysüz-bb7104141",
  },
  tr: {
    title: "Onur TÜYSÜZ ▸ Özgeçmiş",
    name: "Onur TÜYSÜZ",
    role: "Yazılım Geliştirici",
    contact: "+90 506 511 78 07",
    email: "onurtuysuz63@gmail.com",
    github: "github.com/onrtysz",
    linkedin: "linkedin/onur-tüysüz-bb7104141",
  },
};

export default function MyHeader() {
  const { language, changeLanguage } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <div>
      {/* Dil değiştirme butonları */}
      <div style={{ display: "flex", justifyContent: "flex-end", padding: "5px" }}>
      <Button
        size="mini" 
        color="linkedin" 
        onClick={() => changeLanguage(language === "en" ? "tr" : "en")}
      >
        {language === "en" ? "TR" : "EN"} {/* Dil durumuna göre buton metni */}
      </Button>
      </div>

      {/* Başlık */}
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
        }}
        className={"px12"}
      >
        <span>{t.contact}</span>
        &nbsp;&nbsp;{"•"}&nbsp;&nbsp;
        <a
          target="_blank"
          rel="noopener noreferrer"
          className={"colorHighlight"}
        >
          {t.email}
        </a>
        &nbsp;&nbsp;{"•"}&nbsp;&nbsp;
        <a
          href={`https://${t.github}`}
          target="_blank"
          rel="noopener noreferrer"
          className={"colorHighlight"}
        >
          {t.github}
        </a>
        &nbsp;&nbsp;{"•"}&nbsp;&nbsp;
        <a
          href={`https://${t.linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
          className={"colorHighlight"}
        >
          {t.linkedin}
        </a>
      </div>
    </div>
  );
}
