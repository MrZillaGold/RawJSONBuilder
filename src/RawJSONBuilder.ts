import { IKeybind, ITranslate, IClickEvent, NBT, IText, IScore, ISelector } from "./interfaces";

export class RawJSONBuilder {

    message?: IText | ITranslate | IClickEvent | IKeybind | NBT | IScore | ISelector;
    extra: (IText | ITranslate | IClickEvent | IKeybind | NBT | IScore | ISelector)[] = [];

    setText(text: IText | string): this {
        if (typeof text === "string") {
            text = {
                text
            };
        }

        this.message = text;

        return this;
    }

    setTranslate(translate: ITranslate): this {
        this.message = translate;

        return this;
    }

    setScore(score: IScore) {
        this.message = score;

        return this;
    }

    setSelector(selector: ISelector) {
        this.message = selector;

        return this;
    }

    setKeybind(keybind: IKeybind) {
        this.message = keybind;

        return this;
    }

    setNBT(NBT: NBT) {
        this.message = NBT;

        return this;
    }

    setExtra(extra: RawJSONBuilder | RawJSONBuilder[]) {
        extra = Array.isArray(extra) ? extra : [extra];

        this.extra = extra.map((element) => element.toJSON());

        return this;
    }

    toJSON(): (IText | ITranslate | IClickEvent | IKeybind | NBT | IScore | ISelector) & { extra: (IText | ITranslate | IClickEvent | IKeybind | NBT | IScore | ISelector)[] }  {
        return {
            ...this.message,
            extra: this.extra
        };
    }

    toString(): string {
        return JSON.stringify(this.toJSON());
    }
}

export * from "./interfaces";
