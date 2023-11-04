import { BaseComponent, RawComponent } from "./Base";

export type RawKeybindComponent = RawComponent<Pick<KeybindComponent, "keybind">>;

export class KeybindComponent extends BaseComponent {

    keybind = "";

    constructor(component?: KeybindComponent | RawKeybindComponent | string) {
        super();

        this.setup(component);
    }

    /**
     * Set keybind for component
     *
     * @param keybind - Keybind
     *
     * @return Current component context
     *
     * @see {@link https://minecraft.wiki/w/Raw_JSON_text_format#Keybind | Keybind}
     */
    setKeybind(keybind: KeybindComponent["keybind"] = ""): this {
        this.keybind = keybind;

        return this;
    }
}

/**
 * KeybindComponent Fabric
 *
 * @param keybind - Keybind
 *
 * @return KeybindComponent
 *
 * @see {@link https://minecraft.wiki/w/Raw_JSON_text_format#Keybind | Keybind}
 */
export function keybind(keybind: KeybindComponent["keybind"]): KeybindComponent {
    return new KeybindComponent({
        keybind
    });
}
