import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'huDate', standalone: true })
export class HungarianDatePipe implements PipeTransform {
  transform(value: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric', month: '2-digit', day: '2-digit',
      hour: '2-digit', minute: '2-digit'
    };
    return new Intl.DateTimeFormat('hu-HU', options).format(value);
  }
}
