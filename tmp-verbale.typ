/* MODELLO PER VERBALI DI RIUNIONE
Il seguente modello può essere incorporato nelle presentazioni tramite comando: #import "tmp-verbale.typ": conf, decisioni
Le variabili vengono istanziate all'inizio di ciascuna presentazione.
*/

// Set parametri di stile
#let font = "Inter"

#let logo = "/Assets/logo.svg"
#let logo-ridotto = "/Assets/logo-ridotto.svg"

#let deco-line = rgb("#E5E9ED")
#let txt-color = rgb("#1F2937")
#let dark-accent = rgb("#1E3A87")
#let light-accent = rgb("#2563EB")
#let txt-gray = rgb("#626973")

// Helper per le decisioni prese nel corso del meeting
#let decisioni(..items) = {
  table(
    columns: (15%, 85%),
    stroke: 0.5pt + deco-line,
    table.header(
      text(weight: "bold")[ID],
      text(weight: "bold")[Decisione]
    ),
    ..items
  )
}

#let conf(
  tipo: none,
  data: none,
  ora-inizio: none,
  ora-fine: none,
  luogo: none,
  azienda: none,
  presenti: (),
  assenti: (),
  responsabile: none,
  redattore: none,
  verificatore: none,
  changelog: (),    // Array per il registro modifiche
  body
) = {
  set text(font: ("Inter"), size: 12pt, txt-color)
  set par(justify: true)
  set heading(numbering: "1. ")

  show heading: it => {
    set text(fill: dark-accent, weight: "bold")
    block(below: 0.5cm, above: 0.5cm, it)
  }

  set list(marker: ([•], [◦], [-]))    // Formattazione punti elenco

  set page(
    paper: "a4",
    margin: (x: 2.5cm, y: 2.5cm),
    // Inserimento header
    header: context {
      if here().page() > 1 [
        #set text(size: 10pt, fill: txt-gray)
        #grid(
          columns: (1fr, 1fr),
          align(left)[*Astrum* - Verbale #tipo],
          align(right)[#data]
        )
        #v(-0.5em)
        #line(length: 100%, stroke: 0.5pt + light-accent)
      ]
    },

    // Inserimento footer
    footer: context {
      if here().page() > 1 [
        #line(length: 100%, stroke: 0.5pt + deco-line)
        #v(-0.25em)
        #set text(size: 8pt, fill: txt-gray)
        #grid(
          columns: (1fr, 1fr, 1fr),
          align(left)[Redazione: #redattore],
          align(center)[Verifica: #verificatore],
          align(right)[Pagina #counter(page).display("1 / 1", both: true)]
        )
      ]
    }
  )

  // Decorazione per frontespizio
  let details = place(bottom + right, dx: 2cm, dy: 4cm)[
    #box(width: 0pt, height: 0pt)[
      // Archi di decorazione in background
      #place(center, circle(radius: 4cm, stroke: 0.5pt + deco-line))
      #place(center, circle(radius: 8cm, stroke: 0.5pt + deco-line))
      #place(center, circle(radius: 16cm, stroke: 0.5pt + deco-line))
      #place(center, circle(radius: 24cm, stroke: 0.5pt + deco-line))
    ]
  ]

  align(center)[
    #details
    #v(1fr)
    #text(size: 28pt, weight: "bold", fill: light-accent)[Verbale #tipo]
    #grid(    // Logo UniPD + logo del gruppo
      columns: (auto, auto, auto),
      gutter: 0.5cm,
      align: horizon,

      image("/Assets/logo-unipd.svg", height: 2cm),
      line(angle: 90deg, length: 2cm, stroke: 0.5pt + deco-line),
      image(logo, height: 1cm)
    )
    #v(1cm)
    #text(size: 14pt, style: "italic")[Progetto di Ingegneria del Software \
    Università di Padova - A.A. 26 / 27]
    
    #v(3cm)
    
    // Tabella con dati del documento
    #align(center)[
      #table(
        columns: (25%, 75%),
        align: (right, left),
        stroke: white,
        
        [*Data e ora:*], [#data, #ora-inizio - #ora-fine],
        [*Luogo / Canale:*], [#luogo],
        // Solo se verbale di tipo esterno con azienda mentore
        ..(if azienda != none { ([*Azienda:*], [#azienda]) } else { () }),
        [*Partecipanti:*], [#presenti.join(", ")],
        [*Assenti:*], [
          // Se presenti assenti
          #(if assenti.len() == 0 { "" } else { assenti.join(", ") })
        ],
        [*Responsabile:*], [#responsabile]
      )
    ]

    #v(1fr)
    #pagebreak()
  ]

  // Registro delle modifiche al documento
  if changelog.len() > 0 {
    heading(numbering: none, outlined: false)[Registro delle modifiche]
    table(
      columns: (150pt, 1fr),
      stroke: 0.5pt + deco-line,
      
      table.header(
        text(weight: "bold")[Versione],
        text(weight: "bold")[Descrizione]
      ),
      
      ..changelog.map(entry => (
        [
          *v#entry.ver* \
          #text(size: 10pt, fill: txt-gray)[
            #entry.data \
            #entry.autore (#entry.ruolo)
          ]
        ],
        entry.desc
      )).flatten()    // Array unidimensionale
    )

    pagebreak()
  }

  body
}

#show: conf.with(
  tipo: "Interno",
  data: "15/11/2026",
  ora-inizio: "15:00",
  ora-fine: "15:45",
  luogo: "Canale vocale Discord",
  presenti: ("Mario Rossi", "Luca Bianchi", "Giulia Verdi", "Alessandro Neri", "Mario Rossi", "Mario "),
  assenti: ("Sofia Gialli",),
  responsabile: "Gigia Neri",
  redattore: "Luca Bianchi",
  verificatore: "Giulia Verdi",

  // Popolamento del registro delle modifiche
  changelog: (
    (ver: "1.0.0", data: "15/11/2026", autore: "Luca Bianchi", ruolo: "Responsabile", desc: "Approvazione documento per rilascio RTB."),
    (ver: "0.2.0", data: "12/11/2026", autore: "Alessandro Neri", ruolo: "Verificatore", desc: "Verifica casi d'uso UC1 e UC2."),
    (ver: "0.1.0", data: "05/11/2026", autore: "Mario Rossi", ruolo: "Analista", desc: "Stesura iniziale dei requisiti funzionali e diagrammi UML."),
  )
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