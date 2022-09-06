import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

function createGradient(color1, color2) {
  return `linear-gradient(to bottom, ${color1}, ${color2})`;
}

export const COLORS = {
  // ------------------------------------------ OLD COLORS ------------------------------------------
  // white: '#fff',
  neutral1: '#f5f7fa',
  neutral2: '#eff1f7',
  neutral3: '#eaecf4',
  neutral4: '#d6deea',
  neutral5: '#b5bdc9',
  neutral6: '#8492a7',
  neutral7: '#526880',
  neutral8: '#44576b',
  black: '#333',
  primary050: '#e8f3fc',
  // primary100: '#bbdaf7',
  // primary200: '#77b6ef',
  // primary300: '#499dea',
  // primary400: '#33AAFF',
  // primary500: '#1c85e5',
  // primary600: '#1978ce',
  // primary700: '#166ab7',
  secondary050: '#fef7ef',
  secondary100: '#fcefde',
  secondary200: '#f9e0bd',
  secondary300: '#f7d09d',
  // secondary400: '#f2b96b',
  // secondary500: '#f1b15b',
  secondary600: '#e68730',
  // secondary700: '#df7424',
  secondary800: '#c18e49',
  secondary900: '#a97c40',
  tertiary100: '#eae7fc',
  tertiary200: '#cec7f7',
  tertiary500: '#9c8fee',
  tertiary600: '#7566e3',
  tertiary700: '#5042d5',
  tertiary800: '#6F1BF8',
  error: '#c5053e',
  success100: '#1BF88E',
  // ------------------------------------------ NEW COLORS ------------------------------------------
  //  ------------------------------------------ TEXT ------------------------------------------
  white: '#FFFFFF',
  text200: 'rgba(51, 55, 77, 0.2)',
  text300: '#B8B9C1',
  text400: '#ADAFB8',
  text600: '#858794',
  text700: 'rgba(51, 55, 77, 0.7)',
  text900: '#33374D',
  // ------------------------------------------ PRIMARY ------------------------------------------
  primary50: '#EBF5FF',
  primary100: '#D5EBFF',
  primary200: '#C1E1FF',
  primary300: '#9FD1FF',
  primary400: '#33AAFF',
  primary500: '#2E9BFF',
  primary600: '#298CE6',
  primary700: '#257ECF',
  primary800: '#2271BA',
  primary900: '#1E66A7',
  primaryContrast: 'rgba(255, 255, 255, 0.95)',
  // gradient: 'linear-gradient(134.03deg, #2E9BFF 0.4%, #3AD1A9 103.19%)'
  primaryOutlinedRestingBorder: 'rgba(46, 155, 255, 0.5)',
  primaryOutlinedHoverBackground: 'rgba(235, 245, 255, 1)',
  primaryContainedHoverBackground: `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), #2E9BFF`,
  // ------------------------------------------ SECONDARY ------------------------------------------
  secondary50: '#EFFBF8',
  secondary400: '#40E6BA',
  secondary700: '#2FA989',
  secondary500: '#3AD1A9',
  secondaryContrast: 'rgba(255, 255, 255, 0.95)',
  secondaryOutlinedRestingBorder: 'rgba(58, 209, 169, 0.5)',
  secondaryOutlinedHoverBackground: 'rgba(239, 251, 248, 1)',
  secondaryContainedHoverBackground: `linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), #F3F5F8`,
  // ------------------------------------------ RED ------------------------------------------
  redLight: '#FF8267',
  redDark: '#AB382C',
  redMain: '#FF5247',
  redContrast: '#FFFFFF',
  redOutlinedRestingBorder: 'rgba(254, 109, 77, 0.5)',
  redOutlinedHoverBackground: 'rgba(255, 243, 241, 1)',
  // containedHoverBackground: 'linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), #FE6D4D'
  // alertContent: 'linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), #ED6C02',
  // background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), #ED6C02',
  // ------------------------------------------ ORANGE ------------------------------------------
  orangeMain: '#F56700',
  // ------------------------------------------ YELLOW ------------------------------------------
  yellowMain: '#FFA723',
  // ------------------------------------------ ACTION ------------------------------------------
  actionActive: 'rgba(51, 55, 77, 0.54)',
  actionHover: 'rgba(0, 0, 0, 0.04)',
  actionDisabled: 'rgba(51, 55, 77, 0.26)',
  actionSelected: 'rgba(0, 0, 0, 0.08)',
  actionDisabledBackground: 'rgba(239, 239, 241, 1)',
  actionFocus: 'rgba(0, 0, 0, 0.12)',
  // ------------------------------------------ BACKGROUND ------------------------------------------
  backgroundPaper: '#FFFFFF',
  backgroundDefault: '#F1F5F9',
  // ------------------------------------------ OTHER ------------------------------------------
  divider: '#F1F5F9',
  outlinedBorder: '#DDE4EE',
  backdropOverlay: 'rgba(0, 0, 0, 0.5)',
  filledInputBackground: 'rgba(51, 55, 77, 0.05)',
  standardInputLine: 'rgba(51, 55, 77, 0.12)',
  snackbar: '#333333',
  ratingActive: '#FFB400',
  // ------------------------------------------ COMMON ------------------------------------------
  commonWhite: '#FFFFFF',
  commonBlack: '#000000',
  // ------------------------------------------ GRAYSCALE ------------------------------------------
  //   gMain: 'linear-gradient(0deg, #858794, #858794), #F4F6F8',
  gDark: '#424242',
  gWhite: '#FFFFFF',
  grey050: '#F1F5F9',
  grey100: '#E6E8EC',
  grey200: '#D6D7DB',
  grey300: '#BBBBC2',
  grey400: '#9FA0AB',
  grey500: '#858794',
  grey600: '#646881',
  grey700: '#33374D',
  grey800: '#1C2636',
  grey900: '#10182D',
  grayScaleOutlinedRestingBorder: 'rgba(158, 158, 158, 0.2)',
  grayScaleOutlinedHoverBackground: 'rgba(158, 158, 158, 0.12)',
  // containedHoverBackground: 'linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), #F4F6F8'
  // ------------------------------------------ SECONDARY BUTTON ------------------------------------------
  secondaryButtonMain: '#F3F5F8',
  secondaryButtonLight: '#F4F7FA',
  secondaryButtonDark: '#E0E3E7',
  secondaryButtonContrast: '#2E9BFF',
  secondaryButtonOutlineRestingHover: 'rgba(27, 115, 248, 0.5)',
  secondaryButtonOutlinedHoverBackground: 'rgba(27, 115, 248, 0.08)',
  // containedHoverBackground: 'linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), #F3F5F8'
  // ------------------------------------------ CHART ------------------------------------------
  chartGray: '#E7E7EA',
  chartRed: '#FE6D4D',
  chartBlue: '#33AAFF'
};

