# T

## ABOUT

Mobile-first, customisable CSS framework that scales.

### Key features:

* Modular, customisable and incrementally adoptable
* Mobile-first
* Follows the BEM methodology
* Uses relative units: `%` and `rem`
* Responsive flexbox grid
* Functions and mixins to speed up development and keep code DRY
* Reset stylesheet
* **Many ready-to-use compatible BEM components**


## TABLE OF CONTENT

1. [Compatible components](#compatible-components)
1. [Dependencies](#dependencies)
1. [Functions](#functions)
1. [Helpers](#helpers)
1. [Reset](#reset)
1. [Flex grid](#flex-grid)
1. [Settings](#settings)
1. [License](#license)


## COMPATIBLE COMPONENTS

* [Accordion widget - aria-accordion](https://github.com/DavideTriso/aria-accordion)
* [Tab widget - aria-tabs](https://github.com/DavideTriso/aria-tabs)
* [Dropdown - aria-dropdown](https://github.com/DavideTriso/aria-dropdown)
* [Dialog window - aria-dialog](https://github.com/DavideTriso/aria-dialog)
* [Tooltip widget - aria-tooltip](https://github.com/DavideTriso/aria-tooltip)
* [Notification widget - aria-notifications](https://github.com/DavideTriso/aria-notifications)
* [Badge widget - aria-badge](https://github.com/DavideTriso/aria-badge)
* [Progress bar - aria-progressbar](https://github.com/DavideTriso/aria-progressbar)
* [Form fields and controls - form-controls (beta)](https://github.com/DavideTriso/form-controls)


## DEPENDENCIES

**No dependencies**

## FUNCTIONS

**Following functions are available:**

### clampNumber

Clamp a number between two given values.

```
clampNumber($value, $min, $max)
```

**Parameters:**

* `$value`: the length to clamp
* `$min`: minimum accepted length
* `$max`: the maximum accepted length

**Output:** clamped length

### color

Manage colors across the application.

```
color('colorMapKey')
```

**Parameters:**

* `$colorMapKey`: a key of the map `$colors`

**Output:** the value associated with the key.

Read about `$colorsMap` map in the "SETTINGS" section of this README.


### easing

Use predefined easing functions consistently across the application

```
easing('easingMapKey')
```

**Parameters:**

* `$easingMapKey`: a key of the map `$easingMap`

**Output:** the value associated with the key.

Read about `$easingMap` map in the "SETTINGS" section of this README.


### fontSize

Use predefined font-sizes consistently across the application

```
fontSize('fontSizeMapKey')
```

**Parameters:**

* `$fontSizeMapKey`: a key of the map `$fontSizeMap`

**Output:** the value associated with the key.

Read about `$fontSizeMap` map in the "SETTINGS" section of this README.


### linearInterpolation

```
linearInterpolation($map)
```

**Parameters:**

* `$map`: a map where length == 2 of viewport widths and size value pairs

**Output:** a linear equation (CSS `calc()`function)

### mapDeepGet

Retrieve values from deep nested maps.

```
mapDeepGet($map, $key...)
```

**Parameters:**

* `$map`: the map
* `$key...`: a comma separated list of keys.

**Output:** the value associated with the last key of the list.

### pxToRem and remToPx

Convert px values to rem and vice versa.

```
pxToRem($length, $htmlElementFontlength)

remToPx($length, $htmlElementFontlength)
```

**Parameters:**

* `$length`: the length in px or rem to be converted
* `$htmlElementFontSize`: font size of the html element (in general 16px)

**Output:** the converted length.

### replaceString

Replace part of a string.

```
replaceStr($string, $search, $replace)
```

**Parameters:**

* `$string`: the string
* `$search`: the query sting
* `$replace`: the string which replaces the query string

**Output:** the new string.

### fontSize

Use predefined sizes consistently across the application

```
size('sizeMapKey')
```

**Parameters:**

* `$sizeMapKey`: a key of the map `$sizeMap`

**Output:** the value associated with the key.

Read about `$sizeMap` map in the "SETTINGS" section of this README.

### stripUnit

Remove unit from a value.

```
stripUnit($number)
```

* `$number`: a number with unit

**Output:** number without unit


### zIndex

Manage z-index across the application.

```
zIndex('zIndexMapKey')
```

**Parameters:**

* `$zIndexMapKey`: a key of the map `$zIndexMap`

**Output:** the value associated with the key.

Read about `$zIndexMap` in the "SETTINGS" section of this README.

## HELPERS

**T** provides a wide set of  mixins.
Most of the mixins accept a SASS map with a defined set of keys as parameter. Adding or removing keys from a map changes the CSS properties outputted from the mixin. This allows developers to develop reusable and  highly customisable components.  

**Following mixin helpers are included:**

### animation

Set animation properties

```
@include animation($animationMap)
```

**Parameters:**

* `$animationMap`
    * `animationDelay`
    * `animationDirection`
    * `animationDuration`
    * `animationFillMode`
    * `animationIterationCount`
    * `animationName`
    * `animationPlayState`
    * `animationTimingFunction`


### background

Set background properties

```
@include backgroundImage($backgroundMap)
```

**Parameters:**

* `$backgroundMap`
    * `backgroundAttachment`
    * `backgroundClip`
    * `backgroundColor`
    * `backgroundGradient`
    * `normalImage` url of normal background image _(required when retinaImage is set)_
    * `retinaImage` url of hi-res background image
    * `backgroundOrigin`
    * `backgroundPosition`
    * `backgroundRepeat`
    * `backgroundSize`


### border

Set border properties

```
@include border($borderMap)
```

**Parameters:**

* `$borderMap`
    * `borderColor`
    * `borderBottomColor`  
    * `borderLeftColor`  
    * `borderRightColor`  
    * `borderTopColor`
    * `borderRadius`
    * `borderBottomLeftRadius`
    * `borderBottomRightRadius`
    * `borderTopLeftRadius`
    * `borderTopRightRadius`
    * `borderStyle`
    * `borderWidth`
    * `borderBottomWidth`
    * `borderLeftWidth`
    * `borderRightWidth`
    * `borderTOpWidth`


### centerAbsolute

Absolutely position an element and center it in his relative positioned container.
Mimic the behaviour of background images positioned with `background-position: center;` and `background-size: cover;`.


```
@include centerAbsolute
```

**Parameters:**

* No parameters

### clearfix

```
@include clearfix
```

**Parameters:**

* No parameters


### columns

Set multi-column layout properties.

```
@include columns($columnsMap)
```

**Parameters:**

* `$columnsMap`
    * `columnCount`
    * `columnFill`
    * `columnGap`
    * `columnRule`
    * `columnRuleColor`
    * `columnRuleStyle`
    * `columnRuleWidth`
    * `columnWidth`

### ellipsis

Do not wrap a text when too large for the container, instead show ellipsis.

```
@include ellipsis
```

**Parameters:**

* No parameters

### flexPositioning

Set flexbox module properties for container

```
@flexPositioning($flexMap)
```

**Parameters:**

* `$flexPositioningMap`
    * `alignItems`
    * `alignContent`
    * `flexDirection`
    * `flexWrap`
    * `justifyContent`


### font

Set font properties

```
@include font($fontMap)
```

**Parameters:**

* `$fontMap`
    * `fontFamily`
    * `fontSize`
    * `fontStyle`
    * `fontVariant`
    * `fontWeight`


### hardwareAcceleration

Apply a 3d translation of 0, 0, 0 to an element, which, in most scenarios, will trigger GPU rendering.

```
@include hardwareAcceleration
```

**Parameters:**

* No parameters

### list

Set list properties.

```
@include list($listMap)
```

**Parameters**

* `$listMap`
    * `listStyleImage`
    * `listStyleType`
    * `listStylePosition`

### margin

Set margins.

```
@include margin($marginMap)
```

**Parameters:**

* `$marginMap`
    * `all` _(optional - when this parameter is set, all other parameters are ignored)_
    * `topBottom` _(optional - when this parameter is set, the parameter top, bottom, left, right are ignored, and the parameter leftRight becomes required)_
    * `leftRight` _(optional - when this parameter is set, the parameter top, bottom, left, right are ignored, and the parameter topBottom becomes required)_
    * `top`  
    * `bottom`
    * `left`
    * `right`


### media queries

Manage your media queries.

```
@include mqMin($breakpointName)

@include mqMax($breakpointName)

@include mqRange($breakpointMinName, $breakpointMaxName)
```

#### mqMin and mqMax

(mqMin = `@media (min-width)`; mqMax = `@media (max-width)`)

**Parameters:**

* `$breakpointName`: key name of the breakpoint from breakpoints map - or a px length

#### mqRange

(mqRange = `@media (min-width) and (min-width)`)

**Parameters:**

* `$breakpointMinName`: key name of the min breakpoint from breakpoints map - or a px length
* `$breakpointMaxName`: key name of the max breakpoint from breakpoints map - or a px length


### outline

Apply outline and outline-offset.

```
@include outline($outlineMap)
```

**Parameters**

* `$outlineMap`
    * `outline`
    * `outlineOffset`


### padding

Set padding

```
@include padding($paddingMap)
```

**Parameters:**

* `$paddingMap`
    * `all` _(optional - when this parameter is set, all other parameters are ignored)_
    * `topBottom` _(optional - when this parameter is set, the parameter top, bottom, left, right are ignored, and the parameter leftRight becomes required)_
    * `leftRight` _(optional - when this parameter is set, the parameter top, bottom, left, right are ignored, and the parameter topBottom becomes required)_
    * `top`  
    * `bottom`
    * `left`
    * `right`

### placeholderColor

Set the color of placeholder text.

```
@include placeholderColor ($color) {
```

**Parameters:**

* `$color`: the color for placeholder text

### sizes

Size an element.

```
@include lengths($sizesMap)
```

**Parameters:**

* `$sizesMap`
    * `height`  
    * `minHeight`
    * `maxHeight`
    * `width`
    * `minWidth`
    * `maxWidth`

### srOnly

Position element off-screen, in order to make the content available only to screen-reader users.

```
@include srOnly
```

**Parameters:**

* No parameters

### text

Style text.

```
@include text($textMap)
```

**Parameters:**

* `$textMap`
    * `color`
    * `textAlign`
    * `textDecoration`
    * `textDecorationColor`
    * `textDecorationLine`
    * `textDecorationStyle`
    * `textIndent`
    * `textTransform`
    * `textShadow`


### typography

Set typographic properties like `line-height` and `letter-spacing`.

```
@include typography($typographyMap)
```

**Parameters:**

* `$typographyMap`
    * `letterSpacing`
    * `lineHeight`
    * `verticalAlign`
    * `wordBeak`
    * `wordSpacing`
    * `wordWrap`


## RESET

The framework includes an extensive and easy to customize CSS reset stylesheet.

## FLEX GRID

A customizable responsive flexbox grid is included in the framework: check the [demo](https://davidetriso.github.io/t-css-framework/flex-grid.html).

### Flex grid settings:

#### Default container(s):

* `$containerClassName`: the class name of the container.
* `$containerMaxWidthsMap`: a sass map (key, value pairs) used to generate containers with different maximum widths. The key is used as the modifier name to generate the container modifier class.

**Output example:**

```css
/* default container */
.container {[...]}

/* modifiers */
.container_mid {[...]}
.container_small {[...]}
.container_large{[...]}
```

#### Boxed container:

* `$boxedContainerModifierName`: the modifier name used to generate boxed container modifier classes.
* `$boxedContainerBreakpointsMap`: a sass map of the breakpoints (key, value pairs) used to generate boxed containers.
* `$boxedContainerSubtractList`: list of lengths in pixel used to calculate the width of the boxed container for each breakpoint in the breakpoints map. The length (number of entries) of the `$boxedContainerSubtractList` should be equal to the length of the `$boxedContainerBreakpointsMap`. The width of a boxed container is calculated by subtracting the length passed in the `$boxedContainerSubtractList` from the corresponding breakpoints length. (By default the first three breakpoints are removed from the `$boxedContainerBreakpointsMap`, because we do not want boxed containers on small screens, instead the container should span the full width of the screen.

The modifier class for the boxed container generated by the framework is `.container_boxed`.

#### Rows:

* `$rowClassName`: the class name of a row
* `$rowAlignItems $rowAlignContent $rowFlexDirection $rowFlexWrap $rowJustifyContent`: css properties of a row.

#### Row modifiers

By default the grid includes two modifiers for `.row`: `row_hcenter` and `.row_vcenter`. These are respectively used to horizontally and vertically align content (columns) in the row.
To generate other types of row modifiers use the mixin `generateRowModifiers([...])`.


#### Columns

* `$columnClassName`: the class name of a column
* `$columnsNumber`: the number of columns, **by default 24**.
* `$columnsBreakpointsMap`:  a sass map (key, value pairs) which contains the breakpoints used to generate the responsive columns classes. The key of each breakpoint is used as the modifier name for the `.col` class.


**Output example:**

```css
.col_1 {[...]}
.col_2 {[...]}
.col_3 {[...]}
[...]
.col_24 {[...]}

@media (max-width: [...]) {
  .col_w1-1 {[...]}
  .col_w1-2 {[...]}
  .col_w1-3 {[...]}
  [...]
  .col_w1-24 {[...]}
}
@media (max-width: [...]) {
  .col_w5-1 {[...]}
  .col_w5-2 {[...]}
  .col_w5-3 {[...]}
  [...]
 .col_w5-24 {[...]}
}
```

#### Columns offset

* `$offsetModifierName`: the modifier name used to generate the offset modifier classes.
* `$offsetColumnsNumber`: the number of modifier classes to generate for each modifier breakpoint, **by default 24**.

#### Columns negative offset

* `$negativeOffsetModifierName`: the modifier name used to generate the negative offset modifier classes.
* `$negativeOffsetColumnsNumber`:  the number of modifier classes to generate for each modifier breakpoint, **by default 24**.


#### Gutters

* `$gutterModifierName`: the modifier name used to generate the gutter modifier classes
* `$guttersBreakpointsMap`: the sass map of the breakpoint at which the responsive gutter should change (by default the framework changes the gutter size only on three breakpoints: w0, w3, w5).
* `$guttersList`: list of lengths in rem of the gutter sizes on each breakpoint.

The same applies for small and large gutter variables.

#### Reset gutters:

* `$resetGutterModifierName`: the modifier name used to generate the responsive classes to reset gutter for specific breakpoints. (The `responsiveGutterReset([...])` mixin generates responsive classes bound between a max and min width, which will reset the gutter for the specific breakpoint. The `$guttersBreakpointsMap` is used for the breakpoints.

**Output example:**

```css
@media (min-width: [...]) and (max-width: [...]) {
  .container_w3-gutter-reset,
  .col_w3-gutter-reset {[...]}

  .row_w3-gutter-reset {[...]}
}
```


### Mixins

All flex-grid classes are generate by highly customisable mixins, which can be used to further extend the grid with classes and modifiers, or generate a completely custom grid from scratch. The mixins are in the directory `src/flex-grid/mixins`.

## SETTINGS


### App settings
* `$breakpoints`: a sass map representing the available breakpoints across the whole framework. (file: settings/breakpoints.scss)
* `$breakpointsRem`: an automatically generated map of the breakpoints converted in rem. (file: settings/breakpoints.scss)
* `$breakpointsMax`: an automatically generated map of breakpoints to use in `(max-width:[...])` media queries. Each breakpoint from  `$breakpoints` is added one px. (file: settings/breakpoints.scss)
* `$breakpointsMaxRem`: same as `$breakpointsRem`, but for the `$breakpointsMax` map. (file: settings/breakpoints.scss)
* `$colorsMap`: a map where the most used colors can be stored. Use the function `color` to get a value from the map. (file: settings/colors.scss)
* `$fontSizesMap`: a map where the most used `font-sizes` across the application can be stored. Use the function `fontSize` to get a value from the map. (file: settings/font-sizes.scss)
* `$sizesMap`: a map where the most used lengths across the application can be stored. Use the function `size` to get a value from the map. (file: settings/sizes.scss)
* `$zIndexMap`: a sass map of `z-index` values, which can be used in combination with the `zIndex` function to manage `z-index` across the whole web application. (file: settings/z-index.scss)


## BEM setting

* `$elementSeparator`: the BEM element separator symbol used to generate BEM classes (default is `__`).
* `$modifierSeparator`: the BEM modifier separator sybol used to generate BEM classes (default is `_`).


## LICENSE

This project is licensed under the terms of the **MIT license**.

See [LICENSE.md](LICENSE.md) for detailed informations.
