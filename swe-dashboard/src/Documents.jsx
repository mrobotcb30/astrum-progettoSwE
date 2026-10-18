import { useState } from 'react'
import { baselines, kinds } from './data'

const base = import.meta.env.BASE_URL

export default function Documents() {
  const [bid, setBid] = useState(baselines[0].id)
  const [open, setOpen] = useState(null)
  const baseline = baselines.find((b) => b.id === bid)

  return (
    <div>
      <div role="tablist" className="flex gap-1">
        {baselines.map((b) => (
          <button key={b.id} role="tab" aria-selected={b.id === bid}
            onClick={() => { setBid(b.id); setOpen(null) }}
            className={`px-4 py-2 text-sm font-bold ${b.id === bid ? 'light-accent-color' : 'hover:deco-color'}`}>
            {b.id}
          </button>
        ))}
      </div>
      <p className="mt-3 text-sm text-muted">{baseline.title}</p>

      <div className="mt-4 grid gap-6">
        <div className="space-y-5">
          {Object.entries(kinds).map(([k, label]) => {
            const docs = baseline.docs.filter((d) => d.kind === k)
            if (!docs.length) return null
            return (
              <section key={k}>
                <h2 className="mb-1 text-sm font-bold text-muted">{label}</h2>
                <ul className="divide-y divide-line bg-white">
                  {docs.map((d) => (
                    <li key={d.file} className={`flex items-center justify-between gap-3 p-3 ${open?.file === d.file ? 'border-l-4 border-unipd' : ''}`}>
                      <button className="text-left" onClick={() => setOpen(d)}>
                        <span className="block font-bold">{d.title}</span>
                        <span className="text-sm text-muted">v{d.version} · {d.updated}</span>
                      </button>
                      <a className="text-sm font-bold text-unipd underline" href={`${base}${d.file}`} target="_blank" rel="noreferrer">PDF</a>
                    </li>
                  ))}
                </ul>
              </section>
            )
          })}
        </div>
      </div>
    </div>
  )
}
