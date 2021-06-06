import { inspectable } from "inspectable";
// @ts-ignore
import * as minecraftProtocolChatParser from "minecraft-protocol-chat-parser";

import { RawJSON } from "../";

// Formatting
export enum Color {
    BLACK = "black",
    DARK_BLUE = "dark_blue",
    DARK_GREEN = "dark_green",
    DARK_AQUA = "dark_aqua",
    DARK_RED = "dark_red",
    DARK_PURPLE = "dark_purple",
    GOLD = "gold",
    GRAY = "gray",
    DARK_GRAY = "dark_gray",
    BLUE = "blue",
    GREEN = "green",
    AQUA = "aqua",
    RED = "red",
    LIGHT_PURPLE = "light_purple",
    YELLOW = "yellow",
    WHITE = "white",
    RESET = "reset"
}

export type ColorUnion =
    "black"
    | "dark_blue"
    | "dark_green"
    | "dark_aqua"
    | "dark_red"
    | "dark_purple"
    | "gold"
    | "gray"
    | "dark_gray"
    | "blue"
    | "green"
    | "aqua"
    | "red"
    | "light_purple"
    | "yellow"
    | "white"
    | "reset";

export enum ColorCode {
    BLACK = "§0",
    DARK_BLUE = "§1",
    DARK_GREEN = "§2",
    DARK_AQUA = "§3",
    DARK_RED = "§4",
    DARK_PURPLE = "§5",
    GOLD = "§6",
    GRAY = "§7",
    DARK_GRAY = "§8",
    BLUE = "§9",
    GREEN = "§a",
    AQUA = "§b",
    RED = "§c",
    LIGHT_PURPLE = "§d",
    YELLOW = "§e",
    WHITE = "§f"
}

export enum Markdown {
    OBFUSCATED = "§k",
    BOLD = "§l",
    STRIKETHROUGH = "§m",
    UNDERLINED = "§n",
    ITALIC = "§o",
    RESET = "§r"
}

// Click event
export enum ClickAction {
    OPEN_URL = "open_url",
    OPEN_FILE = "open_file",
    RUN_COMMAND = "run_command",
    SUGGEST_COMMAND = "suggest_command",
    CHANGE_PAGE = "change_page",
    COPY_TO_CLIPBOARD = "copy_to_clipboard"
}

export type ClickActionUnion = "open_url" | "open_file" | "run_command" | "suggest_command" | "change_page" | "copy_to_clipboard";

export interface IClickEvent {
    action: ClickAction | ClickActionUnion;
    value: string;
}
//

// Hover event
export enum HoverAction {
    SHOW_TEXT = "show_text",
    SHOW_ITEM = "show_item",
    SHOW_ENTITY = "show_entity"
}

export type HoverActionUnion = "show_text" | "show_item" | "show_entity";

export interface IShowTextHoverEvent {
    action: HoverAction.SHOW_TEXT | "show_text";
    value?: RawJSON;
    contents?: RawJSON;
}

export interface IShowItemHoverEvent {
    action: HoverAction.SHOW_ITEM | "show_item";
    value?: string;
    contents?: {
        id: string;
        count: number;
        tag?: string;
    };
}

export interface IShowEntityHoverEvent {
    action?: HoverAction.SHOW_ENTITY | "show_entity";
    value?: {
        name?: RawJSON;
        type?: string;
        id?: string;
    };
    contents?: {
        name?: RawJSON;
        type: string;
        id: string;
    };
}
//

export type RawBaseComponent =  Partial<Pick<BaseComponent, "color" | "font" | "bold" | "italic" | "underlined" | "strikethrough" | "obfuscated" | "insertion" | "clickEvent" | "hoverEvent" | "extra">>;
export type RawComponent<C> = RawBaseComponent & C;

export const parser = minecraftProtocolChatParser(735);

export class BaseComponent {

    color?: Color | ColorUnion | string = undefined;
    font?: string = undefined;

