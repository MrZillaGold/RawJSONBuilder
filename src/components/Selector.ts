import { BaseComponent, RawComponent } from "./Base";

import { RawJSON } from "../";

export type RawSelectorComponent = RawComponent<Pick<SelectorComponent, "selector">>;

export class SelectorComponent extends BaseComponent {

    selector = "";
    separator?: RawJSON = undefined;

    constructor(component?: SelectorComponent | RawSelectorComponent | string) {
        super();

        this.setup(component);
    }

    /**
     * Set selector for component
     *
     * @param selector - Selector
     *
     * @return Current component context
     *
     * @see {@link https://minecraft.fandom.com/wiki/Raw_JSON_text_format#Entity_Names | Entity Names}
     */
    setSelector(selector: SelectorComponent["selector"] = ""): this {
        this.selector = selector;

        return this;
    }

    /**
     * Set separator for component
     *
     * @param separator - Separator
     *
     * @return Current component context
     *
     * @see {@link https://minecraft.fandom.com/wiki/Raw_JSON_text_format#Entity_Names | Entity Names}
     */
    setSeparator(separator?: SelectorComponent["separator"]): this {
        this.separator = separator;

        return this;
    }

    /**
     * Get component selector status
     *
     * @return Component selector status
     */
    hasSelector(): boolean {
        return Boolean(this.selector);
    }

    /**
     * Get component separator status
     *
     * @return Component separator status
     */
    get hasSeparator(): boolean {
        return Boolean(this.separator);
    }
}

/**
 * SelectorComponent Fabric
 *
 * @param selector - Selector
 *
 * @return SelectorComponent
 *
 * @see {@link https://minecraft.fandom.com/wiki/Raw_JSON_text_format#Entity_Names | Entity Names}
 */
export function selector(selector: SelectorComponent["selector"]): SelectorComponent {
    return new SelectorComponent({
        selector
    });
}
