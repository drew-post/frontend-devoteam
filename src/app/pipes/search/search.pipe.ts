import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../../models/users.model';

@Pipe({
  name: 'search'
})

export class SearchPipe implements PipeTransform {
  // Take in a User array and a search input, convert input to lower case, filter User array to contain items with search input in first or last name -- if empty then return empty array
  transform(users: User[], searchInput: string): User[] {
    if (!searchInput) {
      return users;
    }
    searchInput = searchInput.toLowerCase();
    return users.filter(
      x => x?.name.first.toLowerCase().includes(searchInput) || x.name.last.toLowerCase().includes(searchInput)
    );
  }
}
