import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Manufacturing' };

export default function ManufacturingPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Manufacturing</h2>
        <p className="text-muted-foreground">Manage build orders and production.</p>
      </div>
      <div className="rounded-xl border bg-card p-6">
        <p className="text-sm text-muted-foreground">
          Build orders will appear here once connected to an InvenTree backend.
        </p>
      </div>
    </div>
  );
}
