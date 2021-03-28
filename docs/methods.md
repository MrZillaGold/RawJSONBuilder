## Documentation

<dl>
<dt><a href="#RawJSONBuilder">RawJSONBuilder(rawJSON);</a></dt>
<dd>Main class</dd>

<dt><a href="#setText">setText(text)</a> ⇒ <code>this</code>;</dt>
<dd><p>Set text</p></dd>

<dt><a href="#setTranslate">setTranslate(translate)</a> ⇒ <code>this</code>;</dt>
<dd><p>Set translate</p></dd>

<dt><a href="#setScore">setScore(score)</a> ⇒ <code>this</code>;</dt>
<dd><p>Set score</p></dd>

<dt><a href="#setSelector">setSelector(selector)</a> ⇒ <code>this</code>;</dt>
<dd><p>Set selector</p></dd>

<dt><a href="#setKeybind">setKeybind(keybind)</a> ⇒ <code>this</code>;</dt>
<dd><p>Set keybind</p></dd>

<dt><a href="#setNBT">setNBT(NBT)</a> ⇒ <code>this</code>;</dt>
<dd><p>Set NBT</p></dd>

<dt><a href="#setExtra">addExtra(extra)</a> ⇒ <code>this</code>;</dt>
<dd><p>Set extra</p></dd>

<dt><a href="#addExtra">addExtra(extra)</a> ⇒ <code>this</code>;</dt>
<dd><p>Add extra to end</p></dd>

<dt><a href="#parse">parse(text)</a> ⇒ <code>RawJSONBuilder</code>;</dt>
<dd><p>Parse text to RawJSON</p></dd>

<dt><a href="#toJSON">toJSON()</a> ⇒ <code>RawJSON</code>;</dt>
<dd><p>Build RawJSONBuilder to RawJSON</p></dd>

<dt><a href="#toString">toString()</a> ⇒ <code>string</code>;</dt>
<dd><p>Build RawJSONBuilder to RawJSON string</p></dd>

<dt><a href="#toRawString">toRawString()</a> ⇒ <code>string</code>;</dt>
<dd><p>Build RawJSONBuilder to Raw string</p></dd>
</dl>

<a name="RawJSONBuilder"></a>

## RawJSONBuilder(rawJSON);
Main class

**Kind**: class

| Param                       | Type                      | Description                                   |
| --------------------------- | ------------------------- | --------------------------------------------- |
| rawJSON                     | `RawJSONBuilder` `string` | RawJSON for initial initialization. Optional. |

**Example**:

```js
import { RawJSONBuilder } from "rawjsonbuilder"; // ESM
// or
const { RawJSONBuilder } = require("rawjsonbuilder"); // CommonJS

const builder = new RawJSONBuilder();

const builder = new RawJSONBuilder("{\"text\": \"§7§lHello World!\"}");
```

<a name="setText"></a>

