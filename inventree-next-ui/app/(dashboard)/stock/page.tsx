import type { Metadata } from 'next';
import { Warehouse, Plus, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';

export const metadata: Metadata = { title: 'Stock' };

export default function StockPage() {
  return (
    <div className='space-y-6'>
      <div className='flex items-center justify-between'>
        <div>
          <h1 className='text-3xl font-bold tracking-tight'>Stock</h1>
          <p className='text-muted-foreground mt-1'>
            Track stock items and storage locations.
          </p>
        </div>
        <Button className='gap-2'>
          <Plus className='h-4 w-4' /> Add Stock
        </Button>
      </div>

      <div className='flex items-center gap-3'>
        <div className='relative flex-1 max-w-sm'>
          <Search className='absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground' />
          <Input placeholder='Search stock…' className='pl-9' />
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Stock Items</CardTitle>
          <CardDescription>
            Connect to an InvenTree backend to load real data.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='flex flex-col items-center justify-center py-12 text-center gap-3'>
            <Warehouse className='h-12 w-12 text-muted-foreground/50' />
            <p className='text-muted-foreground'>No stock items loaded.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
