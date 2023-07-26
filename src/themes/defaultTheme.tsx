import { DefaultTheme } from 'styled-components';

export const defaultTheme: DefaultTheme = {
  name: 'default',
  palette: {
    colors: {
      red100: '#FF4343',
      grey100: 'rgba(70, 70, 70, 0.55)',
    },
    shadows: {
      borderShadow: '0px 0px 8px rgba(0, 0, 0, 0.08);',
    },
    gradients: {
      backgroundGradient:
        'linear-gradient(96.78deg, #f64d4d -57.09%, #4d5ef6 101.17%)',
      gradientPink:
        'linear-gradient(211.73deg,rgba(52, 85, 216, 0.1) -46.71%, rgba(255, 67, 67, 0.1) 121.33%)',
			gradientLight: ' linear-gradient(144deg, rgba(246, 77, 77, 0.20) 0%, rgba(77, 94, 246, 0.20) 100%)'
    },
  },
	breakpoints: {
		xxl: 1400,
		xl: 1200,
		lg: 992,
		md: 768,
		sm: 576,
	}
};
