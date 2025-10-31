import CoreConcept from "./CoreConcept.jsx";
import { CORE_CONCEPTS } from "../data.js";

export default function CoreConcepts() {
  const coreConcepts = CORE_CONCEPTS.map((concept) => (
    <CoreConcept {...concept} key={concept.label} />
  ));

  return (
    <section id="core-concepts">
      <h2>Core concepts</h2>
      <ul>{coreConcepts}</ul>
    </section>
  );
}
