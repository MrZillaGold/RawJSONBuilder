// @ts-ignore
import * as minecraftProtocolChatParser from "minecraft-protocol-chat-parser";

import { IKeybind, ITranslate, IClickEvent, NBT, IText, IScore, ISelector, RawJSON } from "./interfaces";

const parser = minecraftProtocolChatParser(735);

export class RawJSONBuilder {

    message: IText | ITranslate | IClickEvent | IKeybind | NBT | IScore | ISelector;
    extra: (IText | ITranslate | IClickEvent | IKeybind | NBT | IScore | ISelector)[] = [];

    constructor(rawJSON: RawJSON | string = {}) {
        if (rawJSON instanceof RawJSONBuilder) {
            rawJSON = rawJSON.toJSON();
        } else if (typeof rawJSON === "string") {
            try {
                rawJSON = JSON.parse(rawJSON) as RawJSON;
            } catch {
                throw new Error("Invalid JSON string!");
            }
        }

        const { extra, ...message } = rawJSON;

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

    setTranslate(translate: ITranslate | ITranslate["translate"]): this {
        if (typeof translate === "string") {
            translate = {
                translate
            };
        }

        this.message = translate;

        return this;
    }

    setScore(score: IScore | IScore["score"]): this {
        if (!("score" in score)) {
            score = {
                score
            };
        }

        this.message = score;

        return this;
    }

    setSelector(selector: ISelector | ISelector["selector"]): this {
        if (typeof selector === "string") {
            selector = {
                selector
            };
        }

        this.message = selector;

        return this;
    }

    setKeybind(keybind: IKeybind | IKeybind["keybind"]): this {
        if (typeof keybind === "string") {
            keybind = {
                keybind
            };
        }

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

    [Symbol.toStringTag](): string {
        return JSON.stringify(this.toJSON());
    }

    toRawString(): string {
        return parser.parseJSON(
            this.toJSON()
        );
    }
}
