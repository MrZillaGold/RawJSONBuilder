export enum Color {
    BLACK = "black",
    DARK_BLUE = "dark_blue",
    DARK_GREEN = "dark_green",
    DARK_AQUA = "dark_aqua",
    DARK_RED = "dark_red",
    DARK_PURPLE = "dark_purple",
    GOLD = "gold",
    GRAY = "gray",
    DARK_GRAY = "dark_gray",
    BLUE = "blue",
    GREEN = "green",
    AQUA = "aqua",
    RED = "red",
    LIGHT_PURPLE = "light_purple",
    YELLOW = "yellow",
    WHITE = "white",
    RESET = "reset"
}

export type ColorUnion = "black"
    | "dark_blue"
    | "dark_green"
    | "dark_aqua"
    | "dark_red"
    | "dark_purple"
    | "gold"
    | "gray"
    | "dark_gray"
    | "blue"
    | "green"
    | "aqua"
    | "red"
    | "light_purple"
    | "yellow"
    | "white"
    | "reset";

export interface IFormatting {
    color?: Color | ColorUnion | string;
    font?: string;
    bold?: boolean;
    italic?: boolean;
    underlined?: boolean;
    strikethrough?: boolean;
    obfuscated?: boolean;
}
