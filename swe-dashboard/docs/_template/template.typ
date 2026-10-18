// Template comune dei documenti
#let doc-base(title: "", version: "0.1.0", body) = {
  set document(title: title)
  set page(paper: "a4", margin: 2.5cm, numbering: "1")
  set text(lang: "it", size: 11pt)
  set heading(numbering: "1.1")
  align(center)[#text(22pt, weight: "bold")[#title] \ #v(0.3em) Versione #version]
  pagebreak()
  outline(title: "Indice")
  pagebreak()
  body
}
