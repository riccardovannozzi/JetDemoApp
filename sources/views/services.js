import {JetView} from "webix-jet";
import DataView from "views/data";
import {services} from "models/services";

export default class ServiceView extends JetView{
	config(){
		return {
			rows:[
				{
					view:"toolbar", css:"subbar", padding:0,
					elements:[
						{
							css:"title", height:50, borderless:true,
							template:"<div class='header'>Services</div><div class='details'>( all services )</div>"
						}
					]
				},
				{ $subview:DataView }
			]
		};
	}
	ready(view){
		const grid = view.queryView({view:"datatable"});
		grid.hideColumn("quantity");
		grid.sync(services);
	}
}
