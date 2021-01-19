import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DrinkDetailComponent } from './components/drink-detail/drink-detail.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {path:'' ,component:HomeComponent},
  {path:'home' ,component:HomeComponent},
  {path:'details' ,component:DrinkDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
