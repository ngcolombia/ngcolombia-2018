import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'speakerPhotoUrl',
})
export class SpeakerPhotoUrlPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return `url(${value})`;
  }
}
