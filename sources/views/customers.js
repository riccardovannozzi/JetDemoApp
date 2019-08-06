import {JetView} from "webix-jet";
import {customers} from "models/customers";

export default class CustomersView extends JetView{
	config(){
		return {
			rows:[
				{
					view:"toolbar", css:"subbar", padding:0,
					elements:[
						{
							height:50, css:"title", borderless:true,
							template:"<div class='header'>Customers</div><div class='details'>( info & editing )</div>"
						}
					]
				},
				{
					view:"datatable",
					select:true,
					scroll:"y",
					columns:[
						{ id:"name", header:["Name", {content:"textFilter"} ], sort:"text", fillspace:true },
						{ id:"email", header:"Email", sort:"text", adjust:"data" },
						{ id:"phone", header:"Phone", sort:"text", width:120 },
						{ id:"address", header:"Address", sort:"text", width:200 },
						{ id:"status", header:"Status", sort:"text", width:100 }
					]
				}
			]
		};
	}
	ready(view){
		view.queryView({view:"datatable"}).sync(customers);
	}
}
