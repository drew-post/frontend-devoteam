import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { User } from '../../models/users.model';
import { HttpClient } from '@angular/common/http';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-meet-the-team',
  templateUrl: './team-members.component.html',
  styleUrls: ['./team-members.component.scss']
})
export class TeamMembersComponent implements OnInit {
  public users : User[] = [];
  public searchInput: string = '';
  public isAscending: boolean = false;
  public isList: boolean = false;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe((response) => {
      this.users = response;
    });
  }

  changeDisplay(): void {
    this.isList = !this.isList;
  }

  search(searchInput: string) {
    this.searchInput = searchInput;
  }

  sort() {
    this.isAscending = !this.isAscending;
    this.users?.sort((a, b) => {
      let order = this.isAscending ? 1 : -1;

      return (
        a.name.last.toLowerCase() < b.name.last.toLowerCase()
        ? -1 * order : 1 * order
      );
    })
  }
}
