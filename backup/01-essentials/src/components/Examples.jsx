import { useState } from "react";
import { EXAMPLES, CORE_CONCEPTS } from "../data.js";
import TabButton from "./TabButton.jsx";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState(); // initial state

  // update the state and execute again the component
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }
  const tabButtons = CORE_CONCEPTS.map((concept) => {
    return (
      <TabButton
        isSelected={selectedTopic === concept.label}
        onClick={() => handleSelect(concept.label)}
        key={concept.label}
      >
        {concept.title}
      </TabButton>
    );
  });

  const tabContent = selectedTopic ? (
    // empty open and closing tags is the new way to use Fragment
    <>
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>{EXAMPLES[selectedTopic].code}</code>
      </pre>
    </>
  ) : (
    <p>Please select a topic.</p>
  );

  return (
    <Section id="examples" title="Examples">
      <Tabs ButtonsContainer="menu" buttons={tabButtons}>
        <div id="tab-content">{tabContent}</div>
      </Tabs>
    </Section>
  );
}
