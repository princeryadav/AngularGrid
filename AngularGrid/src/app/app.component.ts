import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<header></header>
                <div>
                <router-outlet></router-outlet>
               </div>`,
})
export class AppComponent { }
