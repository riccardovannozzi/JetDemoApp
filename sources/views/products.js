import {JetView} from "webix-jet";
import DataView from "views/data";
import {products} from "models/products";


export default class ProductsView extends JetView {
	config(){
		return {
			rows:[
				{
					view:"toolbar", css:"subbar", padding:0,
					elements:[
						{
							css: "title", height: 50, borderless:true,
							template: "<div class='header'>Products</div><div class='details'>( all products )</div>"
						}
					]
				},
				{ $subview:DataView }
			]
		};
	}
	ready(view){
		const grid = view.queryView({view:"datatable"});
		grid.sync(products);
	}
}
