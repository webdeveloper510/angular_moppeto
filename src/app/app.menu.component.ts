import { Component, OnInit } from '@angular/core';
import { AppMainComponent } from './app.main.component';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[];

    constructor(public app: AppMainComponent) { }

    ngOnInit() {
        this.model = [
            { label: '', icon: 'pi pi-folder', routerLink: ['/']},
            { label: "Vendor subscription", icon: 'pi pi-folder', routerLink: ['/vendor-subscription']},
            { label: 'Subscription pricing', icon: 'pi pi-folder', routerLink: ['/subscription-pricing']},
            { label: 'Marketing pricing', icon: 'pi pi-folder', routerLink: ['/marketing-pricing']},
        ];
    }

    onMenuClick(event) {
        if (!this.app.isHorizontal()) {
        }
        this.app.onMenuClick(event);
    }
}
