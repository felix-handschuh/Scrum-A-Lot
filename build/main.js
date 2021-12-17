(() => {
  var __defProp = Object.defineProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
  };
  var __export = (target, all) => {
    __markAsModule(target);
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // node_modules/@create-figma-plugin/utilities/lib/events.js
  function on(name, handler) {
    const id = `${currentId}`;
    currentId += 1;
    eventHandlers[id] = { handler, name };
    return function() {
      delete eventHandlers[id];
    };
  }
  function once(name, handler) {
    let done = false;
    return on(name, function(...args) {
      if (done === true) {
        return;
      }
      done = true;
      handler(...args);
    });
  }
  function invokeEventHandler(name, args) {
    for (const id in eventHandlers) {
      if (eventHandlers[id].name === name) {
        eventHandlers[id].handler.apply(null, args);
      }
    }
  }
  var eventHandlers, currentId;
  var init_events = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/events.js"() {
      eventHandlers = {};
      currentId = 0;
      if (typeof window === "undefined") {
        figma.ui.onmessage = function([name, ...args]) {
          invokeEventHandler(name, args);
        };
      } else {
        window.onmessage = function(event) {
          const [name, ...args] = event.data.pluginMessage;
          invokeEventHandler(name, args);
        };
      }
    }
  });

  // node_modules/@create-figma-plugin/utilities/lib/ui.js
  function showUI(options, data) {
    if (typeof __html__ === "undefined") {
      throw new Error("No UI defined");
    }
    const html = `<div id="create-figma-plugin"></div><script>document.body.classList.add('theme-${figma.editorType}');const __FIGMA_COMMAND__='${typeof figma.command === "undefined" ? "" : figma.command}';const __SHOW_UI_DATA__=${JSON.stringify(typeof data === "undefined" ? {} : data)};${__html__}<\/script>`;
    figma.showUI(html, options);
  }
  var init_ui = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/ui.js"() {
    }
  });

  // node_modules/@create-figma-plugin/utilities/lib/index.js
  var init_lib = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/index.js"() {
      init_events();
      init_ui();
    }
  });

  // src/main.tsx
  var main_exports = {};
  __export(main_exports, {
    default: () => main_default
  });
  function main_default() {
    widget.register(Notepad);
  }
  function Notepad() {
    const [userStartedPoll, setUserStartedPoll] = useSyncedState("userStartedPoll", "");
    const [text, setText] = useSyncedState("text", "Description");
    const items = [
      {
        itemType: "action",
        propertyName: "edit",
        tooltip: "Edit"
      }
    ];
    async function onChange({
      propertyName
    }) {
      await new Promise(function(resolve) {
        if (propertyName === "edit") {
          showUI({ width: 240, height: 344 }, { text });
          once("UPDATE_TEXT", function(text2) {
            setText(text2);
            resolve();
          });
        }
      });
    }
    usePropertyMenu(items, onChange);
    return /* @__PURE__ */ figma.widget.h(AutoLayout, {
      direction: "vertical",
      verticalAlignItems: "center",
      padding: 16,
      fill: "#FFFFFF",
      width: "fill-parent",
      cornerRadius: 8,
      spacing: 8,
      effect: {
        type: "drop-shadow",
        color: { r: 0, g: 0, b: 0, a: 0.16 },
        offset: { x: 0, y: 1 },
        blur: 3,
        spread: 0
      }
    }, /* @__PURE__ */ figma.widget.h(Rectangle, {
      height: 32,
      fill: "#F2F4F7",
      cornerRadius: 8,
      width: "fill-parent"
    }), /* @__PURE__ */ figma.widget.h(Rectangle, {
      height: 1,
      fill: "#FFFFFF",
      width: "fill-parent"
    }), /* @__PURE__ */ figma.widget.h(Rectangle, {
      height: 16,
      fill: "#F9FAFB",
      cornerRadius: 8,
      width: "fill-parent"
    }), /* @__PURE__ */ figma.widget.h(Rectangle, {
      height: 16,
      fill: "#F9FAFB",
      cornerRadius: 8,
      width: "fill-parent"
    }), /* @__PURE__ */ figma.widget.h(AutoLayout, {
      direction: "vertical",
      horizontalAlignItems: "start",
      verticalAlignItems: "start"
    }), /* @__PURE__ */ figma.widget.h(AutoLayout, {
      fill: "#C8CCE5",
      cornerRadius: 8,
      padding: { left: 96, right: 96, top: 12, bottom: 12 },
      onClick: () => {
        var user = figma.activeUsers[0].photoUrl;
        console.log(user);
        showUI({ width: 88, height: 44 }, { user });
        return new Promise(() => {
        });
      }
    }, /* @__PURE__ */ figma.widget.h(Text, {
      fontSize: 14,
      fontWeight: "semi-bold",
      horizontalAlignText: "center",
      width: "fill-parent",
      fill: "#000E52"
    }, "Create Story")));
  }
  var widget, AutoLayout, Text, useSyncedState, usePropertyMenu, Rectangle;
  var init_main = __esm({
    "src/main.tsx"() {
      init_lib();
      ({ widget } = figma);
      ({ AutoLayout, Text, useSyncedState, usePropertyMenu, Rectangle } = widget);
    }
  });

  // <stdin>
  var modules = { "src/main.tsx--default": (init_main(), main_exports)["default"] };
  var commandId = true ? "src/main.tsx--default" : figma.command;
  modules[commandId]();
})();
