import { Component, OnInit } from '@angular/core';
import { User } from '../models/users.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'team-members',
  templateUrl: './team-members.component.html',
  styleUrls: ['./team-members.component.scss']
})
export class TeamMembersComponent implements OnInit {
  unformattedResponse: any;
  results: User[] | undefined;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get<User[]>('https://randomuser.me/api/?results=50').subscribe(Response => {
     console.log(Response)
      this.unformattedResponse=Response;
      this.results=this.unformattedResponse.results; 
    });
  }

}
