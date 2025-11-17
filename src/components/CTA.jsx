export default function CTA() {
  return (
    <section id="get-started" className="relative py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900/60 to-slate-900 p-8 sm:p-12 text-center ring-1 ring-white/10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Ready to launch your agent?</h2>
          <p className="mt-3 text-slate-300 max-w-2xl mx-auto">Kick off your first project in minutes. No setup. No infrastructure. Just describe what you want to build.</p>
          <form className="mt-8 grid gap-3 sm:grid-cols-[1fr_auto]">
            <input type="email" required placeholder="Work email" className="rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500" />
            <button className="rounded-lg bg-gradient-to-r from-fuchsia-500 via-violet-500 to-sky-500 px-6 py-3 text-white font-medium shadow-lg shadow-violet-500/30 hover:shadow-violet-500/40 transition">Get invite</button>
          </form>
          <p className="mt-3 text-xs text-slate-400">Free during beta • No credit card required</p>
        </div>
      </div>
    </section>
  );
}
