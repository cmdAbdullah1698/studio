"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

function ThemeAutoSwitcher() {
  const { setTheme, resolvedTheme } = useTheme();
  
  React.useEffect(() => {
    const isInitialLoad = sessionStorage.getItem('theme_set') === null;

    if (isInitialLoad) {
      const currentHour = new Date().getHours();
      // Dark mode between 7 PM (19) and 6 AM (6)
      if (currentHour >= 19 || currentHour < 6) {
        if (resolvedTheme !== 'dark') {
          setTheme('dark');
        }
      } else {
        if (resolvedTheme !== 'light') {
          setTheme('light');
        }
      }
      sessionStorage.setItem('theme_set', 'true');
    }
  }, [setTheme, resolvedTheme]);

  return null;
}


export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <ThemeAutoSwitcher />
      {children}
    </NextThemesProvider>
  )
}
