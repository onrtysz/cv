import React from "react";
import { Container, Divider } from "semantic-ui-react";
import "./App.css";
import Achievements from "./containers/Achievements";
import Education from "./containers/Education";
import Experience from "./containers/Experience";
import Footer from "./containers/Footer";
import Header from "./containers/Header";
import Skills from "./containers/Skills";
import { LanguageProvider } from "./utils/languageContext";

function App() {
  return (
    <Container text>
      <Divider hidden style={{ marginTop: 10 }} className="hideFromPrint" />
      <LanguageProvider>
      <Header />
      <Experience />
      <Education />
      <Skills />
      <Footer />
      </LanguageProvider>
      <Divider hidden style={{ marginTop: 10 }} className="hideFromPrint" />
    </Container>
  );
}

export default App;
