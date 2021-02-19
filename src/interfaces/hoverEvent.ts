import { IText } from "./text";
import { IClickEvent } from "./clickEvent";

export interface IHoverEvent extends IClickEvent {
    hoverEvent?: {
        action: "show_text" | "show_item" | "show_entity";
        /**
         * @deprecated Deprecated, use contents instead.
         */
        value?: {
            show_text?: IText;
            show_item?: string;
            show_entity?: {
                name?: string;
                type?: string;
                id?: string;
            }
        }
        contents?: {
            show_text?: string | IText | (string | IText)[];
            show_item?: {
                id: string;
                count: number;
                tag?: string;
            }
            show_entity?: {
                name?: IText;
                type: string;
                id: string;
            }
        }
    }
}
