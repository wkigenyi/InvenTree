import type { Metadata } from 'next';
import {
  Package,
  Warehouse,
  ShoppingCart,
  TrendingUp,
  Wrench,
  AlertCircle,
  CheckCircle,
  Clock
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export const metadata: Metadata = { title: 'Home' };

const stats = [
  {
    label: 'Total Parts',
    value: '—',
    icon: Package,
    description: 'Parts in catalogue',
    color: 'text-blue-500'
  },
  {
    label: 'Stock Items',
    value: '—',
    icon: Warehouse,
    description: 'Items in stock',
    color: 'text-green-500'
  },
  {
    label: 'Open Orders',
    value: '—',
    icon: ShoppingCart,
    description: 'Purchase + sales',
    color: 'text-orange-500'
  },
  {
    label: 'Active Builds',
    value: '—',
    icon: Wrench,
    description: 'In progress',
    color: 'text-purple-500'
  }
];

const recentActivity = [
  { text: 'Purchase Order #42 received', time: '2 min ago', status: 'success' },
  { text: 'Build Order #7 started', time: '1 hr ago', status: 'info' },
  { text: 'Low stock alert: Resistor 10kΩ', time: '3 hr ago', status: 'warning' },
  { text: 'Sales Order #18 shipped', time: '5 hr ago', status: 'success' }
];

export default function HomePage() {
  return (
    <div className='space-y-6'>
      <div>
        <h1 className='text-3xl font-bold tracking-tight'>Dashboard</h1>
        <p className='text-muted-foreground mt-1'>
          Welcome back — here&apos;s what&apos;s happening in your inventory.
        </p>
      </div>

      <Separator />

      {/* Stats grid */}
      <div className='grid gap-4 md:grid-cols-2 xl:grid-cols-4'>
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardHeader className='flex flex-row items-center justify-between pb-2'>
              <CardTitle className='text-sm font-medium text-muted-foreground'>
                {stat.label}
              </CardTitle>
              <stat.icon className={`h-5 w-5 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>{stat.value}</div>
              <p className='text-xs text-muted-foreground mt-1'>
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent activity */}
      <div className='grid gap-4 md:grid-cols-2'>
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest events across your inventory</CardDescription>
          </CardHeader>
          <CardContent className='space-y-4'>
            {recentActivity.map((item, i) => (
              <div key={i} className='flex items-start gap-3'>
                {item.status === 'success' ? (
                  <CheckCircle className='h-4 w-4 text-green-500 mt-0.5 shrink-0' />
                ) : item.status === 'warning' ? (
                  <AlertCircle className='h-4 w-4 text-orange-500 mt-0.5 shrink-0' />
                ) : (
                  <Clock className='h-4 w-4 text-blue-500 mt-0.5 shrink-0' />
                )}
                <div className='flex-1 min-w-0'>
                  <p className='text-sm font-medium'>{item.text}</p>
                  <p className='text-xs text-muted-foreground'>{item.time}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks</CardDescription>
          </CardHeader>
          <CardContent className='space-y-2'>
            <Button variant='outline' className='w-full justify-start gap-2'>
              <Package className='h-4 w-4' /> Add new part
            </Button>
            <Button variant='outline' className='w-full justify-start gap-2'>
              <ShoppingCart className='h-4 w-4' /> Create purchase order
            </Button>
            <Button variant='outline' className='w-full justify-start gap-2'>
              <TrendingUp className='h-4 w-4' /> Create sales order
            </Button>
            <Button variant='outline' className='w-full justify-start gap-2'>
              <Wrench className='h-4 w-4' /> Start build order
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
