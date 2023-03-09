import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamGridViewComponent } from './team-grid-view.component';

describe('TeamGridViewComponent', () => {
  let component: TeamGridViewComponent;
  let fixture: ComponentFixture<TeamGridViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamGridViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamGridViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
