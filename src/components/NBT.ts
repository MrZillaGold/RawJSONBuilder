import { BaseComponent, RawComponent } from "./Base";

import { RawJSON } from "../";

export type RawNBTComponent = RawComponent<Pick<NBTComponent, "nbt" | "interpret" | "block" | "entity" | "storage">>;

export class NBTComponent extends BaseComponent {

    nbt = "";
    interpret?: boolean = undefined;
    separator?: RawJSON = undefined;

    block?: string = undefined;
    entity?: string = undefined;
    storage?: string = undefined;

    constructor(component?: NBTComponent | RawNBTComponent | string) {
        super();

        this.setup(component);
    }

    /**
     * Set NBT path for component
     *
     * @param nbt - NBT path
     *
     * @return Current component context
     *
     * @see {@link https://minecraft.wiki/w/Raw_JSON_text_format#NBT_Values | NBT Values}
     */
    setNBT(nbt: NBTComponent["nbt"] = ""): this {
        this.nbt = nbt;

        return this;
    }

    /**
     * Set interpret for component
     *
     * @param interpret - Interpret value
     *
     * @return Current component context
     *
     * @see {@link https://minecraft.wiki/w/Raw_JSON_text_format#NBT_Values | NBT Values}
     */
    setInterpret(interpret: NBTComponent["interpret"] = true): this {
        this.interpret = interpret;

        return this;
    }

    /**
     * Set block coordinates for component
     *
     * @param block - Block coordinates
     *
     * @return Current component context
     *
     * @see {@link https://minecraft.wiki/w/Raw_JSON_text_format#NBT_Values | NBT Values}
     */
    setBlock(block?: NBTComponent["block"]): this {
        this.block = block;

        return this;
    }

    /**
     * Set entity selector for component
     *
     * @param entity - Entity selector
     *
     * @return Current component context
     *
     * @see {@link https://minecraft.wiki/w/Raw_JSON_text_format#NBT_Values | NBT Values}
     */
    setEntity(entity?: NBTComponent["entity"]): this {
        this.entity = entity;

        return this;
    }

    /**
     * Set namespaced ID or command storage for component
     *
     * @param storage - Namespaced ID or command storage
     *
     * @return Current component context
     *
     * @see {@link https://minecraft.wiki/w/Raw_JSON_text_format#NBT_Values | NBT Values}
     */
    setStorage(storage?: NBTComponent["storage"]): this {
        this.storage = storage;

        return this;
    }

    /**
     * Set separator for component
     *
     * @param separator - Separator
     *
     * @return Current component context
     *
     * @see {@link https://minecraft.wiki/w/Raw_JSON_text_format#NBT_Values | NBT Values}
     */
    setSeparator(separator?: NBTComponent["separator"]): this {
        this.separator = separator;

        return this;
    }

    /**
     * Get component interpret status
     *
     * @return Component interpret status
     */
    get isInterpret(): boolean {
        return Boolean(this.interpret);
    }

    /**
     * Get component block status
     *
     * @return Component block status
     */
    get hasBlock(): boolean {
        return Boolean(this.block);
    }

    /**
     * Get component entity status
     *
     * @return Component entity status
     */
    get hasEntity(): boolean {
        return Boolean(this.entity);
    }

    /**
     * Get component storage status
     *
     * @return Component storage status
     */
    get hasStorage(): boolean {
        return Boolean(this.storage);
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
 * NBTComponent Fabric
 *
 * @param nbt - NBT path
 * @param interpret - Interpret
 *
 * @return NBTComponent
 *
 * @see {@link https://minecraft.wiki/w/Raw_JSON_text_format#NBT_Values | NBT Values}
 */
export function nbt(nbt: NBTComponent["nbt"], interpret?: NBTComponent["interpret"]): NBTComponent {
    return new NBTComponent({
        nbt,
        interpret
    });
}
