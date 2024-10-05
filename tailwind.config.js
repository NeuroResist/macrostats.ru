/** @type {import("tailwindcss").Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "Dark-blue": "#060a44", // темный синий (хедер)
        "Logo-blue": "#e5edff", // лого синий (для всех букв логотипа)
        "Dark-gray": "#b4b5be", // темный серый (верхняя часть блока, где полное название)
        "Light-gray": "#e6e9ef", // светлый серый (нижняя часть блока с метадатой)
        "Bright-blue": "#0b21bf", // яркий синий для заголовков (полных названий)
        "Black-text": "#15161a", // черный для текста
        "Gray-text": "#2b2e3b", // серый для текста
        Background: "#f4f4f4", // фон всего сайта
      },
      scrollbar: ["rounded"],
    },
    fontFamily: {
      lucon: ["Lucon", "sans-serif"],
    },
    boxShadow: {
      "close-button": "0 2px 16px 0 rgba(0, 0, 0, 0.078)",
      point: "0px 0px 20px 0px #0000001A",
      base: "0px 2px 16px 0px #00000014",
      points: "1px 1px 4px 0px #0000001A",
      none: "0 0 #000000",
    },
    screens: {
      md: { max: "768px" },
      lg: { max: "1024px" },
    },
    rotate: {
      25: "25deg",
    },
    borderRadius: {
      none: "0",
      default: "4px",
      full: "100%",
      2: "2px",
      4: "4px",
      5: "5px",
      8: "8px",
      12: "12px",
      16: "16px",
      20: "20px",
      30: "30px",
    },
    borderWidth: {
      unset: "unset",
      none: "none",
      0.5: "0.5px",
      0: "0",
      1: "1px",
      2: "2px",
      3: "3px",
      4: "4px",
      8: "8px",
      12: "12px",
      16: "16px",
    },
    spacing: {
      auto: "auto",
      unset: "unset",
      none: "none",
      0: "0",
      1: "1px",
      2: "2px",
      3: "3px",
      4: "4px",
      5: "5px",
      6: "6px",
      7: "7px",
      8: "8px",
      9: "9px",
      10: "10px",
      11: "11px",
      12: "12px",
      14: "14px",
      16: "16px",
      20: "20px",
      22: "22px",
      24: "24px",
      28: "28px",
      32: "32px",
      34: "34px",
      36: "36px",
      40: "40px",
      44: "44px",
      48: "48px",
      52: "52px",
      56: "56px",
      60: "60px",
      64: "64px",
      68: "68px",
      72: "72px",
      76: "76px",
      80: "80px",
      84: "84px",
      92: "92px",
      98: "98px",
      100: "100px",
      114: "114px",
      120: "120px",
      128: "128px",
      140: "140px",
      192: "192px",
      200: "200px",
      218: "218px",
      260: "260px",
      300: "300px",
      320: "320px",
      max: "max-content",
    },
    margin: (theme, { negative }) => ({
      ...theme("spacing"),
      ...negative(theme("spacing")),
    }),
    width: (theme) => ({
      full: "100%",
      screen: "100vw",
      "fit-content": "fit-content",
      inherit: "inherit",
      min: "min-content",
      ...theme("spacing"),
    }),
    height: (theme) => ({
      full: "100%",
      screen: "100vh",
      "fit-content": "fit-content",
      inherit: "inherit",
      ...theme("spacing"),
      "75%": "75%",
      "50%": "50%",
    }),
    maxHeight: (theme) => ({
      ...theme("height"),
      screen: "100vh",
    }),
    maxWidth: (theme) => theme("width"),
    minHeight: (theme) => theme("maxHeight"),
    minWidth: (theme) => theme("width"),
    fontSize: {
      header: ["80px", "60px"],
      headerDescription: ["14px", "20px"],
      sectionLower: ["15px", "20px"],
      sectionData: ["12px", "20px"],
      headerSection: ["20px", "20px"],
    },
    keyframes: {
      "slide-up": {
        "0%": {
          transform: " translateY(100%)",
          opacity: "0",
        },
        "100%": {
          transform: " translateY(0)",
          opacity: "1",
        },
      },
      "fade-out": {
        "0%": {
          transform: "translateY(0)",
          opacity: "1",
        },
        "100%": {
          transform: " translateY(-100%)",
          opacity: "0",
        },
      },
      "bounce-pulse": {
        "0%, 100%": {
          transform: "translateY(0) scale(1)",
          background: "#A9A8B0" /*"#A73AFD",*/,
          animationTimingFunction: "cubic-bezier(0.4, 0, 0.6, 1)",
        },
        "50%": {
          transform: "translateY(-20%) scale(1.02)",
          background: "#C8C8D1" /*"#A73AFD1E",*/,
          animationTimingFunction: "cubic-bezier(0,0,0.2,1)",
        },
      },
      spin: {
        "0%": { transform: "rotate(0deg)" },
        "100%": { transform: "rotate(360deg)" },
      },
      dash: {
        "0%": {
          strokeDasharray: "1, 200",
          strokeDashoffset: "0",
        },
        "50%": {
          strokeDasharray: "89, 200",
          strokeDashoffset: "-35px",
        },
        "100%": {
          strokeDasharray: "89, 200",
          strokeDashoffset: "-124px",
        },
      },
      grow: {
        from: {
          transform: "scale(0)",
          background: "#B9B9C1",
        },
        to: {
          transform: "scale(1)",
          background: "white",
        },
      },
    },
    animation: {
      "slide-up": "slide-up 0.5s ease-out forwards",
      "fade-out": "fade-out 0.5s ease-out forwards",
      "bounce-pulse": "bounce-pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      spin: "spin 1.5s linear infinite",
      "spin-slow": "spin 2s linear infinite",
      dash: "dash 1.5s ease-in-out infinite",
      grow: "grow 0.5s ease-out forwards",
    },
  },
};
