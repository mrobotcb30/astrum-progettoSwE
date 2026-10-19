export const group = {
  name: 'Astrum',
  capitolato: 'C[X] - [Nome capitolato]',
  proponente: '[Azienda]',
  email: 'astrum.unipd@gmail.com',
  repo: 'https://github.com/Team-Astrum/',
}

// Costo orario per ruolo (€) – Regolamento, slide 10
export const roles = {
  responsabile: { label: 'Responsabile', rate: 30 },
  amministratore: { label: 'Amministratore', rate: 20 },
  analista: { label: 'Analista', rate: 25 },
  progettista: { label: 'Progettista', rate: 25 },
  programmatore: { label: 'Programmatore', rate: 15 },
  verificatore: { label: 'Verificatore', rate: 15 },
}

// Path di base dei documenti
export const docsBase = 'https://mrobotcb30.github.io/astrum-progettoSwE/docs/'

// Repository da cui leggere le issue aperte
export const issuesRepo = 'mrobotcb30/astrum-progettoSwE'

// Ore produttive per persona: min 80, atteso 90, max 95 (slide 5 e 9)
export const hourBounds = { min: 80, max: 95 }

// Preventivo: ore pianificate per ruolo (totale di gruppo)
export const plannedHours = {
  responsabile: 60, amministratore: 60, analista: 120,
  progettista: 110, programmatore: 160, verificatore: 120,
}

// Ore consuntivate per persona e ruolo
export const members = [
  { name: 'Corrado Bacco', matr:'2148615', github: 'mrobotcb30', currentRole: '',
    hours: { responsabile: 40, amministratore: 0, analista: 10, progettista: 0, programmatore: 4, verificatore: 6 } },
  { name: 'Gianluca Bacco', matr:'2111937', github: 'GianlucaBacco', currentRole: '',
    hours: { responsabile: 0, amministratore: 8, analista: 14, progettista: 0, programmatore: 6, verificatore: 4 } },
  { name: 'Gianluca Brotto', matr:'2148626', github: 'Gianluca-Br', currentRole: '',
    hours: { responsabile: 0, amministratore: 12, analista: 8, progettista: 4, programmatore: 6, verificatore: 2 } },
  { name: 'Matteo De Col', matr:'2148619', github: 'vSmatt', currentRole: '',
    hours: { responsabile: 4, amministratore: 0, analista: 6, progettista: 0, programmatore: 16, verificatore: 4 } },
  { name: 'Filippo De Guio', matr:'2113177', github: 'degghi24', currentRole: '',
    hours: { responsabile: 0, amministratore: 4, analista: 12, progettista: 0, programmatore: 6, verificatore: 10 } },
  { name: 'Samuele Gobbi', matr:'2148004', github: 'Smoker1210', currentRole: '',
    hours: { responsabile: 0, amministratore: 0, analista: 10, progettista: 8, programmatore: 8, verificatore: 4 } },
  { name: 'Thomas Morettin', matr:'2111001', github: 'thomasmorettin', currentRole: '',
    hours: { responsabile: 6, amministratore: 2, analista: 12, progettista: 2, programmatore: 6, verificatore: 4 } },
]

// Milestone: progress 0–100
export const milestones = [
  { id: 'Candidatura', label: null, date: '2026-10-30', progress: 25 },
  { id: 'RTB', label: 'Requirements and Technology Baseline', date: null, progress: 0 },
  { id: 'PB', label: 'Product Baseline', date: null, progress: 0 },
]

// Valori cumulativi in € (slide 12): PV = pianificato, EV = conseguito, AC = speso.
// Lasciare ev/ac a null per i periodi futuri.
export const periods = [
  { label: 'S1', pv: 500, ev: null, ac: null },
  { label: 'S2', pv: 1300, ev: null, ac: null },
  { label: 'S3', pv: 2400, ev: null, ac: null },
  { label: 'S4', pv: 3800, ev: null, ac: null },
  { label: 'S5', pv: 5600, ev: null, ac: null },
  { label: 'S6', pv: 7800, ev: null, ac: null },
  { label: 'S7', pv: 10200, ev: null, ac: null },
  { label: 'S8', pv: 12950, ev: null, ac: null },
]

// Documenti per baseline. `file` è relativo a public/ (vedi workflow).
// kind: gestionale | interno | tecnico  (slide 25)
export const kinds = {
  gestionale: 'Gestionali esterni',
  interno: 'Gestionali interni',
  tecnico: 'Tecnici esterni',
}

export const baselines = [
  {
    id: 'Candidatura', path: 'Candidatura/',
    docs: [

    ]
  },
  {
    id: 'RTB', path: '',
    docs: [
      { title: 'Analisi dei Requisiti', kind: 'tecnico', file: 'Q&A-Conoscitivo_Sanmarco.pdf', version: '0.1.0', updated: '2026-11-20' },
      { title: 'Piano di Progetto', kind: 'gestionale', file: 'docs/RTB/piano-di-progetto.pdf', version: '0.1.0', updated: '2026-11-20' },
      { title: 'Piano di Qualifica', kind: 'gestionale', file: 'docs/RTB/piano-di-qualifica.pdf', version: '0.1.0', updated: '2026-11-20' },
      { title: 'Norme di Progetto', kind: 'interno', file: 'docs/RTB/norme-di-progetto.pdf', version: '0.1.0', updated: '2026-11-04' },
      { title: 'Glossario', kind: 'interno', file: 'docs/RTB/glossario.pdf', version: '0.1.0', updated: '2026-11-04' },
      { title: 'Verbale interno 2026-11-05', kind: 'interno', file: 'docs/RTB/verbali/2026-11-05.pdf', version: '1.0.0', updated: '2026-11-05' },
    ]
  },
  {
    id: 'PB', path: 'PB/',
    docs: [
      { title: 'Specifica Tecnica', kind: 'tecnico', file: 'docs/PB/specifica-tecnica.pdf', version: '—', updated: '—' },
      { title: 'Manuale Utente', kind: 'tecnico', file: 'docs/PB/manuale-utente.pdf', version: '—', updated: '—' },
    ]
  },
  {
    id: 'Verbali interni', path: '',
    docs: [

    ]
  },
  {
    id: 'Verbali esterni', path: '',
    docs: [

    ]
  }
]
