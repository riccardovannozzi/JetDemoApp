import {JetView} from "webix-jet";

export default class DataView extends JetView {
	config() {
		return {
			view:"datatable",
			select:true,
			scroll:"y",
			columns:[
				{ id:"code", header:["SKU", {content:"textFilter"} ], sort:"text" },
				{ id:"name", header:["Name", {content:"textFilter"} ], sort:"text", fillspace:true },
				{ id:"price", header:"Price", sort:"int", format:webix.i18n.priceFormat },
				{ id:"quantity", header:"Quantity", sort:"int"}
			]
		};
	}
}
