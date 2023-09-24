"use client";

import type { Metadata } from 'next';
import React, { createContext, useContext, useState } from 'react';
import './../../styles/main.scss';
import ReactQueryProvider from './react-query-provider/reactQueryProvider';



export type LoginContext = {
  isLoggedin: boolean
  setIsLoggedIn:(c: boolean) => void
}

export const Context = createContext<LoginContext>({
  isLoggedin: false,
  setIsLoggedIn: () => {}
});

export const useGlobalContext = () => useContext(Context)

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [isLoggedin, setIsLoggedIn] = useState<boolean>(false);

  return (
    <Context.Provider value={{isLoggedin, setIsLoggedIn}}>
      <ReactQueryProvider>
        {children}
      </ReactQueryProvider>
    </Context.Provider>
  )
}
