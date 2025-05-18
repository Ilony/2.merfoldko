import { Pipe, PipeTransform } from '@angular/core';
import { Passenger } from '../models/passanger.model'; // helyesen add meg az elérési utat!

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {
  transform(utas: Passenger): string {
    return `${utas.firstName} ${utas.lastName}`;
  }
}