## setText(text) ⇒ `this`;
[Set text](https://minecraft.fandom.com/wiki/Raw_JSON_text_format#Plain_Text)

**Kind**: global function

**Returns**: `this` - Current RawJSONBuilder context

| Param | Type                                         | Description |
| ----- | -------------------------------------------- | ----------- |
| text  | `string` [`Text`](src/interfaces/text.ts#L3) | Text to set |

**Example**:

```js
builder.setText("§5§lHello §1Steve!");

builder.setText({
    text: "Hello Steve",
    color: "red",
    bold: true
});
```

<a name="setTranslate"></a>

## setTranslate(translate) ⇒ `this`;
[Set translate](https://minecraft.fandom.com/wiki/Raw_JSON_text_format#Translated_Text)

**Kind**: global function

**Returns**: `this` - Current RawJSONBuilder context

| Param      | Type                                                   | Description      |
| ---------- | ------------------------------------------------------ | ---------------- |
| translate  | `string` [`Translate`](src/interfaces/translate.ts#L3) | Translate to set |

**Example**:

```js
builder.setTranslate("menu.multiplayer");

builder.setTranslate({
    translate: "Hello %s!",
    with: [
        new RawJSONBuilder()
            .setText("player")
    ]
});

builder.setTranslate({
    translate: "Check %s tab.",
    with: [
        new RawJSONBuilder()
            .setTranslate("menu.multiplayer")
    ]
});
```

<a name="setScore"></a>

## setScore(score) ⇒ `this`;
[Set score](https://minecraft.fandom.com/wiki/Raw_JSON_text_format#Scoreboard_Value)

**Kind**: global function

**Returns**: `this` - Current RawJSONBuilder context

| Param  | Type                                                   | Description  |
| ------ | ------------------------------------------------------ | ------------ |
| score  | [`Score`](src/interfaces/score.ts#L1) `Score["score"]` | Score to set |

**Example**:

```js
builder.setScore({
    name: "MrZillaGold",
    objective: "stars",
    value: "3"
});

builder.setScore({
    score: {
        name: "MRLokop",
        objective: "rank",
        value: "2"
    }
});
```

<a name="setSelector"></a>

## setSelector(selector) ⇒ `this`;
[Set selector](https://minecraft.fandom.com/wiki/Raw_JSON_text_format#Entity_Names)

**Kind**: global function

**Returns**: `this` - Current RawJSONBuilder context

| Param     | Type                                                 | Description     |
| --------- | ---------------------------------------------------- | --------------- |
| selector  | `string` [`Selector`](src/interfaces/selector.ts#L1) | Selector to set |

**Example**:

```js
builder.setSelector("@p");

builder.setSelector({
    selector: "@a[team=Red]"
});
```

<a name="setKeybind"></a>

## setKeybind(keybind) ⇒ `this`;
[Set keybind](https://minecraft.fandom.com/wiki/Raw_JSON_text_format#Keybinds)

**Kind**: global function

**Returns**: `this` - Current RawJSONBuilder context

| Param    | Type                                               | Description    |
| -------- | -------------------------------------------------- | -------------- |
| keybind  | `string` [`Keybind`](src/interfaces/keybind.ts#L1) | Keybind to set |

**Example**:

```js
builder.setKeybind("key.sneak");

builder.setKeybind({
    keybind: "key.sneak"
});
```

<a name="setNBT"></a>

## setNBT(NBT) ⇒ `this`;
[Set NBT](https://minecraft.fandom.com/wiki/Raw_JSON_text_format#NBT_Values)

**Kind**: global function

**Returns**: `this` - Current RawJSONBuilder context

| Param | Type                              | Description |
| ----- | --------------------------------- | ----------- |
| NBT   | [`NBT`](src/interfaces/NBT.ts#L1) | NBT to set  |

**Example**:

```js
builder.setNBT({
    nbt: "Items[1].tag.pages[3]",
    block: "0 64 0"
});

builder.setNBT({
    nbt: "Items[1].tag.pages[3]",
    entity: "@a[team=Red]"
});
```

<a name="setExtra"></a>

## setExtra(extra) ⇒ `this`;
Set extra

**Kind**: global function

**Returns**: `this` - Current RawJSONBuilder context

| Param | Type                                | Description  |
| ----- | ----------------------------------- | ------------ |
| extra | `RawJSONBuilder` `RawJSONBuilder[]` | Extra to set |

**Example**:

```js
builder.setExtra(
    new RawJSONBuilder()
        .setText("Hello World!")
);

builder.setExtra([
    new RawJSONBuilder()
        .setText("Hi "),
    new RawJSONBuilder()
        .setText({
            text: "player",
            bold: true
        }),
    new RawJSONBuilder()
        .setText("!")
]);
```

<a name="addExtra"></a>

## addExtra(extra) ⇒ `this`;
Add extra to end

**Kind**: global function

**Returns**: `this` - Current RawJSONBuilder context

| Param | Type                                | Description  |
| ----- | ----------------------------------- | ------------ |
| extra | `RawJSONBuilder` `RawJSONBuilder[]` | Extra to add |

**Example**:

```js
builder.addExtra(
    new RawJSONBuilder()
        .setText("Hello!")
);
```

<a name="parse"></a>

## parse(text) ⇒ `RawJSONBuilder`;
Parse text to RawJSON

**Kind**: global function

**Returns**: `RawJSONBuilder` - New RawJSONBuilder instance

| Param | Type     | Description   |
| ----- | -------- | ------------- |
| text  | `string` | Text to parse |

**Example**:

```js
builder.parse("§6Hello §lworld!")
    .setExtra(
        new RawJSONBuilder()
            .setText({
                text: " :)",
                italic: true
            })
    );
```

<a name="toJSON"></a>

## toJSON() ⇒ [`RawJSON`](src/interfaces.ts#L9);
Build RawJSONBuilder to RawJSON

**Kind**: global function

**Returns**: [`RawJSON`](src/interfaces.ts#L9) - RawJSON

**Example**:

```js
builder.toJSON();
```

<a name="toString"></a>

## toString() ⇒ `string`;
Build RawJSONBuilder to RawJSON string

**Kind**: global function

**Returns**: `string` - RawJSON string

**Example**:

```js
builder.toString();
```

<a name="toRawString"></a>

## toRawString() ⇒ `string`;
Build RawJSONBuilder to Raw string

**Kind**: global function

**Returns**: `string` - Raw string

**Example**:

```js
builder.toRawString();
```
