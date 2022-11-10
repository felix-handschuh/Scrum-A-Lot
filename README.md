# Scrum-A-Lot

👉 Get the widget for [Figma or FigJam](https://www.figma.com/community/widget/1072985192032373399)

🌍 [Scrum-A-Lot](https://scrumalot.team/)

## Development guide

*This widget is built with [Create Figma Plugin](https://yuanqing.github.io/create-figma-plugin/).*

### Pre-requisites

- [Node.js](https://nodejs.org) – v14
- [Figma desktop app](https://figma.com/downloads/)

### Build the widget

To build the widget:

```
$ npm install
$ npm run build
```

This will generate a [`manifest.json`](https://figma.com/widget-docs/manifest/) file and a `build/` directory containing the JavaScript bundle(s) for the widget.

To watch for code changes and rebuild the widget automatically:

```
$ npm run watch
```

### Lint

To format the code run:

```
$ npm run lintFormat
```

## Licence

This project is licensed under the GPLv3.
