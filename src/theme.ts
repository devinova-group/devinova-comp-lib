import { injectGlobal } from "@emotion/css";

injectGlobal`
@import url('https://fonts.googleapis.com/css2?family=Neucha&family=Noto+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Poiret+One&family=Quicksand:wght@300;400;500;600;700&display=swap');
`;

export const colorPalette = {
  DeviDaisy: {
    50: "#ECE8F6",
    100: "#CFC6E8",
    200: "#B0A1DA",
    300: "#917BCC",
    400: "#785EC0",
    500: "#6044B5",
    600: "#573FAF",
    700: "#4A37A6",
    800: "#3F319D",
    900: "#2B268D",
  },
  Oath: {
    50: "#FFF4FF",
    100: "#FAF2FF",
    200: "#F5ECFE",
    300: "#E9E1FA",
    400: "#C7BED7",
    500: "#A8A1B8",
    600: "#7E778D",
    700: "#6B6278",
    800: "#4A4458",
    900: "#292336",
  },
  Background: {
    Background: "#FFFEFB",
  },
  LightMode: {
    Primary: "#6044B5",
    Secondary: "#4C3A80",
  },
  DarkMode: {
    Highlight: "#A689FF",
    Purple: "#7B4EFF",
  },
  lightBadgeColor: {
    InActive: "#F03738",
    Active: "#3CC13B",
    Error: "#CC9428",
    Disabled: "#B4B4B4",
    Primary: "#4B88CF",
  },
  darkBadgeColor: {
    InActive: "#FF6768",
    Active: "#3CC13B",
    Error: "#FFC34E",
    Disabled: "#B4B4B4",
    Primary: "#B2C3FF",
  },
  Text: {
    Textv1: "#08011C",
    Textv2: "#585858",
    TextWhite: "#FFFFFF",
    TextBlack: "#000000",
  },
  Status: {
    Error: "#C12945",
    Positive: "#26962B",
    Positive2: "#9AE79D",
  },
};

export const typography = {
  Neucha: "Neucha",
  Quicksand: "Quicksand",
  PoiretOne: "Poiret One",
  NotoSans: "Noto Sans",
};
