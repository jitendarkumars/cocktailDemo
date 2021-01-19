import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    // console.log(value,args)
    const [argumentsvalue] =args;
    const [alcoholType,category] =argumentsvalue;

    if(alcoholType){
     return value.filter(x=> x.strAlcoholic ===alcoholType)
    }
    if(category) {
      return value.filter(x=> x.strCategory === category)
    }
    return value;
  }

}
