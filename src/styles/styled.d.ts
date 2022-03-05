import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      main: string;

      background: {
        primary: string;
        secondary: string;
        tertiary: string;
      };

      text: {
        white: string;
        black: string;
        gray: string;
      };

      status: {
        success: string;
        info: string;
        warning: string;
        danger: string;
      };
    };

    shadows: {
      colors: {
        light: string;
        medium: string;
        dark: string;
      };

      elevation: {
        sm: string;
        md: string;
        lg: string;
      };
    };

    animation: {
      duration: {
        instant: string;
        faster: string;
        fast: string;
        normal: string;
        slow: string;
        slower: string;
      };
    };
  }
}
