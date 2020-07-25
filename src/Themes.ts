export enum Colors {
  White = "#ffffff",
  LightGray = "#cccccc",
  Gray = "#323232",
  // Light Theme
  Green = "#50eba9",
  Red = "#E02020",
  Canary = "#FAEB3F",
  // Dark Theme
  Move = "#54f0f7",
  Exercise = "#c1ff00",
  Stand = "#ef135f"
}

export type Theme = "dark" | "light";

export interface ThemeColors {
  LegendColorPercentage: string;
  LegendColor: string;
  RingColors: string[];
}

export const THEMES: { dark: ThemeColors; light: ThemeColors } = {
  dark: {
    LegendColorPercentage: Colors.White,
    LegendColor: Colors.LightGray,
    RingColors: [Colors.Stand, Colors.Exercise, Colors.Move]
  },
  light: {
    LegendColorPercentage: Colors.Gray,
    LegendColor: Colors.LightGray,
    RingColors: [Colors.Green, Colors.Canary, Colors.Red]
  }
};
