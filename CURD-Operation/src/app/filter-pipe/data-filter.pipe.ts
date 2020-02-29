import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'dataFilter'
})
export class DataFilterPipe implements PipeTransform {
  transform(value: any, mobileNo?: any): any {
    debugger
    if(mobileNo== undefined ||  mobileNo.length <= 9)
      return  value;
    else
    {
      return value.filter( data => data.mobileno  == mobileNo)
    }
  }

}
