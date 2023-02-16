import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "filter" })
export class FilterPipe implements PipeTransform {
  transform(items: any[], filter: any): any {
    return items.filter((item) => item[filter.property] === filter.value);
  }
}
