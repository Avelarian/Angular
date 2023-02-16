import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "filter", pure: false })
export class FilterPipe implements PipeTransform {
  transform<T>(items: T[], filter: { property: keyof T; value: unknown }): any {
    return items.filter((item) => item[filter.property] === filter.value);
  }
}
