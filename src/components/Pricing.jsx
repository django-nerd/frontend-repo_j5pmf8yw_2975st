export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Simple, usage-based pricing</h2>
          <p className="mt-3 text-slate-300/90">Start free. Scale with predictable agent minutes and team seats.</p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {/* Starter */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-200">
            <h3 className="text-lg font-semibold text-white">Starter</h3>
            <p className="mt-2 text-sm text-slate-300/90">Solo makers and small experiments.</p>
            <div className="mt-6 text-4xl font-bold text-white">$0</div>
            <ul className="mt-6 space-y-2 text-sm">
              <li>• 1,000 agent tokens/day</li>
              <li>• 1 project</li>
              <li>• Community support</li>
            </ul>
            <a href="#get-started" className="mt-6 inline-flex justify-center rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-white hover:bg-white/10">Get started</a>
          </div>

          {/* Pro */}
          <div className="relative rounded-2xl border border-violet-400/30 bg-gradient-to-b from-violet-500/20 to-sky-500/10 p-6 text-slate-200 ring-1 ring-violet-400/30 shadow-lg shadow-violet-500/20">
            <div className="absolute -top-3 left-6 rounded-full bg-violet-500 px-2 py-0.5 text-xs text-white">Popular</div>
            <h3 className="text-lg font-semibold text-white">Pro</h3>
            <p className="mt-2 text-sm text-slate-100">Growing teams that ship weekly.</p>
            <div className="mt-6 text-4xl font-bold text-white">$49<span className="text-base font-normal text-slate-200">/mo</span></div>
            <ul className="mt-6 space-y-2 text-sm">
              <li>• 100k agent tokens/day</li>
              <li>• Unlimited projects</li>
              <li>• Priority support</li>
              <li>• GitHub + Slack integration</li>
            </ul>
            <a href="#get-started" className="mt-6 inline-flex justify-center rounded-lg bg-gradient-to-r from-fuchsia-500 via-violet-500 to-sky-500 px-4 py-2 text-white">Start free trial</a>
          </div>

          {/* Enterprise */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-200">
            <h3 className="text-lg font-semibold text-white">Enterprise</h3>
            <p className="mt-2 text-sm text-slate-300/90">Security-first organizations.</p>
            <div className="mt-6 text-4xl font-bold text-white">Custom</div>
            <ul className="mt-6 space-y-2 text-sm">
              <li>• SSO, SCIM, SOC2</li>
              <li>• Private model hosting</li>
              <li>• Dedicated support</li>
              <li>• On-prem options</li>
            </ul>
            <a href="#get-started" className="mt-6 inline-flex justify-center rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-white hover:bg-white/10">Contact sales</a>
          </div>
        </div>
      </div>
    </section>
  );
}