export const APEX_CHART_COLOR = [
  COLORS.secondary500,
  '#2E9BFF',
  '#E5BCE9',
  '#54D5DD',
  '#DADBDF',
  '#ADAFB8',
  '#F7931A',
  COLORS.secondary500,
  '#2E9BFF',
  '#E5BCE9',
  '#54D5DD',
  '#DADBDF',
  '#ADAFB8',
  '#F7931A',
  COLORS.secondary500,
  '#2E9BFF',
  '#E5BCE9',
  '#54D5DD',
  '#DADBDF',
  '#ADAFB8',
  '#F7931A'
];

// PRIMARY | SECONDARY | ERROR | WARNING
// SETUP COLORS
const PRIMARY = {
  lighter: COLORS.primary300,
  light: COLORS.primary400,
  main: COLORS.primary500,
  dark: COLORS.primary800, // hover
  darker: COLORS.primary900
};
const SECONDARY = {
  lighter: COLORS.secondary400,
  light: COLORS.secondary400,
  main: COLORS.secondary500,
  dark: COLORS.secondary700, // hover
  darker: COLORS.secondary700
};
const INFO = {
  lighter: '#E9FCD4',
  light: COLORS.neutral4,
  main: COLORS.neutral3,
  dark: COLORS.neutral4,
  darker: '#08660D'
};
const SUCCESS = {
  lighter: '#D0F2FF',
  light: COLORS.neutral1,
  main: COLORS.primary050,
  dark: COLORS.primary100,
  darker: '#04297A'
};
const WARNING = {
  lighter: COLORS.orangeMain,
  light: COLORS.orangeMain,
  main: COLORS.orangeMain,
  dark: COLORS.orangeMain,
  darker: COLORS.orangeMain
};
const ERROR = {
  lighter: COLORS.redLight,
  light: COLORS.redLight,
  main: COLORS.redMain,
  dark: COLORS.redDark,
  darker: COLORS.redDark
};

