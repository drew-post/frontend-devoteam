import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/users.model';

@Pipe({
    name:'search'
})

export class SearchPipe implements PipeTransform {
    transform(users: User[], searchInput: string): User[]{     
        if(!searchInput) {
            return  [];
        }
       searchInput = searchInput.toLowerCase();
       return users.filter(
           x => x?.name.first.toLowerCase().includes(searchInput) || x.name.last.toLowerCase().includes(searchInput)
       )
     }
}