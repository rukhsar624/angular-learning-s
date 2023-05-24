import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value:any, searchTerm:string[]): any {
    console.log(value,searchTerm , "hello");
    
    return value.filter(function(search:any){
      return search.name.toLowerCase().indexOf(searchTerm) > -1

    })

  }

}
