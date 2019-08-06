import {JetView} from "webix-jet";

export default class DashboardView extends JetView{
	config(){
		return {
			template:"<p class='title'>Dashboard</p>", css:"draft"
		};
	}
}
