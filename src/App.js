import React, { useState } from "react";
import "./App.css";
import NavigationModal from "./sections/NavigationModal";
import MainSection from "./sections/MainSection";
import TeamSection from "./sections/TeamSection";
import ScheduleSection from "./sections/ScheduleSection";
import ContactSection from "./sections/ContactSection";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="App">
      <MainSection onClick={() => setModalIsOpen(true)} />
      <TeamSection />
      <ScheduleSection />

      {/* <NavigationModal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      /> */}

      <ContactSection />
      {/* <MainSection onClick={() => setModalIsOpen(true)} />
       */}
    </div>
  );
}

export default App;
