export enum Colors {
    White = "#ffffff",
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
    LegendColor: string;
    RingColors: string[];
}

export const THEMES: { dark: ThemeColors, light: ThemeColors } = {
    dark: {
        LegendColor: Colors.White,
        RingColors: [Colors.Stand, Colors.Exercise, Colors.Move]
    },
    light: {
        LegendColor: Colors.Gray,
        RingColors: [Colors.Green, Colors.Canary, Colors.Red]
    }
}