import { useTheme } from "next-themes"
import { themes } from "../lib/themes"

export function useThemeColors() {
  const { theme, systemTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme
  return themes[currentTheme as keyof typeof themes] || themes.light
} 