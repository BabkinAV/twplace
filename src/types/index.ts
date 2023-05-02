export interface productCategory {
  id: string;
  categoryName: string;
  categoryImg: { categoryImagePath: string; altImageText: string };
}

export interface Product {
	id: string,
	title: string,
	price: {
		priceCurrent: number,
		priceOld?: number,
		discount?: number
	},
	imageLink: string
}
