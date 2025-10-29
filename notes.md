# React Course nodes

- react is a javascript library for building UI
- the jsx format is not recognized by the browser. A react project must pass through a build process to transform the jsx format in plain js that can be understood by the browsers
- values for a component can be passed by setting an attribute
- styles can be split in several files (near the component.jsx file) but keen in mind that the style is not restricted for the component, but is globally set
- a component always has a default prop, the children, that represent all the content between the open and closing tags on the component. If between them there is JSX code, all that code can be found inside the default children prop (component composition)
- components will be executed only once
- hooks must be called in the top level component function (neither inside a if statement)
- useState is very important because handle same data stored by react which when change will trigger the component to execute again
