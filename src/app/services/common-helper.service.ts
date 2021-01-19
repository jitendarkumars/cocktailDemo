import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { empty, Observable, of } from 'rxjs';
import { catchError, delay, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonHelperService {

  API_URL = environment.API_URL
  constructor(private http:HttpClient) { 
  }

  getDrinks = (drink)=> drink? this.http.get(`${this.API_URL}/search.php?s=${drink}`).pipe(
    map(x=>x),
    catchError(err=>console.log)
  ): of('');


  getDrinkDetail= (id)=> id? this.http.get(`${this.API_URL}/lookup.php?i=${id}`).pipe(
    map(x=>x),
    catchError(err=>console.log)
  ): of('');

  getIngredientDetail= (id)=> id? this.http.get(`${this.API_URL}/lookup.php?i=${id}`).pipe(
    map(x=>x),
    catchError(err=>console.log)
  ): of('');

  getCategoryList$ = this.http.get(`${this.API_URL}/list.php?c=list`).pipe(
    map(x=>x),
    catchError(err=>console.log)
  )

  getIngredientsList$ = this.http.get(`${this.API_URL}/list.php?i=list`).pipe(
    map(x=>x),
    catchError(err=>console.log)
  )

  getAlcoholicTypeList$ = this.http.get(`${this.API_URL}/list.php?a=list`).pipe(
    map(x=>x),
    catchError(err=>console.log)
  )

  
  getRandomDrink$ = this.http.get(`${this.API_URL}/random.php`).pipe(
    map(x=>x),
    catchError(err=>console.log)
  )


}
