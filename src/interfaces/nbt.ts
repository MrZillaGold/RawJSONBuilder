export type NBT = {
    nbt: string;
    interpret?: boolean;
} & {
    [key in "block" | "entity" | "storage"]: boolean;
};
