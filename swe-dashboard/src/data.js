export const group = {
  name: 'Astrum',
  capitolato: 'C0 – Titolo del capitolato',
  proponente: 'Azienda proponente',
  email: 'gruppo@example.com',
  repo: 'https://github.com/ORGANIZZAZIONE/REPOSITORY',
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

// Ore produttive per persona: min 80, atteso 90, max 95 (slide 5 e 9)
export const hourBounds = { min: 80, expected: 90, max: 95 }

// Preventivo: ore pianificate per ruolo (totale di gruppo)
export const plannedHours = {
  responsabile: 60, amministratore: 60, analista: 120,
  progettista: 110, programmatore: 160, verificatore: 120,
}

// Ore consuntivate per persona e ruolo
export const members = [
  { name: 'Nome Cognome 1', github: 'github-user-1', currentRole: 'Responsabile',
    hours: { responsabile: 12, amministratore: 0, analista: 10, progettista: 0, programmatore: 4, verificatore: 6 } },
  { name: 'Nome Cognome 2', github: 'github-user-2', currentRole: 'Analista',
    hours: { responsabile: 0, amministratore: 8, analista: 14, progettista: 0, programmatore: 6, verificatore: 4 } },
  { name: 'Nome Cognome 3', github: 'github-user-3', currentRole: 'Amministratore',
    hours: { responsabile: 0, amministratore: 12, analista: 8, progettista: 4, programmatore: 6, verificatore: 2 } },
  { name: 'Nome Cognome 4', github: 'github-user-4', currentRole: 'Programmatore',
    hours: { responsabile: 4, amministratore: 0, analista: 6, progettista: 0, programmatore: 16, verificatore: 4 } },
  { name: 'Nome Cognome 5', github: 'github-user-5', currentRole: 'Verificatore',
    hours: { responsabile: 0, amministratore: 4, analista: 12, progettista: 0, programmatore: 6, verificatore: 10 } },
  { name: 'Nome Cognome 6', github: 'github-user-6', currentRole: 'Progettista',
    hours: { responsabile: 0, amministratore: 0, analista: 10, progettista: 8, programmatore: 8, verificatore: 4 } },
  { name: 'Nome Cognome 7', github: 'github-user-7', currentRole: 'Analista',
    hours: { responsabile: 6, amministratore: 2, analista: 12, progettista: 2, programmatore: 6, verificatore: 4 } },
]

// Milestone: progress 0–100
export const milestones = [
  { id: 'CAND', label: 'Candidatura', date: '2026-10-30', progress: 30 },
  { id: 'RTB', label: 'Requirements and Technology Baseline', date: '2026-12-18', progress: 55 },
  { id: 'PB', label: 'Product Baseline', date: '2027-03-12', progress: 0 },
]

// Valori cumulativi in € (slide 12): PV = pianificato, EV = conseguito, AC = speso.
// Lasciare ev/ac a null per i periodi futuri.
export const periods = [
  { label: 'P1', pv: 500, ev: 450, ac: 520 },
  { label: 'P2', pv: 1300, ev: 1150, ac: 1350 },
  { label: 'P3', pv: 2400, ev: 2300, ac: 2500 },
  { label: 'P4', pv: 3800, ev: null, ac: null },
  { label: 'P5', pv: 5600, ev: null, ac: null },
  { label: 'P6', pv: 7800, ev: null, ac: null },
  { label: 'P7', pv: 10200, ev: null, ac: null },
  { label: 'P8', pv: 12950, ev: null, ac: null },
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
    id: 'RTB', title: 'Requirements and Technology Baseline',
    docs: [
      { title: 'Lettera Q&A per Sanmarco', kind: 'tecnico', file: 'docs/Q&A-Conoscitivo_Sanmarco.pdf', version: '0.1.0', updated: '2026-11-20' },
      { title: 'Verbale di prova', kind: 'gestionale', file: 'docs/VI_15-11-2026.pdf', version: '0.1.0', updated: '2026-11-20' },
      { title: 'Piano di Qualifica', kind: 'gestionale', file: 'docs/RTB/piano-di-qualifica.pdf', version: '0.1.0', updated: '2026-11-20' },
      { title: 'Norme di Progetto', kind: 'interno', file: 'docs/RTB/norme-di-progetto.pdf', version: '0.1.0', updated: '2026-11-04' },
      { title: 'Glossario', kind: 'interno', file: 'docs/RTB/glossario.pdf', version: '0.1.0', updated: '2026-11-04' },
      { title: 'Verbale interno 2026-11-05', kind: 'interno', file: 'docs/RTB/verbali/2026-11-05.pdf', version: '1.0.0', updated: '2026-11-05' },
    ],
  },
  {
    id: 'PB', title: 'Product Baseline',
    docs: [
      { title: 'Specifica Tecnica', kind: 'tecnico', file: 'docs/PB/specifica-tecnica.pdf', version: '—', updated: '—' },
      { title: 'Manuale Utente', kind: 'tecnico', file: 'docs/PB/manuale-utente.pdf', version: '—', updated: '—' },
    ],
  },
]
