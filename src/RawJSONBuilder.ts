// @ts-ignore
import * as minecraftProtocolChatParser from "minecraft-protocol-chat-parser";

import { IKeybind, ITranslate, IClickEvent, NBT, IText, IScore, ISelector, RawJSON } from "./interfaces";

const parser = minecraftProtocolChatParser(735);

export class RawJSONBuilder {

    message: IText | ITranslate | IClickEvent | IKeybind | NBT | IScore | ISelector;
    extra: (IText | ITranslate | IClickEvent | IKeybind | NBT | IScore | ISelector)[] = [];

    constructor({ extra, ...message }: RawJSON = {}) {
        this.extra = extra || [];
        this.message = message;
    }

    setText(text: IText | string): this {
        if (typeof text === "string") {
            text = {
                text
            };
        }

        this.message = text;

        return this;
    }

    setTranslate(translate: ITranslate | string): this {
        if (typeof translate === "string") {
            translate = {
                translate
            };
        }

        this.message = translate;

        return this;
    }

    setScore(score: IScore): this {
        this.message = score;

        return this;
    }

    setSelector(selector: ISelector): this {
        this.message = selector;

        return this;
    }

    setKeybind(keybind: IKeybind): this {
        this.message = keybind;

        return this;
    }

    setNBT(NBT: NBT): this {
        this.message = NBT;

        return this;
    }

    setExtra(extra: RawJSONBuilder | RawJSONBuilder[]): this {
        extra = Array.isArray(extra) ? extra : [extra];

        this.extra = extra.map((element) => element.toJSON());

        if (!Object.keys(this.message).length) {
            this.setText("");
        }

        return this;
    }

    addExtra(extra: RawJSONBuilder | RawJSONBuilder[]): this {
        extra = Array.isArray(extra) ? extra : [extra];

        this.extra = this.extra
            .concat(
                extra.map((element) => element.toJSON())
            );

        if (!Object.keys(this.message).length) {
            this.setText("");
        }

        return this;
    }

    parse(text: string): RawJSONBuilder {
        return new RawJSONBuilder(parser.parseString(text));
    }

    toJSON(): RawJSON {
        return {
            ...this.message,
            extra: this.extra.length ?
                this.extra
                :
                undefined
        };
    }

    toString(): string {
        return JSON.stringify(this.toJSON());
    }
}
