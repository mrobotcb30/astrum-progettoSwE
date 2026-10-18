#import "tmp-verbale.typ": conf, decisioni

#show: conf.with(
  tipo: "Interno",
  data: "15/11/2026",
  ora-inizio: "15:00",
  ora-fine: "15:45",
  luogo: "Canale vocale Discord",
  presenti: ("Mario Rossi", "Luca Bianchi", "Giulia Verdi", "Alessandro Neri"),
  assenti: ("Sofia Gialli",),
  responsabile: "Gigia Neri",
  redattore: "Luca Bianchi",
  verificatore: "Giulia Verdi"
)

= Ordine del Giorno
1. Discussione sui requisiti di autenticazione.
2. Organizzazione del repository GitHub.
3. Varie ed eventuali.

= Resoconto
Il team si è riunito per discutere i requisiti emersi dall'ultimo incontro con il proponente. 
*Mario Rossi* ha fatto notare che l'azienda preferisce un'autenticazione basata su OAuth2 rispetto al classico JWT. Il team ha concordato che questa modifica dovrà essere riportata nell'Analisi dei Requisiti.

Successivamente, *Giulia Verdi* ha proposto la divisione in due repository separate (una per la documentazione, una per il codice), approvata all'unanimità.

= To-Do
- *Mario R.*: Aggiornare il caso d'uso UC1 entro il 17 Novembre. \
- *Giulia V.*: Inizializzare la repository GitHub per il codice. \
- *Luca B.*: Caricare questo verbale sul cruscotto web. \

= Tracciamento delle Decisioni
#decisioni(
  [VI-01], [Adottare OAuth2 per l'autenticazione utente anziché JWT proprietario.],
  [VI-02], [Divisione del progetto in due repository (Docs e Source) separate.]
)