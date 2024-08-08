import React, { useEffect } from "react";
import { Header } from "semantic-ui-react";

export default function MyHeader() {
  useEffect(() => {
    document.title = "Onur TÜYSÜZ ▸ CV";
  });

  return (
    <div>
      <Header as="h1" className="fontHeader">
       Onur TÜYSÜZ
      </Header>
      <div style={{ textAlign: "center" }} className="px14">
      Software Developer
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
        <span>+90 506 511 78 07</span>
        &nbsp;&nbsp;{"•"}&nbsp;&nbsp;
        <a
          target="_blank"
          rel="noopener noreferrer"
          className={"colorHighlight"}
        >
          onurtuysuz63@gmail.com
        </a>
        &nbsp;&nbsp;{"•"}&nbsp;&nbsp;
        <a
          href="https://github.com/onrtysz"
          target="_blank"
          rel="noopener noreferrer"
          className={"colorHighlight"}
        >
       github.com/onrtysz
        </a>
        &nbsp;&nbsp;{"•"}&nbsp;&nbsp;
        <a
          href="https://www.linkedin.com/in/onur-t%C3%BCys%C3%BCz-bb7104141/"
          target="_blank"
          rel="noopener noreferrer"
          className={"colorHighlight"}
        >
          linkedin/onur-tüysüz-bb7104141
        </a>
      </div>
    </div>
  );
}
