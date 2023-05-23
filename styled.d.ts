import "styled-components";



declare module "styled-components" {
	export interface DefaultTheme {
		name: string,
		palette: {
			backgroundGradient: string
			colors: {
				red100: string;
				grey100: string;
			}
		}
	}
}