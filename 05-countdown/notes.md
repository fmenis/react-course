## Notes

### Refs

Un ref è un valore speciale gestito da react, viene aggiunto a qualsiasi elemento tramite la keyword `ref`.
Nella variabile associata vi sarà presente un oggetto `current` che avrà tutte i metodi e proprietà associate all'elemento dove è stato aggiunto il `ref`.

Uno degli utilizzi è quello di prendere il valore di un elemento solo quando serve, invece che gestire uno stato aggiuntivo per esso (eg: prendere il valore dell'input solo quando viene premuto il pulsante)
