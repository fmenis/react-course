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

### Refs

Un ref è un valore speciale gestito da react, viene aggiunto a qualsiasi elemento tramite la keyword `ref`.
Nella variabile associata vi sarà presente un oggetto `current` che avrà tutti i metodi e proprietà associate all'elemento dove è stato aggiunto il `ref`.

Uno degli utilizzi è quello di prendere il valore di un elemento solo quando serve, invece che gestire uno stato aggiuntivo per esso (eg: prendere il valore dell'input solo quando viene premuto il pulsante)

Quando il ref cambia il componente non viene eseguito di nuovo! Esattamente il contrario dello state.

È possibile anche utilizzare `ref` per gestire qualsiasi tipo di valore, non solo attaccarlo ad un elemento html. Ref gestirà quel valore che sarà "component specific" e non uguale per ogni instanza del componente.

È possibile anche passare `ref` tra diversi componenti. Aggiungere la keyword `ref` nel componente e passare l'istanza di ref che vogliamo gestire. NB: funziona solo da react 19!! Sennò occorre usare forwarrdRef

I `portal` sono una tecnica per "teletrasportare" un componente da un posto diverso da quello in cui sarebbero renderizzati. Il componenete rimane sempre allo stesso livello nell'albero dei componenti, ma il suo rendering sarà in un posto diverso. Così si avrà accesso agli stati ecc dove il componente è chiamato, ma la sua UI sarà renderizzata in un posto diverso. Casi comuni sono: dialog, tooltips, dropdown menus, toasts.

### Advance state managment

Quando un componente gestisce uno stato, ma dev'essere "lifed up" perchè è visualizzato in un componente ma è aggiornato in tutt'altro componente. Quello stato, quindi, dev'essere tirato su finchè non si arriva il componente padre (comune) dei due componenti.
Se i due componenti sono "lontani" nell'albero del componenti, questo stato va passato via props a tutti componenti figli finchè non raggiungono il componente che ha la funzionalità, per esempio, di aggiornare quello stato.
Questo viene chiamato prop drilling, ovvero **il passaggio di dati sharati per multipli layer di componenti** anche se determinati componenti coinvolti nella catena non richiedono quel dato, ma devono passarlo per poter arrivare al componente giusto. Questo causa

- il componente è meno riutilizzabile, perchè dev'essere piazzato dove quel dato è sharato dai componenti padri
- occorre scrivere più codice e passare i dati tra multipli componenti

## Soluzioni

### Context API

È una feature per passare agevolemente dati tra componeneti lontani tra loro.
Lo stato del carrello.

Creare un componente per la gestione dei dati shared attraverso l'hook `createContext`.
Esportare quel componente e wrappare tutti i componenti che avranno bosogno di quei dati,
Importare il context component nel componente dove occorrono i dati e utilizzare l'hook `useContext` o `use` e passarli il context

```js
const cartCtx = useContext(CartContext);
```

La differenza tra `useContext` e `use` è che quest'ultimo è più versatile, può essere utilizzato dentor if, for, ecc. Normalmente un hood non può essere utilizzato così. `Use` è disponibile solo dalla v 19.

Quando si accede ad un valore di contesto (tramite lo use context) all'interno di un componente e quel valore cambia la funzione del compoente che accede a quel valore viene rieseguita. Esattamente come succede se un cambia un valore dello stato oppure se il parent component viene rieseguito.
