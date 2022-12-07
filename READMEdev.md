# Code explanation for v0.3

To read the code you need to understand React bases (component, hook, useState, useEffect, props).

## Components

- App.js, root components who redirects to the main page.
- TablePage.js, main components, it reads the CSV files and sends it's data to all components.
- ParametersPart.js, renders the settings and sends them to TablePage.js.
- TablePart.js, receives elements's datas and selected settings, to send it to each "Element.js" (118*).
- Element.js, renders data received, and calculate his color if `gradient` parameter is true.
- Footer.js, only renders credits.

*118 is the number of known element
## Tree
Parents, childs tree

```
App.js
└ TablePage.js
  ├ ParametersPart.js
  ├ TablePart.js
  │ ├ Element.js
  │ ├ Element.js
  │ ├ ...
  │ └ Element.js (118)
  └ Footer.js
```

## TablePage.js

### useState
- otherInfo : keeps the selected info
- language : keeps the selected language
- colors : tells if the gradient is on
- elements : keeps all of the elements's infos
- parameters : keeps the available parameters in the database
- availableLanguages : keeps the available languages
- isLoading : tells if it finished to read the database

### useEffect

- Read the databases and set the following useState :\
elements, parameters, availableLanguage, isLoading

### Render
- ParametersPart with : parameters, availableLanguages, colors, otherInfo, dictionary
- TablePart with : props, colors, otherInfo, dictionary
- Footer with : dictionary

## ParametersPart.js

### useState
- otherParameters : keeps selectable parameters
- activeSettings : an array storing selected settings

### useEffect
- Take the array "parameters" given by TablePage, remove unwanted parameters and set otherParameters

### Render
- Radio buttons that select the wanted information
- A on/off button to activate the gradient setting
- A list of selectable languages

## TablePart.js

### useState
- maximum : stores the maximum value of the selected info
- minimum : stores the minimum value of the selected info
- exempleOtherInfo : stores what's supposed to be render in the exemple element's otherInfo

### useEffect
- Checks each element's selected info to set the minimum to "minimum" and max to "maximum"
- Sets exempleOtherInfo

### Render
- Exemple element
- Columns number
- Element with :
- The holes between the elements 57 to 72, and 89 to 104

## Element.js

### useState
- otherInfoRender : stores the element's selected information
- languageRender : stores the element's selected language

### useEffect
- When the selected info changes :\
The otherInfoRender is set to the wanted one
- When the selected language changes :\
The languageRender is set to the wanted one
- When the grandient is on :\
Calculates the expected color to render with the maximum and minimum from TablePart

### Render
- Atomic number
- Symbol
- Atomic mass
- Element name, changes with the selected language
- Other info, changes with the selected info
- Radioactivity
- Element style, changes with the grandient mod

## Footer.js

### Render
- Credits

## Sass styles

Each files stores styles of the file name's element

### Directory tree :

```
styles
├ _settings.scss
├ index.scss
├ pages
│ └ _tablepage.scss
└ components
  ├ _element.scss
  ├ _infos.scss
  ├ _parameterspart.scss
  └ _tablepart.scss
```