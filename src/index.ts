import {ComponentsUnion, parser, RawComponentsUnion} from "./components";

export type RawJSON = ComponentsUnion | RawComponentsUnion;

/**
 * Parse Raw String to Raw JSON
 *
 * @param text - Raw String
 *
 * @return Raw JSON
 */
export function parse(text: string): RawComponentsUnion {
    return parser.parseString(text);
}

export * from "./components";
