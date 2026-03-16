import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Purchasing' };

export default function PurchasingPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Purchasing</h2>
        <p className="text-muted-foreground">Manage purchase orders and suppliers.</p>
      </div>
      <div className="rounded-xl border bg-card p-6">
        <p className="text-sm text-muted-foreground">
          Purchase orders will appear here once connected to an InvenTree backend.
        </p>
      </div>
    </div>
  );
}
