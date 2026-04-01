import { scale, verticalScale } from "@/utils/styling";

export const colors = {
  primary: "#BF8F7E", // Main accent color for buttons, icons, and active states
  primaryLight: "rgba(184, 138, 121, 0.2)", // Light variant used for borders
  primaryDark: "#3D0F00", // Dark brown used in gradients
  text: "#5B5D4F", // Main typography color
  textLight: "#F9F9F9", // Light text used inside dark cards
  background: "#F9F9F9", // Main app background
  white: "#FFFFFF",
  black: "#000000",
  rose: "#ef4444",
  otherBubble: "#FFF1BF",
  myBubble: "#FFE1CC",
  green: "#16a34a",
  neutral50: "#F9F9F9", // Matched to background
  neutral100: "#f5f5f4",
  neutral200: "#e7e5e4",
  neutral300: "rgba(153, 153, 153, 0.27)", // Used in transparent gradients
  neutral350: "#CCCCCC",
  neutral400: "#a8a29e",
  neutral500: "#78716c",
  neutral600: "#57534e",
  neutral700: "#51553B", // Dark greenish-brown from banner gradients
  neutral800: "#5B5D4F", // Matched to dark text
  neutral900: "#272727", // Dark card background
};

export const spacingX = {
  _3: scale(3),
  _5: scale(5),
  _7: scale(7),
  _10: scale(10),
  _12: scale(12),
  _15: scale(15),
  _20: scale(20),
  _25: scale(25),
  _30: scale(30),
  _35: scale(35),
  _40: scale(40),
};

export const spacingY = {
  _5: verticalScale(5),
  _7: verticalScale(7),
  _10: verticalScale(10),
  _12: verticalScale(12),
  _15: verticalScale(15),
  _17: verticalScale(17),
  _20: verticalScale(20),
  _25: verticalScale(25),
  _30: verticalScale(30),
  _35: verticalScale(35),
  _40: verticalScale(40),
  _50: verticalScale(50),
  _60: verticalScale(60),
};

export const radius = {
  _3: verticalScale(3),
  _6: verticalScale(6),
  _10: verticalScale(10),
  _12: verticalScale(12),
  _15: verticalScale(15),
  _17: verticalScale(17),
  _20: verticalScale(20),
  _30: verticalScale(30),
  _40: verticalScale(40),
  _50: verticalScale(50),
  _60: verticalScale(60),
  _70: verticalScale(70),
  _80: verticalScale(80),
  _90: verticalScale(90),
  full: 200,
};
