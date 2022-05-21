import {Component, OnInit} from '@angular/core';
import {AppMainComponent} from './app.main.component';

@Component({
    selector: 'app-config',
    template: `
        <div class="layout-config" [ngClass]="{'layout-config-active': app.configActive}" (click)="app.onConfigClick($event)">
            <a style="cursor: pointer" id="layout-config-button" class="layout-config-button" (click)="onConfigButtonClick($event)">
                <i class="pi pi-cog"></i>
            </a>
            <a style="cursor: pointer" class="layout-config-close" (click)="onConfigCloseClick($event)">
                <i class="pi pi-times"></i>
            </a>
            <div class="layout-config-content">
                <h5 style="margin-top: 0">Input Style</h5>
                <div class="p-formgroup-inline">
                    <div class="p-field-radiobutton">
                        <p-radioButton name="inputStyle" value="outlined" [(ngModel)]="app.inputStyle" inputId="inputStyle1"></p-radioButton>
                        <label for="inputStyle1">Outlined</label>
                    </div>
                    <div class="p-field-radiobutton">
                        <p-radioButton name="inputStyle" value="filled" [(ngModel)]="app.inputStyle" inputId="inputStyle2"></p-radioButton>
                        <label for="inputStyle2">Filled</label>
                    </div>
                </div>

                <h5>Ripple Effect</h5>
                <p-inputSwitch [ngModel]="app.ripple" (onChange)="app.onRippleChange($event)"></p-inputSwitch>

                <h5>Menu Mode</h5>
                <div class="p-field-radiobutton">
                    <p-radioButton name="menuMode" value="static" [(ngModel)]="app.menuMode" inputId="static"></p-radioButton>
                    <label for="static">Static</label>
                </div>
                <div class="p-field-radiobutton">
                    <p-radioButton name="menuMode" value="overlay" [(ngModel)]="app.menuMode" inputId="overlay"></p-radioButton>
                    <label for="overlay">Overlay</label>
                </div>
                <div class="p-field-radiobutton">
                    <p-radioButton name="menuMode" value="slim" [(ngModel)]="app.menuMode" inputId="slim"></p-radioButton>
                    <label for="slim">Slim</label>
                </div>
                <div class="p-field-radiobutton">
                    <p-radioButton name="menuMode" value="horizontal" [(ngModel)]="app.menuMode" inputId="horizontal"></p-radioButton>
                    <label for="horizontal">Horizontal</label>
                </div>

                <h5>Menu Colors</h5>
                <div class="p-field-radiobutton">
                    <p-radioButton name="darkMenu" [value]="false" [(ngModel)]="app.lightMenu" inputId="lightMenu"></p-radioButton>
                    <label for="lightMenu">Dark</label>
                </div>
                <div class="p-field-radiobutton">
                    <p-radioButton name="darkMenu" [value]="true" [(ngModel)]="app.lightMenu" inputId="darkMenu"></p-radioButton>
                    <label for="darkMenu">Light</label>
                </div>

                <h5>Topbar Colors</h5>
                <div class="layout-themes">
                    <div *ngFor="let topbarColor of topbarColors">
                        <a style="cursor: pointer" (click)="changeTopbarColor(topbarColor.label, topbarColor.logo)" [ngStyle]="{'background-color': topbarColor.color}">
                            <i class="pi pi-check" *ngIf="app.topbarColor === topbarColor.label" [ngStyle]="{'color': topbarColor.logo === 'logo-olympia' ? '#333333' : ''}"></i>
                        </a>
                    </div>
                </div>

                <h5>Themes</h5>
                <div class="layout-themes">
                    <div *ngFor="let theme of themes">
                        <a style="cursor: pointer" (click)="changeTheme(theme.label)" [ngStyle]="{'background-color': theme.color}">
                            <i class="pi pi-check" *ngIf="themeColor === theme.label"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `
})
export class AppConfigComponent implements OnInit {

