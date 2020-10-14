import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';



@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    items: MenuItem[];
    toggle: boolean = true;
    constructor(private router: Router) { }
    checkActiveState(givenLink) {
        console.log(this.router.url);
        if (this.router.url.indexOf(givenLink) === -1) {
            return false;
        } else {
            return true;
        }
    }
    ngOnInit() {
        this.items = [{
            items: [
                {
                    label: 'Home',
                    icon: 'pi pi-fw pi-one',
                    styleClass: 'active',
                    routerLink: ['/backend/home'],
                    routerLinkActiveOptions: {
                        exact: true
                    }
                },
                {
                    label: 'Providers',
                    icon: 'pi pi-fw pi-two',
                    styleClass: 'active',
                    routerLink: ['/backend/providers'],
                    routerLinkActiveOptions: {
                        exact: true
                    }
                },
                {
                    label: 'Reports',
                    icon: 'pi pi-fw pi-two',
                    styleClass: 'active',
                    routerLink: ['/backend/reports'],
                    routerLinkActiveOptions: {
                        exact: true
                    }
                }
            ]
        }];
    }
}

