import { useState } from "react";

import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";
import TabButton from "./components/TabButton/TabButton.jsx";

import { CORE_CONCEPTS, EXAMPLES } from "./data.js";

function App() {
  const [selectedTopic, setSelectedTopic] = useState(); // initial state

  // update the state and execute again the component
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  const coreConcepts = CORE_CONCEPTS.map((concept) => (
    <CoreConcept {...concept} key={concept.label} />
  ));

  const tabButtons = CORE_CONCEPTS.map((concept) => {
    return (
      <TabButton
        isSelected={selectedTopic === concept.label}
        onSelect={() => handleSelect(concept.label)}
        key={concept.label}
      >
        {concept.title}
      </TabButton>
    );
  });

  const tabContent = selectedTopic ? (
    <div>
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>{EXAMPLES[selectedTopic].code}</code>
      </pre>
    </div>
  ) : (
    <p>Please select a topic.</p>
  );

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core concepts</h2>
          <ul>{coreConcepts}</ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>{tabButtons}</menu>
          <div id="tab-content">{tabContent}</div>
        </section>
      </main>
    </div>
  );
}

export default App;
