import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import {catchError, debounce, debounceTime, distinctUntilChanged, mergeMap, switchMap } from 'rxjs/operators'
import { CommonHelperService } from 'src/app/services/common-helper.service';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  implements OnInit{

  drinkSearchForm: FormGroup;
  filterForm: FormGroup;
  drinks$;

  constructor(private commonService:CommonHelperService) { 

    this.drinkSearchForm = new FormGroup({
      searchType: new FormControl('Name'),
      searchValue: new FormControl(''),
      // drinkType : new FormControl('')
    })

    this.filterForm =  new FormGroup({
      alcoholType: new FormControl(''),
      category: new FormControl('')
    })

  }

  getCategoryList$ = this.commonService.getCategoryList$.pipe(
    catchError(err=>console.log)
  );

  getIngredientsList$ = this.commonService.getIngredientsList$.pipe(
    catchError(err=>console.log)
  );

  getAlcoholicTypeList$ = this.commonService.getAlcoholicTypeList$.pipe(
    catchError(err=>console.log)
  );

  get searchType() {
    return this.drinkSearchForm.get('searchType')
  }

get searchValue() {
  return this.drinkSearchForm.get('searchValue')
}
 
get alcoholType() {
  return this.filterForm.get('alcoholType')
}
get category() {
  return this.filterForm.get('category')
}

  ngOnInit() {
    this.searchType.valueChanges.subscribe(value=>{
      this.drinkSearchForm.get('searchValue').patchValue('')
      this.drinkSearchForm.get('drinkType').patchValue('')
      this.filterForm.setValue({alcoholType:'',category:''})
    })

    this.drinks$=   this.searchValue.valueChanges.pipe(
      debounceTime(600),
      switchMap((searchTextValue) => {
      this.filterForm.setValue({alcoholType:'',category:''})
       return this.commonService.getDrinks(searchTextValue)
    }));  


    this.alcoholType.valueChanges.subscribe(_=> {
      this.category.patchValue('',{emitEvent:false})
    })
    this.category.valueChanges.subscribe(_=> {
      this.alcoholType.patchValue('',{emitEvent:false})
    })
  }


}
