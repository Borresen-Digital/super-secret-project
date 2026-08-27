export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-white text-zinc-900 dark:bg-black dark:text-zinc-50">
      <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2 font-mono text-sm font-semibold tracking-tight">
          <span className="inline-block h-3 w-3 rounded-sm bg-emerald-500" />
          skjld<span className="text-zinc-400">labs</span>
        </div>
        <nav className="hidden gap-8 text-sm text-zinc-500 sm:flex">
          <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100">Docs</a>
          <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100">Pricing</a>
          <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100">Status</a>
          <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100">Sign in</a>
        </nav>
      </header>

      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-6">
        <section className="py-24 sm:py-32">
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
            AI infrastructure
          </p>
          <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            One gateway for every model you ship.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            skjld routes, caches, and observes your LLM traffic across Anthropic,
            OpenAI, and self-hosted models — behind a single key. Sub-millisecond
            failover, per-tenant budgets, full request tracing.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#"
              className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-700 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
            >
              Start free
            </a>
            <a
              href="#"
              className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium transition hover:border-zinc-500 dark:border-zinc-700 dark:hover:border-zinc-500"
            >
              Read the docs
            </a>
          </div>
        </section>

        <section className="grid gap-8 border-t border-zinc-200 py-16 dark:border-zinc-800 sm:grid-cols-3">
          {[
            ["99.99%", "Gateway uptime over the last 90 days."],
            ["14ms", "Median added latency, cached completions."],
            ["1 key", "Rotate providers without touching app code."],
          ].map(([stat, label]) => (
            <div key={stat}>
              <div className="font-mono text-3xl font-semibold">{stat}</div>
              <p className="mt-2 text-sm text-zinc-500">{label}</p>
            </div>
          ))}
        </section>
      </main>

      <footer className="mx-auto w-full max-w-5xl px-6 py-10 text-sm text-zinc-400">
        © {new Date().getFullYear()} skjld labs. All rights reserved.
      </footer>
    </div>
  );
}