    bold?: boolean = undefined;
    italic?: boolean = undefined;
    underlined?: boolean = undefined;
    strikethrough?: boolean = undefined;
    obfuscated?: boolean = undefined;

    insertion?: string = undefined;
    clickEvent?: IClickEvent = undefined;

    hoverEvent?: IShowTextHoverEvent | IShowItemHoverEvent | IShowEntityHoverEvent = undefined;

    extra: (RawJSON | string)[] = [];

    constructor(component?: BaseComponent | RawBaseComponent | string) {
        this.setup(component);
    }

    protected setup(component?: BaseComponent | RawBaseComponent | string): void {
        if (component) {
            if (typeof component === "string") {
                try {
                    component = JSON.parse(component) as RawBaseComponent;
                } catch {
                    component = parser.parseString(component) as RawBaseComponent;
                }
            }

            const classKeys = Object.keys(this);

            (Object.keys(component) as Array<keyof RawBaseComponent>)
                .forEach((key) => {
                    if (classKeys.includes(key)) {
                        // @ts-ignore
                        this[key] = component[key];
                    }
                });
        }
    }

    /**
     * Set color for component
     *
     * @param color - Color type or hex value
     *
     * @return Current component context
     *
     * @see {@link https://minecraft.fandom.com/wiki/Raw_JSON_text_format#Java_Edition | Raw JSON text format}
     */
    setColor(color?: BaseComponent["color"]): this {
        this.color = color;

        return this;
    }

    /**
     * Set font for component
     *
     * @param font - Font path
     *
     * @return Current component context
     *
     * @see {@link https://minecraft.fandom.com/wiki/Raw_JSON_text_format#Java_Edition | Raw JSON text format}
     */
    setFont(font?: BaseComponent["font"]): this {
        this.font = font;

        return this;
    }

    /**
     * Set bold for component
     *
     * @param bold - Bold value
     *
     * @return Current component context
     *
     * @see {@link https://minecraft.fandom.com/wiki/Raw_JSON_text_format#Java_Edition | Raw JSON text format}
     */
    setBold(bold: BaseComponent["bold"] = true): this {
        this.bold = bold;

        return this;
    }

    /**
     * Set italic for component
     *
     * @param italic - Italic value
     *
     * @return Current component context
     *
     * @see {@link https://minecraft.fandom.com/wiki/Raw_JSON_text_format#Java_Edition | Raw JSON text format}
     */
    setItalic(italic: BaseComponent["italic"] = true): this {
        this.italic = italic;

        return this;
    }

    /**
     * Set underlined for component
     *
     * @param underlined - Underlined value
     *
     * @return Current component context
     *
     * @see {@link https://minecraft.fandom.com/wiki/Raw_JSON_text_format#Java_Edition | Raw JSON text format}
     */
    setUnderlined(underlined: BaseComponent["underlined"] = true): this {
        this.underlined = underlined;

        return this;
    }

    /**
     * Set strikethrough for component
     *
     * @param strikethrough - Strikethrough value
     *
     * @return Current component context
     *
     * @see {@link https://minecraft.fandom.com/wiki/Raw_JSON_text_format#Java_Edition | Raw JSON text format}
     */
    setStrikethrough(strikethrough: BaseComponent["strikethrough"] = true): this {
        this.strikethrough = strikethrough;

        return this;
    }

    /**
     * Set obfuscated for component
     *
     * @param obfuscated - Obfuscated value
     *
     * @return Current component context
     *
     * @see {@link https://minecraft.fandom.com/wiki/Raw_JSON_text_format#Java_Edition | Raw JSON text format}
     */
    setObfuscated(obfuscated: BaseComponent["obfuscated"] = true): this {
        this.obfuscated = obfuscated;

        return this;
    }

