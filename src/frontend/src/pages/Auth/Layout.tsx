import { Trans } from '@lingui/react/macro';
import { Center, Container, Loader } from '@mantine/core';
import * as React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Separator } from '../../components/ui/separator';
import SplashScreen from '../../components/SplashScreen';
import { doLogout } from '../../functions/auth';

export default function LoginLayoutComponent() {
  return (
    <SplashScreen>
      <Center mih='100vh' p='lg'>
        <Container>
          <Outlet />
        </Container>
      </Center>
    </SplashScreen>
  );
}

export function Wrapper({
  children,
  titleText,
  logOff = false,
  loader = false,
  smallPadding = false
}: Readonly<{
  children?: React.ReactNode;
  titleText: string;
  logOff?: boolean;
  loader?: boolean;
  smallPadding?: boolean;
}>) {
  const navigate = useNavigate();

  return (
    <Card className='shadcn-scope min-w-[425px] shadow-lg'>
      <CardHeader className={smallPadding ? 'pb-0' : undefined}>
        <CardTitle className='text-2xl font-bold bg-gradient-to-br from-primary to-primary/60 bg-clip-text text-transparent'>
          {titleText}
        </CardTitle>
        <Separator />
      </CardHeader>
      <CardContent className={smallPadding ? 'pt-2' : undefined}>
        {loader && (
          <div className='flex justify-center py-4'>
            <Loader />
          </div>
        )}
        {children}
        {logOff && (
          <>
            <Separator className='my-4' />
            <Button
              variant='destructive'
              className='w-full'
              onClick={() => doLogout(navigate)}
            >
              <Trans>Log off</Trans>
            </Button>
          </>
        )}
      </CardContent>
    </Card>
  );
}
