import { BaseComponent, RawComponent } from "./Base";

import { RawJSON } from "../";

export type RawTranslateComponent = RawComponent<
    Pick<TranslateComponent, "translate">
    & Partial<Pick<TranslateComponent, "with">>
    >;

export class TranslateComponent extends BaseComponent {

    translate = "";
    with: (RawJSON | string)[] = [];

    constructor(component?: TranslateComponent | RawTranslateComponent | string) {
        super();

        this.setup(component);
    }

    /**
     * Set translate for component
     *
     * @param translate - Translate
     *
     * @return Current component context
     *
     * @see {@link https://minecraft.fandom.com/wiki/Raw_JSON_text_format#Translated_Text | Translated Text}
     */
    setTranslate(translate: TranslateComponent["translate"] = ""): this {
        this.translate = translate;

        return this;
    }

    /**
     * Add translate variables
     *
     * @param withTranslate - Translate variables
     *
     * @return Current component context
     *
     * @see {@link https://minecraft.fandom.com/wiki/Raw_JSON_text_format#Translated_Text | Translated Text}
     */
    addWith(withTranslate: TranslateComponent["with"] | TranslateComponent["with"][number]): this {
        this.with = this.with.concat(withTranslate);

        return this;
    }

    /**
     * Clear translate variables
     *
     * @return Current component context
     */
    clearWith(): this {
        this.with = [];

        return this;
    }
}

/**
 * TranslateComponent Fabric
 *
 * @param translate - Translate
 * @param withTranslate - Translate variables
 *
 * @return TranslateComponent
 *
 * @see {@link https://minecraft.fandom.com/wiki/Raw_JSON_text_format#Translated_Text | Translated Text}
 */
export function translate(translate: TranslateComponent["translate"], withTranslate?: TranslateComponent["with"]): TranslateComponent {
    const component = new TranslateComponent({
        translate
    });

    if (withTranslate) {
        component.addWith(withTranslate);
    }

    return component;
}
