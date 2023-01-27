import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { DigiKalaModule } from 'src/digi-kala/digi-kala.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DetailItemComponent } from './detail-item/detail-item.component';
import { CreateItemComponent } from './create-item/create-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { AlertModule } from 'ngx-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { ShoppingPageComponent } from './shopping-page/shopping-page.component';
import{DigiKalaService}from './service/digi-kala.service';
import { HttpClientModule } from '@angular/common/http';
// import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DetailItemComponent,
    CreateItemComponent,
    ShoppingPageComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    HttpClientModule
   
  ],
  providers: [DigiKalaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
