## Notes

### Refs

Un ref è un valore speciale gestito da react, viene aggiunto a qualsiasi elemento tramite la keyword `ref`.
Nella variabile associata vi sarà presente un oggetto `current` che avrà tutti i metodi e proprietà associate all'elemento dove è stato aggiunto il `ref`.

Uno degli utilizzi è quello di prendere il valore di un elemento solo quando serve, invece che gestire uno stato aggiuntivo per esso (eg: prendere il valore dell'input solo quando viene premuto il pulsante)

Quando il ref cambia il componente non viene eseguito di nuovo! Esattamente il contrario dello state.

È possibile anche utilizzare `ref` per gestire qualsiasi tipo di valore, non solo attaccarlo ad un elemento html. Ref gestirà quel valore che sarà "component specific" e non uguale per ogni instanza del componente.

È possibile anche passare `ref` tra diversi componenti. Aggiungere la keyword `ref` nel componente e passare l'istanza di ref che vogliamo gestire. NB: funziona solo da react 19!! Sennò occorre usare forwarrdRef

I `portal` sono una tecnica per "teletrasportare" un componente da un posto diverso da quello in cui sarebbero renderizzati. Il componenete rimane sempre allo stesso livello nell'albero dei componenti, ma il suo rendering sarà in un posto diverso. Così si avrà accesso agli stati ecc dove il componente è chiamato, ma la sua UI sarà renderizzata in un posto diverso. Casi comuni sono: dialog, tooltips, dropdown menus, toasts.
