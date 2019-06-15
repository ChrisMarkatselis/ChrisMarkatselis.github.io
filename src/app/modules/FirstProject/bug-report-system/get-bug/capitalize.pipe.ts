import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string): string {
    const lowercaseValue = value.toLowerCase();
    return lowercaseValue.substr(0, 1).toUpperCase() + lowercaseValue.substr(1);
}

}
