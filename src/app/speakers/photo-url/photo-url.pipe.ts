import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'photoUrl',
})
export class PhotoUrlPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return `url(${value})`;
  }
}
