import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { CommonHelperService } from 'src/app/services/common-helper.service';

@Component({
  selector: 'random-drink',
  templateUrl: './random-drink.component.html',
  styleUrls: ['./random-drink.component.scss']
})
export class RandomDrinkComponent implements OnInit {
  refresh$ = new BehaviorSubject(true);
  constructor(private commonService:CommonHelperService) { }

  getRandomDrink$ = this.refresh$.pipe(switchMap(() => this.commonService.getRandomDrink$));
  

  ngOnInit() {
  }

  getNewDrink() {
    this.refresh$.next(true)
  }
}
