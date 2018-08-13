import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/others/pageNotFound.component';
import { GridComponent } from './components/grid/grid.component';
import { PaginationComponent } from './components/pagination/pagination.component'
import { GridService } from './service/grid.service';


const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'grid', component: GridComponent },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
    declarations: [AppComponent, HeaderComponent, HomeComponent,
        PageNotFoundComponent, GridComponent,
        PaginationComponent],
    providers: [GridService],
    bootstrap: [AppComponent]
})
export class AppModule { }
