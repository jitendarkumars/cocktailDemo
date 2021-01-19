import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { DrinkDetailComponent } from './components/drink-detail/drink-detail.component';
import { LoaderComponent } from './components/loader/loader.component';
import { LoaderService } from './services/loader.service';
import { InterceptorService } from './services/interceptor.service';
import { RandomDrinkComponent } from './components/random-drink/random-drink.component';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { IngredientFormatterPipe } from './pipes/ingredient-formatter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DrinkDetailComponent,
    LoaderComponent,
    RandomDrinkComponent,
    FilterPipePipe,
    IngredientFormatterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
