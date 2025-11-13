# CSS

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
