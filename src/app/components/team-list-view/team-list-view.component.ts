import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/users.model';

@Component({
  selector: 'app-team-list-view',
  templateUrl: './team-list-view.component.html',
  styleUrls: ['./team-list-view.component.scss']
})
export class TeamListViewComponent implements OnInit {
  @Input() users: User[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
