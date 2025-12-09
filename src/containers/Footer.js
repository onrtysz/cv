import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "20px",
        }}
        className="px10"
      >
        <span>
          Designed and developed by{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/onrtysz"
          >
            Onur TÜYSÜZ
          </a>{" "}
        </span>
      </div>
    );
  }
}

export default Footer;
