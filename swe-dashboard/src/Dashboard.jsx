import {
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid,
  ReferenceLine, LineChart, Line, Legend,
} from 'recharts'
import { roles, plannedHours, hourBounds, members, milestones, periods } from './data'

const eur = (n) => n.toLocaleString('it-IT', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 })
const sum = (a) => a.reduce((x, y) => x + y, 0)
const days = (iso) => Math.ceil((new Date(iso) - new Date()) / 864e5)

function Panel({ title, note, children }) {
  return (
    <section className="bg-white p-5">
      <h2 className="text-lg font-bold">{title}</h2>
      {note && <p className="mt-1 text-sm text-muted">{note}</p>}
      <div className="mt-4 h-72">{children}</div>
    </section>
  )
}

export default function Dashboard() {
  const roleKeys = Object.keys(roles)
  const budget = sum(roleKeys.map((k) => plannedHours[k] * roles[k].rate))
  const hoursByRole = Object.fromEntries(roleKeys.map((k) => [k, sum(members.map((m) => m.hours[k] ?? 0))]))
  const spent = sum(roleKeys.map((k) => hoursByRole[k] * roles[k].rate))
  const done = periods.filter((p) => p.ev != null)
  const last = done[done.length - 1]
  const cpi = last ? last.ev / last.ac : null
  const spi = last ? last.ev / last.pv : null
  const next = milestones.find((m) => m.progress < 100)

  const effort = members.map((m) => ({
    name: m.name.split(' ')[0] + ' ' + (m.name.split(' ')[1]?.[0] ?? ''),
    ore: sum(Object.values(m.hours)),
  }))
  const perRole = roleKeys.map((k) => ({ ruolo: roles[k].label, Pianificate: plannedHours[k], Consuntivate: hoursByRole[k] }))
  const index = (v, good) => (v == null ? 'text-muted' : v >= good ? 'text-ok' : 'text-unipd')

  return (
    <div className="space-y-6">
      <section aria-label="Avanzamento per milestone" className="bg-white p-5">
        <div className="flex items-baseline justify-between">
          <h2 className="text-lg font-bold">Avanzamento</h2>
          {next && <p className="text-sm text-muted">Prossima milestone: {next.id}, tra {days(next.date)} giorni</p>}
        </div>
        <ol className="mt-5 grid grid-cols-3 gap-2">
          {milestones.map((m) => (
            <li key={m.id}>
              <div className="h-5 bg-line" role="progressbar" aria-valuenow={m.progress} aria-valuemin="0" aria-valuemax="100" aria-label={m.id}>
                <div className={`h-full ${m.progress === 100 ? 'bg-ok' : 'bg-unipd'}`} style={{ width: `${m.progress}%` }} />
              </div>
              <p className="mt-2 text-3xl font-black">{m.progress}%</p>
              <p className="text-sm font-bold">{m.id}</p>
              <p className="hidden text-sm text-muted sm:block">{m.label}</p>
              <p className="text-sm text-muted">scadenza {new Date(m.date).toLocaleDateString('it-IT')}</p>
            </li>
          ))}
        </ol>
      </section>

      <dl className="grid grid-cols-2 gap-px bg-line lg:grid-cols-4">
        {[
          ['Budget preventivato', eur(budget), 'text-ink'],
          ['Speso finora', `${eur(spent)} (${Math.round((spent / budget) * 100)}%)`, spent > budget ? 'text-unipd' : 'text-ink'],
          ['Residuo', eur(budget - spent), budget - spent < 0 ? 'text-unipd' : 'text-ok'],
          ['CPI / SPI', cpi ? `${cpi.toFixed(2)} / ${spi.toFixed(2)}` : '—', index(Math.min(cpi ?? 0, spi ?? 0), 1)],
        ].map(([t, v, c]) => (
          <div key={t} className="bg-white p-5">
            <dt className="text-sm text-muted">{t}</dt>
            <dd className={`mt-1 text-2xl font-black ${c}`}>{v}</dd>
          </div>
        ))}
      </dl>
      <p className="-mt-3 text-sm text-muted">
        CPI = valore conseguito / costo reale; SPI = valore conseguito / valore pianificato. Sopra 1 si è in linea o in vantaggio.
      </p>

      <div className="grid gap-6 lg:grid-cols-2">
        <Panel title="Sforzo per persona" note={`Ore consuntivate. Target finale ${hourBounds.min}–${hourBounds.max}, atteso ${hourBounds.expected}.`}>
          <ResponsiveContainer>
            <BarChart data={effort}>
              <CartesianGrid vertical={false} stroke="#d3d9df" />
              <XAxis dataKey="name" tick={{ fontSize: 12 }} />
              <YAxis domain={[0, hourBounds.max + 5]} />
              <Tooltip />
              <ReferenceLine y={hourBounds.min} stroke="#b87900" strokeDasharray="4 4" />
              <ReferenceLine y={hourBounds.max} stroke="#9b0014" strokeDasharray="4 4" />
              <Bar dataKey="ore" name="Ore" fill="#16202b" />
            </BarChart>
          </ResponsiveContainer>
        </Panel>

        <Panel title="Consumo del budget" note="Valori cumulativi per periodo: pianificato (PV), conseguito (EV), speso (AC).">
          <ResponsiveContainer>
            <LineChart data={periods}>
              <CartesianGrid vertical={false} stroke="#d3d9df" />
              <XAxis dataKey="label" />
              <YAxis tickFormatter={(v) => `${v / 1000}k`} />
              <Tooltip formatter={(v) => eur(v)} />
              <Legend />
              <Line dataKey="pv" name="Pianificato" stroke="#5b6773" strokeDasharray="5 4" dot={false} strokeWidth={2} />
              <Line dataKey="ev" name="Conseguito" stroke="#1f7a6d" strokeWidth={3} />
              <Line dataKey="ac" name="Speso" stroke="#9b0014" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </Panel>

        <div className="lg:col-span-2">
          <Panel title="Ore per ruolo" note="Ore pianificate nel preventivo contro ore consuntivate dal gruppo.">
            <ResponsiveContainer>
              <BarChart data={perRole}>
                <CartesianGrid vertical={false} stroke="#d3d9df" />
                <XAxis dataKey="ruolo" tick={{ fontSize: 12 }} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Pianificate" fill="#d3d9df" />
                <Bar dataKey="Consuntivate" fill="#9b0014" />
              </BarChart>
            </ResponsiveContainer>
          </Panel>
        </div>
      </div>
    </div>
  )
}
