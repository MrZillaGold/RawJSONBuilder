import assert from "assert";

import { RawJSONBuilder } from "../lib/RawJSONBuilder.js";

describe("RawJSONBuilder", () => {
    it("Build RawJSON to string and check match", () => {
        const rawString = new RawJSONBuilder()
            .setText("§1§lLorem§r §2ipsum")
            .setExtra(
                new RawJSONBuilder()
                    .setText("dolor sit amet,")
            )
            .setExtra(
                new RawJSONBuilder()
                    .setText({
                        text: "consectetur adipiscing elit.",
                        color: "black",
                        bold: true
                    })
            )
            .addExtra([
                new RawJSONBuilder()
                    .setText({
                        text: "Etiam ullamcorper magna augue",
                        color: "black",
                        italic: true
                    })
            ])
            .toRawString();

        assert.strictEqual(rawString, "§1§lLorem§r §2ipsum§0§lconsectetur adipiscing elit.§0§oEtiam ullamcorper magna augue");
    });
});
