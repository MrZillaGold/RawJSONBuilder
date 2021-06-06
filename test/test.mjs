import assert from "assert";

import { text, TextComponent } from "../lib/index.js";

describe("RawJSONBuilder", () => {
    it("Build RawJSON to string and check match", () => {
        const rawString = new TextComponent()
            .setText("§1§lLorem§r §2ipsum")
            .addExtra(
                text("dolor sit amet,")
            )
            .addExtra(
                text("consectetur adipiscing elit.", "black")
                    .setBold()
            )
            .clearExtra()
            .addExtra([
                text("Etiam ullamcorper magna augue", "black")
                    .setItalic()
            ])
            .toRawString();

        assert.strictEqual(rawString, "§1§lLorem§r §2ipsum§0§oEtiam ullamcorper magna augue");
    });
});
