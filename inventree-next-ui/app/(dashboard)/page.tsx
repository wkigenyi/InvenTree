import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Home' };

export default function DashboardHomePage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">
          Welcome back! Here&apos;s an overview of your inventory.
        </p>
      </div>

      {/* Summary cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: 'Total Parts', value: '—', icon: '⚙️' },
          { label: 'Stock Items', value: '—', icon: '📦' },
          { label: 'Open Orders', value: '—', icon: '📋' },
          { label: 'Build Orders', value: '—', icon: '🔧' },
        ].map((card) => (
          <div
            key={card.label}
            className="rounded-xl border bg-card text-card-foreground shadow-sm p-6 space-y-2"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-muted-foreground">
                {card.label}
              </span>
              <span className="text-xl">{card.icon}</span>
            </div>
            <p className="text-3xl font-bold">{card.value}</p>
          </div>
        ))}
      </div>

      <div className="rounded-xl border bg-card p-6">
        <h3 className="font-semibold mb-2">Recent Activity</h3>
        <p className="text-sm text-muted-foreground">
          No recent activity. Connect to an InvenTree backend via{' '}
          <code className="font-mono text-xs bg-muted rounded px-1 py-0.5">
            NEXT_PUBLIC_API_HOST
          </code>{' '}
          to load live data.
        </p>
      </div>
    </div>
  );
}
