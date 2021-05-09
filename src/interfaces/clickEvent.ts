import { IFormatting } from "./formatting";

export enum ClickAction {
    OPEN_URL = "open_url",
    OPEN_FILE = "open_file",
    RUN_COMMAND = "run_command",
    SUGGEST_COMMAND = "suggest_command",
    CHANGE_PAGE = "change_page",
    COPY_TO_CLIPBOARD = "copy_to_clipboard"
}

export type ClickActionUnion = "open_url" | "open_file" | "run_command" | "suggest_command" | "change_page" | "copy_to_clipboard";

export interface IClickEvent extends IFormatting {
    insertion?: string;
    clickEvent?: {
        action: ClickAction | ClickActionUnion;
        value: string;
    }
}
