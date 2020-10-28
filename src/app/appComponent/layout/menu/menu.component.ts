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
                    label: 'Vitals',
                    icon: 'pi pi-fw pi-one',
                    styleClass: 'active',
                    routerLink: ['./vitals'],
                    routerLinkActiveOptions: {
                        exact: true
                    }
                },
                {
                    label: 'Conditions',
                    icon: 'pi pi-fw pi-two',
                    styleClass: 'active',
                    routerLink: ['./conditions'],
                    routerLinkActiveOptions: {
                        exact: true
                    }
                },
                {
                    label: 'Visits',
                    icon: 'pi pi-fw pi-three',
                    styleClass: 'active',
                    routerLink: ['./visits'],
                    routerLinkActiveOptions: {
                        exact: true
                    }
                },
                {
                    label: 'Meds',
                    icon: 'pi pi-fw pi-four',
                    styleClass: 'active',
                    routerLink: ['./meds'],
                    routerLinkActiveOptions: {
                        exact: true
                    }
                },
                {
                    label: 'Allergies',
                    icon: 'pi pi-fw pi-two',
                    styleClass: 'active',
                    routerLink: ['./allergies'],
                    routerLinkActiveOptions: {
                        exact: true
                    }
                },
                {
                    label: 'Immunization',
                    icon: 'pi pi-fw pi-six',
                    styleClass: 'active',
                    routerLink: ['./immunization'],
                    routerLinkActiveOptions: {
                        exact: true
                    }
                },
                {   label: 'Medical Results',
                    icon: 'pi pi-fw pi-seven',
                    styleClass: 'active',
                    routerLink: ['./medical-results'],
                    routerLinkActiveOptions: {
                        exact: true
                    }
                },
                 { 
                    label: 'Notes', 
                    icon: 'pi pi-fw pi-eight',
                    styleClass: 'active',
                    routerLink: ['./notes'],
                    routerLinkActiveOptions: {
                        exact: true
                    }
                },
                {
                    label: 'Home',
                    icon: 'pi pi-fw pi-one',
                    styleClass: 'active',
                    routerLink: ['./home'],
                    routerLinkActiveOptions: {
                        exact: true
                    }
                },
                {
                    label: 'Providers',
                    icon: 'pi pi-fw pi-two',
                    styleClass: 'active',
                    routerLink: ['./providers'],
                    routerLinkActiveOptions: {
                        exact: true
                    }
                },
                {
                    label: 'Reports',
                    icon: 'pi pi-fw pi-two',
                    styleClass: 'active',
                    routerLink: ['./reports'],
                    routerLinkActiveOptions: {
                        exact: true
                    }
                }
            ]
        }];
    }
}

