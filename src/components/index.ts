import { RawNBTComponent, NBTComponent } from "./NBT";
import { RawTextComponent, TextComponent } from "./Text";
import { RawScoreComponent, ScoreComponent } from "./Score";
import { RawKeybindComponent, KeybindComponent } from "./Keybind";
import { RawSelectorComponent, SelectorComponent } from "./Selector";
import { RawTranslateComponent, TranslateComponent } from "./Translate";

export type RawComponentsUnion =
    RawNBTComponent
    | RawTextComponent
    | RawScoreComponent
    | RawKeybindComponent
    | RawSelectorComponent
    | RawTranslateComponent;

export type ComponentsUnion =
    NBTComponent
    | TextComponent
    | ScoreComponent
    | KeybindComponent
    | SelectorComponent
    | TranslateComponent;

export enum Component {
    SEPARATOR = "\n",
    SPACE = " ",
    BULLET = "§7•§r",
    VERTICAL_LINE = "§7|§r",
    SLASH = "§7/§r",
    TRANSLATE_VARIABLE = "%s"
}

export * from "./Base";
export * from "./Keybind";
export * from "./NBT";
export * from "./Score";
export * from "./Selector";
export * from "./Text";
export * from "./Translate";
