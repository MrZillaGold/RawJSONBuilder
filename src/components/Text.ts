import { BaseComponent, RawComponent } from "./Base";

export type RawTextComponent = RawComponent<Pick<TextComponent, "text">>;

export class TextComponent extends BaseComponent {

    text = "";

    constructor(component?: TextComponent | RawTextComponent | string) {
        super();

        this.setup(component);
    }

    /**
     * Set text for component
     *
     * @param text - Text
     *
     * @return Current component context
     *
     * @see {@link https://minecraft.wiki/w/Raw_JSON_text_format#Translated_Text | Plain Text}
     */
    setText(text: TextComponent["text"]): this {
        this.text = text;

        return this;
    }
}

/**
 * TextComponent Fabric
 *
 * @param text - Text
 * @param color - Color
 *
 * @return TextComponent
 *
 * @see {@link https://minecraft.wiki/w/Raw_JSON_text_format#Plain_Text | Plain Text}
 */
export function text(text: TextComponent["text"], color?: BaseComponent["color"]): TextComponent {
    return new TextComponent({
        text,
        color
    });
}
