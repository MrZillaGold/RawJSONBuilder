<h1 align="center">
    <b>RawJSONBuilder</b>
</h1>
<p align="center">
  📦 Minecraft <a href="https://minecraft.gamepedia.com/Raw_JSON_text_format">Raw JSON text</a> builder.
  <br>
  <br>
  <a href="https://npmjs.com/package/rawjsonbuilder">
    <img src="https://badge.fury.io/js/rawjsonbuilder.svg" alt="npm version" height="18">
  </a>
</p>

| 📖 [Documentation](https://mrzillagold.github.io/RawJSONBuilder/) |
| ---------------------------------------------------------------- |

### Install 📦
`npm i rawjsonbuilder`

## Usage 🔧
```js
import { text, TextComponent } from "rawjsonbuilder"; // ESM
// OR
const { text, TextComponent } = require("rawjsonbuilder"); // CommonJS

text("Hello World!", "black")
    .toRawString(); // §0Hello World!

const builder = new TextComponent()
    .setText("Hello World!")
    .setBold()
    .addSpace()
    .addExtra(
        text("Nice to meet you!", "red")
    )
    .toRawString(); // §lHello World! §cNice to meet you!
```
