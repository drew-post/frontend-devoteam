import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { User } from '../../models/users.model';
import { HttpClient } from '@angular/common/http';
import { SearchPipe } from 'src/app/pipes/search/search.pipe';

@Component({
  selector: 'app-meet-the-team',
  templateUrl: './team-members.component.html',
  styleUrls: ['./team-members.component.scss']
})
export class TeamMembersComponent implements OnInit {
  public unformattedResponse: any;
  public results : User[] = [];
  public searchInput: string = '';
  public isAscending: boolean = false;
  public isList: boolean = false;

  constructor(private httpClient: HttpClient, private searchPipe: SearchPipe) { }

  ngOnInit(): void {
    this.httpClient.get<User[]>('https://randomuser.me/api/?results=50').subscribe(response => {
      this.unformattedResponse = response;
      this.results = this.unformattedResponse.results;
    });
  }

  changeDisplay(isList: boolean): void {
    this.isList = isList;
  }

  search(searchInput: any) {
    this.searchInput = searchInput;
  }

  sort(isAscending: boolean) {
    this.isAscending = isAscending;
    isAscending ? this.ascendingSort() : this.descendingSort();
  }

  ascendingSort() {
    this.results = this.results?.sort((n1, n2) => {
      if (n1.name.last < n2.name.last) {
        return 1;
      }
      if (n1.name.last > n2.name.last) {
        return -1;
      }
      return 0;
    });
  }

  descendingSort() {
    this.results = this.results?.sort((n1, n2) => {
      if (n1.name.last > n2.name.last) {
        return 1;
      }
      if (n1.name.last < n2.name.last) {
        return -1;
      }
      return 0;
    });
  }
}
