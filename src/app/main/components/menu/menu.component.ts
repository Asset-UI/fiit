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
                    routerLink: ['/main/vitals'],
                    routerLinkActiveOptions: {
                        exact: true
                    }
                },
                {
                    label: 'Conditions',
                    icon: 'pi pi-fw pi-two',
                    styleClass: 'active',
                    routerLink: ['/main/conditions'],
                    routerLinkActiveOptions: {
                        exact: true
                    }
                },
                {
                    label: 'Visits',
                    icon: 'pi pi-fw pi-three',
                    styleClass: 'active',
                    routerLink: ['/main/visits'],
                    routerLinkActiveOptions: {
                        exact: true
                    }
                },
                {
                    label: 'Meds',
                    icon: 'pi pi-fw pi-four',
                    styleClass: 'active',
                    routerLink: ['/main/meds'],
                    routerLinkActiveOptions: {
                        exact: true
                    }
                },
                {
                    label: 'Allergies',
                    icon: 'pi pi-fw pi-two',
                    styleClass: 'active',
                    routerLink: ['/main/allergies'],
                    routerLinkActiveOptions: {
                        exact: true
                    }
                },
                {
                    label: 'Immunization',
                    icon: 'pi pi-fw pi-six',
                    styleClass: 'active',
                    routerLink: ['/main/immunization'],
                    routerLinkActiveOptions: {
                        exact: true
                    }
                },
                {   label: 'Medical Results',
                    icon: 'pi pi-fw pi-seven',
                    styleClass: 'active',
                    routerLink: ['/main/medical-results'],
                    routerLinkActiveOptions: {
                        exact: true
                    }
                },
                 { 
                    label: 'Notes', 
                    icon: 'pi pi-fw pi-eight',
                    styleClass: 'active',
                    routerLink: ['/main/notes'],
                    routerLinkActiveOptions: {
                        exact: true
                    }
                }
            ]
        }];
    }
}

