export class Product {
	constructor(
		public name: string,
		public price: number,
		public imagePath: string[],
		public rating: number,
		public teaser: string,
		public details: Object
		) {

	}
}
