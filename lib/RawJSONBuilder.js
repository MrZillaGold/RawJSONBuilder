"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RawJSONBuilder = void 0;
class RawJSONBuilder {
    constructor() {
        this.extra = [];
    }
    setText(text) {
        this.message = text;
        return this;
    }
    setTranslate(translate) {
        this.message = translate;
        return this;
    }
    setScore(score) {
        this.message = score;
        return this;
    }
    setSelector(selector) {
        this.message = selector;
        return this;
    }
    setKeybind(keybind) {
        this.message = keybind;
        return this;
    }
    setNBT(NBT) {
        this.message = NBT;
        return this;
    }
    setExtra(extra) {
        extra = Array.isArray(extra) ? extra : [extra];
        this.extra = extra.map((element) => element.toJSON());
        return this;
    }
    toJSON() {
        return {
            ...this.message,
            extra: this.extra
        };
    }
    toString() {
        return JSON.stringify(this.toJSON());
    }
}
exports.RawJSONBuilder = RawJSONBuilder;