    topbarColors: any[];

    themes: any[];

    themeColor = 'blue-orange';

    constructor(public app: AppMainComponent) { }

    ngOnInit() {
        this.topbarColors = [
            {
                label: 'layout-topbar-light', logo:'logo-olympia', color: '#f4f4f4'
            },
            {
                label: 'layout-topbar-dark', logo:'logo-olympia-white', color: '#333333'
            },
            {
                label: 'layout-topbar-bluegrey', logo:'logo-olympia-white', color: '#4f5965'
            },
            {
                label: 'layout-topbar-purple', logo:'logo-olympia-white', color: '#78708c'
            },
            {
                label: 'layout-topbar-cyan', logo:'logo-olympia-white', color: '#AED1D2'
            },
            {
                label: 'layout-topbar-pink', logo:'logo-olympia-white', color: '#856D84'
            },
            {
                label: 'layout-topbar-teal', logo:'logo-olympia-white', color: '#769A93'
            },
            {
                label: 'layout-topbar-yellow', logo:'logo-olympia', color: '#F1E7CA'
            },
            {
                label: 'layout-topbar-lime', logo:'logo-olympia', color: '#DCE3BF'
            },
            {
                label: 'layout-topbar-green', logo:'logo-olympia', color: '#BFE3C2'
            }
        ];

        this.themes = [
            {
                label: 'bluegrey-teal', color: '#7B95A3'
            },
            {
                label: 'green-yellow', color: '#61b5a1'
            },
            {
                label: 'purple-blue', color: '#A882C9'
            },
            {
                label: 'blue-orange', color: '#98BED7'
            },
            {
                label: 'indigo-yellow', color: '#8287C9'
            },
            {
                label: 'amber-teal', color: '#E6C665'
            },
            {
                label: 'cyan-amber', color: '#7BCDD8'
            },
            {
                label: 'brown-cyan', color: '#B08D81'
            },
            {
                label: 'lime-purple', color: '#C1CC51'
            },
            {
                label: 'deeporange-blue', color: '#F68C6A'
            }
        ]
    }

    changeTheme(theme: string) {
        this.changeStyleSheetsColor('layout-css', 'layout-' + theme.split('-')[0] + '.css');
        this.changeStyleSheetsColor('theme-css', 'theme-' + theme + '.css');
        this.themeColor = theme;
    }

    changeStyleSheetsColor(id, value) {
        const element = document.getElementById(id);
        const urlTokens = element.getAttribute('href').split('/');
        urlTokens[urlTokens.length - 1] = value;

        const newURL = urlTokens.join('/');

        this.replaceLink(element, newURL);
    }

    replaceLink(linkElement, href) {
        if (this.isIE()) {
            linkElement.setAttribute('href', href);
        }
        else {
            const id = linkElement.getAttribute('id');
            const cloneLinkElement = linkElement.cloneNode(true);

            cloneLinkElement.setAttribute('href', href);
            cloneLinkElement.setAttribute('id', id + '-clone');

            linkElement.parentNode.insertBefore(cloneLinkElement, linkElement.nextSibling);

            cloneLinkElement.addEventListener('load', () => {
                linkElement.remove();
                cloneLinkElement.setAttribute('id', id);
            });
        }
    }

    isIE() {
        return /(MSIE|Trident\/|Edge\/)/i.test(window.navigator.userAgent);
    }

    onConfigButtonClick(event) {
        this.app.configActive = !this.app.configActive;
        event.preventDefault();
    }

    onConfigCloseClick(event) {
        this.app.configActive = false;
        event.preventDefault();
    }

    changeTopbarColor(topbarColor, logo) {
        this.app.topbarColor = topbarColor;
        const topbarLogoLink: HTMLImageElement = document.getElementById('topbar-logo') as HTMLImageElement;
        topbarLogoLink.src = 'assets/layout/images/' + logo + '.png';
    }
}
