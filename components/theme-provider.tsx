"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type Theme = "light" | "dark" | "system";
export type ResolvedTheme = "light" | "dark";

const STORAGE_KEY = "theme";
const THEMES: Theme[] = ["light", "dark"];

interface ThemeContextValue {
  themes: Theme[];
  theme: Theme;
  resolvedTheme: ResolvedTheme | undefined;
  systemTheme: ResolvedTheme | undefined;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  themes: THEMES,
  theme: "system",
  resolvedTheme: undefined,
  systemTheme: undefined,
  setTheme: () => {},
});

function readStoredTheme(): Theme {
  if (typeof window === "undefined") return "system";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === "light" || stored === "dark" ? stored : "system";
}

function readSystemTheme(): ResolvedTheme | undefined {
  if (typeof window === "undefined" || !window.matchMedia) return undefined;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function resolveTheme(
  theme: Theme,
  systemTheme: ResolvedTheme | undefined,
): ResolvedTheme {
  return theme === "system" ? systemTheme ?? "light" : theme;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => readStoredTheme());
  const [systemTheme, setSystemTheme] = useState<ResolvedTheme | undefined>(
    () => readSystemTheme(),
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (event: MediaQueryListEvent) => {
      setSystemTheme(event.matches ? "dark" : "light");
    };
    mediaQuery.addEventListener("change", onChange);
    return () => mediaQuery.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const onStorage = (event: StorageEvent) => {
      if (event.key === STORAGE_KEY) setThemeState(readStoredTheme());
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const resolvedTheme = resolveTheme(theme, systemTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(resolvedTheme);
    root.style.colorScheme = resolvedTheme;
  }, [resolvedTheme]);

  const setTheme = useCallback((next: Theme) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Ignore storage errors (e.g. private browsing).
    }
    setThemeState(next);
  }, []);

  const value = useMemo(
    () => ({
      themes: THEMES,
      theme,
      resolvedTheme,
      systemTheme,
      setTheme,
    }),
    [theme, resolvedTheme, systemTheme, setTheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  return useContext(ThemeContext);
}