import {JetView, plugins} from "webix-jet";
import {data} from "models/menu";

export default class MenuView extends JetView {
	config() {
		return {
			width:180,
			view:"menu",
			layout:"y",
			select:true,
			template:(obj) => {
				return `<span class='webix_icon mdi mdi-${obj.icon}'></span>${obj.value}`;
			}
		};
	}
	init(view) {
		view.parse(data);
		this.use(plugins.Menu, view);
	}
}
