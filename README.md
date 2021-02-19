<h1 align="center">
    <b>RawJSONBuilder</b>
</h1>
<p align="center">
  📦 Minecraft <a href="https://minecraft.gamepedia.com/Raw_JSON_text_format">Raw JSON text</a> builder.
  <br>
  <br>
  <a href="https://npmjs.com/package/rawjsonuilder">
    <img src="https://badge.fury.io/js/RawJSONBuilder.svg" alt="npm version" height="18">
  </a>
</p>

### Install 📦
`npm i rawjsonbuilder`

## Usage 🔧
```js
import { RawJSONBuilder } from "rawjsonbuilder"; // ESM
// OR
const { RawJSONBuilder } = require("rawjsonbuilder"); // CommonJS

const rawJSONBuilder = new RawJSONBuilder();

rawJSONBuilder.setText({ 
    text: "Hello World!",
    color: "black"
})
    .toJSON();
```
