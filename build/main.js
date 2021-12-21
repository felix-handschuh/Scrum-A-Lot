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

  // src/main.tsx
  var main_exports = {};
  __export(main_exports, {
    default: () => main_default
  });
  function main_default() {
    widget.register(Notepad);
  }
  function Notepad() {
    const [votingState, setVotingState] = useSyncedState("votingState", 0);
    const voteMap = useSyncedMap("userVote");
    useEffect(() => {
      console.log(voteMap.entries());
      console.log(figma.activeUsers);
    });
    const votingItems = fibVoteNumbers.map((nr) => {
      return {
        itemType: "action",
        propertyName: `${nr}`,
        tooltip: `${nr}`
      };
    });
    const items = [
      {
        itemType: "action",
        tooltip: "Vote",
        propertyName: "action"
      },
      {
        itemType: "separator"
      }
    ];
    usePropertyMenu(items.concat(votingItems), ({ propertyName, propertyValue }) => {
      const userId = figma.currentUser.sessionId.toString();
      const vote = {
        vote: parseInt(propertyName),
        user: { id: userId, color: figma.currentUser.color, name: figma.currentUser.name }
      };
      voteMap.set(userId, vote);
    });
    return /* @__PURE__ */ figma.widget.h(AutoLayout, {
      direction: "vertical",
      verticalAlignItems: "center",
      fill: "#FFFFFF",
      width: "hug-contents",
      cornerRadius: 8,
      effect: {
        type: "drop-shadow",
        color: { r: 0, g: 0, b: 0, a: 0.2 },
        offset: { x: 0, y: 2 },
        blur: 3,
        spread: 2
      },
      padding: { vertical: 16, horizontal: 16 }
    }, /* @__PURE__ */ figma.widget.h(AutoLayout, {
      direction: "horizontal",
      verticalAlignItems: "center",
      spacing: 4
    }, /* @__PURE__ */ figma.widget.h(SVG, {
      src: logo
    }), /* @__PURE__ */ figma.widget.h(Text, {
      fontSize: 9,
      fontWeight: "bold",
      horizontalAlignText: "center",
      fill: "#000000"
    }, "Scrumalot")), /* @__PURE__ */ figma.widget.h(Spacer, {
      size: 16
    }), /* @__PURE__ */ figma.widget.h(Text, {
      fontSize: 18,
      fontWeight: "normal",
      horizontalAlignText: "center",
      fill: "#000000"
    }, "Some Story Name"), /* @__PURE__ */ figma.widget.h(Spacer, {
      size: 44
    }), /* @__PURE__ */ figma.widget.h(AutoLayout, {
      direction: "vertical",
      width: "fill-parent",
      spacing: 16
    }, VotingSection(voteMap)), /* @__PURE__ */ figma.widget.h(Spacer, {
      size: 44
    }), /* @__PURE__ */ figma.widget.h(AutoLayout, {
      width: "fill-parent",
      height: 44,
      cornerRadius: 8,
      fill: "#C8CCE5"
    }, /* @__PURE__ */ figma.widget.h(Text, {
      verticalAlignText: "center",
      horizontalAlignText: "center",
      width: "fill-parent",
      lineHeight: 44,
      fontSize: 14,
      fontWeight: 600,
      fill: "#000E52"
    }, buttonText(votingState))));
  }
  function buttonText(votingState) {
    switch (votingState) {
      case 0:
        return "Create Story";
      case 1:
        return "Vote";
      case 2:
        return "Reset";
      default:
        return "";
    }
  }
  function getActiveUserById(id) {
    return figma.activeUsers.find((u) => u.sessionId.toString() == id);
  }
  function VotingSection(voteMap) {
    const totalVotes = voteMap.keys().length;
    let voteResults = voteMap.values().reduce((m, userVote) => {
      var _a;
      const subject = `${userVote.vote} ${userVote.vote == 1 ? "Point" : "Points"}`;
      return m.set(subject, ((_a = m.get(subject)) != null ? _a : []).concat([userVote.user]));
    }, new Map());
    return Array.from(voteResults.entries()).map(([subject, user]) => {
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
        fontWeight: "medium",
        fill: "#000000"
      }, subject), /* @__PURE__ */ figma.widget.h(Frame, {
        height: 1,
        width: "fill-parent"
      }), AvatarSection(user.concat(user).concat(user).concat(user).concat(user).concat(user).concat(user).concat(user).concat(user))), Bar(user.length, totalVotes, 288), /* @__PURE__ */ figma.widget.h(Text, {
        fontSize: 14,
        fontWeight: "medium",
        fill: "#000000",
        width: "fill-parent",
        horizontalAlignText: "right"
      }, user.length, " ", user.length == 1 ? "Vote" : "Votes"));
    });
  }
  function AvatarSection(user) {
    const rows = new Array();
    for (let i = 0; i < user.length; i += maxAvatarsPerLine) {
      rows.push(user.slice(i, i + maxAvatarsPerLine));
    }
    return /* @__PURE__ */ figma.widget.h(AutoLayout, {
      direction: "vertical",
      spacing: 8
    }, rows.map((r) => /* @__PURE__ */ figma.widget.h(AutoLayout, {
      direction: "horizontal",
      horizontalAlignItems: "end",
      spacing: 8,
      width: "fill-parent"
    }, r.map((u) => {
      const activeUser = getActiveUserById(u.id);
      if (activeUser === void 0) {
        return Avatar(u.name, u.color);
      } else {
        return Avatar(activeUser.name, activeUser.color);
      }
    }))));
  }
  function Avatar(name, color, opacity = 0.5) {
    return /* @__PURE__ */ figma.widget.h(AutoLayout, {
      width: 24,
      height: 24,
      opacity,
      fill: color,
      cornerRadius: 24
    }, /* @__PURE__ */ figma.widget.h(Text, {
      verticalAlignText: "center",
      horizontalAlignText: "center",
      width: "fill-parent",
      lineHeight: 24,
      fontSize: 12,
      fontWeight: 400,
      fill: "#FFFFFF"
    }, name[0].toUpperCase()));
  }
  function Bar(votes, totalVotes, length) {
    return /* @__PURE__ */ figma.widget.h(Frame, {
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
  }
  var widget, AutoLayout, Frame, Text, Rectangle, Image, SVG, Ellipse, useSyncedState, useSyncedMap, usePropertyMenu, useEffect, useWidgetId, register, waitForTask, logo, VotingState, fibVoteNumbers, Spacer, maxAvatarsPerLine;
  var init_main = __esm({
    "src/main.tsx"() {
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
      logo = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.5255 6.96593C13.6631 6.43247 14.1912 6.11588 14.7049 6.25882L20.286 7.81174C20.7997 7.95468 21.1046 8.50302 20.9669 9.03648L18.4745 18.6957C18.3369 19.2292 17.8088 19.5458 17.2951 19.4028L11.714 17.8499C11.2003 17.707 10.8954 17.1587 11.0331 16.6252L13.5255 6.96593Z" fill="#4E5BA6"/>
<path d="M8 6C8 5.44772 8.44772 5 9 5H15C15.5523 5 16 5.44772 16 6V16C16 16.5523 15.5523 17 15 17H9C8.44772 17 8 16.5523 8 16V6Z" fill="#C8CCE5"/>
<path d="M3.03432 8.81198C2.89138 8.27852 3.20796 7.73018 3.74143 7.58724L9.53698 6.03432C10.0704 5.89138 10.6188 6.20796 10.7617 6.74143L13.3499 16.4007C13.4929 16.9342 13.1763 17.4825 12.6428 17.6254L6.84726 19.1783C6.31379 19.3213 5.76545 19.0047 5.62251 18.4712L3.03432 8.81198Z" fill="#EAECF5"/>
</svg>`;
      (function(VotingState2) {
        VotingState2[VotingState2["NotStarted"] = 0] = "NotStarted";
        VotingState2[VotingState2["InProgress"] = 1] = "InProgress";
        VotingState2[VotingState2["Revealed"] = 2] = "Revealed";
      })(VotingState || (VotingState = {}));
      fibVoteNumbers = [1, 2, 3, 5, 8, 12];
      Spacer = ({ size }) => /* @__PURE__ */ figma.widget.h(Frame, {
        width: size,
        height: size
      });
      maxAvatarsPerLine = 6;
    }
  });

  // <stdin>
  var modules = { "src/main.tsx--default": (init_main(), main_exports)["default"] };
  var commandId = true ? "src/main.tsx--default" : figma.command;
  modules[commandId]();
})();
