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
  public results: User[] | undefined;
  public display: number = 1;
  public searchInput: string = '';

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get<User[]>('https://randomuser.me/api/?results=50').subscribe(Response => {
     console.log(Response)
      this.unformattedResponse=Response;
      this.results=this.unformattedResponse.results; 
    });
  }

  changeDisplay(mode: number): void {
    this.display = mode;
  }



}
