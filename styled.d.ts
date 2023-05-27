import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    palette: {
      colors: {
        red100: string;
        grey100: string;
      };
      shadows: {
        borderShadow: string;
      };
      gradients: {
        backgroundGradient: string;
        gradientPink: string;
      };
    };
  }
}
