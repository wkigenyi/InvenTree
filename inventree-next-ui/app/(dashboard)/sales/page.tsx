import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Sales' };

export default function SalesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Sales</h2>
        <p className="text-muted-foreground">Manage sales orders and customers.</p>
      </div>
      <div className="rounded-xl border bg-card p-6">
        <p className="text-sm text-muted-foreground">
          Sales orders will appear here once connected to an InvenTree backend.
        </p>
      </div>
    </div>
  );
}
