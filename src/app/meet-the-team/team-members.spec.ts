import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TeamMembersComponent } from './team-members.component';
import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/users.model';
import { HttpClient } from '@angular/common/http';

describe('TeamMembersComponent', () => {
  let component: TeamMembersComponent;
  let fixture: ComponentFixture<TeamMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamMembersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch api results', () => {
    expect(component.ngOnInit()).toHaveBeenCalled();
  });
});
