#import "tmp-lettera.typ": conf

#show: conf.with(
  data: "15 ottobre 2026",
  oggetto: "Domande per colloquio di approfondimento.",
  responsabile: "Astrum"
)

Con la presente il gruppo Astrum Vi fa pervenire le domande utili per approfondire il progetto _AIRA_.

Si riportano i seguenti quesiti:
- A livello di tempistiche quante ore di sviluppo ritenete necessarie per fornire la soluzione completa? Qual è il Vostro budget dei costi?
- Nel caso in cui il modello AI non raggiunga un livello di confidenza sufficiente nell’estrazione sarà necessaria un’ulteriore validazione da parte umana tramite l’interfaccia amministrativa?
- Nel diagramma architetturale è presente un "Filtro Sicurezza" per l'identificazione del tenant e l'isolamento dei dati. In che modo il sistema identifica il tenant in ingresso? E se non fosse reperibile?
- È prevista della formazione da parte Vostra nei nostri confronti sulle tecnologie/strumenti da utilizzare nel progetto?
- Quando si parla di ticket di assistenza, in merito ai canali di ricezione, bisogna prevedere che l’azienda mittente abbia un programma apposito per aprire queste segnalazioni o si fa riferimento ad una “semplice” e-mail?
- AIRA deve fornire all’utente un set preimpostato di canali da cui ottenere le informazioni? L’integrazione di nuovi canali futuri è funzionalità disponibile all’azienda che fa uso del tool?
- Quando AIRA analizza l’anagrafica del cliente, prevede il salvataggio delle informazioni per poi riutilizzarle in seguito? ARIA può fare fede a un dataset di clienti dei quali riconosce la mail o ogni volta che arriva una e-mail è come se fosse un cliente nuovo?
- Si chiede che AIRA abbia un filtro sui dati in fase di ingresso; si intende che il tool possieda un filtro di tipo spam/black list nei confronti dei mittenti?
- Quando si parla di una struttura in grado di elaborare dati sensibili, è necessario adottare particolari accorgimenti in tema privacy o “basta” una protezione ad esempio con chiavi di accesso al tool?
- Quali e quanti sono i canali di ricezione che considerate più importanti per la creazione di un MVP?
- Ci vengono forniti eventuali documenti di finti ordini o finte e-mail di reclamo in fase di testing?
- Come si comporta AIRA nel caso in cui all’interno di un’e-mail, o documento generico, siano presenti più intenzioni da elaborare (es. allegato di un ordine di acquisto + reclamo su ordine precedente)? Deve generare due payload JSON separati?
- Per quanto riguarda l’utilizzo delle API, nel caso di API a pagamento ci fornirete Voi le credenziali, oppure si realizzerà una soluzione basata su modelli open-source eseguiti in locale?
- Come si deve comportare il sistema nel caso di eventuali errori, casi di bassa confidenza dell’IA oppure ripetizioni (ad esempio viene rielaborata la stessa e-mail)? È preferibile bloccare il processo e richiedere una revisione umana, oppure inviare una notifica di avviso e lasciare proseguire il tutto?
- Quali metriche usereste per valutare il prodotto (accuratezza di estrazione, tempo di elaborazione, la percentuale di richieste automatizzate)? Quale sarebbe la soglia minima accettabile?

In attesa di incontrarVi per il colloquio fissato in data 20 ottobre 2026 alle ore 15:00, porgiamo cordiali saluti.