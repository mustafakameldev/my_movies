import * as React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {queries: {retry: 0, refetchOnWindowFocus: false}},
});

interface props {
  children: React.ReactNode;
}

export const ReactQueryProvider: React.FC<props> = ({children}) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
