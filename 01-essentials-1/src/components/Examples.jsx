import { useState } from "react";
import { EXAMPLES, CORE_CONCEPTS } from "../data.js";
import TabButton from "./TabButton.jsx";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState(); // initial state

  console.log("Examples component rendered");

  // update the state and execute again the component
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }
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
    <section id="examples">
      <h2>Examples</h2>
      <menu>{tabButtons}</menu>
      <div id="tab-content">{tabContent}</div>
    </section>
  );
}
