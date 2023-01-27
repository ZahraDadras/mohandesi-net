import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateItemComponent } from './create-item/create-item.component';
import { DetailItemComponent } from './detail-item/detail-item.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ShoppingPageComponent } from './shopping-page/shopping-page.component';


const routes: Routes = [
  {path : "" , component: HomePageComponent, pathMatch: 'full'},
  {path: "create" , component: CreateItemComponent},
  // {path: "view" , component: JobPatternViewComponent },
  {path: "detail-item", component: DetailItemComponent, data:{}},
  {path:'shopping-page', component:ShoppingPageComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
