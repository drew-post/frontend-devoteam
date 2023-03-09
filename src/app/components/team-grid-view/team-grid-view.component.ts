import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/users.model';

@Component({
  selector: 'app-team-grid-view',
  templateUrl: './team-grid-view.component.html',
  styleUrls: ['./team-grid-view.component.scss']
})
export class TeamGridViewComponent implements OnInit {
  @Input() users: User[] = [];

  constructor() { }

  ngOnInit(): void {
  }
}
