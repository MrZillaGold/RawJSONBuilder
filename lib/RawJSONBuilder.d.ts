import { IKeybind, ITranslate, IClickEvent, NBT, IText, IScore, ISelector } from "./interfaces";
export declare class RawJSONBuilder {
    message?: IText | ITranslate | IClickEvent | IKeybind | NBT | IScore | ISelector;
    extra: (IText | ITranslate | IClickEvent | IKeybind | NBT | IScore | ISelector)[];
    setText(text: IText): this;
    setTranslate(translate: ITranslate): this;
    setScore(score: IScore): this;
    setSelector(selector: ISelector): this;
    setKeybind(keybind: IKeybind): this;
    setNBT(NBT: NBT): this;
    setExtra(extra: RawJSONBuilder | RawJSONBuilder[]): this;
    toJSON(): (IText | ITranslate | IClickEvent | IKeybind | NBT | IScore | ISelector) & {
        extra: (IText | ITranslate | IClickEvent | IKeybind | NBT | IScore | ISelector)[];
    };
    toString(): string;
}
