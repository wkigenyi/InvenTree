import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Stock' };

export default function StockPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Stock</h2>
        <p className="text-muted-foreground">View and manage stock locations and items.</p>
      </div>
      <div className="rounded-xl border bg-card p-6">
        <p className="text-sm text-muted-foreground">
          Stock items will appear here once connected to an InvenTree backend.
        </p>
      </div>
    </div>
  );
}
