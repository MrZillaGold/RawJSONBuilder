import { RawJSONBuilder } from "../RawJSONBuilder";
import { IText } from "./text";
import { IClickEvent } from "./clickEvent";

export interface IHoverEvent extends IClickEvent {
    hoverEvent?: IShowTextHoverEvent | IShowItemHoverEvent | IShowEntityHoverEvent;
}

export interface IShowTextHoverEvent {
    action: "show_text";
    value?: IText;
    contents?: IText;
}

export interface IShowItemHoverEvent {
    action: "show_item";
    value?: string;
    contents?: {
        id: string;
        count: number;
        tag?: string;
    };
}

export interface IShowEntityHoverEvent {
    action?: "show_entity";
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
