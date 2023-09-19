"use client";

import Footer from '@/components/footer/footer';
import Navbar from '@/components/nav/nav';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FC } from "react";

interface ReactQueryProviderProps {
  children: React.ReactNode;
}

const queryClient = new QueryClient()

const ReactQueryProvider:FC<ReactQueryProviderProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <html lang="en">
        <body>
          <div className="bg-wrapper">
            <Navbar />
            <main className="main-wrapper">
              {children}
            </main>
            <Footer />
          </div>
        </body>
      </html>
    </QueryClientProvider>
  );
}

export default ReactQueryProvider;