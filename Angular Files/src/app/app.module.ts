import { CartComponent } from './cart/cart.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { SearchComponent } from './search/search.component';
import {deserialize} from 'json-typescript-mapper';
import { LsideComponent } from './lside/lside.component';
import { FinalbillComponent } from './finalbill/finalbill.component';
import { RouterModule, Routes } from '@angular/router';
// import 'rxjs/add/operator/map';
// import 'rxjs/Rx';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
const appRoutes: Routes = [
  { path: 'finalbill', component: FinalbillComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    LsideComponent,
    CartComponent,
    FinalbillComponent
  ],
  imports: [
      RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
