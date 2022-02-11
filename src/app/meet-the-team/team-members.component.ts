import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/users.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'team-members',
  templateUrl: './team-members.component.html',
  styleUrls: ['./team-members.component.scss']
})
export class TeamMembersComponent implements OnInit {
  public unformattedResponse: any;
  public results !: User[];
  public display: number = 1;
  public searchInput: string = '';
  public isAscending: boolean = false;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get<User[]>('https://randomuser.me/api/?results=50').subscribe(Response => {
      this.unformattedResponse=Response;
      this.results=this.unformattedResponse.results; 
    });
  }

  changeDisplay(mode: number): void {
    this.display = mode;
  }

  send() {
    this.isAscending?this.ascendingSort():this.descendingSort();
  }

  ascendingSort() {
    this.isAscending = false;
    this.results = this.results?.sort((n1,n2) => {
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
    this.isAscending = true;
    this.results = this.results?.sort((n1,n2) => {
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
