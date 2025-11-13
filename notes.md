# React Course nodes

- react is a javascript library for building UI
- the `jsx` format is not recognized by the browser. A react project must pass through a build process to transform the jsx format in plain js that can be understood by the browsers
- values for a component can be passed by setting an attribute
- styles can be split in several files (near the component.jsx file) but keen in mind that the style is not restricted for the component, but is globally set
- a component always has a default prop, the `children`, that represent all the content between the open and closing tags on the component. If between them there is JSX code, all that code can be found inside the default `children` prop (component composition)
- components will be executed only once
- hooks must be called in the top level component function (neither inside a if statement)
- useState is very important because handle same data stored by react which when change will trigger the component to execute again
- add the `key` attribute to a component that will be rendered dynamically. The value of that attribute must be something unique; this is used by react to uniquely identify every element of the list
- is possible to not use `jsx` format to create react applications, so the code don't have to be transformed by the build process. But it's not convenient, because the code that have to be use to is more verbose and difficult.
- use the `Fragment` component when you will return (from another component) more than one value and you don't want to add an extra div. This because is js is not allowed to return multiple values from a function
- if a component is executed again (for the right reasons) but cause the execution of other components that shouldn't be executed again, is a sign of poor component design. Split the components for feature
- le proprietà che vengono assegnate ad un custom componente non vengono automaticamente passate nel codice jsx che viene utilizzato un quel componente. Devono essere settate manulamente
- come prop di un componente può essere passato anche un altro componente
- un wrapper component è un custom component generico costruito attorno ad un elemento html che ha dei signoficati. Se nella nostra app tutti le section sono fatte in un corto modo (hanno dentro sempre gli stessi elementi html) e hanno lo stesso stile, posso pensare di fare un wrapper component attorno al elemento section. Non fare wrapper component per partito preso, solo se aggiunge del valore (hanno sempre lo stesso stile, struttura, comportamentos)
- non serve mettere per forza tutto l'HTML nei componenti. Se c'è un pezzo di UI statica, che non cambia a seconda di nessuno stato e per la quale non occorre interagirci, basta metterla nel file index.html (tipo un header statico)
- i componenti sono completamente isolati tra loro
- aggiornare lo stato di array o oggetti in modo immutabile, creandone di nuovi rispetto ai precedenti
- quando i dati di due componenti fratelli devono interagire, spostare la gestione dello stato nel componente padre

## CSS

- vanilla css, se separato in diversi componenti, non è "scoped" solo per esso, si possono avere quindi conflitti
- se lo stile viene applicato inline invece, è scoped solamente al componente scelto. Per applicare lo stile, seguire l'esempio

```js
<p style={{
  color: "red",
  textAlign: "left"
}}>
```

Utilizzare inline css è molto sconsigliato, se non per applicare classi o meno, ma non per applicare stili a mano.

Aggiungere classi staticamente + aggiungere classi condizionalmente

```js
<label className={`label ${emailNotValid ? "invalid" : ""}`}>Email</label>
```

Utilizzare i CSS modules per avere stili scoped.
Occorre che vite sia configurato per utilizzare i CSS modules.
Cambiare il nome al foglio di stile del componente `name.module.css`

```js
import classes from "./Header.module.css";

<p className={classes.paragraph}>A community of artists and art-lovers.</p>;
```
