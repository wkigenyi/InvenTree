import type { Metadata } from 'next';
import { TrendingUp, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';

export const metadata: Metadata = { title: 'Sales' };

export default function SalesPage() {
  return (
    <div className='space-y-6'>
      <div className='flex items-center justify-between'>
        <div>
          <h1 className='text-3xl font-bold tracking-tight'>Sales</h1>
          <p className='text-muted-foreground mt-1'>
            Manage sales orders and customers.
          </p>
        </div>
        <Button className='gap-2'>
          <Plus className='h-4 w-4' /> New Sales Order
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Sales Orders</CardTitle>
          <CardDescription>
            Connect to an InvenTree backend to load real data.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='flex flex-col items-center justify-center py-12 text-center gap-3'>
            <TrendingUp className='h-12 w-12 text-muted-foreground/50' />
            <p className='text-muted-foreground'>No sales orders loaded.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
