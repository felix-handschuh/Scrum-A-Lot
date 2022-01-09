(() => {
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
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

  // src/voting.tsx
  function summaryOfVote(option) {
    if (!isNaN(Number(option))) {
      return `${option} ${option == "1" ? "Point" : "Points"}`;
    } else {
      return option;
    }
  }
  var init_voting = __esm({
    "src/voting.tsx"() {
    }
  });

  // src/votingWidget.tsx
  function VotingResultScreen({
    votingOptions,
    storyName,
    storyDescription,
    votings
  }) {
    return /* @__PURE__ */ figma.widget.h(AutoLayout, {
      direction: "vertical",
      width: "fill-parent"
    }, /* @__PURE__ */ figma.widget.h(Text, {
      fontSize: 14,
      fontWeight: 500,
      fill: "#101828"
    }, storyName), /* @__PURE__ */ figma.widget.h(Spacer, {
      size: 4
    }), /* @__PURE__ */ figma.widget.h(Text, {
      fontSize: 12,
      fontWeight: 400,
      fill: "#101828"
    }, storyDescription), /* @__PURE__ */ figma.widget.h(Spacer, {
      size: 40
    }), /* @__PURE__ */ figma.widget.h(AutoLayout, {
      direction: "vertical",
      width: "fill-parent",
      spacing: 8
    }, /* @__PURE__ */ figma.widget.h(VotingResult, {
      votings
    })), /* @__PURE__ */ figma.widget.h(Spacer, {
      size: 40
    }), /* @__PURE__ */ figma.widget.h(VotingInfo, {
      votings,
      votingOptions
    }));
  }
  function VotingInfo({
    votingOptions,
    votings
  }) {
    const totalVotes = votings.length;
    const avgVotes = (() => {
      switch (votingOptions.kind) {
        case "numeric":
          return "\xF8 " + (Array.from(votings.groupBy((u) => u.votedFor).values()).map((votes) => Number(votes[0].votedFor) * votes.length).reduce((avg, w) => {
            return avg + w;
          }, 0) / totalVotes).toFixed(1) + " Points";
        case "categorical":
          return void 0;
      }
    })();
    return /* @__PURE__ */ figma.widget.h(AutoLayout, {
      direction: "horizontal",
      horizontalAlignItems: "center",
      width: "fill-parent",
      cornerRadius: 8
    }, /* @__PURE__ */ figma.widget.h(AutoLayout, {
      direction: "horizontal",
      verticalAlignItems: "center",
      width: "hug-contents",
      height: 34,
      fill: "#ECFDF3",
      cornerRadius: 8,
      padding: { vertical: 8, horizontal: 16 }
    }, /* @__PURE__ */ figma.widget.h(Text, {
      fontSize: 12,
      fontWeight: 400,
      fill: "#054F31"
    }, `${totalVotes} ${totalVotes == 1 ? "Vote" : "Votes"}`), avgVotes ? [
      /* @__PURE__ */ figma.widget.h(Spacer, {
        size: 10
      }),
      /* @__PURE__ */ figma.widget.h(Frame, {
        height: 18,
        width: 1,
        fill: "#D1FADF"
      }),
      /* @__PURE__ */ figma.widget.h(Spacer, {
        size: 10
      }),
      /* @__PURE__ */ figma.widget.h(Text, {
        fontSize: 12,
        fontWeight: 400,
        fill: "#054F31"
      }, avgVotes)
    ] : void 0));
  }
  function VotingResult({ votings }) {
    const totalVotes = votings.length;
    const voteResults = votings.groupBy((u) => u.votedFor);
    return Array.from(voteResults.entries()).map(([option, userVotes]) => {
      return /* @__PURE__ */ figma.widget.h(AutoLayout, {
        direction: "vertical",
        verticalAlignItems: "center",
        width: 288,
        height: "hug-contents",
        spacing: 8
      }, /* @__PURE__ */ figma.widget.h(AutoLayout, {
        verticalAlignItems: "end",
        spacing: 0,
        width: "fill-parent"
      }, /* @__PURE__ */ figma.widget.h(Text, {
        fontSize: 14,
        fontWeight: 600,
        fill: "#101828"
      }, summaryOfVote(option)), /* @__PURE__ */ figma.widget.h(Frame, {
        height: 1,
        width: "fill-parent"
      }), AvatarSection(userVotes)), /* @__PURE__ */ figma.widget.h(Bar, {
        votes: userVotes.length,
        totalVotes,
        length: 288
      }), /* @__PURE__ */ figma.widget.h(Text, {
        fontSize: 12,
        fontWeight: 400,
        fill: "#101828",
        width: "fill-parent",
        horizontalAlignText: "right"
      }, userVotes.length, " ", userVotes.length == 1 ? "Vote" : "Votes"));
    });
  }
  function AvatarSection(users) {
    const rows = new Array();
    for (let i = 0; i < users.length; i += maxAvatarsPerLine) {
      rows.push(users.slice(i, i + maxAvatarsPerLine));
    }
    return /* @__PURE__ */ figma.widget.h(AutoLayout, {
      direction: "vertical",
      spacing: 8
    }, rows.map((r) => /* @__PURE__ */ figma.widget.h(AutoLayout, {
      direction: "horizontal",
      horizontalAlignItems: "end",
      spacing: 8,
      width: "fill-parent"
    }, r.map((u) => /* @__PURE__ */ figma.widget.h(Avatar, {
      photoUrl: u.userPhotoUrl,
      opacity: 1
    })))));
  }
  function Spacer({ size }) {
    return /* @__PURE__ */ figma.widget.h(Frame, {
      width: size,
      height: size
    });
  }
  function Avatar({
    photoUrl,
    opacity
  }) {
    return /* @__PURE__ */ figma.widget.h(Image, {
      width: 24,
      height: 24,
      src: photoUrl,
      cornerRadius: 24,
      opacity
    });
  }
  function Button({
    text,
    onClick
  }) {
    return /* @__PURE__ */ figma.widget.h(AutoLayout, {
      width: "fill-parent",
      height: 44,
      cornerRadius: 8,
      fill: "#C8CCE5",
      onClick: () => {
        return new Promise(onClick);
      }
    }, /* @__PURE__ */ figma.widget.h(Text, {
      verticalAlignText: "center",
      horizontalAlignText: "center",
      width: "fill-parent",
      lineHeight: 44,
      fontSize: 14,
      fontWeight: 600,
      fill: "#000E52"
    }, text));
  }
  var widget, AutoLayout, Frame, Text, Rectangle, Image, SVG, Ellipse, useSyncedState, useSyncedMap, usePropertyMenu, useEffect, useWidgetId, register, waitForTask, Bar, maxAvatarsPerLine;
  var init_votingWidget = __esm({
    "src/votingWidget.tsx"() {
      init_voting();
      Array.prototype.groupBy = function(fn) {
        return this.reduce((m, value) => {
          var _a;
          const key = fn(value);
          return m.set(key, ((_a = m.get(key)) != null ? _a : []).concat([value]));
        }, new Map());
      };
      Array.prototype.random = function() {
        return this[Math.floor(Math.random() * this.length)];
      };
      ({ widget } = figma);
      ({
        AutoLayout,
        Frame,
        Text,
        Rectangle,
        Image,
        SVG,
        Ellipse,
        useSyncedState,
        useSyncedMap,
        usePropertyMenu,
        useEffect,
        useWidgetId,
        register,
        waitForTask
      } = widget);
      Bar = ({ votes, totalVotes, length }) => /* @__PURE__ */ figma.widget.h(Frame, {
        width: length,
        height: 8,
        cornerRadius: 8
      }, /* @__PURE__ */ figma.widget.h(Rectangle, {
        width: length,
        height: 8,
        fill: "#F9FAFB"
      }), totalVotes > 0 ? /* @__PURE__ */ figma.widget.h(Rectangle, {
        width: votes / totalVotes * length,
        height: 8,
        cornerRadius: 8,
        fill: "#717BBC"
      }) : null);
      maxAvatarsPerLine = 6;
    }
  });

  // src/main.tsx
  var main_exports = {};
  __export(main_exports, {
    default: () => main_default
  });
  function main_default() {
    widget2.register(Scrumalot);
  }
  function Scrumalot() {
    const [uiState, setUiState] = useSyncedState2("votingState", defaultUiState);
    const voteMap = useSyncedMap2("userVote");
    useEffect2(() => {
      if (uiState.votingState == "Revealed") {
        figma.closePlugin();
      }
    });
    const itemReveal = {
      itemType: "action",
      tooltip: "Reveal",
      propertyName: "reveal"
    };
    const itemReset = {
      itemType: "action",
      tooltip: "Reset",
      propertyName: "reset"
    };
    const item = (() => {
      switch (uiState.votingState) {
        case "InProgress":
          return [itemReset, itemReveal];
        case "Revealed":
          return [itemReset];
        default:
          return [];
      }
    })();
    usePropertyMenu2(item, ({ propertyName }) => {
      switch (propertyName) {
        case "reveal":
          if (uiState.votingState == "InProgress") {
            setUiState({
              votingState: "Revealed",
              votingOptions: uiState.votingOptions,
              storyName: uiState.storyName,
              storyDescription: uiState.storyDescription
            });
          }
          break;
        case "reset":
          setUiState(defaultUiState);
          voteMap.keys().forEach((k) => voteMap.delete(k));
          break;
      }
    });
    return /* @__PURE__ */ figma.widget.h(AutoLayout2, {
      direction: "vertical",
      verticalAlignItems: "center",
      fill: "#FFFFFF",
      width: 320,
      cornerRadius: 8,
      effect: {
        type: "drop-shadow",
        color: { r: 0, g: 0, b: 0, a: 0.2 },
        offset: { x: 0, y: 2 },
        blur: 3,
        spread: 2
      },
      padding: { vertical: 16, horizontal: 16 }
    }, (() => {
      switch (uiState.votingState) {
        case "NotStarted":
          return /* @__PURE__ */ figma.widget.h(WelcomeScreen, {
            onClickStart: () => {
              showUI({ width: 240, height: 344 }, { name: "INIT_VOTING_DATA" });
              once("SET_VOTING", (options, storyName, storyDescription) => {
                if (uiState.votingState == "NotStarted") {
                  setUiState({
                    votingState: "InProgress",
                    votingOptions: options,
                    storyName,
                    storyDescription
                  });
                }
                figma.closePlugin();
              });
            }
          });
        case "InProgress":
          return /* @__PURE__ */ figma.widget.h(VoteInProgress, __spreadProps(__spreadValues({}, uiState), {
            votedUserIds: voteMap.values().map((u) => u.userId),
            onClickVote: () => {
              var _a;
              showUI({ width: 240, height: 344 }, {
                name: "VOTING_DATA",
                votingOptions: uiState.votingOptions,
                storyDescription: uiState.storyDescription,
                storyName: uiState.storyName,
                votedFor: (_a = voteMap.get(figma.currentUser.sessionId.toString())) == null ? void 0 : _a.votedFor
              });
              once("SET_VOTE", (votedFor) => {
                if (uiState.votingState == "InProgress") {
                  const currentUser = figma.currentUser;
                  voteMap.set(currentUser.sessionId.toString(), {
                    userId: currentUser.sessionId,
                    userPhotoUrl: currentUser.photoUrl,
                    votedFor
                  });
                  figma.notify(`${summaryOfVote(votedFor)} it is. ${emotionalTexts.random()}`);
                }
                figma.closePlugin();
              });
            }
          }));
        case "Revealed":
          return /* @__PURE__ */ figma.widget.h(VotingResultScreen, {
            votings: voteMap.values(),
            votingOptions: uiState.votingOptions,
            storyName: uiState.storyName,
            storyDescription: uiState.storyDescription
          });
        default:
          return void 0;
      }
    })());
  }
  function WelcomeScreen({
    onClickStart
  }) {
    return /* @__PURE__ */ figma.widget.h(AutoLayout2, {
      direction: "vertical",
      horizontalAlignItems: "center",
      width: "fill-parent"
    }, /* @__PURE__ */ figma.widget.h(Text2, {
      fontSize: 18,
      fontWeight: 600,
      horizontalAlignText: "center",
      fill: "#000000"
    }, "Scrum-A-Lot"), /* @__PURE__ */ figma.widget.h(Spacer, {
      size: 4
    }), /* @__PURE__ */ figma.widget.h(Text2, {
      fontSize: 14,
      fontWeight: 400,
      horizontalAlignText: "center",
      fill: "#667085"
    }, "Start with creating a story and let your"), /* @__PURE__ */ figma.widget.h(Text2, {
      fontSize: 14,
      fontWeight: 400,
      horizontalAlignText: "center",
      fill: "#667085"
    }, "team estimate the effort."), /* @__PURE__ */ figma.widget.h(Spacer, {
      size: 24
    }), /* @__PURE__ */ figma.widget.h(Button, {
      text: "Create Story",
      onClick: onClickStart
    }));
  }
  function VoteInProgress({
    storyName,
    storyDescription,
    votedUserIds,
    onClickVote
  }) {
    const rows = new Array();
    const activeUsers = figma.activeUsers.map((u) => {
      var _a;
      return { photoUrl: (_a = u.photoUrl) != null ? _a : "", hasVoted: votedUserIds.find((id) => id == u.sessionId) ? true : false };
    });
    for (let i = 0; i < activeUsers.length; i += maxAvatarsPerLine2) {
      rows.push(activeUsers.slice(i, i + maxAvatarsPerLine2));
    }
    return /* @__PURE__ */ figma.widget.h(AutoLayout2, {
      direction: "vertical",
      width: "fill-parent"
    }, /* @__PURE__ */ figma.widget.h(Text2, {
      fontSize: 14,
      fontWeight: 500,
      fill: "#101828"
    }, storyName), /* @__PURE__ */ figma.widget.h(Spacer, {
      size: 4
    }), /* @__PURE__ */ figma.widget.h(Text2, {
      fontSize: 12,
      fontWeight: 400,
      fill: "#101828"
    }, storyDescription), /* @__PURE__ */ figma.widget.h(Spacer, {
      size: 40
    }), /* @__PURE__ */ figma.widget.h(AutoLayout2, {
      direction: "vertical",
      horizontalAlignItems: "start",
      width: "fill-parent",
      spacing: 8
    }, rows.map((r) => /* @__PURE__ */ figma.widget.h(AutoLayout2, {
      direction: "horizontal",
      horizontalAlignItems: "start",
      spacing: 8,
      width: "fill-parent"
    }, r.map((u) => /* @__PURE__ */ figma.widget.h(Avatar, {
      photoUrl: u.photoUrl,
      opacity: u.hasVoted ? 1 : 0.3
    }))))), /* @__PURE__ */ figma.widget.h(Spacer, {
      size: 40
    }), /* @__PURE__ */ figma.widget.h(Text2, {
      fontSize: 12,
      fontWeight: 400,
      fill: "#101828"
    }, `${votedUserIds.length} ${votedUserIds.length == 1 ? "Vote" : "Votes"}`), /* @__PURE__ */ figma.widget.h(Spacer, {
      size: 8
    }), /* @__PURE__ */ figma.widget.h(Button, {
      text: "Vote",
      onClick: onClickVote
    }));
  }
  var widget2, AutoLayout2, Frame2, Text2, Rectangle2, Image2, SVG2, Ellipse2, useSyncedState2, useSyncedMap2, usePropertyMenu2, useEffect2, useWidgetId2, register2, waitForTask2, emotionalTexts, defaultUiState, maxAvatarsPerLine2;
  var init_main = __esm({
    "src/main.tsx"() {
      init_lib();
      init_voting();
      init_votingWidget();
      ({ widget: widget2 } = figma);
      ({
        AutoLayout: AutoLayout2,
        Frame: Frame2,
        Text: Text2,
        Rectangle: Rectangle2,
        Image: Image2,
        SVG: SVG2,
        Ellipse: Ellipse2,
        useSyncedState: useSyncedState2,
        useSyncedMap: useSyncedMap2,
        usePropertyMenu: usePropertyMenu2,
        useEffect: useEffect2,
        useWidgetId: useWidgetId2,
        register: register2,
        waitForTask: waitForTask2
      } = widget2);
      emotionalTexts = [
        "Great choice!",
        "Dy-na-mite.",
        "The only possible choice tbh.",
        "Excellent choice, citizen.",
        "\u{1F4AA}\u{1F525}",
        "Sweet decision making, worker."
      ];
      defaultUiState = {
        votingState: "NotStarted"
      };
      maxAvatarsPerLine2 = 6;
    }
  });

  // <stdin>
  var modules = { "src/main.tsx--default": (init_main(), main_exports)["default"] };
  var commandId = true ? "src/main.tsx--default" : figma.command;
  modules[commandId]();
})();
