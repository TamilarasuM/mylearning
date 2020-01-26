import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'dataFilter'
})
export class DataFilterPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if(args== undefined || args =="")
      return  value;
    else
    {
      return value.filter( data => data.mobileno  == args)
    }
  }

}
