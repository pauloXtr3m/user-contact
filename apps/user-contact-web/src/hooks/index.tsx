"use client"

import {MessageContextProvider} from "@/hooks/message";
import {BaseProps} from "@/components/baseProps";

export const AppProvider = ({ children }: BaseProps) => {
  return (
    <MessageContextProvider>
      {children}
    </MessageContextProvider>
  )
}
