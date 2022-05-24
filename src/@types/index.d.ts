export type Status = "waiting" | "using" | "collected";

export interface User {
  id: string;
  username: string;
  email: string;
}
export interface Reservation {
  id: string;
  requester: string;
  equipment: string;
  status: Status;
  place: string;
  date: string;
  entry_time: string;
  exit_time: string;
}
export interface Theme {
  title: string;
  colors: Colors;
  shadows: Shadows;
  animation: Animation;
}

export type Colors = {
  main: string;
  background: BackgroundColor;
  text: TextColor;
  status: StatusColor;
};

export type Shadows = {
  colors: ShadowColors;
  elevation: Elevation;
};

export type Animation = {
  duration: Duration;
};

export type BackgroundColor = {
  primary: string;
  secondary: string;
  tertiary: string;
  white: string;
  black: string;
};

export type TextColor = {
  white: string;
  black: string;
  gray: string;
};

export type StatusColor = {
  success: string;
  info: string;
  warning: string;
  danger: string;
};

export type ShadowColors = {
  light: string;
  medium: string;
  dark: string;
};

export type Elevation = {
  sm: string;
  md: string;
  lg: string;
};

export type Duration = {
  instant: string;
  faster: string;
  fast: string;
  normal: string;
  slow: string;
  slower: string;
};