const GRAY = {
  lighter: COLORS.grey300,
  light: COLORS.grey400,
  main: COLORS.grey100,
  dark: COLORS.grey800,
  darker: COLORS.grey900
};

const GREY = {
  // old grey
  0: '#FFFFFF',
  100: '#F9FAFB',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#919EAB',
  600: '#637381',
  700: '#454F5B',
  800: '#212B36',
  900: '#161C24',
  500_8: alpha('#919EAB', 0.08),
  500_12: alpha('#919EAB', 0.12),
  500_16: alpha('#919EAB', 0.16),
  500_24: alpha('#919EAB', 0.24),
  500_32: alpha('#919EAB', 0.32),
  500_48: alpha('#919EAB', 0.48),
  500_56: alpha('#919EAB', 0.56),
  500_80: alpha('#919EAB', 0.8)
};

const GRADIENTS = {
  primary: createGradient(PRIMARY.light, PRIMARY.main),
  info: createGradient(INFO.light, INFO.main),
  success: createGradient(SUCCESS.light, SUCCESS.main),
  warning: createGradient(WARNING.light, WARNING.main),
  error: createGradient(ERROR.light, ERROR.main)
};

const CHART_COLORS = {
  violet: ['#826AF9', '#9E86FF', '#D0AEFF', '#F7D2FF'],
  blue: ['#2D99FF', '#83CFFF', '#A5F3FF', '#CCFAFF'],
  green: ['#2CD9C5', '#60F1C8', '#A4F7CC', '#C0F2DC'],
  yellow: ['#FFE700', '#FFEF5A', '#FFF7AE', '#FFF3D6'],
  red: ['#FF6C40', '#FF8F6D', '#FFBD98', '#FFF2D4']
};

const NAV_COLORS = {
  enabled: '#414262',
  disabled: '#CCD4E0'
};

const COMMON = {
  common: { black: '#000', white: '#fff' },
  primary: { ...PRIMARY, contrastText: '#fff', red: '#FE6D4D' },
  secondary: { ...SECONDARY, contrastText: '#fff' },
  info: { ...INFO, contrastText: '#8492a7' },
  success: { ...SUCCESS, contrastText: '#166ab7' },
  warning: { ...WARNING, contrastText: '#e68730' },
  error: { ...ERROR, contrastText: '#fff' },
  gray: { ...GRAY, contrastText: COLORS.grey600 },
  red: { ...ERROR, contrastText: '#fff' },
  grey: GREY,
  gradients: GRADIENTS,
  chart: CHART_COLORS,
  divider: GREY[500_24],
  nav: NAV_COLORS,
  action: {
    // hover: GREY[500_8],
    // selected: GREY[500_16],
    hover: COLORS.primary050,
    selected: COLORS.primary050,

    disabled: GREY[500_80],
    disabledBackground: GREY[500_24],
    focus: GREY[500_24],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48
  }
};

const palette = {
  light: {
    ...COMMON,
    text: { primary: GREY[800], secondary: GREY[600], disabled: GREY[500] },
    background: { paper: '#fff', default: '#fff', neutral: GREY[200] },
    action: { active: GREY[600], ...COMMON.action, disabled: COLORS.outlinedBorder }
  },
  dark: {
    ...COMMON,
    text: { primary: '#fff', secondary: GREY[500], disabled: GREY[600] },
    background: { paper: GREY[800], default: GREY[900], neutral: GREY[500_16] },
    action: { active: GREY[500], ...COMMON.action }
  }
};

export default palette;
