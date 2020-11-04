import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any, ...args: any): any {
    if(value){
      return value.slice().reverse();
    }
    return null;
  }

}

@Pipe({
  name: 'filter'
})
export class Filterpipe implements PipeTransform {

  transform(items: any[], args?: any): any {
   console.log(items)
}

}
