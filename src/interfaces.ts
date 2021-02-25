import { IText } from "./interfaces/text";
import { ITranslate } from "./interfaces/translate";
import { IClickEvent } from "./interfaces/clickEvent";
import { IKeybind } from "./interfaces/keybind";
import { NBT } from "./interfaces/nbt";
import { IScore } from "./interfaces/score";
import { ISelector } from "./interfaces/selector";

export type RawJSON = {
    extra?: (IText | ITranslate | IClickEvent | IKeybind | NBT | IScore | ISelector)[]
} & (
    IText
    | ITranslate
    | IClickEvent
    | IKeybind
    | NBT
    | IScore
    | ISelector
    );

export * from "./interfaces/text";
export * from "./interfaces/translate";
export * from "./interfaces/score";
export * from "./interfaces/selector";
export * from "./interfaces/keybind";
export * from "./interfaces/clickEvent";
export * from "./interfaces/formatting";
export * from "./interfaces/nbt";
export * from "./interfaces/hoverEvent";
export * from "./RawJSONBuilder";