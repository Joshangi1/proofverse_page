import React from "react";

// Proofverse-style dark dashboard clone
// Drop this component into a React + Tailwind project and render <App />
// Tailwind tip: enable dark mode 'class' or 'media'. This design assumes dark.

const StatPill = ({ icon, children }) => (
  <div className="flex items-center gap-3 rounded-xl bg-[#0f1014] ring-1 ring-white/5 px-3 py-2">
    <div className="grid h-8 w-8 place-items-center rounded-lg bg-violet-600/15 text-violet-400">
      {icon}
    </div>
    <span className="text-sm text-zinc-300">{children}</span>
  </div>
);

const SmallCard = ({ title, children }) => (
  <div className="rounded-2xl bg-[#0d0e12] ring-1 ring-white/5 p-4">
    <div className="mb-3 text-sm font-medium text-zinc-300">{title}</div>
    {children}
  </div>
);

const LeaderItem = ({ handle, score }) => (
  <div className="flex items-center justify-between py-2">
    <div className="flex items-center gap-3">
      <div className="h-7 w-7 rounded-full bg-white/10" />
      <span className="text-zinc-300">{handle}</span>
    </div>
    <span className="text-zinc-400 text-sm">{score}</span>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0c10] text-white">
      {/* subtle vignette */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(80%_60%_at_20%_0%,rgba(124,58,237,0.08),transparent_60%),radial-gradient(60%_50%_at_90%_10%,rgba(96,165,250,0.06),transparent_55%)]" />

      <div className="relative mx-auto max-w-7xl px-4 py-10">
        {/* GRID: 12 cols on xl */}
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
          {/* LEFT COLUMN */}
          <div className="xl:col-span-8 space-y-6">
            {/* HERO */}
            <div className="rounded-3xl bg-[#0d0f14] ring-1 ring-white/5 p-7 md:p-10">
              <div className="max-w-2xl">
                <div className="text-3xl md:text-4xl font-semibold leading-tight text-zinc-50">
                  Your actions speak louder than words — Verify them on chain.
                </div>
                <p className="mt-4 text-zinc-400 max-w-xl">
                  A decentralized future where what you&apos;ve done speaks louder than who you say you are — powered
                </p>
                <button className="mt-6 rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold hover:bg-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-400">
                  Get Started
                </button>
              </div>

              {/* trio cards */}
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <SmallCard title="What is Proofverse?">
                  <div className="flex items-center gap-3 rounded-xl bg-black/20 p-3">
                    <svg viewBox="0 0 24 24" className="h-5 w-5 text-violet-400" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                    <div className="h-3 w-24 rounded bg-white/10" />
                  </div>
                </SmallCard>
                <SmallCard title="Why use it?">
                  <ul className="space-y-2 text-sm text-zinc-400">
                    <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-violet-500"/>Reseive invaliation</li>
                    <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-violet-500"/>Use weapon</li>
                  </ul>
                </SmallCard>
                <SmallCard title="How it works">
                  <div className="space-y-3">
                    <StatPill icon={<svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M3 12h18M3 6h18M3 18h18"/></svg>}>Connect</StatPill>
                    <StatPill icon={<svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M12 2l3 7h7l-5.5 4 2.5 7-7-4-7 4 2.5-7L2 9h7z"/></svg>}>Prove</StatPill>
                  </div>
                </SmallCard>
              </div>
            </div>

            {/* EXPLORE */}
            <div className="rounded-3xl bg-[#0d0f14] ring-1 ring-white/5 p-6 md:p-8">
              <h3 className="text-lg font-semibold mb-5 text-zinc-100">Explore</h3>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
                {/* Leaderboard */}
                <div className="md:col-span-2 rounded-2xl bg-[#0b0d12] p-5 ring-1 ring-white/5">
                  <div className="mb-3 text-sm font-medium text-zinc-300">Leaderboard</div>
                  <div className="divide-y divide-white/5">
                    <LeaderItem handle="@alice" score={125} />
                    <LeaderItem handle="@bob" score={118} />
                    <LeaderItem handle="@carol" score={100} />
                  </div>
                </div>

                {/* Trending Badges + Reputation */}
                <div className="md:col-span-3 grid grid-cols-1 gap-6">
                  <div className="rounded-2xl bg-[#0b0d12] p-5 ring-1 ring-white/5">
                    <div className="mb-3 text-sm font-medium text-zinc-300">Trending Badges</div>
                    <div className="flex items-center gap-3">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="grid h-10 w-10 place-items-center rounded-xl bg-violet-600/15 text-violet-400">
                          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><circle cx="12" cy="12" r="6"/></svg>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-2xl bg-[#0b0d12] p-5 ring-1 ring-white/5">
                    <div className="text-sm text-zinc-300">Community Reputation</div>
                    <div className="mt-2 text-3xl font-semibold tracking-tight">32,564</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="xl:col-span-4 space-y-6">
            {/* Profile */}
            <div className="rounded-3xl bg-[#0d0f14] ring-1 ring-white/5 p-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-white/10" />
                <div className="flex-1">
                  <div className="text-sm text-zinc-300">0x2584…111d</div>
                  <div className="mt-1 text-xs text-zinc-500">Reputation</div>
                  <div className="mt-2 text-4xl font-semibold">75</div>
                  <button className="mt-4 w-full rounded-xl bg-violet-600 px-4 py-2 text-sm font-semibold hover:bg-violet-500">Add Proof</button>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <StatPill icon={<svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><circle cx="12" cy="12" r="10"/></svg>}>Partipated in X DAC vofe</StatPill>
                <StatPill icon={<svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M12 2l7 7-7 7-7-7 7-7z"/></svg>}>Completed 10 Gifhult PRs</StatPill>
                <div className="col-span-1 sm:col-span-2">
                  <div className="flex items-center gap-3 rounded-xl bg-[#0f1014] ring-1 ring-white/5 px-3 py-2 opacity-60">
                    <div className="grid h-8 w-8 place-items-center rounded-lg bg-white/10" />
                    <span className="text-sm text-zinc-400">Suggested Proofs</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Integrate */}
            <div className="rounded-3xl bg-[#0d0f14] ring-1 ring-white/5 p-6">
              <div className="text-xl font-semibold">Integrate Proofverse</div>
              <p className="mt-2 text-sm text-zinc-400">Use our API and SDKs to issue portable verifiable proofs</p>
              <button className="mt-5 rounded-xl bg-violet-600 px-4 py-2 text-sm font-semibold hover:bg-violet-500">Get Started</button>
            </div>

            {/* Developer Integration */}
            <div className="rounded-3xl bg-[#0d0f14] ring-1 ring-white/5 p-6">
              <div className="text-xl font-semibold">Developer Integration</div>
              <div className="mt-4 h-24 rounded-xl bg-[#0b0d12] ring-1 ring-white/5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
