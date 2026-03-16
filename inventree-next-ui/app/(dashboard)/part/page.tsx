import type { Metadata } from 'next';
import { Package, Plus, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export const metadata: Metadata = { title: 'Parts' };

export default function PartPage() {
  return (
    <div className='space-y-6'>
      <div className='flex items-center justify-between'>
        <div>
          <h1 className='text-3xl font-bold tracking-tight'>Parts</h1>
          <p className='text-muted-foreground mt-1'>
            Manage your parts catalogue and categories.
          </p>
        </div>
        <Button className='gap-2'>
          <Plus className='h-4 w-4' /> Add Part
        </Button>
      </div>

      <Separator />

      <div className='flex items-center gap-3'>
        <div className='relative flex-1 max-w-sm'>
          <Search className='absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground' />
          <Input placeholder='Search parts…' className='pl-9' />
        </div>
        <Badge variant='outline' className='gap-1'>
          <Package className='h-3 w-3' /> All Categories
        </Badge>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Parts Catalogue</CardTitle>
          <CardDescription>
            Connect to an InvenTree backend to load real data.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='flex flex-col items-center justify-center py-12 text-center gap-3'>
            <Package className='h-12 w-12 text-muted-foreground/50' />
            <p className='text-muted-foreground'>
              No parts loaded — configure{' '}
              <code className='text-xs bg-muted rounded px-1 py-0.5'>
                NEXT_PUBLIC_API_HOST
              </code>{' '}
              to connect to an InvenTree server.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
