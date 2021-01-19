import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CommonHelperService } from 'src/app/services/common-helper.service';

@Component({
  selector: 'app-drink-detail',
  templateUrl: './drink-detail.component.html',
  styleUrls: ['./drink-detail.component.scss']
})
export class DrinkDetailComponent implements OnInit {

  drinkDetail$:Observable<any>;
  constructor(private route:ActivatedRoute,private commonService:CommonHelperService) { 
   this.drinkDetail$= this.route.paramMap.pipe(
      switchMap(params => {
       const id = Number(params.get('id'));
       const iid = Number(params.get('iid'));
       console.log(params,params.get('id'),id,iid)
     return   id? this.commonService.getDrinkDetail(id) : iid? this.commonService.getIngredientDetail(iid) :of('')
      })
    );
  }

  ngOnInit() {
  }

}
