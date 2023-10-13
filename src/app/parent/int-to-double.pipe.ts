import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'intToDouble'
})
export class IntToDoublePipe implements PipeTransform {
  transform(value: number): string {
    return value.toFixed(2);
  }
}
