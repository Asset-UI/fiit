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

    activeMenu(event) {
        let node;
        if (event.target.tagName === "A") {
            node = event.target;
        } else {
            node = event.target.parentNode;
        }
        let menuitem = document.getElementsByClassName("ui-menuitem-link");
        for (let i = 0; i < menuitem.length; i++) {
            menuitem[i].classList.remove("active");
        }
        node.classList.add("active")
    }
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
                    url: '/vitals',
                    routerLink: ['/vitals'],
                    routerLinkActiveOptions: { exact: true }
                },
                {
                    label: 'Conditions',
                    icon: 'pi pi-fw pi-two',
                    styleClass: '',
                    url: '/conditions',
                    routerLink: ['/conditions'],
                    routerLinkActiveOptions: { exact: true }
                },
                {
                    label: 'Visits',
                    icon: 'pi pi-fw pi-three',
                    styleClass: '',
                    url: '/visits',
                    routerLink: ['/visits'],
                    routerLinkActiveOptions: { exact: true }
                },
                {
                    label: 'Meds',
                    icon: 'pi pi-fw pi-four',
                    styleClass: '',
                    url: '/meds',
                    routerLink: ['/meds'],
                    routerLinkActiveOptions: { exact: true }
                },
                {
                    label: 'Allergies',
                    icon: 'pi pi-fw pi-two',
                    styleClass: '',
                    url: '/allergies',
                    routerLink: ['/allergies'],
                    routerLinkActiveOptions: { exact: true }
                },
                {
                    label: 'Immunization', icon: 'pi pi-fw pi-six', url: '/immunization',
                    routerLink: ['/immunization'],
                    routerLinkActiveOptions: { exact: true }
                },
                { label: 'Medical Results', icon: 'pi pi-fw pi-seven' },
                { 
                    label: 'Notes', 
                    icon: 'pi pi-fw pi-eight',
                    url: '/notes',
                    routerLink: ['/notes'],
                    routerLinkActiveOptions: { exact: true }
                }
            ]
        }];
    }
}

