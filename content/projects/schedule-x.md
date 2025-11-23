---
title: Schedule-X Contribution
description: Implemented double-click callback functionality for the Schedule-X calendar component.
css_background: "bg-gradient-to-br from-[#6750a4] to-[#21005e]"
css_text: "Schedule-X"
repository_url: https://github.com/schedule-x/schedule-x
hasPage: false
builtWithLibs:
  [
    { name: "TypeScript", site: "https://www.typescriptlang.org/", logo: "logos:typescript-icon" },
    { name: "Vue", site: "https://vuejs.org/", logo: "logos:vue" },
  ]
extraLinks:
  [
    {
      text: "Pull Request #769",
      url: "https://github.com/schedule-x/schedule-x/pull/769",
      icon: "simple-icons:github",
    },
  ]
---

I contributed to the Schedule-X project by implementing `onDoubleClickAgendaDate` and `onDoubleClickEvent` callbacks. These features were missing from the library but were required for our use case. I analyzed the existing codebase to understand how similar callbacks were implemented and replicated the pattern to add this new functionality, enabling developers to handle double-click events on both agenda dates and specific events.
