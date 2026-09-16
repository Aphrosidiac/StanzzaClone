(() => {
  var e = {
      9427: function () {
        function e() {
          let e = Webflow.require("ix3");
          e.ready().then(() => {
            let t = e.getInstance();
            t &&
              (t.register(
                [
                  {
                    id: "i-5a9800ee",
                    scope: {
                      type: "component",
                      componentId: "5a5c5c05-71e9-3a1a-ed22-4aef793a7acd",
                    },
                    triggers: [
                      [
                        "wf:scroll",
                        {
                          controlType: "scroll",
                          scrollTriggerConfig: {
                            clamp: !0,
                            start: "top 35%",
                            end: "top 5%",
                            scrub: 0.8,
                            enter: "play",
                            leave: "none",
                            enterBack: "none",
                            leaveBack: "none",
                          },
                        },
                        [
                          "wf:inst",
                          [
                            "5a5c5c05-71e9-3a1a-ed22-4aef793a7acd",
                            "5a5c5c05-71e9-3a1a-ed22-4aef793a7acd",
                          ],
                          { relationship: "none", firstMatchOnly: !1 },
                        ],
                      ],
                    ],
                    timelineIds: ["t-f1d8c072"],
                    deleted: !1,
                  },
                  {
                    id: "i-6155d4d0",
                    scope: {
                      type: "component",
                      componentId: "2d32df46-7f96-4e63-4a6e-eb68515e035d",
                      variants: ["base"],
                    },
                    triggers: [
                      [
                        "wf:scroll",
                        {
                          controlType: "scroll",
                          scrollTriggerConfig: {
                            clamp: !0,
                            start: "top 100%",
                            end: "top -100%",
                            scrub: 0.8,
                            enter: "play",
                            leave: "none",
                            enterBack: "none",
                            leaveBack: "none",
                          },
                        },
                        [
                          "wf:class",
                          ["content_composition-card"],
                          { relationship: "none", firstMatchOnly: !1 },
                        ],
                      ],
                    ],
                    timelineIds: ["t-4681d696"],
                    deleted: !1,
                  },
                  {
                    id: "i-ef482ddd",
                    scope: {
                      type: "component",
                      componentId: "c1083bf7-8d65-e4a6-4ba5-54ff86a6d9e6",
                    },
                    triggers: [
                      [
                        "wf:scroll",
                        {
                          controlType: "scroll",
                          scrollTriggerConfig: {
                            clamp: !0,
                            start: "top 130%",
                            end: "top 130%",
                            scrub: 0.8,
                            enter: "play",
                            leave: "none",
                            enterBack: "none",
                            leaveBack: "none",
                          },
                        },
                        [
                          "wf:class",
                          ["u-image.is-blur"],
                          { relationship: "none", firstMatchOnly: !1 },
                        ],
                      ],
                    ],
                    timelineIds: ["t-73323f65"],
                    deleted: !1,
                  },
                  {
                    id: "i-3790f9a1",
                    scope: {
                      type: "component",
                      componentId: "2d32df46-7f96-4e63-4a6e-eb68515e035d",
                      variants: [
                        "base",
                        "0f5daddb-77e5-ab6d-b531-2b57e1474986",
                      ],
                    },
                    triggers: [
                      [
                        "wf:scroll",
                        {
                          controlType: "scroll",
                          scrollTriggerConfig: {
                            clamp: !0,
                            start: "top 100%",
                            end: "top -100%",
                            scrub: 0.8,
                            enter: "play",
                            leave: "none",
                            enterBack: "none",
                            leaveBack: "none",
                          },
                        },
                        [
                          "wf:class",
                          ["content_composition-card"],
                          { relationship: "none", firstMatchOnly: !1 },
                        ],
                      ],
                    ],
                    timelineIds: ["t-eb8c5596"],
                    deleted: !1,
                  },
                  {
                    id: "i-936a8659",
                    scope: {
                      type: "component",
                      componentId: "12da9841-249e-97ce-ecc8-2662b5036a25",
                    },
                    triggers: [
                      [
                        "wf:scroll",
                        {
                          controlType: "scroll",
                          scrollTriggerConfig: {
                            clamp: !0,
                            start: "top bottom",
                            end: "top 35%",
                            scrub: 0.8,
                            enter: "play",
                            leave: "none",
                            enterBack: "none",
                            leaveBack: "none",
                          },
                        },
                        [
                          "wf:class",
                          ["u-section.is-apart"],
                          { relationship: "none", firstMatchOnly: !1 },
                        ],
                      ],
                    ],
                    timelineIds: ["t-e350b67b"],
                    deleted: !1,
                  },
                  {
                    id: "i-3b9b480c",
                    scope: {
                      type: "pages",
                      value: [
                        "69e1cc2e4bb2c432ebac4f79",
                        "6a66bbb868a1aa809735b123",
                      ],
                    },
                    triggers: [
                      [
                        "wf:scroll",
                        {
                          controlType: "scroll",
                          scrollTriggerConfig: {
                            clamp: !0,
                            start: "top -25%",
                            end: "bottom bottom",
                            scrub: 0.8,
                            enter: "play",
                            leave: "none",
                            enterBack: "none",
                            leaveBack: "none",
                          },
                        },
                        [
                          "wf:class",
                          ["content.is-composition"],
                          { relationship: "none", firstMatchOnly: !1 },
                        ],
                      ],
                    ],
                    timelineIds: ["t-697aa85b"],
                    conditionalPlayback: [
                      {
                        type: "breakpoint",
                        behavior: "dont-animate",
                        breakpoints: ["tiny", "medium", "main"],
                      },
                    ],
                    deleted: !1,
                  },
                  {
                    id: "i-6bcca0b5",
                    scope: {
                      type: "pages",
                      value: [
                        "69e1cc2e4bb2c432ebac4f79",
                        "6a66bbb868a1aa809735b123",
                      ],
                    },
                    triggers: [
                      [
                        "wf:scroll",
                        {
                          controlType: "scroll",
                          scrollTriggerConfig: {
                            clamp: !0,
                            start: "top -35%",
                            end: "bottom bottom",
                            scrub: 0.8,
                            enter: "play",
                            leave: "none",
                            enterBack: "none",
                            leaveBack: "none",
                          },
                        },
                        [
                          "wf:class",
                          ["scroll-container--lvl-2"],
                          { relationship: "none", firstMatchOnly: !1 },
                        ],
                      ],
                    ],
                    timelineIds: ["t-a74d48d7"],
                    conditionalPlayback: [
                      {
                        type: "breakpoint",
                        behavior: "dont-animate",
                        breakpoints: ["main", "small", "tiny"],
                      },
                    ],
                    deleted: !1,
                  },
                  {
                    id: "i-937f2d72",
                    scope: {
                      type: "pages",
                      value: [
                        "69e1cc2e4bb2c432ebac4f79",
                        "6a66bbb868a1aa809735b123",
                      ],
                    },
                    triggers: [
                      [
                        "wf:scroll",
                        {
                          controlType: "scroll",
                          scrollTriggerConfig: {
                            clamp: !0,
                            start: "top 0%",
                            end: "bottom bottom",
                            scrub: 0.8,
                            enter: "play",
                            leave: "none",
                            enterBack: "none",
                            leaveBack: "none",
                          },
                        },
                        [
                          "wf:class",
                          ["u-section.is-approach"],
                          { relationship: "none", firstMatchOnly: !1 },
                        ],
                      ],
                    ],
                    timelineIds: ["t-3eaa401d"],
                    conditionalPlayback: [
                      {
                        type: "breakpoint",
                        behavior: "dont-animate",
                        breakpoints: ["small", "tiny"],
                      },
                    ],
                    deleted: !1,
                  },
                  {
                    id: "i-98b4f562",
                    scope: {
                      type: "pages",
                      value: [
                        "69e1cc2e4bb2c432ebac4f79",
                        "6a66bbb868a1aa809735b123",
                      ],
                    },
                    triggers: [
                      [
                        "wf:scroll",
                        {
                          controlType: "scroll",
                          scrollTriggerConfig: {
                            clamp: !0,
                            start: "top -35%",
                            end: "bottom bottom",
                            scrub: 0.8,
                            enter: "play",
                            leave: "none",
                            enterBack: "none",
                            leaveBack: "none",
                          },
                        },
                        [
                          "wf:class",
                          ["scroll-container--lvl-2"],
                          { relationship: "none", firstMatchOnly: !1 },
                        ],
                      ],
                    ],
                    timelineIds: ["t-60cb743c"],
                    conditionalPlayback: [
                      {
                        type: "breakpoint",
                        behavior: "dont-animate",
                        breakpoints: ["main", "medium", "tiny"],
                      },
                    ],
                    deleted: !1,
                  },
                  {
                    id: "i-b7ec2c07",
                    scope: {
                      type: "pages",
                      value: [
                        "69e1cc2e4bb2c432ebac4f79",
                        "6a66bbb868a1aa809735b123",
                      ],
                    },
                    triggers: [
                      [
                        "wf:scroll",
                        {
                          controlType: "scroll",
                          scrollTriggerConfig: {
                            clamp: !0,
                            start: "top 0%",
                            end: "bottom bottom",
                            scrub: 0.8,
                            enter: "play",
                            leave: "none",
                            enterBack: "none",
                            leaveBack: "none",
                          },
                        },
                        [
                          "wf:class",
                          ["u-section.is-approach"],
                          { relationship: "none", firstMatchOnly: !1 },
                        ],
                      ],
                    ],
                    timelineIds: ["t-1d33ed5c"],
                    conditionalPlayback: [
                      {
                        type: "breakpoint",
                        behavior: "dont-animate",
                        breakpoints: ["medium", "main"],
                      },
                    ],
                    deleted: !1,
                  },
                  {
                    id: "i-da603f06",
                    scope: {
                      type: "pages",
                      value: [
                        "69e1cc2e4bb2c432ebac4f79",
                        "6a66bbb868a1aa809735b123",
                      ],
                    },
                    triggers: [
                      [
                        "wf:scroll",
                        {
                          controlType: "scroll",
                          scrollTriggerConfig: {
                            clamp: !0,
                            start: "top -25%",
                            end: "bottom bottom",
                            scrub: 0.8,
                            enter: "play",
                            leave: "none",
                            enterBack: "none",
                            leaveBack: "none",
                          },
                        },
                        [
                          "wf:class",
                          ["content.is-composition"],
                          { relationship: "none", firstMatchOnly: !1 },
                        ],
                      ],
                    ],
                    timelineIds: ["t-4df82a7a"],
                    conditionalPlayback: [
                      {
                        type: "breakpoint",
                        behavior: "dont-animate",
                        breakpoints: ["medium", "main", "small"],
                      },
                    ],
                    deleted: !1,
                  },
                  {
                    id: "i-e6ffc0ab",
                    scope: {
                      type: "pages",
                      value: [
                        "69e1cc2e4bb2c432ebac4f79",
                        "6a66bbb868a1aa809735b123",
                      ],
                    },
                    triggers: [
                      [
                        "wf:scroll",
                        {
                          controlType: "scroll",
                          scrollTriggerConfig: {
                            clamp: !0,
                            start: "top -35%",
                            end: "bottom bottom",
                            scrub: 0.8,
                            enter: "play",
                            leave: "none",
                            enterBack: "none",
                            leaveBack: "none",
                          },
                        },
                        [
                          "wf:class",
                          ["scroll-container--lvl-2"],
                          { relationship: "none", firstMatchOnly: !1 },
                        ],
                      ],
                    ],
                    timelineIds: ["t-99ff137c"],
                    conditionalPlayback: [
                      {
                        type: "breakpoint",
                        behavior: "dont-animate",
                        breakpoints: ["main", "medium", "small"],
                      },
                    ],
                    deleted: !1,
                  },
                  {
                    id: "i-fd602d16",
                    scope: {
                      type: "pages",
                      value: [
                        "69e1cc2e4bb2c432ebac4f79",
                        "6a66bbb868a1aa809735b123",
                      ],
                    },
                    triggers: [
                      [
                        "wf:scroll",
                        {
                          controlType: "scroll",
                          scrollTriggerConfig: {
                            clamp: !0,
                            start: "top -20%",
                            end: "bottom bottom",
                            scrub: 0.8,
                            enter: "play",
                            leave: "pause",
                            enterBack: "reverse",
                            leaveBack: "none",
                          },
                        },
                        [
                          "wf:class",
                          ["scroll-container--lvl-2"],
                          { relationship: "none", firstMatchOnly: !1 },
                        ],
                      ],
                    ],
                    timelineIds: ["t-11a88164"],
                    conditionalPlayback: [
                      {
                        type: "prefers-reduced-motion",
                        behavior: "dont-animate",
                        breakpoints: [],
                      },
                    ],
                    deleted: !1,
                  },
                  {
                    id: "i-bd1f3f85",
                    scope: {
                      type: "pages",
                      value: ["6a66bbb868a1aa809735b123"],
                    },
                    triggers: [
                      [
                        "wf:scroll",
                        {
                          controlType: "scroll",
                          scrollTriggerConfig: {
                            clamp: !0,
                            start: "top bottom",
                            end: "bottom bottom",
                            scrub: 0.8,
                            enter: "play",
                            leave: "none",
                            enterBack: "none",
                            leaveBack: "none",
                          },
                        },
                        [
                          "wf:class",
                          ["u-section.is-hero"],
                          { relationship: "none", firstMatchOnly: !1 },
                        ],
                      ],
                    ],
                    timelineIds: ["t-1f673ca0"],
                    deleted: !1,
                  },
                  {
                    id: "i-b9382e55",
                    scope: {
                      type: "pages",
                      value: ["6a66bbb868a1aa809735b123"],
                    },
                    triggers: [
                      [
                        "wf:scroll",
                        {
                          controlType: "scroll",
                          scrollTriggerConfig: {
                            clamp: !0,
                            start: "top -30%",
                            end: "bottom bottom",
                            scrub: 1,
                            enter: "play",
                            leave: "none",
                            enterBack: "none",
                            leaveBack: "none",
                          },
                        },
                        [
                          "wf:class",
                          ["u-section.is-approach"],
                          { relationship: "none", firstMatchOnly: !1 },
                        ],
                      ],
                    ],
                    timelineIds: ["t-5602d11d"],
                    conditionalPlayback: [
                      {
                        type: "breakpoint",
                        behavior: "dont-animate",
                        breakpoints: ["small", "tiny"],
                      },
                    ],
                    deleted: !1,
                  },
                  {
                    id: "i-a0ab4441",
                    scope: {
                      type: "pages",
                      value: ["6a66bbb868a1aa809735b123"],
                    },
                    triggers: [
                      [
                        "wf:scroll",
                        {
                          controlType: "scroll",
                          scrollTriggerConfig: {
                            clamp: !0,
                            start: "top bottom",
                            end: "top 60",
                            scrub: 0.8,
                            enter: "play",
                            leave: "none",
                            enterBack: "none",
                            leaveBack: "none",
                          },
                        },
                        [
                          "wf:class",
                          ["u-section.is-composition-awards"],
                          { relationship: "none", firstMatchOnly: !1 },
                        ],
                      ],
                    ],
                    timelineIds: ["t-ba9ecb22"],
                    deleted: !1,
                  },
                  {
                    id: "i-8b6d923f",
                    scope: {
                      type: "pages",
                      value: ["6a66bbb868a1aa809735b123"],
                    },
                    triggers: [
                      [
                        "wf:scroll",
                        {
                          controlType: "scroll",
                          scrollTriggerConfig: {
                            clamp: !0,
                            start: "top top",
                            end: "bottom bottom",
                            scrub: null,
                            enter: "play",
                            leave: "reverse",
                            enterBack: "play",
                            leaveBack: "reverse",
                          },
                        },
                        [
                          "wf:inst",
                          [
                            "6a66bbb868a1aa809735b123",
                            "732dae92-809a-58ff-c22d-7c2100212911",
                          ],
                          { relationship: "none", firstMatchOnly: !1 },
                        ],
                      ],
                    ],
                    timelineIds: ["t-43a7bb65"],
                    deleted: !1,
                  },
                  {
                    id: "i-f0a18158",
                    scope: {
                      type: "pages",
                      value: ["6a66bbb868a1aa809735b123"],
                    },
                    triggers: [
                      [
                        "wf:scroll",
                        {
                          controlType: "scroll",
                          scrollTriggerConfig: {
                            clamp: !0,
                            start: "top -30%",
                            end: "bottom bottom",
                            scrub: 1,
                            enter: "play",
                            leave: "none",
                            enterBack: "none",
                            leaveBack: "none",
                          },
                        },
                        [
                          "wf:class",
                          ["u-section.is-approach"],
                          { relationship: "none", firstMatchOnly: !1 },
                        ],
                      ],
                    ],
                    timelineIds: ["t-33e68ed3"],
                    conditionalPlayback: [
                      {
                        type: "breakpoint",
                        behavior: "dont-animate",
                        breakpoints: ["medium", "main"],
                      },
                    ],
                    deleted: !1,
                  },
                ],
                [
                  {
                    id: "t-f1d8c072",
                    deleted: !1,
                    actions: [
                      {
                        id: "ta-24255fec",
                        targets: [
                          [
                            "wf:inst",
                            [
                              "5a5c5c05-71e9-3a1a-ed22-4aef793a7acd",
                              "0ccd53c8-4b78-4f03-1c55-33e4140b3b44",
                            ],
                            { relationship: "none", firstMatchOnly: !1 },
                          ],
                        ],
                        timing: { ease: 5 },
                        properties: {
                          "wf:transform": { opacity: [null, "0%"] },
                        },
                      },
                    ],
                  },
                  {
                    id: "t-4681d696",
                    deleted: !1,
                    actions: [
                      {
                        id: "ta-ff366d57",
                        targets: [
                          [
                            "wf:class",
                            ["content_composition-card-image"],
                            { relationship: "none", firstMatchOnly: !1 },
                          ],
                        ],
                        timing: { duration: 3, position: 0, ease: 5 },
                        properties: { "wf:transform": { y: [null, "-12%"] } },
                      },
                    ],
                  },
                  {
                    id: "t-73323f65",
                    deleted: !1,
                    actions: [
                      {
                        id: "ta-41df96dc",
                        targets: [
                          [
                            "wf:trigger-only",
                            "",
                            { relationship: "none", firstMatchOnly: !1 },
                          ],
                        ],
                        timing: { duration: 0, ease: 0 },
                        tt: 3,
                        properties: {
                          "wf:class": {
                            class: {
                              selectors: ["is-blur"],
                              operation: "removeClass",
                            },
                          },
                          "wf:transform": {},
                        },
                      },
                    ],
                  },
                  {
                    id: "t-eb8c5596",
                    deleted: !1,
                    actions: [
                      {
                        id: "ta-7c21a6ae",
                        targets: [
                          [
                            "wf:class",
                            ["content_composition-card-image"],
                            { relationship: "none", firstMatchOnly: !1 },
                          ],
                        ],
                        timing: { duration: 3, position: 0, ease: 5 },
                        properties: { "wf:transform": { y: [null, "-24%"] } },
                      },
                    ],
                  },
                  {
                    id: "t-e350b67b",
                    deleted: !1,
                    actions: [
                      {
                        id: "ta-4137608a",
                        targets: [
                          [
                            "wf:inst",
                            [
                              "12da9841-249e-97ce-ecc8-2662b5036a25",
                              "2e41c0d4-f526-132a-76b1-4d374f6eb4a3",
                            ],
                            { relationship: "none", firstMatchOnly: !1 },
                          ],
                        ],
                        timing: { duration: 1, position: 0, ease: 5 },
                        tt: 2,
                        properties: {
                          "wf:transform": { height: ["65svh", "0svh"] },
                        },
                      },
                      {
                        id: "ta-926b91d7",
                        targets: [
                          [
                            "wf:inst",
                            [
                              "12da9841-249e-97ce-ecc8-2662b5036a25",
                              "2e41c0d4-f526-132a-76b1-4d374f6eb4a4",
                            ],
                            { relationship: "none", firstMatchOnly: !1 },
                          ],
                        ],
                        timing: { duration: 1, position: 0, ease: 5 },
                        tt: 2,
                        properties: {
                          "wf:transform": { height: ["25svh", "0svh"] },
                        },
                      },
                    ],
                    canvasDuration: 1,
                  },
                  {
                    id: "t-697aa85b",
                    deleted: !1,
                    actions: [
                      {
                        id: "ta-61df3bbd",
                        targets: [
                          [
                            "wf:class",
                            ["content_composition_back"],
                            { relationship: "none", firstMatchOnly: !1 },
                          ],
                        ],
                        timing: { ease: 0 },
                        properties: {
                          "wf:transform": { x: [null, "-145.5vw"] },
                        },
                      },
                    ],
                  },
                  {
                    id: "t-a74d48d7",
                    deleted: !1,
                    actions: [
                      {
                        id: "ta-7d442042",
                        targets: [
                          [
                            "wf:class",
                            ["card_about-flex"],
                            { relationship: "none", firstMatchOnly: !1 },
                          ],
                        ],
                        timing: { position: 0, ease: 0 },
                        properties: { "wf:transform": { x: [null, "-56vw"] } },
                      },
                    ],
                  },
                  {
                    id: "t-3eaa401d",
                    deleted: !1,
                    actions: [
                      {
                        id: "ta-a7da4bcf",
                        targets: [
                          [
                            "wf:inst",
                            [
                              "69e1cc2e4bb2c432ebac4f79",
                              "caf1864f-8c60-59a2-fcac-fdb0bbbb73f0",
                            ],
                            { relationship: "none", firstMatchOnly: !1 },
                          ],
                        ],
                        timing: { duration: 3, position: 0, ease: 0 },
                        properties: {
                          "wf:transform": {
                            x: [null, "-100%"],
                            y: [null, "-100%"],
                          },
                        },
                      },
                      {
                        id: "ta-0bb70a8b",
                        targets: [
                          [
                            "wf:inst",
                            [
                              "69e1cc2e4bb2c432ebac4f79",
                              "fcb05787-2baf-75c7-e47c-682b42e2eb1b",
                            ],
                            { relationship: "none", firstMatchOnly: !1 },
                          ],
                        ],
                        timing: { duration: 3, position: 0, ease: 0 },
                        properties: {
                          "wf:transform": {
                            x: [null, "50%"],
                            y: [null, "50%"],
                          },
                        },
                      },
                    ],
                  },
                  {
                    id: "t-60cb743c",
                    deleted: !1,
                    actions: [
                      {
                        id: "ta-8e74060b",
                        targets: [
                          [
                            "wf:class",
                            ["card_about-flex"],
                            { relationship: "none", firstMatchOnly: !1 },
                          ],
                        ],
                        timing: { ease: 0 },
                        properties: {
                          "wf:transform": { x: [null, "-95.5vw"] },
                        },
                      },
                    ],
                  },
                  {
                    id: "t-1d33ed5c",
                    deleted: !1,
                    actions: [
                      {
                        id: "ta-61b80695",
                        targets: [
                          [
                            "wf:inst",
                            [
                              "69e1cc2e4bb2c432ebac4f79",
                              "caf1864f-8c60-59a2-fcac-fdb0bbbb73f0",
                            ],
                            { relationship: "none", firstMatchOnly: !1 },
                          ],
                        ],
                        timing: { position: 0, ease: 0 },
                        properties: { "wf:transform": { x: [null, "-80%"] } },
                      },
                      {
                        id: "ta-45c505c8",
                        targets: [
                          [
                            "wf:inst",
                            [
                              "69e1cc2e4bb2c432ebac4f79",
                              "fcb05787-2baf-75c7-e47c-682b42e2eb1b",
                            ],
                            { relationship: "none", firstMatchOnly: !1 },
                          ],
                        ],
                        timing: { position: 0, ease: 0 },
                        properties: { "wf:transform": { x: [null, "80%"] } },
                      },
                    ],
                  },
                  {
                    id: "t-4df82a7a",
                    deleted: !1,
                    actions: [
                      {
                        id: "ta-8d29a126",
                        targets: [
                          [
                            "wf:class",
                            ["content_composition_back"],
                            { relationship: "none", firstMatchOnly: !1 },
                          ],
                        ],
                        timing: { ease: 0 },
                        properties: { "wf:transform": { x: [null, "-290vw"] } },
                      },
                    ],
                  },
                  {
                    id: "t-99ff137c",
                    deleted: !1,
                    actions: [
                      {
                        id: "ta-013b0b2a",
                        targets: [
                          [
                            "wf:class",
                            ["card_about-flex"],
                            { relationship: "none", firstMatchOnly: !1 },
                          ],
                        ],
                        timing: { ease: 0 },
                        properties: {
                          "wf:transform": { x: [null, "-214.25vw"] },
                        },
                      },
                    ],
                  },
                  {
                    id: "t-11a88164",
                    deleted: !1,
                    actions: [
                      {
                        id: "ta-84bdf6c2",
                        targets: [
                          [
                            "wf:attribute",
                            '[card-about-overlay="1"]',
                            { relationship: "none", firstMatchOnly: !1 },
                          ],
                        ],
                        timing: { duration: 1, position: 0, ease: 5 },
                        properties: {
                          "wf:transform": { opacity: [null, "0%"] },
                        },
                      },
                      {
                        id: "ta-fe74f4c5",
                        targets: [
                          [
                            "wf:attribute",
                            '[card-about-text="1"]',
                            {
                              relationship: "within",
                              filterBy: ["wf:trigger-only", ""],
                              firstMatchOnly: !1,
                            },
                          ],
                        ],
                        timing: { duration: 1, position: 0, ease: 5 },
                        properties: {
                          "wf:transform": {},
                          "wf:style": {
                            color: [null, "var(--_color---whitness)"],
                          },
                        },
                      },
                      {
                        id: "ta-1e35ddfc",
                        targets: [
                          [
                            "wf:attribute",
                            '[card-about-overlay="1"]',
                            {
                              relationship: "within",
                              filterBy: ["wf:trigger-only", ""],
                              firstMatchOnly: !1,
                            },
                          ],
                        ],
                        timing: { duration: 1, position: 1, ease: 5 },
                        properties: {
                          "wf:transform": { opacity: [null, "100%"] },
                        },
                      },
                      {
                        id: "ta-f9e8a501",
                        targets: [
                          [
                            "wf:attribute",
                            '[card-about-text="1"]',
                            {
                              relationship: "within",
                              filterBy: ["wf:trigger-only", ""],
                              firstMatchOnly: !1,
                            },
                          ],
                        ],
                        timing: { duration: 1, position: 1, ease: 5 },
                        properties: {
                          "wf:transform": {},
                          "wf:style": {
                            color: [null, "var(--_color---about-card-default)"],
                          },
                        },
                      },
                      {
                        id: "ta-23854464",
                        targets: [
                          [
                            "wf:attribute",
                            '[card-about-overlay="2"]',
                            { relationship: "none", firstMatchOnly: !1 },
                          ],
                        ],
                        timing: { duration: 1, position: 1, ease: 5 },
                        properties: {
                          "wf:transform": { opacity: [null, "0%"] },
                        },
                      },
                      {
                        id: "ta-9c547c9b",
                        targets: [
                          [
                            "wf:attribute",
                            '[card-about-text="2"]',
                            {
                              relationship: "within",
                              filterBy: ["wf:trigger-only", ""],
                              firstMatchOnly: !1,
                            },
                          ],
                        ],
                        timing: { duration: 1, position: 1, ease: 5 },
                        properties: {
                          "wf:transform": {},
                          "wf:style": {
                            color: [null, "var(--_color---whitness)"],
                          },
                        },
                      },
                      {
                        id: "ta-b5120758",
                        targets: [
                          [
                            "wf:attribute",
                            '[card-about-overlay="2"]',
                            {
                              relationship: "within",
                              filterBy: ["wf:trigger-only", ""],
                              firstMatchOnly: !1,
                            },
                          ],
                        ],
                        timing: { duration: 1, position: 2, ease: 5 },
                        properties: {
                          "wf:transform": { opacity: [null, "100%"] },
                        },
                      },
                      {
                        id: "ta-a9155aa9",
                        targets: [
                          [
                            "wf:attribute",
                            '[card-about-text="2"]',
                            {
                              relationship: "within",
                              filterBy: ["wf:trigger-only", ""],
                              firstMatchOnly: !1,
                            },
                          ],
                        ],
                        timing: { duration: 1, position: 2, ease: 5 },
                        properties: {
                          "wf:transform": {},
                          "wf:style": {
                            color: [null, "var(--_color---about-card-default)"],
                          },
                        },
                      },
                      {
                        id: "ta-1389ec6f",
                        targets: [
                          [
                            "wf:attribute",
                            '[card-about-overlay="3"]',
                            { relationship: "none", firstMatchOnly: !1 },
                          ],
                        ],
                        timing: { duration: 1, position: 2, ease: 5 },
                        properties: {
                          "wf:transform": { opacity: [null, "0%"] },
                        },
                      },
                      {
                        id: "ta-f49c01ab",
                        targets: [
                          [
                            "wf:attribute",
                            '[card-about-text="3"]',
                            {
                              relationship: "within",
                              filterBy: ["wf:trigger-only", ""],
                              firstMatchOnly: !1,
                            },
                          ],
                        ],
                        timing: { duration: 1, position: 2, ease: 5 },
                        properties: {
                          "wf:transform": {},
                          "wf:style": {
                            color: [null, "var(--_color---whitness)"],
                          },
                        },
                      },
                      {
                        id: "ta-d8fbd94c",
                        targets: [
                          [
                            "wf:attribute",
                            '[card-about-overlay="3"]',
                            {
                              relationship: "within",
                              filterBy: ["wf:trigger-only", ""],
                              firstMatchOnly: !1,
                            },
                          ],
                        ],
                        timing: { duration: 1, position: 3, ease: 5 },
                        properties: {
                          "wf:transform": { opacity: [null, "100%"] },
                        },
                      },
                      {
                        id: "ta-9ebdceec",
                        targets: [
                          [
                            "wf:attribute",
                            '[card-about-text="3"]',
                            {
                              relationship: "within",
                              filterBy: ["wf:trigger-only", ""],
                              firstMatchOnly: !1,
                            },
                          ],
                        ],
                        timing: { duration: 1, position: 3, ease: 5 },
                        properties: {
                          "wf:transform": {},
                          "wf:style": {
                            color: [null, "var(--_color---about-card-default)"],
                          },
                        },
                      },
                      {
                        id: "ta-c6faa3ff",
                        targets: [
                          [
                            "wf:attribute",
                            '[card-about-overlay="4"]',
                            { relationship: "none", firstMatchOnly: !1 },
                          ],
                        ],
                        timing: { duration: 1, position: 3, ease: 5 },
                        properties: {
                          "wf:transform": { opacity: [null, "0%"] },
                        },
                      },
                      {
                        id: "ta-f06fd7ce",
                        targets: [
                          [
                            "wf:attribute",
                            '[card-about-text="4"]',
                            {
                              relationship: "within",
                              filterBy: ["wf:trigger-only", ""],
                              firstMatchOnly: !1,
                            },
                          ],
                        ],
                        timing: { duration: 1, position: 3, ease: 5 },
                        properties: {
                          "wf:transform": {},
                          "wf:style": {
                            color: [null, "var(--_color---whitness)"],
                          },
                        },
                      },
                    ],
                  },
                  {
                    id: "t-1f673ca0",
                    deleted: !1,
                    actions: [
                      {
                        id: "ta-1c2ec894",
                        targets: [
                          [
                            "wf:inst",
                            [
                              "6a66bbb868a1aa809735b123",
                              "81247fb4-a188-365e-48e9-ac628e208005",
                            ],
                            { relationship: "none", firstMatchOnly: !1 },
                          ],
                        ],
                        timing: { duration: 1, position: 0, ease: 5 },
                        properties: { "wf:transform": { y: [null, "-20%"] } },
                      },
                    ],
                    canvasDuration: 1,
                  },
                  {
                    id: "t-5602d11d",
                    deleted: !1,
                    actions: [
                      {
                        id: "ta-8f6a88ce",
                        targets: [
                          [
                            "wf:class",
                            ["content_approach-scroll"],
                            { relationship: "none", firstMatchOnly: !1 },
                          ],
                        ],
                        timing: { duration: 1, position: 0, ease: 0 },
                        tt: 2,
                        properties: {
                          "wf:transform": {
                            x: ["-120svh", "-80svh"],
                            y: ["50%", "0%"],
                            scale: [0, 1],
                          },
                        },
                      },
                      {
                        id: "ta-f560f6c9",
                        targets: [
                          [
                            "wf:class",
                            ["content_approach-scroll"],
                            { relationship: "none", firstMatchOnly: !1 },
                          ],
                        ],
                        timing: { duration: 3, position: 1, ease: 0 },
                        tt: 2,
                        properties: {
                          "wf:transform": { x: ["-80svh", "-260svh"] },
                        },
                      },
                      {
                        id: "ta-3c0e47db",
                        targets: [
                          [
                            "wf:attribute",
                            '[data-scroll-delievery="head-1"]',
                            { relationship: "none", firstMatchOnly: !1 },
                          ],
                        ],
                        timing: {
                          duration: 0.38,
                          position: 0.72,
                          stagger: { amount: 0.375 },
                          ease: 5,
                        },
                        tt: 2,
                        properties: {
                          "wf:transform": {
                            opacity: ["0%", "100%"],
                            x: ["-5%", "0%"],
                          },
                        },
                        splitText: { type: "chars" },
                      },
                      {
                        id: "ta-94c980b4",
                        targets: [
                          [
                            "wf:attribute",
                            '[data-scroll-delievery="text-1"]',
                            { relationship: "none", firstMatchOnly: !1 },
                          ],
                        ],
                        timing: {
                          duration: 0.38,
                          position: 0.72,
                          stagger: { amount: 0.375 },
                          ease: 5,
                        },
                        tt: 2,
                        properties: {
                          "wf:transform": {
                            opacity: ["0%", "100%"],
                            x: ["-5%", "0%"],
                          },
                        },
                        splitText: { type: "words" },
                      },
                      {
                        id: "ta-be57253a",
                        targets: [
                          [
                            "wf:attribute",
                            '[data-scroll-delievery="tag-1"]',
                            { relationship: "none", firstMatchOnly: !1 },
                          ],
                        ],
                        timing: { duration: 0.58, position: 0.72, ease: 5 },
                        tt: 2,
                        properties: {
                          "wf:transform": {
                            opacity: ["0%", "100%"],
                            y: ["10%", "0%"],
                          },
                        },
                      },
                      {
                        id: "ta-db48eb56",
                        targets: [
                          [
                            "wf:attribute",
                            '[data-scroll-delievery="image-1"]',
                            { relationship: "none", firstMatchOnly: !1 },
                          ],
                        ],
                        timing: { duration: 0.65, position: 0.72, ease: 5 },
                        tt: 2,
                        properties: {
                          "wf:transform": { width: ["0%", "100%"] },
                        },
                      },
                      {
                        id: "ta-4052de8c",
                        targets: [
                          [
                            "wf:attribute",
                            '[data-scroll-delievery="head-2"]',
                            { relationship: "none", firstMatchOnly: !1 },
                          ],
                        ],
                        timing: {
                          duration: 0.38,
                          position: 1.6,
                          stagger: { amount: 0.375 },
                          ease: 5,
                        },
                        tt: 2,
                        properties: {
                          "wf:transform": {
                            opacity: ["0%", "100%"],
                            x: ["-5%", "0%"],
                          },
                        },
                        splitText: { type: "chars" },
                      },
                      {
                        id: "ta-db6680ef",
                        targets: [
                          [
                            "wf:attribute",
                            '[data-scroll-delievery="text-2"]',
                            { relationship: "none", firstMatchOnly: !1 },
                          ],
                        ],
                        timing: {
                          duration: 0.38,
                          position: 1.6,
                          stagger: { amount: 0.375 },
                          ease: 5,
                        },
                        tt: 2,
                        properties: {
                          "wf:transform": {
                            opacity: ["0%", "100%"],
                            x: ["-5%", "0%"],
                          },
                        },
                        splitText: { type: "words" },
                      },
                      {
                        id: "ta-e89c8451",
                        targets: [
                          [
                            "wf:attribute",
                            '[data-scroll-delievery="tag-2"]',
                            { relationship: "none", firstMatchOnly: !1 },
                          ],
                        ],
                        timing: { duration: 0.58, position: 1.6, ease: 5 },
                        tt: 2,
                        properties: {
                          "wf:transform": {
                            opacity: ["0%", "100%"],
                            y: ["10%", "0%"],
                          },
                        },
                      },
                      {
                        id: "ta-ab0ecc49",
                        targets: [
                          [
                            "wf:attribute",
                            '[data-scroll-delievery="image-2"]',
                            { relationship: "none", firstMatchOnly: !1 },
                          ],
                        ],
                        timing: { duration: 0.65, position: 1.67, ease: 5 },
                        tt: 2,
                        properties: {
                          "wf:transform": { width: ["0%", "100%"] },
                        },
                      },
                      {
                        id: "ta-6251f105",
                        targets: [
                          [
                            "wf:attribute",
                            '[data-scroll-delievery="image-3"]',
                            { relationship: "none", firstMatchOnly: !1 },
                          ],
                        ],
                        timing: { duration: 0.65, position: 1.71, ease: 5 },
                        tt: 2,
                        properties: {
                          "wf:transform": { width: ["0%", "100%"] },
                        },
                      },
                      {
                        id: "ta-04c3f5d6",
                        targets: [
                          [
                            "wf:attribute",
                            '[data-scroll-delievery="image-4"]',
                            { relationship: "none", firstMatchOnly: !1 },
                          ],
                        ],
                        timing: { duration: 0.65, position: 1.75, ease: 5 },
                        tt: 2,
                        properties: {
                          "wf:transform": { width: ["0%", "100%"] },
                        },
                      },
                      {
                        id: "ta-dd6f8c7d",
                        targets: [
                          [
                            "wf:attribute",
                            '[data-scroll-delievery="image-5"]',
                            { relationship: "none", firstMatchOnly: !1 },
                          ],
                        ],
                        timing: { duration: 0.65, position: 1.79, ease: 5 },
                        tt: 2,
                        properties: {
                          "wf:transform": { width: ["0%", "100%"] },
                        },
                      },
                      {
                        id: "ta-0c13a2c6",
                        targets: [
                          [
                            "wf:attribute",
                            '[data-scroll-delievery="image-6"]',
                            { relationship: "none", firstMatchOnly: !1 },
                          ],
                        ],
                        timing: { duration: 0.65, position: 1.83, ease: 5 },
                        tt: 2,
                        properties: {
                          "wf:transform": { width: ["0%", "100%"] },
                        },
                      },
                      {
                        id: "ta-7886e5e4",
                        targets: [
                          [
                            "wf:attribute",
                            '[data-scroll-delievery="head-3"]',
                            {
                              relationship: "within",
                              filterBy: ["wf:trigger-only", ""],
                              firstMatchOnly: !1,
                            },
                          ],
                        ],
                        timing: {
                          duration: 0.38,
                          position: 3.22,
                          stagger: { amount: 0.375 },
                          ease: 5,
                        },
                        tt: 2,
                        properties: {
                          "wf:transform": {
                            opacity: ["0%", "100%"],
                            x: ["-5%", "0%"],
                          },
                        },
                        splitText: { type: "chars" },
                      },
                      {
                        id: "ta-68324481",
                        targets: [
                          [
                            "wf:attribute",
                            '[data-scroll-delievery="tag-3"]',
                            { relationship: "none", firstMatchOnly: !1 },
                          ],
                        ],
                        timing: { duration: 0.58, position: 3.22, ease: 5 },
                        tt: 2,
                        properties: {
                          "wf:transform": {
                            opacity: ["0%", "100%"],
                            y: ["10%", "0%"],
                          },
                        },
                      },
                      {
                        id: "ta-8d95d662",
                        targets: [
                          [
                            "wf:attribute",
                            '[data-scroll-delievery="text-3"]',
                            { relationship: "none", firstMatchOnly: !1 },
                          ],
                        ],
                        timing: {
                          duration: 0.38,
                          position: 3.22,
                          stagger: { amount: 0.375 },
                          ease: 5,
                        },
                        tt: 2,
                        properties: {
                          "wf:transform": {
                            opacity: ["0%", "100%"],
                            x: ["-5%", "0%"],
                          },
                        },
                        splitText: { type: "words" },
                      },
                      {
                        id: "ta-f637b746",
                        targets: [
                          [
                            "wf:attribute",
                            '[data-scroll-delievery="image-7"]',
                            { relationship: "none", firstMatchOnly: !1 },
                          ],
                        ],
                        timing: { duration: 0.65, position: 3.22, ease: 5 },
                        tt: 2,
                        properties: {
                          "wf:transform": { width: ["0%", "100%"] },
                        },
                      },
                    ],
                  },
                  {
                    id: "t-ba9ecb22",
                    deleted: !1,
                    actions: [
                      {
                        id: "ta-41011bb8",
                        targets: [
                          [
                            "wf:inst",
                            [
                              "6a66bbb868a1aa809735b123",
                              "f7a0fba4-65da-e3fb-2d63-d0acae50940b",
                            ],
                            { relationship: "none", firstMatchOnly: !1 },
                          ],
                        ],
                        timing: { duration: 1, position: 0, ease: 5 },
                        tt: 2,
                        properties: {
                          "wf:transform": { height: ["0svh", "55svh"] },
                        },
                      },
                      {
                        id: "ta-4de7c047",
                        targets: [
                          [
                            "wf:inst",
                            [
                              "6a66bbb868a1aa809735b123",
                              "8a0821ba-4aa6-3af9-7e87-0dc5f26b0616",
                            ],
                            { relationship: "none", firstMatchOnly: !1 },
                          ],
                        ],
                        timing: { duration: 1, position: 0, ease: 5 },
                        tt: 2,
                        properties: {
                          "wf:transform": { height: ["0svh", "35svh"] },
                        },
                      },
                    ],
                    canvasDuration: 1,
                  },
                  {
                    id: "t-43a7bb65",
                    deleted: !1,
                    actions: [
                      {
                        id: "ta-a68bc1c3",
                        targets: [
                          [
                            "wf:inst",
                            [
                              "6a66bbb868a1aa809735b123",
                              "732dae92-809a-58ff-c22d-7c2100212955",
                            ],
                            { relationship: "none", firstMatchOnly: !1 },
                          ],
                        ],
                        timing: { duration: 0.65, position: 0, ease: 5 },
                        tt: 2,
                        properties: {
                          "wf:transform": { opacity: ["0%", "100%"] },
                        },
                      },
                      {
                        id: "ta-0494fb4d",
                        targets: [
                          [
                            "wf:inst",
                            [
                              "6a66bbb868a1aa809735b123",
                              "732dae92-809a-58ff-c22d-7c2100212915",
                            ],
                            { relationship: "none", firstMatchOnly: !1 },
                          ],
                        ],
                        timing: { duration: 0.65, position: 0, ease: 5 },
                        tt: 2,
                        properties: {
                          "wf:transform": { opacity: ["0%", "100%"] },
                        },
                      },
                    ],
                  },
                  {
                    id: "t-33e68ed3",
                    deleted: !1,
                    actions: [
                      {
                        id: "ta-da08bf24",
                        targets: [
                          [
                            "wf:class",
                            ["content_approach-scroll"],
                            { relationship: "none", firstMatchOnly: !1 },
                          ],
                        ],
                        timing: { duration: 0.8, position: 0, ease: 0 },
                        tt: 2,
                        properties: {
                          "wf:transform": {
                            x: ["-134svw", "-100svw"],
                            y: ["50svh", "0svh"],
                            scale: [0, 1],
                          },
                        },
                      },
                      {
                        id: "ta-f612e759",
                        targets: [
                          [
                            "wf:class",
                            ["content_approach-scroll"],
                            { relationship: "none", firstMatchOnly: !1 },
                          ],
                        ],
                        timing: { duration: 3, position: 0.8, ease: 0 },
                        properties: {
                          "wf:transform": {
                            x: [null, "-300svw"],
                            y: [null, "0svh"],
                          },
                        },
                      },
                      {
                        id: "ta-e57ba050",
                        targets: [
                          [
                            "wf:attribute",
                            '[data-scroll-delievery="head-1"]',
                            { relationship: "none", firstMatchOnly: !1 },
                          ],
                        ],
                        timing: {
                          duration: 0.38,
                          position: 0.72,
                          stagger: { amount: 0.375 },
                          ease: 5,
                        },
                        tt: 2,
                        properties: {
                          "wf:transform": {
                            opacity: ["0%", "100%"],
                            x: ["-5%", "0%"],
                          },
                        },
                        splitText: { type: "chars" },
                      },
                      {
                        id: "ta-6817bc19",
                        targets: [
                          [
                            "wf:attribute",
                            '[data-scroll-delievery="text-1"]',
                            { relationship: "none", firstMatchOnly: !1 },
                          ],
                        ],
                        timing: {
                          duration: 0.38,
                          position: 0.72,
                          stagger: { amount: 0.375 },
                          ease: 5,
                        },
                        tt: 2,
                        properties: {
                          "wf:transform": {
                            opacity: ["0%", "100%"],
                            x: ["-5%", "0%"],
                          },
                        },
                        splitText: { type: "words" },
                      },
                      {
                        id: "ta-af253f9e",
                        targets: [
                          [
                            "wf:attribute",
                            '[data-scroll-delievery="tag-1"]',
                            { relationship: "none", firstMatchOnly: !1 },
                          ],
                        ],
                        timing: { duration: 0.58, position: 0.72, ease: 5 },
                        tt: 2,
                        properties: {
                          "wf:transform": {
                            opacity: ["0%", "100%"],
                            y: ["10%", "0%"],
                          },
                        },
                      },
                      {
                        id: "ta-e2cccdba",
                        targets: [
                          [
                            "wf:attribute",
                            '[data-scroll-delievery="image-1"]',
                            { relationship: "none", firstMatchOnly: !1 },
                          ],
                        ],
                        timing: { duration: 0.65, position: 0.72, ease: 5 },
                        tt: 2,
                        properties: {
                          "wf:transform": { width: ["0%", "100%"] },
                        },
                      },
                      {
                        id: "ta-08566fa0",
                        targets: [
                          [
                            "wf:attribute",
                            '[data-scroll-delievery="head-2"]',
                            { relationship: "none", firstMatchOnly: !1 },
                          ],
                        ],
                        timing: {
                          duration: 0.38,
                          position: 1.6,
                          stagger: { amount: 0.375 },
                          ease: 5,
                        },
                        tt: 2,
                        properties: {
                          "wf:transform": {
                            opacity: ["0%", "100%"],
                            x: ["-5%", "0%"],
                          },
                        },
                        splitText: { type: "chars" },
                      },
                      {
                        id: "ta-dca2c5cc",
                        targets: [
                          [
                            "wf:attribute",
                            '[data-scroll-delievery="text-2"]',
                            { relationship: "none", firstMatchOnly: !1 },
                          ],
                        ],
                        timing: {
                          duration: 0.38,
                          position: 1.6,
                          stagger: { amount: 0.375 },
                          ease: 5,
                        },
                        tt: 2,
                        properties: {
                          "wf:transform": {
                            opacity: ["0%", "100%"],
                            x: ["-5%", "0%"],
                          },
                        },
                        splitText: { type: "words" },
                      },
                      {
                        id: "ta-dfd4a6cd",
                        targets: [
                          [
                            "wf:attribute",
                            '[data-scroll-delievery="tag-2"]',
                            { relationship: "none", firstMatchOnly: !1 },
                          ],
                        ],
                        timing: { duration: 0.58, position: 1.6, ease: 5 },
                        tt: 2,
                        properties: {
                          "wf:transform": {
                            opacity: ["0%", "100%"],
                            y: ["10%", "0%"],
                          },
                        },
                      },
                      {
                        id: "ta-f74f6dda",
                        targets: [
                          [
                            "wf:attribute",
                            '[data-scroll-delievery="image-2"]',
                            { relationship: "none", firstMatchOnly: !1 },
                          ],
                        ],
                        timing: { duration: 0.65, position: 1.67, ease: 5 },
                        tt: 2,
                        properties: {
                          "wf:transform": { width: ["0%", "100%"] },
                        },
                      },
                      {
                        id: "ta-b80fe92b",
                        targets: [
                          [
                            "wf:attribute",
                            '[data-scroll-delievery="image-3"]',
                            { relationship: "none", firstMatchOnly: !1 },
                          ],
                        ],
                        timing: { duration: 0.65, position: 1.71, ease: 5 },
                        tt: 2,
                        properties: {
                          "wf:transform": { width: ["0%", "100%"] },
                        },
                      },
                      {
                        id: "ta-558c87e0",
                        targets: [
                          [
                            "wf:attribute",
                            '[data-scroll-delievery="image-4"]',
                            { relationship: "none", firstMatchOnly: !1 },
                          ],
                        ],
                        timing: { duration: 0.65, position: 1.75, ease: 5 },
                        tt: 2,
                        properties: {
                          "wf:transform": { width: ["0%", "100%"] },
                        },
                      },
                      {
                        id: "ta-7b05ec26",
                        targets: [
                          [
                            "wf:attribute",
                            '[data-scroll-delievery="image-5"]',
                            { relationship: "none", firstMatchOnly: !1 },
                          ],
                        ],
                        timing: { duration: 0.65, position: 1.79, ease: 5 },
                        tt: 2,
                        properties: {
                          "wf:transform": { width: ["0%", "100%"] },
                        },
                      },
                      {
                        id: "ta-59dcc217",
                        targets: [
                          [
                            "wf:attribute",
                            '[data-scroll-delievery="image-6"]',
                            { relationship: "none", firstMatchOnly: !1 },
                          ],
                        ],
                        timing: { duration: 0.65, position: 1.83, ease: 5 },
                        tt: 2,
                        properties: {
                          "wf:transform": { width: ["0%", "100%"] },
                        },
                      },
                      {
                        id: "ta-0145b5bb",
                        targets: [
                          [
                            "wf:attribute",
                            '[data-scroll-delievery="head-3"]',
                            {
                              relationship: "within",
                              filterBy: ["wf:trigger-only", ""],
                              firstMatchOnly: !1,
                            },
                          ],
                        ],
                        timing: {
                          duration: 0.38,
                          position: 3.22,
                          stagger: { amount: 0.375 },
                          ease: 5,
                        },
                        tt: 2,
                        properties: {
                          "wf:transform": {
                            opacity: ["0%", "100%"],
                            x: ["-5%", "0%"],
                          },
                        },
                        splitText: { type: "chars" },
                      },
                      {
                        id: "ta-5f61a095",
                        targets: [
                          [
                            "wf:attribute",
                            '[data-scroll-delievery="tag-3"]',
                            { relationship: "none", firstMatchOnly: !1 },
                          ],
                        ],
                        timing: { duration: 0.58, position: 3.22, ease: 5 },
                        tt: 2,
                        properties: {
                          "wf:transform": {
                            opacity: ["0%", "100%"],
                            y: ["10%", "0%"],
                          },
                        },
                      },
                      {
                        id: "ta-27278b2c",
                        targets: [
                          [
                            "wf:attribute",
                            '[data-scroll-delievery="text-3"]',
                            { relationship: "none", firstMatchOnly: !1 },
                          ],
                        ],
                        timing: {
                          duration: 0.38,
                          position: 3.22,
                          stagger: { amount: 0.375 },
                          ease: 5,
                        },
                        tt: 2,
                        properties: {
                          "wf:transform": {
                            opacity: ["0%", "100%"],
                            x: ["-5%", "0%"],
                          },
                        },
                        splitText: { type: "words" },
                      },
                      {
                        id: "ta-acb740fb",
                        targets: [
                          [
                            "wf:attribute",
                            '[data-scroll-delievery="image-7"]',
                            { relationship: "none", firstMatchOnly: !1 },
                          ],
                        ],
                        timing: { duration: 0.65, position: 3.22, ease: 5 },
                        tt: 2,
                        properties: {
                          "wf:transform": { width: ["0%", "100%"] },
                        },
                      },
                    ],
                  },
                ],
              ),
              window.dispatchEvent(new CustomEvent("__wf_ix3_ready")),
              document.documentElement.classList.add("w-mod-ix3"));
          });
        }
        (Webflow.require("ix2").init({
          events: {
            e: {
              id: "e",
              name: "",
              animationType: "custom",
              eventTypeId: "DROPDOWN_OPEN",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-2",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "2ba42e11-d83f-56fd-479a-50b46ef658fe",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "2ba42e11-d83f-56fd-479a-50b46ef658fe",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x19dd4595099,
            },
            "e-2": {
              id: "e-2",
              name: "",
              animationType: "custom",
              eventTypeId: "DROPDOWN_CLOSE",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-2",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "2ba42e11-d83f-56fd-479a-50b46ef658fe",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "2ba42e11-d83f-56fd-479a-50b46ef658fe",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x19dd459509a,
            },
            "e-3": {
              id: "e-3",
              name: "",
              animationType: "custom",
              eventTypeId: "DROPDOWN_OPEN",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-3",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-4",
                },
              },
              mediaQueries: ["main", "medium"],
              target: {
                id: "c9f0df5c-c063-f893-15ae-3dd516cef19a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "c9f0df5c-c063-f893-15ae-3dd516cef19a",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x19dd4ec2457,
            },
            "e-4": {
              id: "e-4",
              name: "",
              animationType: "custom",
              eventTypeId: "DROPDOWN_CLOSE",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-4",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-3",
                },
              },
              mediaQueries: ["main", "medium"],
              target: {
                id: "c9f0df5c-c063-f893-15ae-3dd516cef19a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "c9f0df5c-c063-f893-15ae-3dd516cef19a",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x19dd4ec2457,
            },
            "e-5": {
              id: "e-5",
              name: "",
              animationType: "custom",
              eventTypeId: "DROPDOWN_OPEN",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-5",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-6",
                },
              },
              mediaQueries: ["small", "tiny"],
              target: {
                id: "c9f0df5c-c063-f893-15ae-3dd516cef19a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "c9f0df5c-c063-f893-15ae-3dd516cef19a",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x19dd50f85c0,
            },
            "e-6": {
              id: "e-6",
              name: "",
              animationType: "custom",
              eventTypeId: "DROPDOWN_CLOSE",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-16",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-5",
                },
              },
              mediaQueries: ["small", "tiny"],
              target: {
                id: "c9f0df5c-c063-f893-15ae-3dd516cef19a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "c9f0df5c-c063-f893-15ae-3dd516cef19a",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x19dd50f85c0,
            },
            "e-7": {
              id: "e-7",
              name: "",
              animationType: "custom",
              eventTypeId: "SLIDER_ACTIVE",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-7",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-8",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".content_apatments-slide",
                originalId: "12da9841-249e-97ce-ecc8-2662b5036a56",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".content_apatments-slide",
                  originalId: "12da9841-249e-97ce-ecc8-2662b5036a56",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: 0,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x19e02b24873,
            },
            "e-8": {
              id: "e-8",
              name: "",
              animationType: "custom",
              eventTypeId: "SLIDER_INACTIVE",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-8",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-7",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".content_apatments-slide",
                originalId: "12da9841-249e-97ce-ecc8-2662b5036a56",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".content_apatments-slide",
                  originalId: "12da9841-249e-97ce-ecc8-2662b5036a56",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x19e02b24874,
            },
            "e-9": {
              id: "e-9",
              name: "",
              animationType: "preset",
              eventTypeId: "SLIDER_ACTIVE",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-12",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-10",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".content_apatments-slide",
                originalId:
                  "69e1cc2e4bb2c432ebac4f79|c32ed00b-78d1-5fb6-a7e3-19906526240c",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".content_apatments-slide",
                  originalId:
                    "69e1cc2e4bb2c432ebac4f79|c32ed00b-78d1-5fb6-a7e3-19906526240c",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: 0,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x19ecc1f34c8,
            },
            "e-10": {
              id: "e-10",
              name: "",
              animationType: "preset",
              eventTypeId: "SLIDER_INACTIVE",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-13",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-9",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                selector: ".content_apatments-slide",
                originalId:
                  "69e1cc2e4bb2c432ebac4f79|c32ed00b-78d1-5fb6-a7e3-19906526240c",
                appliesTo: "CLASS",
              },
              targets: [
                {
                  selector: ".content_apatments-slide",
                  originalId:
                    "69e1cc2e4bb2c432ebac4f79|c32ed00b-78d1-5fb6-a7e3-19906526240c",
                  appliesTo: "CLASS",
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x19ecc1f34c8,
            },
            "e-11": {
              id: "e-11",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_CLICK",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-14",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-12",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "69e1cc2e4bb2c432ebac4f79|b56152e0-4677-3fc1-bada-d857ad7e53a7",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "69e1cc2e4bb2c432ebac4f79|b56152e0-4677-3fc1-bada-d857ad7e53a7",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x19ed6644c30,
            },
            "e-12": {
              id: "e-12",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_SECOND_CLICK",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-15",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-11",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "69e1cc2e4bb2c432ebac4f79|b56152e0-4677-3fc1-bada-d857ad7e53a7",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "69e1cc2e4bb2c432ebac4f79|b56152e0-4677-3fc1-bada-d857ad7e53a7",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x19ed6644c30,
            },
            "e-13": {
              id: "e-13",
              name: "",
              animationType: "preset",
              eventTypeId: "DROPDOWN_OPEN",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-3",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-14",
                },
              },
              mediaQueries: ["main", "medium"],
              target: {
                id: "6a66bbb868a1aa809735b123|a184124e-09eb-d1a5-5d93-9f99a81a2493",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "6a66bbb868a1aa809735b123|a184124e-09eb-d1a5-5d93-9f99a81a2493",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x19fd7846a39,
            },
            "e-14": {
              id: "e-14",
              name: "",
              animationType: "preset",
              eventTypeId: "DROPDOWN_CLOSE",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-4",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-13",
                },
              },
              mediaQueries: ["main", "medium"],
              target: {
                id: "6a66bbb868a1aa809735b123|a184124e-09eb-d1a5-5d93-9f99a81a2493",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "6a66bbb868a1aa809735b123|a184124e-09eb-d1a5-5d93-9f99a81a2493",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x19fd7846a39,
            },
            "e-17": {
              id: "e-17",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_CLICK",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-14",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-18",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "6a66bbb868a1aa809735b123|b56152e0-4677-3fc1-bada-d857ad7e53a7",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "6a66bbb868a1aa809735b123|b56152e0-4677-3fc1-bada-d857ad7e53a7",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1a0005d2280,
            },
            "e-18": {
              id: "e-18",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_SECOND_CLICK",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-15",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-17",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "6a66bbb868a1aa809735b123|b56152e0-4677-3fc1-bada-d857ad7e53a7",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "6a66bbb868a1aa809735b123|b56152e0-4677-3fc1-bada-d857ad7e53a7",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1a0005d2281,
            },
            "e-19": {
              id: "e-19",
              name: "",
              animationType: "custom",
              eventTypeId: "DROPDOWN_OPEN",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-5",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-20",
                },
              },
              mediaQueries: ["small", "tiny"],
              target: {
                appliesTo: "ELEMENT",
                styleBlockIds: [],
                id: "6a66bbb868a1aa809735b123|a184124e-09eb-d1a5-5d93-9f99a81a2493",
              },
              targets: [],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1a0a541c8fd,
            },
            "e-20": {
              id: "e-20",
              name: "",
              animationType: "custom",
              eventTypeId: "DROPDOWN_CLOSE",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-16",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-19",
                },
              },
              mediaQueries: ["small", "tiny"],
              target: {
                appliesTo: "ELEMENT",
                styleBlockIds: [],
                id: "6a66bbb868a1aa809735b123|a184124e-09eb-d1a5-5d93-9f99a81a2493",
              },
              targets: [],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1a0a541c8fd,
            },
          },
          actionLists: {
            a: {
              id: "a",
              title: "faq-item [click one]",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-n",
                      actionTypeId: "GENERAL_DISPLAY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".faq-item_content",
                          selectorGuids: [
                            "0d6c3675-97d0-ff91-f7c5-fcf1caa6172c",
                          ],
                        },
                        value: "none",
                      },
                    },
                    {
                      id: "a-n-3",
                      actionTypeId: "STYLE_SIZE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".faq-item_content-inline",
                          selectorGuids: [
                            "750afb36-8203-839b-a8e1-be50b4eef0d9",
                          ],
                        },
                        heightValue: 0,
                        widthUnit: "PX",
                        heightUnit: "px",
                        locked: !1,
                      },
                    },
                    {
                      id: "a-n-5",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".faq-item_trigger-arrow",
                          selectorGuids: [
                            "eb3eba45-4340-afcd-e9ab-dbdb104dd61d",
                          ],
                        },
                        zValue: 0,
                        xUnit: "DEG",
                        yUnit: "DEG",
                        zUnit: "deg",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-n-2",
                      actionTypeId: "GENERAL_DISPLAY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".faq-item_content",
                          selectorGuids: [
                            "0d6c3675-97d0-ff91-f7c5-fcf1caa6172c",
                          ],
                        },
                        value: "block",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-n-4",
                      actionTypeId: "STYLE_SIZE",
                      config: {
                        delay: 0,
                        easing: "easeOut",
                        duration: 650,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".faq-item_content-inline",
                          selectorGuids: [
                            "750afb36-8203-839b-a8e1-be50b4eef0d9",
                          ],
                        },
                        widthUnit: "PX",
                        heightUnit: "AUTO",
                        locked: !1,
                      },
                    },
                    {
                      id: "a-n-6",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "easeOut",
                        duration: 650,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".faq-item_trigger-arrow",
                          selectorGuids: [
                            "eb3eba45-4340-afcd-e9ab-dbdb104dd61d",
                          ],
                        },
                        zValue: 180,
                        xUnit: "DEG",
                        yUnit: "DEG",
                        zUnit: "deg",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !0,
              createdOn: 0x19dd0b69a66,
            },
            "a-2": {
              id: "a-2",
              title: "faq-item [click two]",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-2-n-4",
                      actionTypeId: "GENERAL_DISPLAY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".faq-item_content",
                          selectorGuids: [
                            "0d6c3675-97d0-ff91-f7c5-fcf1caa6172c",
                          ],
                        },
                        value: "block",
                      },
                    },
                    {
                      id: "a-2-n-5",
                      actionTypeId: "STYLE_SIZE",
                      config: {
                        delay: 0,
                        easing: "easeOut",
                        duration: 0,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".faq-item_content-inline",
                          selectorGuids: [
                            "750afb36-8203-839b-a8e1-be50b4eef0d9",
                          ],
                        },
                        widthUnit: "PX",
                        heightUnit: "AUTO",
                        locked: !1,
                      },
                    },
                    {
                      id: "a-2-n-6",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "easeOut",
                        duration: 0,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".faq-item_trigger-arrow",
                          selectorGuids: [
                            "eb3eba45-4340-afcd-e9ab-dbdb104dd61d",
                          ],
                        },
                        zValue: 180,
                        xUnit: "DEG",
                        yUnit: "DEG",
                        zUnit: "deg",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-2-n-2",
                      actionTypeId: "STYLE_SIZE",
                      config: {
                        delay: 0,
                        easing: "easeOut",
                        duration: 650,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".faq-item_content-inline",
                          selectorGuids: [
                            "750afb36-8203-839b-a8e1-be50b4eef0d9",
                          ],
                        },
                        heightValue: 0,
                        widthUnit: "PX",
                        heightUnit: "px",
                        locked: !1,
                      },
                    },
                    {
                      id: "a-2-n-3",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "easeOut",
                        duration: 650,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".faq-item_trigger-arrow",
                          selectorGuids: [
                            "eb3eba45-4340-afcd-e9ab-dbdb104dd61d",
                          ],
                        },
                        zValue: 0,
                        xUnit: "DEG",
                        yUnit: "DEG",
                        zUnit: "deg",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-2-n",
                      actionTypeId: "GENERAL_DISPLAY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".faq-item_content",
                          selectorGuids: [
                            "0d6c3675-97d0-ff91-f7c5-fcf1caa6172c",
                          ],
                        },
                        value: "none",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !1,
              createdOn: 0x19dd0b69a66,
            },
            "a-3": {
              id: "a-3",
              title: "Navbar pc [hover on]",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-3-n",
                      actionTypeId: "GENERAL_DISPLAY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".nav_content",
                          selectorGuids: [
                            "3ad54f18-6df2-dac2-512d-ed95e94afa17",
                          ],
                        },
                        value: "none",
                      },
                    },
                    {
                      id: "a-3-n-3",
                      actionTypeId: "STYLE_SIZE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".nav_content-inline",
                          selectorGuids: [
                            "f07203be-0edb-444f-3196-81b898e5d4a4",
                          ],
                        },
                        heightValue: 0,
                        widthUnit: "PX",
                        heightUnit: "px",
                        locked: !1,
                      },
                    },
                    {
                      id: "a-3-n-5",
                      actionTypeId: "STYLE_SIZE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".separator-line",
                          selectorGuids: [
                            "94056ca3-b609-d6a4-3f71-d6f9a749be62",
                          ],
                        },
                        widthValue: 0,
                        widthUnit: "px",
                        heightUnit: "PX",
                        locked: !1,
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-3-n-2",
                      actionTypeId: "GENERAL_DISPLAY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".nav_content",
                          selectorGuids: [
                            "3ad54f18-6df2-dac2-512d-ed95e94afa17",
                          ],
                        },
                        value: "block",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-3-n-4",
                      actionTypeId: "STYLE_SIZE",
                      config: {
                        delay: 0,
                        easing: "easeOut",
                        duration: 450,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".nav_content-inline",
                          selectorGuids: [
                            "f07203be-0edb-444f-3196-81b898e5d4a4",
                          ],
                        },
                        widthUnit: "PX",
                        heightUnit: "AUTO",
                        locked: !1,
                      },
                    },
                    {
                      id: "a-3-n-6",
                      actionTypeId: "STYLE_SIZE",
                      config: {
                        delay: 400,
                        easing: "",
                        duration: 200,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".separator-line",
                          selectorGuids: [
                            "94056ca3-b609-d6a4-3f71-d6f9a749be62",
                          ],
                        },
                        widthUnit: "AUTO",
                        heightUnit: "PX",
                        locked: !1,
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !0,
              createdOn: 0x19dd4ec304e,
            },
            "a-4": {
              id: "a-4",
              title: "Navbar pc [hover out]",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-4-n-4",
                      actionTypeId: "GENERAL_DISPLAY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".nav_content",
                          selectorGuids: [
                            "3ad54f18-6df2-dac2-512d-ed95e94afa17",
                          ],
                        },
                        value: "block",
                      },
                    },
                    {
                      id: "a-4-n-5",
                      actionTypeId: "STYLE_SIZE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".nav_content-inline",
                          selectorGuids: [
                            "f07203be-0edb-444f-3196-81b898e5d4a4",
                          ],
                        },
                        widthUnit: "PX",
                        heightUnit: "AUTO",
                        locked: !1,
                      },
                    },
                    {
                      id: "a-4-n-6",
                      actionTypeId: "STYLE_SIZE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".separator-line",
                          selectorGuids: [
                            "94056ca3-b609-d6a4-3f71-d6f9a749be62",
                          ],
                        },
                        widthUnit: "AUTO",
                        heightUnit: "PX",
                        locked: !1,
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-4-n-2",
                      actionTypeId: "STYLE_SIZE",
                      config: {
                        delay: 0,
                        easing: "easeOut",
                        duration: 450,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".nav_content-inline",
                          selectorGuids: [
                            "f07203be-0edb-444f-3196-81b898e5d4a4",
                          ],
                        },
                        heightValue: 0,
                        widthUnit: "PX",
                        heightUnit: "px",
                        locked: !1,
                      },
                    },
                    {
                      id: "a-4-n-3",
                      actionTypeId: "STYLE_SIZE",
                      config: {
                        delay: 400,
                        easing: "",
                        duration: 200,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".separator-line",
                          selectorGuids: [
                            "94056ca3-b609-d6a4-3f71-d6f9a749be62",
                          ],
                        },
                        widthValue: 0,
                        widthUnit: "px",
                        heightUnit: "PX",
                        locked: !1,
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-4-n",
                      actionTypeId: "GENERAL_DISPLAY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".nav_content",
                          selectorGuids: [
                            "3ad54f18-6df2-dac2-512d-ed95e94afa17",
                          ],
                        },
                        value: "none",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !1,
              createdOn: 0x19dd4ec304e,
            },
            "a-5": {
              id: "a-5",
              title: "Navbar mobile [tap on]",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-5-n",
                      actionTypeId: "GENERAL_DISPLAY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".nav_content",
                          selectorGuids: [
                            "3ad54f18-6df2-dac2-512d-ed95e94afa17",
                          ],
                        },
                        value: "none",
                      },
                    },
                    {
                      id: "a-5-n-4",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".nav_overflow",
                          selectorGuids: [
                            "9d786cc3-61ac-89d0-6d45-7ea22b94f2c6",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-5-n-6",
                      actionTypeId: "STYLE_SIZE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".nav_content-inline",
                          selectorGuids: [
                            "f07203be-0edb-444f-3196-81b898e5d4a4",
                          ],
                        },
                        heightValue: 0,
                        widthUnit: "PX",
                        heightUnit: "px",
                        locked: !1,
                      },
                    },
                    {
                      id: "a-5-n-8",
                      actionTypeId: "STYLE_SIZE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".separator-line",
                          selectorGuids: [
                            "94056ca3-b609-d6a4-3f71-d6f9a749be62",
                          ],
                        },
                        widthValue: 0,
                        widthUnit: "px",
                        heightUnit: "PX",
                        locked: !1,
                      },
                    },
                    {
                      id: "a-5-n-12",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".icon-close-mobile",
                          selectorGuids: [
                            "2c3a9888-7711-f992-7ebd-8c203cc3a59b",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-5-n-13",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".icon-menu-main",
                          selectorGuids: [
                            "dc559268-9308-46ef-5ff2-674050167dba",
                          ],
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-5-n-2",
                      actionTypeId: "GENERAL_DISPLAY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".nav_content",
                          selectorGuids: [
                            "3ad54f18-6df2-dac2-512d-ed95e94afa17",
                          ],
                        },
                        value: "block",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-5-n-5",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "easeOut",
                        duration: 100,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".nav_overflow",
                          selectorGuids: [
                            "9d786cc3-61ac-89d0-6d45-7ea22b94f2c6",
                          ],
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                    {
                      id: "a-5-n-14",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "easeOut",
                        duration: 250,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".icon-menu-main",
                          selectorGuids: [
                            "dc559268-9308-46ef-5ff2-674050167dba",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-5-n-15",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "easeOut",
                        duration: 250,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".icon-close-mobile",
                          selectorGuids: [
                            "2c3a9888-7711-f992-7ebd-8c203cc3a59b",
                          ],
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-5-n-7",
                      actionTypeId: "STYLE_SIZE",
                      config: {
                        delay: 0,
                        easing: "easeOut",
                        duration: 350,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".nav_content-inline",
                          selectorGuids: [
                            "f07203be-0edb-444f-3196-81b898e5d4a4",
                          ],
                        },
                        widthUnit: "PX",
                        heightUnit: "AUTO",
                        locked: !1,
                      },
                    },
                    {
                      id: "a-5-n-3",
                      actionTypeId: "STYLE_TEXT_COLOR",
                      config: {
                        delay: 150,
                        easing: "",
                        duration: 50,
                        target: {
                          selector: ".logo-mobile",
                          selectorGuids: [
                            "a1cb1d8c-1964-e79e-694d-23da0787626a",
                          ],
                        },
                        globalSwatchId: "--_color---black",
                        rValue: 15,
                        bValue: 15,
                        gValue: 15,
                        aValue: 1,
                      },
                    },
                    {
                      id: "a-5-n-9",
                      actionTypeId: "STYLE_SIZE",
                      config: {
                        delay: 450,
                        easing: "",
                        duration: 300,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".separator-line",
                          selectorGuids: [
                            "94056ca3-b609-d6a4-3f71-d6f9a749be62",
                          ],
                        },
                        widthUnit: "AUTO",
                        heightUnit: "PX",
                        locked: !1,
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !0,
              createdOn: 0x19dd5048538,
            },
            "a-16": {
              id: "a-16",
              title: "Navbar mobile [tap off]",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-16-n-3",
                      actionTypeId: "STYLE_SIZE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".nav_content-inline",
                          selectorGuids: [
                            "f07203be-0edb-444f-3196-81b898e5d4a4",
                          ],
                        },
                        heightValue: 0,
                        widthUnit: "PX",
                        heightUnit: "px",
                        locked: !1,
                      },
                    },
                    {
                      id: "a-16-n-15",
                      actionTypeId: "STYLE_SIZE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 300,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".separator-line",
                          selectorGuids: [
                            "94056ca3-b609-d6a4-3f71-d6f9a749be62",
                          ],
                        },
                        widthValue: 0,
                        widthUnit: "%",
                        heightUnit: "PX",
                        locked: !1,
                      },
                    },
                    {
                      id: "a-16-n-14",
                      actionTypeId: "STYLE_TEXT_COLOR",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 50,
                        target: {
                          selector: ".logo-mobile",
                          selectorGuids: [
                            "a1cb1d8c-1964-e79e-694d-23da0787626a",
                          ],
                        },
                        globalSwatchId: "--_color---white",
                        rValue: 244,
                        bValue: 235,
                        gValue: 243,
                        aValue: 1,
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-16-n-2",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".nav_overflow",
                          selectorGuids: [
                            "9d786cc3-61ac-89d0-6d45-7ea22b94f2c6",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-16-n-7",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".icon-menu-main",
                          selectorGuids: [
                            "dc559268-9308-46ef-5ff2-674050167dba",
                          ],
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                    {
                      id: "a-16-n-6",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".icon-close-mobile",
                          selectorGuids: [
                            "2c3a9888-7711-f992-7ebd-8c203cc3a59b",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-16-n",
                      actionTypeId: "GENERAL_DISPLAY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".nav_content",
                          selectorGuids: [
                            "3ad54f18-6df2-dac2-512d-ed95e94afa17",
                          ],
                        },
                        value: "none",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !1,
              createdOn: 0x19dd5048538,
            },
            "a-7": {
              id: "a-7",
              title: "Slider number [slide in]",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-7-n",
                      actionTypeId: "STYLE_SIZE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: { id: "392b054f-44a2-aa33-88ef-c60008532780" },
                        heightValue: 0,
                        widthUnit: "PX",
                        heightUnit: "px",
                        locked: !1,
                      },
                    },
                    {
                      id: "a-7-n-2",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: { id: "392b054f-44a2-aa33-88ef-c60008532780" },
                        value: 0,
                        unit: "",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-7-n-3",
                      actionTypeId: "STYLE_SIZE",
                      config: {
                        delay: 0,
                        easing: "easeOut",
                        duration: 500,
                        target: { id: "392b054f-44a2-aa33-88ef-c60008532780" },
                        widthUnit: "PX",
                        heightUnit: "AUTO",
                        locked: !1,
                      },
                    },
                    {
                      id: "a-7-n-4",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "easeOut",
                        duration: 500,
                        target: { id: "392b054f-44a2-aa33-88ef-c60008532780" },
                        value: 1,
                        unit: "",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !0,
              createdOn: 0x19e02b3b3dd,
            },
            "a-8": {
              id: "a-8",
              title: "Slider number [slide out]",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-8-n-3",
                      actionTypeId: "STYLE_SIZE",
                      config: {
                        delay: 0,
                        easing: "easeOut",
                        duration: 0,
                        target: { id: "392b054f-44a2-aa33-88ef-c60008532780" },
                        widthUnit: "PX",
                        heightUnit: "AUTO",
                        locked: !1,
                      },
                    },
                    {
                      id: "a-8-n-4",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "easeOut",
                        duration: 0,
                        target: { id: "392b054f-44a2-aa33-88ef-c60008532780" },
                        value: 1,
                        unit: "",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-8-n",
                      actionTypeId: "STYLE_SIZE",
                      config: {
                        delay: 0,
                        easing: "easeOut",
                        duration: 500,
                        target: { id: "392b054f-44a2-aa33-88ef-c60008532780" },
                        heightValue: 0,
                        widthUnit: "PX",
                        heightUnit: "px",
                        locked: !1,
                      },
                    },
                    {
                      id: "a-8-n-2",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "easeOut",
                        duration: 500,
                        target: { id: "392b054f-44a2-aa33-88ef-c60008532780" },
                        value: 0,
                        unit: "",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !1,
              createdOn: 0x19e02b3b3dd,
            },
            "a-12": {
              id: "a-12",
              title: "Slider number [slide in] 2",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-12-n",
                      actionTypeId: "STYLE_SIZE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          id: "69e1cc2e4bb2c432ebac4f79|392b054f-44a2-aa33-88ef-c60008532780",
                        },
                        heightValue: 0,
                        widthUnit: "PX",
                        heightUnit: "px",
                        locked: !1,
                      },
                    },
                    {
                      id: "a-12-n-2",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          id: "69e1cc2e4bb2c432ebac4f79|392b054f-44a2-aa33-88ef-c60008532780",
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-12-n-3",
                      actionTypeId: "STYLE_SIZE",
                      config: {
                        delay: 0,
                        easing: "easeOut",
                        duration: 500,
                        target: {
                          id: "69e1cc2e4bb2c432ebac4f79|392b054f-44a2-aa33-88ef-c60008532780",
                        },
                        widthUnit: "PX",
                        heightUnit: "AUTO",
                        locked: !1,
                      },
                    },
                    {
                      id: "a-12-n-4",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "easeOut",
                        duration: 500,
                        target: {
                          id: "69e1cc2e4bb2c432ebac4f79|392b054f-44a2-aa33-88ef-c60008532780",
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !0,
              createdOn: 0x19e02b3b3dd,
            },
            "a-13": {
              id: "a-13",
              title: "Slider number [slide out] 2",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-13-n",
                      actionTypeId: "STYLE_SIZE",
                      config: {
                        delay: 0,
                        easing: "easeOut",
                        duration: 0,
                        target: {
                          id: "69e1cc2e4bb2c432ebac4f79|392b054f-44a2-aa33-88ef-c60008532780",
                        },
                        widthUnit: "PX",
                        heightUnit: "AUTO",
                        locked: !1,
                      },
                    },
                    {
                      id: "a-13-n-2",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "easeOut",
                        duration: 0,
                        target: {
                          id: "69e1cc2e4bb2c432ebac4f79|392b054f-44a2-aa33-88ef-c60008532780",
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-13-n-3",
                      actionTypeId: "STYLE_SIZE",
                      config: {
                        delay: 0,
                        easing: "easeOut",
                        duration: 500,
                        target: {
                          id: "69e1cc2e4bb2c432ebac4f79|392b054f-44a2-aa33-88ef-c60008532780",
                        },
                        heightValue: 0,
                        widthUnit: "PX",
                        heightUnit: "px",
                        locked: !1,
                      },
                    },
                    {
                      id: "a-13-n-4",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "easeOut",
                        duration: 500,
                        target: {
                          id: "69e1cc2e4bb2c432ebac4f79|392b054f-44a2-aa33-88ef-c60008532780",
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !1,
              createdOn: 0x19e02b3b3dd,
            },
            "a-14": {
              id: "a-14",
              title: "faq more [one click]",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-14-n",
                      actionTypeId: "STYLE_SIZE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "SIBLINGS",
                          selector: ".faq-more_wrapper",
                          selectorGuids: [
                            "8721a3bc-6ac8-6b37-e1dc-6b73584f8c84",
                          ],
                        },
                        heightValue: 0,
                        widthUnit: "PX",
                        heightUnit: "px",
                        locked: !1,
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-14-n-2",
                      actionTypeId: "STYLE_SIZE",
                      config: {
                        delay: 0,
                        easing: "easeOut",
                        duration: 580,
                        target: {
                          useEventTarget: "SIBLINGS",
                          selector: ".faq-more_wrapper",
                          selectorGuids: [
                            "8721a3bc-6ac8-6b37-e1dc-6b73584f8c84",
                          ],
                        },
                        widthUnit: "PX",
                        heightUnit: "AUTO",
                        locked: !1,
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !0,
              createdOn: 0x19ed664571a,
            },
            "a-15": {
              id: "a-15",
              title: "faq more [two click]",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-15-n-2",
                      actionTypeId: "STYLE_SIZE",
                      config: {
                        delay: 0,
                        easing: "easeOut",
                        duration: 580,
                        target: {
                          useEventTarget: "SIBLINGS",
                          selector: ".faq-more_wrapper",
                          selectorGuids: [
                            "8721a3bc-6ac8-6b37-e1dc-6b73584f8c84",
                          ],
                        },
                        heightValue: 0,
                        widthUnit: "PX",
                        heightUnit: "px",
                        locked: !1,
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !1,
              createdOn: 0x19ed664571a,
            },
          },
          site: {
            mediaQueries: [
              { key: "main", min: 992, max: 1e4 },
              { key: "medium", min: 768, max: 991 },
              { key: "small", min: 480, max: 767 },
              { key: "tiny", min: 0, max: 479 },
            ],
          },
        }),
          "complete" === document.readyState
            ? e()
            : document.addEventListener("readystatechange", () => {
                "complete" === document.readyState && e();
              }));
      },
      3810: function (e, t, a) {
        (a(9461),
          a(7624),
          a(286),
          a(8334),
          a(2338),
          a(3695),
          a(322),
          a(941),
          a(5134),
          a(7527),
          a(9858),
          a(3973),
          a(9427));
      },
    },
    t = {};
  function a(i) {
    var n = t[i];
    if (void 0 !== n) return n.exports;
    var o = (t[i] = { id: i, loaded: !1, exports: {} });
    return (e[i](o, o.exports, a), (o.loaded = !0), o.exports);
  }
  ((a.m = e),
    (a.d = (e, t) => {
      for (var i in t)
        a.o(t, i) &&
          !a.o(e, i) &&
          Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
    }),
    (a.hmd = (e) => (
      (e = Object.create(e)).children || (e.children = []),
      Object.defineProperty(e, "exports", {
        enumerable: !0,
        set: () => {
          throw Error(
            "ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " +
              e.id,
          );
        },
      }),
      e
    )),
    (a.g = (() => {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (a.r = (e) => {
      ("undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 }));
    }),
    (a.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (() => {
      var e = [];
      a.O = (t, i, n, o) => {
        if (i) {
          o = o || 0;
          for (var r = e.length; r > 0 && e[r - 1][2] > o; r--) e[r] = e[r - 1];
          e[r] = [i, n, o];
          return;
        }
        for (var s = 1 / 0, r = 0; r < e.length; r++) {
          for (var [i, n, o] = e[r], l = !0, d = 0; d < i.length; d++)
            (!1 & o || s >= o) && Object.keys(a.O).every((e) => a.O[e](i[d]))
              ? i.splice(d--, 1)
              : ((l = !1), o < s && (s = o));
          if (l) {
            e.splice(r--, 1);
            var c = n();
            void 0 !== c && (t = c);
          }
        }
        return t;
      };
    })(),
    (a.rv = () => "1.3.9"),
    (() => {
      var e = { 353: 0 };
      a.O.j = (t) => 0 === e[t];
      var t = (t, i) => {
          var n,
            o,
            [r, s, l] = i,
            d = 0;
          if (r.some((t) => 0 !== e[t])) {
            for (n in s) a.o(s, n) && (a.m[n] = s[n]);
            if (l) var c = l(a);
          }
          for (t && t(i); d < r.length; d++)
            ((o = r[d]), a.o(e, o) && e[o] && e[o][0](), (e[o] = 0));
          return a.O(c);
        },
        i = (self.webpackChunk = self.webpackChunk || []);
      (i.forEach(t.bind(null, 0)), (i.push = t.bind(null, i.push.bind(i))));
    })(),
    (a.ruid = "bundler=rspack@1.3.9"));
  var i = a.O(void 0, ["87", "999"], function () {
    return a(3810);
  });
  i = a.O(i);
})();