    /**
     * Set insertion for component
     *
     * @param insertion - Insertion value
     *
     * @return Current component context
     *
     * @see {@link https://minecraft.fandom.com/wiki/Raw_JSON_text_format#Java_Edition | Raw JSON text format}
     */
    setInsertion(insertion: BaseComponent["insertion"]): this {
        this.insertion = insertion;

        return this;
    }

    /**
     * Set click event for component
     *
     * @param event - Event value
     *
     * @return Current component context
     *
     * @see {@link https://minecraft.fandom.com/wiki/Raw_JSON_text_format#Java_Edition | Raw JSON text format}
     */
    setClickEvent(event?: BaseComponent["clickEvent"]): this {
        this.clickEvent = event;

        return this;
    }

    /**
     * Set hover event for component
     *
     * @param event - Event value
     *
     * @return Current component context
     *
     * @see {@link https://minecraft.fandom.com/wiki/Raw_JSON_text_format#Java_Edition | Raw JSON text format}
     */
    setHoverEvent(event?: BaseComponent["hoverEvent"]): this {
        this.hoverEvent = event;

        return this;
    }

    /**
     * Get component color status
     *
     * @return Component color status
     */
    get hasColor(): boolean {
        return Boolean(this.color);
    }

    /**
     * Get component font status
     *
     * @return Component font status
     */
    get hasFont(): boolean {
        return Boolean(this.font);
    }

    /**
     * Get component bold status
     *
     * @return Component bold status
     */
    get isBold(): boolean {
        return Boolean(this.bold);
    }

    /**
     * Get component italic status
     *
     * @return Component italic status
     */
    get isItalic(): boolean {
        return Boolean(this.italic);
    }

    /**
     * Get component underlined status
     *
     * @return Component underlined status
     */
    get isUnderlined(): boolean {
        return Boolean(this.underlined);
    }

    /**
     * Get component strikethrough status
     *
     * @return Component strikethrough status
     */
    get isStrikethrough(): boolean {
        return Boolean(this.strikethrough);
    }

    /**
     * Get component obfuscated status
     *
     * @return Component obfuscated status
     */
    get isObfuscated(): boolean {
        return Boolean(this.obfuscated);
    }

    /**
     * Get component click event status
     *
     * @return Component click event status
     */
    get hasClickEvent(): boolean {
        return Boolean(this.clickEvent);
    }

    /**
     * Get component hover event status
     *
     * @return Component click event status
     */
    get hasHoverEvent(): boolean {
        return Boolean(this.hoverEvent);
    }

    /**
     * Add extra for component
     *
     * @param extra - Array of components or component
     *
     * @return Current component context
     *
     * @see {@link https://minecraft.fandom.com/wiki/Raw_JSON_text_format#Java_Edition | Raw JSON text format}
     */
    addExtra(extra: Exclude<BaseComponent["extra"], undefined> | Exclude<BaseComponent["extra"], undefined>[number]): this {
        this.extra = this.extra.concat(extra);

        return this;
    }

    /**
     * Clear current component extra context
     *
     * @return Current component context
     */
    clearExtra(): this {
        this.extra = [];

        return this;
    }

    /**
     * Add space to the end
     *
     * @return Current component context
     */
    addSpace(): this {
        this.addExtra(" ");

        return this;
    }

    /**
     * Add new line to the end
     *
     * @return Current component context
     */
    addNewLine(): this {
        this.addExtra("\n");

        return this;
    }

    /**
     * Get component JSON Stringify string
     *
     * @return JSON Stringify string
     */
    toString(): string {
        return JSON.stringify(this);
    }

    /**
     * Get component raw string
     *
     * @return Raw string
     */
    toRawString(): string {
        return parser.parseJSON(this);
    }
}

inspectable(BaseComponent, {
    stringify: (instance, payload, context) => (
        `${context.stylize(instance.constructor.name, "special")} ${context.inspect(
            Object.fromEntries(
                Object.entries(instance).filter(([, value]) => value !== undefined)
            )
        )}`
    )
});
