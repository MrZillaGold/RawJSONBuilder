import { IFormatting } from "./formatting";

export interface IClickEvent extends IFormatting {
    insertion?: boolean;
    clickEvent?: {
        action: "open_url" | "open_file" | "run_command" | "suggest_command" | "change_page" | "copy_to_clipboard";
        value: string;
    }
}
