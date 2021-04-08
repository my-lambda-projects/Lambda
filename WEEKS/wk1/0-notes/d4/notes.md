# Flex


# justify-content | CSS-Tricks

> The justify-content property is a sub-property of the Flexible Box Layout module. It defines the alignment along the main axis. It helps distribute extra

Take the pain out of building site search with the Algolia hosted API. **[Start free now!](https://srv.buysellads.com/ads/long/x/T6A3N7DTTTTTTT66YJJCTTTTTTTVXPSDKTTTTTTTL4MCVYTTTTTTTR7M5VBNBBPUCMZDVIPYC73H6KZZP3ACOW44VQPE)**

The `justify-content` property is a sub-property of the [Flexible Box Layout module](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).

It defines the alignment along the main axis. It helps distribute extra free space leftover when either all the flex items on a line are inflexible, or are flexible but have reached their maximum size. It also exerts some control over the alignment of items when they overflow the line.

The `justify-content` property accepts five different values:

*   `flex-start` (**default**): items are packed toward the start line
*   `flex-end`: items are packed toward to end line
*   `center`: items are centered along the line
*   `space-between`: items are evenly distributed in the line; first item is on the start line, last item on the end line
*   `space-around`: items are evenly distributed in the line with equal space around them
*   `space-evenly`: items are distributed so that the spacing between any two adjacent alignment subjects, before the first alignment subject, and after the last alignment subject is the same

The following figure helps understand what the `justify-content` property actually does:

![justify-content](https://www.w3.org/TR/css3-flexbox/images/flex-pack.svg)

### Syntax

    justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly
    
    .flex-item {
      justify-content: center;
    }

### Demo

The following demo shows how flex items behave depending on \`justify-content\` value:

*   The red list is set to `flex-start`
*   The yellow is set to `flex-end`
*   The blue is set to `center`
*   The green is set to `space-between`
*   The pink is set to `space-around`
*   The light green is set to `space-evenly`

### Related Properties

*   [display (flex)](https://css-tricks.com/almanac/properties/d/display/)
*   [flex-direction](https://css-tricks.com/almanac/properties/f/flex-direction/)
*   [flex-flow](https://css-tricks.com/almanac/properties/f/flex-flow/)
*   [flex-wrap](https://css-tricks.com/almanac/properties/f/flex-wrap/)
*   [align-items](https://css-tricks.com/almanac/properties/a/align-items/)
*   [align-content](https://css-tricks.com/almanac/properties/a/align-content/)

### Other Resources

*   [justify-content in the spec](https://www.w3.org/TR/css3-flexbox/#justify-content-property)
*   [justify-content at MDN](https://developer.mozilla.org/en-US/docs/CSS/justify-content)
*   [Advanced cross-browser flexbox](https://dev.opera.com/articles/view/advanced-cross-browser-flexbox/#fallbacks)
*   [A guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
*   [Using Flexbox](https://css-tricks.com/using-flexbox/)
*   [Old Flexbox and new Flexbox](https://css-tricks.com/old-flexbox-and-new-flexbox/)

### Browser Support

#### Desktop

| Chrome | Firefox | IE | Edge | Safari |
| --- | --- | --- | --- | --- |
| 21\* | 28 | 11 | 12 | 6.1\* |

#### Mobile / Tablet

| Android Chrome | Android Firefox | Android | iOS Safari |
| --- | --- | --- | --- |
| 89 | 86 | 4.4 | 7.0-7.1\* |

Blackberry browser 10+ supports the new syntax.

As of our latest December 2018 update, `justify-content: space-evenly;` is gaining support. There is a [working draft spec](https://drafts.csswg.org/css-align-3/#valdef-align-content-space-evenly) on it.

#### Desktop

| Chrome | Firefox | IE | Edge | Safari |
| --- | --- | --- | --- | --- |
| 60 | 52 | No | 79 | 11 |

#### Mobile / Tablet

| Android Chrome | Android Firefox | Android | iOS Safari |
| --- | --- | --- | --- |
| 89 | 86 | 89 | 11.0-11.2 |

For more informations about how to mix syntaxes in order to get the best browser support, please refer to [this article (CSS-Tricks)](https://css-tricks.com/using-flexbox/) or [this article (DevOpera)](https://dev.opera.com/articles/view/advanced-cross-browser-flexbox/#fallbacks).


[Source](https://css-tricks.com/almanac/properties/j/justify-content/)
