import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ingredientFormatter'
})
export class IngredientFormatterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {

  let ingredients =[];
  let measurements = [];
  Object.keys(value[0]).forEach(key=> {
  if(key.includes('strIngredient') && value[0][key]){
    return ingredients.push(value[0][key])
  }
  })


  Object.keys(value[0]).forEach(key=> {
    if(key.includes('strMeasure') && value[0][key]){
      return measurements.push(value[0][key])
    }
    })

  value[0].ingredients = ingredients;
  value[0].measurements = measurements;
  return value;
}
}
