(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [974],
  {
    2051: (e, t, a) => {
      Promise.resolve().then(a.bind(a, 2173)),
        Promise.resolve().then(a.bind(a, 8262)),
        Promise.resolve().then(a.bind(a, 7257)),
        Promise.resolve().then(a.bind(a, 8482));
    },
    2173: (e, t, a) => {
      "use strict";
      a.d(t, { default: () => o });
      var i = a(5155),
        s = a(6813);
      let r = [
          {
            title: "5% Tax Distribution",
            description:
              "Every buy and sell transaction contributes to the reward pool",
            icon: ">_",
          },
          {
            title: "Auto-Claim System",
            description:
              "Rewards are automatically distributed every 5 minutes",
            icon: "[]",
          },
          {
            title: "Ethereum Rewards",
            description:
              "Earn Ethereum just by holding $IMG tokens in your wallet",
            icon: "$_",
          },
          {
            title: "Fair Launch",
            description: "No pre-sale, no team tokens, 100% fair distribution",
            icon: "//",
          },
        ],
        n = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } },
        l = {
          hidden: { opacity: 0, scaleY: 0 },
          visible: { opacity: 1, scaleY: 1, transition: { duration: 0.3 } },
        };
      function o() {
        return (0, i.jsxs)("section", {
          className: "py-20 px-4 relative scanline",
          children: [
            (0, i.jsx)("div", {
              className: "absolute inset-0 backdrop-blur-md bg-black/40",
            }),
            (0, i.jsx)("div", {
              className: "absolute inset-0 crt-effect pointer-events-none",
            }),
            (0, i.jsxs)("div", {
              className: "max-w-6xl mx-auto relative z-10",
              children: [
                (0, i.jsx)(s.P.h2, {
                  initial: { opacity: 0 },
                  whileInView: { opacity: 1 },
                  viewport: { once: !0 },
                  transition: { duration: 0.5 },
                  className:
                    "text-4xl md:text-5xl font-bold text-center retro-text mb-12 glitch",
                  "data-text": "Why Choose $IMG?",
                  children: "Why Choose $IMG?",
                }),
                (0, i.jsx)(s.P.div, {
                  variants: n,
                  initial: "hidden",
                  whileInView: "visible",
                  viewport: { once: !0 },
                  className:
                    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
                  children: r.map((e, t) =>
                    (0, i.jsxs)(
                      s.P.div,
                      {
                        variants: l,
                        className:
                          "retro-border p-6 hover:bg-white/5 transition-all duration-300 transform hover:scale-105 group backdrop-blur-sm",
                        children: [
                          (0, i.jsx)("div", {
                            className:
                              "font-mono text-2xl mb-4 opacity-60 group-hover:text-white/80 transition-colors duration-300",
                            children: e.icon,
                          }),
                          (0, i.jsx)("h3", {
                            className: "text-xl font-bold mb-2 retro-text",
                            children: e.title,
                          }),
                          (0, i.jsx)("p", {
                            className: "opacity-80",
                            children: e.description,
                          }),
                        ],
                      },
                      t
                    )
                  ),
                }),
              ],
            }),
          ],
        });
      }
    },
    8262: (e, t, a) => {
      "use strict";
      a.d(t, { default: () => n });
      var i = a(5155),
        s = a(6813);
      function r() {
        return (0, i.jsxs)("svg", {
          width: "200",
          height: "80",
          viewBox: "0 0 200 80",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          className: "glitch-effect",
          children: [
            (0, i.jsxs)("defs", {
              children: [
                (0, i.jsxs)("filter", {
                  id: "glitch",
                  children: [
                    (0, i.jsx)("feColorMatrix", {
                      in: "SourceGraphic",
                      type: "matrix",
                      values: "1 0 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 1 0",
                    }),
                    (0, i.jsx)("feOffset", { dx: "-3", dy: "0" }),
                    (0, i.jsx)("feGaussianBlur", {
                      stdDeviation: "1",
                      result: "blur",
                    }),
                    (0, i.jsx)("feColorMatrix", {
                      type: "matrix",
                      values: "1 0 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 1 0",
                    }),
                  ],
                }),
                (0, i.jsxs)("filter", {
                  id: "glow",
                  children: [
                    (0, i.jsx)("feGaussianBlur", {
                      stdDeviation: "2",
                      result: "coloredBlur",
                    }),
                    (0, i.jsx)("feFlood", {
                      floodColor: "#00ff00",
                      floodOpacity: "0.3",
                    }),
                    (0, i.jsx)("feComposite", {
                      in2: "coloredBlur",
                      operator: "in",
                    }),
                    (0, i.jsxs)("feMerge", {
                      children: [
                        (0, i.jsx)("feMergeNode", {}),
                        (0, i.jsx)("feMergeNode", { in: "SourceGraphic" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, i.jsx)("style", {
              children:
                "\n          .glitch-effect {\n            animation: glitch 3s infinite;\n            filter: url(#glow);\n          }\n          @keyframes glitch {\n            0% { filter: url(#glitch) url(#glow); }\n            1% { filter: none; }\n            2% { filter: url(#glitch) url(#glow); }\n            3% { filter: none; }\n            5% { filter: url(#glitch) url(#glow); }\n            6% { filter: none; }\n            100% { filter: url(#glow); }\n          }\n          .logo-path {\n            stroke: #00ff00;\n            stroke-opacity: 0.8;\n            animation: pathGlow 2s ease-in-out infinite;\n          }\n          @keyframes pathGlow {\n            0%, 100% { stroke-opacity: 0.8; }\n            50% { stroke-opacity: 0.4; }\n          }\n          .logo-text {\n            fill: #00ff00;\n            font-family: monospace;\n            font-weight: bold;\n            animation: textPulse 2s ease-in-out infinite;\n          }\n          @keyframes textPulse {\n            0%, 100% { fill-opacity: 1; }\n            50% { fill-opacity: 0.7; }\n          }\n        ",
            }),
            (0, i.jsx)("path", {
              d: "M20 40L40 20H160L180 40L160 60H40L20 40Z",
              fill: "rgba(0, 255, 0, 0.1)",
              stroke: "currentColor",
              strokeWidth: "2",
              className: "logo-path",
            }),
            (0, i.jsx)("text", {
              x: "50%",
              y: "50%",
              dominantBaseline: "middle",
              textAnchor: "middle",
              className: "logo-text text-2xl",
              children: "NEW",
            }),
          ],
        });
      }
      function n() {
        return (0, i.jsxs)("section", {
          className:
            "min-h-screen flex items-center justify-center px-4 py-20 relative",
          children: [
            (0, i.jsx)("div", {
              className:
                "absolute inset-0 backdrop-blur-sm bg-black/20 pointer-events-none",
            }),
            (0, i.jsx)("div", {
              className: "absolute inset-0 crt-effect pointer-events-none",
            }),
            (0, i.jsxs)("div", {
              className: "text-center relative z-10 pointer-events-auto",
              children: [
                (0, i.jsx)(s.P.div, {
                  initial: { opacity: 0, scale: 0.8 },
                  animate: { opacity: 1, scale: 1 },
                  transition: { duration: 0.5 },
                  className: "mb-8",
                  children: (0, i.jsx)(r, {}),
                }),
                (0, i.jsx)(s.P.h1, {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  transition: { duration: 0.8 },
                  className:
                    "text-6xl md:text-7xl font-bold retro-text mb-6 glitch",
                  "data-text": "Guaranteed Residual Income",
                  children: "Guaranteed Residual Income",
                }),
                (0, i.jsx)(s.P.p, {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  transition: { duration: 0.8, delay: 0.2 },
                  className: "text-xl md:text-2xl mb-8 max-w-2xl mx-auto",
                  children:
                    "Hold $NEW tokens and enjoy effortless Ethereum rewards every few minutes.",
                }),
                (0, i.jsxs)(s.P.div, {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  transition: { duration: 0.8, delay: 0.4 },
                  className: "flex gap-4 justify-center",
                  children: [
                    (0, i.jsx)("a", {
                      href: "buylink",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className:
                        "retro-border px-8 py-3 font-semibold hover:bg-white/5 transition-all duration-300 transform hover:scale-105",
                      children: "Buy Now",
                    }),
                    (0, i.jsxs)("div", {
                      className: "flex gap-4",
                      children: [
                        (0, i.jsxs)("a", {
                          href: "dexslink",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className:
                            "retro-border px-6 py-3 font-semibold hover:bg-white/5 transition-all duration-300 transform hover:scale-105 flex items-center gap-2",
                          children: [
                            (0, i.jsx)("span", {
                              className: "font-mono",
                              children: "\uD83D\uDCCA",
                            }),
                            "Chart",
                          ],
                        }),
                        (0, i.jsx)("a", {
                          href: "twitterlink",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className:
                            "retro-border px-6 py-3 font-semibold hover:bg-white/5 transition-all duration-300 transform hover:scale-105 flex items-center gap-2",
                          children: (0, i.jsx)("span", {
                            className: "font-mono",
                            children: "\uD835\uDD4F",
                          }),
                        }),
                        (0, i.jsx)("a", {
                          href: "tglink",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className:
                            "retro-border px-6 py-3 font-semibold hover:bg-white/5 transition-all duration-300 transform hover:scale-105 flex items-center gap-2",
                          children: (0, i.jsx)("span", {
                            className: "font-mono",
                            children: "\uD83D\uDCF1",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    7257: (e, t, a) => {
      "use strict";
      a.d(t, { default: () => l });
      var i = a(5155),
        s = a(6813),
        r = a(2115);
      let n = () => {
        let [e, t] = (0, r.useState)(1e5),
          [a, n] = (0, r.useState)("100,000"),
          [l, o] = (0, r.useState)("1,000,000"),
          [c, d] = (0, r.useState)(0),
          [x, m] = (0, r.useState)(0);
        return (
          (0, r.useEffect)(() => {
            let t = 0.05 * e;
            d(t), m((Number(l.replace(/,/g, "")) / 1e9) * t);
          }, [e, l]),
          (0, i.jsxs)(s.P.div, {
            initial: { opacity: 0, scaleX: 0 },
            whileInView: { opacity: 1, scaleX: 1 },
            viewport: { once: !0 },
            transition: { duration: 0.5 },
            className:
              "retro-border p-8 transition-all duration-300 hover:bg-[#00ff00]/10 group w-full max-w-2xl mx-auto relative z-20",
            children: [
              (0, i.jsx)("h3", {
                className: "text-2xl font-bold retro-text mb-6",
                children: "[Rewards_Calculator]",
              }),
              (0, i.jsxs)("div", {
                className: "space-y-6 font-mono",
                children: [
                  (0, i.jsxs)("div", {
                    className: "space-y-2",
                    children: [
                      (0, i.jsx)("label", {
                        className: "block opacity-80",
                        children: "24h Volume (USD)",
                      }),
                      (0, i.jsx)("input", {
                        type: "text",
                        value: a,
                        onChange: (e) => {
                          let a = Number(e.target.value.replace(/[^0-9]/g, ""));
                          t(a), n(a.toLocaleString());
                        },
                        className:
                          "w-full px-4 py-2 bg-black/50 border border-[#00ff00]/30 rounded focus:border-[#00ff00] focus:outline-none transition-colors text-white relative z-30",
                      }),
                      (0, i.jsxs)("div", {
                        className: "flex justify-between text-sm opacity-60",
                        children: [
                          (0, i.jsx)("span", { children: "$0" }),
                          (0, i.jsxs)("span", {
                            children: ["$", e.toLocaleString()],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className: "space-y-2",
                    children: [
                      (0, i.jsx)("label", {
                        className: "block opacity-80",
                        children: "Your $IMG Holdings",
                      }),
                      (0, i.jsx)("input", {
                        type: "text",
                        value: l,
                        onChange: (e) => {
                          o(
                            Number(
                              e.target.value.replace(/[^0-9]/g, "")
                            ).toLocaleString()
                          );
                        },
                        className:
                          "w-full px-4 py-2 bg-black/50 border border-[#00ff00]/30 rounded focus:border-[#00ff00] focus:outline-none transition-colors text-white relative z-30",
                        placeholder: "Enter your token amount",
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className: "mt-8 space-y-4 p-4 bg-black/30 rounded",
                    children: [
                      (0, i.jsxs)("div", {
                        className: "flex justify-between items-center",
                        children: [
                          (0, i.jsx)("span", {
                            className: "opacity-80",
                            children: "Daily Rewards Pool:",
                          }),
                          (0, i.jsxs)("span", {
                            className: "text-[#00ff00]",
                            children: ["$", c.toLocaleString()],
                          }),
                        ],
                      }),
                      (0, i.jsxs)("div", {
                        className: "flex justify-between items-center",
                        children: [
                          (0, i.jsx)("span", {
                            className: "opacity-80",
                            children: "Your Daily Earnings:",
                          }),
                          (0, i.jsxs)("span", {
                            className: "text-[#00ff00]",
                            children: ["$", x.toLocaleString()],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      };
      function l() {
        return (0, i.jsxs)("section", {
          className: "py-20 px-4 relative scanline",
          children: [
            (0, i.jsx)("div", {
              className: "absolute inset-0 backdrop-blur-md bg-black/40",
            }),
            (0, i.jsx)("div", {
              className: "absolute inset-0 crt-effect pointer-events-none",
            }),
            (0, i.jsxs)("div", {
              className: "max-w-6xl mx-auto relative z-10",
              children: [
                (0, i.jsxs)(s.P.div, {
                  initial: { opacity: 0 },
                  whileInView: { opacity: 1 },
                  viewport: { once: !0 },
                  transition: { duration: 0.5 },
                  className: "text-center mb-16",
                  children: [
                    (0, i.jsx)("h2", {
                      className:
                        "text-4xl md:text-5xl font-bold retro-text mb-6 glitch",
                      "data-text": "Automatic Ethereum Rewards",
                      children: "Automatic Ethereum Rewards",
                    }),
                    (0, i.jsx)("p", {
                      className:
                        "text-xl opacity-80 max-w-3xl mx-auto font-mono",
                      children:
                        "> Every 5 minutes, holders receive Ethereum rewards automatically distributed to their wallets _",
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  className:
                    "grid grid-cols-1 lg:grid-cols-3 gap-8 items-start",
                  children: [
                    (0, i.jsxs)("div", {
                      className:
                        "lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8",
                      children: [
                        (0, i.jsxs)(s.P.div, {
                          initial: { opacity: 0, scaleX: 0 },
                          whileInView: { opacity: 1, scaleX: 1 },
                          viewport: { once: !0 },
                          transition: { duration: 0.5 },
                          className:
                            "retro-border p-8 transition-all duration-300 hover:bg-[#00ff00]/10 group h-full",
                          children: [
                            (0, i.jsx)("h3", {
                              className: "text-2xl font-bold retro-text mb-6",
                              children: "[How_It_Works]",
                            }),
                            (0, i.jsxs)("ul", {
                              className: "space-y-4 font-mono",
                              children: [
                                (0, i.jsxs)("li", {
                                  className:
                                    "flex items-start space-x-3 group/item hover:translate-x-1 transition-transform duration-300",
                                  children: [
                                    (0, i.jsx)("span", {
                                      className:
                                        "opacity-60 group-hover/item:text-[#00ff00] transition-colors duration-300",
                                      children: ">",
                                    }),
                                    (0, i.jsx)("p", {
                                      children:
                                        "5% tax is collected from every buy and sell transaction",
                                    }),
                                  ],
                                }),
                                (0, i.jsxs)("li", {
                                  className:
                                    "flex items-start space-x-3 group/item hover:translate-x-1 transition-transform duration-300",
                                  children: [
                                    (0, i.jsx)("span", {
                                      className:
                                        "opacity-60 group-hover/item:text-[#00ff00] transition-colors duration-300",
                                      children: ">",
                                    }),
                                    (0, i.jsx)("p", {
                                      children:
                                        "Tax is automatically converted to Ethereum",
                                    }),
                                  ],
                                }),
                                (0, i.jsxs)("li", {
                                  className:
                                    "flex items-start space-x-3 group/item hover:translate-x-1 transition-transform duration-300",
                                  children: [
                                    (0, i.jsx)("span", {
                                      className:
                                        "opacity-60 group-hover/item:text-[#00ff00] transition-colors duration-300",
                                      children: ">",
                                    }),
                                    (0, i.jsx)("p", {
                                      children:
                                        "Smart contract distributes Ethereum to all holders every 5 minutes",
                                    }),
                                  ],
                                }),
                                (0, i.jsxs)("li", {
                                  className:
                                    "flex items-start space-x-3 group/item hover:translate-x-1 transition-transform duration-300",
                                  children: [
                                    (0, i.jsx)("span", {
                                      className:
                                        "opacity-60 group-hover/item:text-[#00ff00] transition-colors duration-300",
                                      children: ">",
                                    }),
                                    (0, i.jsx)("p", {
                                      children:
                                        "Rewards are proportional to your token holdings",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, i.jsxs)(s.P.div, {
                          initial: { opacity: 0, scaleX: 0 },
                          whileInView: { opacity: 1, scaleX: 1 },
                          viewport: { once: !0 },
                          transition: { duration: 0.5 },
                          className:
                            "retro-border p-8 transition-all duration-300 hover:bg-[#00ff00]/10 group h-full",
                          children: [
                            (0, i.jsx)("h3", {
                              className: "text-2xl font-bold retro-text mb-6",
                              children: "[Benefits]",
                            }),
                            (0, i.jsxs)("ul", {
                              className: "space-y-6 font-mono",
                              children: [
                                (0, i.jsxs)("li", {
                                  className:
                                    "flex items-center space-x-4 group/item hover:translate-x-1 transition-transform duration-300",
                                  children: [
                                    (0, i.jsx)("span", {
                                      className:
                                        "opacity-60 group-hover/item:text-[#00ff00] transition-colors duration-300",
                                      children: "[+]",
                                    }),
                                    (0, i.jsx)("p", {
                                      children:
                                        "Earn passive income in Ethereum just by holding",
                                    }),
                                  ],
                                }),
                                (0, i.jsxs)("li", {
                                  className:
                                    "flex items-center space-x-4 group/item hover:translate-x-1 transition-transform duration-300",
                                  children: [
                                    (0, i.jsx)("span", {
                                      className:
                                        "opacity-60 group-hover/item:text-[#00ff00] transition-colors duration-300",
                                      children: "[+]",
                                    }),
                                    (0, i.jsx)("p", {
                                      children:
                                        "No need to claim - rewards are automatic",
                                    }),
                                  ],
                                }),
                                (0, i.jsxs)("li", {
                                  className:
                                    "flex items-center space-x-4 group/item hover:translate-x-1 transition-transform duration-300",
                                  children: [
                                    (0, i.jsx)("span", {
                                      className:
                                        "opacity-60 group-hover/item:text-[#00ff00] transition-colors duration-300",
                                      children: "[+]",
                                    }),
                                    (0, i.jsx)("p", {
                                      children:
                                        "Frequent 5-minute distribution cycles",
                                    }),
                                  ],
                                }),
                                (0, i.jsxs)("li", {
                                  className:
                                    "flex items-center space-x-4 group/item hover:translate-x-1 transition-transform duration-300",
                                  children: [
                                    (0, i.jsx)("span", {
                                      className:
                                        "opacity-60 group-hover/item:text-[#00ff00] transition-colors duration-300",
                                      children: "[+]",
                                    }),
                                    (0, i.jsx)("p", {
                                      children:
                                        "Higher trading volume means more rewards",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, i.jsx)(n, {}),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    8482: (e, t, a) => {
      "use strict";
      a.d(t, { default: () => n });
      var i = a(5155),
        s = a(6813);
      let r = [
        { label: "Total Supply", value: "1,000,000,000", ascii: "[ 1B ]" },
        { label: "Initial Liquidity", value: "100%", ascii: "=====" },
        { label: "Tax", value: "5%", ascii: "< 5% >" },
        { label: "Fair Launch", value: "100%", ascii: ">>100<<" },
      ];
      function n() {
        return (0, i.jsxs)("section", {
          className: "py-20 px-4 crt-effect relative scanline",
          children: [
            (0, i.jsx)("div", {
              className:
                "absolute inset-0 backdrop-blur-md bg-black/40 crt-effect",
            }),
            (0, i.jsxs)("div", {
              className: "max-w-6xl mx-auto relative z-10",
              children: [
                (0, i.jsx)(s.P.h2, {
                  initial: { opacity: 0 },
                  whileInView: { opacity: 1 },
                  viewport: { once: !0 },
                  transition: { duration: 0.5 },
                  className:
                    "text-4xl md:text-5xl font-bold text-center retro-text mb-16 glitch",
                  "data-text": "Tokenomics",
                  children: "Tokenomics",
                }),
                (0, i.jsx)("div", {
                  className:
                    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
                  children: r.map((e, t) =>
                    (0, i.jsx)(
                      s.P.div,
                      {
                        initial: { opacity: 0 },
                        whileInView: { opacity: 1 },
                        viewport: { once: !0 },
                        transition: { duration: 0.5, delay: 0.1 * t },
                        className:
                          "retro-border p-6 transition-all duration-300 transform hover:scale-105 group hover:bg-white/5",
                        children: (0, i.jsxs)("div", {
                          className: "text-center",
                          children: [
                            (0, i.jsx)("div", {
                              className:
                                "font-mono text-xl mb-2 opacity-60 group-hover:text-white/80 transition-colors duration-300",
                              children: e.ascii,
                            }),
                            (0, i.jsx)("div", {
                              className:
                                "text-3xl lg:text-4xl font-bold retro-text mb-2 break-words",
                              children: e.value,
                            }),
                            (0, i.jsx)("div", {
                              className: "text-lg opacity-80",
                              children: e.label,
                            }),
                          ],
                        }),
                      },
                      t
                    )
                  ),
                }),
                (0, i.jsxs)(s.P.div, {
                  initial: { opacity: 0 },
                  whileInView: { opacity: 1 },
                  viewport: { once: !0 },
                  transition: { duration: 0.5, delay: 0.4 },
                  className:
                    "mt-16 text-center max-w-3xl mx-auto retro-border p-8 hover:bg-white/5 transition-all duration-300",
                  children: [
                    (0, i.jsx)("h3", {
                      className: "text-2xl font-bold retro-text mb-4",
                      children: "True Fair Launch",
                    }),
                    (0, i.jsx)("p", {
                      className: "text-lg opacity-80",
                      children:
                        "100% of the total supply is added to liquidity at launch, with no team tokens, no presale, and no max wallet limits. The 5% tax on transactions is automatically distributed as Ethereum rewards to all holders every 5 minutes.",
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [813, 441, 517, 358], () => t(2051)), (_N_E = e.O());
  },
]);
