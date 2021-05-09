import { RawJSONBuilder } from "../RawJSONBuilder";
import { IClickEvent } from "./clickEvent";

export enum HoverAction {
    SHOW_TEXT = "show_text",
    SHOW_ITEM = "show_item",
    SHOW_ENTITY = "show_entity"
}

export interface IHoverEvent extends IClickEvent {
    hoverEvent?: IShowTextHoverEvent | IShowItemHoverEvent | IShowEntityHoverEvent;
}

export interface IShowTextHoverEvent {
    action: HoverAction.SHOW_TEXT | "show_text";
    value?: RawJSONBuilder;
    contents?: RawJSONBuilder;
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
        name?: RawJSONBuilder;
        type?: string;
        id?: string;
    };
    contents?: {
        name?: RawJSONBuilder;
        type: string;
        id: string;
    };
}
