import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'celsius',
})
export class CelsiusPipe implements PipeTransform {
  transform(tempKelvin: any) {
    const celsius = tempKelvin - 273.15;
    const celsisWithoutDecim = Math.floor(celsius);
    return celsisWithoutDecim;
  }
}
